import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { enhancedPaymentService } from '../services/EnhancedPaymentService';
import { bookingService } from '../services/bookingService';
import Icon from './Icon';
import { SAPaymentGateway } from './SAPaymentGateway';

interface Vehicle {
  id: string;
  make: string;
  model: string;
  year: number;
  pricePerDay: number;
  images: string[];
  location?: {
    city: string;
    province: string;
  };
  host?: {
    id: string;
    name: string;
  };
}

interface BookingData {
  startDate: string;
  endDate: string;
  totalDays: number;
  totalPrice: number;
  specialRequests?: string;
  pickupLocation?: string;
  returnLocation?: string;
}

interface UnifiedCheckoutProps {
  vehicle: Vehicle;
  bookingData: BookingData;
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (booking: any) => void;
  onError: (error: string) => void;
}

interface CheckoutStep {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  current: boolean;
}

const UnifiedCheckout: React.FC<UnifiedCheckoutProps> = ({
  vehicle,
  bookingData,
  isOpen,
  onClose,
  onSuccess,
  onError
}) => {
  const { user } = useAuth();
  const [currentStep, setCurrentStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<string>('');
  const [appliedDiscount, setAppliedDiscount] = useState(0);
  const [currentBooking, setCurrentBooking] = useState<any>(null);

  const steps: CheckoutStep[] = [
    {
      id: 'review',
      title: 'Review Booking',
      description: 'Confirm your booking details',
      completed: false,
      current: true
    },
    {
      id: 'payment',
      title: 'Payment',
      description: 'Choose payment method and pay',
      completed: false,
      current: false
    },
    {
      id: 'confirmation',
      title: 'Confirmation',
      description: 'Booking confirmed',
      completed: false,
      current: false
    }
  ];

  const [currentSteps, setCurrentSteps] = useState(steps);

  useEffect(() => {
    if (isOpen) {
      setCurrentStep(0);
      setCurrentSteps(steps);
      setCurrentBooking(null);
      setAppliedDiscount(0);
    }
  }, [isOpen]);

  const calculateTotal = () => {
    const subtotal = bookingData.totalPrice;
    const serviceFee = Math.round(subtotal * 0.1); // 10% service fee
    const insuranceFee = Math.round(subtotal * 0.05); // 5% insurance fee
    const vat = Math.round((subtotal + serviceFee + insuranceFee) * 0.15); // 15% VAT
    const total = subtotal + serviceFee + insuranceFee + vat - appliedDiscount;
    
    return {
      subtotal,
      serviceFee,
      insuranceFee,
      vat,
      discount: appliedDiscount,
      total: Math.max(0, total)
    };
  };

  const handleStepComplete = async (stepId: string) => {
    setLoading(true);
    
    try {
      switch (stepId) {
        case 'review':
          // Create booking first
          const booking = await bookingService.createBooking({
            vehicleId: vehicle.id,
            startDate: bookingData.startDate,
            endDate: bookingData.endDate,
            totalDays: bookingData.totalDays,
            totalPrice: bookingData.totalPrice,
            specialRequests: bookingData.specialRequests,
            renterId: user?.id || '',
            renterName: `${user?.firstName || ''} ${user?.lastName || ''}`.trim(),
            hostId: vehicle.host?.id || '',
            hostName: vehicle.host?.name || '',
            vehicleTitle: `${vehicle.make} ${vehicle.model}`,
            vehicleImage: vehicle.images[0] || '/images/default-vehicle.jpg',
            vehicleMake: vehicle.make,
            vehicleModel: vehicle.model
          });
          
          setCurrentBooking(booking);
          break;
          
        case 'payment':
          if (!paymentMethod) {
            throw new Error('Please select a payment method');
          }
          await processPayment();
          break;
      }
      
      // Update step status
      const updatedSteps = currentSteps.map((step, index) => ({
        ...step,
        completed: step.id === stepId,
        current: index === currentStep + 1
      }));
      setCurrentSteps(updatedSteps);
      setCurrentStep(currentStep + 1);
      
    } catch (error) {
      onError(error instanceof Error ? error.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const processPayment = async () => {
    if (!currentBooking) {
      throw new Error('No booking found');
    }

    const pricing = calculateTotal();
    
    const paymentData = {
      bookingId: currentBooking.id,
      amount: pricing.total,
      paymentMethod,
      currency: 'ZAR',
      customerInfo: {
        firstName: user?.firstName || '',
        lastName: user?.lastName || '',
        email: user?.email || '',
        phone: user?.phoneNumber || ''
      },
      metadata: {
        vehicleId: vehicle.id,
        startDate: bookingData.startDate,
        endDate: bookingData.endDate,
        loyaltyPointsUsed: appliedDiscount > 0 ? Math.floor(appliedDiscount / 0.01) : 0
      }
    };

    // Process payment
    const paymentResult = await enhancedPaymentService.processPayment({
      ...paymentData,
      gateway: 'stripe' // Add required gateway field
    });
    
    if (paymentResult.success) {
      // Update booking payment status
      await bookingService.updatePaymentStatus(currentBooking.id, 'paid');
      onSuccess(currentBooking);
    } else {
      throw new Error(paymentResult.error || 'Payment failed');
    }
  };

  const renderStepContent = () => {
    const pricing = calculateTotal();

    switch (currentStep) {
      case 0: // Review
        return (
          <div className="space-y-6">
            {/* Vehicle Summary */}
            <div className="bg-white/10 rounded-lg p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4">Booking Summary</h3>
              
              <div className="flex items-center space-x-4 mb-6">
                <img
                  src={vehicle.images[0]}
                  alt={`${vehicle.make} ${vehicle.model}`}
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <div>
                  <h4 className="text-lg font-semibold text-white">
                    {vehicle.make} {vehicle.model} ({vehicle.year})
                  </h4>
                  <p className="text-white/70">{vehicle.location?.city}, {vehicle.location?.province}</p>
                  <p className="text-green-400 font-semibold">R{vehicle.pricePerDay}/day</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-white/70">Pickup Date:</span>
                  <span className="text-white">{new Date(bookingData.startDate).toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Return Date:</span>
                  <span className="text-white">{new Date(bookingData.endDate).toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Duration:</span>
                  <span className="text-white">{bookingData.totalDays} days</span>
                </div>
                {bookingData.specialRequests && (
                  <div className="flex justify-between">
                    <span className="text-white/70">Special Requests:</span>
                    <span className="text-white text-sm">{bookingData.specialRequests}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Pricing Breakdown */}
            <div className="bg-white/10 rounded-lg p-6 border border-white/20">
              <h4 className="text-white font-semibold mb-4">Pricing Breakdown</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-white/70">Subtotal ({bookingData.totalDays} days):</span>
                  <span className="text-white">R{pricing.subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Service Fee (10%):</span>
                  <span className="text-white">R{pricing.serviceFee.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Insurance Fee (5%):</span>
                  <span className="text-white">R{pricing.insuranceFee.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">VAT (15%):</span>
                  <span className="text-white">R{pricing.vat.toFixed(2)}</span>
                </div>
                {pricing.discount > 0 && (
                  <div className="flex justify-between text-green-400">
                    <span>Loyalty Discount:</span>
                    <span>-R{pricing.discount.toFixed(2)}</span>
                  </div>
                )}
                <div className="border-t border-white/20 pt-2">
                  <div className="flex justify-between text-lg font-semibold">
                    <span className="text-white">Total:</span>
                    <span className="text-white">R{pricing.total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 1: // Payment
        return (
          <div className="space-y-6">
            <div className="bg-white/10 rounded-lg p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4">Payment Details</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-white/70">Total Amount:</span>
                  <span className="text-white text-lg font-semibold">R{pricing.total.toFixed(2)}</span>
                </div>
                <div className="text-sm text-white/60">
                  Payment is secure and encrypted. Your booking will be confirmed after successful payment.
                </div>
              </div>
            </div>

            <SAPaymentGateway
              amount={pricing.total}
              onPaymentSuccess={(_paymentId, method) => {
                setPaymentMethod(method);
                handleStepComplete('payment');
              }}
              onPaymentError={onError}
            />
          </div>
        );

      case 2: // Confirmation
        return (
          <div className="text-center space-y-6">
            <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-8">
              <Icon name="CheckCircle" size="lg" className="text-green-400 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-green-300 mb-2">Booking Confirmed!</h3>
              <p className="text-green-400/70">
                Your booking has been successfully created and payment processed.
              </p>
            </div>
            
            <div className="bg-white/10 rounded-lg p-6 border border-white/20">
              <h4 className="text-white font-medium mb-3">What's Next?</h4>
              <ul className="text-white/70 text-sm space-y-2 text-left">
                <li>• You'll receive a confirmation email with booking details</li>
                <li>• The host will be notified of your booking request</li>
                <li>• You can track your booking status in your dashboard</li>
                <li>• Contact the host directly for pickup arrangements</li>
                <li>• Enjoy your rental experience!</li>
              </ul>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-gray-900/80 backdrop-blur-sm border-b border-white/10 p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-white">Complete Booking</h2>
              <p className="text-white/70 text-sm">{vehicle.make} {vehicle.model}</p>
            </div>
            <button
              onClick={onClose}
              className="text-white/60 hover:text-white transition-colors"
            >
              <Icon name="X" size="lg" />
            </button>
          </div>
          
          {/* Progress Steps */}
          <div className="mt-6 flex items-center space-x-4">
            {currentSteps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  step.completed 
                    ? 'bg-green-500 text-white' 
                    : step.current 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-gray-600 text-gray-300'
                }`}>
                  {step.completed ? '✓' : index + 1}
                </div>
                <div className="ml-3">
                  <div className={`text-sm font-medium ${
                    step.current ? 'text-white' : 'text-white/60'
                  }`}>
                    {step.title}
                  </div>
                  <div className="text-xs text-white/50">
                    {step.description}
                  </div>
                </div>
                {index < currentSteps.length - 1 && (
                  <div className="w-8 h-px bg-white/20 mx-4" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {renderStepContent()}
        </div>

        {/* Footer */}
        {currentStep < 2 && (
          <div className="sticky bottom-0 bg-gray-900/80 backdrop-blur-sm border-t border-white/10 p-6">
            <div className="flex justify-between">
              <button
                onClick={onClose}
                className="px-6 py-2 text-white/70 hover:text-white transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => handleStepComplete(currentSteps[currentStep].id)}
                disabled={loading}
                className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 disabled:bg-gray-600 disabled:cursor-not-allowed transition-colors"
              >
                {loading ? 'Processing...' : currentStep === 1 ? 'Complete Payment' : 'Continue'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UnifiedCheckout;
