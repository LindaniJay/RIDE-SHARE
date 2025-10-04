import React, { useState, useEffect } from 'react';
import Icon from './Icon';
import GlassCard from './GlassCard';

interface PerformanceMetrics {
  responseTime: number;
  uptime: number;
  errorRate: number;
  activeUsers: number;
  memoryUsage: number;
  cpuUsage: number;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    responseTime: 0,
    uptime: 0,
    errorRate: 0,
    activeUsers: 0,
    memoryUsage: 0,
    cpuUsage: 0
  });
  const [isMonitoring, setIsMonitoring] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate real-time performance data
      setMetrics(prev => ({
        responseTime: Math.random() * 200 + 50, // 50-250ms
        uptime: 99.9 + Math.random() * 0.1, // 99.9-100%
        errorRate: Math.random() * 0.5, // 0-0.5%
        activeUsers: Math.floor(Math.random() * 100) + 50, // 50-150 users
        memoryUsage: 60 + Math.random() * 20, // 60-80%
        cpuUsage: 30 + Math.random() * 40 // 30-70%
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (value: number, type: 'response' | 'uptime' | 'error' | 'usage') => {
    switch (type) {
      case 'response':
        return value < 100 ? 'text-green-400' : value < 200 ? 'text-yellow-400' : 'text-red-400';
      case 'uptime':
        return value > 99.5 ? 'text-green-400' : value > 99 ? 'text-yellow-400' : 'text-red-400';
      case 'error':
        return value < 0.1 ? 'text-green-400' : value < 0.5 ? 'text-yellow-400' : 'text-red-400';
      case 'usage':
        return value < 70 ? 'text-green-400' : value < 90 ? 'text-yellow-400' : 'text-red-400';
      default:
        return 'text-white';
    }
  };

  return (
    <GlassCard title="System Performance" icon="Activity" className="border-blue-500/20">
      <div className="space-y-4">
        {/* Real-time Status */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className={`w-3 h-3 rounded-full ${isMonitoring ? 'bg-green-400 animate-pulse' : 'bg-gray-400'}`}></div>
            <span className="text-white/70 text-sm">
              {isMonitoring ? 'Live Monitoring' : 'Monitoring Paused'}
            </span>
          </div>
          <button
            onClick={() => setIsMonitoring(!isMonitoring)}
            className="px-3 py-1 bg-white/10 text-white/80 rounded text-sm hover:bg-white/20 transition-colors"
          >
            {isMonitoring ? 'Pause' : 'Start'}
          </button>
        </div>

        {/* Performance Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Response Time */}
          <div className="p-3 bg-white/5 rounded-lg border border-white/10">
            <div className="flex items-center justify-between mb-2">
              <Icon name="Clock" className="h-4 w-4 text-blue-400" />
              <span className="text-xs text-white/60">Response Time</span>
            </div>
            <div className={`text-2xl font-bold ${getStatusColor(metrics.responseTime, 'response')}`}>
              {Math.round(metrics.responseTime)}ms
            </div>
            <div className="text-xs text-white/60 mt-1">
              {metrics.responseTime < 100 ? 'Excellent' : metrics.responseTime < 200 ? 'Good' : 'Needs Attention'}
            </div>
          </div>

          {/* Uptime */}
          <div className="p-3 bg-white/5 rounded-lg border border-white/10">
            <div className="flex items-center justify-between mb-2">
              <Icon name="CheckCircle" className="h-4 w-4 text-green-400" />
              <span className="text-xs text-white/60">Uptime</span>
            </div>
            <div className={`text-2xl font-bold ${getStatusColor(metrics.uptime, 'uptime')}`}>
              {metrics.uptime.toFixed(2)}%
            </div>
            <div className="text-xs text-white/60 mt-1">
              {metrics.uptime > 99.5 ? 'Excellent' : metrics.uptime > 99 ? 'Good' : 'Needs Attention'}
            </div>
          </div>

          {/* Error Rate */}
          <div className="p-3 bg-white/5 rounded-lg border border-white/10">
            <div className="flex items-center justify-between mb-2">
              <Icon name="AlertTriangle" className="h-4 w-4 text-red-400" />
              <span className="text-xs text-white/60">Error Rate</span>
            </div>
            <div className={`text-2xl font-bold ${getStatusColor(metrics.errorRate, 'error')}`}>
              {metrics.errorRate.toFixed(2)}%
            </div>
            <div className="text-xs text-white/60 mt-1">
              {metrics.errorRate < 0.1 ? 'Excellent' : metrics.errorRate < 0.5 ? 'Good' : 'Needs Attention'}
            </div>
          </div>

          {/* Active Users */}
          <div className="p-3 bg-white/5 rounded-lg border border-white/10">
            <div className="flex items-center justify-between mb-2">
              <Icon name="Users" className="h-4 w-4 text-purple-400" />
              <span className="text-xs text-white/60">Active Users</span>
            </div>
            <div className="text-2xl font-bold text-white">
              {metrics.activeUsers}
            </div>
            <div className="text-xs text-white/60 mt-1">
              Currently online
            </div>
          </div>

          {/* Memory Usage */}
          <div className="p-3 bg-white/5 rounded-lg border border-white/10">
            <div className="flex items-center justify-between mb-2">
              <Icon name="Database" className="h-4 w-4 text-orange-400" />
              <span className="text-xs text-white/60">Memory</span>
            </div>
            <div className={`text-2xl font-bold ${getStatusColor(metrics.memoryUsage, 'usage')}`}>
              {Math.round(metrics.memoryUsage)}%
            </div>
            <div className="text-xs text-white/60 mt-1">
              {metrics.memoryUsage < 70 ? 'Optimal' : metrics.memoryUsage < 90 ? 'Good' : 'High'}
            </div>
          </div>

          {/* CPU Usage */}
          <div className="p-3 bg-white/5 rounded-lg border border-white/10">
            <div className="flex items-center justify-between mb-2">
              <Icon name="Cpu" className="h-4 w-4 text-cyan-400" />
              <span className="text-xs text-white/60">CPU</span>
            </div>
            <div className={`text-2xl font-bold ${getStatusColor(metrics.cpuUsage, 'usage')}`}>
              {Math.round(metrics.cpuUsage)}%
            </div>
            <div className="text-xs text-white/60 mt-1">
              {metrics.cpuUsage < 70 ? 'Optimal' : metrics.cpuUsage < 90 ? 'Good' : 'High'}
            </div>
          </div>
        </div>

        {/* Performance Chart Placeholder */}
        <div className="mt-6 p-4 bg-white/5 rounded-lg border border-white/10">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-white font-medium">Performance Trends</h4>
            <div className="flex space-x-2">
              <button className="px-2 py-1 bg-white/10 text-white/80 rounded text-xs hover:bg-white/20 transition-colors">
                1H
              </button>
              <button className="px-2 py-1 bg-white/20 text-white rounded text-xs">
                24H
              </button>
              <button className="px-2 py-1 bg-white/10 text-white/80 rounded text-xs hover:bg-white/20 transition-colors">
                7D
              </button>
            </div>
          </div>
          <div className="h-32 bg-white/5 rounded flex items-center justify-center">
            <div className="text-center text-white/60">
              <Icon name="BarChart" className="h-8 w-8 mx-auto mb-2 opacity-50" />
              <p className="text-sm">Performance chart will be displayed here</p>
            </div>
          </div>
        </div>

        {/* System Alerts */}
        <div className="mt-4 space-y-2">
          <h4 className="text-white font-medium text-sm">System Alerts</h4>
          <div className="space-y-2">
            {metrics.responseTime > 200 && (
              <div className="p-2 bg-red-500/10 border border-red-500/20 rounded text-sm text-red-200">
                <Icon name="AlertTriangle" className="h-4 w-4 inline mr-2" />
                High response time detected
              </div>
            )}
            {metrics.errorRate > 0.5 && (
              <div className="p-2 bg-red-500/10 border border-red-500/20 rounded text-sm text-red-200">
                <Icon name="XCircle" className="h-4 w-4 inline mr-2" />
                Error rate above threshold
              </div>
            )}
            {metrics.memoryUsage > 90 && (
              <div className="p-2 bg-yellow-500/10 border border-yellow-500/20 rounded text-sm text-yellow-200">
                <Icon name="AlertTriangle" className="h-4 w-4 inline mr-2" />
                High memory usage
              </div>
            )}
            {metrics.responseTime < 100 && metrics.errorRate < 0.1 && metrics.uptime > 99.5 && (
              <div className="p-2 bg-green-500/10 border border-green-500/20 rounded text-sm text-green-200">
                <Icon name="CheckCircle" className="h-4 w-4 inline mr-2" />
                All systems operating normally
              </div>
            )}
          </div>
        </div>
      </div>
    </GlassCard>
  );
};

export default PerformanceMonitor;