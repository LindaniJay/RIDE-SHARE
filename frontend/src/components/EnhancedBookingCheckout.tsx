import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { bookingService } from '../services/bookingService';
import { paymentService } from '../services/paymentService';
import Icon from './Icon';
import { SAPaymentGateway } from './SAPaymentGateway';

interface EnhancedBookingCheckoutProps {
  vehicle: any;
  bookingData: {
    startDate: string;
    endDate: string;
    totalDays: number;
    totalPrice: number;
    specialRequests?: string;
    addOns?: any[];
  };
  onSuccess: (booking: any) => void;
  onError: (error: string) => void;
  onClose: () => void;
}

interface CheckoutStep {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  current: boolean;
}

const EnhancedBookingCheckout: React.FC<EnhancedBookingCheckoutProps> = ({
  vehicle,
  bookingData,
  onSuccess,
  onError,
  onClose
}) => {
  const { user } = useAuth();
  const [currentStep, setCurrentStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});
  const [paymentMethod, setPaymentMethod] = useState<string>('');
  const [loyaltyPoints, setLoyaltyPoints] = useState(0);
  const [appliedDiscount, setAppliedDiscount] = useState(0);

  const steps: CheckoutStep[] = [
    {
      id: 'details',
      title: 'Booking Details',
      description: 'Review your booking information',
      completed: false,
      current: true
    },
    {
      id: 'validation',
      title: 'Verification',
      description: 'Verify your identity and license',
      completed: false,
      current: false
    },
    {
      id: 'payment',
      title: 'Payment',
      description: 'Choose payment method and complete payment',
      completed: false,
      current: false
    },
    {
      id: 'confirmation',
      title: 'Confirmation',
      description: 'Booking confirmed and details sent',
      completed: false,
      current: false
    }
  ];

  const [currentSteps, setCurrentSteps] = useState(steps);

  useEffect(() => {
    // Load user's loyalty points
    if (user) {
      loadLoyaltyPoints();
    }
  }, [user]);

  const loadLoyaltyPoints = async () => {
    try {
      const points = await paymentService.getLoyaltyPoints(user?.id || '');
      setLoyaltyPoints(points);
    } catch (error) {
      console.error('Error loading loyalty points:', error);
    }
  };

  const validateBookingDetails = (): boolean => {
    const errors: Record<string, string> = {};

    if (!bookingData.startDate) {
      errors.startDate = 'Start date is required';
    }
    if (!bookingData.endDate) {
      errors.endDate = 'End date is required';
    }
    if (bookingData.totalDays < 1) {
      errors.totalDays = 'Minimum 1 day rental required';
    }
    if (bookingData.totalPrice <= 0) {
      errors.totalPrice = 'Invalid pricing';
    }

    // Check if user is old enough for vehicle category
    if (vehicle.category === 'luxury' && user && user.age < 25) {
      errors.age = 'Must be 25+ for luxury vehicles';
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const validateIdentity = (): boolean => {
    const errors: Record<string, string> = {};

    if (!user?.driversLicense) {
      errors.license = 'Valid driver\'s license required';
    }
    if (!user?.idVerified) {
      errors.identity = 'Identity verification required';
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const applyLoyaltyDiscount = () => {
    if (loyaltyPoints >= 100) {
      const discount = Math.min(loyaltyPoints * 0.01, bookingData.totalPrice * 0.1); // 1 point = R0.01, max 10% discount
      setAppliedDiscount(discount);
    }
  };

  const calculateTotal = () => {
    const subtotal = bookingData.totalPrice;
    const serviceFee = subtotal * 0.1; // 10% service fee
    const insuranceFee = subtotal * 0.05; // 5% insurance fee
    const addOnsTotal = bookingData.addOns?.reduce((sum, addon) => sum + addon.price, 0) || 0;
    const total = subtotal + serviceFee + insuranceFee + addOnsTotal - appliedDiscount;
    
    return {
      subtotal,
      serviceFee,
      insuranceFee,
      addOnsTotal,
      discount: appliedDiscount,
      total: Math.max(0, total)
    };
  };

  const handleStepComplete = async (stepId: string) => {
    setLoading(true);
    
    try {
      switch (stepId) {
        case 'details':
          if (!validateBookingDetails()) {
            throw new Error('Please fix validation errors');
          }
          break;
          
        case 'validation':
          if (!validateIdentity()) {
            throw new Error('Identity verification required');
          }
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
    const pricing = calculateTotal();
    
    const paymentData = {
      bookingId: '', // Will be set after booking creation
      amount: pricing.total,
      paymentMethod,
      currency: 'ZAR',
      metadata: {
        vehicleId: vehicle.id,
        startDate: bookingData.startDate,
        endDate: bookingData.endDate,
        loyaltyPointsUsed: appliedDiscount > 0 ? Math.floor(appliedDiscount / 0.01) : 0
      }
    };

    // Create booking first
    const booking = await bookingService.createBooking({
      vehicleId: vehicle.id,
      startDate: bookingData.startDate,
      endDate: bookingData.endDate,
      totalDays: bookingData.totalDays,
      totalPrice: pricing.total,
      specialRequests: bookingData.specialRequests,
      renterId: user?.id || '',
      renterName: `${user?.firstName} ${user?.lastName}`,
      hostId: vehicle.host?.id || '',
      hostName: vehicle.host?.name || '',
      vehicleTitle: `${vehicle.make} ${vehicle.model}`,
      vehicleImage: vehicle.images[0] || '/images/default-vehicle.jpg',
      vehicleMake: vehicle.make,
      vehicleModel: vehicle.model
    });

    // Process payment
    await paymentService.processPayment({
      ...paymentData,
      bookingId: booking.id
    });

    onSuccess(booking);
  };

  const renderStepContent = () => {
    const pricing = calculateTotal();

    switch (currentStep) {
      case 0: // Details
        return (
          <div className="space-y-6">
            <div className="bg-white/10 rounded-lg p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4">Booking Summary</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-white/70">Vehicle:</span>
                  <span className="text-white">{vehicle.make} {vehicle.model}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Duration:</span>
                  <span className="text-white">{bookingData.totalDays} days</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Dates:</span>
                  <span className="text-white">{bookingData.startDate} - {bookingData.endDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Base Price:</span>
                  <span className="text-white">R{bookingData.totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Service Fee (10%):</span>
                  <span className="text-white">R{pricing.serviceFee.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Insurance (5%):</span>
                  <span className="text-white">R{pricing.insuranceFee.toFixed(2)}</span>
                </div>
                {appliedDiscount > 0 && (
                  <div className="flex justify-between text-green-400">
                    <span>Loyalty Discount:</span>
                    <span>-R{appliedDiscount.toFixed(2)}</span>
                  </div>
                )}
                <div className="border-t border-white/20 pt-3">
                  <div className="flex justify-between text-lg font-semibold">
                    <span className="text-white">Total:</span>
                    <span className="text-white">R{pricing.total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>

            {loyaltyPoints >= 100 && appliedDiscount === 0 && (
              <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-green-300 font-medium">Loyalty Points Available</h4>
                    <p className="text-green-400/70 text-sm">{loyaltyPoints} points (R{loyaltyPoints * 0.01} discount)</p>
                  </div>
                  <button
                    onClick={applyLoyaltyDiscount}
                    className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
                  >
                    Apply Discount
                  </button>
                </div>
              </div>
            )}

            {Object.keys(validationErrors).length > 0 && (
              <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-4">
                <h4 className="text-red-300 font-medium mb-2">Please fix the following errors:</h4>
                <ul className="text-red-400/70 text-sm space-y-1">
                  {Object.entries(validationErrors).map(([key, error]) => (
                    <li key={key}>• {error}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        );

      case 1: // Validation
        return (
          <div className="space-y-6">
            <div className="bg-white/10 rounded-lg p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4">Identity Verification</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-white/70">Driver's License:</span>
                  <span className={`${user?.driversLicense ? 'text-green-400' : 'text-red-400'}`}>
                    {user?.driversLicense ? '✓ Verified' : '✗ Required'}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/70">Identity Document:</span>
                  <span className={`${user?.idVerified ? 'text-green-400' : 'text-red-400'}`}>
                    {user?.idVerified ? '✓ Verified' : '✗ Required'}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/70">Age Verification:</span>
                  <span className={`${user && user.age >= 18 ? 'text-green-400' : 'text-red-400'}`}>
                    {user && user.age >= 18 ? '✓ Verified' : '✗ Required'}
                  </span>
                </div>
              </div>
            </div>

            {(!user?.driversLicense || !user?.idVerified) && (
              <div className="bg-yellow-500/20 border border-yellow-500/30 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <Icon name="AlertTriangle" size="sm" className="text-yellow-400 mt-1" />
                  <div>
                    <h4 className="text-yellow-300 font-medium">Verification Required</h4>
                    <p className="text-yellow-400/70 text-sm mt-1">
                      Please complete your identity verification in your profile settings before proceeding.
                    </p>
                    <button className="mt-2 bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition-colors">
                      Complete Verification
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        );

      case 2: // Payment
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
                  Payment is secure and encrypted. You'll only be charged after the host confirms your booking.
                </div>
              </div>
            </div>

            <SAPaymentGateway
              amount={pricing.total}
              onPaymentSuccess={(paymentId, method) => {
                setPaymentMethod(method);
                handleStepComplete('payment');
              }}
              onPaymentError={onError}
            />
          </div>
        );

      case 3: // Confirmation
        return (
          <div className="text-center space-y-6">
            <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-8">
              <Icon name="CheckCircle" size="lg" className="text-green-400 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-green-300 mb-2">Booking Confirmed!</h3>
              <p className="text-green-400/70">
                Your booking has been confirmed and details have been sent to your email.
              </p>
            </div>
            
            <div className="bg-white/10 rounded-lg p-6 border border-white/20">
              <h4 className="text-white font-medium mb-3">What's Next?</h4>
              <ul className="text-white/70 text-sm space-y-2 text-left">
                <li>• You'll receive a confirmation email with booking details</li>
                <li>• The host will be notified of your booking request</li>
                <li>• You can track your booking status in your dashboard</li>
                <li>• Pickup instructions will be sent 24 hours before your rental</li>
              </ul>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-gray-900/80 backdrop-blur-sm border-b border-white/10 p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-white">Complete Your Booking</h2>
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
        {currentStep < 3 && (
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
                {loading ? 'Processing...' : currentStep === 2 ? 'Complete Payment' : 'Continue'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EnhancedBookingCheckout;
