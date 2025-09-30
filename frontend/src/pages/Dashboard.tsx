import React, { useState } from 'react';
import RealTimeAdminDashboard from './RealTimeAdminDashboard';
import RenterDashboard from './RenterDashboard';
import HostDashboard from './HostDashboard';
import AdminQuickActions from '../components/admin/AdminQuickActions';

const Dashboard: React.FC = () => {
  const [activeRole, setActiveRole] = useState<'renter' | 'host' | 'admin'>('renter');

  // Admin can switch between different role views
  const handleRoleSwitch = (role: 'renter' | 'host' | 'admin') => {
    setActiveRole(role);
  };

  return (
    <div className="page-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
          <p className="text-gray-300">Welcome to your dashboard!</p>
          
          {/* Role Switcher */}
          <div className="mt-4 flex space-x-2">
            <button
              onClick={() => handleRoleSwitch('renter')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeRole === 'renter'
                  ? 'bg-white/20 text-white'
                  : 'bg-white/10 text-white/70 hover:bg-white/20'
              }`}
            >
              Renter View
            </button>
            <button
              onClick={() => handleRoleSwitch('host')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeRole === 'host'
                  ? 'bg-white/20 text-white'
                  : 'bg-white/10 text-white/70 hover:bg-white/20'
              }`}
            >
              Host View
            </button>
            <button
              onClick={() => handleRoleSwitch('admin')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeRole === 'admin'
                  ? 'bg-white/20 text-white'
                  : 'bg-white/10 text-white/70 hover:bg-white/20'
              }`}
            >
              Admin Panel
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-6">
          {activeRole === 'renter' && <RenterDashboard />}
          {activeRole === 'host' && <HostDashboard />}
          {activeRole === 'admin' && (
            <div className="space-y-6">
              <AdminQuickActions />
              <RealTimeAdminDashboard />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;