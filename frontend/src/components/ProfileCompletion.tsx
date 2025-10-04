import React, { useState } from 'react';
import DocumentUpload from './DocumentUpload';
import Icon from './Icon';
import { profileStatusService } from '../services/profileStatusService';

interface ProfileCompletionProps {
  userRole: 'renter' | 'host';
  onProfileComplete: (profileData: any) => void;
  className?: string;
}

export const ProfileCompletion: React.FC<ProfileCompletionProps> = ({
  userRole,
  onProfileComplete,
  className = ""
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [profileData, setProfileData] = useState({
    // Personal Information
    dateOfBirth: '',
    address: '',
    city: '',
    province: '',
    postalCode: '',
    emergencyContact: '',
    emergencyPhone: '',
    
    // Documents
    idDocument: undefined as File | undefined,
    driverLicense: undefined as File | undefined,
    proofOfAddress: undefined as File | undefined,
    
    // Host-specific fields
    businessName: '',
    businessRegistration: '',
    bankAccount: '',
    taxNumber: '',
    
    // Vehicle documents (for hosts)
    vehicleRegistration: undefined as File | undefined,
    roadworthyCertificate: undefined as File | undefined,
    insuranceCertificate: undefined as File | undefined,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (field: string, value: string) => {
    setProfileData(prev => ({ ...prev, [field]: value }));
  };

  const handleDocumentUpload = (field: string, file: File | null) => {
    setProfileData(prev => ({ ...prev, [field]: file }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError('');

    try {
      // Validate required fields
      const requiredFields = userRole === 'renter' 
        ? ['dateOfBirth', 'address', 'city', 'province', 'postalCode', 'emergencyContact', 'emergencyPhone']
        : ['dateOfBirth', 'address', 'city', 'province', 'postalCode', 'businessName', 'businessRegistration', 'bankAccount', 'taxNumber'];

      const missingFields = requiredFields.filter(field => !profileData[field as keyof typeof profileData]);
      
      if (missingFields.length > 0) {
        setError(`Please fill in all required fields: ${missingFields.join(', ')}`);
        setLoading(false);
        return;
      }

      // Validate documents
      const requiredDocs = userRole === 'renter'
        ? ['idDocument', 'driverLicense', 'proofOfAddress']
        : ['idDocument', 'driverLicense', 'proofOfAddress', 'vehicleRegistration', 'roadworthyCertificate', 'insuranceCertificate'];

      const missingDocs = requiredDocs.filter(doc => !profileData[doc as keyof typeof profileData]);
      
      if (missingDocs.length > 0) {
        setError(`Please upload all required documents: ${missingDocs.join(', ')}`);
        setLoading(false);
        return;
      }

      // Submit profile data
      await onProfileComplete(profileData);
      
      // Update profile status service
      profileStatusService.setProfileCompleted(profileData);
      
    } catch (err) {
      setError('Failed to complete profile. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const getStepTitle = () => {
    switch (currentStep) {
      case 1:
        return 'Personal Information';
      case 2:
        return userRole === 'renter' ? 'Identity Documents' : 'Business & Vehicle Documents';
      case 3:
        return 'Review & Submit';
      default:
        return 'Profile Completion';
    }
  };

  const getStepIcon = () => {
    switch (currentStep) {
      case 1:
        return 'User';
      case 2:
        return 'FileText';
      case 3:
        return 'CheckCircle';
      default:
        return 'Clipboard';
    }
  };

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Progress Header */}
      <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <Icon name={getStepIcon()} size="lg" />
            <div>
              <h2 className="text-xl font-semibold text-white">{getStepTitle()}</h2>
              <p className="text-white/70 text-sm">
                Step {currentStep} of 3 - Complete your profile to start using RideShare SA
              </p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm text-white/70">Progress</div>
            <div className="text-lg font-semibold text-white">{Math.round((currentStep / 3) * 100)}%</div>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="w-full bg-white/20 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${(currentStep / 3) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Step 1: Personal Information */}
      {currentStep === 1 && (
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
          <h3 className="text-lg font-semibold text-white mb-4">Personal Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-white/90 mb-2">
                Date of Birth *
              </label>
              <input
                type="date"
                value={profileData.dateOfBirth}
                onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/20"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-white/90 mb-2">
                Emergency Contact *
              </label>
              <input
                type="text"
                value={profileData.emergencyContact}
                onChange={(e) => handleInputChange('emergencyContact', e.target.value)}
                className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/20"
                placeholder="Full name"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-white/90 mb-2">
                Emergency Phone *
              </label>
              <input
                type="tel"
                value={profileData.emergencyPhone}
                onChange={(e) => handleInputChange('emergencyPhone', e.target.value)}
                className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/20"
                placeholder="+27 82 123 4567"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-white/90 mb-2">
                Address *
              </label>
              <input
                type="text"
                value={profileData.address}
                onChange={(e) => handleInputChange('address', e.target.value)}
                className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/20"
                placeholder="Street address"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-white/90 mb-2">
                City *
              </label>
              <input
                type="text"
                value={profileData.city}
                onChange={(e) => handleInputChange('city', e.target.value)}
                className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/20"
                placeholder="Cape Town"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-white/90 mb-2">
                Province *
              </label>
              <select
                value={profileData.province}
                onChange={(e) => handleInputChange('province', e.target.value)}
                className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/20"
                required
              >
                <option value="">Select Province</option>
                <option value="Western Cape">Western Cape</option>
                <option value="Eastern Cape">Eastern Cape</option>
                <option value="Northern Cape">Northern Cape</option>
                <option value="Free State">Free State</option>
                <option value="KwaZulu-Natal">KwaZulu-Natal</option>
                <option value="North West">North West</option>
                <option value="Gauteng">Gauteng</option>
                <option value="Mpumalanga">Mpumalanga</option>
                <option value="Limpopo">Limpopo</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-white/90 mb-2">
                Postal Code *
              </label>
              <input
                type="text"
                value={profileData.postalCode}
                onChange={(e) => handleInputChange('postalCode', e.target.value)}
                className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/20"
                placeholder="8001"
                required
              />
            </div>
          </div>
        </div>
      )}

      {/* Step 2: Documents */}
      {currentStep === 2 && (
        <div className="space-y-6">
          {/* Identity Documents */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
            <h3 className="text-lg font-semibold text-white mb-4">Identity Documents</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <DocumentUpload
                label="ID Document"
                name="idDocument"
                value={profileData.idDocument}
                onChange={(file) => handleDocumentUpload('idDocument', file)}
                required
                description="Upload a clear photo of your South African ID or passport"
              />
              
              <DocumentUpload
                label="Driver's License"
                name="driverLicense"
                value={profileData.driverLicense}
                onChange={(file) => handleDocumentUpload('driverLicense', file)}
                required
                description="Upload a clear photo of your valid driver's license"
              />
              
              <DocumentUpload
                label="Proof of Address"
                name="proofOfAddress"
                value={profileData.proofOfAddress}
                onChange={(file) => handleDocumentUpload('proofOfAddress', file)}
                required
                description="Upload a recent utility bill or bank statement (not older than 3 months)"
              />
            </div>
          </div>

          {/* Host-specific fields */}
          {userRole === 'host' && (
            <>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <h3 className="text-lg font-semibold text-white mb-4">Business Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-white/90 mb-2">
                      Business Name *
                    </label>
                    <input
                      type="text"
                      value={profileData.businessName}
                      onChange={(e) => handleInputChange('businessName', e.target.value)}
                      className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/20"
                      placeholder="Your business name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-white/90 mb-2">
                      Business Registration Number *
                    </label>
                    <input
                      type="text"
                      value={profileData.businessRegistration}
                      onChange={(e) => handleInputChange('businessRegistration', e.target.value)}
                      className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/20"
                      placeholder="CIPC registration number"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-white/90 mb-2">
                      Bank Account Number *
                    </label>
                    <input
                      type="text"
                      value={profileData.bankAccount}
                      onChange={(e) => handleInputChange('bankAccount', e.target.value)}
                      className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/20"
                      placeholder="Your bank account number"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-white/90 mb-2">
                      Tax Number *
                    </label>
                    <input
                      type="text"
                      value={profileData.taxNumber}
                      onChange={(e) => handleInputChange('taxNumber', e.target.value)}
                      className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/20"
                      placeholder="SARS tax number"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <h3 className="text-lg font-semibold text-white mb-4">Vehicle Documents</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <DocumentUpload
                    label="Vehicle Registration"
                    name="vehicleRegistration"
                    value={profileData.vehicleRegistration}
                    onChange={(file) => handleDocumentUpload('vehicleRegistration', file)}
                    required
                    description="Official vehicle registration document"
                  />
                  
                  <DocumentUpload
                    label="Roadworthy Certificate"
                    name="roadworthyCertificate"
                    value={profileData.roadworthyCertificate}
                    onChange={(file) => handleDocumentUpload('roadworthyCertificate', file)}
                    required
                    description="Valid roadworthy certificate"
                  />
                  
                  <DocumentUpload
                    label="Insurance Certificate"
                    name="insuranceCertificate"
                    value={profileData.insuranceCertificate}
                    onChange={(file) => handleDocumentUpload('insuranceCertificate', file)}
                    required
                    description="Comprehensive insurance certificate"
                  />
                </div>
              </div>
            </>
          )}
        </div>
      )}

      {/* Step 3: Review & Submit */}
      {currentStep === 3 && (
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
          <h3 className="text-lg font-semibold text-white mb-4">Review Your Information</h3>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-white/70">Date of Birth:</span>
                <span className="text-white ml-2">{profileData.dateOfBirth}</span>
              </div>
              <div>
                <span className="text-white/70">Address:</span>
                <span className="text-white ml-2">{profileData.address}</span>
              </div>
              <div>
                <span className="text-white/70">City:</span>
                <span className="text-white ml-2">{profileData.city}</span>
              </div>
              <div>
                <span className="text-white/70">Province:</span>
                <span className="text-white ml-2">{profileData.province}</span>
              </div>
              {userRole === 'host' && (
                <>
                  <div>
                    <span className="text-white/70">Business Name:</span>
                    <span className="text-white ml-2">{profileData.businessName}</span>
                  </div>
                  <div>
                    <span className="text-white/70">Business Registration:</span>
                    <span className="text-white ml-2">{profileData.businessRegistration}</span>
                  </div>
                </>
              )}
            </div>
            
            <div className="pt-4 border-t border-white/20">
              <h4 className="text-md font-medium text-white mb-2">Uploaded Documents</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                <div className="flex items-center space-x-2">
                  <span className={profileData.idDocument ? 'text-green-400' : 'text-red-400'}>●</span>
                  <span className="text-white/70">ID Document</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={profileData.driverLicense ? 'text-green-400' : 'text-red-400'}>●</span>
                  <span className="text-white/70">Driver's License</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={profileData.proofOfAddress ? 'text-green-400' : 'text-red-400'}>●</span>
                  <span className="text-white/70">Proof of Address</span>
                </div>
                {userRole === 'host' && (
                  <>
                    <div className="flex items-center space-x-2">
                      <span className={profileData.vehicleRegistration ? 'text-green-400' : 'text-red-400'}>●</span>
                      <span className="text-white/70">Vehicle Registration</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={profileData.roadworthyCertificate ? 'text-green-400' : 'text-red-400'}>●</span>
                      <span className="text-white/70">Roadworthy Certificate</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={profileData.insuranceCertificate ? 'text-green-400' : 'text-red-400'}>●</span>
                      <span className="text-white/70">Insurance Certificate</span>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-3">
          <p className="text-red-300 text-sm">{error}</p>
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="flex justify-between">
        <button
          onClick={prevStep}
          disabled={currentStep === 1}
          className={`px-6 py-2 rounded-lg font-medium transition-all ${
            currentStep === 1
              ? 'bg-gray-500/20 text-gray-400 cursor-not-allowed'
              : 'bg-white/10 text-white hover:bg-white/20'
          }`}
        >
          Previous
        </button>
        
        <div className="flex space-x-3">
          {currentStep < 3 ? (
            <button
              onClick={nextStep}
              className="px-6 py-2 bg-blue-500/20 text-blue-300 rounded-lg font-medium hover:bg-blue-500/30 transition-all"
            >
              Next
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={loading}
              className={`px-6 py-2 rounded-lg font-medium transition-all ${
                loading
                  ? 'bg-gray-500/20 text-gray-400 cursor-not-allowed'
                  : 'bg-green-500/20 text-green-300 hover:bg-green-500/30'
              }`}
            >
              {loading ? 'Submitting...' : 'Submit for Approval'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileCompletion;
