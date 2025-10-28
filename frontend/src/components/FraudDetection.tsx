import React, { useState, useEffect } from 'react';
import Icon from './Icon';

interface FraudAlert {
  id: string;
  type: 'duplicate_document' | 'stolen_document' | 'suspicious_activity' | 'fake_identity';
  severity: 'low' | 'medium' | 'high' | 'critical';
  userId: string;
  userName: string;
  description: string;
  evidence: string[];
  confidence: number;
  status: 'pending' | 'investigating' | 'resolved' | 'false_positive';
  createdAt: Date;
  adminNotes?: string;
}

interface FraudDetectionProps {
  className?: string;
}

export const FraudDetection: React.FC<FraudDetectionProps> = ({ className = '' }) => {
  const [alerts, setAlerts] = useState<FraudAlert[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'all' | 'pending' | 'investigating' | 'resolved'>('all');

  useEffect(() => {
    fetchFraudAlerts();
  }, []);

  const fetchFraudAlerts = async () => {
    try {
      const token = localStorage.getItem('authToken');
      const response = await fetch('/api/admin/fraud-alerts', {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        setAlerts(data.alerts || []);
      }
    } catch (error) {
      console.error('Error fetching fraud alerts:', error);
      // Fallback to empty array instead of mock data
      setAlerts([]);
    } finally {
      setLoading(false);
    }
  };

  const updateAlertStatus = async (alertId: string, status: string, notes?: string) => {
    try {
      const token = localStorage.getItem('authToken');
      await fetch(`/api/admin/fraud-alerts/${alertId}`, {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status, adminNotes: notes }),
      });

      setAlerts(prev => prev.map(alert => 
        alert.id === alertId 
          ? { ...alert, status: status as any, adminNotes: notes }
          : alert
      ));
    } catch (error) {
      console.error('Error updating alert status:', error);
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical':
        return 'text-red-400 bg-red-500/20 border-red-500/30';
      case 'high':
        return 'text-orange-400 bg-orange-500/20 border-orange-500/30';
      case 'medium':
        return 'text-yellow-400 bg-yellow-500/20 border-yellow-500/30';
      case 'low':
        return 'text-blue-400 bg-blue-500/20 border-blue-500/30';
      default:
        return 'text-gray-400 bg-gray-500/20 border-gray-500/30';
    }
  };

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case 'critical':
        return 'AlertTriangle';
      case 'high':
        return 'AlertTriangle';
      case 'medium':
        return 'Eye';
      case 'low':
        return 'Info';
      default:
        return 'FileText';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'duplicate_document':
        return 'FileText';
      case 'stolen_document':
        return 'XCircle';
      case 'suspicious_activity':
        return 'Eye';
      case 'fake_identity':
        return 'User';
      default:
        return 'Info';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'text-yellow-400';
      case 'investigating':
        return 'text-blue-400';
      case 'resolved':
        return 'text-green-400';
      case 'false_positive':
        return 'text-gray-400';
      default:
        return 'text-white';
    }
  };

  const filteredAlerts = alerts.filter(alert => 
    filter === 'all' || alert.status === filter
  );

  if (loading) {
    return (
      <div className={`space-y-4 ${className}`}>
        {[...Array(3)].map((_, i) => (
          <div key={i} className="animate-pulse">
            <div className="h-24 bg-white/10 rounded-lg"></div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-white">Fraud Detection</h3>
          <p className="text-white/70 text-sm">
            {alerts.filter(a => a.status === 'pending').length} pending alerts
          </p>
        </div>
        <div className="flex space-x-2">
          {['all', 'pending', 'investigating', 'resolved'].map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status as any)}
              className={`px-3 py-1 rounded-lg text-sm transition-colors ${
                filter === status
                  ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                  : 'bg-white/10 text-white/70 hover:bg-white/20'
              }`}
            >
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Alerts List */}
      <div className="space-y-3">
        {filteredAlerts.map((alert) => (
          <div key={alert.id} className="bg-white/10 rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center space-x-3">
                <Icon name={getTypeIcon(alert.type)} size="lg" />
                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <Icon name={getSeverityIcon(alert.severity)} size="sm" />
                    <span className={`px-2 py-1 rounded-full text-xs border ${getSeverityColor(alert.severity)}`}>
                      {alert.severity.toUpperCase()}
                    </span>
                    <span className={`text-sm ${getStatusColor(alert.status)}`}>
                      {alert.status.charAt(0).toUpperCase() + alert.status.slice(1)}
                    </span>
                  </div>
                  <h4 className="text-white font-medium">{alert.userName}</h4>
                  <p className="text-white/70 text-sm">{alert.description}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm text-white/70">
                  {alert.confidence}% confidence
                </div>
                <div className="text-xs text-white/50">
                  {alert.createdAt.toLocaleString()}
                </div>
              </div>
            </div>

            {/* Evidence */}
            <div className="mb-3">
              <p className="text-xs text-white/60 mb-1">Evidence:</p>
              <div className="flex flex-wrap gap-1">
                {alert.evidence.map((item, index) => (
                  <span key={index} className="px-2 py-1 bg-white/10 rounded text-xs text-white/70">
                    {item.replace(/_/g, ' ')}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between">
              <div className="flex space-x-2">
                {alert.status === 'pending' && (
                  <>
                    <button
                      onClick={() => updateAlertStatus(alert.id, 'investigating')}
                      className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-lg text-sm hover:bg-blue-500/30 transition-colors"
                    >
                      Investigate
                    </button>
                    <button
                      onClick={() => updateAlertStatus(alert.id, 'false_positive')}
                      className="px-3 py-1 bg-gray-500/20 text-gray-300 rounded-lg text-sm hover:bg-gray-500/30 transition-colors"
                    >
                      False Positive
                    </button>
                  </>
                )}
                {alert.status === 'investigating' && (
                  <button
                    onClick={() => updateAlertStatus(alert.id, 'resolved')}
                    className="px-3 py-1 bg-green-500/20 text-green-300 rounded-lg text-sm hover:bg-green-500/30 transition-colors"
                  >
                    Resolve
                  </button>
                )}
              </div>
              <button className="px-3 py-1 bg-white/10 text-white rounded-lg text-sm hover:bg-white/20 transition-colors">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredAlerts.length === 0 && (
        <div className="text-center py-8">
          <div className="mb-4">
            <Icon name="Shield" size="lg" className="text-white/50 mx-auto" />
          </div>
          <p className="text-white/70">No fraud alerts found</p>
          <p className="text-white/50 text-sm">Great job keeping the platform secure!</p>
        </div>
      )}
    </div>
  );
};

export default FraudDetection;
