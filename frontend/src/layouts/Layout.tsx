import React, { useState, Suspense, lazy } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { AdminAuthProvider } from '../context/AdminAuthContext';
import Icon from '../components/Icon';

// Lazy load heavy components
const Chatbot = lazy(() => import('../components/Chatbot'));
const AuthModal = lazy(() => import('../components/AuthModal'));
const AdminLoginModal = lazy(() => import('../components/AdminLoginModal'));

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { user, logout } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isAdminLoginModalOpen, setIsAdminLoginModalOpen] = useState(false);
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

  const handleAdminLoginModalOpen = () => {
    setIsAdminLoginModalOpen(true);
  };

  const handleAdminLoginModalClose = () => {
    setIsAdminLoginModalOpen(false);
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
      <header className="fixed top-4 left-0 right-0 z-50 w-full px-4">
        <div className="flex items-center max-w-6xl mx-auto h-16 relative">
          {/* Logo - Left side */}
          <Link 
            to="/" 
            className="flex items-center hover:opacity-80 transition-all duration-300 h-full z-10 absolute left-0"
          >
            <div className="flex items-center bg-white/20 backdrop-blur-md rounded-lg h-full px-3 sm:px-4 lg:px-6 shadow-xl border border-white/40 hover:bg-white/30 hover:shadow-2xl transition-all duration-300">
              <div className="ml-2 sm:ml-3">
                <div className="text-white font-bold text-sm lg:text-lg transition-all duration-300">RideShare</div>
                <div className="text-white/80 text-xs font-medium">South Africa</div>
              </div>
            </div>
          </Link>

          {/* Navbar - Centered */}
          <nav className="flex items-center absolute left-1/2 transform -translate-x-1/2 ml-4 lg:ml-8">
            <div className="bg-white/25 backdrop-blur-md border border-white/20 rounded-full shadow-xl px-2 lg:px-4 py-2">
              <div className="flex items-center justify-center h-[40px] px-2 lg:px-4">
                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-1">
                  {navItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`flex items-center space-x-1 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                        isActive(item.path)
                          ? 'glass-button-primary text-white'
                          : 'glass-button text-white/80 hover:text-white'
                      }`}
                    >
                      <Icon name={item.icon} size="sm" />
                      <span>{item.name}</span>
                    </Link>
                  ))}
                </div>
                
                {/* Right side actions */}
                <div className="flex items-center space-x-1 ml-3">
                  {user ? (
                    <div className="flex items-center space-x-1">
                      <Link
                        to="/dashboard"
                        className={`flex items-center space-x-1 px-2.5 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                          isActive('/dashboard') || location.pathname.startsWith('/dashboard')
                            ? 'glass-button-primary text-white'
                            : 'glass-button text-white/80 hover:text-white'
                        }`}
                      >
                        <Icon name="User" size="sm" />
                        <span className="hidden sm:block">Dashboard</span>
                      </Link>
                      <button
                        onClick={logout}
                        className="glass-button flex items-center space-x-1 px-2.5 py-1.5 text-white/80 hover:text-white transition-all duration-300"
                      >
                        <Icon name="Logout" size="sm" />
                        <span className="hidden sm:block">Logout</span>
                      </button>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-1">
                      <button
                        onClick={() => handleAuthModalOpen('signup')}
                        className="glass-button-primary flex items-center space-x-1 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300"
                      >
                        <Icon name="Plus" size="sm" />
                        <span className="hidden sm:block">Sign Up</span>
                      </button>
                    </div>
                  )}
              
              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden glass-button p-1.5 text-white/80 hover:text-white transition-all duration-300"
              >
                <Icon name="Menu" size="sm" />
              </button>
                </div>
              </div>
              
              {/* Mobile Navigation - Fixed positioning to show all buttons */}
              {isMobileMenuOpen && (
                <>
                  {/* Backdrop overlay */}
                  <div 
                    className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                    onClick={() => setIsMobileMenuOpen(false)}
                  />
                  
                  {/* Mobile menu */}
                  <div className="md:hidden fixed top-20 left-4 right-4 z-50 bg-white/25 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl px-4 py-4 max-h-[80vh] overflow-y-auto">
                    {/* Header with close button */}
                    <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/20">
                      <h3 className="text-white font-semibold text-lg">Menu</h3>
                      <button
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="glass-button p-2 text-white/80 hover:text-white transition-all duration-300"
                      >
                        <Icon name="X" size="sm" />
                      </button>
                    </div>
                    
                    {/* Enhanced readability overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-black/5 rounded-inherit pointer-events-none" />
                    <div className="space-y-2 relative z-10">
                    {/* Navigation Items */}
                    <div className="space-y-1">
                      {navItems.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 w-full ${
                            isActive(item.path)
                              ? 'glass-button-primary text-white'
                              : 'glass-button text-white/80 hover:text-white'
                          }`}
                        >
                          <Icon name={item.icon} size="sm" />
                          <span>{item.name}</span>
                        </Link>
                      ))}
                    </div>
                    {/* User Authentication Section */}
                    <div className="pt-3 border-t border-white/20">
                      {user ? (
                        <div className="space-y-1">
                          <div className="px-4 py-2 text-white/70 text-xs font-medium">
                            Welcome, {user.email}
                          </div>
                          <div className="px-4 py-2 text-white/50 text-xs">
                            Role: {user.role}
                          </div>
                          <Link
                            to="/dashboard"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 w-full ${
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
                            className="glass-button flex items-center space-x-3 w-full px-4 py-3 text-white/80 hover:text-white transition-all duration-300"
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
                            className="glass-button flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 w-full text-white/80 hover:text-white"
                          >
                            <Icon name="Login" size="sm" />
                            <span>Login</span>
                          </button>
                          <button
                            onClick={() => {
                              handleAuthModalOpen('signup');
                              setIsMobileMenuOpen(false);
                            }}
                            className="glass-button-primary flex items-center space-x-3 px-4 py-3 w-full"
                          >
                            <Icon name="Plus" size="sm" />
                            <span>Sign Up</span>
                          </button>
                        </div>
                      )}
                    </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </nav>

          {/* Right side spacer to balance layout */}
          <div className="absolute right-0 h-full flex items-center">
            {/* This space is reserved for future right-side elements */}
          </div>
        </div>
      </header>
      
      {/* Main content with top padding to account for fixed header */}
      <main className="pt-20">{children}</main>
      
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
              <button
                onClick={handleAdminLoginModalOpen}
                className="text-gray-400 hover:text-white transition-colors text-xs flex items-center space-x-1 whitespace-nowrap"
                title="Admin Login"
              >
                <Icon name="Settings" size="sm" />
                <span className="hidden sm:inline">Admin Login</span>
                <span className="sm:hidden">Admin</span>
              </button>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Chatbot */}
      <Suspense fallback={null}>
        <Chatbot />
      </Suspense>
      
      {/* Auth Modal */}
      <Suspense fallback={null}>
        <AuthModal 
          isOpen={isAuthModalOpen}
          onClose={handleAuthModalClose}
          initialMode={authModalMode}
        />
      </Suspense>
      
      {/* Admin Login Modal */}
      <AdminAuthProvider>
        <Suspense fallback={null}>
          <AdminLoginModal 
            isOpen={isAdminLoginModalOpen}
            onClose={handleAdminLoginModalClose}
          />
        </Suspense>
      </AdminAuthProvider>
    </div>
  );
};

export default Layout;
