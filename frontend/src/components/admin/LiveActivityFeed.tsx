import React, { useState, useEffect } from 'react';
import Icon from '../Icon';
import GlassCard from '../GlassCard';

interface Activity {
  id: string;
  type: 'user' | 'booking' | 'payment' | 'system' | 'admin';
  action: string;
  description: string;
  user?: {
    id: string;
    name: string;
    avatar?: string;
  };
  timestamp: string;
  metadata?: Record<string, any>;
}

const LiveActivityFeed: React.FC = () => {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [filter, setFilter] = useState<'all' | 'user' | 'booking' | 'payment' | 'system' | 'admin'>('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchActivities();
    // Set up real-time updates
    const interval = setInterval(fetchActivities, 3000);
    return () => clearInterval(interval);
  }, []);

  const fetchActivities = async () => {
    try {
      // Mock data - replace with actual API call
      const mockActivities: Activity[] = [
        {
          id: '1',
          type: 'user',
          action: 'registered',
          description: 'New user registered',
          user: {
            id: 'user123',
            name: 'John Doe',
            avatar: '/avatars/john.jpg'
          },
          timestamp: new Date().toISOString(),
          metadata: { role: 'Renter' }
        },
        {
          id: '2',
          type: 'booking',
          action: 'created',
          description: 'New booking created',
          user: {
            id: 'user456',
            name: 'Jane Smith',
            avatar: '/avatars/jane.jpg'
          },
          timestamp: new Date(Date.now() - 30000).toISOString(),
          metadata: { bookingId: 'BK12345', amount: 250 }
        },
        {
          id: '3',
          type: 'payment',
          action: 'completed',
          description: 'Payment processed successfully',
          user: {
            id: 'user789',
            name: 'Mike Johnson',
            avatar: '/avatars/mike.jpg'
          },
          timestamp: new Date(Date.now() - 60000).toISOString(),
          metadata: { amount: 150, method: 'Credit Card' }
        },
        {
          id: '4',
          type: 'admin',
          action: 'approved',
          description: 'Vehicle approval processed',
          user: {
            id: 'admin1',
            name: 'Admin User',
            avatar: '/avatars/admin.jpg'
          },
          timestamp: new Date(Date.now() - 120000).toISOString(),
          metadata: { vehicleId: 'VH12345' }
        },
        {
          id: '5',
          type: 'system',
          action: 'backup',
          description: 'Daily backup completed',
          timestamp: new Date(Date.now() - 300000).toISOString(),
          metadata: { size: '2.5GB', duration: '15min' }
        }
      ];
      setActivities(mockActivities);
    } catch (error) {
      console.error('Error fetching activities:', error);
    } finally {
      setLoading(false);
    }
  };

  const getActivityIcon = (type: Activity['type']) => {
    switch (type) {
      case 'user': return 'User';
      case 'booking': return 'Calendar';
      case 'payment': return 'CreditCard';
      case 'system': return 'Server';
      case 'admin': return 'Shield';
      default: return 'Activity';
    }
  };

  const getActivityColor = (type: Activity['type']) => {
    switch (type) {
      case 'user': return 'text-blue-500';
      case 'booking': return 'text-green-500';
      case 'payment': return 'text-purple-500';
      case 'system': return 'text-gray-500';
      case 'admin': return 'text-orange-500';
      default: return 'text-white';
    }
  };

  const getActivityBgColor = (type: Activity['type']) => {
    switch (type) {
      case 'user': return 'bg-blue-500/20';
      case 'booking': return 'bg-green-500/20';
      case 'payment': return 'bg-purple-500/20';
      case 'system': return 'bg-gray-500/20';
      case 'admin': return 'bg-orange-500/20';
      default: return 'bg-white/20';
    }
  };

  const formatTimestamp = (timestamp: string) => {
    const now = new Date();
    const activityTime = new Date(timestamp);
    const diffInSeconds = Math.floor((now.getTime() - activityTime.getTime()) / 1000);

    if (diffInSeconds < 60) return 'Just now';
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`;
    return activityTime.toLocaleDateString();
  };

  const filteredActivities = activities.filter(activity => 
    filter === 'all' || activity.type === filter
  );

  if (loading) {
    return (
      <GlassCard title="Live Activity Feed" icon="Activity">
        <div className="flex items-center justify-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        </div>
      </GlassCard>
    );
  }

  return (
    <GlassCard title="Live Activity Feed" icon="Activity">
      <div className="space-y-4">
        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2">
          {['all', 'user', 'booking', 'payment', 'system', 'admin'].map((filterType) => (
            <button
              key={filterType}
              onClick={() => setFilter(filterType as any)}
              className={`px-3 py-1 rounded text-sm capitalize transition-colors ${
                filter === filterType 
                  ? 'bg-white/20 text-white' 
                  : 'bg-white/10 text-white/70 hover:bg-white/20'
              }`}
            >
              {filterType}
            </button>
          ))}
        </div>

        {/* Activities List */}
        <div className="space-y-3 max-h-96 overflow-y-auto">
          {filteredActivities.map((activity) => (
            <div
              key={activity.id}
              className="flex items-start space-x-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
            >
              <div className={`p-2 rounded-full ${getActivityBgColor(activity.type)}`}>
                <Icon
                  name={getActivityIcon(activity.type)}
                  className={`w-4 h-4 ${getActivityColor(activity.type)}`}
                />
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2">
                  <span className="font-medium text-white capitalize">
                    {activity.action}
                  </span>
                  <span className="text-white/70">
                    {activity.description}
                  </span>
                </div>
                
                {activity.user && (
                  <div className="flex items-center space-x-2 mt-1">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                      <Icon name="User" className="w-3 h-3 text-white/70" />
                    </div>
                    <span className="text-sm text-white/70">{activity.user.name}</span>
                  </div>
                )}
                
                {activity.metadata && (
                  <div className="mt-1 text-xs text-white/50">
                    {Object.entries(activity.metadata).map(([key, value]) => (
                      <span key={key} className="mr-3">
                        {key}: {value}
                      </span>
                    ))}
                  </div>
                )}
                
                <div className="text-xs text-white/50 mt-1">
                  {formatTimestamp(activity.timestamp)}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredActivities.length === 0 && (
          <div className="text-center py-8 text-white/50">
            No activities found
          </div>
        )}

        {/* Live Indicator */}
        <div className="flex items-center justify-center space-x-2 text-sm text-green-400">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span>Live updates enabled</span>
        </div>
      </div>
    </GlassCard>
  );
};

export default LiveActivityFeed;
