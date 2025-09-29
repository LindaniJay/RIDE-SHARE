import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import Icon from '../components/Icon';
import { useAuth } from '../hooks/useAuth';
import GlassForm from '../components/GlassForm';
import GlassInput from '../components/GlassInput';
import GlassButton from '../components/GlassButton';

const Register: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    role: 'renter' as 'renter' | 'host',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }

    try {
      await register({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password,
        phone: formData.phone,
        role: formData.role,
      });
      
      // Get user role from localStorage and redirect accordingly
      const userRole = localStorage.getItem('userRole');
      if (userRole === 'admin') {
        navigate('/dashboard/admin');
      } else if (userRole === 'host') {
        navigate('/dashboard/host');
      } else {
        navigate('/dashboard');
      }
    } catch (err: unknown) {
      const errorMessage = err instanceof Error && 'response' in err 
        ? (err as { response?: { data?: { error?: string } } }).response?.data?.error 
        : 'Registration failed';
      setError(errorMessage || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
          <GlassForm
            title="Join RideShare SA"
            subtitle="Create your account and start your journey"
            onSubmit={handleSubmit}
            className="w-full"
          >
            {error && (
              <div className="bg-red-500/20 border border-red-400/30 rounded-xl p-4 backdrop-blur-md">
                <p className="text-sm text-red-200">{error}</p>
              </div>
            )}

            
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <GlassInput
                  label="First Name"
                  name="firstName"
                  type="text"
                  required
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  placeholder="First name"
                  icon="User"
                />
                <GlassInput
                  label="Last Name"
                  name="lastName"
                  type="text"
                  required
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  placeholder="Last name"
                  icon="User"
                />
              </div>
              
              <GlassInput
                label="Email address"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="Enter your email"
                icon="Mail"
              />
              
              <GlassInput
                label="Phone (optional)"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+27 82 123 4567"
                icon="Phone"
              />
              
              <div className="space-y-2">
                <label className="block text-sm font-medium text-white">
                  I want to
                </label>
                <select
                  name="role"
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value as 'renter' | 'host' })}
                  className="w-full px-4 py-3 rounded-xl text-white placeholder-white/50 bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-white/20 dark:focus:ring-white/10 transition-all duration-300 ease-in-out"
                >
                  <option value="renter" className="bg-gray-800 text-white">Rent vehicles</option>
                  <option value="host" className="bg-gray-800 text-white">List my vehicles</option>
                </select>
              </div>
              
              <GlassInput
                label="Password"
                name="password"
                type="password"
                required
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                placeholder="Create a password"
                icon="Lock"
                variant="password"
              />
              
              <GlassInput
                label="Confirm Password"
                name="confirmPassword"
                type="password"
                required
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                placeholder="Confirm your password"
                icon="Lock"
                variant="password"
              />

            </div>

            <GlassButton
              type="submit"
              disabled={loading}
              className="w-full"
              gradient={true}
              icon="🚀"
            >
              {loading ? 'Creating account...' : 'Create account'}
            </GlassButton>

            <div className="text-center">
              <p className="text-white/70 text-sm">
                Already have an account?{' '}
                <Link to="/login" className="font-medium text-white hover:text-white/80 transition-colors">
                  Sign in here
                </Link>
              </p>
            </div>
          </GlassForm>
      </div>
    </div>
  );
};

export default Register;
