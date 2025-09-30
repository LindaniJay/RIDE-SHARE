import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Icon from '../components/Icon';
import GlassCard from '../components/GlassCard';
import GlassButton from '../components/GlassButton';

const Unauthorized: React.FC = () => {
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="mx-auto h-16 w-16 bg-gradient-to-r from-red-600 to-orange-600 rounded-full flex items-center justify-center">
            <Icon name="Shield" size="lg" className="text-white" />
          </div>
          <h2 className="mt-6 text-3xl font-bold text-white">
            Access Denied
          </h2>
          <p className="mt-2 text-sm text-gray-300">
            You don't have permission to access this page
          </p>
        </div>

        <GlassCard className="p-8 text-center">
          <div className="space-y-4">
            <p className="text-gray-300">
              {user ? (
                <>
                  You are logged in as a <span className="font-semibold text-white">{user.role}</span>.
                  <br />
                  This page requires different permissions.
                </>
              ) : (
                'You need to be logged in to access this page.'
              )}
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              {user ? (
                <>
                  <GlassButton
                    onClick={handleLogout}
                    className="flex-1 flex justify-center items-center space-x-2"
                  >
                    <Icon name="Logout" size="sm" />
                    <span>Switch Account</span>
                  </GlassButton>
                  <Link to="/dashboard" className="flex-1">
                    <GlassButton className="w-full flex justify-center items-center space-x-2">
                      <Icon name="Home" size="sm" />
                      <span>Go to Dashboard</span>
                    </GlassButton>
                  </Link>
                </>
              ) : (
                <Link to="/" className="flex-1">
                  <GlassButton className="w-full flex justify-center items-center space-x-2">
                    <Icon name="Login" size="sm" />
                    <span>Sign In</span>
                  </GlassButton>
                </Link>
              )}
            </div>

            <Link 
              to="/" 
              className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </GlassCard>
      </div>
    </div>
  );
};

export default Unauthorized;
