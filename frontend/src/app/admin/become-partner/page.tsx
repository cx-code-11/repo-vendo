'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Search, SlidersHorizontal, Filter, MapPin } from 'lucide-react';
import styles from './become-partner.module.css';

interface VendorRecord {
  id: string;
  uiId: string;
  businessName: string;
  contactPerson: string;
  phone: string;
  address: string;
  created: string;
  status: 'Pending' | 'Under Review' | 'Reject' | 'Reviewed' | 'Approved' | 'Rejected';
}

export default function BecomePartnerPage() {
  const [vendors, setVendors] = useState<VendorRecord[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVendors = async () => {
      try {
        const res = await fetch('/api/vendors');
        const data = await res.json();
        setVendors(data);
      } catch (err) {
        console.error('Error fetching vendors:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchVendors();
  }, []);

  const getStatusClass = (status: string) => {
    switch (status) {
      case 'Pending': return styles.statusPending;
      case 'Under Review': 
      case 'Reviewed': return styles.statusReview;
      case 'Reject': 
      case 'Rejected': return styles.statusReject;
      default: return '';
    }
  };

  const getTextColor = (bgColor: string) => {
    switch (bgColor) {
      case '#f3e8ff': return '#7e22ce'; // purple
      case '#dcfce7': return '#15803d'; // green
      case '#fef3c7': return '#b45309'; // yellow
      case '#dbeafe': return '#1d4ed8'; // blue
      case '#ccfbf1': return '#0f766e'; // teal
      default: return '#000000';
    }
  };

  // Generate random stable color based on string
  const getAvatarColor = (str: string) => {
    const colors = ['#f3e8ff', '#dcfce7', '#fef3c7', '#dbeafe', '#ccfbf1'];
    let hash = 0;
    for (let i = 0; i < str.length; i++) hash = str.charCodeAt(i) + ((hash << 5) - hash);
    return colors[Math.abs(hash) % colors.length];
  };

  return (
    <div>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>Become a partner</h1>
        
        <div className={styles.headerActions}>

          
          <button className={styles.iconButton}>
            <SlidersHorizontal size={18} />
          </button>
          
          <button className={styles.iconButton}>
            <Filter size={18} />
          </button>
        </div>
      </div>

      <div className={styles.card}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Vendor</th>
              <th>Location</th>
              <th>Applied On</th>
              <th>Status</th>
              <th style={{ textAlign: 'right' }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr><td colSpan={5} style={{textAlign: 'center'}}>Loading...</td></tr>
            ) : vendors.map((vendor) => {
              const initials = vendor.businessName.substring(0, 2).toUpperCase();
              const avatarColor = getAvatarColor(vendor.businessName);
              const dateObj = new Date(vendor.created);
              
              return (
                <tr key={vendor.id}>
                  <td>
                    <div className={styles.vendorCell}>
                      <div 
                        className={styles.vendorAvatar} 
                        style={{ 
                          backgroundColor: avatarColor,
                          color: getTextColor(avatarColor)
                        }}
                      >
                        {initials}
                      </div>
                      <div className={styles.vendorInfo}>
                        <span className={styles.vendorName}>{vendor.businessName}</span>
                        <span className={styles.vendorPhone}>{vendor.phone}</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className={styles.locationCell}>
                      <MapPin size={16} color="#94a3b8" />
                      {vendor.address.split(',').pop() || vendor.address}
                    </div>
                  </td>
                  <td>
                    <div className={styles.dateInfo}>
                      <span className={styles.dateMain}>{dateObj.toLocaleDateString('en-US', {month: 'short', day: 'numeric', year: 'numeric'})}</span>
                      <span className={styles.dateSub}>{dateObj.toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit'})}</span>
                    </div>
                  </td>
                  <td>
                    <div className={`${styles.statusBadge} ${getStatusClass(vendor.status)}`}>
                      <span className={styles.statusDot}></span>
                      {vendor.status}
                    </div>
                  </td>
                  <td style={{ textAlign: 'right' }}>
                    <Link href={`/admin/become-partner/${vendor.id}`}>
                      <button className={styles.reviewBtn}>
                        Review
                      </button>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
