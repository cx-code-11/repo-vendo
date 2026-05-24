'use client';

import React, { useState, useEffect } from 'react';
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
  
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isChecking, setIsChecking] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (sessionStorage.getItem('adminAuth') === 'true') {
      setIsAuthenticated(true);
    }
    setIsChecking(false);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin123') {
      sessionStorage.setItem('adminAuth', 'true');
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Invalid username or password');
    }
  };

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

  if (isChecking) return null;

  if (!isAuthenticated) {
    return (
      <div style={{ display: 'flex', height: '100vh', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f3f4f6' }}>
        <form onSubmit={handleLogin} style={{ backgroundColor: 'white', padding: '2.5rem', borderRadius: '0.75rem', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)', width: '100%', maxWidth: '400px' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="Logo" style={{ height: '40px' }} />
          </div>
          <h2 style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '1.5rem', fontWeight: 'bold', color: '#111827' }}>Admin Sign In</h2>
          {error && <p style={{ color: '#dc2626', marginBottom: '1rem', textAlign: 'center', fontSize: '0.875rem' }}>{error}</p>}
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 500, color: '#374151' }}>Username</label>
            <input type="text" value={username} onChange={e => setUsername(e.target.value)} style={{ width: '100%', padding: '0.75rem', border: '1px solid #d1d5db', borderRadius: '0.375rem', outline: 'none' }} placeholder="admin" required />
          </div>
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 500, color: '#374151' }}>Password</label>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} style={{ width: '100%', padding: '0.75rem', border: '1px solid #d1d5db', borderRadius: '0.375rem', outline: 'none' }} placeholder="••••••••" required />
          </div>
          <button type="submit" style={{ width: '100%', padding: '0.75rem', backgroundColor: '#2563eb', color: 'white', border: 'none', borderRadius: '0.375rem', cursor: 'pointer', fontWeight: 600, fontSize: '1rem' }}>Sign In</button>
        </form>
      </div>
    );
  }

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
