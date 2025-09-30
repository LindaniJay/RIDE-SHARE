import React, { useState, useEffect } from 'react';
import Icon from './Icon';
import GlassCard from './GlassCard';

interface UserBookingsProps {
  userId: string;
  role: 'renter' | 'host';
}

const UserBookings: React.FC<UserBookingsProps> = ({ userId, role }) => {
  const [bookings, setBookings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetchBookings();
  }, [userId, role]);

  const fetchBookings = async () => {
    try {
      setLoading(true);
      
      // Try to fetch from API first
      try {
        const response = await fetch('/api/bookings/my-bookings', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
          }
        });
        
        if (response.ok) {
          const data = await response.json();
          setBookings(data.bookings || []);
          return;
        }
      } catch (apiError) {
        console.log('API not available, using localStorage bookings');
      }

      // Fallback to localStorage mock bookings
      const storedBookings = JSON.parse(localStorage.getItem('mockBookings') || '[]');
      
      // Filter bookings based on user role
      const userBookings = storedBookings.filter((booking: any) => {
        if (role === 'renter') {
          return booking.renterId === userId || booking.renter?.id === userId;
        } else if (role === 'host') {
          return booking.hostId === userId || booking.host?.id === userId;
        }
        return false;
      });

      // Add some default mock bookings if none exist for this user
      const defaultBookings = [
        {
          id: '1',
          vehicleId: '1',
          renterId: userId,
          startDate: '2024-01-15',
          endDate: '2024-01-17',
          totalPrice: 500,
          status: 'confirmed',
          vehicle: {
            make: 'Toyota',
            model: 'Hilux',
            year: 2022,
            images: ['/images/toyota-hilux.jpg']
          },
          host: {
            name: 'Jane Smith',
            email: 'jane@example.com',
            avatar: '/images/avatar.jpg'
          },
          renter: {
            name: 'Current User',
            email: 'user@example.com'
          }
        }
      ];

      const allBookings = [...userBookings, ...defaultBookings];
      setBookings(allBookings);
    } catch (error) {
      console.error('Error fetching bookings:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusUpdate = async (bookingId: string, status: string) => {
    try {
      // In a real app, this would call the API
      console.log(`Updating booking ${bookingId} to ${status}`);
      await fetchBookings();
    } catch (error) {
      console.error('Error updating booking status:', error);
    }
  };

  const filteredBookings = bookings.filter(booking => {
    if (filter === 'all') return true;
    return booking.status === filter;
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
          <h2 className="text-2xl font-bold text-white">
            {role === 'renter' ? 'My Bookings' : 'Host Bookings'}
          </h2>
          <p className="text-gray-300">
            {role === 'renter' ? 'Manage your vehicle rentals' : 'Manage bookings for your vehicles'}
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="glass-select"
          >
            <option value="all">All Bookings</option>
            <option value="pending">Pending</option>
            <option value="confirmed">Confirmed</option>
            <option value="active">Active</option>
            <option value="completed">Completed</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </div>
      </div>

      {/* Bookings List */}
      <div className="space-y-4">
        {filteredBookings.length === 0 ? (
          <GlassCard className="p-8 text-center">
            <Icon name="calendar" className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">No bookings found</h3>
            <p className="text-gray-400">
              {role === 'renter' 
                ? 'You haven\'t made any bookings yet. Start by searching for vehicles!'
                : 'No one has booked your vehicles yet.'
              }
            </p>
          </GlassCard>
        ) : (
          filteredBookings.map((booking) => (
            <GlassCard key={booking.id} className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <img
                    src={booking.vehicle.images[0]}
                    alt={`${booking.vehicle.make} ${booking.vehicle.model}`}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {booking.vehicle.make} {booking.vehicle.model} ({booking.vehicle.year})
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {booking.vehicle.location}
                    </p>
                    <div className="flex items-center space-x-4 mt-1">
                      <span className="text-sm text-gray-300">
                        {new Date(booking.startDate).toLocaleDateString()} - {new Date(booking.endDate).toLocaleDateString()}
                      </span>
                      <span className="text-sm text-gray-300">
                        {booking.totalDays} days
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className={`text-lg font-semibold ${getStatusColor(booking.status)}`}>
                    {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                  </div>
                  <div className="text-xl font-bold text-white">
                    R{booking.totalPrice.toLocaleString()}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm text-gray-400 mb-1">
                    {role === 'renter' ? 'Host' : 'Renter'}
                  </p>
                  <div className="flex items-center space-x-2">
                    <img
                      src={role === 'renter' ? booking.host.avatar : booking.renter.name}
                      alt={role === 'renter' ? booking.host.name : booking.renter.name}
                      className="w-6 h-6 rounded-full"
                    />
                    <span className="text-white">
                      {role === 'renter' ? booking.host.name : booking.renter.name}
                    </span>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Payment Status</p>
                  <span className={`text-sm font-medium ${
                    booking.paymentStatus === 'paid' ? 'text-green-400' :
                    booking.paymentStatus === 'pending' ? 'text-yellow-400' :
                    'text-red-400'
                  }`}>
                    {booking.paymentStatus.charAt(0).toUpperCase() + booking.paymentStatus.slice(1)}
                  </span>
                </div>
              </div>

              {booking.notes && (
                <div className="mb-4 p-3 bg-white/5 rounded-lg">
                  <p className="text-sm text-gray-300">
                    <strong>Notes:</strong> {booking.notes}
                  </p>
                </div>
              )}

              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-400">
                  Booked on {new Date(booking.createdAt).toLocaleDateString()}
                </div>
                <div className="flex items-center space-x-2">
                  {booking.status === 'pending' && role === 'host' && (
                    <>
                      <button
                        onClick={() => handleStatusUpdate(booking.id, 'confirmed')}
                        className="px-3 py-1 bg-green-600 hover:bg-green-700 text-white text-sm rounded-lg transition-all"
                      >
                        Confirm
                      </button>
                      <button
                        onClick={() => handleStatusUpdate(booking.id, 'cancelled')}
                        className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white text-sm rounded-lg transition-all"
                      >
                        Decline
                      </button>
                    </>
                  )}
                  {booking.status === 'confirmed' && role === 'renter' && (
                    <button
                      onClick={() => handleStatusUpdate(booking.id, 'cancelled')}
                      className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white text-sm rounded-lg transition-all"
                    >
                      Cancel
                    </button>
                  )}
                  <button className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg transition-all">
                    View Details
                  </button>
                </div>
              </div>
            </GlassCard>
          ))
        )}
      </div>
    </div>
  );
};

export default UserBookings;
