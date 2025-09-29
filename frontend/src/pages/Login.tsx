import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import GlassForm from '../components/GlassForm';
import GlassInput from '../components/GlassInput';
import GlassButton from '../components/GlassButton';

const Login: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await login(formData.email, formData.password);
      
      // Get user role from localStorage and redirect accordingly
      const userRole = localStorage.getItem('userRole');
      if (userRole === 'admin') {
        navigate('/dashboard/admin');
      } else if (userRole === 'host') {
        navigate('/dashboard/host');
      } else {
        navigate('/dashboard');
      }
    } catch (error: unknown) {
      const errorMessage = error instanceof Error && 'response' in error 
        ? (error as { response?: { data?: { error?: string } } }).response?.data?.error 
        : 'Login failed. Please try again.';
      setError(errorMessage || 'Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
          <GlassForm
            title="Welcome Back"
            subtitle="Sign in to your RideShare SA account"
            onSubmit={handleSubmit}
            className="w-full"
          >
            {error && (
              <div className="bg-red-500/20 border border-red-400/30 rounded-xl p-4 backdrop-blur-md">
                <p className="text-sm text-red-200">{error}</p>
              </div>
            )}

            
            <div className="space-y-6">
              <GlassInput
                label="Email address"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                icon="✉️"
              />
              
              <GlassInput
                label="Password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                icon="🔒"
                variant="password"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-white/60 focus:ring-white/20 border-white/30 rounded bg-white/10"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-white/80">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-white/80 hover:text-white">
                  Forgot password?
                </a>
              </div>
            </div>

            <GlassButton
              type="submit"
              disabled={loading}
              className="w-full"
              gradient={true}
              icon="🚗"
            >
              {loading ? 'Signing in...' : 'Sign in'}
            </GlassButton>

            <div className="text-center">
              <p className="text-white/70 text-sm">
                Don't have an account?{' '}
                <Link to="/register" className="font-medium text-white hover:text-white/80 transition-colors">
                  Create one here
                </Link>
              </p>
            </div>
          </GlassForm>
      </div>
    </div>
  );
};

export default Login;
