import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import Icon from './Icon';
import GlassCard from './GlassCard';
import GlassButton from './GlassButton';
import DocumentUpload from './DocumentUpload';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: 'login' | 'signup';
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, initialMode = 'login' }) => {
  const { login, signup, loading } = useAuth();
  const [mode, setMode] = useState<'login' | 'signup'>(initialMode);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Login form data
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  // Signup form data
  const [signupData, setSignupData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    phone: '',
    role: 'Renter' as 'Renter' | 'Host'
  });

  // Document upload state
  const [documents, setDocuments] = useState({
    idDocument: null as File | null,
    driverLicense: null as File | null,
    proofOfAddress: null as File | null
  });

  // Reset form data when modal opens/closes or mode changes
  useEffect(() => {
    if (isOpen) {
      setMode(initialMode);
      setError('');
      setIsSubmitting(false);
    }
  }, [isOpen, initialMode]);

  // Handle login form changes
  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData(prev => ({
      ...prev,
      [name]: value
    }));
    setError('');
  };

  // Handle signup form changes
  const handleSignupChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setSignupData(prev => ({
      ...prev,
      [name]: value
    }));
    setError('');
  };

  // Handle document upload
  const handleDocumentUpload = (documentType: string, file: File | null) => {
    setDocuments(prev => ({
      ...prev,
      [documentType]: file
    }));
  };

  // Handle login submission
  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      await login(loginData.email, loginData.password);
      onClose(); // Close modal on successful login
    } catch (error: any) {
      setError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle signup submission
  const handleSignupSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    // Validation
    if (signupData.password !== signupData.confirmPassword) {
      setError('Passwords do not match');
      setIsSubmitting(false);
      return;
    }

    if (signupData.password.length < 6) {
      setError('Password must be at least 6 characters long');
      setIsSubmitting(false);
      return;
    }

    // Check for required documents based on role
    if (signupData.role === 'Host' && (!documents.idDocument || !documents.driverLicense)) {
      setError('Please upload required documents to complete your registration');
      setIsSubmitting(false);
      return;
    }

    if (signupData.role === 'Renter' && !documents.driverLicense) {
      setError('Please upload your driver\'s license to complete your registration');
      setIsSubmitting(false);
      return;
    }

    try {
      await signup(
        signupData.email,
        signupData.password,
        signupData.firstName,
        signupData.lastName,
        signupData.phone,
        signupData.role
      );
      onClose(); // Close modal on successful signup
    } catch (error: any) {
      setError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle modal close
  const handleClose = () => {
    setError('');
    setIsSubmitting(false);
    setLoginData({ email: '', password: '' });
    setSignupData({
      email: '',
      password: '',
      confirmPassword: '',
      firstName: '',
      lastName: '',
      phone: '',
      role: 'Renter'
    });
    setDocuments({
      idDocument: null,
      driverLicense: null,
      proofOfAddress: null
    });
    onClose();
  };

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

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
              <div className="h-10 w-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                <Icon name="Car" size="sm" className="text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">
                  {mode === 'login' ? 'Welcome back' : 'Join RideShare SA'}
                </h2>
                <p className="text-sm text-white/70">
                  {mode === 'login' ? 'Sign in to your account' : 'Create your account'}
                </p>
              </div>
            </div>
            <button
              onClick={handleClose}
              className="glass-button p-2 text-white/70 hover:text-white transition-colors"
            >
              <Icon name="X" size="sm" />
            </button>
          </div>

          {/* Mode Toggle */}
          <div className="flex bg-white/10 rounded-lg p-1 mb-6">
            <button
              onClick={() => setMode('login')}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 ${
                mode === 'login'
                  ? 'bg-white/20 text-white shadow-sm'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => setMode('signup')}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 ${
                mode === 'signup'
                  ? 'bg-white/20 text-white shadow-sm'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              Sign Up
            </button>
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-4 text-red-200 text-sm mb-6">
              {error}
            </div>
          )}

          {/* Login Form */}
          {mode === 'login' && (
            <form onSubmit={handleLoginSubmit} className="space-y-4">
              <div>
                <label htmlFor="login-email" className="block text-sm font-medium text-white/70 mb-2">
                  Email address
                </label>
                <input
                  id="login-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={loginData.email}
                  onChange={handleLoginChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="login-password" className="block text-sm font-medium text-white/70 mb-2">
                  Password
                </label>
                <input
                  id="login-password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={loginData.password}
                  onChange={handleLoginChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all"
                  placeholder="Enter your password"
                />
              </div>

              <GlassButton
                type="submit"
                disabled={isSubmitting || loading}
                className="w-full flex justify-center items-center space-x-2"
              >
                {isSubmitting || loading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Signing in...</span>
                  </>
                ) : (
                  <>
                    <Icon name="Login" size="sm" />
                    <span>Sign in</span>
                  </>
                )}
              </GlassButton>
            </form>
          )}

          {/* Signup Form */}
          {mode === 'signup' && (
            <form onSubmit={handleSignupSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="signup-firstName" className="block text-sm font-medium text-white/70 mb-2">
                    First name
                  </label>
                  <input
                    id="signup-firstName"
                    name="firstName"
                    type="text"
                    autoComplete="given-name"
                    required
                    value={signupData.firstName}
                    onChange={handleSignupChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all"
                    placeholder="First name"
                  />
                </div>
                <div>
                  <label htmlFor="signup-lastName" className="block text-sm font-medium text-white/70 mb-2">
                    Last name
                  </label>
                  <input
                    id="signup-lastName"
                    name="lastName"
                    type="text"
                    autoComplete="family-name"
                    required
                    value={signupData.lastName}
                    onChange={handleSignupChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all"
                    placeholder="Last name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="signup-email" className="block text-sm font-medium text-white/70 mb-2">
                  Email address
                </label>
                <input
                  id="signup-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={signupData.email}
                  onChange={handleSignupChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="signup-phone" className="block text-sm font-medium text-white/70 mb-2">
                  Phone number (optional)
                </label>
                <input
                  id="signup-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  value={signupData.phone}
                  onChange={handleSignupChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all"
                  placeholder="Enter your phone number"
                />
              </div>

               <div>
                 <label htmlFor="signup-role" className="block text-sm font-medium text-white/70 mb-2">
                   I want to
                 </label>
                 <select
                   id="signup-role"
                   name="role"
                   required
                   value={signupData.role}
                   onChange={handleSignupChange}
                   className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all"
                 >
                   <option value="Renter" className="bg-gray-800 text-white">
                     Rent vehicles from others
                   </option>
                   <option value="Host" className="bg-gray-800 text-white">
                     Rent out my vehicles
                   </option>
                 </select>
               </div>

               {/* Document Upload Section for Host Role */}
               {signupData.role === 'Host' && (
                 <div className="mt-6 p-6 bg-white/5 rounded-xl border border-white/10">
                   <div className="flex items-center space-x-3 mb-4">
                     <Icon name="FileText" size="md" className="text-blue-400" />
                     <h3 className="text-lg font-semibold text-white">Required Documents</h3>
                   </div>
                   <p className="text-white/70 text-sm mb-6">
                     Please upload the required documents to complete your registration. These documents help us verify your identity and ensure platform safety.
                   </p>
                   
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div>
                       <label className="block text-sm font-medium text-white/80 mb-2">
                         ID Document *
                       </label>
                       <p className="text-white/60 text-xs mb-3">
                         South African ID, passport, or driver's license
                       </p>
                       <DocumentUpload
                         label=""
                         name="idDocument"
                         onChange={(file) => handleDocumentUpload('idDocument', file)}
                         acceptedTypes={['image/*', 'application/pdf']}
                         maxSize={5}
                       />
                     </div>
                     
                     <div>
                       <label className="block text-sm font-medium text-white/80 mb-2">
                         Driver's License *
                       </label>
                       <p className="text-white/60 text-xs mb-3">
                         Valid South African driver's license
                       </p>
                       <DocumentUpload
                         label=""
                         name="driverLicense"
                         onChange={(file) => handleDocumentUpload('driverLicense', file)}
                         acceptedTypes={['image/*', 'application/pdf']}
                         maxSize={5}
                       />
                     </div>
                   </div>
                 </div>
               )}

               {/* Document Upload Section for Renter Role */}
               {signupData.role === 'Renter' && (
                 <div className="mt-6 p-6 bg-white/5 rounded-xl border border-white/10">
                   <div className="flex items-center space-x-3 mb-4">
                     <Icon name="FileText" size="md" className="text-green-400" />
                     <h3 className="text-lg font-semibold text-white">Driver Verification</h3>
                   </div>
                   <p className="text-white/70 text-sm mb-6">
                     Please upload your driver's license to verify your driving eligibility. This helps ensure a safe and secure rental experience.
                   </p>
                   
                   <div className="grid grid-cols-1 gap-6">
                     <div>
                       <label className="block text-sm font-medium text-white/80 mb-2">
                         Driver's License *
                       </label>
                       <p className="text-white/60 text-xs mb-3">
                         Valid South African driver's license (front and back)
                       </p>
                       <DocumentUpload
                         label=""
                         name="driverLicense"
                         onChange={(file) => handleDocumentUpload('driverLicense', file)}
                         acceptedTypes={['image/*', 'application/pdf']}
                         maxSize={5}
                       />
                     </div>
                   </div>
                 </div>
               )}

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="signup-password" className="block text-sm font-medium text-white/70 mb-2">
                    Password
                  </label>
                  <input
                    id="signup-password"
                    name="password"
                    type="password"
                    autoComplete="new-password"
                    required
                    value={signupData.password}
                    onChange={handleSignupChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all"
                    placeholder="Create password"
                  />
                </div>
                <div>
                  <label htmlFor="signup-confirmPassword" className="block text-sm font-medium text-white/70 mb-2">
                    Confirm password
                  </label>
                  <input
                    id="signup-confirmPassword"
                    name="confirmPassword"
                    type="password"
                    autoComplete="new-password"
                    required
                    value={signupData.confirmPassword}
                    onChange={handleSignupChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all"
                    placeholder="Confirm password"
                  />
                </div>
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
          )}

          {/* Footer */}
          <div className="mt-6 text-center">
            <p className="text-white/60 text-sm">
              {mode === 'login' ? 'Don\'t have an account? ' : 'Already have an account? '}
              <button
                onClick={() => setMode(mode === 'login' ? 'signup' : 'login')}
                className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
              >
                {mode === 'login' ? 'Sign up here' : 'Sign in here'}
              </button>
            </p>
          </div>
        </GlassCard>
      </div>
    </div>
  );
};

export default AuthModal;
