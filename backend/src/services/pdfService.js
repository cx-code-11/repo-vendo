import PDFDocument from 'pdfkit';
import { PassThrough } from 'stream';

export const generateMSA = async (vendorData, minioClient, bucketName) => {
  return new Promise((resolve, reject) => {
    try {
      const doc = new PDFDocument({ margin: 50 });
      const stream = new PassThrough();

      const filename = `msa_${Date.now()}_${vendorData.businessName.replace(/\s+/g, '_').toLowerCase()}.pdf`;

      // Upload the stream to MinIO
      minioClient.putObject(bucketName, filename, stream, {
        'Content-Type': 'application/pdf'
      }).then(() => {
        resolve(filename);
      }).catch(reject);

      // Construct the PDF
      doc.fontSize(20).text('MASTER SERVICE AGREEMENT', { align: 'center' });
      doc.moveDown();
      
      const today = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
      doc.fontSize(12).text(`Date: ${today}`, { align: 'right' });
      doc.moveDown();

      doc.text(`This Master Service Agreement ("Agreement") is made and entered into on ${today}, by and between:`);
      doc.moveDown();
      doc.font('Helvetica-Bold').text('Vyess Technologies Inc.', { continued: true }).font('Helvetica').text(' (the "Company")');
      doc.text('AND');
      doc.font('Helvetica-Bold').text(`${vendorData.businessName}`, { continued: true }).font('Helvetica').text(' (the "Vendor")');
      doc.text(`Address: ${vendorData.address}`);
      doc.moveDown();

      doc.font('Helvetica-Bold').text('1. Services to be Provided');
      doc.font('Helvetica').text(`The Vendor agrees to provide services under the category of ${vendorData.serviceCategory}.`);
      doc.text(`Description: ${vendorData.serviceDescription}`);
      doc.moveDown();

      doc.font('Helvetica-Bold').text('2. Payment Terms');
      doc.font('Helvetica').text(`Payments will be remitted to the Vendor's designated account at ${vendorData.bankName} (Account ending in ${vendorData.accountNumber.slice(-4)}).`);
      doc.moveDown();

      doc.font('Helvetica-Bold').text('3. Term and Termination');
      doc.font('Helvetica').text('This Agreement shall commence on the Effective Date and remain in effect until terminated by either party with 30 days written notice.');
      doc.moveDown(3);

      doc.font('Helvetica-Bold').text('Signatures', { underline: true });
      doc.moveDown();

      // We handle base64 signature images
      if (vendorData.signature) {
        try {
          // data:image/png;base64,iVBORw0KGgo...
          const base64Data = vendorData.signature.replace(/^data:image\/png;base64,/, '');
          const imgBuffer = Buffer.from(base64Data, 'base64');
          doc.image(imgBuffer, 50, doc.y, { width: 150 });
          doc.moveDown(4);
        } catch (e) {
          console.error('Failed to embed signature image:', e);
        }
      }

      doc.text('_____________________________');
      doc.text(`${vendorData.contactPerson} (Vendor)`);

      doc.end();
      doc.pipe(stream);
    } catch (error) {
      reject(error);
    }
  });
};
