import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Input } from '@/components/common/Input/Input';
import { Button } from '@/components/common/Button/Button';
import { useOnboardingStore } from '@/store/onboardingStore';
import styles from './Step.module.css';

const schema = z.object({
  businessName: z.string().min(2, 'Business name must be at least 2 characters'),
  contactPerson: z.string().min(2, 'Contact person name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Valid phone number is required'),
  address: z.string().min(10, 'Complete address is required'),
  serviceCategory: z.string().min(2, 'Service name is required'),
  experience: z.string().min(1, 'Experience is required'),
  accountHolderName: z.string().min(2, 'Account holder name is required'),
  accountNumber: z.string().min(5, 'Account number is required'),
  ifscCode: z.string().min(5, 'IFSC code is required'),
  upiId: z.string().min(5, 'UPI ID is required'),
  gstNumber: z.string().optional(),
  aadharNumber: z.string().min(10, 'Aadhar number is required'),
  panNumber: z.string().min(10, 'PAN number is required'),
});

type FormData = z.infer<typeof schema>;

export const BusinessInfoStep: React.FC = () => {
  const { data, updateData, nextStep } = useOnboardingStore();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      businessName: data.businessName || '',
      contactPerson: data.contactPerson || '',
      email: data.email || '',
      phone: data.phone || '',
      address: data.address || '',
      serviceCategory: data.serviceCategory || '',
      experience: data.experience || '',
      accountHolderName: data.accountHolderName || '',
      accountNumber: data.accountNumber || '',
      ifscCode: data.ifscCode || '',
      upiId: data.upiId || '',
      gstNumber: data.gstNumber || '',
      aadharNumber: data.aadharNumber || '',
      panNumber: data.panNumber || '',
    },
  });

  const onSubmit = (formData: FormData) => {
    updateData(formData);
    nextStep();
  };

  return (
    <div className={styles.stepContainer}>
      <div className={styles.stepHeader}>
        <h2>Company Details</h2>
        <p>Please provide your official business information.</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.formSection}>
          <div className={styles.formGrid}>
            <Input label="Company Name" placeholder="e.g. Acme Services Pvt Ltd" {...register('businessName')} error={errors.businessName?.message} required className={styles.fullSpan} />
            <Input label="Contact Person" placeholder="Full Name" {...register('contactPerson')} error={errors.contactPerson?.message} required />
            <Input label="Email Address" type="email" placeholder="contact@company.com" {...register('email')} error={errors.email?.message} required />
            <Input label="Phone Number" type="tel" placeholder="+91 98765 43210" {...register('phone')} error={errors.phone?.message} required className={styles.fullSpan} />
            <Input label="Registered Address" placeholder="Complete business address" {...register('address')} error={errors.address?.message} required className={styles.fullSpan} />
          </div>
        </div>

        <div className={styles.formDivider} />

        <div className={styles.formSection}>
          <h3 className={styles.sectionTitle}>Service Details</h3>
          <div className={styles.formGrid}>
            <Input label="Service Name" placeholder="e.g. AC Service" {...register('serviceCategory')} error={errors.serviceCategory?.message} required />
            <Input label="Experience" placeholder="e.g. 5 Years" {...register('experience')} error={errors.experience?.message} required />
          </div>
          <button type="button" className={styles.addLink}>+ Add service</button>
        </div>

        <div className={styles.formDivider} />

        <div className={styles.formSection}>
          <h3 className={styles.sectionTitle}>Bank Details (For Payouts)</h3>
          <div className={styles.formGrid}>
            <Input label="Account Holder Name" placeholder="As per bank records" {...register('accountHolderName')} error={errors.accountHolderName?.message} required />
            <Input label="Account Number" placeholder="XXXXXXXXXXXXX" {...register('accountNumber')} error={errors.accountNumber?.message} required />
            <Input label="IFSC Code" placeholder="ABCD0123456" {...register('ifscCode')} error={errors.ifscCode?.message} required />
            <Input label="UPI ID" placeholder="mobile@upi" {...register('upiId')} error={errors.upiId?.message} required />
          </div>
        </div>

        <div className={styles.formDivider} />

        <div className={styles.formSection}>
          <h3 className={styles.sectionTitle}>Verification & Access</h3>
          <div className={styles.formGrid}>
            <Input label="GST Number (Optional)" placeholder="22AAAAA0000A1Z5" {...register('gstNumber')} error={errors.gstNumber?.message} />
            <Input label="Aadhar" placeholder="Aadhar Number" {...register('aadharNumber')} error={errors.aadharNumber?.message} required />
            <Input label="PAN" placeholder="Pan Number" {...register('panNumber')} error={errors.panNumber?.message} required className={styles.fullSpan} />
          </div>
        </div>

        <div className={styles.footerRight}>
          <Button type="submit" variant="primary">
            Save & Continue
          </Button>
        </div>
      </form>
    </div>
  );
}
