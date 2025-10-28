import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, 
  Users, 
  Star, 
  Heart, 
  Car, 
  Zap, 
  Shield, 
  Clock, 
  Sliders,
  Grid,
  List
} from 'lucide-react';
import GlassCard from './GlassCard';
import GlassButton from './GlassButton';
import GlassInput from './GlassInput';
import { mockVehicles } from '../data/mockVehicles';
import axios from 'axios';

interface Vehicle {
  id: string;
  make: string;
  model: string;
  year: number;
  type: string;
  color: string;
  pricePerDay: number;
  pricePerWeek?: number;
  pricePerMonth?: number;
  location: {
    city: string;
    state: string;
    address: string;
  };
  images: string[];
  features: string[];
  amenities: string[];
  safetyFeatures: string[];
  host: {
    name: string;
    rating: number;
    totalBookings: number;
    verified: boolean;
  };
  rating: number;
  reviewCount: number;
  totalBookings: number;
  isAvailable: boolean;
  minimumRentalDays: number;
  maximumRentalDays?: number;
  fuelType: string;
  transmission: string;
  seats: number;
  mileage: number;
}

interface VehicleSearchProps {
  className?: string;
  onVehicleSelect?: (vehicle: Vehicle) => void;
}

const VehicleSearch: React.FC<VehicleSearchProps> = ({ 
  className = '', 
  onVehicleSelect 
}) => {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [filters, setFilters] = useState({
    vehicleType: '',
    priceRange: { min: 0, max: 1000 },
    fuelType: '',
    transmission: '',
    features: [] as string[],
    amenities: [] as string[],
    safetyFeatures: [] as string[]
  });
  const [sortBy, setSortBy] = useState('relevance');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [favorites, setFavorites] = useState<string[]>([]);

  // Fetch vehicles from API
  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://localhost:5001/api/vehicles');
        
        if (response.data.success && response.data.vehicles) {
          // Transform API data to match our Vehicle interface
          const transformedVehicles: Vehicle[] = response.data.vehicles.map((vehicle: any) => ({
            id: vehicle.id.toString(),
            make: vehicle.make,
            model: vehicle.model,
            year: vehicle.year,
            type: vehicle.vehicle_type || 'car',
            color: vehicle.color || 'Unknown',
            pricePerDay: vehicle.pricePerDay,
            pricePerWeek: vehicle.price_per_week,
            pricePerMonth: vehicle.price_per_month,
            location: {
              city: vehicle.city,
              state: vehicle.city === 'Cape Town' ? 'Western Cape' : 
                     vehicle.city === 'Johannesburg' ? 'Gauteng' : 
                     vehicle.city === 'Durban' ? 'KwaZulu-Natal' : 'Unknown',
              address: vehicle.location ? JSON.parse(vehicle.location).address : 'Address not available'
            },
            images: vehicle.images ? JSON.parse(vehicle.images) : [vehicle.image],
            features: vehicle.features ? JSON.parse(vehicle.features) : [],
            amenities: ['USB Charging', 'Cup Holders'],
            safetyFeatures: ['Airbags', 'ABS', 'Stability Control'],
            host: {
              name: 'Host Name',
              rating: vehicle.rating || 4.5,
              totalBookings: vehicle.total_bookings || 0,
              verified: true
            },
            rating: vehicle.rating || 4.5,
            reviewCount: Math.floor(Math.random() * 50) + 10,
            totalBookings: vehicle.total_bookings || 0,
            isAvailable: vehicle.is_available !== false,
            minimumRentalDays: vehicle.minimum_rental_days || 1,
            maximumRentalDays: vehicle.maximum_rental_days || 30,
            fuelType: vehicle.fuelType || 'Petrol',
            transmission: vehicle.transmission || 'Automatic',
            seats: vehicle.seats || 5,
            mileage: vehicle.mileage || 0
          }));
          
          setVehicles(transformedVehicles);
        } else {
          // Fallback to mock data if API fails
          setVehicles(mockVehicles);
        }
      } catch (error) {
        console.error('Error fetching vehicles:', error);
        setError('Failed to load vehicles');
        // Fallback to mock data
        setVehicles(mockVehicles);
      } finally {
        setLoading(false);
      }
    };

    fetchVehicles();
  }, []);

  const vehicleTypes = ['car', 'suv', 'truck', 'van', 'motorcycle', 'luxury', 'electric'];
  const fuelTypes = ['Petrol', 'Diesel', 'Electric', 'Hybrid', 'LPG'];
  const transmissionTypes = ['Manual', 'Automatic', 'CVT', 'Semi-Automatic'];
  const commonFeatures = ['Air Conditioning', 'Bluetooth', 'GPS Navigation', 'Backup Camera', 'Cruise Control'];
  const commonAmenities = ['USB Charging', 'Cup Holders', 'Wireless Charging', 'Heated Seats'];
  const commonSafetyFeatures = ['Airbags', 'ABS', 'Stability Control', 'Blind Spot Monitor'];

  const filteredVehicles = vehicles.filter(vehicle => {
    const matchesSearch = searchTerm === '' || 
      `${vehicle.make} ${vehicle.model}`.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = location === '' || 
      vehicle.location.city.toLowerCase().includes(location.toLowerCase()) ||
      vehicle.location.state.toLowerCase().includes(location.toLowerCase());
    const matchesType = filters.vehicleType === '' || vehicle.type === filters.vehicleType;
    const matchesPrice = vehicle.pricePerDay >= filters.priceRange.min && 
      vehicle.pricePerDay <= filters.priceRange.max;
    const matchesFuel = filters.fuelType === '' || vehicle.fuelType === filters.fuelType;
    const matchesTransmission = filters.transmission === '' || vehicle.transmission === filters.transmission;
    const matchesFeatures = filters.features.length === 0 || 
      filters.features.every(feature => vehicle.features.includes(feature));
    const matchesAmenities = filters.amenities.length === 0 || 
      filters.amenities.every(amenity => vehicle.amenities.includes(amenity));
    const matchesSafety = filters.safetyFeatures.length === 0 || 
      filters.safetyFeatures.every(safety => vehicle.safetyFeatures.includes(safety));

    return matchesSearch && matchesLocation && matchesType && matchesPrice && 
           matchesFuel && matchesTransmission && matchesFeatures && 
           matchesAmenities && matchesSafety && vehicle.isAvailable;
  }).sort((a, b) => {
    switch (sortBy) {
      case 'price-low': return a.pricePerDay - b.pricePerDay;
      case 'price-high': return b.pricePerDay - a.pricePerDay;
      case 'rating': return b.rating - a.rating;
      case 'newest': return b.year - a.year;
      case 'oldest': return a.year - b.year;
      default: return 0;
    }
  });

  const toggleFavorite = (vehicleId: string) => {
    setFavorites(prev => 
      prev.includes(vehicleId) 
        ? prev.filter(id => id !== vehicleId)
        : [...prev, vehicleId]
    );
  };

  const toggleFilter = (category: 'features' | 'amenities' | 'safetyFeatures', item: string) => {
    setFilters(prev => ({
      ...prev,
      [category]: prev[category].includes(item)
        ? prev[category].filter(f => f !== item)
        : [...prev[category], item]
    }));
  };

  const clearFilters = () => {
    setFilters({
      vehicleType: '',
      priceRange: { min: 0, max: 1000 },
      fuelType: '',
      transmission: '',
      features: [],
      amenities: [],
      safetyFeatures: []
    });
  };

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Search Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-white mb-4">Find Your Perfect Ride</h1>
        <p className="text-white/70 text-lg">Discover amazing vehicles for your next adventure</p>
      </div>

      {/* Search Form */}
      <GlassCard className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          <div className="lg:col-span-2">
            <GlassInput
              placeholder="Search by make, model, or features..."
              value={searchTerm}
              onChange={(value) => setSearchTerm(value)}
              icon="Search"
            />
          </div>
          <GlassInput
            placeholder="Where are you going?"
            value={location}
            onChange={(value) => setLocation(value)}
            icon="MapPin"
          />
          <GlassInput
            type="date"
            placeholder="Start date"
            value={startDate}
            onChange={(value) => setStartDate(value)}
            icon="Calendar"
          />
          <div className="flex gap-2">
            <GlassInput
              type="date"
              placeholder="End date"
              value={endDate}
              onChange={(value) => setEndDate(value)}
              icon="Calendar"
            />
            <GlassButton
              onClick={() => setShowFilters(!showFilters)}
              className="bg-white/10 hover:bg-white/20"
            >
              <Sliders className="w-4 h-4" />
            </GlassButton>
          </div>
        </div>

        {/* Advanced Filters */}
        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-6 pt-6 border-t border-white/20"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Vehicle Type */}
                <div>
                  <label className="text-white font-medium mb-3 block">Vehicle Type</label>
                  <select
                    value={filters.vehicleType}
                    onChange={(e) => setFilters(prev => ({ ...prev, vehicleType: e.target.value }))}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="" className="bg-gray-800">All Types</option>
                    {vehicleTypes.map(type => (
                      <option key={type} value={type} className="bg-gray-800 capitalize">
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Price Range */}
                <div>
                  <label className="text-white font-medium mb-3 block">Price Range (R/day)</label>
                  <div className="space-y-2">
                    <input
                      type="range"
                      min="0"
                      max="1000"
                      value={filters.priceRange.max}
                      onChange={(e) => setFilters(prev => ({ 
                        ...prev, 
                        priceRange: { ...prev.priceRange, max: parseInt(e.target.value) }
                      }))}
                      className="w-full"
                    />
                    <div className="flex justify-between text-white/60 text-sm">
                      <span>R{filters.priceRange.min}</span>
                      <span>R{filters.priceRange.max}</span>
                    </div>
                  </div>
                </div>

                {/* Fuel Type */}
                <div>
                  <label className="text-white font-medium mb-3 block">Fuel Type</label>
                  <select
                    value={filters.fuelType}
                    onChange={(e) => setFilters(prev => ({ ...prev, fuelType: e.target.value }))}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="" className="bg-gray-800">All Fuel Types</option>
                    {fuelTypes.map(fuel => (
                      <option key={fuel} value={fuel} className="bg-gray-800">{fuel}</option>
                    ))}
                  </select>
                </div>

                {/* Transmission */}
                <div>
                  <label className="text-white font-medium mb-3 block">Transmission</label>
                  <select
                    value={filters.transmission}
                    onChange={(e) => setFilters(prev => ({ ...prev, transmission: e.target.value }))}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="" className="bg-gray-800">All Transmissions</option>
                    {transmissionTypes.map(transmission => (
                      <option key={transmission} value={transmission} className="bg-gray-800">{transmission}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Features */}
              <div className="mt-6 space-y-4">
                <div>
                  <h3 className="text-white font-medium mb-3">Features</h3>
                  <div className="flex flex-wrap gap-2">
                    {commonFeatures.map(feature => (
                      <button
                        key={feature}
                        onClick={() => toggleFilter('features', feature)}
                        className={`px-3 py-1 rounded-full text-sm transition-colors ${
                          filters.features.includes(feature)
                            ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                            : 'bg-white/10 text-white/70 border border-white/20 hover:bg-white/20'
                        }`}
                      >
                        {feature}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-white font-medium mb-3">Amenities</h3>
                  <div className="flex flex-wrap gap-2">
                    {commonAmenities.map(amenity => (
                      <button
                        key={amenity}
                        onClick={() => toggleFilter('amenities', amenity)}
                        className={`px-3 py-1 rounded-full text-sm transition-colors ${
                          filters.amenities.includes(amenity)
                            ? 'bg-green-500/20 text-green-300 border border-green-500/30'
                            : 'bg-white/10 text-white/70 border border-white/20 hover:bg-white/20'
                        }`}
                      >
                        {amenity}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-white font-medium mb-3">Safety Features</h3>
                  <div className="flex flex-wrap gap-2">
                    {commonSafetyFeatures.map(safety => (
                      <button
                        key={safety}
                        onClick={() => toggleFilter('safetyFeatures', safety)}
                        className={`px-3 py-1 rounded-full text-sm transition-colors ${
                          filters.safetyFeatures.includes(safety)
                            ? 'bg-red-500/20 text-red-300 border border-red-500/30'
                            : 'bg-white/10 text-white/70 border border-white/20 hover:bg-white/20'
                        }`}
                      >
                        {safety}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 flex justify-between">
                <button
                  onClick={clearFilters}
                  className="px-4 py-2 text-white/60 hover:text-white transition-colors"
                >
                  Clear All Filters
                </button>
                <div className="text-white/60 text-sm">
                  {filteredVehicles.length} vehicles found
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </GlassCard>

      {/* Results Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">
            {filteredVehicles.length} vehicles available
          </h2>
          <p className="text-white/70">
            {location && `in ${location}`} 
            {startDate && endDate && ` from ${startDate} to ${endDate}`}
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="relevance" className="bg-gray-800">Most Relevant</option>
            <option value="price-low" className="bg-gray-800">Price: Low to High</option>
            <option value="price-high" className="bg-gray-800">Price: High to Low</option>
            <option value="rating" className="bg-gray-800">Highest Rated</option>
            <option value="newest" className="bg-gray-800">Newest First</option>
            <option value="oldest" className="bg-gray-800">Oldest First</option>
          </select>
          <div className="flex bg-white/10 rounded-lg p-1">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded transition-colors ${
                viewMode === 'grid' ? 'bg-white/20' : 'hover:bg-white/10'
              }`}
            >
              <Grid className="w-4 h-4 text-white" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded transition-colors ${
                viewMode === 'list' ? 'bg-white/20' : 'hover:bg-white/10'
              }`}
            >
              <List className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="flex items-center justify-center py-12">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
            <p className="text-white/70">Loading vehicles...</p>
          </div>
        </div>
      )}

      {/* Error State */}
      {error && !loading && (
        <div className="flex items-center justify-center py-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Car className="w-8 h-8 text-red-400" />
            </div>
            <p className="text-red-400 mb-2">Failed to load vehicles</p>
            <p className="text-white/60 text-sm">Using mock data instead</p>
          </div>
        </div>
      )}

      {/* Results Grid */}
      {!loading && (
        <div className={`grid gap-6 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
            : 'grid-cols-1'
        }`}>
          {filteredVehicles.map((vehicle) => (
          <motion.div
            key={vehicle.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="group"
          >
            <GlassCard className={`p-0 overflow-hidden hover:scale-105 transition-transform ${
              viewMode === 'list' ? 'flex' : ''
            }`}>
              {/* Image */}
              <div className={`relative bg-gradient-to-br from-gray-600 to-gray-800 ${
                viewMode === 'list' ? 'w-80 h-48' : 'h-48'
              }`}>
                {vehicle.images.length > 0 ? (
                  <img
                    src={vehicle.images[0]}
                    alt={`${vehicle.make} ${vehicle.model}`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <Car className="w-16 h-16 text-white/40" />
                  </div>
                )}
                
                {/* Favorite Button */}
                <button
                  onClick={() => toggleFavorite(vehicle.id)}
                  className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  <Heart className={`w-4 h-4 ${
                    favorites.includes(vehicle.id) ? 'text-red-400 fill-current' : 'text-white'
                  }`} />
                </button>

                {/* Price Badge */}
                <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm rounded-lg px-3 py-1">
                  <p className="text-white font-semibold">R{vehicle.pricePerDay}</p>
                  <p className="text-white/60 text-xs">per day</p>
                </div>
              </div>

              {/* Content */}
              <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {vehicle.make} {vehicle.model}
                    </h3>
                    <p className="text-white/60 text-sm">{vehicle.year} • {vehicle.color}</p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-white font-medium">{vehicle.rating}</span>
                    <span className="text-white/60 text-sm">({vehicle.reviewCount})</span>
                  </div>
                </div>

                <div className="flex items-center text-white/60 text-sm mb-4">
                  <MapPin className="w-4 h-4 mr-1" />
                  {vehicle.location.city}, {vehicle.location.state}
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                  <div className="flex items-center text-white/60">
                    <Users className="w-4 h-4 mr-2" />
                    {vehicle.seats} seats
                  </div>
                  <div className="flex items-center text-white/60">
                    <Zap className="w-4 h-4 mr-2" />
                    {vehicle.fuelType}
                  </div>
                  <div className="flex items-center text-white/60">
                    <Car className="w-4 h-4 mr-2" />
                    {vehicle.transmission}
                  </div>
                  <div className="flex items-center text-white/60">
                    <Clock className="w-4 h-4 mr-2" />
                    {vehicle.mileage.toLocaleString()} km
                  </div>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {vehicle.features.slice(0, 3).map((feature) => (
                    <span key={feature} className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">
                      {feature}
                    </span>
                  ))}
                  {vehicle.features.length > 3 && (
                    <span className="px-2 py-1 bg-white/10 text-white/60 rounded text-xs">
                      +{vehicle.features.length - 3} more
                    </span>
                  )}
                </div>

                {/* Host Info */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-medium">
                        {vehicle.host.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium">{vehicle.host.name}</p>
                      <div className="flex items-center space-x-1">
                        <Star className="w-3 h-3 text-yellow-400 fill-current" />
                        <span className="text-white/60 text-xs">{vehicle.host.rating}</span>
                        {vehicle.host.verified && (
                          <Shield className="w-3 h-3 text-green-400" />
                        )}
                      </div>
                    </div>
                  </div>
                  <GlassButton
                    onClick={() => onVehicleSelect?.(vehicle)}
                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                  >
                    View Details
                  </GlassButton>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
        </div>
      )}

      {/* Empty State */}
      {!loading && filteredVehicles.length === 0 && (
        <GlassCard className="p-12 text-center">
          <Car className="w-16 h-16 text-white/40 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">No vehicles found</h3>
          <p className="text-white/60 mb-6">
            Try adjusting your search criteria or filters to find more vehicles
          </p>
          <GlassButton onClick={clearFilters}>
            Clear Filters
          </GlassButton>
        </GlassCard>
      )}
    </div>
  );
};

export default VehicleSearch;
