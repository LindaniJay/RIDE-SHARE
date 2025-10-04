import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import Icon from './Icon';
import GlassCard from './GlassCard';
import GlassButton from './GlassButton';
import DocumentUpload from './DocumentUpload';

interface HostSignupModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToLogin: () => void;
}

const HostSignupModal: React.FC<HostSignupModalProps> = ({ isOpen, onClose, onSwitchToLogin }) => {
  const { signup, loading } = useAuth();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    agreeToTerms: false,
    documents: {
      idDocument: null as File | null,
      driverLicense: null as File | null,
      proofOfAddress: null as File | null,
      vehicleRegistration: null as File | null,
      roadworthyCertificate: null as File | null,
      insuranceCertificate: null as File | null
    }
  });
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    setError(''); // Clear error when user starts typing
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    // Validation
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      setIsSubmitting(false);
      return;
    }

    if (!formData.agreeToTerms) {
      setError('Please agree to the terms and conditions');
      setIsSubmitting(false);
      return;
    }

    // Check required documents for hosts
    const requiredDocuments = ['idDocument', 'driverLicense', 'proofOfAddress', 'vehicleRegistration', 'roadworthyCertificate', 'insuranceCertificate'];
    const missingDocuments = requiredDocuments.filter(doc => !formData.documents[doc as keyof typeof formData.documents]);
    
    if (missingDocuments.length > 0) {
      setError(`Please upload all required documents: ${missingDocuments.join(', ')}`);
      setIsSubmitting(false);
      return;
    }

    try {
      await signup(
        formData.email,
        formData.password,
        formData.firstName,
        formData.lastName,
        formData.phoneNumber,
        'Host'
      );
      onClose(); // Close modal on successful signup
    } catch (error: any) {
      setError(error.message || 'Signup failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      phoneNumber: '',
      agreeToTerms: false
    });
    setError('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={handleClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-md max-h-[90vh] overflow-y-auto">
        <GlassCard className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-green-600/90 to-emerald-600/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                <Icon name="Plus" size="sm" className="text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Become a Host</h2>
                <p className="text-sm text-white/70">Start earning with your vehicles</p>
              </div>
            </div>
            <button
              onClick={handleClose}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <Icon name="X" size="sm" className="text-white/70" />
            </button>
          </div>

          {/* Signup Form */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            {error && (
              <div className="bg-red-500/20 border border-red-400/30 rounded-lg p-3 text-red-200 text-sm">
                <div className="flex items-center">
                  <Icon name="AlertTriangle" size="sm" className="mr-2" />
                  {error}
                </div>
              </div>
            )}

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-white/80 mb-2">
                  First Name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className="block w-full px-3 py-2.5 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="John"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-white/80 mb-2">
                  Last Name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  className="block w-full px-3 py-2.5 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Icon name="Mail" size="sm" className="text-white/50" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="block w-full pl-10 pr-3 py-2.5 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-white/80 mb-2">
                Phone Number
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Icon name="Phone" size="sm" className="text-white/50" />
                </div>
                <input
                  id="phoneNumber"
                  name="phoneNumber"
                  type="tel"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="block w-full pl-10 pr-3 py-2.5 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="+27 82 123 4567"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-white/80 mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Icon name="Lock" size="sm" className="text-white/50" />
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="block w-full pl-10 pr-3 py-2.5 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Create a strong password"
                />
              </div>
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-white/80 mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Icon name="Lock" size="sm" className="text-white/50" />
                </div>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  autoComplete="new-password"
                  required
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="block w-full pl-10 pr-3 py-2.5 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Confirm your password"
                />
              </div>
            </div>

            {/* Document Upload Section */}
            <div className="space-y-4">
              <div className="border-t border-white/20 pt-4">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <Icon name="FileText" size="sm" className="mr-2" />
                  Required Documents
                </h3>
                <p className="text-sm text-white/70 mb-4">
                  As a host, you need to upload the following documents to list your vehicles:
                </p>
              </div>

              {/* Common documents */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <DocumentUpload
                  label="ID Document"
                  name="idDocument"
                  required={true}
                  description="South African ID, passport, or driver's license"
                  acceptedTypes={['image/*', 'application/pdf']}
                  maxSize={5}
                  value={formData.documents.idDocument}
                  onChange={(file) => setFormData(prev => ({
                    ...prev,
                    documents: { ...prev.documents, idDocument: file }
                  }))}
                />

                <DocumentUpload
                  label="Driver's License"
                  name="driverLicense"
                  required={true}
                  description="Valid South African driver's license"
                  acceptedTypes={['image/*', 'application/pdf']}
                  maxSize={5}
                  value={formData.documents.driverLicense}
                  onChange={(file) => setFormData(prev => ({
                    ...prev,
                    documents: { ...prev.documents, driverLicense: file }
                  }))}
                />

                <DocumentUpload
                  label="Proof of Address"
                  name="proofOfAddress"
                  required={true}
                  description="Utility bill, bank statement, or municipal account (not older than 3 months)"
                  acceptedTypes={['image/*', 'application/pdf']}
                  maxSize={5}
                  value={formData.documents.proofOfAddress}
                  onChange={(file) => setFormData(prev => ({
                    ...prev,
                    documents: { ...prev.documents, proofOfAddress: file }
                  }))}
                />
              </div>

              {/* Vehicle documents */}
              <div className="space-y-4">
                <div className="border-t border-white/20 pt-4">
                  <h4 className="text-md font-semibold text-white mb-3 flex items-center">
                    <Icon name="Car" size="sm" className="mr-2" />
                    Vehicle Documents
                  </h4>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <DocumentUpload
                    label="Vehicle Registration"
                    name="vehicleRegistration"
                    required={true}
                    description="Official vehicle registration document (NATIS)"
                    acceptedTypes={['image/*', 'application/pdf']}
                    maxSize={5}
                    value={formData.documents.vehicleRegistration}
                    onChange={(file) => setFormData(prev => ({
                      ...prev,
                      documents: { ...prev.documents, vehicleRegistration: file }
                    }))}
                  />

                  <DocumentUpload
                    label="Roadworthy Certificate"
                    name="roadworthyCertificate"
                    required={true}
                    description="Valid roadworthy certificate (not older than 2 years)"
                    acceptedTypes={['image/*', 'application/pdf']}
                    maxSize={5}
                    value={formData.documents.roadworthyCertificate}
                    onChange={(file) => setFormData(prev => ({
                      ...prev,
                      documents: { ...prev.documents, roadworthyCertificate: file }
                    }))}
                  />

                  <DocumentUpload
                    label="Insurance Certificate"
                    name="insuranceCertificate"
                    required={true}
                    description="Comprehensive insurance certificate"
                    acceptedTypes={['image/*', 'application/pdf']}
                    maxSize={5}
                    value={formData.documents.insuranceCertificate}
                    onChange={(file) => setFormData(prev => ({
                      ...prev,
                      documents: { ...prev.documents, insuranceCertificate: file }
                    }))}
                  />
                </div>
              </div>
            </div>

            <div className="flex items-start">
              <input
                id="agreeToTerms"
                name="agreeToTerms"
                type="checkbox"
                checked={formData.agreeToTerms}
                onChange={handleChange}
                className="h-4 w-4 text-green-600 focus:ring-green-500 border-white/20 rounded bg-white/10 mt-1"
              />
              <label htmlFor="agreeToTerms" className="ml-2 block text-sm text-white/70">
                I agree to the{' '}
                <button type="button" className="text-green-400 hover:text-green-300 transition-colors">
                  Terms of Service
                </button>{' '}
                and{' '}
                <button type="button" className="text-green-400 hover:text-green-300 transition-colors">
                  Privacy Policy
                </button>
              </label>
            </div>

            <div className="space-y-3">
              <GlassButton
                type="submit"
                disabled={isSubmitting || loading}
                className="w-full flex justify-center items-center space-x-2 bg-gradient-to-r from-green-600/90 to-emerald-600/90 hover:from-green-500/90 hover:to-emerald-500/90 text-white font-semibold py-2.5 px-4 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting || loading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    <span>Creating account...</span>
                  </>
                ) : (
                  <>
                    <Icon name="UserPlus" size="sm" />
                    <span>Become a Host</span>
                  </>
                )}
              </GlassButton>

              <div className="text-center">
                <span className="text-white/60 text-sm">Already have an account? </span>
                <button
                  type="button"
                  onClick={onSwitchToLogin}
                  className="text-green-400 hover:text-green-300 transition-colors text-sm font-medium"
                >
                  Sign in as Host
                </button>
              </div>
            </div>
          </form>
        </GlassCard>
      </div>
    </div>
  );
};

export default HostSignupModal;
