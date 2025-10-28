import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useAdminAuth } from '../context/AdminAuthContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import Icon from '../components/Icon';
import GlassCard from '../components/GlassCard';
import GlassButton from '../components/GlassButton';
import GlassInput from '../components/GlassInput';
import { containerVariants, itemVariants } from '../utils/motionVariants';

const AdminLogin: React.FC = () => {
  const { login, loading } = useAdminAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Redirect if already logged in as admin
    if (loading === false) {
      // Check if user is already admin (this will be handled by context)
    }
  }, [loading]);

  const handleInputChange = (fieldName: string, value: string) => {
    try {
      setFormData(prev => ({
        ...prev,
        [fieldName]: value
      }));
      
      // Clear error when user starts typing
      if (errors[fieldName]) {
        setErrors(prev => ({
          ...prev,
          [fieldName]: ''
        }));
      }
    } catch (error) {
      console.error('Error in handleInputChange:', error);
    }
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      await login(formData.email, formData.password);
      toast.success('Admin login successful');
      // Navigation will be handled by AdminAuthContext
    } catch (error: any) {
      console.error('Admin login error:', error);
      toast.error(error.message || 'Admin login failed');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <div className="page-background">
      <div className="fixed inset-0 bg-gradient-to-br from-red-900/20 via-purple-900/20 to-indigo-900/20 backdrop-blur-sm"></div>
      
      <motion.div 
        className="relative min-h-screen flex items-center justify-center p-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          className="w-full max-w-md"
          variants={itemVariants}
        >
          <GlassCard 
            level={3}
            hover
            animated
            className="p-8"
          >
            {/* Header */}
            <div className="text-center mb-8">
              <motion.div 
                className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-red-400 to-pink-500 flex items-center justify-center shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Icon name="Shield" size="lg" className="text-white" />
              </motion.div>
              
              <h1 className="text-3xl font-bold text-white font-heading mb-2">
                Admin Access
              </h1>
              <p className="text-white/70 font-body">
                Secure admin authentication required
              </p>
              <div className="mt-3">
                <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm font-medium border border-red-500/30">
                  🔒 Admin Only
                </span>
              </div>
            </div>

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                  Admin Email
                </label>
                <GlassInput
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={(value) => handleInputChange('email', value)}
                  placeholder="admin@rideshare.co.za"
                  error={errors.email}
                  disabled={isSubmitting}
                  icon={<Icon name="Mail" size="sm" />}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-white/80 mb-2">
                  Password
                </label>
                <GlassInput
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={(value) => handleInputChange('password', value)}
                  placeholder="Enter admin password"
                  error={errors.password}
                  disabled={isSubmitting}
                  icon={<Icon name="Lock" size="sm" />}
                />
                {errors.password && (
                  <p className="mt-1 text-sm text-red-400">{errors.password}</p>
                )}
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <GlassButton
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting || loading}
                  icon={isSubmitting ? <Icon name="Loader2" size="sm" className="animate-spin" /> : <Icon name="LogIn" size="sm" />}
                >
                  {isSubmitting ? 'Signing In...' : 'Sign In as Admin'}
                </GlassButton>
              </motion.div>
            </form>

            {/* Footer */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <div className="text-center space-y-4">
                <p className="text-white/60 text-sm">
                  Admin access is restricted to authorized personnel only
                </p>
                
                <GlassButton
                  onClick={handleBackToHome}
                  variant="secondary"
                  size="sm"
                  icon={<Icon name="ArrowLeft" size="sm" />}
                >
                  Back to Home
                </GlassButton>
              </div>
            </div>

            {/* Security Notice */}
            <div className="mt-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
              <div className="flex items-start space-x-3">
                <Icon name="AlertTriangle" size="sm" className="text-red-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-medium text-red-400 mb-1">Security Notice</h4>
                  <p className="text-xs text-white/70">
                    All admin activities are logged and monitored. Unauthorized access attempts will be reported.
                  </p>
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AdminLogin;