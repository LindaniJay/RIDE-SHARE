import React, { useState, Suspense, lazy } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import Icon from '../components/Icon';
import RealTimeNotifications from '../components/RealTimeNotifications';
import GlassButton from '../components/GlassButton';
import { navVariants, mobileMenuVariants, backdropVariants } from '../utils/motionVariants';

// Lazy load heavy components
const Chatbot = lazy(() => import('../components/Chatbot'));
import AuthModal from '../components/AuthModal';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { user, logout } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authModalMode, setAuthModalMode] = useState<'login' | 'signup'>('login');
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const handleAuthModalOpen = (mode: 'login' | 'signup') => {
    setAuthModalMode(mode);
    setIsAuthModalOpen(true);
  };

  const handleAuthModalClose = () => {
    setIsAuthModalOpen(false);
  };



  const navItems = [
    { name: 'Home', path: '/', icon: 'Home' },
    { name: 'Browse', path: '/search', icon: 'Search' },
    { name: 'Pricing', path: '/pricing', icon: 'DollarSign' },
    { name: 'Host', path: '/dashboard/host', icon: 'Car' },
    { name: 'About', path: '/about', icon: 'Info' },
    { name: 'Contact', path: '/contact', icon: 'Phone' },
  ];

  return (
    <div className="min-h-screen">
      {/* Header with Logo and Navbar */}
      <motion.header 
        className="fixed top-2 sm:top-4 left-0 right-0 z-50 w-full px-2 sm:px-4"
        variants={navVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex items-center justify-between max-w-6xl mx-auto h-14 sm:h-16 relative">
          {/* Logo - Left side */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <Link 
              to="/" 
              className="flex items-center h-full z-10"
            >
              <div className="flex items-center glass-3 rounded-xl h-full px-2 sm:px-3 lg:px-6 shadow-glass border border-white/20 hover:shadow-glass-lg hover:border-white/30 transition-all duration-300 relative overflow-hidden">
                {/* Shimmer effect */}
                <div className="absolute inset-0 -top-2 -left-2 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 transform -skew-x-12 -translate-x-full hover:translate-x-full" />
                
                <div className="ml-1 sm:ml-2 lg:ml-3 relative z-10">
                  <div className="text-white font-bold text-xs sm:text-sm lg:text-lg transition-all duration-300 font-heading text-shadow-sm">RideShare</div>
                  <div className="text-white/80 text-xs font-medium font-body text-shadow-sm">South Africa</div>
                </div>
                
                {/* Reflection highlight */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-50" />
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex items-center absolute left-1/2 transform -translate-x-1/2">
            <div className="glass-4 rounded-full shadow-glass px-2 lg:px-4 py-2 relative overflow-hidden">
              {/* Shimmer effect */}
              <div className="absolute inset-0 -top-2 -left-2 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 transform -skew-x-12 -translate-x-full hover:translate-x-full" />
              
              <div className="flex items-center justify-center h-[40px] px-2 lg:px-4 relative z-10">
                <div className="flex items-center space-x-1">
                  {navItems.map((item, index) => {
                    // Special handling for Host button - show auth modal if not logged in
                    if (item.name === 'Host' && !user) {
                      return (
                        <motion.button
                          key={item.path}
                          onClick={() => handleAuthModalOpen('signup')}
                          className="flex items-center space-x-1 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 text-white/80 hover:text-white hover:bg-white/10 font-body"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          initial={{ opacity: 0, y: -20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <Icon name={item.icon} size="sm" />
                          <span>{item.name}</span>
                        </motion.button>
                      );
                    }
                    
                    // Regular navigation for other items or authenticated users
                    return (
                      <motion.div
                        key={item.path}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          to={item.path}
                          className={`flex items-center space-x-1 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 font-body ${
                            isActive(item.path)
                              ? 'bg-primary-500/20 text-white border border-primary-500/30 shadow-glow'
                              : 'text-white/80 hover:text-white hover:bg-white/10'
                          }`}
                        >
                          <Icon name={item.icon} size="sm" />
                          <span>{item.name}</span>
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
              
              {/* Reflection highlight */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-50" />
            </div>
          </nav>

          {/* Right side actions - Desktop */}
          <div className="hidden md:flex items-center space-x-2">
            {user ? (
              <motion.div 
                className="flex items-center space-x-2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <RealTimeNotifications userId={user.id} userRole={user.role === 'Renter' ? 'renter' : user.role === 'Host' ? 'host' : 'admin'} />
                <GlassButton
                  onClick={() => window.location.href = '/dashboard'}
                  variant={isActive('/dashboard') || location.pathname.startsWith('/dashboard') ? 'primary' : 'secondary'}
                  size="sm"
                  icon={<Icon name="User" size="sm" />}
                  className="hidden sm:flex"
                >
                  <span className="hidden sm:block">Dashboard</span>
                </GlassButton>
                <GlassButton
                  onClick={logout}
                  variant="ghost"
                  size="sm"
                  icon={<Icon name="Logout" size="sm" />}
                  className="hidden sm:flex"
                >
                  <span className="hidden sm:block">Logout</span>
                </GlassButton>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <GlassButton
                  onClick={() => handleAuthModalOpen('signup')}
                  variant="primary"
                  size="sm"
                  icon={<Icon name="Plus" size="sm" />}
                  glow
                >
                  <span className="hidden sm:block">Get Started</span>
                </GlassButton>
              </motion.div>
            )}
          </div>

          {/* Mobile Navigation - Right side */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Mobile user actions */}
            {user ? (
              <div className="flex items-center space-x-1">
                <Link
                  to="/dashboard"
                  className={`flex items-center space-x-1 px-2 py-1.5 rounded-lg text-xs font-medium transition-all duration-300 ${
                    isActive('/dashboard') || location.pathname.startsWith('/dashboard')
                      ? 'glass-button-primary text-white'
                      : 'glass-button text-white/80 hover:text-white'
                  }`}
                >
                  <Icon name="User" size="sm" />
                </Link>
                <button
                  onClick={logout}
                  className="glass-button flex items-center space-x-1 px-2 py-1.5 text-white/80 hover:text-white transition-all duration-300"
                >
                  <Icon name="Logout" size="sm" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => handleAuthModalOpen('signup')}
                className="glass-button-primary flex items-center space-x-1 px-2 py-1.5 rounded-lg text-xs font-medium transition-all duration-300"
              >
                <Icon name="Plus" size="sm" />
                <span className="hidden xs:block">Start</span>
              </button>
            )}
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="glass-button p-1.5 text-white/80 hover:text-white transition-all duration-300"
            >
              <Icon name="Menu" size="sm" />
            </button>
          </div>
              
        </div>
      </motion.header>
      
      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div 
              className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              onClick={() => setIsMobileMenuOpen(false)}
              variants={backdropVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            />
            
            {/* Mobile menu */}
            <motion.div 
              className="md:hidden fixed top-16 sm:top-18 left-2 right-2 sm:left-4 sm:right-4 z-50 glass-4 rounded-2xl shadow-glass-lg px-3 sm:px-4 py-4 max-h-[75vh] overflow-y-auto relative overflow-hidden"
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 -top-2 -left-2 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 transform -skew-x-12 -translate-x-full hover:translate-x-full" />
              
              {/* Header with close button */}
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/20 relative z-10">
                <h3 className="text-white font-semibold text-base sm:text-lg font-heading text-shadow-sm">Menu</h3>
                <motion.button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="glass-2 p-1.5 sm:p-2 text-white/80 hover:text-white transition-all duration-300 rounded-lg"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon name="X" size="sm" />
                </motion.button>
              </div>
              
              {/* Enhanced readability overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-black/5 rounded-inherit pointer-events-none" />
              <div className="space-y-2 relative z-10">
                {/* Navigation Items */}
                <div className="space-y-1">
                  {navItems.map((item) => {
                  // Special handling for Host button - show auth modal if not logged in
                  if (item.name === 'Host' && !user) {
                    return (
                      <button
                        key={item.path}
                        onClick={() => {
                          handleAuthModalOpen('signup');
                          setIsMobileMenuOpen(false);
                        }}
                        className="flex items-center space-x-3 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg text-sm font-medium transition-all duration-300 w-full glass-button text-white/80 hover:text-white"
                      >
                        <Icon name={item.icon} size="sm" />
                        <span>{item.name}</span>
                      </button>
                    );
                  }
                  
                  // Regular navigation for other items or authenticated users
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center space-x-3 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg text-sm font-medium transition-all duration-300 w-full ${
                        isActive(item.path)
                          ? 'glass-button-primary text-white'
                          : 'glass-button text-white/80 hover:text-white'
                      }`}
                    >
                      <Icon name={item.icon} size="sm" />
                      <span>{item.name}</span>
                    </Link>
                  );
                  })}
                </div>
              
              {/* User Authentication Section */}
              <div className="pt-3 border-t border-white/20">
                {user ? (
                  <div className="space-y-1">
                    <div className="px-3 sm:px-4 py-2 text-white/70 text-xs font-medium truncate">
                      Welcome, {user.email}
                    </div>
                    <div className="px-3 sm:px-4 py-1 text-white/50 text-xs">
                      Role: {user.role}
                    </div>
                    <Link
                      to="/dashboard"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center space-x-3 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg text-sm font-medium transition-all duration-300 w-full ${
                        isActive('/dashboard') || location.pathname.startsWith('/dashboard')
                          ? 'glass-button-primary text-white'
                          : 'glass-button text-white/80 hover:text-white'
                      }`}
                    >
                      <Icon name="User" size="sm" />
                      <span>Dashboard</span>
                    </Link>
                    <button
                      onClick={() => {
                        logout();
                        setIsMobileMenuOpen(false);
                      }}
                      className="glass-button flex items-center space-x-3 w-full px-3 sm:px-4 py-2.5 sm:py-3 text-white/80 hover:text-white transition-all duration-300"
                    >
                      <Icon name="Logout" size="sm" />
                      <span>Logout</span>
                    </button>
                  </div>
                ) : (
                  <div className="space-y-1">
                    <button
                      onClick={() => {
                        handleAuthModalOpen('login');
                        setIsMobileMenuOpen(false);
                      }}
                      className="glass-button flex items-center space-x-3 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg text-sm font-medium transition-all duration-300 w-full text-white/80 hover:text-white"
                    >
                      <Icon name="Login" size="sm" />
                      <span>Login</span>
                    </button>
                    <button
                      onClick={() => {
                        handleAuthModalOpen('signup');
                        setIsMobileMenuOpen(false);
                      }}
                      className="glass-button-primary flex items-center space-x-3 px-3 sm:px-4 py-2.5 sm:py-3 w-full"
                    >
                      <Icon name="Plus" size="sm" />
                      <span>Sign Up</span>
                    </button>
                  </div>
                )}
              </div>
              </div>
              
              {/* Reflection highlight */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-50" />
            </motion.div>
          </>
        )}
      </AnimatePresence>
      
      {/* Main content with top padding to account for fixed header */}
      <main className="pt-16 sm:pt-20">{children}</main>
      
      {/* Minimal Footer */}
      <footer className="bg-black/50 backdrop-blur-sm border-t border-white/10 py-4">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            {/* Left: Logo and Copyright */}
            <div className="flex items-center space-x-4">
              <div className="logo-footer bg-white/20 backdrop-blur-md rounded-lg p-3 shadow-lg border border-white/40">
                <div className="text-white font-bold text-lg">RideShare</div>
                <div className="text-white/80 text-xs">South Africa</div>
              </div>
              <p className="text-gray-400 text-xs">
                © 2025 RideShare SA. Cape Town, South Africa
              </p>
            </div>
            
            {/* Center: Quick Links */}
            <div className="flex items-center flex-wrap gap-2 sm:gap-4 lg:gap-6 justify-center">
              <Link to="/" className="text-gray-400 hover:text-white transition-colors text-xs">Home</Link>
              <Link to="/search" className="text-gray-400 hover:text-white transition-colors text-xs">Browse</Link>
              <Link to="/about" className="text-gray-400 hover:text-white transition-colors text-xs">About</Link>
              <Link to="/contact" className="text-gray-400 hover:text-white transition-colors text-xs">Contact</Link>
              <Link to="/faq" className="text-gray-400 hover:text-white transition-colors text-xs">
                FAQ
              </Link>
            </div>
            
            {/* Right: Social Links */}
            <div className="flex items-center space-x-2 sm:space-x-4 flex-wrap gap-2 justify-center lg:justify-end">
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Chatbot */}
      <Suspense fallback={null}>
        <Chatbot />
      </Suspense>
      
      {/* Auth Modal */}
      <AuthModal 
        isOpen={isAuthModalOpen}
        onClose={handleAuthModalClose}
        initialMode={authModalMode}
      />
      
    </div>
  );
};

export default Layout;
