import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import Icon from '../Icon';
import StatusBadge from '../StatusBadge';

interface Booking {
  id: string;
  start_date: string;
  end_date: string;
  total_days: number;
  total_amount: number;
  status: 'pending' | 'confirmed' | 'approved' | 'declined' | 'cancelled' | 'completed' | 'disputed';
  payment_status: 'pending' | 'paid' | 'failed' | 'refunded' | 'partially_refunded';
  special_requests?: string;
  admin_notes?: string;
  renter: {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
  };
  vehicle: {
    id: string;
    title: string;
    make: string;
    model: string;
  };
  created_at: string;
}

const BookingApprovalPanel: React.FC = () => {
  const { user: _user } = useAuth();
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'all' | 'pending' | 'approved' | 'declined'>('pending');
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);
  const [showApprovalModal, setShowApprovalModal] = useState(false);
  const [approvalAction, setApprovalAction] = useState<'approve' | 'reject'>('approve');
  const [rejectionReason, setRejectionReason] = useState('');

  useEffect(() => {
    fetchBookings();
  }, [filter]);

  const fetchBookings = async () => {
    try {
      const response = await fetch(`/api/admin/bookings?status=${filter}&page=1&limit=50`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      });
      
      if (response.ok) {
        const data = await response.json();
        setBookings(data.data?.bookings || data.bookings || []);
      }
    } catch (error) {
      console.error('Error fetching bookings:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleApproval = async (bookingId: string, action: 'approve' | 'reject', reason?: string) => {
    try {
      const response = await fetch(`/api/admin/bookings/${bookingId}/approve`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify({
          status: action === 'approve' ? 'approved' : 'declined',
          reason: reason || undefined
        })
      });

      if (response.ok) {
        // Update local state
        setBookings(prev => prev.map(b => 
          b.id === bookingId 
            ? { ...b, status: action === 'approve' ? 'approved' : 'declined', admin_notes: reason }
            : b
        ));
        
        setShowApprovalModal(false);
        setSelectedBooking(null);
        setRejectionReason('');
        
        alert(`Booking ${action === 'approve' ? 'approved' : 'rejected'} successfully`);
      } else {
        alert('Failed to update booking status');
      }
    } catch (error) {
      console.error('Error updating booking:', error);
      alert('Error updating booking status');
    }
  };

  const openApprovalModal = (booking: Booking, action: 'approve' | 'reject') => {
    setSelectedBooking(booking);
    setApprovalAction(action);
    setShowApprovalModal(true);
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
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Booking Approvals</h2>
        <div className="flex space-x-2">
          {['all', 'pending', 'approved', 'declined'].map((filterType) => (
            <button
              key={filterType}
              onClick={() => setFilter(filterType as any)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                filter === filterType
                  ? 'bg-white/20 text-white'
                  : 'bg-white/10 text-white/70 hover:bg-white/20'
              }`}
            >
              {filterType.charAt(0).toUpperCase() + filterType.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Bookings List */}
      <div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
        <div className="p-6">
          <div className="space-y-4">
            {bookings.map((booking) => (
              <div key={booking.id} className="p-4 bg-white/5 rounded-lg border border-white/10">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <Icon name="Calendar" size="lg" className="text-white" />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-white font-semibold text-lg">{booking.vehicle.title}</h3>
                        <p className="text-white/70 text-sm mb-2">
                          {booking.vehicle.make} {booking.vehicle.model}
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                          <div>
                            <p className="text-white/70">Renter</p>
                            <p className="text-white">{booking.renter.first_name} {booking.renter.last_name}</p>
                          </div>
                          <div>
                            <p className="text-white/70">Duration</p>
                            <p className="text-white">{booking.total_days} days</p>
                          </div>
                          <div>
                            <p className="text-white/70">Total Amount</p>
                            <p className="text-white font-semibold">R{booking.total_amount}</p>
                          </div>
                          <div>
                            <p className="text-white/70">Start Date</p>
                            <p className="text-white">{new Date(booking.start_date).toLocaleDateString()}</p>
                          </div>
                          <div>
                            <p className="text-white/70">End Date</p>
                            <p className="text-white">{new Date(booking.end_date).toLocaleDateString()}</p>
                          </div>
                          <div>
                            <p className="text-white/70">Payment Status</p>
                            <StatusBadge status={booking.payment_status} />
                          </div>
                        </div>

                        {booking.special_requests && (
                          <div className="mt-3">
                            <p className="text-white/70 text-sm mb-1">Special Requests:</p>
                            <p className="text-white text-sm">{booking.special_requests}</p>
                          </div>
                        )}

                        {booking.admin_notes && (
                          <div className="mt-3 p-3 bg-yellow-500/10 border border-yellow-400/30 rounded-lg">
                            <p className="text-yellow-200 text-sm">
                              <strong>Admin Notes:</strong> {booking.admin_notes}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col space-y-2 ml-4">
                    <StatusBadge status={booking.status} />
                    
                    {booking.status === 'pending' && (
                      <div className="flex space-x-2">
                        <button
                          onClick={() => openApprovalModal(booking, 'approve')}
                          className="px-3 py-1 bg-green-500/20 text-green-200 rounded-lg text-sm hover:bg-green-500/30 transition-colors"
                        >
                          Approve
                        </button>
                        <button
                          onClick={() => openApprovalModal(booking, 'reject')}
                          className="px-3 py-1 bg-red-500/20 text-red-200 rounded-lg text-sm hover:bg-red-500/30 transition-colors"
                        >
                          Reject
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {bookings.length === 0 && (
              <div className="text-center py-8">
                <Icon name="Calendar" size="lg" className="text-white/50 mx-auto mb-4" />
                <p className="text-white/70">No bookings found</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Approval Modal */}
      {showApprovalModal && selectedBooking && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 max-w-md w-full mx-4">
            <h3 className="text-lg font-semibold text-white mb-4">
              {approvalAction === 'approve' ? 'Approve Booking' : 'Reject Booking'}
            </h3>
            
            <div className="mb-4">
              <p className="text-white/70 mb-2">
                {approvalAction === 'approve' 
                  ? `Are you sure you want to approve this booking for "${selectedBooking.vehicle.title}"?`
                  : `Are you sure you want to reject this booking for "${selectedBooking.vehicle.title}"?`
                }
              </p>
              
              {approvalAction === 'reject' && (
                <div>
                  <label className="block text-white/70 text-sm font-medium mb-2">
                    Rejection Reason (Optional)
                  </label>
                  <textarea
                    value={rejectionReason}
                    onChange={(e) => setRejectionReason(e.target.value)}
                    placeholder="Enter reason for rejection..."
                    className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows={3}
                  />
                </div>
              )}
            </div>

            <div className="flex space-x-3">
              <button
                onClick={() => {
                  setShowApprovalModal(false);
                  setSelectedBooking(null);
                  setRejectionReason('');
                }}
                className="flex-1 px-4 py-2 bg-white/10 text-white/70 rounded-lg hover:bg-white/20 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => handleApproval(selectedBooking.id, approvalAction, rejectionReason)}
                className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
                  approvalAction === 'approve'
                    ? 'bg-green-500 text-white hover:bg-green-600'
                    : 'bg-red-500 text-white hover:bg-red-600'
                }`}
              >
                {approvalAction === 'approve' ? 'Approve' : 'Reject'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingApprovalPanel;
