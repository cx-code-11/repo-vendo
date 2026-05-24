import React, { useRef, useState } from 'react';
import styles from './FileUpload.module.css';
import { UploadCloud, File, X } from 'lucide-react';

interface FileUploadProps {
  label: string;
  helperText?: string;
  accept?: string;
  maxSizeMB?: number;
  value?: File | null;
  onChange: (file: File | null) => void;
  error?: string;
}

export const FileUpload: React.FC<FileUploadProps> = ({
  label,
  helperText,
  accept = '*/*',
  maxSizeMB = 5,
  value,
  onChange,
  error,
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const validateFile = (file: File) => {
    if (file.size > maxSizeMB * 1024 * 1024) {
      alert(`File size must be less than ${maxSizeMB}MB`);
      return false;
    }
    return true;
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      if (validateFile(file)) {
        onChange(file);
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      if (validateFile(file)) {
        onChange(file);
      }
    }
  };

  const handleRemove = () => {
    onChange(null);
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  return (
    <div className={styles.wrapper}>
      <label className={styles.label}>{label}</label>
      
      {!value ? (
        <div
          className={`${styles.dropzone} ${isDragging ? styles.dragging : ''} ${error ? styles.error : ''}`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => inputRef.current?.click()}
        >
          <UploadCloud className={styles.uploadIcon} />
          <p className={styles.dropText}>
            <span className={styles.browseText}>Click to upload</span> or drag and drop
          </p>
          <p className={styles.helperText}>
            {helperText || `Max file size: ${maxSizeMB}MB`}
          </p>
          <input
            type="file"
            ref={inputRef}
            className={styles.hiddenInput}
            accept={accept}
            onChange={handleFileChange}
          />
        </div>
      ) : (
        <div className={styles.filePreview}>
          <div className={styles.fileInfo}>
            <div className={styles.fileIconWrapper}>
              <File className={styles.fileIcon} />
            </div>
            <div className={styles.fileDetails}>
              <p className={styles.fileName}>{value.name}</p>
              <p className={styles.fileSize}>{(value.size / 1024 / 1024).toFixed(2)} MB</p>
            </div>
          </div>
          <button type="button" onClick={handleRemove} className={styles.removeButton} aria-label="Remove file">
            <X size={16} />
          </button>
        </div>
      )}
      
      {error && <p className={styles.errorText}>{error}</p>}
    </div>
  );
};
