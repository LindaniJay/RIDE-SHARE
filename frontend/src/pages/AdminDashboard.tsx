import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import Icon from '../components/Icon';
import GlassCard from '../components/GlassCard';
import GlassButton from '../components/GlassButton';
import StatusBadge from '../components/StatusBadge';
import OptimizedImage from '../components/OptimizedImage';
import { DashboardSkeleton } from '../components/SkeletonLoader';
import { containerVariants, itemVariants, dashboardCardVariants } from '../utils/motionVariants';
import { toast } from 'react-hot-toast';

// API base URL
const API_BASE_URL = 'http://localhost:5001/api';

interface DashboardStats {
  totalUsers: number;
  totalListings: number;
  totalBookings: number;
  pendingListings: number;
  activeBookings: number;
  totalRevenue: number;
}

interface Listing {
  id: number;
  hostId: number;
  make: string;
  model: string;
  year: number;
  pricePerDay: number;
  image: string;
  status: 'pending' | 'approved' | 'rejected';
  city: string;
  description?: string;
  createdAt: string;
  host?: {
    id: number;
    name: string;
    email: string;
    phone?: string;
  };
}

interface User {
  id: number;
  uid: string;
  name: string;
  email: string;
  role: 'admin' | 'host' | 'renter';
  isVerified: boolean;
  createdAt: string;
}

const AdminDashboard: React.FC = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [pendingListings, setPendingListings] = useState<Listing[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  const navigationTabs = [
    { id: 'overview', label: 'Overview', icon: 'BarChart' },
    { id: 'listings', label: 'Listings', icon: 'Car' },
    { id: 'users', label: 'Users', icon: 'Users' },
    { id: 'bookings', label: 'Bookings', icon: 'Calendar' },
    { id: 'analytics', label: 'Analytics', icon: 'TrendingUp' },
    { id: 'reports', label: 'Reports', icon: 'FileText' },
    { id: 'settings', label: 'Settings', icon: 'Settings' },
    { id: 'logs', label: 'System Logs', icon: 'Activity' },
    { id: 'support', label: 'Support', icon: 'HelpCircle' },
  ];

  useEffect(() => {
    fetchDashboardData();
  }, [user?.uid]);

  const fetchDashboardData = async () => {
    try {
      if (!user?.uid) {
        setLoading(false);
        return;
      }

      setLoading(true);
      
      const token = await user.getIdToken();
      
      // Fetch dashboard stats
      const statsResponse = await fetch(`${API_BASE_URL}/admin/dashboard-stats`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (statsResponse.ok) {
        const statsData = await statsResponse.json();
        if (statsData.success) {
          setStats(statsData.data);
        }
      }

      // Fetch pending listings
      const listingsResponse = await fetch(`${API_BASE_URL}/admin/pending-listings`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      
      if (listingsResponse.ok) {
        const listingsData = await listingsResponse.json();
        if (listingsData.success) {
          setPendingListings(listingsData.data);
        }
      }

      // Fetch users
      const usersResponse = await fetch(`${API_BASE_URL}/admin/users`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (usersResponse.ok) {
        const usersData = await usersResponse.json();
        if (usersData.success) {
          setUsers(usersData.data);
        }
      }

    } catch (error) {
      console.error('Error fetching dashboard data:', error);
      toast.error('Failed to load dashboard data');
    } finally {
      setLoading(false);
    }
  };

  const handleApproveListing = async (listingId: number) => {
    try {
      if (!user?.uid) return;
      
      const token = await user.getIdToken();
      
      const response = await fetch(`${API_BASE_URL}/admin/listings/${listingId}/approve`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Failed to approve listing');
      }

      const data = await response.json();
      
      if (data.success) {
        toast.success('Listing approved successfully');
        fetchDashboardData(); // Refresh data
      } else {
        throw new Error(data.error || 'Failed to approve listing');
      }
    } catch (error) {
      console.error('Error approving listing:', error);
      toast.error('Failed to approve listing');
    }
  };

  const handleRejectListing = async (listingId: number) => {
    try {
      if (!user?.uid) return;
      
      const token = await user.getIdToken();
      
      const response = await fetch(`${API_BASE_URL}/admin/listings/${listingId}/reject`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          reason: 'Does not meet our quality standards'
        })
      });

      if (!response.ok) {
        throw new Error('Failed to reject listing');
      }

      const data = await response.json();
      
      if (data.success) {
        toast.success('Listing rejected');
        fetchDashboardData(); // Refresh data
      } else {
        throw new Error(data.error || 'Failed to reject listing');
      }
    } catch (error) {
      console.error('Error rejecting listing:', error);
      toast.error('Failed to reject listing');
    }
  };

  if (loading) {
    return <DashboardSkeleton />;
  }

  return (
    <div className="page-background">
      <div className="fixed inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-indigo-900/20 backdrop-blur-sm"></div>
      <motion.div 
        className="relative min-h-screen p-4 lg:p-8 space-y-6 lg:space-y-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
      {/* Hero Header */}
      <motion.div 
        className="flex flex-col lg:flex-row lg:justify-between lg:items-center space-y-6 lg:space-y-0"
        variants={itemVariants}
      >
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-400 to-pink-500 flex items-center justify-center shadow-lg">
            <span className="text-2xl font-bold text-white">
              {user?.name?.charAt(0) || 'A'}
            </span>
          </div>
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold text-white font-heading text-shadow-lg">Admin Dashboard</h1>
            <div className="flex items-center space-x-2 mt-2">
              <p className="text-white/80 text-lg font-body">Platform overview and management</p>
              <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm font-medium border border-red-500/30">
                ⚡ Admin
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Navigation Tabs */}
      <motion.div 
        className="flex flex-wrap gap-2"
        variants={itemVariants}
      >
        {navigationTabs.map((tab, index) => (
          <motion.div
            key={tab.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <GlassButton
              onClick={() => setActiveTab(tab.id)}
              variant={activeTab === tab.id ? 'primary' : 'secondary'}
              size="sm"
              icon={<Icon name={tab.icon} size="sm" />}
              className={activeTab === tab.id ? 'shadow-glow' : ''}
            >
              <span className="hidden sm:inline">{tab.label}</span>
              <span className="sm:hidden">{tab.label.split(' ')[0]}</span>
            </GlassButton>
          </motion.div>
        ))}
      </motion.div>

      {/* Tab Content */}
      <div className="space-y-6">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Stats Cards */}
            {stats && (
              <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6"
                variants={itemVariants}
              >
          <motion.div variants={dashboardCardVariants}>
            <GlassCard
              level={3}
              hover
              animated
              title="Total Users"
              subtitle="Registered users"
              icon={<Icon name="Users" size="md" className="text-primary-400" />}
              className="text-center"
            >
              <div className="text-3xl font-bold text-white mb-2 font-heading">{stats.totalUsers}</div>
              <div className="text-white/70 text-sm font-body">Active users</div>
            </GlassCard>
          </motion.div>
          
          <motion.div variants={dashboardCardVariants}>
            <GlassCard
              level={3}
              hover
              animated
              title="Total Listings"
              subtitle="All vehicles"
              icon={<Icon name="Car" size="md" className="text-accent-400" />}
              className="text-center"
            >
              <div className="text-3xl font-bold text-white mb-2 font-heading">{stats.totalListings}</div>
              <div className="text-white/70 text-sm font-body">Vehicles listed</div>
            </GlassCard>
          </motion.div>
          
          <motion.div variants={dashboardCardVariants}>
            <GlassCard
              level={3}
              hover
              animated
              title="Pending Reviews"
              subtitle="Awaiting approval"
              icon={<Icon name="Clock" size="md" className="text-yellow-400" />}
              className="text-center"
            >
              <div className="text-3xl font-bold text-white mb-2 font-heading">{stats.pendingListings}</div>
              <div className="text-white/70 text-sm font-body">Need review</div>
            </GlassCard>
          </motion.div>
          
          <motion.div variants={dashboardCardVariants}>
            <GlassCard
              level={3}
              hover
              animated
              title="Active Bookings"
              subtitle="Current rentals"
              icon={<Icon name="Calendar" size="md" className="text-green-400" />}
              className="text-center"
            >
              <div className="text-3xl font-bold text-white mb-2 font-heading">{stats.activeBookings}</div>
              <div className="text-white/70 text-sm font-body">In progress</div>
            </GlassCard>
          </motion.div>
          
          <motion.div variants={dashboardCardVariants}>
            <GlassCard
              level={3}
              hover
              animated
              title="Total Revenue"
              subtitle="Platform earnings"
              icon={<Icon name="DollarSign" size="md" className="text-green-400" />}
              className="text-center"
            >
              <div className="text-3xl font-bold text-white mb-2 font-heading">R{stats.totalRevenue.toLocaleString()}</div>
              <div className="text-white/70 text-sm font-body">Total earnings</div>
            </GlassCard>
          </motion.div>
          
          <motion.div variants={dashboardCardVariants}>
            <GlassCard
              level={3}
              hover
              animated
              title="Total Bookings"
              subtitle="All time"
              icon={<Icon name="BookOpen" size="md" className="text-blue-400" />}
              className="text-center"
            >
              <div className="text-3xl font-bold text-white mb-2 font-heading">{stats.totalBookings}</div>
              <div className="text-white/70 text-sm font-body">Completed bookings</div>
            </GlassCard>
          </motion.div>
              </motion.div>
            )}
          </motion.div>
        )}

        {/* Listings Tab */}
        {activeTab === 'listings' && (
          <motion.div variants={itemVariants}>
            <GlassCard 
              level={3}
              hover
              animated
              title="Pending Vehicle Approvals" 
              icon={<Icon name="AlertCircle" size="md" className="text-yellow-400" />}
            >
          {pendingListings.length === 0 ? (
            <div className="text-center py-8">
              <Icon name="CheckCircle" size="lg" className="text-green-400 mx-auto mb-4" />
              <p className="text-white/70">No pending listings</p>
              <p className="text-white/50 text-sm">All vehicles have been reviewed</p>
            </div>
          ) : (
            <div className="space-y-4">
              {pendingListings.map((listing, index) => (
                <motion.div 
                  key={listing.id} 
                  className="flex items-center space-x-4 p-4 glass-2 rounded-lg"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <OptimizedImage 
                    src={listing.image}
                    alt={`${listing.make} ${listing.model}`}
                    width={80}
                    height={60}
                    className="w-20 h-15 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h4 className="text-white font-medium font-body">
                      {listing.make} {listing.model} ({listing.year})
                    </h4>
                    <p className="text-white/70 text-sm font-body">
                      {listing.city} • R{listing.pricePerDay}/day
                    </p>
                    <p className="text-white/60 text-xs font-body">
                      Listed by {listing.host?.name} • {new Date(listing.createdAt).toLocaleDateString()}
                    </p>
                    {listing.description && (
                      <p className="text-white/60 text-xs font-body mt-1 line-clamp-2">
                        {listing.description}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col items-end space-y-2">
                    <StatusBadge status={listing.status} />
                    <div className="flex space-x-2">
                      <GlassButton
                        onClick={() => handleApproveListing(listing.id)}
                        variant="primary"
                        size="sm"
                        icon={<Icon name="Check" size="sm" />}
                      >
                        Approve
                      </GlassButton>
                      <GlassButton
                        onClick={() => handleRejectListing(listing.id)}
                        variant="secondary"
                        size="sm"
                        icon={<Icon name="X" size="sm" />}
                      >
                        Reject
                      </GlassButton>
                </div>
              </div>
                </motion.div>
              ))}
            </div>
          )}
              </GlassCard>
          </motion.div>
        )}

        {/* Users Tab */}
        {activeTab === 'users' && (
          <motion.div variants={itemVariants}>
            <GlassCard 
              level={3}
              hover
              animated
              title="User Management" 
              icon={<Icon name="Users" size="md" className="text-primary-400" />}
            >
          <div className="space-y-3">
            {users.slice(0, 5).map((user, index) => (
              <motion.div 
                key={user.id} 
                className="flex items-center justify-between p-3 glass-2 rounded-lg"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary-500/20 rounded-full flex items-center justify-center">
                    <Icon name="User" size="sm" className="text-primary-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium font-body">{user.name}</h4>
                    <p className="text-white/70 text-sm font-body">{user.email}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    user.role === 'admin' ? 'bg-red-500/20 text-red-400' :
                    user.role === 'host' ? 'bg-blue-500/20 text-blue-400' :
                    'bg-green-500/20 text-green-400'
                  }`}>
                    {user.role}
                  </span>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    user.isVerified ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {user.isVerified ? 'Verified' : 'Pending'}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </GlassCard>
          </motion.div>
        )}

        {/* Bookings Tab */}
        {activeTab === 'bookings' && (
          <div className="space-y-6">
            <GlassCard title="Booking Management" icon="Calendar">
              <div className="space-y-3">
                <div className="text-center py-8">
                  <Icon name="Calendar" size="lg" className="text-white/50 mx-auto mb-4" />
                  <p className="text-white/70">No bookings to manage</p>
                  <p className="text-white/50 text-sm">Bookings will appear here for management</p>
                </div>
              </div>
            </GlassCard>
          </div>
        )}

        {/* Analytics Tab */}
        {activeTab === 'analytics' && (
          <div className="space-y-6">
            <GlassCard title="Platform Analytics" icon="TrendingUp">
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-white/5 rounded-lg">
                    <h4 className="text-white font-medium mb-2">User Growth</h4>
                    <div className="text-3xl font-bold text-white">+15%</div>
                    <div className="text-green-400 text-sm">This month</div>
                  </div>
                  <div className="p-4 bg-white/5 rounded-lg">
                    <h4 className="text-white font-medium mb-2">Booking Rate</h4>
                    <div className="text-3xl font-bold text-white">78%</div>
                    <div className="text-green-400 text-sm">Success rate</div>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        )}

        {/* Reports Tab */}
        {activeTab === 'reports' && (
          <div className="space-y-6">
            <GlassCard title="Admin Reports" icon="FileText">
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                    <h4 className="text-white font-medium mb-2">Platform Report</h4>
                    <p className="text-white/70 text-sm mb-3">Complete platform performance analysis</p>
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                      Generate Report
                    </button>
                  </div>
                  <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                    <h4 className="text-white font-medium mb-2">Financial Report</h4>
                    <p className="text-white/70 text-sm mb-3">Revenue and financial metrics</p>
                    <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
                      Download PDF
                    </button>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        )}

        {/* Settings Tab */}
        {activeTab === 'settings' && (
          <div className="space-y-6">
            <GlassCard title="System Settings" icon="Settings">
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">Platform Name</label>
                    <input
                      type="text"
                      value="RideShare SA"
                      className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">Commission Rate (%)</label>
                    <input
                      type="number"
                      value="10"
                      className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <div className="flex justify-end">
                  <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                    Save Settings
                  </button>
                </div>
              </div>
            </GlassCard>
          </div>
        )}

        {/* System Logs Tab */}
        {activeTab === 'logs' && (
          <div className="space-y-6">
            <GlassCard title="System Logs" icon="Activity">
              <div className="space-y-3">
                <div className="text-center py-8">
                  <Icon name="Activity" size="lg" className="text-white/50 mx-auto mb-4" />
                  <p className="text-white/70">No system logs available</p>
                  <p className="text-white/50 text-sm">System activity logs will appear here</p>
                </div>
              </div>
            </GlassCard>
          </div>
        )}

        {/* Support Tab */}
        {activeTab === 'support' && (
          <div className="space-y-6">
            <GlassCard title="Admin Support" icon="HelpCircle">
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                    <h4 className="text-white font-medium mb-2">System Documentation</h4>
                    <p className="text-white/70 text-sm mb-3">Access system documentation and guides</p>
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                      View Docs
                    </button>
                  </div>
                  <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                    <h4 className="text-white font-medium mb-2">Technical Support</h4>
                    <p className="text-white/70 text-sm mb-3">Get technical assistance</p>
                    <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
                      Contact Support
                    </button>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        )}
      </div>
      </motion.div>
    </div>
  );
};

export default AdminDashboard;