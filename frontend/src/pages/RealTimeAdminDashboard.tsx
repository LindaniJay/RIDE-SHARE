import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { AdminService, AdminStats } from '../services/adminService';
import UserApprovalPanel from '../components/admin/UserApprovalPanel';
import VehicleApprovalPanel from '../components/admin/VehicleApprovalPanel';
import AnalyticsDashboard from '../components/AnalyticsDashboard';
import SystemAdminPanel from '../components/admin/SystemAdminPanel';
import ApprovalRequests from '../components/ApprovalRequests';
import ApprovalAnalytics from '../components/ApprovalAnalytics';
import Icon from '../components/Icon';

const RealTimeAdminDashboard: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [stats, setStats] = useState<AdminStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    fetchStats();
    // Set up polling for real-time updates
    const interval = setInterval(fetchStats, 30000); // Update every 30 seconds
    return () => clearInterval(interval);
  }, []);

  const fetchStats = async () => {
    try {
      const statsData = await AdminService.getStats();
      setStats(statsData);
    } catch (error) {
      console.error('Error fetching admin stats:', error);
    } finally {
      setLoading(false);
    }
  };

  // const handleRefresh = () => {
  //   fetchStats();
  // };

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">Admin Dashboard</h1>
              <p className="text-gray-300">Real-time management of RideShare SA platform</p>
              <div className="mt-4 text-sm text-gray-400">
                Welcome, {user?.firstName} {user?.lastName}
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 px-4 py-2 bg-red-600/80 backdrop-blur-md rounded-lg border border-red-500/30 text-white hover:bg-red-600 transition-all"
            >
              <Icon name="log-out" className="h-4 w-4" />
              <span>Exit Admin</span>
            </button>
          </div>
        </div>

        {/* Stats Overview */}
        {stats && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-300 text-sm">Total Users</p>
                  <p className="text-2xl font-bold text-white">{stats.overview.totalUsers}</p>
                </div>
                <Icon name="users" className="h-8 w-8 text-blue-400" />
              </div>
              <div className="mt-2">
                <span className="text-red-400 text-sm">
                  {stats.overview.pendingUsers} pending approval
                </span>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-300 text-sm">Total Vehicles</p>
                  <p className="text-2xl font-bold text-white">{stats.overview.totalVehicles}</p>
                </div>
                <Icon name="car" className="h-8 w-8 text-green-400" />
              </div>
              <div className="mt-2">
                <span className="text-red-400 text-sm">
                  {stats.overview.pendingVehicles} pending approval
                </span>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-300 text-sm">Total Bookings</p>
                  <p className="text-2xl font-bold text-white">{stats.overview.totalBookings}</p>
                </div>
                <Icon name="calendar" className="h-8 w-8 text-purple-400" />
              </div>
              <div className="mt-2">
                <span className="text-yellow-400 text-sm">
                  {stats.overview.pendingBookings} pending
                </span>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-300 text-sm">Total Revenue</p>
                  <p className="text-2xl font-bold text-white">R{stats.overview.totalRevenue.toLocaleString()}</p>
                </div>
                <Icon name="dollar-sign" className="h-8 w-8 text-yellow-400" />
              </div>
            </div>
          </div>
        )}

        {/* Navigation Tabs */}
        <div className="mb-6">
          <div className="flex space-x-1 bg-white/10 backdrop-blur-md rounded-lg p-1 border border-white/20">
            {[
              { id: 'overview', label: 'Overview', icon: 'bar-chart' },
              { id: 'approvals', label: 'Approval Queue', icon: 'clock' },
              { id: 'users', label: 'User Approvals', icon: 'users' },
              { id: 'vehicles', label: 'Vehicle Approvals', icon: 'car' },
              { id: 'analytics', label: 'Analytics', icon: 'trending-up' },
              { id: 'system', label: 'System Admin', icon: 'settings' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-all ${
                  activeTab === tab.id
                    ? 'bg-white/20 text-white'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <Icon name={tab.icon} className="h-4 w-4" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
          {activeTab === 'overview' && (
            <div className="p-6">
              <h2 className="text-xl font-semibold text-white mb-4">Platform Overview</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-medium text-white mb-3">Recent User Registrations</h3>
                  <div className="space-y-2">
                    {stats?.recentActivity.recentUsers.slice(0, 5).map((user) => (
                      <div key={user.id} className="flex items-center justify-between bg-white/5 rounded-lg p-3">
                        <div>
                          <p className="text-white font-medium">{user.firstName} {user.lastName}</p>
                          <p className="text-gray-400 text-sm">{user.email}</p>
                        </div>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          user.approvalStatus === 'pending' ? 'bg-yellow-500/20 text-yellow-400' :
                          user.approvalStatus === 'approved' ? 'bg-green-500/20 text-green-400' :
                          'bg-red-500/20 text-red-400'
                        }`}>
                          {user.approvalStatus}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-white mb-3">Recent Vehicle Listings</h3>
                  <div className="space-y-2">
                    {stats?.recentActivity.recentVehicles.slice(0, 5).map((vehicle) => (
                      <div key={vehicle.id} className="flex items-center justify-between bg-white/5 rounded-lg p-3">
                        <div>
                          <p className="text-white font-medium">{vehicle.title}</p>
                          <p className="text-gray-400 text-sm">{vehicle.make} {vehicle.model}</p>
                        </div>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          vehicle.status === 'pending' ? 'bg-yellow-500/20 text-yellow-400' :
                          vehicle.status === 'approved' ? 'bg-green-500/20 text-green-400' :
                          'bg-red-500/20 text-red-400'
                        }`}>
                          {vehicle.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'approvals' && (
            <div className="p-6 space-y-6">
              <ApprovalAnalytics />
              <ApprovalRequests userRole="admin" showActions={true} />
            </div>
          )}

          {activeTab === 'users' && (
            <div className="p-6">
              <UserApprovalPanel />
            </div>
          )}

          {activeTab === 'vehicles' && (
            <div className="p-6">
              <VehicleApprovalPanel />
            </div>
          )}

          {activeTab === 'analytics' && (
            <div className="p-6">
              <AnalyticsDashboard />
            </div>
          )}

          {activeTab === 'system' && (
            <div className="p-6">
              <SystemAdminPanel />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RealTimeAdminDashboard;

