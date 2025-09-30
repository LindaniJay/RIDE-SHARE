import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import Icon from './Icon';

interface MobileOptimizedLayoutProps {
  children: React.ReactNode;
  title: string;
  showBackButton?: boolean;
  onBackClick?: () => void;
}

const MobileOptimizedLayout: React.FC<MobileOptimizedLayoutProps> = ({
  children,
  title,
  showBackButton = false,
  onBackClick
}) => {
  const { user } = useAuth();
  const [isMobile, setIsMobile] = useState(false);
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <div className="page-background">
      {/* Offline Banner */}
      {!isOnline && (
        <div className="bg-red-500 text-white text-center py-2 px-4">
          <div className="flex items-center justify-center space-x-2">
            <Icon name="Wifi" size="sm" />
            <span>You're offline. Some features may be limited.</span>
          </div>
        </div>
      )}

      {/* Mobile Header */}
      {isMobile && (
        <div className="bg-white/10 backdrop-blur-md border-b border-white/20 px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {showBackButton && (
                <button
                  onClick={onBackClick}
                  className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                >
                  <Icon name="ArrowLeft" size="sm" className="text-white" />
                </button>
              )}
              <h1 className="text-lg font-semibold text-white truncate">{title}</h1>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-semibold text-sm">
                  {user?.firstName?.[0] || 'U'}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Desktop Header */}
      {!isMobile && (
        <div className="bg-white/10 backdrop-blur-md border-b border-white/20 px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-white">{title}</h1>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-white/70">
                <Icon name="Wifi" size="sm" className={isOnline ? 'text-green-400' : 'text-red-400'} />
                <span className="text-sm">{isOnline ? 'Online' : 'Offline'}</span>
              </div>
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-semibold">
                  {user?.firstName?.[0] || 'U'}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Content */}
      <div className={`${isMobile ? 'p-4' : 'p-6'}`}>
        {children}
      </div>

      {/* Mobile Bottom Navigation */}
      {isMobile && (
        <div className="fixed bottom-0 left-0 right-0 bg-white/10 backdrop-blur-md border-t border-white/20 relative">
          {/* Enhanced readability overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-black/5 pointer-events-none" />
          <div className="grid grid-cols-4 gap-1 p-2 relative z-10">
            <button className="flex flex-col items-center space-y-1 p-2 text-white/70 hover:text-white transition-colors text-shadow-sm">
              <Icon name="Home" size="sm" />
              <span className="text-xs text-shadow-sm">Home</span>
            </button>
            <button className="flex flex-col items-center space-y-1 p-2 text-white/70 hover:text-white transition-colors text-shadow-sm">
              <Icon name="Search" size="sm" />
              <span className="text-xs text-shadow-sm">Search</span>
            </button>
            <button className="flex flex-col items-center space-y-1 p-2 text-white/70 hover:text-white transition-colors text-shadow-sm">
              <Icon name="MessageCircle" size="sm" />
              <span className="text-xs text-shadow-sm">Messages</span>
            </button>
            <button className="flex flex-col items-center space-y-1 p-2 text-white/70 hover:text-white transition-colors text-shadow-sm">
              <Icon name="User" size="sm" />
              <span className="text-xs text-shadow-sm">Profile</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileOptimizedLayout;
