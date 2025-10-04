import React, { useState, useEffect } from 'react';
import Icon from './Icon';

interface ToastProps {
  message: string;
  type: 'success' | 'error' | 'warning' | 'info';
  duration?: number;
  onClose?: () => void;
}

const Toast: React.FC<ToastProps> = ({ 
  message, 
  type, 
  duration = 5000, 
  onClose 
}) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => onClose?.(), 300);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const typeStyles = {
    success: 'bg-green-500/90 border-green-400 text-white',
    error: 'bg-red-500/90 border-red-400 text-white',
    warning: 'bg-yellow-500/90 border-yellow-400 text-white',
    info: 'bg-blue-500/90 border-blue-400 text-white'
  };

  const icons = {
    success: 'CheckCircle',
    error: 'XCircle',
    warning: 'AlertTriangle',
    info: 'Info'
  };

  if (!isVisible) return null;

  return (
    <div className={`fixed top-4 right-4 z-50 p-4 rounded-lg border backdrop-blur-md transition-all duration-300 ${typeStyles[type]}`}>
      <div className="flex items-center space-x-2">
        <Icon name={icons[type]} className="h-5 w-5" />
        <span className="font-medium">{message}</span>
        <button
          onClick={() => {
            setIsVisible(false);
            setTimeout(() => onClose?.(), 300);
          }}
          className="ml-2 hover:bg-white/20 rounded p-1"
        >
          <Icon name="X" className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default Toast;