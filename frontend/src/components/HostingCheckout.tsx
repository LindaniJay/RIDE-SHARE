import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { paymentService } from '../services/paymentService';
import Icon from './Icon';
import { SAPaymentGateway } from './SAPaymentGateway';

interface HostingCheckoutProps {
  vehicleData: {
    make: string;
    model: string;
    year: number;
    category: string;
    pricePerDay: number;
    images: string[];
  };
  onSuccess: (listing: any) => void;
  onError: (error: string) => void;
  onClose: () => void;
}

interface HostingFee {
  id: string;
  name: string;
  description: string;
  amount: number;
  required: boolean;
  category: 'registration' | 'listing' | 'verification' | 'premium';
}

interface CheckoutStep {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  current: boolean;
}

const HostingCheckout: React.FC<HostingCheckoutProps> = ({
  vehicleData,
  onSuccess,
  onError,
  onClose
}) => {
  const { user } = useAuth();
  const [currentStep, setCurrentStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [selectedFees, setSelectedFees] = useState<string[]>([]);
  const [verificationStatus, setVerificationStatus] = useState<Record<string, boolean>>({});
  const [paymentMethod, setPaymentMethod] = useState<string>('');

  const steps: CheckoutStep[] = [
    {
      id: 'fees',
      title: 'Hosting Fees',
      description: 'Select required and optional fees',
      completed: false,
      current: true
    },
    {
      id: 'verification',
      title: 'Verification',
      description: 'Complete identity and vehicle verification',
      completed: false,
      current: false
    },
    {
      id: 'payment',
      title: 'Payment',
      description: 'Pay hosting fees and complete setup',
      completed: false,
      current: false
    },
    {
      id: 'confirmation',
      title: 'Confirmation',
      description: 'Hosting setup complete',
      completed: false,
      current: false
    }
  ];

  const [currentSteps, setCurrentSteps] = useState(steps);

  const hostingFees: HostingFee[] = [
    {
      id: 'platform_registration',
      name: 'Platform Registration',
      description: 'One-time registration fee to become a host',
      amount: 75,
      required: true,
      category: 'registration'
    },
    {
      id: 'vehicle_listing',
      name: 'Vehicle Listing Fee',
      description: 'Fee to list your vehicle on the platform',
      amount: 25,
      required: true,
      category: 'listing'
    },
    {
      id: 'identity_verification',
      name: 'Identity Verification',
      description: 'Background check and identity verification',
      amount: 50,
      required: true,
      category: 'verification'
    },
    {
      id: 'vehicle_inspection',
      name: 'Vehicle Inspection',
      description: 'Professional vehicle inspection and certification',
      amount: 100,
      required: true,
      category: 'verification'
    },
    {
      id: 'premium_listing',
      name: 'Premium Listing (30 days)',
      description: 'Featured placement in search results',
      amount: 150,
      required: false,
      category: 'premium'
    },
    {
      id: 'priority_support',
      name: 'Priority Support',
      description: 'Priority customer support and faster response times',
      amount: 50,
      required: false,
      category: 'premium'
    }
  ];

  useEffect(() => {
    // Auto-select required fees
    const requiredFees = hostingFees.filter(fee => fee.required).map(fee => fee.id);
    setSelectedFees(requiredFees);
    
    // Check existing verification status
    checkVerificationStatus();
  }, []);

  const checkVerificationStatus = async () => {
    if (!user) return;
    
    // Simulate checking verification status
    const status = {
      identity: user.idVerified || false,
      address: user.addressVerified || false,
      vehicle: false, // Will be set after inspection
      insurance: user.insuranceVerified || false
    };
    
    setVerificationStatus(status);
  };

  const calculateTotal = () => {
    const selectedFeeObjects = hostingFees.filter(fee => selectedFees.includes(fee.id));
    const subtotal = selectedFeeObjects.reduce((sum, fee) => sum + fee.amount, 0);
    const vat = subtotal * 0.15; // 15% VAT
    const total = subtotal + vat;
    
    return { subtotal, vat, total };
  };

  const handleFeeToggle = (feeId: string) => {
    const fee = hostingFees.find(f => f.id === feeId);
    if (!fee) return;
    
    if (fee.required) return; // Can't deselect required fees
    
    setSelectedFees(prev => 
      prev.includes(feeId) 
        ? prev.filter(id => id !== feeId)
        : [...prev, feeId]
    );
  };

  const handleStepComplete = async (stepId: string) => {
    setLoading(true);
    
    try {
      switch (stepId) {
        case 'fees':
          if (selectedFees.length === 0) {
            throw new Error('Please select at least the required fees');
          }
          break;
          
        case 'verification':
          const allVerified = Object.values(verificationStatus).every(status => status);
          if (!allVerified) {
            throw new Error('Please complete all verification steps');
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
      amount: pricing.total,
      paymentMethod,
      currency: 'ZAR',
      metadata: {
        type: 'hosting_fees',
        vehicleId: vehicleData.make + '_' + vehicleData.model,
        fees: selectedFees,
        userId: user?.id
      }
    };

    // Process payment
    await paymentService.processPayment({
      ...paymentData,
      bookingId: `hosting_${Date.now()}`,
      customerInfo: {
        email: user?.email || '',
        name: `${user?.firstName || ''} ${user?.lastName || ''}`.trim(),
        phone: user?.phoneNumber || ''
      }
    });
    
    // Create vehicle listing
    const listing = await createVehicleListing();
    onSuccess(listing);
  };

  const createVehicleListing = async () => {
    // This would integrate with the actual listing creation API
    return {
      id: `listing_${Date.now()}`,
      ...vehicleData,
      status: 'pending_verification',
      hostId: user?.id,
      createdAt: new Date().toISOString()
    };
  };

  const renderStepContent = () => {
    const pricing = calculateTotal();

    switch (currentStep) {
      case 0: // Fees
        return (
          <div className="space-y-6">
            <div className="bg-white/10 rounded-lg p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4">Hosting Fees</h3>
              <p className="text-white/70 text-sm mb-6">
                Choose the fees you'd like to pay to get your vehicle listed on our platform.
              </p>
              
              <div className="space-y-4">
                {hostingFees.map((fee) => (
                  <div
                    key={fee.id}
                    className={`p-4 rounded-lg border cursor-pointer transition-all ${
                      selectedFees.includes(fee.id)
                        ? 'bg-blue-500/20 border-blue-500/30'
                        : fee.required
                        ? 'bg-gray-500/20 border-gray-500/30 cursor-not-allowed'
                        : 'bg-white/10 border-white/20 hover:bg-white/20'
                    }`}
                    onClick={() => handleFeeToggle(fee.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3">
                          <input
                            type="checkbox"
                            checked={selectedFees.includes(fee.id)}
                            onChange={() => handleFeeToggle(fee.id)}
                            disabled={fee.required}
                            className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                          />
                          <div>
                            <h4 className="text-white font-medium">{fee.name}</h4>
                            <p className="text-white/70 text-sm">{fee.description}</p>
                            {fee.required && (
                              <span className="text-xs text-blue-400">Required</span>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-white font-semibold">R{fee.amount}</div>
                        {fee.category === 'premium' && (
                          <div className="text-xs text-green-400">Optional</div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing Summary */}
            <div className="bg-white/10 rounded-lg p-6 border border-white/20">
              <h4 className="text-white font-semibold mb-4">Payment Summary</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-white/70">Subtotal:</span>
                  <span className="text-white">R{pricing.subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">VAT (15%):</span>
                  <span className="text-white">R{pricing.vat.toFixed(2)}</span>
                </div>
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

      case 1: // Verification
        return (
          <div className="space-y-6">
            <div className="bg-white/10 rounded-lg p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4">Verification Requirements</h3>
              <p className="text-white/70 text-sm mb-6">
                Complete these verification steps to ensure the safety and security of our platform.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Icon 
                      name={verificationStatus.identity ? "CheckCircle" : "User"} 
                      size="sm" 
                      className={verificationStatus.identity ? "text-green-400" : "text-white/60"} 
                    />
                    <div>
                      <h4 className="text-white font-medium">Identity Verification</h4>
                      <p className="text-white/70 text-sm">Upload your ID document for verification</p>
                    </div>
                  </div>
                  <span className={`text-sm ${verificationStatus.identity ? 'text-green-400' : 'text-yellow-400'}`}>
                    {verificationStatus.identity ? 'Verified' : 'Pending'}
                  </span>
                </div>

                <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Icon 
                      name={verificationStatus.address ? "CheckCircle" : "MapPin"} 
                      size="sm" 
                      className={verificationStatus.address ? "text-green-400" : "text-white/60"} 
                    />
                    <div>
                      <h4 className="text-white font-medium">Address Verification</h4>
                      <p className="text-white/70 text-sm">Verify your residential address</p>
                    </div>
                  </div>
                  <span className={`text-sm ${verificationStatus.address ? 'text-green-400' : 'text-yellow-400'}`}>
                    {verificationStatus.address ? 'Verified' : 'Pending'}
                  </span>
                </div>

                <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Icon 
                      name={verificationStatus.vehicle ? "CheckCircle" : "Car"} 
                      size="sm" 
                      className={verificationStatus.vehicle ? "text-green-400" : "text-white/60"} 
                    />
                    <div>
                      <h4 className="text-white font-medium">Vehicle Inspection</h4>
                      <p className="text-white/70 text-sm">Schedule a professional vehicle inspection</p>
                    </div>
                  </div>
                  <span className={`text-sm ${verificationStatus.vehicle ? 'text-green-400' : 'text-yellow-400'}`}>
                    {verificationStatus.vehicle ? 'Verified' : 'Pending'}
                  </span>
                </div>

                <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Icon 
                      name={verificationStatus.insurance ? "CheckCircle" : "Shield"} 
                      size="sm" 
                      className={verificationStatus.insurance ? "text-green-400" : "text-white/60"} 
                    />
                    <div>
                      <h4 className="text-white font-medium">Insurance Verification</h4>
                      <p className="text-white/70 text-sm">Provide valid vehicle insurance documentation</p>
                    </div>
                  </div>
                  <span className={`text-sm ${verificationStatus.insurance ? 'text-green-400' : 'text-yellow-400'}`}>
                    {verificationStatus.insurance ? 'Verified' : 'Pending'}
                  </span>
                </div>
              </div>
            </div>

            {!Object.values(verificationStatus).every(status => status) && (
              <div className="bg-yellow-500/20 border border-yellow-500/30 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <Icon name="AlertTriangle" size="sm" className="text-yellow-400 mt-1" />
                  <div>
                    <h4 className="text-yellow-300 font-medium">Verification Required</h4>
                    <p className="text-yellow-400/70 text-sm mt-1">
                      Please complete all verification steps in your profile settings before proceeding.
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
                  Payment is secure and encrypted. Your vehicle will be listed after successful payment.
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

      case 3: // Confirmation
        return (
          <div className="text-center space-y-6">
            <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-8">
              <Icon name="CheckCircle" size="lg" className="text-green-400 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-green-300 mb-2">Hosting Setup Complete!</h3>
              <p className="text-green-400/70">
                Your vehicle has been submitted for review and will be listed once approved.
              </p>
            </div>
            
            <div className="bg-white/10 rounded-lg p-6 border border-white/20">
              <h4 className="text-white font-medium mb-3">What's Next?</h4>
              <ul className="text-white/70 text-sm space-y-2 text-left">
                <li>• Your vehicle will undergo a review process (1-3 business days)</li>
                <li>• You'll receive email updates on the approval status</li>
                <li>• Once approved, your vehicle will be live on the platform</li>
                <li>• You can manage your listing from your host dashboard</li>
                <li>• Start earning money from your first booking!</li>
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
              <h2 className="text-2xl font-bold text-white">Become a Host</h2>
              <p className="text-white/70 text-sm">{vehicleData.make} {vehicleData.model}</p>
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

export default HostingCheckout;
