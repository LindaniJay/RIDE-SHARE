import React from 'react';
import { AdminLogin } from '../components/AdminLogin';
import SEO from '../components/SEO';

const AdminLoginPage: React.FC = () => {
  return (
    <>
      <SEO 
        title="Admin Login - RideShare SA"
        description="Administrator access to RideShare SA dashboard"
        keywords="admin login, administrator, dashboard, RideShare SA"
        url="https://rideshare-sa.co.za/admin-login"
      />
      <AdminLogin />
    </>
  );
};

export default AdminLoginPage;
