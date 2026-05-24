'use client';

import React from 'react';
import styles from './admin.module.css';
import { 
  LayoutDashboard, 
  ClipboardList, 
  Wallet, 
  BarChart2, 
  Percent, 
  Tag, 
  FileText, 
  Layers, 
  AlertCircle, 
  UserPlus, 
  Bell,
  ChevronDown,
  ChevronLeft
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const navItems = [
    { icon: <LayoutDashboard size={20} />, label: 'Dashboard', href: '/admin/dashboard' },
    { icon: <ClipboardList size={20} />, label: 'Order Workflow', href: '/admin/orders', hasDropdown: true },
    { icon: <Wallet size={20} />, label: 'Payment Control', href: '/admin/payment-control' },
    { icon: <BarChart2 size={20} />, label: 'Business Analytics', href: '/admin/analytics' },
    { icon: <Percent size={20} />, label: 'Offers', href: '/admin/offers' },
    { icon: <Tag size={20} />, label: 'Coupon Code', href: '/admin/coupons' },
    { icon: <FileText size={20} />, label: 'Payment Records', href: '/admin/payment-records' },
    { icon: <Layers size={20} />, label: 'Management', href: '/admin/management', hasDropdown: true },
    { icon: <AlertCircle size={20} />, label: 'Complaints', href: '/admin/complaints' },
    { icon: <UserPlus size={20} />, label: 'Become a Partner', href: '/admin/become-partner' },
  ];

  return (
    <div className={styles.adminLayout}>
      {/* SIDEBAR */}
      <aside className={styles.sidebar}>
        <div className={styles.sidebarHeader}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="Vyess FMS Logo" className={styles.logo} />
        </div>

        <nav className={styles.sidebarNav}>
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.label === 'Become a Partner' && pathname.includes('become-partner'));
            return (
              <Link key={item.label} href={item.href} className={`${styles.navItem} ${isActive ? styles.navItemActive : ''}`}>
                <div className={styles.navItemLeft}>
                  <span className={styles.navIcon}>{item.icon}</span>
                  <span className={styles.navLabel}>{item.label}</span>
                </div>
                {item.hasDropdown && <ChevronDown size={16} className={styles.navChevron} />}
              </Link>
            );
          })}
        </nav>

        <div className={styles.sidebarFooter}>
          <div className={styles.footerItem}>
            <Bell size={20} className={styles.navIcon} />
            <span className={styles.navLabel}>Notification</span>
          </div>
          
          <div className={styles.userProfile}>
            <div className={styles.avatar}>SA</div>
            <div className={styles.userInfo}>
              <span className={styles.userName}>Super Admin</span>
              <span className={styles.userRole}>System Authority</span>
            </div>
          </div>
        </div>

        <button className={styles.collapseBtn}>
          <ChevronLeft size={16} />
        </button>
      </aside>

      {/* MAIN CONTENT */}
      <main className={styles.mainContent}>
        {children}
      </main>
    </div>
  );
}
