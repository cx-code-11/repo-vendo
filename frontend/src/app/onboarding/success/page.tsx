'use client';

import React from 'react';
import { StepIndicator } from '@/components/onboarding/StepIndicator';
import { Clock } from 'lucide-react';
import styles from '../page.module.css';

export default function SuccessPage() {
  return (
    <div className={styles.pageContainer}>
      <header className={styles.header}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div className={styles.logo}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="Vyess FMS Logo" style={{ height: '32px' }} />
          </div>
          <nav className={styles.nav}>
            <span className={styles.navLink} style={{ opacity: 0.5 }}>Help Center</span>
            <span className={styles.navLink} style={{ opacity: 0.5 }}>Contact Support</span>
          </nav>
        </div>
      </header>
      
      <main className={`container ${styles.mainContent}`}>
        <div className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>Verification Pending</h1>
          <p className={styles.pageSubtitle}>
            Your application is complete and under review.
          </p>
        </div>

        <StepIndicator currentStep={5} totalSteps={4} />

        <div className={styles.formContainer} style={{ marginTop: '2rem' }}>
          <div style={{ alignItems: 'center', textAlign: 'center', padding: '4rem 2rem', display: 'flex', flexDirection: 'column' }}>
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              backgroundColor: '#fef3c7',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1.5rem'
            }}>
              <Clock size={40} color="#d97706" />
            </div>

            <h2 style={{ 
              marginBottom: '1rem', 
              color: '#111827', 
              fontSize: '1.875rem',
              fontWeight: 700 
            }}>
              Verification Pending
            </h2>
            
            <p style={{ 
              color: '#4b5563', 
              marginBottom: '2.5rem', 
              maxWidth: '500px',
              fontSize: '1.125rem',
              lineHeight: 1.6
            }}>
              Thank you for completing your onboarding. Your profile and documents are currently under review by our admin team.
            </p>

            <div style={{
              backgroundColor: '#f9fafb',
              borderRadius: '0.75rem',
              padding: '2rem',
              textAlign: 'left',
              width: '100%',
              maxWidth: '600px',
              boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
            }}>
              <h3 style={{
                fontSize: '1.125rem',
                fontWeight: 600,
                color: '#111827',
                marginBottom: '1rem'
              }}>
                What happens next?
              </h3>
              
              <ul style={{
                color: '#4b5563',
                paddingLeft: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
                margin: 0
              }}>
                <li>Our team will verify your KYC documents within 24-48 hours.</li>
                <li>You will receive an email notification once approved.</li>
                <li>If any additional information is required, we will reach out to you.</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
