import React, { useState, useEffect } from 'react';
import Icon from '../Icon';
import GlassCard from '../GlassCard';

interface SystemMetric {
  name: string;
  value: number;
  unit: string;
  status: 'healthy' | 'warning' | 'critical';
  trend: 'up' | 'down' | 'stable';
  threshold: {
    warning: number;
    critical: number;
  };
}

interface SystemHealth {
  overall: 'healthy' | 'warning' | 'critical';
  metrics: SystemMetric[];
  uptime: string;
  lastUpdate: string;
}

const SystemHealthMonitor: React.FC = () => {
  const [health, setHealth] = useState<SystemHealth | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSystemHealth();
    const interval = setInterval(fetchSystemHealth, 10000); // Update every 10 seconds
    return () => clearInterval(interval);
  }, []);

  const fetchSystemHealth = async () => {
    try {
      // Mock data - replace with actual API call
      const mockHealth: SystemHealth = {
        overall: 'healthy',
        uptime: '99.9%',
        lastUpdate: new Date().toISOString(),
        metrics: [
          {
            name: 'CPU Usage',
            value: 45,
            unit: '%',
            status: 'healthy',
            trend: 'stable',
            threshold: { warning: 70, critical: 90 }
          },
          {
            name: 'Memory Usage',
            value: 62,
            unit: '%',
            status: 'healthy',
            trend: 'up',
            threshold: { warning: 80, critical: 95 }
          },
          {
            name: 'Disk Usage',
            value: 35,
            unit: '%',
            status: 'healthy',
            trend: 'stable',
            threshold: { warning: 85, critical: 95 }
          },
          {
            name: 'Database Connections',
            value: 23,
            unit: 'active',
            status: 'healthy',
            trend: 'down',
            threshold: { warning: 80, critical: 100 }
          },
          {
            name: 'API Response Time',
            value: 120,
            unit: 'ms',
            status: 'healthy',
            trend: 'stable',
            threshold: { warning: 500, critical: 1000 }
          },
          {
            name: 'Active Users',
            value: 1247,
            unit: 'users',
            status: 'healthy',
            trend: 'up',
            threshold: { warning: 5000, critical: 10000 }
          }
        ]
      };
      setHealth(mockHealth);
    } catch (error) {
      console.error('Error fetching system health:', error);
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'healthy': return 'text-green-500';
      case 'warning': return 'text-yellow-500';
      case 'critical': return 'text-red-500';
      default: return 'text-gray-500';
    }
  };

  const getStatusBgColor = (status: string) => {
    switch (status) {
      case 'healthy': return 'bg-green-500/20';
      case 'warning': return 'bg-yellow-500/20';
      case 'critical': return 'bg-red-500/20';
      default: return 'bg-gray-500/20';
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
      <GlassCard title="System Health Monitor" icon="Activity">
        <div className="flex items-center justify-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        </div>
      </GlassCard>
    );
  }

  if (!health) {
    return (
      <GlassCard title="System Health Monitor" icon="Activity">
        <div className="text-center py-8 text-white/50">
          Unable to fetch system health data
        </div>
      </GlassCard>
    );
  }

  return (
    <GlassCard title="System Health Monitor" icon="Activity">
      <div className="space-y-6">
        {/* Overall Status */}
        <div className="text-center">
          <div className={`inline-flex items-center px-4 py-2 rounded-lg ${getStatusBgColor(health.overall)}`}>
            <Icon
              name="CheckCircle"
              className={`w-5 h-5 mr-2 ${getStatusColor(health.overall)}`}
            />
            <span className={`font-medium ${getStatusColor(health.overall)}`}>
              System {health.overall.toUpperCase()}
            </span>
          </div>
          <div className="mt-2 text-sm text-white/70">
            Uptime: {health.uptime} | Last Update: {new Date(health.lastUpdate).toLocaleTimeString()}
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {health.metrics.map((metric, index) => (
            <div
              key={index}
              className="p-4 rounded-lg bg-white/5 border border-white/10"
            >
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium text-white">{metric.name}</h4>
                <div className="flex items-center space-x-1">
                  <Icon
                    name={getTrendIcon(metric.trend)}
                    className={`w-4 h-4 ${getTrendColor(metric.trend)}`}
                  />
                  <span className={`text-sm ${getTrendColor(metric.trend)}`}>
                    {metric.trend}
                  </span>
                </div>
              </div>
              
              <div className="flex items-center justify-between mb-3">
                <div className="text-2xl font-bold text-white">
                  {metric.value}{metric.unit}
                </div>
                <div className={`px-2 py-1 rounded text-xs ${getStatusBgColor(metric.status)}`}>
                  <span className={getStatusColor(metric.status)}>
                    {metric.status}
                  </span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-white/10 rounded-full h-2">
                <div
                  className={`h-2 rounded-full ${
                    metric.status === 'critical' ? 'bg-red-500' :
                    metric.status === 'warning' ? 'bg-yellow-500' : 'bg-green-500'
                  }`}
                  style={{
                    width: `${Math.min((metric.value / metric.threshold.critical) * 100, 100)}%`
                  }}
                />
              </div>

              <div className="flex justify-between text-xs text-white/50 mt-1">
                <span>Warning: {metric.threshold.warning}{metric.unit}</span>
                <span>Critical: {metric.threshold.critical}{metric.unit}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="flex space-x-2">
          <button className="flex-1 px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30 transition-colors">
            <Icon name="RefreshCw" className="w-4 h-4 mr-2 inline" />
            Refresh
          </button>
          <button className="flex-1 px-4 py-2 bg-green-500/20 text-green-400 rounded-lg hover:bg-green-500/30 transition-colors">
            <Icon name="Download" className="w-4 h-4 mr-2 inline" />
            Export Report
          </button>
          <button className="flex-1 px-4 py-2 bg-purple-500/20 text-purple-400 rounded-lg hover:bg-purple-500/30 transition-colors">
            <Icon name="Settings" className="w-4 h-4 mr-2 inline" />
            Configure
          </button>
        </div>
      </div>
    </GlassCard>
  );
};

export default SystemHealthMonitor;
