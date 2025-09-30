import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAdminAuth } from '../context/AdminAuthContext';
import Icon from '../components/Icon';
import GlassCard from '../components/GlassCard';
import GlassButton from '../components/GlassButton';
import AdminDebugInfo from '../components/AdminDebugInfo';

const AdminLogin: React.FC = () => {
  const { login, loading } = useAdminAuth();
  const navigate = useNavigate();
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
      // Navigation will be handled by the AdminAuthContext
    } catch (error: any) {
      setError(error.message || 'Login failed. Please check your credentials.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Back Button */}
        <div className="flex justify-start">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center space-x-2 text-white/70 hover:text-white transition-colors"
          >
            <Icon name="ArrowLeft" size="sm" />
            <span>Back</span>
          </button>
        </div>

        {/* Header */}
        <div className="text-center">
          <div className="mx-auto h-16 w-16 bg-gradient-to-r from-purple-600/90 to-pink-600/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl border border-white/30">
            <Icon name="Settings" size="lg" className="text-white" />
          </div>
          <h2 className="mt-6 text-3xl font-bold text-white">
            Admin Login
          </h2>
          <p className="mt-2 text-sm text-white/70">
            Access the RideShare SA admin dashboard
          </p>
        </div>

        {/* Login Form */}
        <GlassCard className="p-8">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {error && (
              <div className="bg-red-500/20 border border-red-400/30 rounded-lg p-4 text-red-200 text-sm">
                <div className="flex items-center">
                  <Icon name="AlertTriangle" size="sm" className="mr-2" />
                  {error}
                </div>
              </div>
            )}

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                Admin Email
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
                  className="block w-full pl-10 pr-3 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="admin@rideshare.co.za"
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
                  className="block w-full pl-10 pr-3 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                  className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-white/20 rounded bg-white/10"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-white/70">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <Link to="/forgot-password" className="text-purple-400 hover:text-purple-300 transition-colors">
                  Forgot password?
                </Link>
              </div>
            </div>

            <div>
              <GlassButton
                type="submit"
                disabled={isSubmitting || loading}
                className="w-full flex justify-center items-center space-x-2 bg-gradient-to-r from-purple-600/90 to-pink-600/90 hover:from-purple-500/90 hover:to-pink-500/90 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting || loading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    <span>Signing in...</span>
                  </>
                ) : (
                  <>
                    <Icon name="LogIn" size="sm" />
                    <span>Sign in to Admin Dashboard</span>
                  </>
                )}
              </GlassButton>
            </div>
          </form>

          {/* Admin Credentials Info */}
          <div className="mt-6 p-4 bg-purple-500/10 border border-purple-400/30 rounded-lg">
            <div className="flex items-start">
              <Icon name="Shield" size="sm" className="text-purple-400 mr-2 mt-0.5" />
              <div className="text-sm text-purple-200">
                <p className="font-medium mb-1">Admin Access Only:</p>
                <p className="text-xs text-purple-300/80">
                  Admin accounts are pre-configured in Firebase. Use your assigned credentials to access the admin dashboard.
                </p>
              </div>
            </div>
          </div>
        </GlassCard>

        {/* Footer Links */}
        <div className="text-center space-y-4">
          <div className="flex justify-center space-x-4 text-sm">
            <Link to="/" className="text-white/70 hover:text-white transition-colors">
              Back to Home
            </Link>
            <span className="text-white/30">•</span>
            <Link to="/contact" className="text-white/70 hover:text-white transition-colors">
              Contact Support
            </Link>
          </div>
          
          <div className="text-xs text-white/50">
            <p>Admin access is by invitation only. Contact your system administrator for credentials.</p>
          </div>
        </div>
      </div>
      
      {/* Debug Info - Remove in production */}
      <AdminDebugInfo />
    </div>
  );
};

export default AdminLogin;
