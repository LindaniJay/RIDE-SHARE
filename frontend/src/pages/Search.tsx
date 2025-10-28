import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Icon from '../components/Icon';
import GlassCard from '../components/GlassCard';
import GlassButton from '../components/GlassButton';
import OptimizedImage from '../components/OptimizedImage';
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
  createdAt: string;
  updatedAt: string;
  host?: {
    id: number;
    name: string;
    email: string;
    phone?: string;
  };
}

const Search: React.FC = () => {
  const navigate = useNavigate();
  const [listings, setListings] = useState<Listing[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useState({
    city: '',
    make: '',
    priceRange: '',
    fuelType: '',
    transmission: '',
    seats: ''
  });

  useEffect(() => {
    fetchListings();
  }, []);

  const fetchListings = async (params: any = {}) => {
    try {
      setLoading(true);
      
      const queryParams = new URLSearchParams();
      
      if (params.city) queryParams.append('location', params.city);
      if (params.make) queryParams.append('make', params.make);
      if (params.type) queryParams.append('type', params.type);
      if (params.priceRange) {
        const [minPrice, maxPrice] = params.priceRange.split('-');
        if (minPrice) queryParams.append('minPrice', minPrice);
        if (maxPrice) queryParams.append('maxPrice', maxPrice);
      }
      if (params.fuelType) queryParams.append('fuelType', params.fuelType);
      if (params.transmission) queryParams.append('transmission', params.transmission);
      if (params.seats) queryParams.append('seats', params.seats);
      
      const response = await fetch(`${API_BASE_URL}/search?${queryParams.toString()}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch listings');
      }
      
      const data = await response.json();
      
      if (data.success) {
        setListings(data.data || []);
      } else {
        throw new Error(data.error || 'Failed to fetch listings');
      }
    } catch (error) {
      console.error('Error fetching listings:', error);
      toast.error('Failed to load vehicles');
      setListings([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    fetchListings(searchParams);
  };

  const handleInputChange = (field: string, value: string) => {
    setSearchParams(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleBookNow = (listingId: number) => {
    navigate(`/checkout/${listingId}`);
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
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="animate-pulse">
                <div className="bg-white/10 rounded-xl h-80"></div>
              </div>
            ))}
          </div>
        </div>
        </motion.div>
      </div>
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
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-8"
          variants={itemVariants}
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-white font-heading text-shadow-lg mb-4">
            Find Your Perfect Ride
          </h1>
          <p className="text-white/70 text-lg font-body">
            Discover amazing vehicles available for rent
          </p>
        </motion.div>

        {/* Search Filters */}
        <motion.div 
          className="mb-8"
          variants={itemVariants}
        >
          <GlassCard level={2} className="p-6">
            <form onSubmit={handleSearch} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">City</label>
                  <input
                    type="text"
                    placeholder="Enter city"
                    value={searchParams.city}
                    onChange={(e) => handleInputChange('city', e.target.value)}
                    className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">Make</label>
                  <input
                    type="text"
                    placeholder="e.g., Toyota, BMW"
                    value={searchParams.make}
                    onChange={(e) => handleInputChange('make', e.target.value)}
                    className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">Price Range</label>
                  <select
                    value={searchParams.priceRange}
                    onChange={(e) => handleInputChange('priceRange', e.target.value)}
                    className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Any Price</option>
                    <option value="0-500">Under R500</option>
                    <option value="500-1000">R500 - R1000</option>
                    <option value="1000-2000">R1000 - R2000</option>
                    <option value="2000-5000">R2000 - R5000</option>
                    <option value="5000-10000">R5000+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">Fuel Type</label>
                  <select
                    value={searchParams.fuelType}
                    onChange={(e) => handleInputChange('fuelType', e.target.value)}
                    className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Any Fuel</option>
                    <option value="petrol">Petrol</option>
                    <option value="diesel">Diesel</option>
                    <option value="hybrid">Hybrid</option>
                    <option value="electric">Electric</option>
                  </select>
                </div>
              </div>
              <div className="flex justify-center">
                <GlassButton
                  type="submit"
                  variant="primary"
                  size="lg"
                  icon={<Icon name="Search" size="sm" />}
                >
                  Search Vehicles
                </GlassButton>
              </div>
            </form>
          </GlassCard>
        </motion.div>

        {/* Results */}
        <motion.div variants={itemVariants}>
          {listings.length === 0 ? (
            <GlassCard level={2} className="text-center py-12">
              <Icon name="Search" size="xl" className="text-white/50 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No vehicles found</h3>
              <p className="text-white/70 mb-4">
                Try adjusting your search criteria or check back later for new listings.
              </p>
              <GlassButton
                onClick={() => {
                  setSearchParams({
                    city: '',
                    make: '',
                    priceRange: '',
                    fuelType: '',
                    transmission: '',
                    seats: ''
                  });
                  fetchListings();
                }}
                variant="secondary"
                size="md"
              >
                Clear Filters
              </GlassButton>
            </GlassCard>
          ) : (
            <>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-white font-heading">
                  Available Vehicles ({listings.length})
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {listings.map((listing, index) => (
                  <motion.div
                    key={listing.id}
                    variants={itemVariants}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <GlassCard level={3} hover animated className="overflow-hidden">
                      <div className="relative">
                        <OptimizedImage
                          src={listing.image}
                          alt={`${listing.make} ${listing.model}`}
                          width={400}
                          height={250}
                          className="w-full h-48 object-cover"
                        />
                        <div className="absolute top-4 right-4">
                          <span className="bg-green-500/90 text-white px-2 py-1 rounded-full text-xs font-medium">
                            Available
                          </span>
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h3 className="text-xl font-bold text-white font-heading">
                              {listing.make} {listing.model}
                            </h3>
                            <p className="text-white/70 text-sm font-body">
                              {listing.year} • {listing.city}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="text-2xl font-bold text-primary-400 font-heading">
                              R{listing.pricePerDay}
                            </p>
                            <p className="text-white/60 text-sm font-body">per day</p>
                          </div>
                        </div>
                        
                        {listing.description && (
                          <p className="text-white/70 text-sm font-body mb-4 line-clamp-2">
                            {listing.description}
                          </p>
                        )}
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {listing.features?.slice(0, 3).map((feature, idx) => (
                            <span
                              key={idx}
                              className="bg-white/10 text-white/80 px-2 py-1 rounded text-xs"
                            >
                              {feature}
                            </span>
                          ))}
                          {listing.features && listing.features.length > 3 && (
                            <span className="bg-white/10 text-white/80 px-2 py-1 rounded text-xs">
                              +{listing.features.length - 3} more
                            </span>
                          )}
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 text-sm text-white/70">
                            {listing.seats && (
                              <div className="flex items-center space-x-1">
                                <Icon name="Users" size="sm" />
                                <span>{listing.seats}</span>
                              </div>
                            )}
                            {listing.fuelType && (
                              <div className="flex items-center space-x-1">
                                <Icon name="Fuel" size="sm" />
                                <span className="capitalize">{listing.fuelType}</span>
                              </div>
                            )}
                            {listing.transmission && (
                              <div className="flex items-center space-x-1">
                                <Icon name="Settings" size="sm" />
                                <span className="capitalize">{listing.transmission}</span>
                              </div>
                            )}
                          </div>
                        </div>
                        
                        <div className="mt-4 pt-4 border-t border-white/10">
                          <GlassButton
                            onClick={() => handleBookNow(listing.id)}
                            variant="primary"
                            size="md"
                            className="w-full"
                            icon={<Icon name="Calendar" size="sm" />}
                          >
                            Book Now
                          </GlassButton>
                        </div>
                      </div>
                    </GlassCard>
                  </motion.div>
                ))}
              </div>
            </>
          )}
        </motion.div>
      </div>
      </motion.div>
    </div>
  );
};

export default Search;