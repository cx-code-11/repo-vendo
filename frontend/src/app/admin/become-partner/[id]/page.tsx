'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import styles from './vendorDetailsOutlet.module.css';

export default function VendorDetailsPage() {
    const params = useParams();
    const id = params.id as string;
    const [registration, setRegistration] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);

    const updateStatus = async (newStatus: string) => {
        try {
            const res = await fetch(`/api/vendors/${id}/status`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ status: newStatus }),
            });
            if (res.ok) {
                setRegistration((prev: any) => ({ ...prev, status: newStatus }));
            } else {
                alert('Failed to update status');
            }
        } catch (err) {
            console.error('Failed to update status:', err);
            alert('Error updating status');
        }
    };

    useEffect(() => {
        if (!id) return;
        const fetchVendor = async () => {
            try {
                const res = await fetch(`/api/vendors/${id}`);
                const data = await res.json();
                
                if (!res.ok) {
                    setError('Unable to load registration');
                    return;
                }
                
                setRegistration(data);
                
                if (data.status === 'Pending') {
                    await fetch(`/api/vendors/${id}/status`, {
                        method: 'PATCH',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ status: 'Reviewed' }),
                    });
                    setRegistration((prev: any) => ({ ...prev, status: 'Reviewed' }));
                }
            } catch (err) {
                console.error('Error fetching vendor:', err);
                setError('Unable to load registration details');
            } finally {
                setLoading(false);
            }
        };
        fetchVendor();
    }, [id]);

    if (loading) {
        return (
            <div className={styles.mainContent}>
                <p>Loading vendor details...</p>
            </div>
        );
    }

    if (error || !registration) {
        return (
            <div className={styles.mainContent}>
                <p style={{ color: '#DC2626' }}>{error || 'No registration data found'}</p>
            </div>
        );
    }

    const formatDate = (dateString: string) => {
        if (!dateString) return 'Oct 24, 2023 at 10:30 AM';
        const date = new Date(dateString);
        return date.toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
    };

    return (
        <div className={styles.mainContent}>
            {/* Top Main Heading */}
            <header className={styles.header}>
                <h1 className={styles.pageTitle}>Vendor Details</h1>
            </header>

            {/* Profile Hero Header Banner */}
            <div className={styles.heroCard}>
                <div className={styles.heroLeft}>
                    <div className={styles.heroIconBox}>
                        <img src="/assets/admin_icons/icon-vendorDetailsCompanyLogo.svg" alt="Company Logo" className={styles.heroIcon} />
                    </div>
                    <div>
                        <div className={styles.heroTitleRow}>
                            <h2 className={styles.vendorHeading}>{registration.businessName || 'Cool Air Tech'}</h2>
                            <span className={`${styles.statusBadgeHero} ${
                                registration.status === 'Approved' ? styles.statusApproved : 
                                registration.status === 'Rejected' ? styles.statusRejected : 
                                registration.status === 'Reviewed' ? styles.statusReviewed : 
                                styles.statusPending
                            }`}>
                                <span className={styles.statusDotHero}></span>
                                {registration.status || 'Pending'}
                            </span>
                        </div>
                        <div className={styles.heroMetaRow}>
                            <span>{registration.uiId || 'REC-00028'}</span>
                            <span className={styles.bullet}>•</span>
                            <span className={styles.metaTime}>
                                <img src="/assets/admin_icons/icon-vendorDetailsTime.svg" alt="Time Icon" className={styles.metaTimeIcon} />
                                Applied: {formatDate(registration.created)}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Two Column Section Layout */}
            <div className={styles.contentGrid}>

                {/* Left Core Profile Content Column */}
                <div className={styles.leftColumn}>

                    {/* Basic Information Section */}
                    <div className={styles.card}>
                        <h3 className={styles.cardTitle}>Basic Information</h3>
                        <div className={styles.basicInfoGrid}>
                            <div className={styles.fieldRow}>
                                <img src="/assets/admin_icons/icon-vendorDetailsBusinessName.svg" alt="Company Logo" />
                                <div>
                                    <label className={styles.fieldLabel}>Business Name</label>
                                    <div className={styles.fieldValue}>{registration.businessName || 'Cool Air Tech Services Pvt. Ltd.'}</div>
                                </div>
                            </div>
                            <div className={styles.fieldRow}>
                                <img src="/assets/admin_icons/icon-vendorDetailsContactPerson.svg" alt="Contact Person" />
                                <div>
                                    <label className={styles.fieldLabel}>Contact Person</label>
                                    <div className={styles.fieldValue}>{registration.contactPerson || 'Rahul Sharma'}</div>
                                </div>
                            </div>
                            <div className={styles.fieldRow}>
                                <img src="/assets/admin_icons/icon-vendorDetailsPhoneNumber.svg" alt="Phone Number" />
                                <div>
                                    <label className={styles.fieldLabel}>Phone Number</label>
                                    <div className={styles.fieldValue}>{registration.phone || '+91 98765 43210'}</div>
                                </div>
                            </div>
                            <div className={styles.fieldRow}>
                                <img src="/assets/admin_icons/icon-vendorDetailsEmailAddress.svg" alt="Email Address" />
                                <div>
                                    <label className={styles.fieldLabel}>Email Address</label>
                                    <div className={styles.fieldValue}>{registration.email || 'contact@coolairtech.in'}</div>
                                </div>
                            </div>
                            <div className={`${styles.fieldRow} ${styles.fullWidthField}`}>
                                <img src="/assets/admin_icons/icon-vendorDetailsFullAddress.svg" alt="Full Address" />
                                <div>
                                    <label className={styles.fieldLabel}>Full Address</label>
                                    <div className={styles.fieldValue}>
                                        {registration.address || '123, Tech Park, Phase 2, Electronic City, Bangalore, Karnataka 560100'}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Service Details Section */}
                    <div className={styles.card}>
                        <h3 className={styles.cardTitle}>Service Details</h3>
                        <div className={styles.serviceRowsContainer}>
                            {registration.services && registration.services.length > 0 ? (
                                registration.services.map((service: any, index: number) => (
                                    <div key={index} className={styles.serviceItemWrapper}>
                                        <div className={styles.serviceSplitRow}>
                                            <div className={styles.fieldRow}>
                                                <img src="/assets/admin_icons/icon-vendorDetailsService.svg" alt="Service" />
                                                <div>
                                                    {service.serviceCategory === 'Other' ? (
                                                        <div className={styles.labelWithTagContainer}>
                                                            <label className={styles.fieldLabel}>Service</label>
                                                            <span className={styles.inlineOtherTag}>Other</span>
                                                        </div>
                                                    ) : (
                                                        <label className={styles.fieldLabel}>Service</label>
                                                    )}
                                                    <div className={styles.fieldValue}>
                                                        {service.serviceCategory === 'Other' ? service.customServiceName : service.serviceCategory}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={styles.fieldRow}>
                                                <img src="/assets/admin_icons/icon-vendorDetailsTime.svg" alt="Experience" />
                                                <div>
                                                    <label className={styles.fieldLabel}>Experience</label>
                                                    <div className={styles.fieldValue}>
                                                        {service.experience}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {service.serviceCategory === 'Other' && service.serviceDescription && (
                                            <div className={styles.descriptionRow}>
                                                <img src="/assets/admin_icons/icon-vendorDetailsDescription.svg" alt="Description" />
                                                <div>
                                                    <label className={styles.fieldLabelDesc}>Service Description</label>
                                                    <div className={styles.descriptionText}>
                                                        {service.serviceDescription}
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))
                            ) : (
                                <div className={styles.serviceItemWrapper}>
                                    <div className={styles.serviceSplitRow}>
                                        <div className={styles.fieldRow}>
                                            <img src="/assets/admin_icons/icon-vendorDetailsService.svg" alt="Service" />
                                            <div>
                                                <label className={styles.fieldLabel}>Service</label>
                                                <div className={styles.fieldValue}>Data pending</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Documents Section */}
                    <div className={styles.card}>
                        <h3 className={styles.cardTitle}>Documents</h3>
                        <div className={styles.docList}>
                            {[
                                { name: 'Aadhaar Card', url: registration.aadhar },
                                { name: 'PAN Card', url: registration.pan },
                                { name: 'GST Certificate', url: registration.gstNumber },
                                { name: 'Signed Agreement', url: registration.agreementUrl }
                            ].filter(doc => doc.url).length > 0 ? (
                                [
                                    { name: 'Aadhaar Card', url: registration.aadhar },
                                    { name: 'PAN Card', url: registration.pan },
                                    { name: 'GST Certificate', url: registration.gstNumber },
                                    { name: 'Signed Agreement', url: registration.agreementUrl }
                                ].filter(doc => doc.url).map((doc, index) => (
                                    <div className={styles.docRow} key={index}>
                                        <div className={styles.docLeft}>
                                            <div className={styles.docIconBox}>
                                                <img src="/assets/admin_icons/icon-vendorDetailsDocument.svg" alt="Document" className={styles.docFileIcon} />
                                            </div>
                                            <div>
                                                <div className={styles.docName}>{doc.name}</div>
                                                <div className={`${styles.docStatusText} ${styles.statusVerified}`}>
                                                    <img src="/assets/admin_icons/icon-vendorDetailsVerified.svg" alt="Verified" /> Uploaded
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.docActions}>
                                            {doc.name === 'Signed Agreement' && doc.url && (
                                                <>
                                                    <button onClick={() => window.open(doc.url, '_blank')} className={styles.docActionBtn}><img src="/assets/admin_icons/icon-vendorDetailsView.svg" alt="View" /></button>
                                                    <a href={doc.url} download className={styles.docActionBtn}><img src="/assets/admin_icons/icon-vendorDetailsDownload.svg" alt="Download" /></a>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className={styles.docRow}>
                                    <div className={styles.docLeft}>
                                        <div className={styles.docIconBox}>
                                            <img src="/assets/admin_icons/icon-vendorDetailsDocument.svg" alt="Document" className={styles.docFileIcon} />
                                        </div>
                                        <div>
                                            <div className={styles.docName}>No documents uploaded yet.</div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                </div>

                {/* Right Financial Verification & Action Column */}
                <div className={styles.rightColumn}>

                    {/* ID Proof Verification Segment */}
                    <div className={styles.card}>
                        <h3 className={styles.cardTitle}>ID Proof</h3>
                        <div className={styles.verticalFields}>
                            <div className={styles.fieldRow}>
                                <img src="/assets/admin_icons/icon-vendorDetailsIdProof.svg" alt="ID Proof" />
                                <div>
                                    <label className={styles.fieldLabel}>GST Number</label>
                                    <div className={styles.fieldValueSec}>{registration.gstNumber || '29ABCDE1234F1Z5'}</div>
                                </div>
                            </div>
                            <div className={styles.fieldRow}>
                                <img src="/assets/admin_icons/icon-vendorDetailsIdProof.svg" alt="IdProof" />
                                <div>
                                    <label className={styles.fieldLabel}>Aadhaar Number</label>
                                    <div className={styles.fieldValueSec}>{registration.aadhar || '[Aadhaar Redacted]'}</div>
                                </div>
                            </div>
                            <div className={styles.fieldRow}>
                                <img src="/assets/admin_icons/icon-vendorDetailsIdProof.svg" alt="IdProof" />
                                <div>
                                    <label className={styles.fieldLabel}>PAN Number</label>
                                    <div className={styles.fieldValueSec}>{registration.pan || 'ABCDE1234F'}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bank Account Details Segment */}
                    <div className={styles.card}>
                        <h3 className={styles.cardTitle}>Bank Details</h3>
                        <div className={styles.verticalFields}>
                            <div className={styles.fieldRow}>
                                <img src="/assets/admin_icons/icon_vendorDetailsUser.svg" alt="User" />
                                <div>
                                    <label className={styles.fieldLabel}>Account Holder Name</label>
                                    <div className={styles.fieldValueSec}>{registration.accountHolderName || 'Cool Air Tech Services'}</div>
                                </div>
                            </div>
                            <div className={styles.fieldRow}>
                                <img src="/assets/admin_icons/icon-vendorDetailsAccCard.svg" alt="Account Card" />
                                <div>
                                    <label className={styles.fieldLabel}>Account Number</label>
                                    <div className={styles.fieldValueSec}>
                                        {registration.accountNumber ? `••••••••${registration.accountNumber.slice(-4)}` : 'XXXX XXXX 4589'}
                                    </div>
                                </div>
                            </div>
                            <div className={styles.fieldRow}>
                                <img src="/assets/admin_icons/icon-vendorDetailsIFSC.svg" alt="IFSC Code" />
                                <div>
                                    <label className={styles.fieldLabel}>IFSC Code</label>
                                    <div className={styles.fieldValueSec}>{registration.ifscCode || 'HDFC0001234'}</div>
                                </div>
                            </div>
                            <div className={styles.fieldRow}>
                                <img src="/assets/admin_icons/icon-vendorDetailsAccCard.svg" alt="UPI ID" />
                                <div>
                                    <label className={styles.fieldLabel}>UPI ID</label>
                                    <div className={styles.fieldValueSec}>{registration.upiId || 'coolair@hdfcbank'}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Core Decision Button Group Panel */}
                    <div className={styles.actionPanel}>
                        <button 
                            className={styles.btnReject} 
                            onClick={() => updateStatus('Rejected')}
                            disabled={registration.status === 'Rejected'}
                            style={{ opacity: registration.status === 'Rejected' ? 0.5 : 1, cursor: registration.status === 'Rejected' ? 'not-allowed' : 'pointer' }}
                        >
                            <span className={styles.btnRejectIcon}>⊗</span> {registration.status === 'Rejected' ? 'Rejected' : 'Reject'}
                        </button>
                        <button 
                            className={styles.btnApprove} 
                            onClick={() => updateStatus('Approved')}
                            disabled={registration.status === 'Approved'}
                            style={{ opacity: registration.status === 'Approved' ? 0.5 : 1, cursor: registration.status === 'Approved' ? 'not-allowed' : 'pointer' }}
                        >
                            <img src="/assets/admin_icons/icon-vendorDetailsApproved.svg" alt="Approved" className={styles.btnApproveIcon} /> {registration.status === 'Approved' ? 'Approved' : 'Approve & Add Vendor'}
                        </button>
                    </div>

                </div>

            </div>

        </div>
    );
}
