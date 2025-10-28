import React, { useState, useEffect } from 'react';
import { 
  CheckCircle, 
  Clock, 
  XCircle, 
  AlertCircle, 
  TrendingUp, 
  Calendar, 
  DollarSign,
  Activity,
  RefreshCw
} from 'lucide-react';

interface WorkflowSummary {
  totalBookings: number;
  pendingBookings: number;
  confirmedBookings: number;
  completedBookings: number;
  cancelledBookings: number;
  averageCompletionTime: number;
  successRate: number;
  revenue: number;
  recentActivity: Array<{
    id: string;
    type: string;
    message: string;
    timestamp: Date;
    bookingId: string;
  }>;
  bottlenecks: Array<{
    step: string;
    count: number;
    averageTime: number;
  }>;
}

interface BookingWorkflowSummaryProps {
  userRole: 'renter' | 'host' | 'admin';
  userId: string;
  onRefresh?: () => void;
}

const BookingWorkflowSummary: React.FC<BookingWorkflowSummaryProps> = ({
  userRole,
  userId,
  onRefresh
}) => {
  const [summary, setSummary] = useState<WorkflowSummary | null>(null);
  const [loading, setLoading] = useState(true);
  const [timeRange, setTimeRange] = useState<'7d' | '30d' | '90d' | 'all'>('30d');

  useEffect(() => {
    fetchWorkflowSummary();
  }, [userRole, userId, timeRange]);

  const fetchWorkflowSummary = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem('auth_token');
      const response = await fetch(`/api/workflow/summary?userRole=${userRole}&userId=${userId}&timeRange=${timeRange}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        const data = await response.json();
        setSummary(data.summary);
      } else {
        console.error('Failed to fetch workflow summary');
        setSummary(null);
      }
    } catch (error) {
      console.error('Error fetching workflow summary:', error);
      setSummary(null);
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'text-yellow-600 bg-yellow-100';
      case 'confirmed':
        return 'text-blue-600 bg-blue-100';
      case 'completed':
        return 'text-green-600 bg-green-100';
      case 'cancelled':
        return 'text-red-600 bg-red-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'booking_created':
        return <Calendar className="w-4 h-4 text-blue-600" />;
      case 'booking_approved':
        return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'booking_declined':
        return <XCircle className="w-4 h-4 text-red-600" />;
      case 'payment_processed':
        return <DollarSign className="w-4 h-4 text-green-600" />;
      case 'booking_completed':
        return <CheckCircle className="w-4 h-4 text-blue-600" />;
      default:
        return <Activity className="w-4 h-4 text-gray-600" />;
    }
  };

  const formatTimeAgo = (timestamp: Date) => {
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

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!summary) {
    return (
      <div className="text-center py-8">
        <AlertCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
        <p className="text-gray-500">No workflow data available</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Booking Workflow Summary</h2>
          <p className="text-gray-600">
            {userRole === 'renter' && 'Your booking activity and status'}
            {userRole === 'host' && 'Your vehicle booking management'}
            {userRole === 'admin' && 'Platform-wide booking analytics'}
          </p>
        </div>
        <div className="flex items-center gap-4">
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value as any)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          >
            <option value="7d">Last 7 days</option>
            <option value="30d">Last 30 days</option>
            <option value="90d">Last 90 days</option>
            <option value="all">All time</option>
          </select>
          <button
            onClick={onRefresh || fetchWorkflowSummary}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <RefreshCw className="w-4 h-4" />
            Refresh
          </button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Bookings</p>
              <p className="text-2xl font-bold text-gray-900">{summary.totalBookings}</p>
            </div>
            <Calendar className="w-8 h-8 text-blue-600" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Success Rate</p>
              <p className="text-2xl font-bold text-green-600">{summary.successRate}%</p>
            </div>
            <TrendingUp className="w-8 h-8 text-green-600" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Avg. Completion</p>
              <p className="text-2xl font-bold text-blue-600">{summary.averageCompletionTime}d</p>
            </div>
            <Clock className="w-8 h-8 text-blue-600" />
          </div>
        </div>

        {userRole !== 'renter' && (
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Revenue</p>
                <p className="text-2xl font-bold text-green-600">R{summary.revenue.toLocaleString()}</p>
              </div>
              <DollarSign className="w-8 h-8 text-green-600" />
            </div>
          </div>
        )}
      </div>

      {/* Booking Status Breakdown */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Booking Status Breakdown</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${getStatusColor('pending')}`}>
              <Clock className="w-4 h-4" />
              Pending
            </div>
            <p className="text-2xl font-bold text-gray-900 mt-2">{summary.pendingBookings}</p>
          </div>
          
          <div className="text-center">
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${getStatusColor('confirmed')}`}>
              <CheckCircle className="w-4 h-4" />
              Confirmed
            </div>
            <p className="text-2xl font-bold text-gray-900 mt-2">{summary.confirmedBookings}</p>
          </div>
          
          <div className="text-center">
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${getStatusColor('completed')}`}>
              <CheckCircle className="w-4 h-4" />
              Completed
            </div>
            <p className="text-2xl font-bold text-gray-900 mt-2">{summary.completedBookings}</p>
          </div>
          
          <div className="text-center">
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${getStatusColor('cancelled')}`}>
              <XCircle className="w-4 h-4" />
              Cancelled
            </div>
            <p className="text-2xl font-bold text-gray-900 mt-2">{summary.cancelledBookings}</p>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Activity</h3>
        <div className="space-y-3">
          {summary.recentActivity.map((activity) => (
            <div key={activity.id} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <div className="flex-shrink-0">
                {getActivityIcon(activity.type)}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900">{activity.message}</p>
                <p className="text-xs text-gray-500">{formatTimeAgo(activity.timestamp)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottlenecks Analysis */}
      {summary.bottlenecks.length > 0 && (
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Workflow Bottlenecks</h3>
          <div className="space-y-3">
            {summary.bottlenecks.map((bottleneck, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-orange-50 rounded-lg border border-orange-200">
                <div>
                  <p className="font-medium text-gray-800">{bottleneck.step}</p>
                  <p className="text-sm text-gray-600">
                    {bottleneck.count} instances, avg. {bottleneck.averageTime}h delay
                  </p>
                </div>
                <div className="text-right">
                  <div className="w-16 h-2 bg-orange-200 rounded-full">
                    <div 
                      className="h-2 bg-orange-500 rounded-full"
                      style={{ width: `${Math.min((bottleneck.averageTime / 10) * 100, 100)}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingWorkflowSummary;
