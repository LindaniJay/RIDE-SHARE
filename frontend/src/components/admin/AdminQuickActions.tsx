import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import Icon from '../Icon';

interface QuickStats {
  pendingUsers: number;
  pendingVehicles: number;
  pendingBookings: number;
  totalRevenue: number;
  activeUsers: number;
}

const AdminQuickActions: React.FC = () => {
  const { user } = useAuth();
  const [stats, setStats] = useState<QuickStats>({
    pendingUsers: 0,
    pendingVehicles: 0,
    pendingBookings: 0,
    totalRevenue: 0,
    activeUsers: 0
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchQuickStats();
  }, []);

  const fetchQuickStats = async () => {
    try {
      const response = await fetch('/api/admin/stats', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      });
      
      if (response.ok) {
        const data = await response.json();
        setStats({
          pendingUsers: data.data.overview.pendingUsers || 0,
          pendingVehicles: data.data.overview.pendingVehicles || 0,
          pendingBookings: data.data.overview.pendingBookings || 0,
          totalRevenue: data.data.overview.totalRevenue || 0,
          activeUsers: data.data.overview.totalUsers || 0
        });
      }
    } catch (error) {
      console.error('Error fetching quick stats:', error);
    } finally {
      setLoading(false);
    }
  };

  const quickActions = [
    {
      id: 'approve-users',
      title: 'Approve Users',
      description: 'Review and approve pending user registrations',
      icon: 'UserCheck',
      color: 'blue',
      count: stats.pendingUsers,
      action: () => {
        // This would navigate to user approval section
        console.log('Navigate to user approvals');
      }
    },
    {
      id: 'approve-vehicles',
      title: 'Approve Vehicles',
      description: 'Review and approve pending vehicle listings',
      icon: 'Car',
      color: 'green',
      count: stats.pendingVehicles,
      action: () => {
        // This would navigate to vehicle approval section
        console.log('Navigate to vehicle approvals');
      }
    },
    {
      id: 'manage-bookings',
      title: 'Manage Bookings',
      description: 'Monitor and manage booking requests',
      icon: 'Calendar',
      color: 'purple',
      count: stats.pendingBookings,
      action: () => {
        // This would navigate to booking management
        console.log('Navigate to booking management');
      }
    },
    {
      id: 'view-analytics',
      title: 'View Analytics',
      description: 'Access platform analytics and reports',
      icon: 'BarChart',
      color: 'yellow',
      count: null,
      action: () => {
        // This would navigate to analytics
        console.log('Navigate to analytics');
      }
    },
    {
      id: 'system-settings',
      title: 'System Settings',
      description: 'Configure platform settings and features',
      icon: 'Settings',
      color: 'gray',
      count: null,
      action: () => {
        // This would navigate to system settings
        console.log('Navigate to system settings');
      }
    },
    {
      id: 'support-tickets',
      title: 'Support Tickets',
      description: 'Handle user support requests',
      icon: 'MessageCircle',
      color: 'red',
      count: null,
      action: () => {
        // This would navigate to support tickets
        console.log('Navigate to support tickets');
      }
    }
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Quick Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/70 text-sm">Pending Users</p>
              <p className="text-2xl font-bold text-white">{stats.pendingUsers}</p>
            </div>
            <Icon name="Users" className="h-8 w-8 text-blue-400" />
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/70 text-sm">Pending Vehicles</p>
              <p className="text-2xl font-bold text-white">{stats.pendingVehicles}</p>
            </div>
            <Icon name="Car" className="h-8 w-8 text-green-400" />
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/70 text-sm">Pending Bookings</p>
              <p className="text-2xl font-bold text-white">{stats.pendingBookings}</p>
            </div>
            <Icon name="Calendar" className="h-8 w-8 text-purple-400" />
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/70 text-sm">Total Revenue</p>
              <p className="text-2xl font-bold text-white">R{stats.totalRevenue.toLocaleString()}</p>
            </div>
            <Icon name="DollarSign" className="h-8 w-8 text-yellow-400" />
          </div>
        </div>
      </div>

      {/* Quick Actions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {quickActions.map((action) => (
          <button
            key={action.id}
            onClick={action.action}
            className="p-4 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 text-left group"
          >
            <div className="flex items-start space-x-3">
              <div className={`p-2 rounded-lg bg-${action.color}-500/20`}>
                <Icon name={action.icon} className={`h-6 w-6 text-${action.color}-400`} />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-white font-semibold group-hover:text-white transition-colors">
                    {action.title}
                  </h3>
                  {action.count !== null && (
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      action.count > 0 
                        ? 'bg-red-500/20 text-red-200 border border-red-400/30' 
                        : 'bg-green-500/20 text-green-200 border border-green-400/30'
                    }`}>
                      {action.count}
                    </span>
                  )}
                </div>
                <p className="text-white/70 text-sm">{action.description}</p>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
        <h3 className="text-lg font-semibold text-white mb-4">Recent Activity</h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg">
            <Icon name="UserPlus" className="h-5 w-5 text-green-400" />
            <div>
              <p className="text-white text-sm">New user registration</p>
              <p className="text-white/70 text-xs">2 minutes ago</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg">
            <Icon name="Car" className="h-5 w-5 text-blue-400" />
            <div>
              <p className="text-white text-sm">New vehicle listing submitted</p>
              <p className="text-white/70 text-xs">5 minutes ago</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg">
            <Icon name="Calendar" className="h-5 w-5 text-purple-400" />
            <div>
              <p className="text-white text-sm">New booking request</p>
              <p className="text-white/70 text-xs">10 minutes ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminQuickActions;
