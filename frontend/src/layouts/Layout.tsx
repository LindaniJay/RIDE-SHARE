import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { useTheme } from '../hooks/useTheme';
import Chatbot from '../components/Chatbot';
import Icon from '../components/Icon';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { user, logout } = useAuth();
  const { isDark, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navItems = [
    { name: 'Home', path: '/', icon: 'Home' },
    { name: 'Browse', path: '/search', icon: 'Search' },
    { name: 'Host', path: '/dashboard/host', icon: 'Car' },
    { name: 'About', path: '/about', icon: 'Info' },
    { name: 'Contact', path: '/contact', icon: 'Phone' },
  ];

  return (
    <div className="min-h-screen">
      {/* Header with Logo and Navbar */}
      <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-6xl px-4">
        <div className="flex items-center justify-between">
          {/* Logo - Left side, same height as navbar */}
          <Link 
            to="/" 
            className="flex items-center hover:opacity-80 transition-all duration-300"
          >
            <img 
              src="/logo.png" 
              alt="RideShare SA Logo" 
              className="h-[60px] w-auto drop-shadow-lg"
            />
          </Link>

          {/* Navbar - Right side with enhanced glassmorphism */}
          <nav className="flex items-center">
            <div className="bg-white/25 backdrop-blur-md border border-white/20 rounded-full shadow-xl px-6 py-3">
              <div className="flex items-center justify-center h-[60px] px-6">
                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-2">
                  {navItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
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
                <div className="flex items-center space-x-2 ml-4">
              {/* Theme toggle */}
              <button
                onClick={toggleTheme}
                className="glass-button p-2 text-white/80 hover:text-white transition-all duration-300"
                title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                <Icon name={isDark ? 'Sun' : 'Moon'} size="sm" />
              </button>
              
              {user ? (
                <div className="flex items-center space-x-2">
                  <Link
                    to="/dashboard"
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
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
                    className="glass-button flex items-center space-x-2 px-3 py-2 text-white/80 hover:text-white transition-all duration-300"
                  >
                    <Icon name="Logout" size="sm" />
                    <span className="hidden sm:block">Logout</span>
                  </button>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <Link
                    to="/login"
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      isActive('/login')
                        ? 'glass-button-primary text-white'
                        : 'glass-button text-white/80 hover:text-white'
                    }`}
                  >
                    <Icon name="Login" size="sm" />
                    <span className="hidden sm:block">Login</span>
                  </Link>
                  <Link
                    to="/register"
                    className="btn-primary flex items-center space-x-2 px-4 py-2"
                  >
                    <Icon name="Plus" size="sm" />
                    <span className="hidden sm:block">Sign Up</span>
                  </Link>
                </div>
              )}
              
              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden glass-button p-2 text-white/80 hover:text-white transition-all duration-300"
              >
                <Icon name="Menu" size="sm" />
              </button>
                </div>
              </div>
              
              {/* Mobile Navigation */}
              {isMobileMenuOpen && (
                <div className="md:hidden border-t border-white/20 mt-2 pt-4 pb-4">
                  <div className="space-y-2">
                    {navItems.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                          isActive(item.path)
                            ? 'glass-button-primary text-white'
                            : 'glass-button text-white/80 hover:text-white'
                        }`}
                      >
                        <Icon name={item.icon} size="sm" />
                        <span>{item.name}</span>
                      </Link>
                    ))}
                    {user ? (
                      <>
                        <Link
                          to="/dashboard"
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
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
                      </>
                    ) : (
                      <>
                        <Link
                          to="/login"
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                            isActive('/login')
                              ? 'glass-button-primary text-white'
                              : 'glass-button text-white/80 hover:text-white'
                          }`}
                        >
                          <Icon name="Login" size="sm" />
                          <span>Login</span>
                        </Link>
                        <Link
                          to="/register"
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="btn-primary flex items-center space-x-3 px-4 py-3"
                        >
                          <Icon name="Plus" size="sm" />
                          <span>Sign Up</span>
                        </Link>
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>
          </nav>
        </div>
      </header>
      
      {/* Main content with top padding to account for fixed header */}
      <main className="pt-20">{children}</main>
      
      {/* Modern Footer */}
      <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                      {/* Brand Section */}
                      <div className="md:col-span-2">
                        <div className="flex items-center mb-6">
                          <img 
                            src="/logo.png" 
                            alt="RideShare SA Logo" 
                            className="h-12 w-auto"
                          />
                        </div>
              <p className="text-gray-300 mb-6 max-w-md">
                South Africa's premier peer-to-peer vehicle rental platform. 
                Connect with trusted hosts and renters across the country.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110" aria-label="Facebook">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110" aria-label="Twitter">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110" aria-label="Instagram">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.807-.875-1.297-2.026-1.297-3.323s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110" aria-label="LinkedIn">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-300 hover:text-white transition-colors text-sm">Home</Link></li>
                <li><Link to="/search" className="text-gray-300 hover:text-white transition-colors text-sm">Browse Vehicles</Link></li>
                <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors text-sm">About Us</Link></li>
                <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors text-sm">Contact</Link></li>
                <li><Link to="/faq" className="text-gray-300 hover:text-white transition-colors text-sm">FAQ</Link></li>
              </ul>
            </div>
            
            {/* Support */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Help Center</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Safety Guidelines</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Terms of Service</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Insurance</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2024 RideShare SA. All rights reserved. | Cape Town, South Africa
              </p>
              <div className="flex items-center space-x-4 text-sm text-gray-400">
                <span>🔒 Secure Payments</span>
                <span>🛡️ Insured Rentals</span>
                <span>⭐ Trusted Platform</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Chatbot */}
      <Chatbot />
    </div>
  );
};

export default Layout;
