import React, { useState, useEffect } from 'react';
import { 
  Bell, 
  BellOff, 
  CheckCircle, 
  XCircle, 
  AlertCircle, 
  Calendar,
  X,
  RefreshCw
} from 'lucide-react';
import { socketService } from '../services/socketService';
import { apiClient } from '../api/client';

interface BookingNotification {
  id: string;
  type: 'booking_created' | 'booking_approved' | 'booking_declined' | 'booking_cancelled' | 'booking_completed' | 'payment_received' | 'payment_failed';
  title: string;
  message: string;
  bookingId: string;
  vehicleTitle: string;
  renterName?: string;
  hostName?: string;
  amount?: number;
  timestamp: Date;
  read: boolean;
  priority: 'low' | 'medium' | 'high' | 'urgent';
  actionRequired: boolean;
  actionUrl?: string;
}

interface RealTimeBookingNotificationsProps {
  userRole: 'renter' | 'host' | 'admin';
  userId: string;
  onNotificationClick?: (notification: BookingNotification) => void;
  onMarkAsRead?: (notificationId: string) => void;
  onMarkAllAsRead?: () => void;
}

const RealTimeBookingNotifications: React.FC<RealTimeBookingNotificationsProps> = ({
  userRole,
  userId,
  onNotificationClick,
  onMarkAsRead,
  onMarkAllAsRead
}) => {
  const [notifications, setNotifications] = useState<BookingNotification[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [loading, setLoading] = useState(false);

  // Fetch real notifications from API
  const fetchNotifications = async () => {
    try {
      setLoading(true);
      // Use apiClient so Firebase token is attached; relative path so baseURL (/api) applies
      const { data } = await apiClient.get('notifications/booking', {
        params: { userRole, userId }
      });
      
      if (data.success && data.notifications) {
        setNotifications(data.notifications);
      } else {
        throw new Error(data.message || 'Failed to fetch notifications');
      }
    } catch (error) {
      console.error('Error fetching booking notifications:', error);
      
      // Show user-friendly error message
      if (error instanceof Error) {
        if (error.message.includes('Server unavailable')) {
          console.warn('Server unavailable, notifications will retry automatically');
        } else if (error.message.includes('authentication')) {
          console.warn('Authentication failed, please log in again');
        } else {
          console.error(`Notification error: ${error.message}`);
        }
      }
      
      setNotifications([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotifications();
    
    // Set up Socket.io connection for real-time notifications
    const setupSocketConnection = async () => {
      try {
        // Skip authentication for simple server
        if (notificationsEnabled) {
          await socketService.connect();
          
          // Listen for real-time notifications
          socketService.onNotification((notification) => {
            console.log('Real-time notification received:', notification);
            setNotifications(prev => [notification, ...prev]);
          });

          socketService.onBookingUpdate((update) => {
            console.log('Booking update received:', update);
            // Refresh notifications when booking updates
            fetchNotifications();
          });

          socketService.onError((error) => {
            console.error('Socket error:', error);
          });

        }
      } catch (error) {
        console.error('Failed to connect to Socket.io:', error);
        // Fallback to polling if Socket.io fails
        const interval = setInterval(() => {
          if (notificationsEnabled) {
            fetchNotifications();
          }
        }, 30000); // Check every 30 seconds

        return () => clearInterval(interval);
      }
    };

    setupSocketConnection();
    
    // Cleanup on unmount
    return () => {
      socketService.removeAllListeners();
    };
  }, [userId, notificationsEnabled]);

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'booking_created':
        return <Calendar className="w-5 h-5 text-blue-600" />;
      case 'booking_approved':
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'booking_declined':
        return <XCircle className="w-5 h-5 text-red-600" />;
      case 'booking_cancelled':
        return <XCircle className="w-5 h-5 text-red-600" />;
      case 'booking_completed':
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'payment_received':
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'payment_failed':
        return <AlertCircle className="w-5 h-5 text-red-600" />;
      default:
        return <Bell className="w-5 h-5 text-gray-600" />;
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

  const formatTimeAgo = (timestamp: Date | string | undefined) => {
    if (!timestamp) return 'Unknown time';
    
    const timestampDate = timestamp instanceof Date ? timestamp : new Date(timestamp);
    if (isNaN(timestampDate.getTime())) return 'Invalid time';
    
    const now = new Date();
    const diff = now.getTime() - timestampDate.getTime();
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);

    if (minutes < 1) return 'Just now';
    if (minutes < 60) return `${minutes}m ago`;
    if (hours < 24) return `${hours}h ago`;
    return `${days}d ago`;
  };

  const handleNotificationClick = (notification: BookingNotification) => {
    if (!notification.read) {
      setNotifications(prev => prev.map(n => 
        n.id === notification.id ? { ...n, read: true } : n
      ));
      onMarkAsRead?.(notification.id);
    }
    
    onNotificationClick?.(notification);
    
    if (notification.actionUrl) {
      window.location.href = notification.actionUrl;
    }
  };

  const handleMarkAllAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
    onMarkAllAsRead?.();
  };

  const unreadCount = notifications.filter(n => !n.read).length;
  const actionRequiredCount = notifications.filter(n => n.actionRequired && !n.read).length;

  return (
    <div className="relative">
      {/* Notification Bell */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 text-gray-600 hover:text-gray-800 transition-colors"
      >
        <Bell className="w-6 h-6" />
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {unreadCount}
          </span>
        )}
      </button>

      {/* Notifications Panel */}
      {isOpen && (
        <div className="absolute right-0 top-12 w-96 bg-white rounded-lg shadow-lg border z-50 max-h-96 overflow-y-auto">
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-800">Notifications</h3>
              <div className="flex items-center gap-2">
                {actionRequiredCount > 0 && (
                  <span className="text-sm text-orange-600 font-medium">
                    {actionRequiredCount} action required
                  </span>
                )}
                <button
                  onClick={() => setNotificationsEnabled(!notificationsEnabled)}
                  className={`p-1 rounded ${
                    notificationsEnabled 
                      ? 'text-green-600 hover:bg-green-50' 
                      : 'text-gray-400 hover:bg-gray-50'
                  }`}
                >
                  {notificationsEnabled ? <Bell className="w-4 h-4" /> : <BellOff className="w-4 h-4" />}
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 text-gray-400 hover:bg-gray-50 rounded"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            {unreadCount > 0 && (
              <button
                onClick={handleMarkAllAsRead}
                className="mt-2 text-sm text-blue-600 hover:text-blue-800"
              >
                Mark all as read
              </button>
            )}
          </div>

          <div className="p-4">
            {loading ? (
              <div className="flex items-center justify-center py-8">
                <RefreshCw className="w-6 h-6 animate-spin text-gray-400" />
              </div>
            ) : notifications.length === 0 ? (
              <div className="text-center py-8">
                <Bell className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">No notifications yet</p>
              </div>
            ) : (
              <div className="space-y-3">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    onClick={() => handleNotificationClick(notification)}
                    className={`p-3 rounded-lg border cursor-pointer transition-all hover:shadow-md ${
                      notification.read ? 'bg-gray-50' : 'bg-white'
                    } ${getPriorityColor(notification.priority)}`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-1">
                        {getNotificationIcon(notification.type)}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className={`font-medium ${
                            notification.read ? 'text-gray-600' : 'text-gray-800'
                          }`}>
                            {notification.title}
                          </h4>
                          {!notification.read && (
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          )}
                          {notification.actionRequired && (
                            <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded">
                              Action Required
                            </span>
                          )}
                        </div>
                        
                        <p className={`text-sm ${
                          notification.read ? 'text-gray-500' : 'text-gray-700'
                        }`}>
                          {notification.message}
                        </p>
                        
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-xs text-gray-500">
                            {formatTimeAgo(notification.timestamp)}
                          </span>
                          {notification.amount && (
                            <span className="text-xs font-medium text-green-600">
                              R {(notification.amount || 0).toLocaleString()}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default RealTimeBookingNotifications;
