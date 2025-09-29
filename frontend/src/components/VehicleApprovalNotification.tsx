import React, { useState, useEffect } from 'react';
import { Vehicle } from '../types';
import Icon from './Icon';

interface VehicleApprovalNotificationProps {
  hostId: string;
  className?: string;
}

interface VehicleNotification {
  id: string;
  vehicleId: string;
  vehicleName: string;
  status: 'approved' | 'rejected';
  message: string;
  adminNotes?: string;
  rejectionReason?: string;
  timestamp: Date;
  read: boolean;
}

export const VehicleApprovalNotification: React.FC<VehicleApprovalNotificationProps> = ({
  hostId,
  className = ""
}) => {
  const [notifications, setNotifications] = useState<VehicleNotification[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetchNotifications();
  }, [hostId]);

  const fetchNotifications = async () => {
    try {
      // Mock data - in real implementation, fetch from API
      const mockNotifications: VehicleNotification[] = [
        {
          id: '1',
          vehicleId: 'vehicle-1',
          vehicleName: '2020 Toyota Corolla',
          status: 'approved',
          message: 'Your vehicle listing has been approved and is now visible to renters.',
          adminNotes: 'Great condition, all documents verified.',
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
          read: false
        },
        {
          id: '2',
          vehicleId: 'vehicle-2',
          vehicleName: '2019 BMW X3',
          status: 'rejected',
          message: 'Your vehicle listing requires some updates before approval.',
          rejectionReason: 'Insurance certificate is expired. Please upload a current certificate.',
          timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000), // 5 hours ago
          read: true
        }
      ];
      
      setNotifications(mockNotifications);
    } catch (error) {
      console.error('Failed to fetch notifications:', error);
    } finally {
      setLoading(false);
    }
  };

  const markAsRead = (notificationId: string) => {
    setNotifications(prev => 
      prev.map(notif => 
        notif.id === notificationId ? { ...notif, read: true } : notif
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev => 
      prev.map(notif => ({ ...notif, read: true }))
    );
  };

  const getStatusIcon = (status: string) => {
    return status === 'approved' ? 'CheckCircle' : 'XCircle';
  };

  const getStatusColor = (status: string) => {
    return status === 'approved' 
      ? 'text-green-400 bg-green-500/20 border-green-500/30'
      : 'text-red-400 bg-red-500/20 border-red-500/30';
  };

  const unreadCount = notifications.filter(n => !n.read).length;
  const displayNotifications = showAll ? notifications : notifications.slice(0, 3);

  if (loading) {
    return (
      <div className={`space-y-3 ${className}`}>
        {[...Array(2)].map((_, i) => (
          <div key={i} className="animate-pulse">
            <div className="bg-white/10 rounded-lg p-4">
              <div className="h-4 bg-white/20 rounded w-3/4 mb-2"></div>
              <div className="h-3 bg-white/20 rounded w-1/2"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (notifications.length === 0) {
    return (
      <div className={`text-center py-4 ${className}`}>
        <Icon name="Bell" size="lg" className="text-white/50 mb-2" />
        <p className="text-white/70 text-sm">No vehicle approval notifications</p>
      </div>
    );
  }

  return (
    <div className={`space-y-3 ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Icon name="Bell" size="sm" />
          <span className="text-sm font-medium text-white">Vehicle Approvals</span>
          {unreadCount > 0 && (
            <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs">
              {unreadCount}
            </span>
          )}
        </div>
        {notifications.length > 3 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-xs text-white/70 hover:text-white transition-colors"
          >
            {showAll ? 'Show Less' : `Show All (${notifications.length})`}
          </button>
        )}
      </div>

      {/* Notifications */}
      <div className="space-y-2">
        {displayNotifications.map((notification) => (
          <div
            key={notification.id}
            className={`p-3 rounded-lg border transition-all duration-200 ${
              notification.read 
                ? 'bg-white/5 border-white/10' 
                : 'bg-white/10 border-white/20'
            }`}
            onClick={() => markAsRead(notification.id)}
          >
            <div className="flex items-start space-x-3">
              <div className={`p-1 rounded-full ${getStatusColor(notification.status)}`}>
                <Icon name={getStatusIcon(notification.status)} size="sm" />
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-sm font-medium text-white truncate">
                    {notification.vehicleName}
                  </h4>
                  <span className="text-xs text-white/60">
                    {notification.timestamp.toLocaleDateString()}
                  </span>
                </div>
                
                <p className="text-sm text-white/80 mb-2">
                  {notification.message}
                </p>
                
                {notification.adminNotes && (
                  <div className="bg-white/5 rounded p-2 mb-2">
                    <p className="text-xs text-white/70">
                      <span className="font-medium">Admin Notes:</span> {notification.adminNotes}
                    </p>
                  </div>
                )}
                
                {notification.rejectionReason && (
                  <div className="bg-red-500/10 border border-red-500/20 rounded p-2">
                    <p className="text-xs text-red-300">
                      <span className="font-medium">Action Required:</span> {notification.rejectionReason}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mark All as Read */}
      {unreadCount > 0 && (
        <div className="pt-2 border-t border-white/20">
          <button
            onClick={markAllAsRead}
            className="w-full text-xs text-white/70 hover:text-white transition-colors py-2"
          >
            Mark all as read
          </button>
        </div>
      )}
    </div>
  );
};

export default VehicleApprovalNotification;
