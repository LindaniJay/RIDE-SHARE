import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import Icon from './Icon';
import GlassCard from './GlassCard';
import GlassButton from './GlassButton';

interface HostLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToSignup: () => void;
}

const HostLoginModal: React.FC<HostLoginModalProps> = ({ isOpen, onClose, onSwitchToSignup }) => {
  const { login, loading } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
    setIsSubmitting(true);

    try {
      await login(formData.email, formData.password);
      onClose(); // Close modal on successful login
    } catch (error: any) {
      setError(error.message || 'Login failed. Please check your credentials.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setFormData({ email: '', password: '' });
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
      <div className="relative w-full max-w-md">
        <GlassCard className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-green-600/90 to-emerald-600/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                <Icon name="Plus" size="sm" className="text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Host Login</h2>
                <p className="text-sm text-white/70">Access your host dashboard</p>
              </div>
            </div>
            <button
              onClick={handleClose}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <Icon name="X" size="sm" className="text-white/70" />
            </button>
          </div>

          {/* Login Form */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            {error && (
              <div className="bg-red-500/20 border border-red-400/30 rounded-lg p-3 text-red-200 text-sm">
                <div className="flex items-center">
                  <Icon name="AlertTriangle" size="sm" className="mr-2" />
                  {error}
                </div>
              </div>
            )}

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
                  autoComplete="current-password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="block w-full pl-10 pr-3 py-2.5 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Enter your password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-green-600 focus:ring-green-500 border-white/20 rounded bg-white/10"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-white/70">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <button type="button" className="text-green-400 hover:text-green-300 transition-colors">
                  Forgot password?
                </button>
              </div>
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
                    <span>Signing in...</span>
                  </>
                ) : (
                  <>
                    <Icon name="LogIn" size="sm" />
                    <span>Sign in as Host</span>
                  </>
                )}
              </GlassButton>

              <div className="text-center">
                <span className="text-white/60 text-sm">Don't have an account? </span>
                <button
                  type="button"
                  onClick={onSwitchToSignup}
                  className="text-green-400 hover:text-green-300 transition-colors text-sm font-medium"
                >
                  Sign up as Host
                </button>
              </div>
            </div>
          </form>
        </GlassCard>
      </div>
    </div>
  );
};

export default HostLoginModal;
