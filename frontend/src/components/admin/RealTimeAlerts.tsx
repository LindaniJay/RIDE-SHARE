import React, { useState, useEffect } from 'react';
import Icon from '../Icon';
import GlassCard from '../GlassCard';

interface Alert {
  id: string;
  type: 'info' | 'warning' | 'error' | 'success';
  title: string;
  message: string;
  timestamp: string;
  priority: 'low' | 'medium' | 'high' | 'critical';
  category: 'system' | 'user' | 'booking' | 'payment' | 'safety';
  isRead: boolean;
  actionRequired: boolean;
}

const RealTimeAlerts: React.FC = () => {
  const [alerts, setAlerts] = useState<Alert[]>([]);
  const [filter, setFilter] = useState<'all' | 'unread' | 'critical'>('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAlerts();
    // Set up real-time updates
    const interval = setInterval(fetchAlerts, 5000);
    return () => clearInterval(interval);
  }, []);

  const fetchAlerts = async () => {
    try {
      const response = await fetch('/api/admin/real-time-alerts', {
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
        setAlerts(result.alerts || []);
      } else {
        throw new Error(result.error || 'Failed to fetch alerts');
      }
    } catch (error) {
      console.error('Error fetching alerts:', error);
      setAlerts([]);
    } finally {
      setLoading(false);
    }
  };

  const markAsRead = (alertId: string) => {
    setAlerts(prev => prev.map(alert => 
      alert.id === alertId ? { ...alert, isRead: true } : alert
    ));
  };

  const markAllAsRead = () => {
    setAlerts(prev => prev.map(alert => ({ ...alert, isRead: true })));
  };

  const getAlertIcon = (type: Alert['type']) => {
    switch (type) {
      case 'error': return 'AlertTriangle';
      case 'warning': return 'AlertCircle';
      case 'success': return 'CheckCircle';
      default: return 'Info';
    }
  };

  const getPriorityColor = (priority: Alert['priority']) => {
    switch (priority) {
      case 'critical': return 'text-red-500';
      case 'high': return 'text-orange-500';
      case 'medium': return 'text-yellow-500';
      default: return 'text-blue-500';
    }
  };

  const filteredAlerts = alerts.filter(alert => {
    if (filter === 'unread') return !alert.isRead;
    if (filter === 'critical') return alert.priority === 'critical';
    return true;
  });

  const unreadCount = alerts.filter(alert => !alert.isRead).length;
  const criticalCount = alerts.filter(alert => alert.priority === 'critical').length;

  if (loading) {
    return (
      <GlassCard title="Real-Time Alerts" icon="Bell">
        <div className="flex items-center justify-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        </div>
      </GlassCard>
    );
  }

  return (
    <GlassCard title="Real-Time Alerts" icon="Bell">
      <div className="space-y-4">
        {/* Alert Summary */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-white">{alerts.length}</div>
            <div className="text-sm text-white/70">Total Alerts</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-500">{unreadCount}</div>
            <div className="text-sm text-white/70">Unread</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-red-500">{criticalCount}</div>
            <div className="text-sm text-white/70">Critical</div>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex space-x-2 mb-4">
          <button
            onClick={() => setFilter('all')}
            className={`px-3 py-1 rounded text-sm ${
              filter === 'all' ? 'bg-white/20 text-white' : 'bg-white/10 text-white/70'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter('unread')}
            className={`px-3 py-1 rounded text-sm ${
              filter === 'unread' ? 'bg-white/20 text-white' : 'bg-white/10 text-white/70'
            }`}
          >
            Unread
          </button>
          <button
            onClick={() => setFilter('critical')}
            className={`px-3 py-1 rounded text-sm ${
              filter === 'critical' ? 'bg-white/20 text-white' : 'bg-white/10 text-white/70'
            }`}
          >
            Critical
          </button>
        </div>

        {/* Actions */}
        <div className="flex justify-between items-center mb-4">
          <button
            onClick={markAllAsRead}
            className="text-sm text-blue-400 hover:text-blue-300"
          >
            Mark All as Read
          </button>
          <button
            onClick={fetchAlerts}
            className="text-sm text-blue-400 hover:text-blue-300"
          >
            Refresh
          </button>
        </div>

        {/* Alerts List */}
        <div className="space-y-3 max-h-96 overflow-y-auto">
          {filteredAlerts.map((alert) => (
            <div
              key={alert.id}
              className={`p-4 rounded-lg border ${
                alert.isRead ? 'bg-white/5' : 'bg-white/10'
              } ${alert.priority === 'critical' ? 'border-red-500' : 'border-white/20'}`}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-3">
                  <Icon
                    name={getAlertIcon(alert.type)}
                    className={`w-5 h-5 ${getPriorityColor(alert.priority)}`}
                  />
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <h4 className="font-medium text-white">{alert.title}</h4>
                      {alert.actionRequired && (
                        <span className="px-2 py-1 bg-red-500/20 text-red-400 text-xs rounded">
                          Action Required
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-white/70 mt-1">{alert.message}</p>
                    <div className="flex items-center space-x-4 mt-2 text-xs text-white/50">
                      <span>{new Date(alert.timestamp).toLocaleString()}</span>
                      <span className="capitalize">{alert.category}</span>
                      <span className={`capitalize ${getPriorityColor(alert.priority)}`}>
                        {alert.priority}
                      </span>
                    </div>
                  </div>
                </div>
                {!alert.isRead && (
                  <button
                    onClick={() => markAsRead(alert.id)}
                    className="text-blue-400 hover:text-blue-300 text-sm"
                  >
                    Mark Read
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {filteredAlerts.length === 0 && (
          <div className="text-center py-8 text-white/50">
            No alerts found
          </div>
        )}
      </div>
    </GlassCard>
  );
};

export default RealTimeAlerts;
