import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import {config} from 'dotenv';
import {connectDB, disconnectDB} from './config/db.js';


connectDB();

// import routes
import initialRoutes from './routes/initialRoutes.js';
import order from './routes/orderRoutes.js';
import payment from './routes/paymentRoutes.js';
import authRoutes from './routes/authRoutes.js';

import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';
import * as Minio from 'minio';
import { generateMSA } from './services/pdfService.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// 🔹 Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

// Configure MinIO Client
const minioClient = new Minio.Client({
  endPoint: process.env.MINIO_ENDPOINT || 'localhost',
  port: parseInt(process.env.MINIO_PORT) || 9000,
  useSSL: process.env.MINIO_USE_SSL === 'true',
  accessKey: process.env.MINIO_ROOT_USER || 'admin',
  secretKey: process.env.MINIO_ROOT_PASSWORD || 'password123',
});

const BUCKET_NAME = 'vyess-documents';

// Initialize bucket
(async () => {
  try {
    const exists = await minioClient.bucketExists(BUCKET_NAME);
    if (!exists) {
      await minioClient.makeBucket(BUCKET_NAME, 'us-east-1');
      console.log(`Bucket ${BUCKET_NAME} created successfully`);
    } else {
      console.log(`Bucket ${BUCKET_NAME} already exists`);
    }
  } catch (error) {
    console.error('MinIO Bucket Init Error:', error);
  }
})();

// Configure Multer for memory storage
const storage = multer.memoryStorage();
const upload = multer({ storage });

app.post('/api/upload', upload.fields([{ name: 'aadhaar' }, { name: 'pan' }, { name: 'gst' }, { name: 'agreement' }]), async (req, res) => {
  try {
    const urls = {};
    const baseUrl = `${req.protocol}://${req.get('host')}/api/files/`;
    
    const uploadToMinio = async (file) => {
      const ext = path.extname(file.originalname);
      const filename = `${Date.now()}-${Math.round(Math.random() * 1E9)}${ext}`;
      await minioClient.putObject(BUCKET_NAME, filename, file.buffer, file.size, {
        'Content-Type': file.mimetype
      });
      return baseUrl + filename;
    };

    if (req.files.aadhaar) urls.aadhaar = await uploadToMinio(req.files.aadhaar[0]);
    if (req.files.pan) urls.pan = await uploadToMinio(req.files.pan[0]);
    if (req.files.gst) urls.gst = await uploadToMinio(req.files.gst[0]);
    if (req.files.agreement) urls.agreement = await uploadToMinio(req.files.agreement[0]);

    res.json({ urls });
  } catch (error) {
    console.error('Upload Error:', error);
    res.status(500).json({ error: 'Failed to upload files' });
  }
});

app.get('/api/files/:filename', async (req, res) => {
  try {
    const stream = await minioClient.getObject(BUCKET_NAME, req.params.filename);
    stream.pipe(res);
  } catch (err) {
    res.status(404).json({ error: 'File not found' });
  }
});

import prisma from './config/db.js';

app.post('/api/vendors/register', async (req, res) => {
  try {
    const vendorData = req.body;
    
    // Generate MSA PDF
    const msaFilename = await generateMSA(vendorData, minioClient, BUCKET_NAME);
    const msaUrl = `${req.protocol}://${req.get('host')}/api/files/${msaFilename}`;

    // Save to Prisma DB
    const newVendor = await prisma.vendorRegistrationRequest.create({
      data: {
        uiId: `VND-${Date.now()}`,
        businessName: vendorData.businessName || 'Unknown',
        contactPerson: vendorData.contactPerson || 'Unknown',
        email: vendorData.email || 'unknown@example.com',
        phone: vendorData.phone || '0000000000',
        address: vendorData.address || 'Unknown',
        accountHolderName: vendorData.accountHolderName || 'Unknown',
        accountNumber: vendorData.accountNumber || '0000000000',
        ifscCode: vendorData.ifscCode || 'UNKNOWN',
        upiId: vendorData.upiId || 'unknown@upi',
        gstNumber: vendorData.gstNumber || null,
        aadhar: vendorData.aadhar || '000000000000',
        pan: vendorData.pan || 'XXXXX0000X',
        services: vendorData.services || [],
        agreementUrl: msaUrl,
      }
    });

    res.json({ message: 'Vendor registered successfully', msaUrl, vendor: newVendor });
  } catch (error) {
    console.error('Registration Error:', error);
    res.status(500).json({ error: 'Failed to register vendor' });
  }
});

// GET all vendors for Admin Dashboard
app.get('/api/vendors', async (req, res) => {
  try {
    const vendors = await prisma.vendorRegistrationRequest.findMany({
      orderBy: { created: 'desc' }
    });
    res.json(vendors);
  } catch (error) {
    console.error('Error fetching vendors:', error);
    res.status(500).json({ error: 'Failed to fetch vendors' });
  }
});

// GET single vendor details
app.get('/api/vendors/:id', async (req, res) => {
  try {
    const vendor = await prisma.vendorRegistrationRequest.findUnique({
      where: { id: req.params.id }
    });
    if (!vendor) return res.status(404).json({ error: 'Vendor not found' });
    res.json(vendor);
  } catch (error) {
    console.error('Error fetching vendor:', error);
    res.status(500).json({ error: 'Failed to fetch vendor details' });
  }
});

// API Routes
app.use('/api/auth', authRoutes);
app.use('/payments', payment);
app.use('/orders', order);
app.use('/', initialRoutes);

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

process.on("unhandledRejection", (err) => {
    console.error("Unhandled Rejection:", err);
    if(server){
        server.close(async()=>{
        await disconnectDB();
        process.exit(1);
    })
    }
})

process.on("uncaughtException", async (err) => {
    console.error("Uncaught Exception:", err);
    await disconnectDB();
    process.exit(1);
})

process.on("SIGINT", async () => {
    console.log("SIGINT received, shutting down gracefully...");
    server.close(async () => {
        await disconnectDB();
        process.exit(0);
    });
});