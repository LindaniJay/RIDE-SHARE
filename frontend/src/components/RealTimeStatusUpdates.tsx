import React, { useState, useEffect } from 'react';
import { 
  Clock, 
  CheckCircle, 
  AlertCircle, 
  XCircle, 
  RefreshCw, 
  Bell, 
  BellOff,
  Wifi,
  WifiOff,
  Car,
  User,
  Calendar,
  CreditCard
} from 'lucide-react';

interface StatusUpdate {
  id: string;
  type: 'booking' | 'payment' | 'vehicle' | 'user' | 'system';
  status: 'pending' | 'confirmed' | 'in_progress' | 'completed' | 'cancelled' | 'error';
  title: string;
  description: string;
  timestamp: Date;
  priority: 'low' | 'medium' | 'high' | 'urgent';
  data?: any;
}

interface RealTimeStatusUpdatesProps {
  bookingId?: string;
  userId?: string;
  vehicleId?: string;
  onStatusChange?: (status: StatusUpdate) => void;
  autoRefresh?: boolean;
  refreshInterval?: number;
}

const RealTimeStatusUpdates: React.FC<RealTimeStatusUpdatesProps> = ({
  bookingId,
  vehicleId,
  autoRefresh = true,
  refreshInterval = 5000
}) => {
  const [updates, setUpdates] = useState<StatusUpdate[]>([]);
  const [isConnected] = useState(true);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date());
  const [isLoading, setIsLoading] = useState(false);

  // Simulate real-time updates
  useEffect(() => {
    if (!autoRefresh) return;

    const interval = setInterval(() => {
      fetchStatusUpdates();
    }, refreshInterval);

    return () => clearInterval(interval);
  }, [autoRefresh, refreshInterval]);

  const fetchStatusUpdates = async () => {
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      const newUpdates: StatusUpdate[] = [
        {
          id: `update_${Date.now()}`,
          type: 'booking',
          status: 'confirmed',
          title: 'Booking Confirmed',
          description: 'Your booking has been confirmed by the host',
          timestamp: new Date(),
          priority: 'high',
          data: { bookingId, status: 'confirmed' }
        },
        {
          id: `update_${Date.now() + 1}`,
          type: 'payment',
          status: 'completed',
          title: 'Payment Processed',
          description: 'Payment has been successfully processed',
          timestamp: new Date(Date.now() - 300000),
          priority: 'high',
          data: { amount: 250, currency: 'ZAR' }
        },
        {
          id: `update_${Date.now() + 2}`,
          type: 'vehicle',
          status: 'in_progress',
          title: 'Vehicle Preparation',
          description: 'Vehicle is being prepared for pickup',
          timestamp: new Date(Date.now() - 600000),
          priority: 'medium',
          data: { vehicleId, location: 'Cape Town' }
        }
      ];

      setUpdates(prev => [...newUpdates, ...prev].slice(0, 20)); // Keep last 20 updates
      setLastUpdate(new Date());
      setIsLoading(false);
    }, 1000);
  };

  const getStatusIcon = (status: string) => {
    const iconProps = { className: 'w-5 h-5' };
    
    switch (status) {
      case 'confirmed':
      case 'completed':
        return <CheckCircle {...iconProps} className="w-5 h-5 text-green-600" />;
      case 'in_progress':
        return <Clock {...iconProps} className="w-5 h-5 text-blue-600" />;
      case 'pending':
        return <Clock {...iconProps} className="w-5 h-5 text-yellow-600" />;
      case 'cancelled':
        return <XCircle {...iconProps} className="w-5 h-5 text-red-600" />;
      case 'error':
        return <AlertCircle {...iconProps} className="w-5 h-5 text-red-600" />;
      default:
        return <Clock {...iconProps} className="w-5 h-5 text-gray-600" />;
    }
  };

  const getTypeIcon = (type: string) => {
    const iconProps = { className: 'w-4 h-4' };
    
    switch (type) {
      case 'booking':
        return <Calendar {...iconProps} className="w-4 h-4 text-blue-600" />;
      case 'payment':
        return <CreditCard {...iconProps} className="w-4 h-4 text-green-600" />;
      case 'vehicle':
        return <Car {...iconProps} className="w-4 h-4 text-purple-600" />;
      case 'user':
        return <User {...iconProps} className="w-4 h-4 text-orange-600" />;
      case 'system':
        return <Wifi {...iconProps} className="w-4 h-4 text-gray-600" />;
      default:
        return <Bell {...iconProps} className="w-4 h-4 text-gray-600" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'urgent':
        return 'border-red-500 bg-red-50';
      case 'high':
        return 'border-orange-500 bg-orange-50';
      case 'medium':
        return 'border-blue-500 bg-blue-50';
      case 'low':
        return 'border-gray-500 bg-gray-50';
      default:
        return 'border-gray-500 bg-gray-50';
    }
  };

  const formatTimestamp = (timestamp: Date) => {
    const now = new Date();
    const diff = now.getTime() - timestamp.getTime();
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);

    if (minutes < 1) return 'Just now';
    if (minutes < 60) return `${minutes}m ago`;
    if (hours < 24) return `${hours}h ago`;
    return `${days}d ago`;
  };

  const handleRefresh = () => {
    fetchStatusUpdates();
  };

  const toggleNotifications = () => {
    setNotificationsEnabled(!notificationsEnabled);
  };

  const clearUpdates = () => {
    setUpdates([]);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Real-Time Status Updates</h2>
          <p className="text-gray-600">Live updates for your booking and rental status</p>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            {isConnected ? (
              <Wifi className="w-5 h-5 text-green-600" />
            ) : (
              <WifiOff className="w-5 h-5 text-red-600" />
            )}
            <span className="text-sm text-gray-600">
              {isConnected ? 'Connected' : 'Disconnected'}
            </span>
          </div>
          
          <button
            onClick={toggleNotifications}
            className={`p-2 rounded-lg transition-colors ${
              notificationsEnabled 
                ? 'bg-blue-100 text-blue-600' 
                : 'bg-gray-100 text-gray-400'
            }`}
          >
            {notificationsEnabled ? <Bell className="w-5 h-5" /> : <BellOff className="w-5 h-5" />}
          </button>
          
          <button
            onClick={handleRefresh}
            disabled={isLoading}
            className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors disabled:opacity-50"
          >
            <RefreshCw className={`w-5 h-5 ${isLoading ? 'animate-spin' : ''}`} />
          </button>
        </div>
      </div>

      {/* Connection Status */}
      <div className="mb-6 p-4 bg-gray-50 rounded-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`w-3 h-3 rounded-full ${isConnected ? 'bg-green-500' : 'bg-red-500'}`} />
            <span className="text-sm font-medium text-gray-700">
              {isConnected ? 'Live updates active' : 'Connection lost'}
            </span>
          </div>
          <div className="text-sm text-gray-500">
            Last update: {formatTimestamp(lastUpdate)}
          </div>
        </div>
      </div>

      {/* Status Updates */}
      <div className="space-y-4">
        {updates.length === 0 ? (
          <div className="text-center py-8">
            <Bell className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-600 mb-2">No updates yet</h3>
            <p className="text-gray-500">Status updates will appear here as they happen</p>
          </div>
        ) : (
          updates.map((update) => (
            <div
              key={update.id}
              className={`p-4 rounded-lg border-2 transition-all duration-200 ${getPriorityColor(update.priority)}`}
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1">
                  {getStatusIcon(update.status)}
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    {getTypeIcon(update.type)}
                    <h3 className="font-semibold text-gray-800">{update.title}</h3>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      update.priority === 'urgent' ? 'bg-red-100 text-red-700' :
                      update.priority === 'high' ? 'bg-orange-100 text-orange-700' :
                      update.priority === 'medium' ? 'bg-blue-100 text-blue-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {update.priority}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-2">{update.description}</p>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>{formatTimestamp(update.timestamp)}</span>
                    <span className="capitalize">{update.type}</span>
                    <span className="capitalize">{update.status}</span>
                  </div>
                  
                  {update.data && (
                    <div className="mt-3 p-3 bg-white rounded border">
                      <pre className="text-xs text-gray-600 overflow-x-auto">
                        {JSON.stringify(update.data, null, 2)}
                      </pre>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Actions */}
      {updates.length > 0 && (
        <div className="mt-6 flex justify-between items-center">
          <button
            onClick={clearUpdates}
            className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
          >
            Clear All
          </button>
          
          <div className="text-sm text-gray-500">
            {updates.length} update{updates.length !== 1 ? 's' : ''}
          </div>
        </div>
      )}
    </div>
  );
};

export default RealTimeStatusUpdates;
