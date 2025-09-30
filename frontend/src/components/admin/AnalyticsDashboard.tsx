import React, { useState, useEffect } from 'react';
import GlassCard from '../GlassCard';
import Icon from '../Icon';

interface AnalyticsDashboardProps {
  onRefresh: () => void;
}

interface AnalyticsData {
  userGrowth: Array<{ month: string; users: number; growth: number }>;
  bookingTrends: Array<{ month: string; bookings: number; revenue: number }>;
  vehicleStats: {
    total: number;
    active: number;
    pending: number;
    topTypes: Array<{ type: string; count: number }>;
  };
  platformMetrics: {
    averageBookingValue: number;
    userRetentionRate: number;
    conversionRate: number;
    customerSatisfaction: number;
  };
  topLocations: Array<{ location: string; bookings: number; revenue: number }>;
  systemPerformance: {
    uptime: number;
    responseTime: number;
    errorRate: number;
    activeUsers: number;
  };
}

const AnalyticsDashboard: React.FC<AnalyticsDashboardProps> = ({ }) => {
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [dateRange, setDateRange] = useState('6months');
  const [activeChart, setActiveChart] = useState('users');

  useEffect(() => {
    fetchAnalyticsData();
  }, [dateRange]);

  const fetchAnalyticsData = async () => {
    try {
      setLoading(true);
      // Mock data - replace with actual API calls
      const mockData: AnalyticsData = {
        userGrowth: [
          { month: 'Jan', users: 1200, growth: 15 },
          { month: 'Feb', users: 1400, growth: 17 },
          { month: 'Mar', users: 1650, growth: 18 },
          { month: 'Apr', users: 1900, growth: 15 },
          { month: 'May', users: 2200, growth: 16 },
          { month: 'Jun', users: 2500, growth: 14 },
        ],
        bookingTrends: [
          { month: 'Jan', bookings: 450, revenue: 22500 },
          { month: 'Feb', bookings: 520, revenue: 26000 },
          { month: 'Mar', bookings: 680, revenue: 34000 },
          { month: 'Apr', bookings: 750, revenue: 37500 },
          { month: 'May', bookings: 890, revenue: 44500 },
          { month: 'Jun', bookings: 950, revenue: 47500 },
        ],
        vehicleStats: {
          total: 1250,
          active: 1100,
          pending: 150,
          topTypes: [
            { type: 'Sedan', count: 450 },
            { type: 'SUV', count: 380 },
            { type: 'Hatchback', count: 320 },
            { type: 'Truck', count: 100 },
          ]
        },
        platformMetrics: {
          averageBookingValue: 250,
          userRetentionRate: 78,
          conversionRate: 12.5,
          customerSatisfaction: 4.6
        },
        topLocations: [
          { location: 'Cape Town', bookings: 320, revenue: 16000 },
          { location: 'Johannesburg', bookings: 280, revenue: 14000 },
          { location: 'Durban', bookings: 180, revenue: 9000 },
          { location: 'Pretoria', bookings: 150, revenue: 7500 },
        ],
        systemPerformance: {
          uptime: 99.8,
          responseTime: 120,
          errorRate: 0.2,
          activeUsers: 450
        }
      };
      setAnalyticsData(mockData);
    } catch (error) {
      console.error('Error fetching analytics data:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!analyticsData) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-300">No analytics data available</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">Analytics & Reporting</h2>
          <p className="text-gray-300">Platform performance and user insights</p>
        </div>
        <div className="flex items-center space-x-2">
          <select
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
            className="px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="1month">Last Month</option>
            <option value="3months">Last 3 Months</option>
            <option value="6months">Last 6 Months</option>
            <option value="1year">Last Year</option>
          </select>
          <button
            onClick={fetchAnalyticsData}
            className="flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 text-white hover:bg-white/20 transition-all"
          >
            <Icon name="refresh-cw" className="h-4 w-4" />
            <span>Refresh</span>
          </button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <GlassCard className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-300 text-sm">Total Users</p>
              <p className="text-2xl font-bold text-white">{analyticsData.userGrowth[analyticsData.userGrowth.length - 1].users.toLocaleString()}</p>
              <p className="text-green-400 text-sm mt-1">
                +{analyticsData.userGrowth[analyticsData.userGrowth.length - 1].growth}% this month
              </p>
            </div>
            <Icon name="users" className="h-8 w-8 text-blue-400" />
          </div>
        </GlassCard>

        <GlassCard className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-300 text-sm">Monthly Bookings</p>
              <p className="text-2xl font-bold text-white">{analyticsData.bookingTrends[analyticsData.bookingTrends.length - 1].bookings}</p>
              <p className="text-purple-400 text-sm mt-1">
                R{analyticsData.bookingTrends[analyticsData.bookingTrends.length - 1].revenue.toLocaleString()} revenue
              </p>
            </div>
            <Icon name="calendar" className="h-8 w-8 text-purple-400" />
          </div>
        </GlassCard>

        <GlassCard className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-300 text-sm">Active Vehicles</p>
              <p className="text-2xl font-bold text-white">{analyticsData.vehicleStats.active}</p>
              <p className="text-yellow-400 text-sm mt-1">
                {analyticsData.vehicleStats.pending} pending approval
              </p>
            </div>
            <Icon name="car" className="h-8 w-8 text-green-400" />
          </div>
        </GlassCard>

        <GlassCard className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-300 text-sm">Customer Satisfaction</p>
              <p className="text-2xl font-bold text-white">{analyticsData.platformMetrics.customerSatisfaction}/5</p>
              <p className="text-green-400 text-sm mt-1">
                {analyticsData.platformMetrics.userRetentionRate}% retention rate
              </p>
            </div>
            <Icon name="star" className="h-8 w-8 text-yellow-400" />
          </div>
        </GlassCard>
      </div>

      {/* Chart Navigation */}
      <div className="flex space-x-1 bg-white/10 backdrop-blur-md rounded-lg p-1 border border-white/20">
        {[
          { id: 'users', label: 'User Growth', icon: 'users' },
          { id: 'bookings', label: 'Booking Trends', icon: 'calendar' },
          { id: 'vehicles', label: 'Vehicle Stats', icon: 'car' },
          { id: 'locations', label: 'Top Locations', icon: 'map-pin' },
        ].map((chart) => (
          <button
            key={chart.id}
            onClick={() => setActiveChart(chart.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-all ${
              activeChart === chart.id
                ? 'bg-white/20 text-white'
                : 'text-gray-300 hover:text-white hover:bg-white/10'
            }`}
          >
            <Icon name={chart.icon} className="h-4 w-4" />
            <span>{chart.label}</span>
          </button>
        ))}
      </div>

      {/* User Growth Chart */}
      {activeChart === 'users' && (
        <GlassCard className="p-6">
          <h3 className="text-lg font-semibold text-white mb-4">User Growth</h3>
          <div className="space-y-4">
            {analyticsData.userGrowth.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-gray-300 w-16">{item.month}</span>
                <div className="flex-1 mx-4">
                  <div className="w-full bg-white/10 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full"
                      style={{ width: `${(item.users / 3000) * 100}%` }}
                    ></div>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-white font-medium">{item.users.toLocaleString()}</span>
                  <span className="text-green-400 text-sm ml-2">+{item.growth}%</span>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>
      )}

      {/* Booking Trends Chart */}
      {activeChart === 'bookings' && (
        <GlassCard className="p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Booking Trends</h3>
          <div className="space-y-4">
            {analyticsData.bookingTrends.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-gray-300 w-16">{item.month}</span>
                <div className="flex-1 mx-4">
                  <div className="w-full bg-white/10 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-green-500 to-blue-600 h-3 rounded-full"
                      style={{ width: `${(item.bookings / 1000) * 100}%` }}
                    ></div>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-white font-medium">{item.bookings} bookings</span>
                  <span className="text-green-400 text-sm ml-2">R{item.revenue.toLocaleString()}</span>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>
      )}

      {/* Vehicle Stats */}
      {activeChart === 'vehicles' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <GlassCard className="p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Vehicle Overview</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Total Vehicles</span>
                <span className="text-white font-semibold">{analyticsData.vehicleStats.total}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Active</span>
                <span className="text-green-400 font-semibold">{analyticsData.vehicleStats.active}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Pending Approval</span>
                <span className="text-yellow-400 font-semibold">{analyticsData.vehicleStats.pending}</span>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Popular Vehicle Types</h3>
            <div className="space-y-3">
              {analyticsData.vehicleStats.topTypes.map((type, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-gray-300">{type.type}</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-20 bg-white/10 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                        style={{ width: `${(type.count / 500) * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-white font-medium">{type.count}</span>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      )}

      {/* Top Locations */}
      {activeChart === 'locations' && (
        <GlassCard className="p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Top Locations</h3>
          <div className="space-y-4">
            {analyticsData.topLocations.map((location, index) => (
              <div key={index} className="flex items-center justify-between bg-white/5 rounded-lg p-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-medium text-sm">{index + 1}</span>
                  </div>
                  <div>
                    <p className="text-white font-medium">{location.location}</p>
                    <p className="text-gray-400 text-sm">{location.bookings} bookings</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-white font-semibold">R{location.revenue.toLocaleString()}</p>
                  <p className="text-gray-400 text-sm">revenue</p>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>
      )}

      {/* Platform Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <GlassCard className="p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Platform Performance</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Average Booking Value</span>
              <span className="text-white font-semibold">R{analyticsData.platformMetrics.averageBookingValue}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-300">User Retention Rate</span>
              <span className="text-green-400 font-semibold">{analyticsData.platformMetrics.userRetentionRate}%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Conversion Rate</span>
              <span className="text-blue-400 font-semibold">{analyticsData.platformMetrics.conversionRate}%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Customer Satisfaction</span>
              <span className="text-yellow-400 font-semibold">{analyticsData.platformMetrics.customerSatisfaction}/5</span>
            </div>
          </div>
        </GlassCard>

        <GlassCard className="p-6">
          <h3 className="text-lg font-semibold text-white mb-4">System Performance</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Uptime</span>
              <span className="text-green-400 font-semibold">{analyticsData.systemPerformance.uptime}%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Response Time</span>
              <span className="text-blue-400 font-semibold">{analyticsData.systemPerformance.responseTime}ms</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Error Rate</span>
              <span className="text-red-400 font-semibold">{analyticsData.systemPerformance.errorRate}%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Active Users</span>
              <span className="text-purple-400 font-semibold">{analyticsData.systemPerformance.activeUsers}</span>
            </div>
          </div>
        </GlassCard>
      </div>

      {/* Export Actions */}
      <GlassCard className="p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Export Reports</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button className="flex items-center space-x-2 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-all">
            <Icon name="download" className="h-5 w-5 text-blue-400" />
            <span className="text-white">User Report</span>
          </button>
          <button className="flex items-center space-x-2 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-all">
            <Icon name="download" className="h-5 w-5 text-green-400" />
            <span className="text-white">Booking Report</span>
          </button>
          <button className="flex items-center space-x-2 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-all">
            <Icon name="download" className="h-5 w-5 text-purple-400" />
            <span className="text-white">Revenue Report</span>
          </button>
          <button className="flex items-center space-x-2 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-all">
            <Icon name="download" className="h-5 w-5 text-yellow-400" />
            <span className="text-white">Performance Report</span>
          </button>
        </div>
      </GlassCard>
    </div>
  );
};

export default AnalyticsDashboard;
