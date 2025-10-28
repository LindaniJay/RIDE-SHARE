import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import websocketService from '../services/websocketService';
import { BookingUpdate, Notification } from '../services/realtimeService';
import { toast } from 'react-hot-toast';
import { 
  Calendar, 
  DollarSign, 
  Clock, 
  CheckCircle, 
  XCircle, 
  Eye,
  MessageCircle,
  Shield,
  Activity,
  RefreshCw,
  MoreVertical
} from 'lucide-react';
import GlassCard from './GlassCard';
import GlassButton from './GlassButton';
import GlassInput from './GlassInput';
import StatusBadge from './StatusBadge';

interface Booking {
  id: number;
  booking_id: string;
  renterId: number;
  hostId: number;
  vehicleId: number;
  startDate: string;
  endDate: string;
  totalPrice: number;
  status: 'pending' | 'approved' | 'active' | 'completed' | 'cancelled';
  paymentStatus: 'pending' | 'paid' | 'failed' | 'refunded';
  paymentMethod?: string;
  specialRequests?: string;
  selfie_verification_url?: string;
  id_verification_url?: string;
  driver_license_url?: string;
  pre_trip_photos?: string[];
  post_trip_photos?: string[];
  contract_signed?: boolean;
  pickup_location?: string;
  pickup_time?: string;
  return_location?: string;
  return_time?: string;
  renter_phone?: string;
  emergency_contact_name?: string;
  emergency_contact_phone?: string;
  host_notes?: string;
  admin_notes?: string;
  cancellation_reason?: string;
  cancellation_fee?: number;
  selfie_verified?: boolean;
  id_verified?: boolean;
  pre_trip_completed?: boolean;
  post_trip_completed?: boolean;
  createdAt: string;
  updatedAt: string;
  renter?: {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
  };
  host?: {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
  };
  vehicle?: {
    id: number;
    make: string;
    model: string;
    year: number;
    images: string[];
  };
}

interface BookingManagementProps {
  userRole: 'admin' | 'host' | 'renter';
  userId?: number;
  onBookingAction?: (bookingId: number, action: string, data: any) => void;
  onRefresh?: () => Promise<void>;
}

const EnhancedBookingManagement: React.FC<BookingManagementProps> = ({
  userRole,
  userId
}) => {
  const { user } = useAuth();
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [filteredBookings, setFilteredBookings] = useState<Booking[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);
  const [showDetails, setShowDetails] = useState(false);
  const [filters, setFilters] = useState({
    status: '',
    paymentStatus: '',
    dateRange: '',
    search: ''
  });
  const [stats, setStats] = useState({
    total: 0,
    pending: 0,
    approved: 0,
    active: 0,
    completed: 0,
    cancelled: 0,
    totalRevenue: 0
  });

  useEffect(() => {
    loadBookings();
    setupRealtimeListeners();
  }, [userRole, userId]);

  useEffect(() => {
    applyFilters();
  }, [bookings, filters]);

  const setupRealtimeListeners = () => {
    const handleBookingUpdate = (update: BookingUpdate) => {
      setBookings(prev => prev.map(booking => 
        booking.id === update.bookingId 
          ? { ...booking, status: update.status as any, updatedAt: update.timestamp.toISOString() }
          : booking
      ));
      toast.success(`Booking ${update.bookingId} status updated: ${update.message}`);
    };

    const handleNotification = (notification: Notification) => {
      if (notification.type.includes('booking')) {
        loadBookings(); // Refresh bookings on new booking events
        toast.success(notification.message);
      }
    };

    websocketService.onBookingUpdate(handleBookingUpdate);
    websocketService.onNotification(handleNotification);

    return () => {
      websocketService.offBookingUpdate(handleBookingUpdate);
      websocketService.offNotification(handleNotification);
    };
  };

  const loadBookings = async () => {
    try {
      setIsLoading(true);
      const endpoint = userRole === 'admin' 
        ? 'http://localhost:5001/api/admin/bookings'
        : userRole === 'host'
        ? `http://localhost:5001/api/bookings/host/${user?.uid}`
        : `http://localhost:5001/api/bookings/user/${user?.uid}`;

      const response = await fetch(endpoint, {
        headers: {
          'Authorization': `Bearer ${await user?.getIdToken()}`
        }
      });

      if (response.ok) {
        const result = await response.json();
        setBookings(result.data || []);
        calculateStats(result.data || []);
      } else {
        toast.error('Failed to load bookings');
      }
    } catch (error) {
      console.error('Error loading bookings:', error);
      toast.error('Failed to load bookings');
    } finally {
      setIsLoading(false);
    }
  };

  const calculateStats = (bookings: Booking[]) => {
    const newStats = {
      total: bookings.length,
      pending: bookings.filter(b => b.status === 'pending').length,
      approved: bookings.filter(b => b.status === 'approved').length,
      active: bookings.filter(b => b.status === 'active').length,
      completed: bookings.filter(b => b.status === 'completed').length,
      cancelled: bookings.filter(b => b.status === 'cancelled').length,
      totalRevenue: bookings
        .filter(b => b.status === 'completed')
        .reduce((sum, b) => sum + b.totalPrice, 0)
    };
    setStats(newStats);
  };

  const applyFilters = () => {
    let filtered = [...bookings];

    if (filters.status) {
      filtered = filtered.filter(booking => booking.status === filters.status);
    }

    if (filters.paymentStatus) {
      filtered = filtered.filter(booking => booking.paymentStatus === filters.paymentStatus);
    }

    if (filters.search) {
      const searchTerm = filters.search.toLowerCase();
      filtered = filtered.filter(booking => 
        booking.booking_id.toLowerCase().includes(searchTerm) ||
        booking.renter?.firstName?.toLowerCase().includes(searchTerm) ||
        booking.renter?.lastName?.toLowerCase().includes(searchTerm) ||
        booking.vehicle?.make?.toLowerCase().includes(searchTerm) ||
        booking.vehicle?.model?.toLowerCase().includes(searchTerm)
      );
    }

    setFilteredBookings(filtered);
  };

  const handleStatusChange = async (bookingId: number, newStatus: string, notes?: string) => {
    try {
      const response = await fetch(`http://localhost:5001/api/bookings/${bookingId}/status`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${await user?.getIdToken()}`
        },
        body: JSON.stringify({
          status: newStatus,
          admin_notes: notes
        })
      });

      if (response.ok) {
        toast.success(`Booking status updated to ${newStatus}`);
        loadBookings();
      } else {
        toast.error('Failed to update booking status');
      }
    } catch (error) {
      console.error('Error updating booking status:', error);
      toast.error('Failed to update booking status');
    }
  };

  const handleRefund = async (bookingId: number, amount: number) => {
    try {
      const response = await fetch(`http://localhost:5001/api/bookings/${bookingId}/refund`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${await user?.getIdToken()}`
        },
        body: JSON.stringify({ amount })
      });

      if (response.ok) {
        toast.success('Refund processed successfully');
        loadBookings();
      } else {
        toast.error('Failed to process refund');
      }
    } catch (error) {
      console.error('Error processing refund:', error);
      toast.error('Failed to process refund');
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'approved': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'active': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'completed': return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30';
      case 'cancelled': return 'bg-red-500/20 text-red-400 border-red-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getPaymentStatusColor = (status: string) => {
    switch (status) {
      case 'paid': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'pending': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'failed': return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'refunded': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <GlassCard className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-400">Total Bookings</p>
              <p className="text-2xl font-bold text-white">{stats.total}</p>
            </div>
            <Calendar className="w-8 h-8 text-blue-400" />
          </div>
        </GlassCard>

        <GlassCard className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-400">Active Bookings</p>
              <p className="text-2xl font-bold text-white">{stats.active}</p>
            </div>
            <Activity className="w-8 h-8 text-green-400" />
          </div>
        </GlassCard>

        <GlassCard className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-400">Pending Approval</p>
              <p className="text-2xl font-bold text-white">{stats.pending}</p>
            </div>
            <Clock className="w-8 h-8 text-yellow-400" />
          </div>
        </GlassCard>

        <GlassCard className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-400">Total Revenue</p>
              <p className="text-2xl font-bold text-white">R{stats.totalRevenue.toFixed(2)}</p>
            </div>
            <DollarSign className="w-8 h-8 text-emerald-400" />
          </div>
        </GlassCard>
      </div>

      {/* Filters */}
      <GlassCard className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Status</label>
            <select
              value={filters.status}
              onChange={(e) => setFilters(prev => ({ ...prev, status: e.target.value }))}
              className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">All Statuses</option>
              <option value="pending">Pending</option>
              <option value="approved">Approved</option>
              <option value="active">Active</option>
              <option value="completed">Completed</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Payment Status</label>
            <select
              value={filters.paymentStatus}
              onChange={(e) => setFilters(prev => ({ ...prev, paymentStatus: e.target.value }))}
              className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">All Payment Statuses</option>
              <option value="pending">Pending</option>
              <option value="paid">Paid</option>
              <option value="failed">Failed</option>
              <option value="refunded">Refunded</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Search</label>
            <GlassInput
              value={filters.search}
              onChange={(value) => setFilters(prev => ({ ...prev, search: value }))}
              placeholder="Search bookings..."
              className="w-full"
            />
          </div>

          <div className="flex items-end space-x-2">
            <GlassButton
              onClick={loadBookings}
              variant="outline"
              size="sm"
            >
              <RefreshCw className="w-4 h-4" />
            </GlassButton>
            <GlassButton
              onClick={() => setFilters({ status: '', paymentStatus: '', dateRange: '', search: '' })}
              variant="outline"
              size="sm"
            >
              Clear
            </GlassButton>
          </div>
        </div>
      </GlassCard>

      {/* Bookings List */}
      <div className="space-y-4">
        {filteredBookings.length === 0 ? (
          <GlassCard className="p-8 text-center">
            <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">No Bookings Found</h3>
            <p className="text-gray-400">No bookings match your current filters.</p>
          </GlassCard>
        ) : (
          filteredBookings.map((booking) => (
            <motion.div
              key={booking.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 p-6 hover:bg-white/10 transition-all duration-200"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      Booking #{booking.booking_id}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {booking.vehicle?.make} {booking.vehicle?.model} ({booking.vehicle?.year})
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <StatusBadge
                    status={booking.status}
                    className={getStatusColor(booking.status)}
                  />
                  <StatusBadge
                    status={booking.paymentStatus}
                    className={getPaymentStatusColor(booking.paymentStatus)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <p className="text-sm text-gray-400">Renter</p>
                  <p className="text-white font-medium">
                    {booking.renter?.firstName} {booking.renter?.lastName}
                  </p>
                  <p className="text-sm text-gray-400">{booking.renter?.email}</p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-400">Host</p>
                  <p className="text-white font-medium">
                    {booking.host?.firstName} {booking.host?.lastName}
                  </p>
                  <p className="text-sm text-gray-400">{booking.host?.email}</p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-400">Rental Period</p>
                  <p className="text-white font-medium">
                    {new Date(booking.startDate).toLocaleDateString()} - {new Date(booking.endDate).toLocaleDateString()}
                  </p>
                  <p className="text-sm text-gray-400">
                    {Math.ceil((new Date(booking.endDate).getTime() - new Date(booking.startDate).getTime()) / (1000 * 60 * 60 * 24))} days
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <p className="text-sm text-gray-400">Total Amount</p>
                    <p className="text-lg font-bold text-green-400">R{booking.totalPrice.toFixed(2)}</p>
                  </div>
                  
                  {booking.selfie_verified && (
                    <div className="flex items-center space-x-1 text-green-400">
                      <Shield className="w-4 h-4" />
                      <span className="text-sm">Verified</span>
                    </div>
                  )}
                </div>

                <div className="flex items-center space-x-2">
                  <GlassButton
                    onClick={() => {
                      setSelectedBooking(booking);
                      setShowDetails(true);
                    }}
                    size="sm"
                    variant="outline"
                  >
                    <Eye className="w-4 h-4" />
                  </GlassButton>
                  
                  <GlassButton
                    onClick={() => {
                      // Open chat with renter/host
                    }}
                    size="sm"
                    variant="outline"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </GlassButton>

                  {userRole === 'admin' && (
                    <div className="relative">
                      <GlassButton
                        size="sm"
                        variant="outline"
                      >
                        <MoreVertical className="w-4 h-4" />
                      </GlassButton>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))
        )}
      </div>

      {/* Booking Details Modal */}
      {showDetails && selectedBooking && (
        <BookingDetailsModal
          booking={selectedBooking}
          onClose={() => setShowDetails(false)}
          onStatusChange={handleStatusChange}
          onRefund={handleRefund}
          userRole={userRole}
        />
      )}
    </div>
  );
};

// Booking Details Modal Component
interface BookingDetailsModalProps {
  booking: Booking;
  onClose: () => void;
  onStatusChange: (bookingId: number, status: string, notes?: string) => void;
  onRefund: (bookingId: number, amount: number) => void;
  userRole: 'admin' | 'host' | 'renter';
}

const BookingDetailsModal: React.FC<BookingDetailsModalProps> = ({
  booking,
  onClose,
  onStatusChange,
  onRefund,
  userRole
}) => {
  const [adminNotes, setAdminNotes] = useState(booking.admin_notes || '');
  const [refundAmount] = useState(booking.totalPrice);

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-gray-900/90 backdrop-blur-xl rounded-2xl border border-white/20 w-full max-w-4xl max-h-[90vh] overflow-hidden"
      >
        <div className="p-6 border-b border-white/10">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-white">Booking Details</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <XCircle className="w-6 h-6 text-gray-400" />
            </button>
          </div>
        </div>

        <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Booking Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Booking Information</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-400">Booking ID:</span>
                  <span className="text-white font-mono">#{booking.booking_id}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Status:</span>
                  <StatusBadge status={booking.status} />
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Payment Status:</span>
                  <StatusBadge status={booking.paymentStatus} />
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Total Amount:</span>
                  <span className="text-green-400 font-semibold">R{booking.totalPrice.toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* Verification Status */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Verification Status</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Selfie Verified:</span>
                  <div className="flex items-center space-x-2">
                    {booking.selfie_verified ? (
                      <CheckCircle className="w-5 h-5 text-green-400" />
                    ) : (
                      <XCircle className="w-5 h-5 text-red-400" />
                    )}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">ID Verified:</span>
                  <div className="flex items-center space-x-2">
                    {booking.id_verified ? (
                      <CheckCircle className="w-5 h-5 text-green-400" />
                    ) : (
                      <XCircle className="w-5 h-5 text-red-400" />
                    )}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Contract Signed:</span>
                  <div className="flex items-center space-x-2">
                    {booking.contract_signed ? (
                      <CheckCircle className="w-5 h-5 text-green-400" />
                    ) : (
                      <XCircle className="w-5 h-5 text-red-400" />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Admin Actions */}
          {userRole === 'admin' && (
            <div className="mt-6 p-4 bg-white/5 rounded-lg">
              <h3 className="text-lg font-semibold text-white mb-4">Admin Actions</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Admin Notes
                  </label>
                  <textarea
                    value={adminNotes}
                    onChange={(e) => setAdminNotes(e.target.value)}
                    className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    rows={3}
                    placeholder="Add admin notes..."
                  />
                </div>
                
                <div className="flex space-x-2">
                  <GlassButton
                    onClick={() => onStatusChange(booking.id, 'approved', adminNotes)}
                    disabled={booking.status !== 'pending'}
                    size="sm"
                  >
                    Approve
                  </GlassButton>
                  <GlassButton
                    onClick={() => onStatusChange(booking.id, 'cancelled', adminNotes)}
                    disabled={booking.status === 'cancelled'}
                    size="sm"
                    variant="outline"
                  >
                    Cancel
                  </GlassButton>
                  <GlassButton
                    onClick={() => onRefund(booking.id, refundAmount)}
                    disabled={booking.paymentStatus !== 'paid'}
                    size="sm"
                    variant="outline"
                  >
                    Refund
                  </GlassButton>
                </div>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default EnhancedBookingManagement;