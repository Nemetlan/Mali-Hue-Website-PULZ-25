'use client';
import React, { useEffect, useState } from 'react';
import { api } from '@/services/api';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Package, DollarSign, ShoppingCart, Activity, LogOut } from 'lucide-react';
import styles from './page.module.css'; // Using the main dashboard page styles for now
import { mc_Alexandria600, mc_Alexandria400 } from '@/utils/fonts';


export default function AdminDashboard() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  // Placeholder for onLogout function
  const handleLogout = () => {
    console.log("Logging out...");
    // Implement actual logout logic here (e.g., clear session, redirect to login)
  };

  useEffect(() => {
    const loadStats = async () => {
      const data = await api.getAdminStats();
      setStats(data);
      setLoading(false);
    };
    loadStats();
  }, []);

  if (loading || !stats) {
    return <div className="p-12 text-center font-serif text-xl animate-pulse">Loading Dashboard...</div>;
  }

  // Mock data for the chart since backend response might be simple
  const chartData = [
    { name: 'Mon', orders: 4 },
    { name: 'Tue', orders: 3 },
    { name: 'Wed', orders: 2 },
    { name: 'Thu', orders: 6 },
    { name: 'Fri', orders: 8 },
    { name: 'Sat', orders: 5 },
    { name: 'Sun', orders: stats.statistics.orders_today },
  ];

  return (
    <div className={styles.adminPage}>
      <div className={styles.header}>
         <h1 className={`${mc_Alexandria600.className} ${styles.title}`}>Dashboard Overview</h1>
         <button 
           onClick={handleLogout}
           className={styles.logoutButton}
         >
           <LogOut className={styles.logoutIcon} />
           Log Out
         </button>
      </div>
      
      {/* Stat Cards */}
      <div className={styles.statCardsGrid}>
        <div className={styles.statCard}>
          <div className={styles.statIconGreen}>
            <DollarSign className={styles.statIcon} />
          </div>
          <div>
            <p className={styles.statLabel}>Total Revenue</p>
            <h3 className={styles.statValue}>${stats.statistics.total_revenue.toLocaleString()}</h3>
          </div>
        </div>
        
        <div className={styles.statCard}>
          <div className={styles.statIconBlue}>
            <ShoppingCart className={styles.statIcon} />
          </div>
          <div>
            <p className={styles.statLabel}>Orders Today</p>
            <h3 className={styles.statValue}>{stats.statistics.orders_today}</h3>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statIconPurple}>
            <Package className={styles.statIcon} />
          </div>
          <div>
            <p className={styles.statLabel}>Active Products</p>
            <h3 className={styles.statValue}>{stats.statistics.active_products}</h3>
          </div>
        </div>
      </div>

      <div className={styles.chartAndOrdersGrid}>
        {/* Chart */}
        <div className={styles.chartCard}>
          <h3 className={`${mc_Alexandria600.className} ${styles.chartTitle}`}>
            <Activity className={styles.chartIcon} /> Weekly Order Volume
          </h3>
          <div className={styles.chartContainer}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="name" stroke="#888" tick={{fontSize: 12}} />
                <YAxis stroke="#888" tick={{fontSize: 12}} />
                <Tooltip 
                  contentStyle={{backgroundColor: '#fff', borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)'}}
                />
                <Bar dataKey="orders" fill="#1A1A1A" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Orders List */}
        <div className={styles.recentOrdersCard}>
          <h3 className={`${mc_Alexandria600.className} ${styles.recentOrdersTitle}`}>Recent Custom Orders</h3>
          {stats.custom_orders.length === 0 && (
            <div className={styles.recentOrdersList}>
                {[1, 2, 3].map((i) => (
                <div key={i} className={styles.orderItem}>
                    <div className={styles.orderItemLeft}>
                    <div className={styles.orderAvatar}>
                        JD
                    </div>
                    <div>
                        <p className={`${mc_Alexandria400.className} ${styles.orderCustomerName}`}>John Doe</p>
                        <p className={`${mc_Alexandria400.className} ${styles.orderType}`}>Custom Commission</p>
                    </div>
                    </div>
                    <span className={styles.orderStatusPending}>Pending</span>
                </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};