import React, { useState, useEffect } from 'react';
import { useSearchParams, Link, useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';
import Glassmorphism from '../components/Glassmorphism';
import GlassInput from '../components/GlassInput';
import GlassDropdown from '../components/GlassDropdown';
import GlassButton from '../components/GlassButton';
import LazyImage from '../components/LazyImage';
import BookingModal from '../components/BookingModal';
import LoadingSpinner from '../components/LoadingSpinner';
import { useToast } from '../components/ToastProvider';
import { Vehicle } from '../services/productionApiService';


const Search: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { showToast } = useToast();
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCar, setSelectedCar] = useState<Vehicle | null>(null);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [totalVehicles, setTotalVehicles] = useState(0);

  const [filters, setFilters] = useState({
    location: searchParams.get('location') || '',
    pickupDate: searchParams.get('pickupDate') || '',
    returnDate: searchParams.get('returnDate') || '',
    vehicleType: searchParams.get('vehicleType') || '',
    minPrice: '',
    maxPrice: '',
    features: [] as string[],
    sortBy: 'price',
  });

  useEffect(() => {
    fetchVehicles();
  }, [searchParams]);

  const fetchVehicles = async () => {
    setLoading(true);
    setError(null);
    try {
      // Build search parameters
      const apiParams = new URLSearchParams();
      
      if (filters.location) apiParams.append('location', filters.location);
      if (filters.vehicleType) apiParams.append('vehicle_type', filters.vehicleType);
      if (filters.minPrice) apiParams.append('min_price', filters.minPrice);
      if (filters.maxPrice) apiParams.append('max_price', filters.maxPrice);
      if (filters.pickupDate) apiParams.append('start_date', filters.pickupDate);
      if (filters.returnDate) apiParams.append('end_date', filters.returnDate);
      
      // Add search query from URL
      const urlQuery = searchParams.get('query') || '';
      if (urlQuery) apiParams.append('query', urlQuery);

      // Fetch vehicles from API
      const response = await fetch(`/api/listings?${apiParams.toString()}`);
      
      if (!response.ok) {
        if (response.status === 401) {
          throw new Error('Authentication required');
        } else if (response.status === 403) {
          throw new Error('Access denied');
        } else if (response.status === 404) {
          throw new Error('Service not found');
        } else if (response.status >= 500) {
          throw new Error('Server error. Please try again later.');
        }
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (data.success) {
        setVehicles(data.vehicles || []);
        setTotalVehicles(data.pagination?.total || 0);
      } else {
        throw new Error(data.error || 'Failed to fetch vehicles');
      }
    } catch (err) {
      console.error('Error fetching vehicles:', err);
      const errorMessage = err instanceof Error ? err.message : 'Failed to load vehicles. Please try again.';
      setError(errorMessage);
      setVehicles([]);
      setTotalVehicles(0);
      showToast(errorMessage, 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleFilterChange = (name: string, value: string | boolean) => {
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleBookCar = (car: Vehicle) => {
    setSelectedCar(car);
    setShowBookingModal(true);
  };

  const handleBookingSuccess = (booking: any) => {
    console.log('Booking created:', booking);
    
    // Show success message
    alert(`Booking created successfully! Booking ID: ${booking.id}\n\nThis booking will now appear on the admin dashboard.`);
    
    setShowBookingModal(false);
    setSelectedCar(null);
  };

  const handleFeatureToggle = (feature: string) => {
    setFilters((prev) => {
      const newFeatures = prev.features.includes(feature)
        ? prev.features.filter((f) => f !== feature)
        : [...prev.features, feature];
      return { ...prev, features: newFeatures };
    });
  };

  const applyFilters = () => {
    const params = new URLSearchParams();
    if (filters.location) params.append('location', filters.location);
    if (filters.pickupDate) params.append('pickupDate', filters.pickupDate);
    if (filters.returnDate) params.append('returnDate', filters.returnDate);
    if (filters.vehicleType) params.append('vehicleType', filters.vehicleType);
    if (filters.minPrice) params.append('minPrice', filters.minPrice);
    if (filters.maxPrice) params.append('maxPrice', filters.maxPrice);
    if (filters.features.length > 0)
      params.append('features', filters.features.join(','));
    if (filters.sortBy) params.append('sortBy', filters.sortBy);
    navigate(`/search?${params.toString()}`);
  };

  const clearFilters = () => {
    setFilters({
      location: '',
      pickupDate: '',
      returnDate: '',
      vehicleType: '',
      minPrice: '',
      maxPrice: '',
      features: [],
      sortBy: 'price',
    });
    navigate('/search');
  };


  return (
    <div className="page-background py-8">
      <SEO 
        title="Find Vehicles for Rent in South Africa | RideShare SA"
        description="Search and book vehicles across South Africa. Filter by location, date, vehicle type, and price. Find cars, bakkies, SUVs, and luxury vehicles from trusted hosts."
        keywords="vehicle search South Africa, car rental search, bakkie rental, SUV rental, vehicle booking, car rental Cape Town, Johannesburg, Durban"
        url="https://rideshare-sa.co.za/search"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Search Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white mb-4">
              Find Your Perfect Ride in South Africa
            </h1>
            <p className="text-white/80">
              {totalVehicles} vehicles available across South Africa
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="lg:w-80">
              <Glassmorphism variant="sidebar" className="rounded-2xl p-6 sticky top-24">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-white">Filters</h3>
                  <button
                    onClick={() => setShowFilters(!showFilters)}
                    className="lg:hidden text-white/80 hover:text-white"
                  >
                    {showFilters ? 'Hide' : 'Show'}
                  </button>
                </div>

                <div className={`space-y-6 ${showFilters ? 'block' : 'hidden lg:block'}`}>
                  {/* Location */}
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">
                      Location
                    </label>
                    <GlassInput
                      type="text"
                      placeholder="e.g., Cape Town"
                      value={filters.location}
                      onChange={(e) => handleFilterChange('location', e.target.value)}
                      icon="MapPin"
                    />
                  </div>

                  {/* Dates */}
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">
                      Pickup Date
                    </label>
                    <GlassInput
                      type="date"
                      value={filters.pickupDate}
                      onChange={(e) => handleFilterChange('pickupDate', e.target.value)}
                      icon="Calendar"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">
                      Return Date
                    </label>
                    <GlassInput
                      type="date"
                      value={filters.returnDate}
                      onChange={(e) => handleFilterChange('returnDate', e.target.value)}
                      icon="Calendar"
                    />
                  </div>

                  {/* Vehicle Type */}
                  <GlassDropdown
                    label="Vehicle Type"
                    value={filters.vehicleType}
                    onChange={(value) => handleFilterChange('vehicleType', value)}
                    options={[
                      { value: '', label: 'All Types', icon: 'Grid' },
                      { value: 'sedan', label: 'Sedan', icon: 'Car' },
                      { value: 'suv', label: 'SUV', icon: 'Truck' },
                      { value: 'bakkie', label: 'Bakkie', icon: 'Truck' },
                      { value: 'luxury', label: 'Luxury', icon: 'Star' }
                    ]}
                  />

                  {/* Price Range */}
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">
                      Price Range (ZAR)
                    </label>
                    <div className="flex space-x-2">
                      <GlassInput
                        type="number"
                        placeholder="Min"
                        value={filters.minPrice}
                        onChange={(e) => handleFilterChange('minPrice', e.target.value)}
                        icon="R"
                      />
                      <GlassInput
                        type="number"
                        placeholder="Max"
                        value={filters.maxPrice}
                        onChange={(e) => handleFilterChange('maxPrice', e.target.value)}
                        icon="R"
                      />
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">
                      Features
                    </label>
                    <div className="space-y-2">
                      {[
                        'Air Conditioning',
                        'Automatic',
                        'GPS',
                        'Bluetooth',
                        'Child Seat',
                      ].map((feature) => (
                        <div key={feature} className="flex items-center">
                          <input
                            type="checkbox"
                            id={feature}
                            checked={filters.features.includes(feature)}
                            onChange={() => handleFeatureToggle(feature)}
                            className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label
                            htmlFor={feature}
                            className="ml-2 text-sm text-white/80"
                          >
                            {feature}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <GlassButton onClick={applyFilters} className="w-full" gradient={true}>
                    Apply Filters
                  </GlassButton>
                  {Object.values(filters).some(
                    (val) =>
                      (typeof val === 'string' && val !== '') ||
                      (Array.isArray(val) && val.length > 0)
                  ) && (
                    <GlassButton onClick={clearFilters} className="w-full mt-2" variant="outline" icon="🧹">
                      Clear Filters
                    </GlassButton>
                  )}
                </div>
              </Glassmorphism>
            </div>

            {/* Vehicle Listings */}
            <div className="flex-1">
              {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
                  {error}
                </div>
              )}

              {loading ? (
                <div className="flex flex-col items-center justify-center py-20">
                  <LoadingSpinner size="lg" text="Finding the perfect vehicles for you..." />
                  <div className="mt-4 text-white/70 text-center">
                    <p>Searching through our database...</p>
                    <p className="text-sm mt-1">This may take a few moments</p>
                  </div>
                </div>
              ) : vehicles.length === 0 ? (
                <div className="text-center py-10 text-white">
                  <p className="text-xl font-semibold mb-4">No vehicles are listed at the moment.</p>
                  <p className="text-white/70">Check back later or try adjusting your search criteria.</p>
                </div>
              ) : (
                <>
                  {/* Sort and View Options */}
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center space-x-4">
                      <span className="text-sm text-white/80">
                        Sort by:
                      </span>
                      <select
                        value={filters.sortBy}
                        onChange={(e) => handleFilterChange('sortBy', e.target.value)}
                        className="rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-sm focus:border-primary-500 focus:ring-primary-500"
                      >
                        <option value="price">Price (Low to High)</option>
                        <option value="price-desc">Price (High to Low)</option>
                        <option value="rating">Rating</option>
                        <option value="newest">Newest</option>
                      </select>
                    </div>
                    <div className="text-sm text-white/80">
                      {vehicles.length} vehicles found
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {vehicles.map((vehicle) => (
                      <div
                        key={vehicle.id}
                        className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 border border-white/20"
                      >
                        <LazyImage
                          src={vehicle.images?.[0] || '/images/default-vehicle.jpg'}
                          alt={vehicle.title}
                          className="w-full h-48 object-cover"
                          placeholder="https://via.placeholder.com/400x300/1f2937/ffffff?text=Vehicle+Image"
                        />
                        <div className="p-4">
                          <h3 className="text-xl font-semibold text-white mb-1">
                            {vehicle.title}
                          </h3>
                          <p className="text-gray-300 text-sm mb-2">
                            {vehicle.location?.city || 'Location not specified'} • {vehicle.year}
                          </p>
                          <p className="text-gray-400 text-sm mb-2 line-clamp-2">
                            {vehicle.description}
                          </p>
                          <div className="flex items-center mb-2">
                            <span className="text-yellow-400 text-lg">★</span>
                            <span className="text-white ml-1">
                              {vehicle.rating || 4.5} ({vehicle.total_bookings || 0} bookings)
                            </span>
                          </div>
                          <div className="text-2xl font-bold text-white mb-4">
                            R{vehicle.price_per_day}
                            <span className="text-lg font-normal text-gray-300">/day</span>
                          </div>
                          <div className="flex space-x-2">
                            <Link
                              to={`/vehicle/${vehicle.id}`}
                              className="flex-1 bg-white/10 hover:bg-white/20 text-white text-center py-2 px-4 rounded-lg transition-all duration-300"
                            >
                              View Details
                            </Link>
                            <button
                              onClick={() => handleBookCar(vehicle)}
                              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-all duration-300"
                            >
                              Book Now
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
      </div>

      {/* Booking Modal */}
      {selectedCar && (
        <BookingModal
          car={selectedCar}
          isOpen={showBookingModal}
          onClose={() => {
            setShowBookingModal(false);
            setSelectedCar(null);
          }}
          onBookingSuccess={handleBookingSuccess}
        />
      )}
    </div>
  );
};

export default Search;