import React from 'react';
import Icon from './Icon';
import { ApprovalStatus } from '../types';

interface UserApprovalStatusProps {
  status: ApprovalStatus;
  rejectionReason?: string;
  adminNotes?: string;
  className?: string;
}

export const UserApprovalStatus: React.FC<UserApprovalStatusProps> = ({
  status,
  rejectionReason,
  adminNotes,
  className = ''
}) => {
  const getStatusConfig = (status: ApprovalStatus) => {
    switch (status) {
      case 'approved':
        return {
          icon: 'CheckCircle',
          text: 'Approved',
          bgColor: 'bg-green-500/20',
          borderColor: 'border-green-500/30',
          textColor: 'text-green-300',
          description: 'Your account has been verified and approved. You can now make bookings.'
        };
      case 'rejected':
        return {
          icon: 'XCircle',
          text: 'Rejected',
          bgColor: 'bg-red-500/20',
          borderColor: 'border-red-500/30',
          textColor: 'text-red-300',
          description: 'Your account verification was rejected. Please review the feedback and resubmit your documents.'
        };
      case 'pending':
      default:
        return {
          icon: 'Clock',
          text: 'Pending Review',
          bgColor: 'bg-yellow-500/20',
          borderColor: 'border-yellow-500/30',
          textColor: 'text-yellow-300',
          description: 'Your documents are under review. You will be notified once the verification is complete.'
        };
    }
  };

  const config = getStatusConfig(status);

  return (
    <div className={`${config.bgColor} ${config.borderColor} border rounded-xl p-4 backdrop-blur-md ${className}`}>
      <div className="flex items-center space-x-3 mb-3">
        <Icon name={config.icon} size="lg" />
        <div>
          <h3 className={`text-lg font-semibold ${config.textColor}`}>
            {config.text}
          </h3>
          <p className="text-sm text-white/80">
            {config.description}
          </p>
        </div>
      </div>

      {status === 'rejected' && rejectionReason && (
        <div className="mt-3 p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
          <h4 className="text-sm font-medium text-red-300 mb-1">Rejection Reason:</h4>
          <p className="text-sm text-red-200">{rejectionReason}</p>
        </div>
      )}

      {adminNotes && (
        <div className="mt-3 p-3 bg-white/5 border border-white/10 rounded-lg">
          <h4 className="text-sm font-medium text-white/90 mb-1">Admin Notes:</h4>
          <p className="text-sm text-white/70">{adminNotes}</p>
        </div>
      )}

      {status === 'rejected' && (
        <div className="mt-4">
          <button className="w-full bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-all duration-300 border border-white/20">
            Resubmit Documents
          </button>
        </div>
      )}
    </div>
  );
};

export default UserApprovalStatus;
