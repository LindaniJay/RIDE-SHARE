import React from 'react';

interface StatusBadgeProps {
  status: string;
  className?: string;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status, className = '' }) => {
  const getStatusConfig = (status: string) => {
    switch (status.toLowerCase()) {
      case 'approved':
      case 'active':
      case 'verified':
        return {
          bg: 'bg-green-500/20',
          text: 'text-green-400',
          border: 'border-green-400/30',
          label: 'Approved'
        };
      case 'pending':
      case 'waiting':
        return {
          bg: 'bg-yellow-500/20',
          text: 'text-yellow-400',
          border: 'border-yellow-400/30',
          label: 'Pending'
        };
      case 'declined':
      case 'rejected':
      case 'inactive':
        return {
          bg: 'bg-red-500/20',
          text: 'text-red-400',
          border: 'border-red-400/30',
          label: 'Declined'
        };
      case 'cancelled':
        return {
          bg: 'bg-gray-500/20',
          text: 'text-gray-400',
          border: 'border-gray-400/30',
          label: 'Cancelled'
        };
      default:
        return {
          bg: 'bg-gray-500/20',
          text: 'text-gray-400',
          border: 'border-gray-400/30',
          label: status
        };
    }
  };

  const config = getStatusConfig(status);

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${config.bg} ${config.text} ${config.border} ${className}`}
    >
      {config.label}
    </span>
  );
};

export default StatusBadge;
