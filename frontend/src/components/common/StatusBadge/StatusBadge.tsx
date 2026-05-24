import React from 'react';
import styles from './StatusBadge.module.css';

export type StatusType = 'pending' | 'approved' | 'rejected' | 'in_review' | 'default';

export interface StatusBadgeProps {
  status: StatusType;
  label?: string;
  className?: string;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({
  status,
  label,
  className,
}) => {
  const displayLabel =
    label ||
    status
      .split('_')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

  const combinedClassName = [
    styles.badge,
    styles[status] || styles.default,
    className || '',
  ]
    .filter(Boolean)
    .join(' ');

  return <span className={combinedClassName}>{displayLabel}</span>;
};
