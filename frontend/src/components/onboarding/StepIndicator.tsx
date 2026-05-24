import React from 'react';
import styles from './StepIndicator.module.css';
import { Check } from 'lucide-react';

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

export const StepIndicator: React.FC<StepIndicatorProps> = ({ currentStep, totalSteps }) => {
  const steps = [
    'Registration',
    'Documents',
    'Agreement',
    'Sign'
  ];

  return (
    <div className={styles.container}>
      <div className={styles.stepsWrapper}>
        {steps.map((label, index) => {
          const stepNumber = index + 1;
          const isActive = stepNumber === currentStep;
          const isCompleted = stepNumber < currentStep;
          
          return (
            <div key={label} className={`${styles.step} ${isActive ? styles.active : ''} ${isCompleted ? styles.completed : ''}`}>
              <div className={styles.line}></div>
              <span className={styles.stepNumber}>Step {stepNumber}</span>
              <span className={styles.label}>
                {label} {isCompleted && <Check size={14} className={styles.checkIcon} />}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
