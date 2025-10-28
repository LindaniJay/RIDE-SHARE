import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, CreditCard, CheckCircle, Star, MapPin, Car } from 'lucide-react';
import GlassCard from './GlassCard';
import GlassButton from './GlassButton';
import { mockVehicles } from '../data/mockVehicles';

interface BookingDemoProps {
  className?: string;
}

const BookingDemo: React.FC<BookingDemoProps> = ({ className = '' }) => {
  const [selectedVehicle, setSelectedVehicle] = useState(mockVehicles[0]);
  const [bookingStep, setBookingStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    startDate: '',
    endDate: '',
    days: 0,
    totalPrice: 0
  });

  const calculateBooking = (vehicle: any, startDate: string, endDate: string) => {
    if (!startDate || !endDate) return { days: 0, totalPrice: 0 };
    
    const start = new Date(startDate);
    const end = new Date(endDate);
    const days = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)) + 1;
    const totalPrice = days * vehicle.pricePerDay;
    
    return { days, totalPrice };
  };

  const handleDateChange = (field: 'startDate' | 'endDate', value: string) => {
    const newData = { ...bookingData, [field]: value };
    const calculation = calculateBooking(selectedVehicle, newData.startDate, newData.endDate);
    setBookingData({ ...newData, ...calculation });
  };

  const steps = [
    { id: 1, title: 'Select Vehicle', icon: Car },
    { id: 2, title: 'Choose Dates', icon: Calendar },
    { id: 3, title: 'Review & Book', icon: CreditCard },
    { id: 4, title: 'Confirmation', icon: CheckCircle }
  ];

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white mb-2">Book a Vehicle</h2>
        <p className="text-gray-300">Choose from our selection of premium vehicles</p>
      </div>

      {/* Progress Steps */}
      <div className="flex justify-center space-x-4 mb-8">
        {steps.map((step) => (
          <div key={step.id} className="flex items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
              bookingStep >= step.id 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-600 text-gray-400'
            }`}>
              <step.icon className="w-5 h-5" />
            </div>
            <span className={`ml-2 text-sm ${
              bookingStep >= step.id ? 'text-white' : 'text-gray-400'
            }`}>
              {step.title}
            </span>
            {step.id < steps.length && (
              <div className={`w-8 h-0.5 mx-4 ${
                bookingStep > step.id ? 'bg-blue-500' : 'bg-gray-600'
              }`} />
            )}
          </div>
        ))}
      </div>

      {/* Step 1: Vehicle Selection */}
      {bookingStep === 1 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          <h3 className="text-xl font-semibold text-white mb-4">Select Your Vehicle</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {mockVehicles.slice(0, 6).map((vehicle) => (
              <GlassCard
                key={vehicle.id}
                className={`p-4 cursor-pointer transition-all ${
                  selectedVehicle.id === vehicle.id 
                    ? 'ring-2 ring-blue-500 bg-blue-500/20' 
                    : 'hover:bg-white/10'
                }`}
                onClick={() => setSelectedVehicle(vehicle)}
              >
                <div className="space-y-3">
                  <img
                    src={vehicle.images[0]}
                    alt={`${vehicle.make} ${vehicle.model}`}
                    className="w-full h-32 object-cover rounded-lg"
                  />
                  <div>
                    <h4 className="font-semibold text-white">
                      {vehicle.year} {vehicle.make} {vehicle.model}
                    </h4>
                    <p className="text-gray-300 text-sm">{vehicle.type}</p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-lg font-bold text-green-400">
                        R{vehicle.pricePerDay}/day
                      </span>
                      <div className="flex items-center text-yellow-400">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="ml-1 text-sm">{vehicle.rating}</span>
                      </div>
                    </div>
                    <div className="flex items-center text-gray-400 text-sm mt-1">
                      <MapPin className="w-4 h-4 mr-1" />
                      {vehicle.location.city}
                    </div>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
          
          <div className="flex justify-end">
            <GlassButton
              onClick={() => setBookingStep(2)}
              className="px-6 py-2"
            >
              Continue to Dates
            </GlassButton>
          </div>
        </motion.div>
      )}

      {/* Step 2: Date Selection */}
      {bookingStep === 2 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <div className="flex items-center space-x-4 mb-6">
            <img
              src={selectedVehicle.images[0]}
              alt={`${selectedVehicle.make} ${selectedVehicle.model}`}
              className="w-16 h-16 object-cover rounded-lg"
            />
            <div>
              <h3 className="text-xl font-semibold text-white">
                {selectedVehicle.year} {selectedVehicle.make} {selectedVehicle.model}
              </h3>
              <p className="text-gray-300">R{selectedVehicle.pricePerDay}/day</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <GlassCard className="p-6">
              <h4 className="text-lg font-semibold text-white mb-4">Select Dates</h4>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Pickup Date
                  </label>
                  <input
                    type="date"
                    value={bookingData.startDate}
                    onChange={(e) => handleDateChange('startDate', e.target.value)}
                    className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Return Date
                  </label>
                  <input
                    type="date"
                    value={bookingData.endDate}
                    onChange={(e) => handleDateChange('endDate', e.target.value)}
                    className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </GlassCard>

            <GlassCard className="p-6">
              <h4 className="text-lg font-semibold text-white mb-4">Booking Summary</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-300">Daily Rate:</span>
                  <span className="text-white">R{selectedVehicle.pricePerDay}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Duration:</span>
                  <span className="text-white">{bookingData.days} days</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Subtotal:</span>
                  <span className="text-white">R{bookingData.totalPrice}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Service Fee:</span>
                  <span className="text-white">R{Math.round(bookingData.totalPrice * 0.1)}</span>
                </div>
                <div className="border-t border-white/20 pt-3">
                  <div className="flex justify-between text-lg font-semibold">
                    <span className="text-white">Total:</span>
                    <span className="text-green-400">
                      R{Math.round(bookingData.totalPrice * 1.1)}
                    </span>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>

          <div className="flex justify-between">
            <GlassButton
              onClick={() => setBookingStep(1)}
              variant="outline"
              className="px-6 py-2"
            >
              Back
            </GlassButton>
            <GlassButton
              onClick={() => setBookingStep(3)}
              disabled={!bookingData.startDate || !bookingData.endDate}
              className="px-6 py-2"
            >
              Continue to Review
            </GlassButton>
          </div>
        </motion.div>
      )}

      {/* Step 3: Review & Book */}
      {bookingStep === 3 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <h3 className="text-xl font-semibold text-white mb-4">Review Your Booking</h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <GlassCard className="p-6">
              <h4 className="text-lg font-semibold text-white mb-4">Vehicle Details</h4>
              <div className="space-y-3">
                <img
                  src={selectedVehicle.images[0]}
                  alt={`${selectedVehicle.make} ${selectedVehicle.model}`}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div>
                  <h5 className="font-semibold text-white">
                    {selectedVehicle.year} {selectedVehicle.make} {selectedVehicle.model}
                  </h5>
                  <p className="text-gray-300">{selectedVehicle.type} • {selectedVehicle.color}</p>
                  <div className="flex items-center mt-2">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-white">{selectedVehicle.rating}</span>
                    <span className="ml-2 text-gray-400">({selectedVehicle.reviewCount} reviews)</span>
                  </div>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="p-6">
              <h4 className="text-lg font-semibold text-white mb-4">Booking Details</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-300">Pickup:</span>
                  <span className="text-white">{bookingData.startDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Return:</span>
                  <span className="text-white">{bookingData.endDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Duration:</span>
                  <span className="text-white">{bookingData.days} days</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Daily Rate:</span>
                  <span className="text-white">R{selectedVehicle.pricePerDay}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Subtotal:</span>
                  <span className="text-white">R{bookingData.totalPrice}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Service Fee (10%):</span>
                  <span className="text-white">R{Math.round(bookingData.totalPrice * 0.1)}</span>
                </div>
                <div className="border-t border-white/20 pt-3">
                  <div className="flex justify-between text-lg font-semibold">
                    <span className="text-white">Total:</span>
                    <span className="text-green-400">
                      R{Math.round(bookingData.totalPrice * 1.1)}
                    </span>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>

          <div className="flex justify-between">
            <GlassButton
              onClick={() => setBookingStep(2)}
              variant="outline"
              className="px-6 py-2"
            >
              Back
            </GlassButton>
            <GlassButton
              onClick={() => setBookingStep(4)}
              className="px-6 py-2"
            >
              Confirm Booking
            </GlassButton>
          </div>
        </motion.div>
      )}

      {/* Step 4: Confirmation */}
      {bookingStep === 4 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-6"
        >
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle className="w-8 h-8 text-white" />
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">Booking Confirmed!</h3>
            <p className="text-gray-300 mb-6">
              Your booking for the {selectedVehicle.year} {selectedVehicle.make} {selectedVehicle.model} has been confirmed.
            </p>
          </div>

          <GlassCard className="p-6 max-w-md mx-auto">
            <h4 className="text-lg font-semibold text-white mb-4">Booking Summary</h4>
            <div className="space-y-2 text-left">
              <div className="flex justify-between">
                <span className="text-gray-300">Vehicle:</span>
                <span className="text-white">{selectedVehicle.make} {selectedVehicle.model}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Dates:</span>
                <span className="text-white">{bookingData.startDate} - {bookingData.endDate}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Total:</span>
                <span className="text-green-400 font-semibold">
                  R{Math.round(bookingData.totalPrice * 1.1)}
                </span>
              </div>
            </div>
          </GlassCard>

          <div className="space-x-4">
            <GlassButton
              onClick={() => {
                setBookingStep(1);
                setBookingData({ startDate: '', endDate: '', days: 0, totalPrice: 0 });
              }}
              variant="outline"
              className="px-6 py-2"
            >
              Book Another Vehicle
            </GlassButton>
            <GlassButton
              onClick={() => window.location.href = '/dashboard'}
              className="px-6 py-2"
            >
              View Dashboard
            </GlassButton>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default BookingDemo;
