import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Icon from '../components/Icon';
import GlassCard from '../components/GlassCard';
import GlassButton from '../components/GlassButton';
import DocumentUpload from '../components/DocumentUpload';

const Signup: React.FC = () => {
  const { signup, loading } = useAuth();
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    phone: '',
    role: 'Renter' as 'Renter' | 'Host',
    documents: {
      idDocument: null as File | null,
      driverLicense: null as File | null,
      proofOfAddress: null as File | null,
      vehicleRegistration: null as File | null,
      roadworthyCertificate: null as File | null,
      insuranceCertificate: null as File | null
    }
  });

  // Handle role from URL parameters
  useEffect(() => {
    const roleParam = searchParams.get('role');
    if (roleParam === 'renter' || roleParam === 'host') {
      setFormData(prev => ({
        ...prev,
        role: roleParam === 'renter' ? 'Renter' : 'Host'
      }));
    }
  }, [searchParams]);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setError(''); // Clear error when user starts typing
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validation
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }

    // Check required documents
    const requiredDocuments = ['idDocument', 'driverLicense', 'proofOfAddress'];
    if (formData.role === 'Host') {
      requiredDocuments.push('vehicleRegistration', 'roadworthyCertificate', 'insuranceCertificate');
    }

    const missingDocuments = requiredDocuments.filter(doc => !formData.documents[doc as keyof typeof formData.documents]);
    
    if (missingDocuments.length > 0) {
      setError(`Please upload all required documents: ${missingDocuments.join(', ')}`);
      return;
    }

    setIsSubmitting(true);

    try {
      await signup(formData.email, formData.password, formData.firstName, formData.lastName, formData.phone, formData.role);
      // Navigation will be handled by the AuthProvider based on user role
    } catch (error: any) {
      setError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <div className="mx-auto h-16 w-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
            <Icon name="Car" size="lg" className="text-white" />
          </div>
          <h2 className="mt-6 text-3xl font-bold text-white">
            Join RideShare SA
          </h2>
          <p className="mt-2 text-sm text-gray-300">
            Create your account to get started
          </p>
        </div>

        {/* Signup Form */}
        <GlassCard className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-4 text-red-200 text-sm">
                {error}
              </div>
            )}

            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-white mb-2">
                First name
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                autoComplete="given-name"
                required
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your first name"
              />
            </div>

            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-white mb-2">
                Last name
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                autoComplete="family-name"
                required
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your last name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                Phone number (optional)
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your phone number"
              />
            </div>

            <div>
              <label htmlFor="role" className="block text-sm font-medium text-white mb-2">
                I want to
              </label>
              <select
                id="role"
                name="role"
                required
                value={formData.role}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="Renter" className="bg-gray-800 text-white">
                  Rent vehicles
                </option>
                <option value="Host" className="bg-gray-800 text-white">
                  List my vehicles for rent
                </option>
              </select>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-white mb-2">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Create a password (min. 6 characters)"
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-white mb-2">
                Confirm password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                autoComplete="new-password"
                required
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Confirm your password"
              />
            </div>

            {/* Document Upload Section */}
            <div className="space-y-4">
              <div className="border-t border-white/20 pt-4">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <Icon name="FileText" size="sm" className="mr-2" />
                  Required Documents
                </h3>
                <p className="text-sm text-white/70 mb-4">
                  Please upload the required documents to complete your registration. 
                  {formData.role === 'Host' 
                    ? ' As a host, you need additional documents to list your vehicles.'
                    : ' These documents help us verify your identity and ensure platform safety.'
                  }
                </p>
              </div>

              {/* Common documents for both roles */}
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

              {/* Host-specific documents */}
              {formData.role === 'Host' && (
                <div className="space-y-4">
                  <div className="border-t border-white/20 pt-4">
                    <h4 className="text-md font-semibold text-white mb-3 flex items-center">
                      <Icon name="Car" size="sm" className="mr-2" />
                      Vehicle Documents (for each vehicle you plan to list)
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
              )}
            </div>

            <GlassButton
              type="submit"
              disabled={isSubmitting || loading}
              className="w-full flex justify-center items-center space-x-2"
            >
              {isSubmitting || loading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>Creating account...</span>
                </>
              ) : (
                <>
                  <Icon name="Plus" size="sm" />
                  <span>Create account</span>
                </>
              )}
            </GlassButton>
          </form>

          {/* Login link */}
          <div className="mt-6 text-center">
            <p className="text-gray-300 text-sm">
              Already have an account?{' '}
              <Link 
                to="/login" 
                className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
              >
                Sign in here
              </Link>
            </p>
          </div>
        </GlassCard>
      </div>
    </div>
  );
};

export default Signup;
