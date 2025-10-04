import React, { useState, useEffect } from 'react';
import { useToast } from './ToastProvider';
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
  const { showToast } = useToast();

  useEffect(() => {
    // Simulate real-time notifications
    const interval = setInterval(() => {
      const newNotification: Notification = {
        id: Math.random().toString(36).substr(2, 9),
        title: getRandomNotificationTitle(userRole),
        message: getRandomNotificationMessage(userRole),
        type: getRandomNotificationType(),
        timestamp: new Date(),
        read: false
      };

      setNotifications(prev => [newNotification, ...prev.slice(0, 9)]);
      setUnreadCount(prev => prev + 1);
      
      // Show toast notification
      showToast(newNotification.message, newNotification.type);
    }, 30000); // Every 30 seconds for demo

    return () => clearInterval(interval);
  }, [userRole, showToast]);

  const getRandomNotificationTitle = (role: string) => {
    const titles = {
      renter: ['New Booking Confirmed', 'Payment Received', 'Vehicle Available', 'Booking Reminder'],
      host: ['New Booking Request', 'Payment Received', 'Vehicle Approved', 'Booking Completed'],
      admin: ['New User Registration', 'Vehicle Pending Approval', 'System Alert', 'Revenue Update']
    };
    const roleTitles = titles[role as keyof typeof titles] || titles.admin;
    return roleTitles[Math.floor(Math.random() * roleTitles.length)];
  };

  const getRandomNotificationMessage = (role: string) => {
    const messages = {
      renter: [
        'Your booking has been confirmed!',
        'Payment of R1,200 has been processed.',
        'New vehicles matching your preferences are available.',
        'Your booking starts tomorrow at 9:00 AM.'
      ],
      host: [
        'You have a new booking request for your Toyota Corolla.',
        'Payment of R800 has been received.',
        'Your vehicle listing has been approved!',
        'Booking completed successfully. Great job!'
      ],
      admin: [
        'New user John Doe has registered as a host.',
        '5 vehicles are pending approval.',
        'System performance is optimal.',
        'Monthly revenue: R45,000'
      ]
    };
    const roleMessages = messages[role as keyof typeof messages] || messages.admin;
    return roleMessages[Math.floor(Math.random() * roleMessages.length)];
  };

  const getRandomNotificationType = (): 'info' | 'success' | 'warning' | 'error' => {
    const types: ('info' | 'success' | 'warning' | 'error')[] = ['info', 'success', 'warning', 'error'];
    return types[Math.floor(Math.random() * types.length)];
  };

  const markAsRead = (id: string) => {
    setNotifications(prev => 
      prev.map(notif => 
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
    setUnreadCount(prev => Math.max(0, prev - 1));
  };

  const markAllAsRead = () => {
    setNotifications(prev => 
      prev.map(notif => ({ ...notif, read: true }))
    );
    setUnreadCount(0);
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
