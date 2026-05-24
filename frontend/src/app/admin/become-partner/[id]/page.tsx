'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import styles from './vendor-details.module.css';
import { 
  Building2, 
  User, 
  Phone, 
  Mail, 
  MapPin, 
  Wrench, 
  Clock, 
  FileText, 
  ShieldCheck, 
  CreditCard,
  Wallet,
  CheckCircle2,
  Eye,
  Download,
  XCircle,
  CheckCircle
} from 'lucide-react';

export default function VendorDetailsPage() {
  const params = useParams();
  const id = params.id as string;
  const [vendor, setVendor] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    const fetchVendor = async () => {
      try {
        const res = await fetch(`/api/vendors/${id}`);
        const data = await res.json();
        setVendor(data);
      } catch (err) {
        console.error('Error fetching vendor:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchVendor();
  }, [id]);

  if (loading) return <div style={{padding: '2rem'}}>Loading vendor details...</div>;
  if (!vendor) return <div style={{padding: '2rem'}}>Vendor not found</div>;

  const dateObj = new Date(vendor.created);
  const dateStr = dateObj.toLocaleDateString('en-US', {month: 'short', day: 'numeric', year: 'numeric'});
  const timeStr = dateObj.toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit'});

  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.pageTitle}>Vendor Details</h1>

      {/* HEADER CARD */}
      <div className={styles.headerCard}>
        <div className={styles.headerIcon}>
          <Building2 size={32} />
        </div>
        <div className={styles.headerInfo}>
          <div className={styles.headerTitleRow}>
            <span className={styles.vendorName}>{vendor.businessName}</span>
            <span className={styles.statusPill}>{vendor.status}</span>
          </div>
          <div className={styles.headerMeta}>
            <span className={styles.metaItem}>{vendor.uiId}</span>
            <span>•</span>
            <span className={styles.metaItem}>
              <Clock size={14} /> Applied: {dateStr} at {timeStr}
            </span>
          </div>
        </div>
      </div>

      {/* MAIN GRID */}
      <div className={styles.layoutGrid}>
        
        {/* LEFT COLUMN */}
        <div className={styles.leftCol}>
          
          {/* Basic Information */}
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>Basic Information</h2>
            <div className={styles.infoGrid2Col}>
              <div className={styles.infoItem}>
                <div className={styles.infoItemHeader}>
                  <Building2 size={16} />
                  <span>Business Name</span>
                </div>
                <div className={styles.infoValue}>{vendor.businessName}</div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.infoItemHeader}>
                  <User size={16} />
                  <span>Contact Person</span>
                </div>
                <div className={styles.infoValue}>{vendor.contactPerson}</div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.infoItemHeader}>
                  <Phone size={16} />
                  <span>Phone Number</span>
                </div>
                <div className={styles.infoValue}>{vendor.phone}</div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.infoItemHeader}>
                  <Mail size={16} />
                  <span>Email Address</span>
                </div>
                <div className={styles.infoValue}>{vendor.email}</div>
              </div>

              <div className={styles.infoItem} style={{ gridColumn: '1 / -1' }}>
                <div className={styles.infoItemHeader}>
                  <MapPin size={16} />
                  <span>Full Address</span>
                </div>
                <div className={styles.infoValue}>{vendor.address}</div>
              </div>
            </div>
          </div>

          {/* Service Details */}
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>Service Details</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              
              {Array.isArray(vendor.services) && vendor.services.length > 0 ? vendor.services.map((service: any, index: number) => (
                <div key={index} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', paddingBottom: index !== vendor.services.length - 1 ? '1.5rem' : 0, borderBottom: index !== vendor.services.length - 1 ? '1px solid #f1f5f9' : 'none' }}>
                  <div className={styles.infoGrid2Col}>
                    <div className={styles.infoItem}>
                      <div className={styles.infoItemHeader} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Wrench size={16} />
                        <span>Service</span>
                        {service.serviceCategory === 'Other' && (
                          <span style={{ fontSize: '0.75rem', backgroundColor: '#dcfce7', color: '#16a34a', padding: '0.1rem 0.5rem', borderRadius: '1rem', border: '1px solid #4ade80', fontWeight: 500 }}>Other</span>
                        )}
                      </div>
                      <div className={styles.infoValue} style={{ marginTop: '0.25rem' }}>{service.serviceCategory === 'Other' ? service.customServiceName : service.serviceCategory}</div>
                    </div>

                    <div className={styles.infoItem}>
                      <div className={styles.infoItemHeader}>
                        <Clock size={16} />
                        <span>Experience</span>
                      </div>
                      <div className={styles.infoValue} style={{ marginTop: '0.25rem' }}>{service.experience}</div>
                    </div>
                  </div>
                  
                  {service.serviceCategory === 'Other' && service.serviceDescription && (
                    <div className={styles.infoItem} style={{ marginTop: '0.5rem' }}>
                      <div className={styles.infoItemHeader}>
                        <FileText size={16} />
                        <span>Service Description</span>
                      </div>
                      <div className={styles.infoValue} style={{ lineHeight: '1.5', marginTop: '0.5rem' }}>{service.serviceDescription}</div>
                    </div>
                  )}
                </div>
              )) : (
                <div className={styles.infoItem}>
                  <div className={styles.infoItemHeader}>
                    <Wrench size={16} />
                    <span>Service</span>
                  </div>
                  <div className={styles.infoValue}>Data pending</div>
                </div>
              )}
            </div>
          </div>

          {/* Documents */}
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>Documents</h2>
            <div className={styles.docList}>
              
              <div className={styles.docItem}>
                <div className={styles.docLeft}>
                  <div className={styles.docIconBg}><FileText size={20} /></div>
                  <div className={styles.docInfo}>
                    <span className={styles.docName}>{vendor.agreementUrl ? 'VyessFMS_Agreement.pdf' : 'Agreement Pending'}</span>
                    <span className={styles.docStatus}><CheckCircle2 size={12} /> {vendor.agreementUrl ? 'Verified' : 'Pending'}</span>
                  </div>
                </div>
                <div className={styles.docActions}>
                  {vendor.agreementUrl && (
                    <a href={vendor.agreementUrl} target="_blank" rel="noopener noreferrer" className={styles.docBtn}><Eye size={18} /></a>
                  )}
                  {vendor.agreementUrl && (
                    <a href={vendor.agreementUrl} download className={styles.docBtn}><Download size={18} /></a>
                  )}
                </div>
              </div>

              {/* Document rows for Aadhar and PAN */}
              <div className={styles.docItem}>
                <div className={styles.docLeft}>
                  <div className={styles.docIconBg}><FileText size={20} /></div>
                  <div className={styles.docInfo}>
                    <span className={styles.docName}>Aadhaar Card.jpg</span>
                    <span className={styles.docStatus}><CheckCircle2 size={12} /> {vendor.aadhar ? 'Verified' : 'Pending'}</span>
                  </div>
                </div>
              </div>

              <div className={styles.docItem}>
                <div className={styles.docLeft}>
                  <div className={styles.docIconBg}><FileText size={20} /></div>
                  <div className={styles.docInfo}>
                    <span className={styles.docName}>PAN Card.pdf</span>
                    <span className={styles.docStatus}><CheckCircle2 size={12} /> {vendor.pan ? 'Verified' : 'Pending'}</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* RIGHT COLUMN */}
        <div className={styles.rightCol}>
          
          {/* ID Proof */}
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>ID Proof</h2>
            <div className={styles.sideList}>
              
              <div className={styles.sideItem}>
                <div className={styles.sideItemHeader}>
                  <ShieldCheck size={16} />
                  <span>GST Number</span>
                </div>
                <div className={styles.sideItemValue}>{vendor.gstNumber || 'Not provided'}</div>
              </div>

              <div className={styles.sideItem}>
                <div className={styles.sideItemHeader}>
                  <ShieldCheck size={16} />
                  <span>Aadhaar Number</span>
                </div>
                <div className={styles.sideItemValue}>{vendor.aadhar || 'Not provided'}</div>
              </div>

              <div className={styles.sideItem}>
                <div className={styles.sideItemHeader}>
                  <ShieldCheck size={16} />
                  <span>PAN Number</span>
                </div>
                <div className={styles.sideItemValue}>{vendor.pan || 'Not provided'}</div>
              </div>

            </div>
          </div>

          {/* Bank Details */}
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>Bank Details</h2>
            <div className={styles.sideList}>
              
              <div className={styles.sideItem}>
                <div className={styles.sideItemHeader}>
                  <User size={16} />
                  <span>Account Holder Name</span>
                </div>
                <div className={styles.sideItemValue}>{vendor.accountHolderName}</div>
              </div>

              <div className={styles.sideItem}>
                <div className={styles.sideItemHeader}>
                  <CreditCard size={16} />
                  <span>Account Number</span>
                </div>
                <div className={styles.sideItemValue}>{vendor.accountNumber}</div>
              </div>

              <div className={styles.sideItem}>
                <div className={styles.sideItemHeader}>
                  <Building2 size={16} />
                  <span>IFSC Code</span>
                </div>
                <div className={styles.sideItemValue}>{vendor.ifscCode}</div>
              </div>

              <div className={styles.sideItem}>
                <div className={styles.sideItemHeader}>
                  <Wallet size={16} />
                  <span>UPI ID</span>
                </div>
                <div className={styles.sideItemValue}>{vendor.upiId}</div>
              </div>

            </div>
          </div>

          {/* Action Buttons */}
          <div className={styles.actionButtons}>
            <button className={styles.btnReject}>
              <XCircle size={18} />
              Reject
            </button>
            <button className={styles.btnApprove}>
              <CheckCircle size={18} />
              Approve & Add Vendor
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
