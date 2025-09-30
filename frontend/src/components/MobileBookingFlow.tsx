import React, { useState, useEffect, useRef } from 'react';
import { useAuth } from '../context/AuthContext';
import { Vehicle } from '../types';
import { qrCodeService, QRCodeData } from '../services/qrCodeService';
import { notificationService } from '../services/notificationService';
import Icon from './Icon';
import GlassCard from './GlassCard';
import GlassButton from './GlassButton';

interface MobileBookingFlowProps {
  vehicle: Vehicle;
  onClose: () => void;
  onBookingComplete: (bookingId: string) => void;
}

interface BookingStep {
  id: string;
  title: string;
  description: string;
  icon: string;
  completed: boolean;
}

const MobileBookingFlow: React.FC<MobileBookingFlowProps> = ({
  vehicle,
  onClose,
  onBookingComplete
}) => {
  const { user } = useAuth();
  const [currentStep, setCurrentStep] = useState(0);
  const [bookingData, setBookingData] = useState({
    startDate: '',
    endDate: '',
    pickupLocation: '',
    returnLocation: '',
    specialRequests: '',
    totalDays: 0,
    totalPrice: 0
  });
  const [loading, setLoading] = useState(false);
  const [qrCode, setQrCode] = useState<string>('');
  const [showQRCode, setShowQRCode] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const steps: BookingStep[] = [
    {
      id: 'dates',
      title: 'Select Dates',
      description: 'Choose your rental period',
      icon: 'calendar',
      completed: false
    },
    {
      id: 'location',
      title: 'Pickup Location',
      description: 'Where to collect the vehicle',
      icon: 'map-pin',
      completed: false
    },
    {
      id: 'details',
      title: 'Booking Details',
      description: 'Add any special requests',
      icon: 'edit',
      completed: false
    },
    {
      id: 'payment',
      title: 'Payment',
      description: 'Secure payment processing',
      icon: 'credit-card',
      completed: false
    },
    {
      id: 'confirmation',
      title: 'Confirmation',
      description: 'Booking confirmed with QR code',
      icon: 'check-circle',
      completed: false
    }
  ];

  useEffect(() => {
    // Request camera permission for QR code scanning
    requestCameraPermission();
  }, []);

  const requestCameraPermission = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      // Camera permission granted
      // Stop the stream immediately as we just needed permission
      stream.getTracks().forEach(track => track.stop());
    } catch (error) {
      console.error('Camera permission denied:', error);
      // Camera permission denied
    }
  };

  const handleStepComplete = (stepId: string, data: any) => {
    setBookingData(prev => ({ ...prev, ...data }));
    
    const stepIndex = steps.findIndex(step => step.id === stepId);
    if (stepIndex !== -1) {
      const updatedSteps = [...steps];
      updatedSteps[stepIndex].completed = true;
      
      if (stepIndex < steps.length - 1) {
        setCurrentStep(stepIndex + 1);
      }
    }
  };

  const handleDateSelection = (startDate: string, endDate: string) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const days = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
    const totalPrice = days * vehicle.dailyRate;

    handleStepComplete('dates', {
      startDate,
      endDate,
      totalDays: days,
      totalPrice
    });
  };

  const handleLocationSelection = (pickupLocation: string, returnLocation: string) => {
    handleStepComplete('location', {
      pickupLocation,
      returnLocation
    });
  };

  const handleSpecialRequests = (specialRequests: string) => {
    handleStepComplete('details', { specialRequests });
  };

  const handlePayment = async () => {
    setLoading(true);
    try {
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Generate booking ID
      const bookingId = `booking_${Date.now()}`;
      
      // Generate QR code for booking
      const qrCodeData: QRCodeData = {
        type: 'booking',
        id: bookingId,
        timestamp: Date.now(),
        metadata: {
          vehicleId: vehicle.id,
          vehicleName: `${vehicle.make} ${vehicle.model}`,
          renterId: user?.id,
          startDate: bookingData.startDate,
          endDate: bookingData.endDate
        }
      };
      
      const qrCodeDataURL = await qrCodeService.generateQRCode(qrCodeData);
      setQrCode(qrCodeDataURL);
      
      // Show notification
      await notificationService.showBookingNotification('confirmed', {
        id: bookingId,
        vehicleName: `${vehicle.make} ${vehicle.model}`,
        pickupDate: bookingData.startDate
      });
      
      handleStepComplete('payment', {});
      setCurrentStep(4); // Move to confirmation step
      
    } catch (error) {
      console.error('Payment failed:', error);
      await notificationService.showSystemNotification(
        'Payment Failed',
        'Your payment could not be processed. Please try again.',
        'error'
      );
    } finally {
      setLoading(false);
    }
  };

  const handleQRCodeScan = async () => {
    if (!videoRef.current || !canvasRef.current) return;

    const video = videoRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    if (!ctx) return;

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      video.srcObject = stream;
      video.play();

      const scanInterval = setInterval(() => {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        ctx.drawImage(video, 0, 0);

        // In a real implementation, you would use a QR code scanning library
        // like jsQR or quagga2 to detect and decode QR codes
        // For now, we'll simulate successful scanning
        setTimeout(() => {
          clearInterval(scanInterval);
          stream.getTracks().forEach(track => track.stop());
          setShowQRCode(false);
          
          // Simulate successful QR code scan
          onBookingComplete('booking_123');
        }, 3000);

      }, 100);

    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return <DateSelectionStep onComplete={handleDateSelection} />;
      case 1:
        return <LocationSelectionStep onComplete={handleLocationSelection} />;
      case 2:
        return <DetailsStep onComplete={handleSpecialRequests} />;
      case 3:
        return <PaymentStep 
          bookingData={bookingData} 
          vehicle={vehicle} 
          onPayment={handlePayment}
          loading={loading}
        />;
      case 4:
        return <ConfirmationStep 
          bookingData={bookingData} 
          vehicle={vehicle} 
          qrCode={qrCode}
          onQRCodeScan={handleQRCodeScan}
        />;
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-end sm:items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-md rounded-t-3xl sm:rounded-3xl border border-white/20 w-full max-w-md max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/20">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">{currentStep + 1}</span>
            </div>
            <div>
              <h3 className="text-white font-semibold">{steps[currentStep].title}</h3>
              <p className="text-white/70 text-sm">{steps[currentStep].description}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <Icon name="x" className="h-5 w-5 text-white" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="px-4 py-2">
          <div className="flex space-x-2">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`flex-1 h-2 rounded-full transition-colors ${
                  index <= currentStep ? 'bg-blue-500' : 'bg-white/20'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Step Content */}
        <div className="p-4 flex-1 overflow-y-auto">
          {renderStepContent()}
        </div>

        {/* QR Code Scanner Modal */}
        {showQRCode && (
          <div className="fixed inset-0 bg-black/90 z-60 flex items-center justify-center p-4">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 w-full max-w-sm">
              <h3 className="text-white text-lg font-semibold mb-4 text-center">
                Scan QR Code
              </h3>
              <div className="relative">
                <video
                  ref={videoRef}
                  className="w-full h-64 bg-black rounded-lg"
                  autoPlay
                  playsInline
                />
                <canvas
                  ref={canvasRef}
                  className="hidden"
                />
                <div className="absolute inset-0 border-2 border-blue-500 rounded-lg pointer-events-none">
                  <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-blue-500 rounded-tl-lg"></div>
                  <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-blue-500 rounded-tr-lg"></div>
                  <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-blue-500 rounded-bl-lg"></div>
                  <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-blue-500 rounded-br-lg"></div>
                </div>
              </div>
              <p className="text-white/70 text-sm text-center mt-4">
                Position the QR code within the frame
              </p>
              <div className="flex space-x-3 mt-6">
                <button
                  onClick={() => setShowQRCode(false)}
                  className="flex-1 py-2 px-4 bg-white/20 text-white rounded-lg hover:bg-white/30 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleQRCodeScan}
                  className="flex-1 py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Scan
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Step Components
const DateSelectionStep: React.FC<{ onComplete: (startDate: string, endDate: string) => void }> = ({ onComplete }) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleNext = () => {
    if (startDate && endDate) {
      onComplete(startDate, endDate);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h4 className="text-white text-lg font-semibold mb-2">Select Rental Dates</h4>
        <p className="text-white/70 text-sm">Choose your pickup and return dates</p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-white text-sm font-medium mb-2">Pickup Date</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            min={new Date().toISOString().split('T')[0]}
            className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-white text-sm font-medium mb-2">Return Date</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            min={startDate || new Date().toISOString().split('T')[0]}
            className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <GlassButton
        onClick={handleNext}
        disabled={!startDate || !endDate}
        className="w-full"
      >
        Continue
      </GlassButton>
    </div>
  );
};

const LocationSelectionStep: React.FC<{ onComplete: (pickup: string, returnLocation: string) => void }> = ({ onComplete }) => {
  const [pickupLocation, setPickupLocation] = useState('');
  const [returnLocation, setReturnLocation] = useState('');

  const handleNext = () => {
    if (pickupLocation && returnLocation) {
      onComplete(pickupLocation, returnLocation);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h4 className="text-white text-lg font-semibold mb-2">Pickup & Return Locations</h4>
        <p className="text-white/70 text-sm">Where would you like to collect and return the vehicle?</p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-white text-sm font-medium mb-2">Pickup Location</label>
          <input
            type="text"
            value={pickupLocation}
            onChange={(e) => setPickupLocation(e.target.value)}
            placeholder="Enter pickup address"
            className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-white text-sm font-medium mb-2">Return Location</label>
          <input
            type="text"
            value={returnLocation}
            onChange={(e) => setReturnLocation(e.target.value)}
            placeholder="Enter return address"
            className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <GlassButton
        onClick={handleNext}
        disabled={!pickupLocation || !returnLocation}
        className="w-full"
      >
        Continue
      </GlassButton>
    </div>
  );
};

const DetailsStep: React.FC<{ onComplete: (requests: string) => void }> = ({ onComplete }) => {
  const [specialRequests, setSpecialRequests] = useState('');

  const handleNext = () => {
    onComplete(specialRequests);
  };

  return (
    <div className="space-y-6">
      <div>
        <h4 className="text-white text-lg font-semibold mb-2">Special Requests</h4>
        <p className="text-white/70 text-sm">Any special requirements for your rental?</p>
      </div>

      <div>
        <label className="block text-white text-sm font-medium mb-2">Additional Notes</label>
        <textarea
          value={specialRequests}
          onChange={(e) => setSpecialRequests(e.target.value)}
          placeholder="Child seat, GPS navigation, etc."
          rows={4}
          className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
        />
      </div>

      <GlassButton
        onClick={handleNext}
        className="w-full"
      >
        Continue
      </GlassButton>
    </div>
  );
};

const PaymentStep: React.FC<{
  bookingData: any;
  vehicle: Vehicle;
  onPayment: () => void;
  loading: boolean;
}> = ({ bookingData, vehicle, onPayment, loading }) => {
  const [paymentMethod, setPaymentMethod] = useState('card');

  return (
    <div className="space-y-6">
      <div>
        <h4 className="text-white text-lg font-semibold mb-2">Payment Details</h4>
        <p className="text-white/70 text-sm">Complete your booking with secure payment</p>
      </div>

      {/* Booking Summary */}
      <GlassCard className="p-4">
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
            <span className="text-white/70">Daily Rate:</span>
            <span className="text-white">R{vehicle.dailyRate}</span>
          </div>
          <div className="flex justify-between border-t border-white/20 pt-3">
            <span className="text-white font-semibold">Total:</span>
            <span className="text-white font-semibold">R{bookingData.totalPrice}</span>
          </div>
        </div>
      </GlassCard>

      {/* Payment Method Selection */}
      <div>
        <label className="block text-white text-sm font-medium mb-3">Payment Method</label>
        <div className="space-y-2">
          {['card', 'eft', 'payfast'].map((method) => (
            <label key={method} className="flex items-center space-x-3 p-3 bg-white/10 rounded-lg cursor-pointer hover:bg-white/20 transition-colors">
              <input
                type="radio"
                name="paymentMethod"
                value={method}
                checked={paymentMethod === method}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="text-blue-500"
              />
              <span className="text-white capitalize">{method}</span>
            </label>
          ))}
        </div>
      </div>

      <GlassButton
        onClick={onPayment}
        loading={loading}
        className="w-full"
      >
        {loading ? 'Processing Payment...' : 'Complete Booking'}
      </GlassButton>
    </div>
  );
};

const ConfirmationStep: React.FC<{
  bookingData: any;
  vehicle: Vehicle;
  qrCode: string;
  onQRCodeScan: () => void;
}> = ({ bookingData, vehicle, qrCode, onQRCodeScan }) => {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="check" className="h-8 w-8 text-white" />
        </div>
        <h4 className="text-white text-lg font-semibold mb-2">Booking Confirmed!</h4>
        <p className="text-white/70 text-sm">Your booking has been successfully created</p>
      </div>

      {/* QR Code */}
      {qrCode && (
        <GlassCard className="p-6 text-center">
          <h5 className="text-white font-semibold mb-4">Your Booking QR Code</h5>
          <img
            src={qrCode}
            alt="Booking QR Code"
            className="w-48 h-48 mx-auto mb-4"
          />
          <p className="text-white/70 text-sm mb-4">
            Show this QR code to the host for vehicle pickup
          </p>
          <div className="flex space-x-3">
            <button
              onClick={() => qrCodeService.downloadQRCode(qrCode, `booking-${Date.now()}.png`)}
              className="flex-1 py-2 px-4 bg-white/20 text-white rounded-lg hover:bg-white/30 transition-colors"
            >
              Download
            </button>
            <button
              onClick={() => qrCodeService.printQRCode(qrCode)}
              className="flex-1 py-2 px-4 bg-white/20 text-white rounded-lg hover:bg-white/30 transition-colors"
            >
              Print
            </button>
          </div>
        </GlassCard>
      )}

      {/* Booking Details */}
      <GlassCard className="p-4">
        <h5 className="text-white font-semibold mb-4">Booking Details</h5>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-white/70">Vehicle:</span>
            <span className="text-white">{vehicle.make} {vehicle.model}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-white/70">Pickup:</span>
            <span className="text-white">{bookingData.startDate}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-white/70">Return:</span>
            <span className="text-white">{bookingData.endDate}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-white/70">Total:</span>
            <span className="text-white font-semibold">R{bookingData.totalPrice}</span>
          </div>
        </div>
      </GlassCard>

      <div className="flex space-x-3">
        <button
          onClick={onQRCodeScan}
          className="flex-1 py-3 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          Scan QR Code
        </button>
        <button
          onClick={() => window.location.href = '/dashboard'}
          className="flex-1 py-3 px-4 bg-white/20 text-white rounded-lg hover:bg-white/30 transition-colors"
        >
          View Dashboard
        </button>
      </div>
    </div>
  );
};

export default MobileBookingFlow;
