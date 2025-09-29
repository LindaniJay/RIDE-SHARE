import React from 'react';
import Icon from './Icon';

interface StatusBadgeProps {
  status: 'pending' | 'approved' | 'rejected' | 'declined' | 'verified' | 'unverified' | 'confirmed' | 'cancelled' | 'completed';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ 
  status, 
  size = 'md', 
  className = '' 
}) => {
  const getStatusConfig = () => {
    switch (status) {
      case 'approved':
      case 'verified':
      case 'confirmed':
      case 'completed':
        return {
          bg: 'bg-green-500/20',
          text: 'text-green-300',
          border: 'border-green-500/30',
          icon: '✓'
        };
      case 'pending':
        return {
          bg: 'bg-yellow-500/20',
          text: 'text-yellow-300',
          border: 'border-yellow-500/30',
          icon: 'Clock'
        };
      case 'rejected':
      case 'declined':
      case 'cancelled':
        return {
          bg: 'bg-red-500/20',
          text: 'text-red-300',
          border: 'border-red-500/30',
          icon: '✗'
        };
      case 'unverified':
        return {
          bg: 'bg-gray-500/20',
          text: 'text-gray-300',
          border: 'border-gray-500/30',
          icon: '○'
        };
      default:
        return {
          bg: 'bg-gray-500/20',
          text: 'text-gray-300',
          border: 'border-gray-500/30',
          icon: '?'
        };
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'px-2 py-1 text-xs';
      case 'md':
        return 'px-3 py-1 text-sm';
      case 'lg':
        return 'px-4 py-2 text-base';
      default:
        return 'px-3 py-1 text-sm';
    }
  };

  const config = getStatusConfig();

  return (
    <span
      className={`
        inline-flex items-center space-x-1 rounded-full font-medium border
        ${config.bg} ${config.text} ${config.border} ${getSizeClasses()}
        ${className}
      `}
    >
      <Icon name={config.icon} size="sm" />
      <span className="capitalize">{status}</span>
    </span>
  );
};

export default StatusBadge;
