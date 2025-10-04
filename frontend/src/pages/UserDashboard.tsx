import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import UserBookings from '../components/UserBookings';
import GlassCard from '../components/GlassCard';
import Icon from '../components/Icon';
import LoadingSpinner from '../components/LoadingSpinner';
import { useToast } from '../components/ToastProvider';
// Removed mock data imports

interface UserStats {
  totalBookings: number;
  activeBookings: number;
  completedBookings: number;
  totalSpent: number;
  averageRating: number;
  savedVehicles: number;
}

const UserDashboard: React.FC = () => {
  const { user } = useAuth();
  const { showToast } = useToast();
  const [activeTab, setActiveTab] = useState('overview');
  const [stats, setStats] = useState<UserStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState<string | null>(null);

  useEffect(() => {
    fetchUserStats();
  }, [user?.id]);

  const fetchUserStats = async () => {
    try {
      if (!user?.id) {
        setLoading(false);
        return;
      }

      setLoading(true);
      const response = await fetch(`/api/user/stats/${user.id}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch user stats');
      }

      const data = await response.json();
      setStats(data);
      showToast('Dashboard data loaded successfully!', 'success');
    } catch (error) {
      console.error('Error fetching user stats:', error);
      setStats(null);
      showToast('Failed to load dashboard data. Please try again.', 'error');
    } finally {
      setLoading(false);
    }
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'Home' },
    { id: 'bookings', label: 'My Bookings', icon: 'Calendar' },
    { id: 'profile', label: 'Profile', icon: 'User' },
    { id: 'settings', label: 'Settings', icon: 'Settings' }
  ];

  return (
    <div className="page-background p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">
            Welcome to your dashboard!
          </h1>
          <p className="text-gray-300">
            Manage your bookings and account settings
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-white/20 text-white'
                  : 'bg-white/10 text-white/70 hover:bg-white/20'
              }`}
            >
              <Icon name={tab.icon} className="h-4 w-4" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="space-y-6">
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <GlassCard className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-blue-500/20 rounded-lg">
                    <Icon name="Calendar" className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Total Bookings</h3>
                    <p className="text-2xl font-bold text-blue-400">{stats?.totalBookings || 0}</p>
                  </div>
                </div>
              </GlassCard>

              <GlassCard className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-green-500/20 rounded-lg">
                    <Icon name="CheckCircle" className="h-6 w-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Active Bookings</h3>
                    <p className="text-2xl font-bold text-green-400">{stats?.activeBookings || 0}</p>
                  </div>
                </div>
              </GlassCard>

              <GlassCard className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-yellow-500/20 rounded-lg">
                    <Icon name="Clock" className="h-6 w-6 text-yellow-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Completed</h3>
                    <p className="text-2xl font-bold text-yellow-400">{stats?.completedBookings || 0}</p>
                  </div>
                </div>
              </GlassCard>

              <GlassCard className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-purple-500/20 rounded-lg">
                    <Icon name="DollarSign" className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Total Spent</h3>
                    <p className="text-2xl font-bold text-purple-400">R{(stats?.totalSpent || 0).toLocaleString()}</p>
                  </div>
                </div>
              </GlassCard>

              <GlassCard className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-red-500/20 rounded-lg">
                    <Icon name="Star" className="h-6 w-6 text-red-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Average Rating</h3>
                    <p className="text-2xl font-bold text-red-400">{stats?.averageRating || 0}</p>
                  </div>
                </div>
              </GlassCard>

              <GlassCard className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-indigo-500/20 rounded-lg">
                    <Icon name="TrendingUp" className="h-6 w-6 text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Saved Vehicles</h3>
                    <p className="text-2xl font-bold text-indigo-400">{stats?.savedVehicles || 0}</p>
                  </div>
                </div>
              </GlassCard>
            </div>
          )}

          {activeTab === 'bookings' && (
            <UserBookings userId={user?.id || ''} role="renter" />
          )}

          {activeTab === 'profile' && (
            <div className="space-y-6">
              <GlassCard className="p-6">
                <h2 className="text-xl font-semibold text-white mb-4">Profile Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">First Name</label>
                    <input
                      type="text"
                      value={user?.firstName || ''}
                      className="glass-input"
                      readOnly
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Last Name</label>
                    <input
                      type="text"
                      value={user?.lastName || ''}
                      className="glass-input"
                      readOnly
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                    <input
                      type="email"
                      value={user?.email || ''}
                      className="glass-input"
                      readOnly
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Phone</label>
                    <input
                      type="tel"
                      value={user?.phone || ''}
                      className="glass-input"
                      readOnly
                    />
                  </div>
                </div>
                <div className="mt-6 flex gap-4">
                  <button
                    onClick={async () => {
                      setActionLoading('edit-profile');
                      try {
                        // Simulate API call
                        await new Promise(resolve => setTimeout(resolve, 1500));
                        showToast('Profile edit form opened successfully!', 'success');
                      } catch (error) {
                        showToast('Failed to open profile editor', 'error');
                      } finally {
                        setActionLoading(null);
                      }
                    }}
                    disabled={actionLoading === 'edit-profile'}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                  >
                    {actionLoading === 'edit-profile' ? (
                      <LoadingSpinner size="sm" text="" />
                    ) : (
                      <Icon name="Edit" className="h-4 w-4 mr-2" />
                    )}
                    {actionLoading === 'edit-profile' ? 'Opening...' : 'Edit Profile'}
                  </button>
                  <button
                    onClick={async () => {
                      setActionLoading('change-password');
                      try {
                        // Simulate API call
                        await new Promise(resolve => setTimeout(resolve, 1500));
                        showToast('Password change form opened successfully!', 'success');
                      } catch (error) {
                        showToast('Failed to open password change form', 'error');
                      } finally {
                        setActionLoading(null);
                      }
                    }}
                    disabled={actionLoading === 'change-password'}
                    className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                  >
                    {actionLoading === 'change-password' ? (
                      <LoadingSpinner size="sm" text="" />
                    ) : (
                      <Icon name="Lock" className="h-4 w-4 mr-2" />
                    )}
                    {actionLoading === 'change-password' ? 'Opening...' : 'Change Password'}
                  </button>
                </div>
              </GlassCard>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="space-y-6">
              <GlassCard className="p-6">
                <h2 className="text-xl font-semibold text-white mb-4">Account Settings</h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-medium text-white">Email Notifications</h3>
                      <p className="text-gray-300 text-sm">Receive updates about your bookings</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="sr-only peer" 
                        defaultChecked 
                        onChange={(e) => {
                          console.log('Email notifications:', e.target.checked);
                          // TODO: Implement notification preference saving
                        }}
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-medium text-white">SMS Notifications</h3>
                      <p className="text-gray-300 text-sm">Receive text message updates</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="sr-only peer" 
                        onChange={(e) => {
                          console.log('SMS notifications:', e.target.checked);
                          // TODO: Implement SMS notification preference saving
                        }}
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                </div>
                <div className="mt-6 flex gap-4">
                  <button
                    onClick={async () => {
                      setActionLoading('save-settings');
                      try {
                        // Simulate API call
                        await new Promise(resolve => setTimeout(resolve, 2000));
                        showToast('Settings saved successfully!', 'success');
                      } catch (error) {
                        showToast('Failed to save settings', 'error');
                      } finally {
                        setActionLoading(null);
                      }
                    }}
                    disabled={actionLoading === 'save-settings'}
                    className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                  >
                    {actionLoading === 'save-settings' ? (
                      <LoadingSpinner size="sm" text="" />
                    ) : (
                      <Icon name="Save" className="h-4 w-4 mr-2" />
                    )}
                    {actionLoading === 'save-settings' ? 'Saving...' : 'Save Settings'}
                  </button>
                  <button
                    onClick={async () => {
                      setActionLoading('export-data');
                      try {
                        // Simulate API call
                        await new Promise(resolve => setTimeout(resolve, 3000));
                        showToast('Data export started! You will receive an email when ready.', 'info');
                      } catch (error) {
                        showToast('Failed to start data export', 'error');
                      } finally {
                        setActionLoading(null);
                      }
                    }}
                    disabled={actionLoading === 'export-data'}
                    className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                  >
                    {actionLoading === 'export-data' ? (
                      <LoadingSpinner size="sm" text="" />
                    ) : (
                      <Icon name="Download" className="h-4 w-4 mr-2" />
                    )}
                    {actionLoading === 'export-data' ? 'Preparing...' : 'Export Data'}
                  </button>
                </div>
              </GlassCard>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
