import React, { HTMLAttributes, TdHTMLAttributes, ThHTMLAttributes } from 'react';
import styles from './Table.module.css';

interface TableProps extends HTMLAttributes<HTMLTableElement> {
  children: React.ReactNode;
}

export const Table = ({ children, className, ...props }: TableProps) => {
  return (
    <div className={styles.tableContainer}>
      <table className={`${styles.table} ${className || ''}`} {...props}>
        {children}
      </table>
    </div>
  );
};

export const TableHeader = ({ children, className, ...props }: HTMLAttributes<HTMLTableSectionElement>) => (
  <thead className={`${styles.tableHeader} ${className || ''}`} {...props}>
    {children}
  </thead>
);

export const TableBody = ({ children, className, ...props }: HTMLAttributes<HTMLTableSectionElement>) => (
  <tbody className={`${styles.tableBody} ${className || ''}`} {...props}>
    {children}
  </tbody>
);

export const TableRow = ({ children, className, ...props }: HTMLAttributes<HTMLTableRowElement>) => (
  <tr className={`${styles.tableRow} ${className || ''}`} {...props}>
    {children}
  </tr>
);

export const TableHead = ({ children, className, ...props }: ThHTMLAttributes<HTMLTableCellElement>) => (
  <th className={`${styles.tableHead} ${className || ''}`} {...props}>
    {children}
  </th>
);

export const TableCell = ({ children, className, ...props }: TdHTMLAttributes<HTMLTableCellElement>) => (
  <td className={`${styles.tableCell} ${className || ''}`} {...props}>
    {children}
  </td>
);
