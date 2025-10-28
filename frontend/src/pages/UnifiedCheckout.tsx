import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Icon from '../components/Icon';
import GlassCard from '../components/GlassCard';
import GlassButton from '../components/GlassButton';
import { containerVariants, itemVariants } from '../utils/motionVariants';
import { toast } from 'react-hot-toast';

// API base URL
const API_BASE_URL = 'http://localhost:5001/api';

interface Listing {
  id: number;
  hostId: number;
  make: string;
  model: string;
  year: number;
  pricePerDay: number;
  image: string;
  status: 'pending' | 'approved' | 'rejected';
  city: string;
  description?: string;
  features?: string[];
  fuelType?: string;
  transmission?: string;
  seats?: number;
  mileage?: number;
  host?: {
    id: number;
    name: string;
    email: string;
    phone?: string;
  };
}

const UnifiedCheckout: React.FC = () => {
  const { listingId } = useParams<{ listingId: string }>();
  const { user } = useAuth();
  const navigate = useNavigate();
  
  const [listing, setListing] = useState<Listing | null>(null);
  const [loading, setLoading] = useState(true);
  const [bookingLoading, setBookingLoading] = useState(false);
  const [bookingData, setBookingData] = useState({
    startDate: '',
    endDate: '',
    specialRequests: ''
  });
  const [totalPrice, setTotalPrice] = useState(0);
  const [days, setDays] = useState(0);

  useEffect(() => {
    if (listingId) {
      fetchListing();
    }
  }, [listingId]);

  useEffect(() => {
    if (bookingData.startDate && bookingData.endDate && listing) {
      const start = new Date(bookingData.startDate);
      const end = new Date(bookingData.endDate);
      const diffTime = Math.abs(end.getTime() - start.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      setDays(diffDays);
      setTotalPrice(diffDays * listing.pricePerDay);
    }
  }, [bookingData.startDate, bookingData.endDate, listing]);

  const fetchListing = async () => {
    try {
      setLoading(true);
      
      const response = await fetch(`${API_BASE_URL}/listings/${listingId}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch listing');
      }
      
      const data = await response.json();
      
      if (data.success) {
        setListing(data.data);
      } else {
        throw new Error(data.error || 'Failed to fetch listing');
      }
    } catch (error) {
      console.error('Error fetching listing:', error);
      toast.error('Failed to load vehicle details');
      navigate('/search');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setBookingData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleBooking = async () => {
    if (!user?.uid || !listing) return;
    
    if (!bookingData.startDate || !bookingData.endDate) {
      toast.error('Please select start and end dates');
      return;
    }

    if (days <= 0) {
      toast.error('End date must be after start date');
      return;
    }

    try {
      setBookingLoading(true);
      
      const token = await user.getIdToken();
      
      const response = await fetch(`${API_BASE_URL}/bookings/create`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          uid: user.uid,
          listingId: listing.id,
          startDate: bookingData.startDate,
          endDate: bookingData.endDate,
          totalPrice,
          paymentMethod: 'stripe',
          specialRequests: bookingData.specialRequests
        })
      });

      if (!response.ok) {
        throw new Error('Failed to create booking');
      }

      const data = await response.json();
      
      if (data.success) {
        toast.success('Booking confirmed! 🎉');
        navigate('/renter/dashboard');
      } else {
        throw new Error(data.error || 'Failed to create booking');
      }
    } catch (error) {
      console.error('Error creating booking:', error);
      toast.error('Failed to create booking');
    } finally {
      setBookingLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="page-background">
        <motion.div 
          className="min-h-screen p-4 lg:p-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="max-w-4xl mx-auto">
            <div className="animate-pulse">
              <div className="bg-white/10 rounded-xl h-96 mb-8"></div>
              <div className="bg-white/10 rounded-xl h-64"></div>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  if (!listing) {
    return (
      <motion.div 
        className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 p-4 lg:p-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-4xl mx-auto text-center">
          <GlassCard level={2} className="py-12">
            <Icon name="AlertCircle" size="xl" className="text-red-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-4">Vehicle Not Found</h2>
            <p className="text-white/70 mb-6">The vehicle you're looking for doesn't exist or is no longer available.</p>
            <GlassButton
              onClick={() => navigate('/search')}
              variant="primary"
              size="md"
            >
              Back to Search
            </GlassButton>
          </GlassCard>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="page-background">
      <motion.div 
        className="min-h-screen p-4 lg:p-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-8"
          variants={itemVariants}
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-white font-heading text-shadow-lg mb-4">
            Complete Your Booking
          </h1>
          <p className="text-white/70 text-lg font-body">
            Review your selection and confirm your rental
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Vehicle Details */}
          <motion.div variants={itemVariants}>
            <GlassCard level={3} className="overflow-hidden">
              <div className="relative">
                <img
                  src={listing.image}
                  alt={`${listing.make} ${listing.model}`}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-green-500/90 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Available
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-white font-heading">
                      {listing.make} {listing.model}
                    </h2>
                    <p className="text-white/70 font-body">
                      {listing.year} • {listing.city}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-primary-400 font-heading">
                      R{listing.pricePerDay}
                    </p>
                    <p className="text-white/60 text-sm font-body">per day</p>
                  </div>
                </div>
                
                {listing.description && (
                  <p className="text-white/70 font-body mb-4">
                    {listing.description}
                  </p>
                )}
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  {listing.seats && (
                    <div className="flex items-center space-x-2 text-white/70">
                      <Icon name="Users" size="sm" />
                      <span className="text-sm">{listing.seats} seats</span>
                    </div>
                  )}
                  {listing.fuelType && (
                    <div className="flex items-center space-x-2 text-white/70">
                      <Icon name="Fuel" size="sm" />
                      <span className="text-sm capitalize">{listing.fuelType}</span>
                    </div>
                  )}
                  {listing.transmission && (
                    <div className="flex items-center space-x-2 text-white/70">
                      <Icon name="Settings" size="sm" />
                      <span className="text-sm capitalize">{listing.transmission}</span>
                    </div>
                  )}
                  {listing.mileage && (
                    <div className="flex items-center space-x-2 text-white/70">
                      <Icon name="Gauge" size="sm" />
                      <span className="text-sm">{listing.mileage.toLocaleString()} km</span>
                    </div>
                  )}
                </div>
                
                {listing.features && listing.features.length > 0 && (
                  <div className="mb-4">
                    <h4 className="text-white font-medium mb-2">Features</h4>
                    <div className="flex flex-wrap gap-2">
                      {listing.features.map((feature, index) => (
                        <span
                          key={index}
                          className="bg-white/10 text-white/80 px-2 py-1 rounded text-xs"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                {listing.host && (
                  <div className="border-t border-white/10 pt-4">
                    <h4 className="text-white font-medium mb-2">Hosted by</h4>
                    <p className="text-white/70 text-sm">{listing.host.name}</p>
                  </div>
                )}
              </div>
            </GlassCard>
          </motion.div>

          {/* Booking Form */}
          <motion.div variants={itemVariants}>
            <GlassCard level={3}>
              <h3 className="text-xl font-bold text-white font-heading mb-6">Booking Details</h3>
              
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">Start Date</label>
                    <input
                      type="date"
                      value={bookingData.startDate}
                      onChange={(e) => handleInputChange('startDate', e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">End Date</label>
                    <input
                      type="date"
                      value={bookingData.endDate}
                      onChange={(e) => handleInputChange('endDate', e.target.value)}
                      min={bookingData.startDate || new Date().toISOString().split('T')[0]}
                      className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">Special Requests (Optional)</label>
                  <textarea
                    value={bookingData.specialRequests}
                    onChange={(e) => handleInputChange('specialRequests', e.target.value)}
                    placeholder="Any special requirements or requests..."
                    rows={3}
                    className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                {days > 0 && (
                  <div className="bg-white/5 rounded-lg p-4">
                    <h4 className="text-white font-medium mb-3">Booking Summary</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between text-white/70">
                        <span>R{listing.pricePerDay} × {days} days</span>
                        <span>R{(listing.pricePerDay * days).toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-white font-medium">
                        <span>Total</span>
                        <span>R{totalPrice.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                )}
                
                <GlassButton
                  onClick={handleBooking}
                  variant="primary"
                  size="lg"
                  className="w-full"
                  disabled={!bookingData.startDate || !bookingData.endDate || days <= 0 || bookingLoading}
                  icon={bookingLoading ? <div className="animate-spin">⏳</div> : <Icon name="CreditCard" size="sm" />}
                >
                  {bookingLoading ? 'Processing...' : 'Confirm Booking'}
                </GlassButton>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
      </motion.div>
    </div>
  );
};

export default UnifiedCheckout;
