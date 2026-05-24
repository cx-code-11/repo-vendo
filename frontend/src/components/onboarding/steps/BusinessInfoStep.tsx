import React from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Input } from '@/components/common/Input/Input';
import { Select } from '@/components/common/Select/Select';
import { Button } from '@/components/common/Button/Button';
import { useOnboardingStore } from '@/store/onboardingStore';
import styles from './Step.module.css';

const servicesList = [
  "Bathroom cleaning",
  "Home cleaning",
  "Garden cleaning",
  "sofa cleaning",
  "carpets and Mattress cleaning",
  "Water tank Cleaning",
  "Glass cleaning",
  "Flooring polish (Mosaic,Granites and Marbles)",
  "Painting services",
  "Electrical & Plumbing work",
  "Pest control",
  "Water proofing (Epoxy)",
  "Chimney cleaning",
  "Carpenter work",
  "Ac service",
  "civil work",
  "Renovation works",
  "Mosquito net",
  "Aluminium work",
  "Packers and movers",
  "Laundry",
  "RO Water purifier",
  "Men's spa",
  "Women's spa",
  "Kitchen cleaning",
  "cab service",
  "Other"
];

const serviceSchema = z.object({
  serviceCategory: z.string().min(1, 'Service is required'),
  customServiceName: z.string().optional(),
  serviceDescription: z.string().optional(),
  experience: z.string().min(1, 'Experience is required'),
}).superRefine((data, ctx) => {
  if (data.serviceCategory === 'Other') {
    if (!data.customServiceName || data.customServiceName.trim() === '') {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Please specify the service name',
        path: ['customServiceName']
      });
    }
    if (!data.serviceDescription || data.serviceDescription.trim() === '') {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Please provide a description',
        path: ['serviceDescription']
      });
    }
  }
});

const schema = z.object({
  businessName: z.string().min(2, 'Business name must be at least 2 characters'),
  contactPerson: z.string().min(2, 'Contact person name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().regex(/^\+91[0-9]{10}$/, 'Must be +91 followed by 10 digits'),
  address: z.string().min(10, 'Complete address is required'),
  services: z.array(serviceSchema).min(1, 'At least one service is required'),
  accountHolderName: z.string().min(2, 'Account holder name is required'),
  accountNumber: z.string().min(5, 'Account number is required'),
  ifscCode: z.string().regex(/^[A-Za-z]{4}0[A-Za-z0-9]{6}$/, 'Invalid IFSC code format'),
  upiId: z.string().regex(/^[a-zA-Z0-9.\-_]{2,256}@[a-zA-Z]{2,64}$/, 'Invalid UPI ID format'),
  gstNumber: z.string().optional(),
  aadharNumber: z.string().regex(/^\d{12}$/, 'Aadhar must be exactly 12 digits'),
  panNumber: z.string().regex(/^[A-Za-z]{5}[0-9]{4}[A-Za-z]{1}$/, 'Invalid PAN number format'),
});

type FormData = z.infer<typeof schema>;

export const BusinessInfoStep: React.FC = () => {
  const { data, updateData, nextStep } = useOnboardingStore();
  
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      businessName: data.businessName || '',
      contactPerson: data.contactPerson || '',
      email: data.email || '',
      phone: data.phone || '+91',
      address: data.address || '',
      services: data.services && data.services.length > 0 ? data.services : [{ serviceCategory: '', experience: '' }],
      accountHolderName: data.accountHolderName || '',
      accountNumber: data.accountNumber || '',
      ifscCode: data.ifscCode || '',
      upiId: data.upiId || '',
      gstNumber: data.gstNumber || '',
      aadharNumber: data.aadharNumber || '',
      panNumber: data.panNumber || '',
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "services",
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
            <Input 
              label="Phone Number" 
              type="tel" 
              placeholder="+919876543210" 
              {...register('phone', {
                onChange: (e) => {
                  let val = e.target.value;
                  if (!val.startsWith('+91')) {
                    val = '+91' + val.replace(/^\+?(91?)?/, '');
                  }
                  e.target.value = val;
                }
              })} 
              error={errors.phone?.message} 
              required 
              className={styles.fullSpan} 
            />
            <Input label="Registered Address" placeholder="Complete business address" {...register('address')} error={errors.address?.message} required className={styles.fullSpan} />
          </div>
        </div>

        <div className={styles.formDivider} />

        <div className={styles.formSection}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <h3 className={styles.sectionTitle} style={{ margin: 0 }}>Service Details</h3>
          </div>
          
          {fields.map((item, index) => {
            const selectedCategory = watch(`services.${index}.serviceCategory`);
            return (
              <div key={item.id} style={{ padding: '1rem', border: '1px solid #e2e8f0', borderRadius: '8px', marginBottom: '1rem', position: 'relative' }}>
                {fields.length > 1 && (
                  <button type="button" onClick={() => remove(index)} style={{ position: 'absolute', top: '10px', right: '10px', color: 'red', background: 'none', border: 'none', cursor: 'pointer', fontSize: '14px', fontWeight: 'bold' }}>
                    Remove
                  </button>
                )}
                
                <div className={styles.formGrid}>
                  <Select 
                    label={`Service Category ${index + 1}`} 
                    options={servicesList.map(s => ({ label: s, value: s }))}
                    {...register(`services.${index}.serviceCategory` as const)} 
                    error={errors.services?.[index]?.serviceCategory?.message} 
                    required 
                    className={selectedCategory === 'Other' ? styles.fullSpan : ''}
                  />
                  {selectedCategory !== 'Other' && (
                    <Input label="Experience" placeholder="e.g. 5 Years" {...register(`services.${index}.experience` as const)} error={errors.services?.[index]?.experience?.message} required />
                  )}
                </div>
                
                {selectedCategory === 'Other' && (
                  <>
                    <div className={styles.formGrid} style={{ marginTop: '1rem' }}>
                      <Input label="Type Service Name" placeholder="Describe your service" {...register(`services.${index}.customServiceName` as const)} error={errors.services?.[index]?.customServiceName?.message} required />
                      <Input label="Experience" placeholder="e.g. 5 Years" {...register(`services.${index}.experience` as const)} error={errors.services?.[index]?.experience?.message} required />
                    </div>
                    <div className={styles.formGrid} style={{ marginTop: '1rem' }}>
                      <Input label="Service Description" placeholder="Detailed description of your service" {...register(`services.${index}.serviceDescription` as const)} error={errors.services?.[index]?.serviceDescription?.message} required className={styles.fullSpan} />
                    </div>
                  </>
                )}
              </div>
            );
          })}
          
          <button type="button" onClick={() => append({ serviceCategory: '', experience: '' })} className={styles.addLink} style={{ border: 'none', background: 'none', color: '#3b82f6', cursor: 'pointer', fontWeight: 'bold', fontSize: '14px' }}>+ Add another service</button>
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
