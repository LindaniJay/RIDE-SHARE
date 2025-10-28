import React, { useState, useEffect } from 'react';
import { 
  Car, 
  Calendar, 
  CreditCard, 
  Shield, 
  CheckCircle, 
  AlertCircle, 
  User, 
  Phone, 
  Mail,
  Clock,
  FileText,
  Lock,
  Smartphone,
  Banknote
} from 'lucide-react';
import SelfieVerification from './SelfieVerification';
import { Vehicle, User as UserType } from '../types';

export interface BookingData {
  vehicleId: string;
  startDate: string;
  endDate: string;
  totalDays: number;
  totalPrice: number;
  specialRequests?: string;
  extras?: {
    insurance: boolean;
    gps: boolean;
    childSeat: boolean;
  };
}

export interface CheckoutStep {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  completed: boolean;
  current: boolean;
  required: boolean;
}

export interface PaymentMethod {
  id: string;
  name: string;
  type: 'card' | 'mobile' | 'wallet' | 'bank_transfer';
  icon: React.ComponentType<any>;
  enabled: boolean;
  processingFee: number;
}

export interface SecurityCheck {
  id: string;
  name: string;
  status: 'pending' | 'passed' | 'failed';
  required: boolean;
}

interface EnhancedRenterCheckoutProps {
  vehicle: Vehicle;
  bookingData: BookingData;
  user: UserType;
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (booking: any) => void;
  onError: (error: string) => void;
}

const EnhancedRenterCheckout: React.FC<EnhancedRenterCheckoutProps> = ({
  vehicle,
  bookingData,
  user,
  isOpen,
  onClose,
  onSuccess,
  onError
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [bookingId, setBookingId] = useState<string | null>(null);
  const [selfieVerified, setSelfieVerified] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod | null>(null);
  const [securityChecks, setSecurityChecks] = useState<SecurityCheck[]>([]);
  const [sessionValid] = useState(true);
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [otpCode, setOtpCode] = useState('');

  // Checkout steps
  const [steps, setSteps] = useState<CheckoutStep[]>([
    {
      id: 'review',
      title: 'Booking Summary',
      description: 'Review your booking details',
      icon: FileText,
      completed: false,
      current: true,
      required: true
    },
    {
      id: 'verification',
      title: 'Identity Verification',
      description: 'Complete selfie verification',
      icon: Shield,
      completed: false,
      current: false,
      required: true
    },
    {
      id: 'payment',
      title: 'Payment',
      description: 'Choose payment method',
      icon: CreditCard,
      completed: false,
      current: false,
      required: true
    },
    {
      id: 'security',
      title: 'Security Checks',
      description: 'Final security verification',
      icon: Lock,
      completed: false,
      current: false,
      required: true
    },
    {
      id: 'confirmation',
      title: 'Confirmation',
      description: 'Booking confirmed',
      icon: CheckCircle,
      completed: false,
      current: false,
      required: true
    }
  ]);

  // Payment methods
  const paymentMethods: PaymentMethod[] = [
    {
      id: 'card',
      name: 'Credit/Debit Card',
      type: 'card',
      icon: CreditCard,
      enabled: true,
      processingFee: 0.029
    },
    {
      id: 'mobile',
      name: 'Mobile Payment',
      type: 'mobile',
      icon: Smartphone,
      enabled: true,
      processingFee: 0.025
    },
    {
      id: 'wallet',
      name: 'Digital Wallet',
      type: 'wallet',
      icon: Banknote,
      enabled: true,
      processingFee: 0.015
    },
    {
      id: 'bank_transfer',
      name: 'Bank Transfer',
      type: 'bank_transfer',
      icon: Banknote,
      enabled: true,
      processingFee: 0
    }
  ];

  // Initialize security checks
  useEffect(() => {
    setSecurityChecks([
      {
        id: 'session',
        name: 'Session Validation',
        status: 'pending',
        required: true
      },
      {
        id: 'email_verification',
        name: 'Email Verification',
        status: user.isEmailVerified ? 'passed' : 'pending',
        required: true
      },
      {
        id: 'phone_verification',
        name: 'Phone Verification',
        status: 'pending',
        required: true
      },
      {
        id: 'device_verification',
        name: 'Device Verification',
        status: 'pending',
        required: false
      },
      {
        id: 'fraud_check',
        name: 'Fraud Prevention',
        status: 'pending',
        required: true
      }
    ]);
  }, [user]);

  // Calculate total with extras
  const calculateTotal = () => {
    let total = bookingData.totalPrice;
    
    if (bookingData.extras?.insurance) total += 50;
    if (bookingData.extras?.gps) total += 30;
    if (bookingData.extras?.childSeat) total += 25;
    
    const tax = total * 0.15; // 15% VAT
    const processingFee = paymentMethod ? total * paymentMethod.processingFee : 0;
    
    return {
      subtotal: total,
      extras: (bookingData.extras?.insurance ? 50 : 0) + 
              (bookingData.extras?.gps ? 30 : 0) + 
              (bookingData.extras?.childSeat ? 25 : 0),
      tax,
      processingFee,
      total: total + tax + processingFee
    };
  };

  // Handle step completion
  const handleStepComplete = async (stepId: string) => {
    setLoading(true);
    setError('');

    try {
      switch (stepId) {
        case 'review':
          await createBooking();
          break;
        case 'verification':
          // Selfie verification handled by SelfieVerification component
          break;
        case 'payment':
          await processPayment();
          break;
        case 'security':
          await performSecurityChecks();
          break;
        case 'confirmation':
          await finalizeBooking();
          break;
      }

      // Update step status
      const updatedSteps = steps.map((step, index) => ({
        ...step,
        completed: step.id === stepId,
        current: index === currentStep + 1
      }));
      setSteps(updatedSteps);
      setCurrentStep(prev => Math.min(prev + 1, steps.length - 1));

    } catch (error) {
      setError(error instanceof Error ? error.message : 'An error occurred');
      onError(error instanceof Error ? error.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  // Create booking
  const createBooking = async () => {
    const response = await fetch('/api/bookings/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('authToken')}`
      },
      body: JSON.stringify({
        vehicleId: vehicle.id,
        startDate: bookingData.startDate,
        endDate: bookingData.endDate,
        totalPrice: calculateTotal().total,
        specialRequests: bookingData.specialRequests,
        extras: bookingData.extras
      })
    });

    if (!response.ok) {
      throw new Error('Failed to create booking');
    }

    const data = await response.json();
    setBookingId(data.booking.id);
  };

  // Process payment
  const processPayment = async () => {
    if (!paymentMethod || !bookingId) {
      throw new Error('Payment method not selected');
    }

    const pricing = calculateTotal();
    
    const response = await fetch('/api/payments/process', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('authToken')}`
      },
      body: JSON.stringify({
        bookingId,
        amount: pricing.total,
        paymentMethod: paymentMethod.id,
        currency: 'ZAR'
      })
    });

    if (!response.ok) {
      throw new Error('Payment processing failed');
    }
  };

  // Perform security checks
  const performSecurityChecks = async () => {
    const updatedChecks = [...securityChecks];
    
    // Session validation
    updatedChecks[0].status = sessionValid ? 'passed' : 'failed';
    
    // Email verification
    updatedChecks[1].status = user.isEmailVerified ? 'passed' : 'failed';
    
    // Phone verification (simulate)
    updatedChecks[2].status = 'passed';
    
    // Device verification (simulate)
    updatedChecks[3].status = 'passed';
    
    // Fraud check (simulate)
    updatedChecks[4].status = 'passed';
    
    setSecurityChecks(updatedChecks);

    // Check if all required checks passed
    const failedChecks = updatedChecks.filter(check => 
      check.required && check.status === 'failed'
    );

    if (failedChecks.length > 0) {
      throw new Error(`Security checks failed: ${failedChecks.map(c => c.name).join(', ')}`);
    }
  };

  // Finalize booking
  const finalizeBooking = async () => {
    if (!bookingId) {
      throw new Error('Booking ID not found');
    }

    const response = await fetch(`/api/bookings/${bookingId}/confirm`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('authToken')}`
      }
    });

    if (!response.ok) {
      throw new Error('Failed to confirm booking');
    }

    const data = await response.json();
    onSuccess(data.booking);
  };

  // Handle selfie verification
  const handleSelfieVerification = (verified: boolean, _selfieData?: string) => {
    if (verified) {
      setSelfieVerified(true);
      handleStepComplete('verification');
    } else {
      setError('Selfie verification failed. Please try again.');
    }
  };

  // Send OTP
  const sendOTP = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/auth/send-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`
        },
        body: JSON.stringify({
          phone: user.phoneNumber,
          type: 'booking_verification'
        })
      });

      if (response.ok) {
        setOtpSent(true);
      } else {
        throw new Error('Failed to send OTP');
      }
    } catch (error) {
      setError('Failed to send OTP. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Verify OTP
  const verifyOTP = async () => {
    if (!otpCode) {
      setError('Please enter OTP code');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('/api/auth/verify-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`
        },
        body: JSON.stringify({
          phone: user.phoneNumber,
          code: otpCode
        })
      });

      if (response.ok) {
        setTwoFactorEnabled(true);
        setOtpSent(false);
        setOtpCode('');
      } else {
        throw new Error('Invalid OTP code');
      }
    } catch (error) {
      setError('Invalid OTP code. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Render step content
  const renderStepContent = () => {
    const currentStepData = steps[currentStep];
    const pricing = calculateTotal();

    switch (currentStepData.id) {
      case 'review':
        return (
          <div className="space-y-6">
            {/* Vehicle Summary */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                <Car className="w-5 h-5 mr-2" />
                Vehicle Details
              </h3>
              <div className="flex items-start space-x-4">
                <img
                  src={vehicle.images[0] || '/images/default-vehicle.jpg'}
                  alt={vehicle.make}
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h4 className="text-white font-medium">{vehicle.make} {vehicle.model}</h4>
                  <p className="text-white/70 text-sm">Year: {vehicle.year}</p>
                  <p className="text-white/70 text-sm">Type: {vehicle.type}</p>
                  <p className="text-white/70 text-sm">Location: {vehicle.location}</p>
                </div>
                <div className="text-right">
                  <p className="text-white font-semibold">R{vehicle.pricePerDay}/day</p>
                </div>
              </div>
            </div>

            {/* Booking Details */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                Booking Details
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-white/70 text-sm">Start Date</p>
                  <p className="text-white font-medium">{new Date(bookingData.startDate).toLocaleDateString()}</p>
                </div>
                <div>
                  <p className="text-white/70 text-sm">End Date</p>
                  <p className="text-white font-medium">{new Date(bookingData.endDate).toLocaleDateString()}</p>
                </div>
                <div>
                  <p className="text-white/70 text-sm">Duration</p>
                  <p className="text-white font-medium">{bookingData.totalDays} days</p>
                </div>
                <div>
                  <p className="text-white/70 text-sm">Base Rate</p>
                  <p className="text-white font-medium">R{bookingData.totalPrice}</p>
                </div>
              </div>
            </div>

            {/* Extras */}
            {bookingData.extras && (
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <h3 className="text-lg font-semibold text-white mb-4">Optional Extras</h3>
                <div className="space-y-2">
                  {bookingData.extras.insurance && (
                    <div className="flex justify-between">
                      <span className="text-white/70">Insurance Coverage</span>
                      <span className="text-white">R50</span>
                    </div>
                  )}
                  {bookingData.extras.gps && (
                    <div className="flex justify-between">
                      <span className="text-white/70">GPS Navigation</span>
                      <span className="text-white">R30</span>
                    </div>
                  )}
                  {bookingData.extras.childSeat && (
                    <div className="flex justify-between">
                      <span className="text-white/70">Child Safety Seat</span>
                      <span className="text-white">R25</span>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Pricing Summary */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <h3 className="text-lg font-semibold text-white mb-4">Pricing Summary</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-white/70">Subtotal</span>
                  <span className="text-white">R{pricing.subtotal.toFixed(2)}</span>
                </div>
                {pricing.extras > 0 && (
                  <div className="flex justify-between">
                    <span className="text-white/70">Extras</span>
                    <span className="text-white">R{pricing.extras.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-white/70">VAT (15%)</span>
                  <span className="text-white">R{pricing.tax.toFixed(2)}</span>
                </div>
                {pricing.processingFee > 0 && (
                  <div className="flex justify-between">
                    <span className="text-white/70">Processing Fee</span>
                    <span className="text-white">R{pricing.processingFee.toFixed(2)}</span>
                  </div>
                )}
                <div className="border-t border-white/20 pt-2 mt-2">
                  <div className="flex justify-between">
                    <span className="text-white font-semibold">Total</span>
                    <span className="text-white font-semibold">R{pricing.total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Renter Details */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                <User className="w-5 h-5 mr-2" />
                Renter Details
              </h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4 text-white/60" />
                  <span className="text-white">{user.firstName} {user.lastName}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-white/60" />
                  <span className="text-white">{user.email}</span>
                </div>
                {user.phoneNumber && (
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-white/60" />
                    <span className="text-white">{user.phoneNumber}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        );

      case 'verification':
        return (
          <SelfieVerification
            onVerificationComplete={handleSelfieVerification}
            onCancel={onClose}
            userProfile={{
              id: user.id,
              firstName: user.firstName,
              lastName: user.lastName,
              profileImage: user.profileImage
            }}
            isRequired={true}
          />
        );

      case 'payment':
        return (
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                <CreditCard className="w-5 h-5 mr-2" />
                Select Payment Method
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {paymentMethods.map((method) => (
                  <button
                    key={method.id}
                    onClick={() => setPaymentMethod(method)}
                    disabled={!method.enabled}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      paymentMethod?.id === method.id
                        ? 'border-blue-500 bg-blue-500/20'
                        : 'border-white/20 hover:border-white/40'
                    } ${!method.enabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                  >
                    <div className="flex items-center space-x-3">
                      <method.icon className="w-6 h-6 text-white" />
                      <div className="text-left">
                        <p className="text-white font-medium">{method.name}</p>
                        <p className="text-white/60 text-sm">
                          Fee: {method.processingFee > 0 ? `${(method.processingFee * 100).toFixed(1)}%` : 'Free'}
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Two-Factor Authentication */}
            {!twoFactorEnabled && (
              <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
                <h4 className="text-yellow-300 font-medium mb-2">Two-Factor Authentication</h4>
                <p className="text-yellow-200/80 text-sm mb-3">
                  For security, please verify your phone number with an OTP code.
                </p>
                {!otpSent ? (
                  <button
                    onClick={sendOTP}
                    disabled={loading}
                    className="px-4 py-2 bg-yellow-500/20 text-yellow-300 rounded-lg hover:bg-yellow-500/30 transition-colors"
                  >
                    Send OTP
                  </button>
                ) : (
                  <div className="space-y-3">
                    <input
                      type="text"
                      value={otpCode}
                      onChange={(e) => setOtpCode(e.target.value)}
                      placeholder="Enter OTP code"
                      className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-yellow-500/50"
                    />
                    <button
                      onClick={verifyOTP}
                      disabled={loading || !otpCode}
                      className="px-4 py-2 bg-yellow-500/20 text-yellow-300 rounded-lg hover:bg-yellow-500/30 transition-colors disabled:opacity-50"
                    >
                      Verify OTP
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        );

      case 'security':
        return (
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                <Lock className="w-5 h-5 mr-2" />
                Security Verification
              </h3>
              <div className="space-y-4">
                {securityChecks.map((check) => (
                  <div key={check.id} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                    <div className="flex items-center space-x-3">
                      {check.status === 'passed' ? (
                        <CheckCircle className="w-5 h-5 text-green-400" />
                      ) : check.status === 'failed' ? (
                        <AlertCircle className="w-5 h-5 text-red-400" />
                      ) : (
                        <Clock className="w-5 h-5 text-yellow-400" />
                      )}
                      <span className="text-white">{check.name}</span>
                      {check.required && (
                        <span className="text-red-400 text-xs">*</span>
                      )}
                    </div>
                    <span className={`text-sm ${
                      check.status === 'passed' ? 'text-green-400' :
                      check.status === 'failed' ? 'text-red-400' :
                      'text-yellow-400'
                    }`}>
                      {check.status === 'passed' ? 'Verified' :
                       check.status === 'failed' ? 'Failed' :
                       'Pending'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'confirmation':
        return (
          <div className="space-y-6">
            <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-6 text-center">
              <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-green-300 mb-2">Booking Confirmed!</h3>
              <p className="text-green-200/80">
                Your booking has been successfully confirmed. You will receive a confirmation email shortly.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <h3 className="text-lg font-semibold text-white mb-4">Booking Details</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-white/70">Booking Reference</span>
                  <span className="text-white font-mono">#{bookingId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Vehicle</span>
                  <span className="text-white">{vehicle.make} {vehicle.model}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Pickup Date</span>
                  <span className="text-white">{new Date(bookingData.startDate).toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Return Date</span>
                  <span className="text-white">{new Date(bookingData.endDate).toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Total Amount</span>
                  <span className="text-white font-semibold">R{calculateTotal().total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-gray-900 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-gray-900/95 backdrop-blur-md border-b border-white/20 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold text-white">Secure Checkout</h2>
            <button
              onClick={onClose}
              className="p-2 text-white/60 hover:text-white/80 transition-colors"
            >
              ×
            </button>
          </div>

          {/* Progress Steps */}
          <div className="flex items-center space-x-4">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className={`flex items-center space-x-2 px-3 py-2 rounded-lg ${
                  step.current ? 'bg-blue-500/20 text-blue-300' :
                  step.completed ? 'bg-green-500/20 text-green-300' :
                  'bg-white/10 text-white/60'
                }`}>
                  <step.icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{step.title}</span>
                </div>
                {index < steps.length - 1 && (
                  <div className="w-8 h-px bg-white/20 mx-2" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {error && (
            <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-4 mb-6">
              <div className="flex items-center space-x-2">
                <AlertCircle className="w-5 h-5 text-red-400" />
                <span className="text-red-300">{error}</span>
              </div>
            </div>
          )}

          {renderStepContent()}

          {/* Navigation */}
          <div className="flex justify-between mt-8">
            <button
              onClick={() => setCurrentStep(prev => Math.max(prev - 1, 0))}
              disabled={currentStep === 0}
              className="px-6 py-2 bg-gray-500/20 text-gray-300 rounded-lg hover:bg-gray-500/30 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>

            {currentStep < steps.length - 1 && (
              <button
                onClick={() => handleStepComplete(steps[currentStep].id)}
                disabled={loading || (steps[currentStep].id === 'verification' && !selfieVerified) || (steps[currentStep].id === 'payment' && !paymentMethod)}
                className="px-6 py-2 bg-blue-500/20 text-blue-300 rounded-lg hover:bg-blue-500/30 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Processing...' : 'Continue'}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedRenterCheckout;





