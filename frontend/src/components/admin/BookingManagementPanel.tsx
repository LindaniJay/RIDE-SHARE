import React, { useState, useEffect } from 'react';
import { bookingService } from '../../services/bookingService';
import GlassCard from '../GlassCard';
import Icon from '../Icon';

const BookingManagementPanel: React.FC = () => {
  const [bookings, setBookings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    search: '',
    status: 'all',
    startDate: '',
    endDate: ''
  });
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    total: 0
  });

  useEffect(() => {
    fetchBookings();
  }, [filters, pagination.page]);

  const fetchBookings = async () => {
    try {
      setLoading(true);
      // For now, use mock data
      const mockBookings = BookingService.getMockBookings();
      setBookings(mockBookings);
      setPagination(prev => ({ ...prev, total: mockBookings.length }));
    } catch (error) {
      console.error('Error fetching bookings:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusUpdate = async (bookingId: string, status: string, notes?: string) => {
    try {
      // In a real app, this would call the API
      console.log(`Updating booking ${bookingId} to ${status}`, notes);
      await fetchBookings();
    } catch (error) {
      console.error('Error updating booking status:', error);
    }
  };

  const handleFilterChange = (field: string, value: string) => {
    setFilters(prev => ({ ...prev, [field]: value }));
  };

  const filteredBookings = bookings.filter(booking => {
    if (filters.search && !booking.vehicle.make.toLowerCase().includes(filters.search.toLowerCase()) &&
        !booking.vehicle.model.toLowerCase().includes(filters.search.toLowerCase()) &&
        !booking.renter.name.toLowerCase().includes(filters.search.toLowerCase())) {
      return false;
    }
    if (filters.status !== 'all' && booking.status !== filters.status) {
      return false;
    }
    return true;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'text-yellow-400';
      case 'confirmed': return 'text-blue-400';
      case 'active': return 'text-green-400';
      case 'completed': return 'text-gray-400';
      case 'cancelled': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getPaymentStatusColor = (status: string) => {
    switch (status) {
      case 'paid': return 'text-green-400';
      case 'pending': return 'text-yellow-400';
      case 'refunded': return 'text-blue-400';
      default: return 'text-gray-400';
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">Booking Management</h2>
          <p className="text-gray-300">Manage all bookings across the platform</p>
        </div>
        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all">
            <Icon name="Download" className="h-4 w-4" />
            <span>Export</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-all">
            <Icon name="Plus" className="h-4 w-4" />
            <span>Add Booking</span>
          </button>
        </div>
      </div>

      {/* Filters */}
      <GlassCard className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Search</label>
            <input
              type="text"
              placeholder="Search bookings..."
              value={filters.search}
              onChange={(e) => handleFilterChange('search', e.target.value)}
              className="glass-input"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Status</label>
            <select
              value={filters.status}
              onChange={(e) => handleFilterChange('status', e.target.value)}
              className="glass-select"
            >
              <option value="all">All Status</option>
              <option value="pending">Pending</option>
              <option value="confirmed">Confirmed</option>
              <option value="active">Active</option>
              <option value="completed">Completed</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Start Date</label>
            <input
              type="date"
              value={filters.startDate}
              onChange={(e) => handleFilterChange('startDate', e.target.value)}
              className="glass-input"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">End Date</label>
            <input
              type="date"
              value={filters.endDate}
              onChange={(e) => handleFilterChange('endDate', e.target.value)}
              className="glass-input"
            />
          </div>
        </div>
      </GlassCard>

      {/* Bookings Table */}
      <GlassCard className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-white/10">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-medium text-white">Booking ID</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-white">Vehicle</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-white">Renter</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-white">Host</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-white">Dates</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-white">Total</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-white">Status</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-white">Payment</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-white">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {filteredBookings.map((booking) => (
                <tr key={booking.id} className="hover:bg-white/5">
                  <td className="px-6 py-4 text-sm text-white">
                    #{booking.id.slice(-8)}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <img
                        src={booking.vehicle.images[0]}
                        alt={`${booking.vehicle.make} ${booking.vehicle.model}`}
                        className="w-10 h-10 object-cover rounded-lg"
                      />
                      <div>
                        <div className="text-sm font-medium text-white">
                          {booking.vehicle.make} {booking.vehicle.model}
                        </div>
                        <div className="text-xs text-gray-400">
                          {booking.vehicle.location}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-xs font-medium text-white">
                          {booking.renter.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-white">{booking.renter.name}</div>
                        <div className="text-xs text-gray-400">{booking.renter.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <img
                        src={booking.host.avatar}
                        alt={booking.host.name}
                        className="w-8 h-8 rounded-full"
                      />
                      <div>
                        <div className="text-sm font-medium text-white">{booking.host.name}</div>
                        <div className="text-xs text-gray-400">{booking.host.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-white">
                    <div>{new Date(booking.startDate).toLocaleDateString()}</div>
                    <div className="text-xs text-gray-400">
                      {booking.totalDays} days
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-white">
                    R{booking.totalPrice.toLocaleString()}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`text-sm font-medium ${getStatusColor(booking.status)}`}>
                      {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`text-sm font-medium ${getPaymentStatusColor(booking.paymentStatus)}`}>
                      {booking.paymentStatus.charAt(0).toUpperCase() + booking.paymentStatus.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      {booking.status === 'pending' && (
                        <>
                          <button
                            onClick={() => handleStatusUpdate(booking.id, 'confirmed')}
                            className="px-2 py-1 bg-green-600 hover:bg-green-700 text-white text-xs rounded transition-all"
                          >
                            Confirm
                          </button>
                          <button
                            onClick={() => handleStatusUpdate(booking.id, 'cancelled')}
                            className="px-2 py-1 bg-red-600 hover:bg-red-700 text-white text-xs rounded transition-all"
                          >
                            Cancel
                          </button>
                        </>
                      )}
                      <button className="px-2 py-1 bg-blue-600 hover:bg-blue-700 text-white text-xs rounded transition-all">
                        View
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredBookings.length === 0 && (
          <div className="text-center py-12">
            <Icon name="Calendar" className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">No bookings found</h3>
            <p className="text-gray-400">Try adjusting your filters</p>
          </div>
        )}
      </GlassCard>

      {/* Pagination */}
      {filteredBookings.length > 0 && (
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-400">
            Showing {((pagination.page - 1) * pagination.limit) + 1} to {Math.min(pagination.page * pagination.limit, pagination.total)} of {pagination.total} bookings
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setPagination(prev => ({ ...prev, page: Math.max(1, prev.page - 1) }))}
              disabled={pagination.page === 1}
              className="px-3 py-1 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            <span className="px-3 py-1 text-white">
              Page {pagination.page}
            </span>
            <button
              onClick={() => setPagination(prev => ({ ...prev, page: prev.page + 1 }))}
              disabled={pagination.page * pagination.limit >= pagination.total}
              className="px-3 py-1 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingManagementPanel;