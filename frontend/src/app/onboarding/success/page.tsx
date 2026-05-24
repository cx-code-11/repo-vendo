'use client';

import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import styles from '../page.module.css';

export default function SuccessPage() {
  return (
    <div className={styles.pageContainer} style={{ minHeight: '100vh', backgroundColor: '#f3f4f6', display: 'flex', flexDirection: 'column' }}>
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

      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        flex: 1,
        padding: '2rem'
      }}>
        <div style={{ 
          textAlign: 'center', 
          backgroundColor: '#ffffff', 
          padding: '3rem 2rem', 
          borderRadius: '1rem', 
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
          maxWidth: '550px',
          width: '100%'
        }}>
          <div style={{
            width: '90px',
            height: '90px',
            borderRadius: '50%',
            backgroundColor: '#dcfce7',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1.5rem auto'
          }}>
            <CheckCircle2 size={45} color="#16a34a" />
          </div>

          <h1 style={{ 
            color: '#111827', 
            fontSize: '1.75rem',
            fontWeight: 800,
            lineHeight: 1.4,
            textTransform: 'uppercase',
            marginBottom: '2rem'
          }}>
            VENDOR Verification<br/>WAS PROCESSING
          </h1>

          <div style={{
            backgroundColor: '#f9fafb',
            borderRadius: '0.75rem',
            padding: '1.5rem',
            textAlign: 'left',
            border: '1px solid #e5e7eb'
          }}>
            <h3 style={{
              fontSize: '1rem',
              fontWeight: 600,
              color: '#111827',
              marginBottom: '1rem'
            }}>
              What happens next?
            </h3>
            
            <ul style={{
              color: '#4b5563',
              paddingLeft: '1.25rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
              margin: 0,
              fontSize: '0.95rem'
            }}>
              <li>Once verification is complete, you will get a mail and call from VYESS.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
