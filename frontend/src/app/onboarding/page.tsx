'use client';

import React from 'react';
import { useOnboardingStore } from '@/store/onboardingStore';
import { StepIndicator } from '@/components/onboarding/StepIndicator';
import styles from './page.module.css';

// Placeholder step components (will be implemented in separate files)
import { BusinessInfoStep } from '@/components/onboarding/steps/BusinessInfoStep';
import { DocumentUploadStep } from '@/components/onboarding/steps/DocumentUploadStep';
import { AgreementReviewStep } from '@/components/onboarding/steps/AgreementReviewStep';
import { DigitalSignatureStep } from '@/components/onboarding/steps/DigitalSignatureStep';
import Image from 'next/image';
import { Search, MapPin, ShoppingCart, Bell, User, ChevronDown } from 'lucide-react';

export default function OnboardingPage() {
  const { currentStep } = useOnboardingStore();
  const totalSteps = 4;

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <BusinessInfoStep />;
      case 2:
        return <DocumentUploadStep />;
      case 3:
        return <AgreementReviewStep />;
      case 4:
        return <DigitalSignatureStep />;
      default:
        return <BusinessInfoStep />;
    }
  };

  const getPageTitle = () => {
    switch (currentStep) {
      case 1: return { title: 'Partner with Vyess FMS', subtitle: 'Join our network of trusted service providers. Fill out the details below to start your onboarding journey.' };
      case 2: return { title: 'Upload Documents', subtitle: 'Please upload the required documents for verification.' };
      case 3: return { title: 'Service Agreement', subtitle: 'Please review the master service agreement generated for your company.' };
      case 4: return { title: 'Digital Signature', subtitle: 'Sign your agreement electronically to complete onboarding.' };
      default: return { title: 'Partner with Vyess FMS', subtitle: '' };
    }
  };

  const { title, subtitle } = getPageTitle();

  return (
    <div className={styles.pageContainer}>
      <header className={styles.header}>
        <div className={`container ${styles.headerContainer}`}>
          {/* Logo Section */}
          <div className={styles.logoContainer}>
            <Image 
              src="/logo.png" 
              alt="Vyess FMS Logo" 
              width={150} 
              height={40} 
              className={styles.logoImage}
              priority
            />
          </div>

          {/* Navigation Links - Disabled */}
          <nav className={`${styles.headerNav} ${styles.disabled}`}>
            <a href="#" className={styles.navLink}>Home</a>
            <div className={styles.navDropdown}>
              <a href="#" className={styles.navLink}>Services</a>
              <ChevronDown size={16} />
            </div>
            <a href="#" className={styles.navLinkLight}>Become a partner</a>
          </nav>

          {/* Right Actions - Disabled */}
          <div className={`${styles.headerActions} ${styles.disabled}`}>
            <button className={styles.iconButton}>
              <Search size={18} />
            </button>
            
            <div className={styles.locationSelector}>
              <MapPin size={16} className={styles.locationIcon} />
              <span className={styles.locationText}>Thillai nagar, Trichy</span>
              <ChevronDown size={16} />
            </div>

            <button className={styles.iconButton}>
              <ShoppingCart size={18} />
            </button>
            
            <button className={styles.iconButton}>
              <Bell size={18} />
              <div className={styles.notificationDot}></div>
            </button>
            
            <button className={styles.iconButton}>
              <User size={18} />
            </button>
          </div>
        </div>
      </header>
      
      <main className={`container ${styles.mainContent}`}>
        <div className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>{title}</h1>
          <p className={styles.pageSubtitle}>
            {subtitle}
          </p>
        </div>

        <div className={styles.onboardingWrapper}>
          <StepIndicator currentStep={currentStep} totalSteps={totalSteps} />
          
          <div className={styles.stepContentWrapper}>
            {renderStep()}
          </div>
        </div>
      </main>
    </div>
  );
}
