import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  Clock, 
  User, 
  Car, 
  CheckCircle, 
  XCircle, 
  AlertCircle, 
  Eye, 
  MessageCircle, 
  Phone,
  MapPin,
  CreditCard,
  Star,
  MoreVertical,
  RefreshCw,
  Filter,
  Search
} from 'lucide-react';

interface Booking {
  id: string;
  vehicleId: string;
  renterId: string;
  hostId: string;
  vehicleTitle: string;
  vehicleImage: string;
  renterName: string;
  renterEmail: string;
  renterPhone?: string;
  hostName: string;
  hostEmail: string;
  startDate: string;
  endDate: string;
  totalPrice: number;
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
  paymentStatus: 'pending' | 'paid' | 'refunded';
  createdAt: string;
  updatedAt: string;
  specialRequests?: string;
  cancellationReason?: string;
  rating?: number;
  review?: string;
}

interface EnhancedBookingManagementProps {
  userRole: 'renter' | 'host' | 'admin';
  userId: string;
  onBookingAction?: (bookingId: string, action: string, data?: any) => void;
  onRefresh?: () => void;
}

const EnhancedBookingManagement: React.FC<EnhancedBookingManagementProps> = ({
  userRole,
  userId,
  onBookingAction,
  onRefresh
}) => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [filteredBookings, setFilteredBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);
  const [showDetails, setShowDetails] = useState(false);
  const [filters, setFilters] = useState({
    status: 'all',
    dateRange: 'all',
    search: ''
  });
  const [sortBy, setSortBy] = useState('createdAt');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

  // Fetch real bookings from API
  const fetchBookings = async () => {
    try {
      setLoading(true);
      const endpoint = userRole === 'host' ? '/api/bookings/host-bookings' : '/api/bookings/my-bookings';
      
      const response = await fetch(endpoint, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      
      if (result.bookings) {
        setBookings(result.bookings);
        setFilteredBookings(result.bookings);
      } else {
        throw new Error(result.error || 'Failed to fetch bookings');
      }
    } catch (error) {
      console.error('Error fetching bookings:', error);
      setBookings([]);
      setFilteredBookings([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, [userRole, userId]);


  useEffect(() => {
    applyFilters();
  }, [bookings, filters, sortBy, sortOrder]);

  const applyFilters = () => {
    let filtered = [...bookings];

    // Status filter
    if (filters.status !== 'all') {
      filtered = filtered.filter(booking => booking.status === filters.status);
    }

    // Date range filter
    if (filters.dateRange !== 'all') {
      const now = new Date();
      const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
      
      if (filters.dateRange === 'recent') {
        filtered = filtered.filter(booking => new Date(booking.createdAt) >= thirtyDaysAgo);
      } else if (filters.dateRange === 'upcoming') {
        filtered = filtered.filter(booking => new Date(booking.startDate) >= now);
      }
    }

    // Search filter
    if (filters.search) {
      const searchTerm = filters.search.toLowerCase();
      filtered = filtered.filter(booking => 
        booking.vehicleTitle.toLowerCase().includes(searchTerm) ||
        booking.renterName.toLowerCase().includes(searchTerm) ||
        booking.hostName.toLowerCase().includes(searchTerm)
      );
    }

    // Sort
    filtered.sort((a, b) => {
      let aValue: any, bValue: any;
      
      switch (sortBy) {
        case 'createdAt':
          aValue = new Date(a.createdAt);
          bValue = new Date(b.createdAt);
          break;
        case 'startDate':
          aValue = new Date(a.startDate);
          bValue = new Date(b.startDate);
          break;
        case 'totalPrice':
          aValue = a.totalPrice;
          bValue = b.totalPrice;
          break;
        case 'status':
          aValue = a.status;
          bValue = b.status;
          break;
        default:
          aValue = a.createdAt;
          bValue = b.createdAt;
      }

      if (sortOrder === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

    setFilteredBookings(filtered);
  };

  const handleBookingAction = async (bookingId: string, action: string, data?: any) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));
      
      setBookings(prev => prev.map(booking => {
        if (booking.id === bookingId) {
          switch (action) {
            case 'approve':
              return { ...booking, status: 'confirmed', updatedAt: new Date().toISOString() };
            case 'decline':
              return { 
                ...booking, 
                status: 'cancelled', 
                cancellationReason: data?.reason || 'Declined by host',
                updatedAt: new Date().toISOString() 
              };
            case 'cancel':
              return { 
                ...booking, 
                status: 'cancelled', 
                cancellationReason: data?.reason || 'Cancelled by renter',
                updatedAt: new Date().toISOString() 
              };
            case 'complete':
              return { ...booking, status: 'completed', updatedAt: new Date().toISOString() };
            default:
              return booking;
          }
        }
        return booking;
      }));

      onBookingAction?.(bookingId, action, data);
    } catch (error) {
      console.error('Error performing booking action:', error);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'confirmed':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'cancelled':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'completed':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending':
        return <Clock className="w-4 h-4" />;
      case 'confirmed':
        return <CheckCircle className="w-4 h-4" />;
      case 'cancelled':
        return <XCircle className="w-4 h-4" />;
      case 'completed':
        return <CheckCircle className="w-4 h-4" />;
      default:
        return <AlertCircle className="w-4 h-4" />;
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-ZA', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const formatCurrency = (amount: number) => {
    return `R ${amount.toLocaleString()}`;
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Booking Management</h2>
          <p className="text-gray-600">
            {userRole === 'renter' && 'Manage your vehicle bookings'}
            {userRole === 'host' && 'Manage booking requests for your vehicles'}
            {userRole === 'admin' && 'Oversee all platform bookings'}
          </p>
        </div>
        <button
          onClick={onRefresh || fetchBookings}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <RefreshCw className="w-4 h-4" />
          Refresh
        </button>
      </div>

      {/* Filters and Search */}
      <div className="bg-white p-4 rounded-lg shadow-sm border">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
            <select
              value={filters.status}
              onChange={(e) => setFilters(prev => ({ ...prev, status: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Status</option>
              <option value="pending">Pending</option>
              <option value="confirmed">Confirmed</option>
              <option value="cancelled">Cancelled</option>
              <option value="completed">Completed</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Date Range</label>
            <select
              value={filters.dateRange}
              onChange={(e) => setFilters(prev => ({ ...prev, dateRange: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Time</option>
              <option value="recent">Last 30 Days</option>
              <option value="upcoming">Upcoming</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Search</label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search bookings..."
                value={filters.search}
                onChange={(e) => setFilters(prev => ({ ...prev, search: e.target.value }))}
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Sort By</label>
            <select
              value={`${sortBy}-${sortOrder}`}
              onChange={(e) => {
                const [field, order] = e.target.value.split('-');
                setSortBy(field);
                setSortOrder(order as 'asc' | 'desc');
              }}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            >
              <option value="createdAt-desc">Newest First</option>
              <option value="createdAt-asc">Oldest First</option>
              <option value="startDate-asc">Start Date (Earliest)</option>
              <option value="startDate-desc">Start Date (Latest)</option>
              <option value="totalPrice-desc">Price (High to Low)</option>
              <option value="totalPrice-asc">Price (Low to High)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Bookings List */}
      <div className="space-y-4">
        {filteredBookings.length === 0 ? (
          <div className="text-center py-12">
            <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-600 mb-2">No bookings found</h3>
            <p className="text-gray-500">
              {filters.status !== 'all' || filters.search || filters.dateRange !== 'all'
                ? 'Try adjusting your filters to see more results.'
                : 'No bookings have been made yet.'}
            </p>
          </div>
        ) : (
          filteredBookings.map((booking) => (
            <div key={booking.id} className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <img
                      src={booking.vehicleImage}
                      alt={booking.vehicleTitle}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold text-gray-800">{booking.vehicleTitle}</h3>
                        <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(booking.status)}`}>
                          {getStatusIcon(booking.status)}
                          {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                        <div>
                          <p className="font-medium text-gray-800">Dates</p>
                          <p>{formatDate(booking.startDate)} - {formatDate(booking.endDate)}</p>
                        </div>
                        <div>
                          <p className="font-medium text-gray-800">
                            {userRole === 'renter' ? 'Host' : userRole === 'host' ? 'Renter' : 'Renter & Host'}
                          </p>
                          <p>
                            {userRole === 'renter' ? booking.hostName : 
                             userRole === 'host' ? booking.renterName :
                             `${booking.renterName} → ${booking.hostName}`}
                          </p>
                        </div>
                        <div>
                          <p className="font-medium text-gray-800">Total Price</p>
                          <p className="text-lg font-semibold text-green-600">{formatCurrency(booking.totalPrice)}</p>
                        </div>
                      </div>
                      
                      {booking.specialRequests && (
                        <div className="mt-3 p-3 bg-gray-50 rounded-lg">
                          <p className="text-sm text-gray-600">
                            <span className="font-medium">Special Requests:</span> {booking.specialRequests}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        setSelectedBooking(booking);
                        setShowDetails(true);
                      }}
                      className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                    
                    {userRole === 'host' && booking.status === 'pending' && (
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleBookingAction(booking.id, 'approve')}
                          className="px-3 py-1 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm"
                        >
                          Approve
                        </button>
                        <button
                          onClick={() => handleBookingAction(booking.id, 'decline', { reason: 'Not available' })}
                          className="px-3 py-1 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm"
                        >
                          Decline
                        </button>
                      </div>
                    )}
                    
                    {userRole === 'renter' && (booking.status === 'pending' || booking.status === 'confirmed') && (
                      <button
                        onClick={() => handleBookingAction(booking.id, 'cancel', { reason: 'Change of plans' })}
                        className="px-3 py-1 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm"
                      >
                        Cancel
                      </button>
                    )}
                    
                    {userRole === 'admin' && (
                      <div className="flex gap-2">
                        {booking.status === 'pending' && (
                          <>
                            <button
                              onClick={() => handleBookingAction(booking.id, 'approve')}
                              className="px-3 py-1 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm"
                            >
                              Approve
                            </button>
                            <button
                              onClick={() => handleBookingAction(booking.id, 'decline', { reason: 'Admin override' })}
                              className="px-3 py-1 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm"
                            >
                              Decline
                            </button>
                          </>
                        )}
                        <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                          <MoreVertical className="w-4 h-4" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Booking Details Modal */}
      {showDetails && selectedBooking && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-800">Booking Details</h3>
                <button
                  onClick={() => setShowDetails(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <XCircle className="w-6 h-6" />
                </button>
              </div>
              
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <img
                      src={selectedBooking.vehicleImage}
                      alt={selectedBooking.vehicleTitle}
                      className="w-full h-32 object-cover rounded-lg"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{selectedBooking.vehicleTitle}</h4>
                    <p className="text-gray-600">Booking ID: {selectedBooking.id}</p>
                    <p className="text-gray-600">Created: {formatDate(selectedBooking.createdAt)}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-medium text-gray-800 mb-2">Renter Information</h5>
                    <p className="text-sm text-gray-600">{selectedBooking.renterName}</p>
                    <p className="text-sm text-gray-600">{selectedBooking.renterEmail}</p>
                    {selectedBooking.renterPhone && (
                      <p className="text-sm text-gray-600">{selectedBooking.renterPhone}</p>
                    )}
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-800 mb-2">Host Information</h5>
                    <p className="text-sm text-gray-600">{selectedBooking.hostName}</p>
                    <p className="text-sm text-gray-600">{selectedBooking.hostEmail}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-medium text-gray-800 mb-2">Booking Dates</h5>
                    <p className="text-sm text-gray-600">Start: {formatDate(selectedBooking.startDate)}</p>
                    <p className="text-sm text-gray-600">End: {formatDate(selectedBooking.endDate)}</p>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-800 mb-2">Payment</h5>
                    <p className="text-sm text-gray-600">Total: {formatCurrency(selectedBooking.totalPrice)}</p>
                    <p className="text-sm text-gray-600">Status: {selectedBooking.paymentStatus}</p>
                  </div>
                </div>
                
                {selectedBooking.specialRequests && (
                  <div>
                    <h5 className="font-medium text-gray-800 mb-2">Special Requests</h5>
                    <p className="text-sm text-gray-600">{selectedBooking.specialRequests}</p>
                  </div>
                )}
                
                {selectedBooking.cancellationReason && (
                  <div>
                    <h5 className="font-medium text-gray-800 mb-2">Cancellation Reason</h5>
                    <p className="text-sm text-gray-600">{selectedBooking.cancellationReason}</p>
                  </div>
                )}
                
                {selectedBooking.rating && (
                  <div>
                    <h5 className="font-medium text-gray-800 mb-2">Review</h5>
                    <div className="flex items-center gap-1 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < selectedBooking.rating! ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                    {selectedBooking.review && (
                      <p className="text-sm text-gray-600">{selectedBooking.review}</p>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EnhancedBookingManagement;
