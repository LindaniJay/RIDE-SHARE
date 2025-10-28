import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import Icon from './Icon';
import { fabVariants } from '../utils/motionVariants';

interface MobileBottomNavProps {
  className?: string;
}

const MobileBottomNav: React.FC<MobileBottomNavProps> = ({ className = '' }) => {
  const { user } = useAuth();
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navItems = [
    { name: 'Home', path: '/', icon: 'Home' },
    { name: 'Search', path: '/search', icon: 'Search' },
    { name: 'Messages', path: '/messages', icon: 'MessageCircle' },
    { name: 'Profile', path: user ? '/dashboard' : '/login', icon: 'User' },
  ];

  return (
    <motion.div
      className={`fixed bottom-0 left-0 right-0 z-50 md:hidden ${className}`}
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      {/* Glass bottom navigation */}
      <div className="glass-4 backdrop-blur-lg border-t border-white/20 shadow-glass-lg relative overflow-hidden">
        {/* Shimmer effect */}
        <div className="absolute inset-0 -top-2 -left-2 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 transform -skew-x-12 -translate-x-full hover:translate-x-full" />
        
        <div className="flex items-center justify-around px-2 py-2 relative z-10">
          {navItems.map((item, index) => (
            <motion.div
              key={item.path}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={item.path}
                className={`
                  flex flex-col items-center justify-center p-2 rounded-xl transition-all duration-300
                  ${isActive(item.path)
                    ? 'bg-primary-500/20 text-white border border-primary-500/30 shadow-glow'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                  }
                `}
              >
                <motion.div
                  variants={fabVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="flex flex-col items-center space-y-1"
                >
                  <Icon 
                    name={item.icon} 
                    size="sm" 
                    className={isActive(item.path) ? 'text-primary-400' : ''}
                  />
                  <span className="text-xs font-medium font-body">
                    {item.name}
                  </span>
                </motion.div>
                
                {/* Active indicator */}
                {isActive(item.path) && (
                  <motion.div
                    className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary-400 rounded-full"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
              </Link>
            </motion.div>
          ))}
        </div>
        
        {/* Reflection highlight */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-50" />
      </div>
    </motion.div>
  );
};

export default MobileBottomNav;
