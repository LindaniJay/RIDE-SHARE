import React, { useState, useEffect } from 'react';
import { useToast } from './ToastProvider';
import { useAuth } from '../context/AuthContext';
import websocketService from '../services/websocketService';
import Icon from './Icon';

interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  timestamp: Date;
  read: boolean;
}

interface RealTimeNotificationsProps {
  userId: string;
  userRole: 'renter' | 'host' | 'admin';
}

const RealTimeNotifications: React.FC<RealTimeNotificationsProps> = ({ userId, userRole }) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const { showToast } = useToast();
  const { user } = useAuth();

  // Fetch initial notifications from API
  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const { apiClient } = await import('../api/client');
        // Use relative path so axios baseURL (VITE_API_URL or /api) applies
        const response = await apiClient.get('notifications');

        if (response.data.success) {
          setNotifications(response.data.notifications || []);
          setUnreadCount(response.data.pagination?.total || 0);
        }
      } catch (error) {
        console.error('Error fetching notifications:', error);
      }
    };

    // Add a small delay to ensure Firebase auth is ready
    const timer = setTimeout(() => {
      fetchNotifications();
    }, 1000);

    return () => clearTimeout(timer);
  }, [userId]);

  // Set up WebSocket connection for real-time notifications
  useEffect(() => {
    if (!user) return;

    const token = localStorage.getItem('authToken');
    if (!token) return;

    // Connect to WebSocket
    websocketService.connect(token);

    // Subscribe to real-time notifications
    websocketService.subscribeToNotifications((notification: any) => {
      const newNotification: Notification = {
        id: notification.id || Math.random().toString(36).substr(2, 9),
        title: notification.title,
        message: notification.message,
        type: notification.type || 'info',
        timestamp: new Date(notification.timestamp || Date.now()),
        read: false
      };

      setNotifications(prev => [newNotification, ...prev.slice(0, 19)]);
      setUnreadCount(prev => prev + 1);
      
      // Show toast notification
      showToast(newNotification.message, newNotification.type);
    });

    // Subscribe to role-specific updates
    if (userRole === 'admin') {
      websocketService.subscribeToAdminUpdates((update: any) => {
        const adminNotification: Notification = {
          id: `admin_${Date.now()}`,
          title: update.title || 'Admin Update',
          message: update.message || 'System update received',
          type: 'info',
          timestamp: new Date(),
          read: false
        };

        setNotifications(prev => [adminNotification, ...prev.slice(0, 19)]);
        setUnreadCount(prev => prev + 1);
        showToast(adminNotification.message, adminNotification.type);
      });
    }

    // Check connection status
    const checkConnection = () => {
      setIsConnected(websocketService.socket?.connected || false);
    };

    checkConnection();
    const interval = setInterval(checkConnection, 5000);

    return () => {
      clearInterval(interval);
      // Don't disconnect WebSocket service as it's used by other components
    };
  }, [user, userRole, showToast]);

  const markAsRead = async (id: string) => {
    try {
      const { apiClient } = await import('../api/client');
      // Use relative path so baseURL applies
      await apiClient.put('notifications/mark-read', {
        notification_ids: [id]
      });

      setNotifications(prev => 
        prev.map(notif => 
          notif.id === id ? { ...notif, read: true } : notif
        )
      );
      setUnreadCount(prev => Math.max(0, prev - 1));
    } catch (error) {
      console.error('Error marking notification as read:', error);
    }
  };

  const markAllAsRead = async () => {
    try {
      const { apiClient } = await import('../api/client');
      // Use relative path so baseURL applies
      await apiClient.put('notifications/mark-all-read');

      setNotifications(prev => 
        prev.map(notif => ({ ...notif, read: true }))
      );
      setUnreadCount(0);
    } catch (error) {
      console.error('Error marking all notifications as read:', error);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
      >
        <Icon name="Bell" className="h-5 w-5 text-white" />
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            {unreadCount > 9 ? '9+' : unreadCount}
          </span>
        )}
        {!isConnected && (
          <span className="absolute -bottom-1 -right-1 bg-yellow-500 text-white text-xs rounded-full h-3 w-3" title="Disconnected"></span>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 top-12 w-80 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 shadow-xl z-50">
          <div className="p-4 border-b border-white/20">
            <div className="flex items-center justify-between">
              <h3 className="text-white font-semibold">Notifications</h3>
              <div className="flex space-x-2">
                <button
                  onClick={markAllAsRead}
                  className="text-xs text-white/70 hover:text-white transition-colors"
                >
                  Mark all read
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  <Icon name="X" className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
          
          <div className="max-h-96 overflow-y-auto">
            {notifications.length === 0 ? (
              <div className="p-4 text-center text-white/70">
                <Icon name="Bell" className="h-8 w-8 mx-auto mb-2 opacity-50" />
                <p>No notifications yet</p>
              </div>
            ) : (
              notifications.map(notification => (
                <div
                  key={notification.id}
                  onClick={() => markAsRead(notification.id)}
                  className={`p-4 border-b border-white/10 hover:bg-white/5 transition-colors cursor-pointer ${
                    !notification.read ? 'bg-blue-500/10' : ''
                  }`}
                >
                  <div className="flex items-start space-x-3">
                    <div className={`p-1 rounded-full ${
                      notification.type === 'success' ? 'bg-green-500/20' :
                      notification.type === 'error' ? 'bg-red-500/20' :
                      notification.type === 'warning' ? 'bg-yellow-500/20' :
                      'bg-blue-500/20'
                    }`}>
                      <Icon 
                        name={
                          notification.type === 'success' ? 'CheckCircle' :
                          notification.type === 'error' ? 'XCircle' :
                          notification.type === 'warning' ? 'AlertTriangle' :
                          'Info'
                        } 
                        className="h-4 w-4 text-white" 
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-white font-medium text-sm">{notification.title}</h4>
                      <p className="text-white/70 text-xs mt-1">{notification.message}</p>
                      <p className="text-white/50 text-xs mt-1">
                        {notification.timestamp.toLocaleTimeString()}
                      </p>
                    </div>
                    {!notification.read && (
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default RealTimeNotifications;
