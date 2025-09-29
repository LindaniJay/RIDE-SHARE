import React from 'react';
import { profileStatusService } from '../services/profileStatusService';
import Icon from './Icon';

interface ProfileStatusDisplayProps {
  onEditProfile?: () => void;
  onResubmitProfile?: () => void;
}

export const ProfileStatusDisplay: React.FC<ProfileStatusDisplayProps> = ({
  onEditProfile,
  onResubmitProfile
}) => {
  const profileStatus = profileStatusService.getProfileStatus();

  if (!profileStatus.isCompleted) {
    return null; // Don't show anything if profile is not completed
  }

  const getStatusIcon = () => {
    switch (profileStatus.approvalStatus) {
      case 'approved':
        return <Icon name="CheckCircle" size="lg" className="text-green-400" />;
      case 'rejected':
        return <Icon name="XCircle" size="lg" className="text-red-400" />;
      case 'pending':
        return <Icon name="Clock" size="lg" className="text-yellow-400" />;
      default:
        return <Icon name="AlertCircle" size="lg" className="text-gray-400" />;
    }
  };

  const getActionButton = () => {
    if (profileStatus.approvalStatus === 'rejected') {
      return (
        <button
          onClick={onResubmitProfile}
          className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-lg hover:bg-blue-500/30 transition-colors border border-blue-500/30"
        >
          <Icon name="RefreshCw" size="sm" className="mr-2" />
          Resubmit Profile
        </button>
      );
    }

    if (profileStatus.approvalStatus === 'pending') {
      return (
        <button
          onClick={onEditProfile}
          className="px-4 py-2 bg-gray-500/20 text-gray-300 rounded-lg hover:bg-gray-500/30 transition-colors border border-gray-500/30"
        >
          <Icon name="Edit" size="sm" className="mr-2" />
          Edit Profile
        </button>
      );
    }

    return null;
  };

  return (
    <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 mb-6">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          {getStatusIcon()}
        </div>
        
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold text-white">
              Profile Status
            </h3>
            <span className={`px-3 py-1 rounded-full text-sm font-medium border ${profileStatusService.getApprovalStatusBadgeColor()}`}>
              {profileStatus.approvalStatus.toUpperCase()}
            </span>
          </div>
          
          <p className={`text-sm mb-3 ${profileStatusService.getApprovalStatusColor()}`}>
            {profileStatusService.getApprovalStatusText()}
          </p>

          {profileStatus.completionDate && (
            <p className="text-xs text-white/60 mb-3">
              Completed: {profileStatus.completionDate.toLocaleDateString()}
            </p>
          )}

          {profileStatus.adminNotes && (
            <div className="bg-white/5 rounded-lg p-3 mb-3">
              <p className="text-sm text-white/80">
                <strong>Admin Notes:</strong> {profileStatus.adminNotes}
              </p>
            </div>
          )}

          {profileStatus.rejectionReason && (
            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3 mb-3">
              <p className="text-sm text-red-300">
                <strong>Rejection Reason:</strong> {profileStatus.rejectionReason}
              </p>
            </div>
          )}

          {getActionButton() && (
            <div className="mt-4">
              {getActionButton()}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileStatusDisplay;
