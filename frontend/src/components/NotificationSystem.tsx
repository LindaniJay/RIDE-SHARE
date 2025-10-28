import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import websocketService from '../services/websocketService';
import Icon from './Icon';
// import { ApprovalStatus } from '../types';

interface Notification {
  id: string;
  type: 'approval' | 'rejection' | 'info';
  title: string;
  message: string;
  timestamp: Date;
  read: boolean;
  actionUrl?: string;
  actionText?: string;
}

interface NotificationSystemProps {
  userId: string;
  className?: string;
}

export const NotificationSystem: React.FC<NotificationSystemProps> = ({
  userId,
  className = ''
}) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  const [isConnected, setIsConnected] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    fetchNotifications();
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
        type: notification.type || 'info',
        title: notification.title,
        message: notification.message,
        timestamp: new Date(notification.timestamp || Date.now()),
        read: false,
        actionUrl: notification.actionUrl,
        actionText: notification.actionText
      };

      setNotifications(prev => [newNotification, ...prev.slice(0, 19)]);
      setUnreadCount(prev => prev + 1);
    });

    // Check connection status
    const checkConnection = () => {
      setIsConnected(websocketService.socket?.connected || false);
    };

    checkConnection();
    const interval = setInterval(checkConnection, 5000);

    return () => {
      clearInterval(interval);
      // Do not disconnect here; WebSocket is shared across the app
    };
  }, [user]);

  const fetchNotifications = async () => {
    try {
      const token = localStorage.getItem('authToken');
      const response = await fetch(`/api/notifications/${userId}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        setNotifications(data.notifications || []);
        setUnreadCount(data.unreadCount || 0);
      }
    } catch (error) {
      console.error('Error fetching notifications:', error);
      // Fallback to empty arrays instead of mock data
      setNotifications([]);
      setUnreadCount(0);
    }
  };

  const markAsRead = async (notificationId: string) => {
    try {
      const token = localStorage.getItem('authToken');
      await fetch(`/api/notifications/${notificationId}/read`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      setNotifications(prev => 
        prev.map(notif => 
          notif.id === notificationId ? { ...notif, read: true } : notif
        )
      );
      setUnreadCount(prev => Math.max(0, prev - 1));
    } catch (error) {
      console.error('Error marking notification as read:', error);
    }
  };

  const markAllAsRead = async () => {
    try {
      const token = localStorage.getItem('authToken');
      await fetch(`/api/notifications/${userId}/read-all`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      setNotifications(prev => prev.map(notif => ({ ...notif, read: true })));
      setUnreadCount(0);
    } catch (error) {
      console.error('Error marking all notifications as read:', error);
    }
  };

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'approval':
        return 'CheckCircle';
      case 'rejection':
        return 'XCircle';
      case 'info':
        return 'Info';
      default:
        return 'Bell';
    }
  };

  const getNotificationColor = (type: string) => {
    switch (type) {
      case 'approval':
        return 'text-green-400';
      case 'rejection':
        return 'text-red-400';
      case 'info':
        return 'text-blue-400';
      default:
        return 'text-white';
    }
  };

  const formatTimestamp = (timestamp: Date) => {
    const now = new Date();
    const diff = now.getTime() - timestamp.getTime();
    const minutes = Math.floor(diff / (1000 * 60));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    if (minutes < 60) {
      return `${minutes}m ago`;
    } else if (hours < 24) {
      return `${hours}h ago`;
    } else {
      return `${days}d ago`;
    }
  };

  return (
    <div className={`relative ${className}`}>
      {/* Notification Bell */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 glass-button hover:bg-white/20 transition-all duration-300"
        title="Notifications"
      >
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5-5-5h5v-5a7.5 7.5 0 00-15 0v5h5l-5 5-5-5h5v-5a7.5 7.5 0 0115 0v5z" />
        </svg>
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            {unreadCount > 9 ? '9+' : unreadCount}
          </span>
        )}
        {!isConnected && (
          <span className="absolute -bottom-1 -right-1 bg-yellow-500 text-white text-xs rounded-full h-3 w-3" title="Disconnected"></span>
        )}
      </button>

      {/* Notification Dropdown */}
      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-80 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-2xl z-50">
          <div className="p-4 border-b border-white/20">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-white">Notifications</h3>
              {unreadCount > 0 && (
                <button
                  onClick={markAllAsRead}
                  className="text-xs text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Mark all as read
                </button>
              )}
            </div>
          </div>

          <div className="max-h-96 overflow-y-auto">
            {notifications.length === 0 ? (
              <div className="p-4 text-center text-white/70">
                <div className="mb-2">
                  <Icon name="Bell" size="lg" className="text-white/50 mx-auto" />
                </div>
                <p>No notifications yet</p>
              </div>
            ) : (
              notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`p-4 border-b border-white/10 hover:bg-white/5 transition-colors ${
                    !notification.read ? 'bg-white/5' : ''
                  }`}
                  onClick={() => {
                    if (!notification.read) {
                      markAsRead(notification.id);
                    }
                    if (notification.actionUrl) {
                      window.location.href = notification.actionUrl;
                    }
                  }}
                >
                  <div className="flex items-start space-x-3">
                    <Icon name={getNotificationIcon(notification.type)} size="lg" />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className={`text-sm font-medium ${getNotificationColor(notification.type)}`}>
                          {notification.title}
                        </h4>
                        <div className="flex items-center space-x-2">
                          <span className="text-xs text-white/60">
                            {formatTimestamp(notification.timestamp)}
                          </span>
                          {!notification.read && (
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          )}
                        </div>
                      </div>
                      <p className="text-sm text-white/80 mb-2">{notification.message}</p>
                      {notification.actionText && (
                        <button className="text-xs text-blue-400 hover:text-blue-300 transition-colors">
                          {notification.actionText} →
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {notifications.length > 0 && (
            <div className="p-4 border-t border-white/20">
              <button className="w-full text-center text-sm text-white/70 hover:text-white transition-colors">
                View all notifications
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default NotificationSystem;
