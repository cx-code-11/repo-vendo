import React, { useState, useMemo, useEffect } from 'react';
import { Button } from '@/components/common/Button/Button';
import { useOnboardingStore } from '@/store/onboardingStore';
import { Upload, CheckCircle2, Trash2 } from 'lucide-react';
import styles from './Step.module.css';

const FilePreview = ({ file }: { file: File }) => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  
  useEffect(() => {
    if (file.type.startsWith('image/')) {
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
      return () => URL.revokeObjectURL(url);
    }
  }, [file]);

  if (file.type.startsWith('image/')) {
    return previewUrl ? <img src={previewUrl} alt="Preview" style={{ width: '100%', height: '100px', objectFit: 'contain', marginBottom: '8px', borderRadius: '4px' }} /> : null;
  }
  return <CheckCircle2 size={28} className={styles.uploadIconSuccess} />;
};

export const DocumentUploadStep: React.FC = () => {
  const { updateData, nextStep, prevStep } = useOnboardingStore();
  const [aadhaarFront, setAadhaarFront] = useState<File | null>(null);
  const [aadhaarBack, setAadhaarBack] = useState<File | null>(null);
  const [panFile, setPanFile] = useState<File | null>(null);
  const [gstFile, setGstFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleContinue = () => {
    if (!aadhaarFront || !aadhaarBack || !panFile) {
      setError("Please upload your PAN card and both sides of your Aadhaar card.");
      return;
    }

    setError(null);

    updateData({
      documents: [
        aadhaarFront?.name || '',
        aadhaarBack?.name || '',
        panFile?.name || '',
        gstFile?.name || ''
      ].filter(Boolean)
    });
    nextStep();
  };

  const renderUploadBox = (
    title: string,
    subtitle: string,
    file: File | null,
    setFile: React.Dispatch<React.SetStateAction<File | null>>
  ) => {
    return (
      <div className={styles.documentDropzoneContainer}>
        <div 
          className={`${styles.documentDropzone} ${file ? styles.documentDropzoneSuccess : ''}`}
          onClick={() => {
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = '.pdf,.jpg,.png,.jpeg';
            input.onchange = (e) => {
              const selectedFile = (e.target as HTMLInputElement).files?.[0];
              if (selectedFile) setFile(selectedFile);
            };
            input.click();
          }}
          style={file ? { padding: '10px' } : {}}
        >
          {file ? (
            <FilePreview file={file} />
          ) : (
            <Upload size={24} className={styles.uploadIconBlue} />
          )}
          <p className={styles.uploadTitle} style={file ? { fontSize: '0.85rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', width: '100%', textAlign: 'center' } : {}}>{file ? file.name : title}</p>
          <p className={styles.uploadSubtitle}>{file ? `${(file.size / 1024 / 1024).toFixed(2)} MB` : subtitle}</p>
        </div>
        
        {file && (
          <button 
            type="button" 
            className={styles.deleteFileButton}
            onClick={(e) => {
              e.stopPropagation();
              setFile(null);
            }}
            title="Remove document"
          >
            <Trash2 size={16} />
          </button>
        )}
      </div>
    );
  };

  return (
    <div className={styles.stepContainer}>
      <div className={styles.stepHeader}>
        <h2>KYC Documents</h2>
        <p>Ensure all documents are clear and legible.</p>
      </div>

      <div className={styles.form}>
        <div className={styles.documentUploadStack}>
          
          <div className={styles.splitRow}>
            {renderUploadBox(
              "Aadhaar Front",
              "Front side image (PDF, JPG, PNG)",
              aadhaarFront,
              setAadhaarFront
            )}
            {renderUploadBox(
              "Aadhaar Back",
              "Back side image (PDF, JPG, PNG)",
              aadhaarBack,
              setAadhaarBack
            )}
          </div>

          {renderUploadBox(
            "Upload PAN Card",
            "Clear image of PAN card (PDF, JPG, PNG)",
            panFile,
            setPanFile
          )}

          {renderUploadBox(
            "Upload GST Certificate",
            "Optional if not applicable (PDF, JPG, PNG)",
            gstFile,
            setGstFile
          )}
        </div>

        {error && (
          <p className={styles.errorText} style={{ textAlign: 'center', marginBottom: '1rem', fontSize: '0.875rem' }}>
            {error}
          </p>
        )}

        <div className={styles.footer}>
          <Button type="button" variant="outline" onClick={prevStep}>
            Back
          </Button>
          <Button type="button" variant="primary" onClick={handleContinue}>
            Save & Continue
          </Button>
        </div>
      </div>
    </div>
  );
};
