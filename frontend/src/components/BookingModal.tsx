import React, { useState } from 'react';
import { Vehicle } from '../services/productionApiService';
import Icon from './Icon';
import GlassInput from './GlassInput';
import GlassButton from './GlassButton';
import { useAuth } from '../context/AuthContext';

interface BookingModalProps {
  car: Vehicle;
  isOpen: boolean;
  onClose: () => void;
  onBookingSuccess: (booking: any) => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ car, isOpen, onClose, onBookingSuccess }) => {
  const { user } = useAuth();
  const [bookingData, setBookingData] = useState({
    startDate: '',
    endDate: '',
    notes: '',
    pickupLocation: car.location,
    returnLocation: car.location
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const calculateTotal = () => {
    if (!bookingData.startDate || !bookingData.endDate) return 0;
    const start = new Date(bookingData.startDate);
    const end = new Date(bookingData.endDate);
    const days = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
    return days * (car.price_per_day || car.pricePerDay || 0);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Create booking request
      const requestData = {
        listing_id: car.id,
        start_date: bookingData.startDate,
        end_date: bookingData.endDate,
        special_requests: bookingData.notes,
        pickup_location: {
          address: bookingData.pickupLocation,
          city: car.location?.city || 'Unknown',
          province: car.location?.province || 'Unknown'
        },
        return_location: {
          address: bookingData.returnLocation,
          city: car.location?.city || 'Unknown',
          province: car.location?.province || 'Unknown'
        }
      };

      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify(requestData)
      });

      if (response.ok) {
        const result = await response.json();
        if (result.booking) {
          onBookingSuccess(result.booking);
          onClose();
        } else {
          throw new Error(result.error || 'Failed to create booking');
        }
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to create booking');
      }
    } catch (err: any) {
      setError(err.message || 'Failed to create booking. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">Book {car.make} {car.model}</h2>
            <button
              onClick={onClose}
              className="text-white/70 hover:text-white transition-colors"
            >
              <Icon name="x" className="h-6 w-6" />
            </button>
          </div>

          {/* Car Info */}
          <div className="mb-6 p-4 bg-white/5 rounded-lg">
            <div className="flex items-center space-x-4">
              <img
                src={car.images[0]}
                alt={`${car.make} ${car.model}`}
                className="w-20 h-20 object-cover rounded-lg"
              />
              <div>
                <h3 className="text-lg font-semibold text-white">{car.make} {car.model} ({car.year})</h3>
                <p className="text-white/70">{car.location}</p>
                <p className="text-green-400 font-semibold">R{car.price_per_day || car.pricePerDay}/day</p>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <GlassInput
                label="Start Date"
                type="date"
                value={bookingData.startDate}
                onChange={(e) => setBookingData(prev => ({ ...prev, startDate: e.target.value }))}
                required
                icon="Calendar"
              />
              <GlassInput
                label="End Date"
                type="date"
                value={bookingData.endDate}
                onChange={(e) => setBookingData(prev => ({ ...prev, endDate: e.target.value }))}
                required
                icon="Calendar"
              />
            </div>

            <GlassInput
              label="Pickup Location"
              value={bookingData.pickupLocation}
              onChange={(e) => setBookingData(prev => ({ ...prev, pickupLocation: e.target.value }))}
              placeholder="Enter pickup location"
              icon="MapPin"
            />

            <GlassInput
              label="Return Location"
              value={bookingData.returnLocation}
              onChange={(e) => setBookingData(prev => ({ ...prev, returnLocation: e.target.value }))}
              placeholder="Enter return location"
              icon="MapPin"
            />

            <div>
              <label className="glass-label">Notes (Optional)</label>
              <textarea
                value={bookingData.notes}
                onChange={(e) => setBookingData(prev => ({ ...prev, notes: e.target.value }))}
                placeholder="Any special requests or notes..."
                rows={3}
                className="glass-textarea"
              />
            </div>

            {/* Total Calculation */}
            {bookingData.startDate && bookingData.endDate && (
              <div className="p-4 bg-white/5 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white/70">Duration:</span>
                  <span className="text-white">
                    {Math.ceil((new Date(bookingData.endDate).getTime() - new Date(bookingData.startDate).getTime()) / (1000 * 60 * 60 * 24))} days
                  </span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white/70">Price per day:</span>
                  <span className="text-white">R{car.price_per_day || car.pricePerDay}</span>
                </div>
                <div className="border-t border-white/20 pt-2">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-white">Total:</span>
                    <span className="text-xl font-bold text-green-400">R{calculateTotal()}</span>
                  </div>
                </div>
              </div>
            )}

            {error && (
              <div className="p-3 bg-red-500/20 border border-red-500/30 rounded-lg">
                <p className="text-red-400 text-sm">{error}</p>
              </div>
            )}

            {/* Actions */}
            <div className="flex space-x-4 pt-4">
              <GlassButton
                type="button"
                onClick={onClose}
                variant="secondary"
                className="flex-1"
              >
                Cancel
              </GlassButton>
              <GlassButton
                type="submit"
                disabled={loading || !bookingData.startDate || !bookingData.endDate}
                className="flex-1"
              >
                {loading ? 'Creating Booking...' : 'Book Now'}
              </GlassButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
