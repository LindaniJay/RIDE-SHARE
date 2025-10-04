import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Icon from '../components/Icon';
import GlassCard from '../components/GlassCard';
import PerformanceMonitor from '../components/PerformanceMonitor';
import LoadingSpinner from '../components/LoadingSpinner';
import { useToast } from '../components/ToastProvider';
import RealTimeNotifications from '../components/RealTimeNotifications';
import { AdminStats } from '../services/adminService';
// Removed mock data imports

// Import admin components
import UserManagementPanel from '../components/admin/UserManagementPanel';
import VehicleManagementPanel from '../components/admin/VehicleManagementPanel';
import BookingManagementPanel from '../components/admin/BookingManagementPanel';
import FinancialDashboard from '../components/admin/FinancialDashboard';
import ContentModerationPanel from '../components/admin/ContentModerationPanel';
import AnalyticsDashboard from '../components/admin/AnalyticsDashboard';
import SystemAdminPanel from '../components/admin/SystemAdminPanel';
import DocumentManagementPanel from '../components/admin/DocumentManagementPanel';
import VehicleApprovalPanel from '../components/VehicleApprovalPanel';

const AdminDashboard: React.FC = () => {
  const { user, logout } = useAuth();
  const { showToast } = useToast();
  const navigate = useNavigate();
  const location = useLocation();
  const [stats, setStats] = useState<AdminStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const fetchStats = async () => {
    try {
      setLoading(true);
      showToast('Loading admin dashboard...', 'info');
      
      const response = await fetch('/api/admin/dashboard-stats', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
          'Content-Type': 'application/json'
        }
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch admin stats');
      }
      
      const result = await response.json();
      if (result.success) {
        // Transform the backend response to match our interface
        const transformedStats: AdminStats = {
          overview: {
            totalUsers: result.stats.users.total,
            pendingUsers: 0, // We'll need to add this to the backend
            totalVehicles: result.stats.vehicles.total,
            pendingVehicles: result.stats.vehicles.pending,
            totalBookings: result.stats.bookings.total,
            pendingBookings: 0, // We'll need to add this to the backend
            totalRevenue: result.stats.revenue.total
          },
          recentActivity: {
            recentUsers: [], // We'll need to add this to the backend
            recentVehicles: [] // We'll need to add this to the backend
          }
        };
        setStats(transformedStats);
      } else {
        throw new Error(result.error || 'Failed to fetch admin stats');
      }
    } catch (error) {
      console.error('Error fetching admin stats:', error);
      // Set empty state on error instead of mock data
      setStats(null);
    } finally {
      setLoading(false);
    }
  };

  const handleRefresh = () => {
    fetchStats();
  };

  const handleLogout = async () => {
    try {
      await logout();
      // Navigation will be handled by the AdminAuthContext
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const adminTabs = [
    { id: 'overview', label: 'Overview', icon: 'bar-chart', path: '/admin-dashboard' },
    { id: 'users', label: 'User Management', icon: 'users', path: '/admin-dashboard/users' },
    { id: 'vehicles', label: 'Vehicle Management', icon: 'car', path: '/admin-dashboard/vehicles' },
    { id: 'vehicle-approvals', label: 'Vehicle Approvals', icon: 'check-circle', path: '/admin-dashboard/vehicle-approvals' },
    { id: 'bookings', label: 'Booking Management', icon: 'calendar', path: '/admin-dashboard/bookings' },
    { id: 'financial', label: 'Financial Dashboard', icon: 'dollar-sign', path: '/admin-dashboard/financial' },
    { id: 'content', label: 'Content Moderation', icon: 'shield', path: '/admin-dashboard/content' },
    { id: 'analytics', label: 'Analytics & Reports', icon: 'trending-up', path: '/admin-dashboard/analytics' },
    { id: 'system', label: 'System Admin', icon: 'settings', path: '/admin-dashboard/system' },
    { id: 'documents', label: 'Document Management', icon: 'file-text', path: '/admin-dashboard/documents' },
  ];

  useEffect(() => {
    // Check if admin is authenticated
    if (!user || user.role !== 'admin') {
      navigate('/');
      return;
    }

    fetchStats();
    // Set up polling for real-time updates
    const interval = setInterval(fetchStats, 30000); // Update every 30 seconds
    return () => clearInterval(interval);
  }, [user, navigate]);

  // Show loading while checking authentication or fetching data
  if (loading || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-white text-lg">Loading Admin Dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="flex">
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden fixed top-4 left-4 z-50 p-3 bg-white/20 backdrop-blur-md rounded-lg border border-white/30 text-white hover:bg-white/30 transition-all"
        >
          <Icon name={isMobileMenuOpen ? "X" : "Menu"} className="h-5 w-5" />
        </button>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div 
            className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        {/* Sidebar Navigation */}
        <div className={`${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white/10 backdrop-blur-md border-r border-white/20 min-h-screen transition-transform duration-300 ease-in-out`}>
          <div className="p-6">
            <div className="flex items-center space-x-3 mb-8">
              <div className="bg-gradient-to-r from-blue-600/90 to-purple-600/90 backdrop-blur-sm rounded-lg p-3 shadow-xl border border-white/30">
                <div className="text-white font-bold text-lg">RideShare</div>
                <div className="text-white/80 text-xs">South Africa</div>
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">Admin Dashboard</h1>
                <p className="text-white/70 text-sm">RideShare SA Management</p>
              </div>
            </div>
            
            <div className="space-y-2 flex-1">
              {adminTabs.map((tab) => (
                <Link
                  key={tab.id}
                  to={tab.path}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
                    activeTab === tab.id
                      ? 'bg-white/20 text-white'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setIsMobileMenuOpen(false); // Close mobile menu on navigation
                  }}
                >
                  <Icon name={tab.icon} className="h-5 w-5" />
                  <span className="font-medium">{tab.label}</span>
                </Link>
              ))}
            </div>
            
            {/* Logout Button */}
            <div className="mt-8 pt-4 border-t border-white/20">
              <button
                onClick={handleLogout}
                className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all text-red-400 hover:text-white hover:bg-red-600/20"
              >
                <Icon name="log-out" className="h-5 w-5" />
                <span className="font-medium">Exit Admin Dashboard</span>
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-4 lg:p-6">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-6 lg:mb-8">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                <div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                    {adminTabs.find(tab => tab.id === activeTab)?.label || 'Admin Dashboard'}
                  </h2>
                  <p className="text-gray-300 text-sm lg:text-base">
                    Welcome back, {user?.firstName} {user?.lastName}
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-2 sm:space-y-0 sm:space-x-2">
                  <RealTimeNotifications userId={user?.id || ''} userRole="admin" />
                  <button
                    onClick={handleRefresh}
                    disabled={loading}
                    className="flex items-center justify-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 text-white hover:bg-white/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <LoadingSpinner size="sm" text="" />
                    ) : (
                      <Icon name="refresh-cw" className="h-4 w-4" />
                    )}
                    <span className="hidden sm:inline">{loading ? 'Refreshing...' : 'Refresh'}</span>
                  </button>
                  <button
                    onClick={handleLogout}
                    className="flex items-center justify-center space-x-2 px-4 py-2 bg-red-600/80 backdrop-blur-md rounded-lg border border-red-500/30 text-white hover:bg-red-600 transition-all"
                  >
                    <Icon name="log-out" className="h-4 w-4" />
                    <span className="hidden sm:inline">Exit Admin</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Routes */}
            <Routes>
              <Route path="/" element={<OverviewTab stats={stats} />} />
              <Route path="/users" element={<UserManagementPanel onRefresh={handleRefresh} />} />
              <Route path="/vehicles" element={<VehicleManagementPanel onRefresh={handleRefresh} />} />
              <Route path="/vehicle-approvals" element={<VehicleApprovalPanel />} />
              <Route path="/bookings" element={<BookingManagementPanel />} />
              <Route path="/financial" element={<FinancialDashboard onRefresh={handleRefresh} />} />
              <Route path="/content" element={<ContentModerationPanel onRefresh={handleRefresh} />} />
              <Route path="/analytics" element={<AnalyticsDashboard onRefresh={handleRefresh} />} />
              <Route path="/system" element={<SystemAdminPanel />} />
              <Route path="/documents" element={<DocumentManagementPanel onRefresh={handleRefresh} />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

// Overview Tab Component
const OverviewTab: React.FC<{ stats: AdminStats | null }> = ({ stats }) => {
  if (!stats) {
    return (
      <div className="text-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-300">Loading platform statistics...</p>
        <p className="text-gray-400 text-sm mt-2">Connecting to backend services...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6 lg:space-y-8">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        <GlassCard className="p-4 lg:p-6">
          <div className="flex items-center justify-between">
            <div className="flex-1 min-w-0">
              <p className="text-gray-300 text-xs lg:text-sm">Total Users</p>
              <p className="text-xl lg:text-2xl font-bold text-white">{stats.overview.totalUsers}</p>
              <p className="text-red-400 text-xs lg:text-sm mt-1">
                {stats.overview.pendingUsers} pending approval
              </p>
            </div>
            <Icon name="users" className="h-6 w-6 lg:h-8 lg:w-8 text-blue-400 flex-shrink-0" />
          </div>
        </GlassCard>

        <GlassCard className="p-4 lg:p-6">
          <div className="flex items-center justify-between">
            <div className="flex-1 min-w-0">
              <p className="text-gray-300 text-xs lg:text-sm">Total Vehicles</p>
              <p className="text-xl lg:text-2xl font-bold text-white">{stats.overview.totalVehicles}</p>
              <p className="text-red-400 text-xs lg:text-sm mt-1">
                {stats.overview.pendingVehicles} pending approval
              </p>
            </div>
            <Icon name="car" className="h-6 w-6 lg:h-8 lg:w-8 text-green-400 flex-shrink-0" />
          </div>
        </GlassCard>

        <GlassCard className="p-4 lg:p-6">
          <div className="flex items-center justify-between">
            <div className="flex-1 min-w-0">
              <p className="text-gray-300 text-xs lg:text-sm">Total Bookings</p>
              <p className="text-xl lg:text-2xl font-bold text-white">{stats.overview.totalBookings}</p>
              <p className="text-yellow-400 text-xs lg:text-sm mt-1">
                {stats.overview.pendingBookings} pending
              </p>
            </div>
            <Icon name="calendar" className="h-6 w-6 lg:h-8 lg:w-8 text-purple-400 flex-shrink-0" />
          </div>
        </GlassCard>

        <GlassCard className="p-4 lg:p-6">
          <div className="flex items-center justify-between">
            <div className="flex-1 min-w-0">
              <p className="text-gray-300 text-xs lg:text-sm">Total Revenue</p>
              <p className="text-xl lg:text-2xl font-bold text-white">R{stats.overview.totalRevenue.toLocaleString()}</p>
              <p className="text-green-400 text-xs lg:text-sm mt-1">
                +12% from last month
              </p>
            </div>
            <Icon name="dollar-sign" className="h-6 w-6 lg:h-8 lg:w-8 text-yellow-400 flex-shrink-0" />
          </div>
        </GlassCard>
      </div>

      {/* Performance Monitor */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <PerformanceMonitor />
        </div>
        <div className="lg:col-span-1">
          <GlassCard className="p-6">
            <h3 className="text-lg font-semibold text-white mb-4">System Health</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-300 text-sm">Server Status</span>
                <span className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 text-sm font-medium">Online</span>
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300 text-sm">Database</span>
                <span className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 text-sm font-medium">Connected</span>
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300 text-sm">API Status</span>
                <span className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 text-sm font-medium">Healthy</span>
                </span>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <GlassCard className="p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Recent User Registrations</h3>
          <div className="space-y-3">
            {stats.recentActivity.recentUsers.length > 0 ? (
              stats.recentActivity.recentUsers.slice(0, 5).map((user) => (
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
              ))
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-400">No recent user registrations</p>
                <p className="text-gray-500 text-sm">Data will appear here when users register</p>
              </div>
            )}
          </div>
        </GlassCard>

        <GlassCard className="p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Recent Vehicle Listings</h3>
          <div className="space-y-3">
            {stats.recentActivity.recentVehicles.length > 0 ? (
              stats.recentActivity.recentVehicles.slice(0, 5).map((vehicle) => (
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
              ))
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-400">No recent vehicle listings</p>
                <p className="text-gray-500 text-sm">Data will appear here when hosts list vehicles</p>
              </div>
            )}
          </div>
        </GlassCard>
      </div>

      {/* Quick Actions */}
      <GlassCard className="p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button 
            onClick={() => navigate('/admin-dashboard/users')}
            className="flex items-center space-x-2 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-all"
          >
            <Icon name="user-plus" className="h-5 w-5 text-blue-400" />
            <span className="text-white">Approve Users</span>
          </button>
          <button 
            onClick={() => navigate('/admin-dashboard/vehicle-approvals')}
            className="flex items-center space-x-2 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-all"
          >
            <Icon name="car" className="h-5 w-5 text-green-400" />
            <span className="text-white">Review Vehicles</span>
          </button>
          <button 
            onClick={() => navigate('/admin-dashboard/bookings')}
            className="flex items-center space-x-2 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-all"
          >
            <Icon name="alert-triangle" className="h-5 w-5 text-yellow-400" />
            <span className="text-white">Handle Disputes</span>
          </button>
          <button 
            onClick={() => navigate('/admin-dashboard/documents')}
            className="flex items-center space-x-2 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-all"
          >
            <Icon name="file-text" className="h-5 w-5 text-purple-400" />
            <span className="text-white">Review Documents</span>
          </button>
        </div>
      </GlassCard>
    </div>
  );
};

export default AdminDashboard;
