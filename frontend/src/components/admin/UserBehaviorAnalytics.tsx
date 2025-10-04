import React, { useState, useEffect } from 'react';
import Icon from '../Icon';
import GlassCard from '../GlassCard';

interface UserBehaviorData {
  totalUsers: number;
  activeUsers: number;
  newUsers: number;
  retentionRate: number;
  userSegments: {
    segment: string;
    count: number;
    percentage: number;
  }[];
  behaviorMetrics: {
    metric: string;
    value: number;
    trend: 'up' | 'down' | 'stable';
    change: number;
  }[];
  topActions: {
    action: string;
    count: number;
    percentage: number;
  }[];
  userJourney: {
    step: string;
    users: number;
    conversionRate: number;
  }[];
}

const UserBehaviorAnalytics: React.FC = () => {
  const [data, setData] = useState<UserBehaviorData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUserBehaviorData();
  }, []);

  const fetchUserBehaviorData = async () => {
    try {
      const response = await fetch('/api/admin/user-behavior-analytics', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      
      if (result.success) {
        setData(result.data);
      } else {
        throw new Error(result.error || 'Failed to fetch user behavior data');
      }
    } catch (error) {
      console.error('Error fetching user behavior data:', error);
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return 'TrendingUp';
      case 'down': return 'TrendingDown';
      default: return 'Minus';
    }
  };

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case 'up': return 'text-green-500';
      case 'down': return 'text-red-500';
      default: return 'text-gray-500';
    }
  };

  if (loading) {
    return (
      <GlassCard title="User Behavior Analytics" icon="Users">
        <div className="flex items-center justify-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        </div>
      </GlassCard>
    );
  }

  if (!data) {
    return (
      <GlassCard title="User Behavior Analytics" icon="Users">
        <div className="text-center py-8 text-white/50">
          Unable to fetch user behavior data
        </div>
      </GlassCard>
    );
  }

  return (
    <GlassCard title="User Behavior Analytics" icon="Users">
      <div className="space-y-6">
        {/* Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-white">{data.totalUsers.toLocaleString()}</div>
            <div className="text-sm text-white/70">Total Users</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">{data.activeUsers.toLocaleString()}</div>
            <div className="text-sm text-white/70">Active Users</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">{data.newUsers}</div>
            <div className="text-sm text-white/70">New This Week</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">{data.retentionRate}%</div>
            <div className="text-sm text-white/70">Retention Rate</div>
          </div>
        </div>

        {/* User Segments */}
        <div className="space-y-4">
          <h4 className="font-medium text-white">User Segments</h4>
          <div className="space-y-3">
            {data.userSegments.map((segment, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-white/70">{segment.segment}</span>
                  <span className="text-white">{segment.count.toLocaleString()} ({segment.percentage}%)</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full"
                    style={{ width: `${segment.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Behavior Metrics */}
        <div className="space-y-4">
          <h4 className="font-medium text-white">Behavior Metrics</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.behaviorMetrics.map((metric, index) => (
              <div key={index} className="p-4 rounded-lg bg-white/5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white/70">{metric.metric}</span>
                  <div className="flex items-center space-x-1">
                    <Icon
                      name={getTrendIcon(metric.trend)}
                      className={`w-4 h-4 ${getTrendColor(metric.trend)}`}
                    />
                    <span className={`text-sm ${getTrendColor(metric.trend)}`}>
                      {metric.change > 0 ? '+' : ''}{metric.change}%
                    </span>
                  </div>
                </div>
                <div className="text-xl font-bold text-white">
                  {metric.value}{metric.metric.includes('Rate') ? '%' : ''}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Actions */}
        <div className="space-y-4">
          <h4 className="font-medium text-white">Top User Actions</h4>
          <div className="space-y-3">
            {data.topActions.map((action, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-white/70">{action.action}</span>
                <div className="flex items-center space-x-2">
                  <span className="text-white">{action.count.toLocaleString()}</span>
                  <span className="text-white/50">({action.percentage}%)</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* User Journey */}
        <div className="space-y-4">
          <h4 className="font-medium text-white">User Journey Funnel</h4>
          <div className="space-y-3">
            {data.userJourney.map((step, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-white/70">{step.step}</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-white">{step.users.toLocaleString()}</span>
                    <span className="text-white/50">({step.conversionRate}%)</span>
                  </div>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div
                    className="bg-green-500 h-2 rounded-full"
                    style={{ width: `${step.conversionRate}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex space-x-2">
          <button className="flex-1 px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30 transition-colors">
            <Icon name="Download" className="w-4 h-4 mr-2 inline" />
            Export Data
          </button>
          <button className="flex-1 px-4 py-2 bg-green-500/20 text-green-400 rounded-lg hover:bg-green-500/30 transition-colors">
            <Icon name="Target" className="w-4 h-4 mr-2 inline" />
            Segment Users
          </button>
        </div>
      </div>
    </GlassCard>
  );
};

export default UserBehaviorAnalytics;
