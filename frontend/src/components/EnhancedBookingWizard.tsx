import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { toast } from 'react-hot-toast';
import { 
  Calendar, 
  CreditCard, 
  Camera, 
  CheckCircle, 
  ArrowRight, 
  ArrowLeft,
  Shield,
  DollarSign,
  User,
  CheckCircle2,
  XCircle,
  Loader2
} from 'lucide-react';
import GlassCard from './GlassCard';
import GlassButton from './GlassButton';
import GlassInput from './GlassInput';
import AuthModal from './AuthModal';
import OptimizedImage from './OptimizedImage';

interface Vehicle {
  id: number;
  make: string;
  model: string;
  year: number;
  pricePerDay: number;
  images: string[];
  host: {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
  };
}

interface BookingData {
  vehicleId: number;
  startDate: string;
  endDate: string;
  totalPrice: number;
  basePrice: number;
  insuranceFee: number;
  serviceFee: number;
  deposit: number;
  days: number;
  vehicle: Vehicle;
}

interface BookingWizardProps {
  vehicle: Vehicle;
  startDate: string;
  endDate: string;
  isOpen: boolean;
  onClose: () => void;
  onBookingSuccess: (booking: any) => void;
}

interface StepProps {
  onNext: () => void;
  onPrev: () => void;
  onComplete: (data: any) => void;
  data: any;
  isLoading: boolean;
}

const steps = [
  { id: 1, title: 'Vehicle & Dates', icon: Calendar },
  { id: 2, title: 'Pricing', icon: DollarSign },
  { id: 3, title: 'Verification', icon: Camera },
  { id: 4, title: 'Details', icon: User },
  { id: 5, title: 'Payment', icon: CreditCard },
  { id: 6, title: 'Confirmation', icon: CheckCircle }
];

const EnhancedBookingWizard: React.FC<BookingWizardProps> = ({
  vehicle,
  startDate,
  endDate,
  isOpen,
  onClose,
  onBookingSuccess
}) => {
  const { user } = useAuth();
  // const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [bookingData, setBookingData] = useState<BookingData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [_verificationFiles, setVerificationFiles] = useState<{
    selfie?: File;
    idDocument?: File;
    driverLicense?: File;
  }>({});
  const [verificationStatus, setVerificationStatus] = useState<{
    selfieVerified: boolean;
    idVerified: boolean;
    licenseVerified: boolean;
  }>({
    selfieVerified: false,
    idVerified: false,
    licenseVerified: false
  });

  // Step 1: Vehicle & Dates
  const VehicleDatesStep: React.FC<StepProps> = ({ onNext, isLoading }) => {
    const [selectedStartDate, setSelectedStartDate] = useState(startDate);
    const [selectedEndDate, setSelectedEndDate] = useState(endDate);

    const handleNext = async () => {
      if (!user) {
        setShowAuthModal(true);
        return;
      }

      setIsLoading(true);
      try {
        const response = await fetch('http://localhost:5001/api/bookings/initiate', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${await user?.getIdToken()}`
          },
          body: JSON.stringify({
            vehicleId: vehicle.id,
            startDate: selectedStartDate,
            endDate: selectedEndDate
          })
        });

        const result = await response.json();
        if (result.success) {
          setBookingData(result.data);
          onNext();
        } else {
          toast.error(result.error || 'Failed to initiate booking');
        }
      } catch (error) {
        toast.error('Failed to initiate booking');
      } finally {
        setIsLoading(false);
      }
    };

    return (
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        className="space-y-6"
      >
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-2">Vehicle & Rental Period</h2>
          <p className="text-gray-300">Select your rental dates</p>
        </div>

        <GlassCard className="p-6">
          <div className="flex items-center space-x-4 mb-6">
            <OptimizedImage
              src={vehicle.images[0]}
              alt={`${vehicle.make} ${vehicle.model}`}
              className="w-20 h-20 rounded-lg object-cover"
            />
            <div>
              <h3 className="text-xl font-semibold text-white">
                {vehicle.make} {vehicle.model} ({vehicle.year})
              </h3>
              <p className="text-gray-300">R{vehicle.pricePerDay}/day</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Start Date
              </label>
              <GlassInput
                type="date"
                value={selectedStartDate}
                onChange={(value) => setSelectedStartDate(value)}
                min={new Date().toISOString().split('T')[0]}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                End Date
              </label>
              <GlassInput
                type="date"
                value={selectedEndDate}
                onChange={(value) => setSelectedEndDate(value)}
                min={selectedStartDate}
              />
            </div>
          </div>
        </GlassCard>

        <div className="flex justify-end">
          <GlassButton
            onClick={handleNext}
            disabled={!selectedStartDate || !selectedEndDate || isLoading}
            className="flex items-center space-x-2"
          >
            {isLoading ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <>
                <span>Continue</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </GlassButton>
        </div>
      </motion.div>
    );
  };

  // Step 2: Pricing Breakdown
  const PricingStep: React.FC<StepProps> = ({ onNext, onPrev }) => {
    if (!bookingData) return null;

    return (
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        className="space-y-6"
      >
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-2">Pricing Breakdown</h2>
          <p className="text-gray-300">Review your rental costs</p>
        </div>

        <GlassCard className="p-6">
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-300">Base rental ({bookingData.days} days)</span>
              <span className="text-white">R{bookingData.basePrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Insurance (10%)</span>
              <span className="text-white">R{bookingData.insuranceFee.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Service fee (5%)</span>
              <span className="text-white">R{bookingData.serviceFee.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Security deposit (20%)</span>
              <span className="text-white">R{bookingData.deposit.toFixed(2)}</span>
            </div>
            <hr className="border-gray-600" />
            <div className="flex justify-between text-lg font-semibold">
              <span className="text-white">Total</span>
              <span className="text-green-400">R{bookingData.totalPrice.toFixed(2)}</span>
            </div>
          </div>
        </GlassCard>

        <div className="flex justify-between">
          <GlassButton
            onClick={onPrev}
            variant="outline"
            className="flex items-center space-x-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </GlassButton>
          <GlassButton
            onClick={onNext}
            className="flex items-center space-x-2"
          >
            <span>Continue</span>
            <ArrowRight className="w-4 h-4" />
          </GlassButton>
        </div>
      </motion.div>
    );
  };

  // Step 3: Verification
  const VerificationStep: React.FC<StepProps> = ({ onNext, onPrev }) => {
    const [isUploading, setIsUploading] = useState(false);
    const fileInputRefs = {
      selfie: useRef<HTMLInputElement>(null),
      idDocument: useRef<HTMLInputElement>(null),
      driverLicense: useRef<HTMLInputElement>(null)
    };

    const handleFileUpload = async (type: 'selfie' | 'idDocument' | 'driverLicense', file: File) => {
      setIsUploading(true);
      try {
        const formData = new FormData();
        formData.append(type, file);
        formData.append('bookingId', bookingData?.vehicleId.toString() || '');

        const response = await fetch('http://localhost:5001/api/bookings/upload-verification', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${await user?.getIdToken()}`
          },
          body: formData
        });

        const result = await response.json();
        if (result.success) {
          setVerificationFiles(prev => ({ ...prev, [type]: file }));
          setVerificationStatus(prev => ({
            ...prev,
            [type === 'selfie' ? 'selfieVerified' : type === 'idDocument' ? 'idVerified' : 'licenseVerified']: true
          }));
          toast.success(`${type} uploaded successfully`);
        } else {
          toast.error(result.error || 'Upload failed');
        }
      } catch (error) {
        toast.error('Upload failed');
      } finally {
        setIsUploading(false);
      }
    };

    const handleFileChange = (type: 'selfie' | 'idDocument' | 'driverLicense', event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (file) {
        handleFileUpload(type, file);
      }
    };

    const canProceed = verificationStatus.selfieVerified && verificationStatus.idVerified;

    return (
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        className="space-y-6"
      >
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-2">Identity Verification</h2>
          <p className="text-gray-300">Upload your selfie and ID documents for verification</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Selfie Upload */}
          <GlassCard className="p-6">
            <div className="text-center">
              <Camera className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Selfie with ID</h3>
              <p className="text-gray-300 text-sm mb-4">
                Take a clear selfie holding your ID document
              </p>
              
              {verificationStatus.selfieVerified ? (
                <div className="flex items-center justify-center space-x-2 text-green-400">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Verified</span>
                </div>
              ) : (
                <GlassButton
                  onClick={() => fileInputRefs.selfie.current?.click()}
                  disabled={isUploading}
                  className="w-full"
                >
                  {isUploading ? 'Uploading...' : 'Upload Selfie'}
                </GlassButton>
              )}
              
              <input
                ref={fileInputRefs.selfie}
                type="file"
                accept="image/*"
                onChange={(e) => handleFileChange('selfie', e)}
                className="hidden"
              />
            </div>
          </GlassCard>

          {/* ID Document Upload */}
          <GlassCard className="p-6">
            <div className="text-center">
              <Shield className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">ID Document</h3>
              <p className="text-gray-300 text-sm mb-4">
                Upload a clear photo of your ID document
              </p>
              
              {verificationStatus.idVerified ? (
                <div className="flex items-center justify-center space-x-2 text-green-400">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Verified</span>
                </div>
              ) : (
                <GlassButton
                  onClick={() => fileInputRefs.idDocument.current?.click()}
                  disabled={isUploading}
                  className="w-full"
                >
                  {isUploading ? 'Uploading...' : 'Upload ID'}
                </GlassButton>
              )}
              
              <input
                ref={fileInputRefs.idDocument}
                type="file"
                accept="image/*"
                onChange={(e) => handleFileChange('idDocument', e)}
                className="hidden"
              />
            </div>
          </GlassCard>
        </div>

        <div className="flex justify-between">
          <GlassButton
            onClick={onPrev}
            variant="outline"
            className="flex items-center space-x-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </GlassButton>
          <GlassButton
            onClick={onNext}
            disabled={!canProceed}
            className="flex items-center space-x-2"
          >
            <span>Continue</span>
            <ArrowRight className="w-4 h-4" />
          </GlassButton>
        </div>
      </motion.div>
    );
  };

  // Step 4: Contact Details
  const ContactDetailsStep: React.FC<StepProps> = ({ onNext, onPrev }) => {
    const [formData, setFormData] = useState({
      pickupLocation: '',
      returnLocation: '',
      renterPhone: '',
      emergencyContactName: '',
      emergencyContactPhone: '',
      specialRequests: ''
    });

    const handleSubmit = () => {
      if (!formData.pickupLocation || !formData.returnLocation || !formData.renterPhone || 
          !formData.emergencyContactName || !formData.emergencyContactPhone) {
        toast.error('Please fill in all required fields');
        return;
      }
      onNext();
    };

    return (
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        className="space-y-6"
      >
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-2">Contact & Location Details</h2>
          <p className="text-gray-300">Provide your contact information and pickup/return locations</p>
        </div>

        <GlassCard className="p-6">
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Pickup Location *
                </label>
                <GlassInput
                  value={formData.pickupLocation}
                  onChange={(value) => setFormData(prev => ({ ...prev, pickupLocation: value }))}
                  placeholder="Enter pickup address"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Return Location *
                </label>
                <GlassInput
                  value={formData.returnLocation}
                  onChange={(value) => setFormData(prev => ({ ...prev, returnLocation: value }))}
                  placeholder="Enter return address"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Your Phone Number *
              </label>
              <GlassInput
                value={formData.renterPhone}
                onChange={(value) => setFormData(prev => ({ ...prev, renterPhone: value }))}
                placeholder="+27 XX XXX XXXX"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Emergency Contact Name *
                </label>
                <GlassInput
                  value={formData.emergencyContactName}
                  onChange={(value) => setFormData(prev => ({ ...prev, emergencyContactName: value }))}
                  placeholder="Full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Emergency Contact Phone *
                </label>
                <GlassInput
                  value={formData.emergencyContactPhone}
                  onChange={(value) => setFormData(prev => ({ ...prev, emergencyContactPhone: value }))}
                  placeholder="+27 XX XXX XXXX"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Special Requests
              </label>
              <textarea
                value={formData.specialRequests}
                onChange={(e) => setFormData(prev => ({ ...prev, specialRequests: e.target.value }))}
                placeholder="Any special requests or notes..."
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                rows={3}
              />
            </div>
          </div>
        </GlassCard>

        <div className="flex justify-between">
          <GlassButton
            onClick={onPrev}
            variant="outline"
            className="flex items-center space-x-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </GlassButton>
          <GlassButton
            onClick={handleSubmit}
            className="flex items-center space-x-2"
          >
            <span>Continue</span>
            <ArrowRight className="w-4 h-4" />
          </GlassButton>
        </div>
      </motion.div>
    );
  };

  // Step 5: Payment
  const PaymentStep: React.FC<StepProps> = ({ onNext, onPrev }) => {
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<'stripe' | 'payfast'>('stripe');
    const [isProcessing, setIsProcessing] = useState(false);

    const handlePayment = async () => {
      setIsProcessing(true);
      try {
        const response = await fetch('http://localhost:5001/api/bookings/confirm', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${await user?.getIdToken()}`
          },
          body: JSON.stringify({
            bookingId: bookingData?.vehicleId,
            pickupLocation: 'Test Location',
            returnLocation: 'Test Return Location',
            renterPhone: '+27123456789',
            emergencyContactName: 'Test Contact',
            emergencyContactPhone: '+27123456789',
            paymentMethod: selectedPaymentMethod
          })
        });

        const result = await response.json();
        if (result.success) {
          toast.success('Payment processed successfully');
          onNext();
        } else {
          toast.error(result.error || 'Payment failed');
        }
      } catch (error) {
        toast.error('Payment failed');
      } finally {
        setIsProcessing(false);
      }
    };

    return (
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        className="space-y-6"
      >
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-2">Payment</h2>
          <p className="text-gray-300">Choose your payment method</p>
        </div>

        <GlassCard className="p-6">
          <div className="space-y-4">
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold text-white mb-2">Total Amount</h3>
              <p className="text-3xl font-bold text-green-400">
                R{bookingData?.totalPrice.toFixed(2)}
              </p>
            </div>

            <div className="space-y-3">
              <label className="flex items-center space-x-3 p-4 bg-white/5 rounded-lg cursor-pointer hover:bg-white/10 transition-colors">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="stripe"
                  checked={selectedPaymentMethod === 'stripe'}
                  onChange={(e) => setSelectedPaymentMethod(e.target.value as 'stripe')}
                  className="w-4 h-4 text-blue-600"
                />
                <CreditCard className="w-5 h-5 text-blue-400" />
                <span className="text-white">Credit/Debit Card (Stripe)</span>
              </label>

              <label className="flex items-center space-x-3 p-4 bg-white/5 rounded-lg cursor-pointer hover:bg-white/10 transition-colors">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="payfast"
                  checked={selectedPaymentMethod === 'payfast'}
                  onChange={(e) => setSelectedPaymentMethod(e.target.value as 'payfast')}
                  className="w-4 h-4 text-blue-600"
                />
                <CreditCard className="w-5 h-5 text-green-400" />
                <span className="text-white">PayFast (South Africa)</span>
              </label>
            </div>
          </div>
        </GlassCard>

        <div className="flex justify-between">
          <GlassButton
            onClick={onPrev}
            variant="outline"
            className="flex items-center space-x-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </GlassButton>
          <GlassButton
            onClick={handlePayment}
            disabled={isProcessing}
            className="flex items-center space-x-2"
          >
            {isProcessing ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Processing...</span>
              </>
            ) : (
              <>
                <span>Pay Now</span>
                <CreditCard className="w-4 h-4" />
              </>
            )}
          </GlassButton>
        </div>
      </motion.div>
    );
  };

  // Step 6: Confirmation
  const ConfirmationStep: React.FC<StepProps> = ({ onComplete }) => {
    return (
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        className="space-y-6"
      >
        <div className="text-center">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Booking Confirmed!</h2>
          <p className="text-gray-300">Your booking has been submitted and is pending host approval</p>
        </div>

        <GlassCard className="p-6">
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-300">Booking ID</span>
              <span className="text-white font-mono">#{bookingData?.vehicleId}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Vehicle</span>
              <span className="text-white">{vehicle.make} {vehicle.model}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Rental Period</span>
              <span className="text-white">{bookingData?.days} days</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Total Amount</span>
              <span className="text-green-400 font-semibold">R{bookingData?.totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Status</span>
              <span className="text-yellow-400">Pending Host Approval</span>
            </div>
          </div>
        </GlassCard>

        <div className="text-center">
          <p className="text-gray-300 mb-4">
            You will receive an email confirmation and the host will be notified of your booking request.
          </p>
          <GlassButton
            onClick={() => {
              onComplete({ booking: bookingData });
              onClose();
            }}
            className="w-full"
          >
            View Booking Details
          </GlassButton>
        </div>
      </motion.div>
    );
  };

  const renderStep = () => {
    const stepProps = {
      onNext: () => setCurrentStep(prev => Math.min(prev + 1, 6)),
      onPrev: () => setCurrentStep(prev => Math.max(prev - 1, 1)),
      onComplete: (data: any) => {
        onBookingSuccess(data);
        onClose();
      },
      data: bookingData,
      isLoading
    };

    switch (currentStep) {
      case 1:
        return <VehicleDatesStep {...stepProps} />;
      case 2:
        return <PricingStep {...stepProps} />;
      case 3:
        return <VerificationStep {...stepProps} />;
      case 4:
        return <ContactDetailsStep {...stepProps} />;
      case 5:
        return <PaymentStep {...stepProps} />;
      case 6:
        return <ConfirmationStep {...stepProps} />;
      default:
        return null;
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-gray-900/90 backdrop-blur-xl rounded-2xl border border-white/20 w-full max-w-4xl max-h-[90vh] overflow-hidden"
      >
        {/* Header */}
        <div className="p-6 border-b border-white/10">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-white">Book Vehicle</h1>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <XCircle className="w-6 h-6 text-gray-400" />
            </button>
          </div>
          
          {/* Progress Bar */}
          <div className="mt-6">
            <div className="flex items-center justify-between mb-2">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    currentStep >= step.id 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-gray-600 text-gray-400'
                  }`}>
                    {currentStep > step.id ? (
                      <CheckCircle className="w-4 h-4" />
                    ) : (
                      <span className="text-sm font-semibold">{step.id}</span>
                    )}
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`w-12 h-0.5 mx-2 ${
                      currentStep > step.id ? 'bg-blue-500' : 'bg-gray-600'
                    }`} />
                  )}
                </div>
              ))}
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-300">
                Step {currentStep} of {steps.length}: {steps[currentStep - 1].title}
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
          <AnimatePresence mode="wait">
            {renderStep()}
          </AnimatePresence>
        </div>

        {/* Auth Modal */}
        <AuthModal
          isOpen={showAuthModal}
          onClose={() => setShowAuthModal(false)}
        />
      </motion.div>
    </div>
  );
};

export default EnhancedBookingWizard;
