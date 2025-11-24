'use client';
import AdminDashboard from './AdminDashboard';

export default function DashboardPage() {
  const handleLogout = () => {
    // Implement actual logout logic here (e.g., clear session, redirect to login)
    console.log("Logout from DashboardPage");
  };

  return <AdminDashboard onLogout={handleLogout} />;
}
