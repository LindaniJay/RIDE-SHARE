import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import GlassCard from './GlassCard';
import Icon from './Icon';
import AuthModal from './AuthModal';

interface RoleSelectorProps {
  className?: string;
}

const RoleSelector: React.FC<RoleSelectorProps> = ({ className = '' }) => {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authModalMode, setAuthModalMode] = useState<'login' | 'signup'>('login');

  const handleHostLogin = () => {
    setAuthModalMode('login');
    setAuthModalOpen(true);
  };

  const handleHostSignup = () => {
    setAuthModalMode('signup');
    setAuthModalOpen(true);
  };

  const roles = [
    {
      id: 'renter',
      title: 'Renter',
      description: 'Find and rent vehicles for your needs',
      icon: 'Car',
      color: 'from-blue-500 to-cyan-500',
      features: [
        'Browse available vehicles',
        'Book instantly',
        'Track your rentals',
        'Rate your experience'
      ],
      loginPath: '/login?role=renter',
      signupPath: '/register?role=renter'
    },
    {
      id: 'host',
      title: 'Host',
      description: 'List your vehicles and earn money',
      icon: 'Plus',
      color: 'from-green-500 to-emerald-500',
      features: [
        'List your vehicles',
        'Set your own prices',
        'Manage bookings',
        'Earn passive income'
      ],
      loginPath: null,
      signupPath: null
    },
    {
      id: 'admin',
      title: 'Admin',
      description: 'Manage the RideShare SA platform',
      icon: 'Settings',
      color: 'from-purple-500 to-pink-500',
      features: [
        'User management',
        'Vehicle approvals',
        'Platform analytics',
        'Support tickets'
      ],
      loginPath: '/admin-login',
      signupPath: null
    }
  ];

  return (
    <div className={`max-w-6xl mx-auto px-4 py-12 ${className}`}>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">
          Welcome to RideShare SA
        </h1>
        <p className="text-xl text-white/80">
          Choose how you'd like to use our platform
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {roles.map((role) => (
          <GlassCard key={role.id} className="p-8 text-center hover:scale-105 transition-transform duration-300">
            <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${role.color} flex items-center justify-center`}>
              <Icon name={role.icon} size="lg" className="text-white" />
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-3">{role.title}</h3>
            <p className="text-white/80 mb-6">{role.description}</p>
            
            <div className="space-y-2 mb-8">
              {role.features.map((feature, index) => (
                <div key={index} className="flex items-center text-white/70">
                  <Icon name="Check" size="sm" className="text-green-400 mr-2" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="space-y-3">
              {role.id === 'host' ? (
                <>
                  <button
                    onClick={handleHostLogin}
                    className={`block w-full py-3 px-6 rounded-lg bg-gradient-to-r ${role.color} text-white font-semibold hover:shadow-lg transition-all duration-300`}
                  >
                    Sign In
                  </button>
                  <button
                    onClick={handleHostSignup}
                    className="block w-full py-3 px-6 rounded-lg glass-button text-white font-semibold hover:bg-white/20 transition-all duration-300"
                  >
                    Sign Up
                  </button>
                </>
              ) : role.id === 'admin' ? (
                <>
                  <Link
                    to={role.loginPath!}
                    className={`block w-full py-3 px-6 rounded-lg bg-gradient-to-r ${role.color} text-white font-semibold hover:shadow-lg transition-all duration-300`}
                  >
                    Sign In
                  </Link>
                  <div className="text-center py-3 px-6 rounded-lg bg-white/5 text-white/60 text-sm">
                    Admin access by invitation only
                  </div>
                </>
              ) : (
                <>
                  <Link
                    to={role.loginPath!}
                    className={`block w-full py-3 px-6 rounded-lg bg-gradient-to-r ${role.color} text-white font-semibold hover:shadow-lg transition-all duration-300`}
                  >
                    Sign In
                  </Link>
                  <Link
                    to={role.signupPath!}
                    className="block w-full py-3 px-6 rounded-lg glass-button text-white font-semibold hover:bg-white/20 transition-all duration-300"
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </GlassCard>
        ))}
      </div>

      <div className="text-center mt-12">
        <p className="text-white/60 text-sm">
          Need help choosing?{' '}
          <Link to="/contact" className="text-white hover:text-white/80 transition-colors">
            Contact our support team
          </Link>
        </p>
      </div>

      {/* Authentication Modal */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        initialMode={authModalMode}
      />
    </div>
  );
};

export default RoleSelector;
