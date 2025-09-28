import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { vehiclesAPI, bookingsAPI } from '../api';
import { useAuth } from '../context/AuthContext';
import PaymentModal from '../components/PaymentModal';

interface Vehicle {
  id: string;
  make: string;
  model: string;
  year: number;
  type: string;
  pricePerDay: number;
  location: string;
  images: string[];
  features: string[];
  rating: number;
  reviewCount: number;
  description: string;
  host: {
    id: string;
    name: string;
    rating: number;
    responseTime: string;
    joinDate: string;
    totalTrips: number;
  };
  availability: {
    startDate: string;
    endDate: string;
  };
}

interface BookingForm {
  pickupDate: string;
  returnDate: string;
  totalDays: number;
  totalPrice: number;
  specialRequests: string;
}

const VehicleDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [vehicle, setVehicle] = useState<Vehicle | null>(null);
  const [loading, setLoading] = useState(true);
  const [bookingForm, setBookingForm] = useState<BookingForm>({
    pickupDate: '',
    returnDate: '',
    totalDays: 0,
    totalPrice: 0,
    specialRequests: ''
  });
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [bookingLoading, setBookingLoading] = useState(false);
  const [currentBooking, setCurrentBooking] = useState<any>(null);

  const fetchVehicle = useCallback(async () => {
    setLoading(true);
    try {
      const response = await vehiclesAPI.getById(id!);
      setVehicle(response.data);
    } catch (error) {
      console.error("Error fetching vehicle:", error);
      // Mock data for demonstration
      setVehicle({
        id: id!,
        make: "Toyota",
        model: "Hilux",
        year: 2022,
        type: "bakkie",
        pricePerDay: 250,
        location: "Cape Town, South Africa",
        images: [
          "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800",
          "https://images.unsplash.com/photo-1549317336-206569e8475c?w=800",
          "https://images.unsplash.com/photo-1555215695-3004980dd54e?w=800"
        ],
        features: ["4WD", "Air Conditioning", "Bluetooth", "GPS Navigation", "Leather Seats", "Backup Camera"],
        rating: 4.8,
        reviewCount: 24,
        description: "Perfect for your South African adventure! This reliable Toyota Hilux is ideal for exploring the beautiful landscapes of the Western Cape. With 4WD capabilities and all the modern features you need, it's perfect for both city driving and off-road adventures.",
        host: {
          id: "host1",
          name: "John M.",
          rating: 4.9,
          responseTime: "1 hour",
          joinDate: "2022-03-15",
          totalTrips: 47
        },
        availability: {
          startDate: "2024-01-01",
          endDate: "2024-12-31"
        }
      });
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchVehicle();
  }, [fetchVehicle]);

  const handleDateChange = (field: 'pickupDate' | 'returnDate', value: string) => {
    const newForm = { ...bookingForm, [field]: value };
    
    if (newForm.pickupDate && newForm.returnDate) {
      const start = new Date(newForm.pickupDate);
      const end = new Date(newForm.returnDate);
      const days = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
      newForm.totalDays = days > 0 ? days : 0;
      newForm.totalPrice = newForm.totalDays * (vehicle?.pricePerDay || 0);
    }
    
    setBookingForm(newForm);
  };

  const handleBooking = async () => {
    if (!user) {
      navigate('/login');
      return;
    }

    if (!vehicle || bookingForm.totalDays <= 0) {
      alert('Please select valid dates');
      return;
    }

    setBookingLoading(true);
    try {
      const bookingData = {
        vehicleId: vehicle.id,
        pickupDate: bookingForm.pickupDate,
        returnDate: bookingForm.returnDate,
        totalDays: bookingForm.totalDays,
        totalPrice: bookingForm.totalPrice,
        specialRequests: bookingForm.specialRequests
      };

      const response = await bookingsAPI.create(bookingData);
      
      // Store booking data for payment
      setCurrentBooking({
        id: response.data.id,
        totalAmount: bookingForm.totalPrice * 1.1, // Include service fee
        vehicleName: `${vehicle.make} ${vehicle.model}`,
        pickupDate: bookingForm.pickupDate,
        returnDate: bookingForm.returnDate
      });
      
      setShowBookingModal(false);
      setShowPaymentModal(true);
    } catch (error) {
      console.error('Booking error:', error);
      alert('Failed to create booking. Please try again.');
    } finally {
      setBookingLoading(false);
    }
  };

  const handlePaymentSuccess = () => {
    setShowPaymentModal(false);
    alert('Payment successful! Your booking is confirmed.');
    navigate('/dashboard');
  };

  const formatPrice = (price: number) => `R${price.toLocaleString()}`;

  const getVehicleTypeIcon = (type: string) => {
    const icons: { [key: string]: string } = {
      car: "🚗",
      bakkie: "🚛",
      suv: "🚙",
      van: "🚐",
      luxury: "🏎️"
    };
    return icons[type] || "🚗";
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded w-1/3 mb-8"></div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="h-96 bg-gray-300 dark:bg-gray-700 rounded-lg mb-6"></div>
                <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded mb-2"></div>
                <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4"></div>
              </div>
              <div className="h-96 bg-gray-300 dark:bg-gray-700 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!vehicle) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🚗</div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Vehicle not found
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              The vehicle you're looking for doesn't exist or has been removed.
            </p>
            <button
              onClick={() => navigate('/search')}
              className="bg-primary-600 text-white py-2 px-4 rounded-md hover:bg-primary-700 transition-colors"
            >
              Browse Vehicles
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
            <li><button onClick={() => navigate('/')} className="hover:text-primary-600">Home</button></li>
            <li>/</li>
            <li><button onClick={() => navigate('/search')} className="hover:text-primary-600">Search</button></li>
            <li>/</li>
            <li className="text-gray-900 dark:text-white">{vehicle.make} {vehicle.model}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Image Gallery */}
            <div className="mb-8">
              <div className="relative">
                <img
                  src={vehicle.images[0]}
                  alt={`${vehicle.make} ${vehicle.model}`}
                  className="w-full h-96 object-cover rounded-lg"
                />
                <div className="absolute top-4 left-4 bg-white/90 dark:bg-gray-800/90 px-3 py-1 rounded-full text-sm font-medium">
                  {getVehicleTypeIcon(vehicle.type)}
                </div>
                <div className="absolute top-4 right-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {formatPrice(vehicle.pricePerDay)}/day
                </div>
              </div>
              
              {/* Thumbnail Images */}
              <div className="grid grid-cols-3 gap-2 mt-4">
                {vehicle.images.slice(1, 4).map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${vehicle.make} ${vehicle.model} ${index + 2}`}
                    className="w-full h-24 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
                  />
                ))}
              </div>
            </div>

            {/* Vehicle Info */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {vehicle.make} {vehicle.model} {vehicle.year}
                  </h1>
                  <p className="text-gray-600 dark:text-gray-400 flex items-center">
                    📍 {vehicle.location}
                  </p>
                </div>
                <div className="text-right">
                  <div className="flex items-center mb-2">
                    <span className="text-yellow-400 text-xl">⭐</span>
                    <span className="ml-2 text-lg font-semibold text-gray-900 dark:text-white">
                      {vehicle.rating}
                    </span>
                    <span className="ml-1 text-gray-600 dark:text-gray-400">
                      ({vehicle.reviewCount} reviews)
                    </span>
                  </div>
                  <div className="text-2xl font-bold text-primary-600">
                    {formatPrice(vehicle.pricePerDay)}/day
                  </div>
                </div>
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-6">
                {vehicle.description}
              </p>

              {/* Features */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Features</h3>
                <div className="flex flex-wrap gap-2">
                  {vehicle.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Host Info */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Meet your host</h3>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary-600 text-lg font-medium">
                      {vehicle.host.name.charAt(0)}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 dark:text-white">{vehicle.host.name}</h4>
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <span className="text-yellow-400">⭐</span>
                      <span className="ml-1">{vehicle.host.rating} • {vehicle.host.totalTrips} trips</span>
                      <span className="ml-2">• Responds in {vehicle.host.responseTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 sticky top-24">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Book this vehicle
              </h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Pick-up Date
                  </label>
                  <input
                    type="date"
                    value={bookingForm.pickupDate}
                    onChange={(e) => handleDateChange('pickupDate', e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Return Date
                  </label>
                  <input
                    type="date"
                    value={bookingForm.returnDate}
                    onChange={(e) => handleDateChange('returnDate', e.target.value)}
                    min={bookingForm.pickupDate || new Date().toISOString().split('T')[0]}
                    className="w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  />
                </div>

                {bookingForm.totalDays > 0 && (
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-600 dark:text-gray-400">
                        {formatPrice(vehicle.pricePerDay)} × {bookingForm.totalDays} days
                      </span>
                      <span className="font-semibold text-gray-900 dark:text-white">
                        {formatPrice(vehicle.pricePerDay * bookingForm.totalDays)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-600 dark:text-gray-400">Service fee</span>
                      <span className="font-semibold text-gray-900 dark:text-white">
                        {formatPrice(vehicle.pricePerDay * bookingForm.totalDays * 0.1)}
                      </span>
                    </div>
                    <div className="border-t border-gray-200 dark:border-gray-600 pt-2">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-gray-900 dark:text-white">Total</span>
                        <span className="text-xl font-bold text-primary-600">
                          {formatPrice(bookingForm.totalPrice * 1.1)}
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                <button
                  onClick={() => setShowBookingModal(true)}
                  disabled={bookingForm.totalDays <= 0}
                  className="w-full bg-primary-600 text-white py-3 px-4 rounded-md hover:bg-primary-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors font-semibold"
                >
                  {user ? 'Request to Book' : 'Login to Book'}
                </button>

                <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                  You won't be charged until the host confirms your booking
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Booking Modal */}
        {showBookingModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg max-w-md w-full p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Confirm your booking
              </h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Special Requests (Optional)
                  </label>
                  <textarea
                    value={bookingForm.specialRequests}
                    onChange={(e) => setBookingForm({...bookingForm, specialRequests: e.target.value})}
                    rows={3}
                    placeholder="Any special requests or questions for the host..."
                    className="w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  />
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600 dark:text-gray-400">
                      {formatPrice(vehicle.pricePerDay)} × {bookingForm.totalDays} days
                    </span>
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {formatPrice(bookingForm.totalPrice)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600 dark:text-gray-400">Service fee</span>
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {formatPrice(bookingForm.totalPrice * 0.1)}
                    </span>
                  </div>
                  <div className="border-t border-gray-200 dark:border-gray-600 pt-2">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-gray-900 dark:text-white">Total</span>
                      <span className="text-xl font-bold text-primary-600">
                        {formatPrice(bookingForm.totalPrice * 1.1)}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex space-x-3">
                  <button
                    onClick={() => setShowBookingModal(false)}
                    className="flex-1 bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200 py-2 px-4 rounded-md hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleBooking}
                    disabled={bookingLoading}
                    className="flex-1 bg-primary-600 text-white py-2 px-4 rounded-md hover:bg-primary-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
                  >
                    {bookingLoading ? 'Sending...' : 'Proceed to Payment'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Payment Modal */}
        {showPaymentModal && currentBooking && (
          <PaymentModal
            isOpen={showPaymentModal}
            onClose={() => setShowPaymentModal(false)}
            bookingData={currentBooking}
            userInfo={{
              firstName: user?.firstName || '',
              lastName: user?.lastName || '',
              email: user?.email || '',
              phone: user?.phone || ''
            }}
            onSuccess={handlePaymentSuccess}
          />
        )}
      </div>
    </div>
  );
};

export default VehicleDetail;