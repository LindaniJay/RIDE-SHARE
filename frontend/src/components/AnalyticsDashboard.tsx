import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import Icon from './Icon';

interface AnalyticsData {
  overview: {
    totalUsers: number;
    totalVehicles: number;
    totalBookings: number;
    totalRevenue: number;
  };
  growth: {
    users: number;
    vehicles: number;
    bookings: number;
    revenue: number;
  };
  topVehicles: any[];
  userActivity: any[];
  bookingStatusDistribution: any[];
  revenueByMonth: any[];
  userRetention: number;
  averageBookingValue: number;
  conversionRates: {
    renterToBooking: number;
    hostToListing: number;
  };
}

const AnalyticsDashboard: React.FC = () => {
  const { user } = useAuth();
  const [analytics, setAnalytics] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [period, setPeriod] = useState('month');
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    fetchAnalytics();
  }, [period]);

  const fetchAnalytics = async () => {
    try {
      const response = await fetch(`/api/analytics/platform?period=${period}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      });
      
      if (response.ok) {
        const data = await response.json();
        setAnalytics(data.analytics);
      }
    } catch (error) {
      console.error('Error fetching analytics:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!analytics) {
    return (
      <div className="text-center py-8">
        <p className="text-white/70">No analytics data available</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Analytics Dashboard</h2>
        <div className="flex space-x-2">
          <select
            value={period}
            onChange={(e) => setPeriod(e.target.value)}
            className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white"
          >
            <option value="week">This Week</option>
            <option value="month">This Month</option>
            <option value="year">This Year</option>
          </select>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex space-x-1 bg-white/10 backdrop-blur-md rounded-lg p-1 border border-white/20">
        {[
          { id: 'overview', label: 'Overview', icon: 'bar-chart' },
          { id: 'users', label: 'Users', icon: 'users' },
          { id: 'vehicles', label: 'Vehicles', icon: 'car' },
          { id: 'revenue', label: 'Revenue', icon: 'dollar-sign' }
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

      {/* Overview Tab */}
      {activeTab === 'overview' && (
        <div className="space-y-6">
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-300 text-sm">Total Users</p>
                  <p className="text-2xl font-bold text-white">{analytics.overview.totalUsers.toLocaleString()}</p>
                </div>
                <Icon name="users" className="h-8 w-8 text-blue-400" />
              </div>
              <div className="mt-2">
                <span className="text-green-400 text-sm">
                  +{analytics.growth.users} this {period}
                </span>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-300 text-sm">Total Vehicles</p>
                  <p className="text-2xl font-bold text-white">{analytics.overview.totalVehicles.toLocaleString()}</p>
                </div>
                <Icon name="car" className="h-8 w-8 text-green-400" />
              </div>
              <div className="mt-2">
                <span className="text-green-400 text-sm">
                  +{analytics.growth.vehicles} this {period}
                </span>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-300 text-sm">Total Bookings</p>
                  <p className="text-2xl font-bold text-white">{analytics.overview.totalBookings.toLocaleString()}</p>
                </div>
                <Icon name="calendar" className="h-8 w-8 text-purple-400" />
              </div>
              <div className="mt-2">
                <span className="text-green-400 text-sm">
                  +{analytics.growth.bookings} this {period}
                </span>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-300 text-sm">Total Revenue</p>
                  <p className="text-2xl font-bold text-white">R{analytics.overview.totalRevenue.toLocaleString()}</p>
                </div>
                <Icon name="dollar-sign" className="h-8 w-8 text-yellow-400" />
              </div>
              <div className="mt-2">
                <span className="text-green-400 text-sm">
                  +R{analytics.growth.revenue.toLocaleString()} this {period}
                </span>
              </div>
            </div>
          </div>

          {/* Performance Metrics */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
              <h3 className="text-lg font-semibold text-white mb-4">Conversion Rates</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-white/70">Renter to Booking</span>
                  <span className="text-white font-semibold">
                    {analytics.conversionRates.renterToBooking.toFixed(1)}%
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/70">Host to Listing</span>
                  <span className="text-white font-semibold">
                    {analytics.conversionRates.hostToListing.toFixed(1)}%
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/70">Average Booking Value</span>
                  <span className="text-white font-semibold">
                    R{analytics.averageBookingValue.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/70">User Retention</span>
                  <span className="text-white font-semibold">
                    {analytics.userRetention}%
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
              <h3 className="text-lg font-semibold text-white mb-4">Booking Status</h3>
              <div className="space-y-3">
                {analytics.bookingStatusDistribution.map((status) => (
                  <div key={status.status} className="flex justify-between items-center">
                    <span className="text-white/70 capitalize">{status.status}</span>
                    <span className="text-white font-semibold">{status.count}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Users Tab */}
      {activeTab === 'users' && (
        <div className="space-y-6">
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
            <h3 className="text-lg font-semibold text-white mb-4">User Activity</h3>
            <div className="space-y-3">
              {analytics.userActivity.slice(0, 10).map((activity, index) => (
                <div key={index} className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                  <div>
                    <p className="text-white font-medium">{new Date(activity.date).toLocaleDateString()}</p>
                  </div>
                  <span className="text-white font-semibold">{activity.count} new users</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Vehicles Tab */}
      {activeTab === 'vehicles' && (
        <div className="space-y-6">
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
            <h3 className="text-lg font-semibold text-white mb-4">Top Performing Vehicles</h3>
            <div className="space-y-3">
              {analytics.topVehicles.map((vehicle, index) => (
                <div key={index} className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                  <div>
                    <p className="text-white font-medium">{vehicle.vehicle.title}</p>
                    <p className="text-white/70 text-sm">{vehicle.vehicle.make} {vehicle.vehicle.model}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-white font-semibold">{vehicle.bookingCount} bookings</p>
                    <p className="text-white/70 text-sm">R{parseFloat(vehicle.totalRevenue).toLocaleString()}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Revenue Tab */}
      {activeTab === 'revenue' && (
        <div className="space-y-6">
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
            <h3 className="text-lg font-semibold text-white mb-4">Revenue by Month</h3>
            <div className="space-y-3">
              {analytics.revenueByMonth.map((month, index) => (
                <div key={index} className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                  <div>
                    <p className="text-white font-medium">{new Date(month.month).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
                  </div>
                  <span className="text-white font-semibold">R{parseFloat(month.revenue).toLocaleString()}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AnalyticsDashboard;
