import React, { useState, useEffect } from 'react';
import { AnalyticsService, RenterBehaviorAnalytics, CrossRoleAnalytics } from '../services/analyticsService';
import GlassCard from './GlassCard';
import Icon from './Icon';

interface EnhancedAnalyticsProps {
  userRole: 'renter' | 'host' | 'admin';
  userId?: number;
}

const EnhancedAnalytics: React.FC<EnhancedAnalyticsProps> = ({ userRole, userId }) => {
  const [renterAnalytics, setRenterAnalytics] = useState<RenterBehaviorAnalytics | null>(null);
  const [crossRoleAnalytics, setCrossRoleAnalytics] = useState<CrossRoleAnalytics | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('behavior');

  useEffect(() => {
    fetchAnalytics();
  }, [userRole, userId]);

  const fetchAnalytics = async () => {
    try {
      setLoading(true);
      
      if (userRole === 'renter' || userRole === 'admin') {
        const renterData = await AnalyticsService.getRenterBehaviorAnalytics(userId);
        setRenterAnalytics(renterData);
      }
      
      if (userRole === 'admin') {
        const crossRoleData = await AnalyticsService.getCrossRoleAnalytics();
        setCrossRoleAnalytics(crossRoleData);
      }
    } catch (error) {
      console.error('Error fetching analytics:', error);
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

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">Enhanced Analytics</h2>
          <p className="text-gray-300">Detailed insights and behavior patterns</p>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={() => setActiveTab('behavior')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              activeTab === 'behavior'
                ? 'bg-white/20 text-white'
                : 'bg-white/10 text-white/70 hover:bg-white/20'
            }`}
          >
            Behavior Analytics
          </button>
          {userRole === 'admin' && (
            <button
              onClick={() => setActiveTab('cross-role')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'cross-role'
                  ? 'bg-white/20 text-white'
                  : 'bg-white/10 text-white/70 hover:bg-white/20'
              }`}
            >
              Cross-Role Analytics
            </button>
          )}
        </div>
      </div>

      {/* Behavior Analytics */}
      {activeTab === 'behavior' && renterAnalytics && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Booking Patterns */}
          <GlassCard className="p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Booking Patterns</h3>
            <div className="space-y-4">
              <div>
                <p className="text-gray-300 text-sm">Preferred Days</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {renterAnalytics.bookingPatterns.preferredDays.map((day, index) => (
                    <span key={index} className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">
                      {day}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-gray-300 text-sm">Average Duration</p>
                <p className="text-white font-semibold">
                  {renterAnalytics.bookingPatterns.averageBookingDuration} days
                </p>
              </div>
              <div>
                <p className="text-gray-300 text-sm">Peak Booking Times</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {renterAnalytics.bookingPatterns.peakBookingTimes.map((time, index) => (
                    <span key={index} className="px-2 py-1 bg-green-500/20 text-green-300 rounded text-xs">
                      {time}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </GlassCard>

          {/* Spending Behavior */}
          <GlassCard className="p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Spending Behavior</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-300 text-sm">Total Spent</p>
                  <p className="text-white font-semibold">R{renterAnalytics.spendingBehavior.totalSpent.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-gray-300 text-sm">Avg per Booking</p>
                  <p className="text-white font-semibold">R{renterAnalytics.spendingBehavior.averageSpendingPerBooking.toLocaleString()}</p>
                </div>
              </div>
              <div>
                <p className="text-gray-300 text-sm">Preferred Price Range</p>
                <p className="text-white font-semibold">
                  R{renterAnalytics.spendingBehavior.preferredPriceRange.min} - R{renterAnalytics.spendingBehavior.preferredPriceRange.max}
                </p>
              </div>
            </div>
          </GlassCard>

          {/* Vehicle Preferences */}
          <GlassCard className="p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Vehicle Preferences</h3>
            <div className="space-y-4">
              <div>
                <p className="text-gray-300 text-sm">Top Makes</p>
                <div className="space-y-2 mt-2">
                  {renterAnalytics.vehiclePreferences.topMakes.slice(0, 3).map((make, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-white">{make.make}</span>
                      <span className="text-blue-400 text-sm">{make.count} bookings</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-gray-300 text-sm">Average Rating Given</p>
                <div className="flex items-center space-x-2">
                  <span className="text-white font-semibold">{renterAnalytics.vehiclePreferences.averageRating}</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Icon
                        key={i}
                        name="star"
                        size="sm"
                        className={`${i < Math.floor(renterAnalytics.vehiclePreferences.averageRating) ? 'text-yellow-400' : 'text-gray-400'}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>

          {/* Engagement Metrics */}
          <GlassCard className="p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Engagement Metrics</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-gray-300 text-sm">Total Bookings</p>
                <p className="text-white font-semibold text-xl">{renterAnalytics.engagementMetrics.totalBookings}</p>
              </div>
              <div>
                <p className="text-gray-300 text-sm">Repeat Rate</p>
                <p className="text-white font-semibold text-xl">{renterAnalytics.engagementMetrics.repeatBookingRate}%</p>
              </div>
              <div>
                <p className="text-gray-300 text-sm">Cancellation Rate</p>
                <p className="text-white font-semibold text-xl">{renterAnalytics.engagementMetrics.cancellationRate}%</p>
              </div>
              <div>
                <p className="text-gray-300 text-sm">Review Rate</p>
                <p className="text-white font-semibold text-xl">{renterAnalytics.engagementMetrics.reviewSubmissionRate}%</p>
              </div>
            </div>
          </GlassCard>
        </div>
      )}

      {/* Cross-Role Analytics (Admin Only) */}
      {activeTab === 'cross-role' && crossRoleAnalytics && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* User Growth */}
          <GlassCard className="p-6">
            <h3 className="text-lg font-semibold text-white mb-4">User Growth</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-300 text-sm">Total Users</p>
                  <p className="text-white font-semibold text-xl">{crossRoleAnalytics.userGrowth.totalUsers}</p>
                </div>
                <div>
                  <p className="text-gray-300 text-sm">New This Month</p>
                  <p className="text-white font-semibold text-xl">{crossRoleAnalytics.userGrowth.newUsersThisMonth}</p>
                </div>
              </div>
              <div>
                <p className="text-gray-300 text-sm">Growth Rate</p>
                <p className="text-white font-semibold">{crossRoleAnalytics.userGrowth.userGrowthRate}%</p>
              </div>
              <div>
                <p className="text-gray-300 text-sm">Role Distribution</p>
                <div className="space-y-2 mt-2">
                  {crossRoleAnalytics.userGrowth.roleDistribution.map((role, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-white capitalize">{role.role}</span>
                      <span className="text-blue-400 text-sm">{role.count} ({role.percentage}%)</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </GlassCard>

          {/* Revenue Analytics */}
          <GlassCard className="p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Revenue Analytics</h3>
            <div className="space-y-4">
              <div>
                <p className="text-gray-300 text-sm">Total Revenue</p>
                <p className="text-white font-semibold text-xl">R{crossRoleAnalytics.revenueAnalytics.totalRevenue.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-gray-300 text-sm">Avg Transaction Value</p>
                <p className="text-white font-semibold">R{crossRoleAnalytics.revenueAnalytics.averageTransactionValue.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-gray-300 text-sm">Revenue by Role</p>
                <div className="space-y-2 mt-2">
                  {crossRoleAnalytics.revenueAnalytics.revenueByRole.map((role, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-white capitalize">{role.role}</span>
                      <span className="text-green-400 text-sm">R{role.revenue.toLocaleString()}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </GlassCard>

          {/* Platform Health */}
          <GlassCard className="p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Platform Health</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-gray-300 text-sm">Active Users</p>
                <p className="text-white font-semibold text-xl">{crossRoleAnalytics.platformHealth.activeUsers}</p>
              </div>
              <div>
                <p className="text-gray-300 text-sm">Success Rate</p>
                <p className="text-white font-semibold text-xl">{crossRoleAnalytics.platformHealth.bookingSuccessRate}%</p>
              </div>
              <div>
                <p className="text-gray-300 text-sm">Satisfaction</p>
                <p className="text-white font-semibold text-xl">{crossRoleAnalytics.platformHealth.userSatisfactionScore}/10</p>
              </div>
              <div>
                <p className="text-gray-300 text-sm">Uptime</p>
                <p className="text-white font-semibold text-xl">{crossRoleAnalytics.platformHealth.systemUptime}%</p>
              </div>
            </div>
          </GlassCard>

          {/* Geographic Insights */}
          <GlassCard className="p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Geographic Insights</h3>
            <div className="space-y-4">
              <div>
                <p className="text-gray-300 text-sm">Top Cities</p>
                <div className="space-y-2 mt-2">
                  {crossRoleAnalytics.geographicInsights.topCities.slice(0, 3).map((city, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-white">{city.city}</span>
                      <span className="text-blue-400 text-sm">{city.bookings} bookings</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      )}
    </div>
  );
};

export default EnhancedAnalytics;
