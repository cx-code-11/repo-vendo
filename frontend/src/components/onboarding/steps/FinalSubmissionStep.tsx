import React, { useState } from 'react';
import { Button } from '@/components/common/Button/Button';
import { useOnboardingStore } from '@/store/onboardingStore';
import { CheckCircle } from 'lucide-react';
import styles from './Step.module.css';

export const FinalSubmissionStep: React.FC = () => {
  const { data, prevStep, reset } = useOnboardingStore();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    try {
      // In a real application, you would make an API call to your backend here
      // const response = await fetch('/api/vendors/register', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(data),
      // });
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setIsSuccess(true);
    } catch (error) {
      console.error('Submission failed', error);
      alert('An error occurred during submission. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFinish = () => {
    reset();
    window.location.href = '/admin'; // Or redirect to a login/status page
  };

  if (isSuccess) {
    return (
      <div className={styles.stepContainer} style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '2rem 0' }}>
        <CheckCircle size={64} color="var(--success)" style={{ marginBottom: '1.5rem' }} />
        <h2 style={{ fontSize: 'var(--font-size-2xl)', marginBottom: '1rem', color: 'var(--gray-900)' }}>Registration Submitted Successfully!</h2>
        <p style={{ color: 'var(--gray-600)', maxWidth: '400px', marginBottom: '2rem', lineHeight: '1.6' }}>
          Thank you for registering with Vyess. Your application and documents have been securely transmitted and are currently pending administrative review. We will notify you via email once your profile is approved.
        </p>
        <Button onClick={handleFinish} variant="primary" size="lg">
          Return to Dashboard
        </Button>
      </div>
    );
  }

  return (
    <div className={styles.stepContainer}>
      <div className={styles.stepHeader}>
        <h2>Final Review & Submission</h2>
        <p>Please review your information before finalizing the submission.</p>
      </div>

      <div className={styles.summaryContainer}>
        <div className={styles.summarySection}>
          <h3>Business Information</h3>
          <div className={styles.summaryGrid}>
            <div>
              <span className={styles.summaryLabel}>Business Name</span>
              <span className={styles.summaryValue}>{data.businessName}</span>
            </div>
            <div>
              <span className={styles.summaryLabel}>Contact Person</span>
              <span className={styles.summaryValue}>{data.contactPerson}</span>
            </div>
            <div>
              <span className={styles.summaryLabel}>Email</span>
              <span className={styles.summaryValue}>{data.email}</span>
            </div>
            <div>
              <span className={styles.summaryLabel}>Phone</span>
              <span className={styles.summaryValue}>{data.phone}</span>
            </div>
          </div>
        </div>

        <div className={styles.summarySection}>
          <h3>Service Details</h3>
          <div className={styles.summaryGrid}>
            <div>
              <span className={styles.summaryLabel}>Services</span>
              <span className={styles.summaryValue}>
                {data.services?.map(s => s.serviceCategory === 'Other' ? s.customServiceName : s.serviceCategory).join(', ')}
              </span>
            </div>
          </div>
        </div>
        
        <div className={styles.summarySection}>
          <h3>Status</h3>
          <div className={styles.summaryGrid}>
            <div>
              <span className={styles.summaryLabel}>Documents Uploaded</span>
              <span className={styles.summaryValue}>{data.idProof ? 'Yes' : 'No'}</span>
            </div>
            <div>
              <span className={styles.summaryLabel}>Agreement Signed</span>
              <span className={styles.summaryValue}>{data.signature ? 'Yes' : 'No'}</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footer} style={{ marginTop: '2rem' }}>
        <Button type="button" variant="outline" onClick={prevStep} disabled={isSubmitting}>
          Back to Signature
        </Button>
        <Button 
          type="button" 
          variant="primary" 
          onClick={handleSubmit} 
          isLoading={isSubmitting}
        >
          Submit Registration
        </Button>
      </div>
    </div>
  );
};
