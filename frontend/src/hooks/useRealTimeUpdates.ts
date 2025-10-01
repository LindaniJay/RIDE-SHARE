import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import websocketService from '../services/websocketService';

interface Notification {
  id: string;
  type: 'admin_action' | 'booking_update' | 'payment_update' | 'profile_update';
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
  actionUrl?: string;
}

interface RealTimeUpdate {
  type: 'user_approved' | 'vehicle_approved' | 'booking_created' | 'payment_received';
  data: any;
  timestamp: string;
}

export const useRealTimeUpdates = () => {
  const { user } = useAuth();
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [updates, setUpdates] = useState<RealTimeUpdate[]>([]);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    if (!user) return;

    const token = localStorage.getItem('accessToken');
    if (!token) return;

    // Connect to WebSocket
    websocketService.connect(token);

    // Subscribe to notifications
    websocketService.subscribeToNotifications((notification: Notification) => {
      setNotifications(prev => [notification, ...prev]);
      
      // Show browser notification if permission granted
      if (Notification.permission === 'granted') {
        new Notification(notification.title, {
          body: notification.message,
          icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiByeD0iOCIgZmlsbD0iIzI1NjNlYiIvPgo8dGV4dCB4PSIzMiIgeT0iMzgiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5SUzwvdGV4dD4KPC9zdmc+'
        });
      }
    });

    // Subscribe to role-specific updates
    if (user.role === 'admin' as any) {
      websocketService.subscribeToAdminUpdates((update: RealTimeUpdate) => {
        setUpdates(prev => [update, ...prev]);
      });
    } else {
      websocketService.subscribeToRenterUpdates((update: RealTimeUpdate) => {
        setUpdates(prev => [update, ...prev]);
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
      websocketService.disconnect();
    };
  }, [user]);

  const markNotificationAsRead = (notificationId: string) => {
    setNotifications(prev => 
      prev.map(notification => 
        notification.id === notificationId 
          ? { ...notification, read: true }
          : notification
      )
    );
  };

  const clearNotifications = () => {
    setNotifications([]);
  };

  const requestNotificationPermission = async () => {
    if (Notification.permission === 'default') {
      await Notification.requestPermission();
    }
  };

  return {
    notifications,
    updates,
    isConnected,
    markNotificationAsRead,
    clearNotifications,
    requestNotificationPermission
  };
};
