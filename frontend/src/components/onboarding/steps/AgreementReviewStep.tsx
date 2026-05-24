import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/common/Button/Button';
import { useOnboardingStore } from '@/store/onboardingStore';
import { AgreementContent } from './AgreementContent';
import styles from './Step.module.css';

const schema = z.object({
  agreementAccepted: z.boolean().refine(val => val === true, {
    message: 'You must accept the terms of the agreement',
  }),
});

type FormData = z.infer<typeof schema>;

export const AgreementReviewStep: React.FC = () => {
  const { data, updateData, nextStep, prevStep } = useOnboardingStore();
  const [isScrolledToBottom, setIsScrolledToBottom] = useState(false);
  
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      agreementAccepted: data.agreementAccepted || false,
    },
  });

  const agreementAccepted = watch('agreementAccepted');

  const onSubmit = () => {
    updateData({ agreementAccepted: true });
    nextStep();
  };

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
    // If the user has scrolled to within 10px of the bottom
    if (scrollHeight - scrollTop <= clientHeight + 10) {
      setIsScrolledToBottom(true);
    }
  };

  const today = new Date().toLocaleDateString('en-GB'); // Use DD/MM/YYYY format

  const companyName = data.businessName || '[Company Name]';
  const contactName = data.contactPerson || '[Contact Person]';
  const address = data.address || '[Address]';

  return (
    <div className={styles.stepContainer}>
      <div className={styles.stepHeader}>
        <h2>Agreement Preview</h2>
        <p>Read carefully before accepting</p>
      </div>

      <div className={styles.form}>
        <div className={styles.agreementPreviewBox} onScroll={handleScroll}>
          <AgreementContent 
            companyName={companyName}
            contactName={contactName}
            address={address}
            date={today}
          />
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.checkboxGroup} style={{ marginTop: '1.5rem', marginBottom: '1.5rem' }}>
            <label className={styles.checkboxLabel} style={{ opacity: isScrolledToBottom ? 1 : 0.5, cursor: isScrolledToBottom ? 'pointer' : 'not-allowed' }}>
              <input 
                type="checkbox" 
                {...register('agreementAccepted')} 
                className={styles.checkbox} 
                disabled={!isScrolledToBottom}
              />
              <span>I, {companyName}, authorized representative of {contactName}, have read and agree to the terms and conditions outlined in this Master Service Agreement.</span>
            </label>
            {!isScrolledToBottom && (
              <p style={{ fontSize: '0.75rem', color: 'var(--primary-600)', marginTop: '0.25rem' }}>
                * Please read the full agreement, after that you can go to the next step.
              </p>
            )}
            {errors.agreementAccepted && isScrolledToBottom && (
              <p className={styles.errorText}>{errors.agreementAccepted.message}</p>
            )}
          </div>

          <div className={styles.footer}>
            <Button type="button" variant="outline" onClick={prevStep}>
              Back
            </Button>
            <Button type="submit" variant="primary" disabled={!agreementAccepted}>
              Proceed to Sign
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
