import { ApprovalStatus } from '../types';

export interface ProfileStatus {
  isCompleted: boolean;
  completionDate?: Date;
  approvalStatus: ApprovalStatus;
  submittedAt?: Date;
  adminNotes?: string;
  rejectionReason?: string;
}

class ProfileStatusService {
  private readonly PROFILE_STATUS_KEY = 'profileStatus';

  // Get current profile status
  getProfileStatus(): ProfileStatus {
    try {
      const stored = localStorage.getItem(this.PROFILE_STATUS_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        return {
          ...parsed,
          completionDate: parsed.completionDate ? new Date(parsed.completionDate) : undefined,
          submittedAt: parsed.submittedAt ? new Date(parsed.submittedAt) : undefined
        };
      }
    } catch (error) {
      console.error('Error reading profile status:', error);
    }

    // Default status
    return {
      isCompleted: false,
      approvalStatus: 'pending'
    };
  }

  // Set profile as completed
  setProfileCompleted(_profileData: any): void {
    const status: ProfileStatus = {
      isCompleted: true,
      completionDate: new Date(),
      approvalStatus: 'pending',
      submittedAt: new Date()
    };

    localStorage.setItem(this.PROFILE_STATUS_KEY, JSON.stringify(status));
  }

  // Update approval status (called when admin approves/rejects)
  updateApprovalStatus(approvalStatus: ApprovalStatus, adminNotes?: string, rejectionReason?: string): void {
    const currentStatus = this.getProfileStatus();
    const updatedStatus: ProfileStatus = {
      ...currentStatus,
      approvalStatus,
      adminNotes,
      rejectionReason
    };

    localStorage.setItem(this.PROFILE_STATUS_KEY, JSON.stringify(updatedStatus));
  }

  // Clear profile status (for testing or reset)
  clearProfileStatus(): void {
    localStorage.removeItem(this.PROFILE_STATUS_KEY);
  }

  // Check if profile is completed
  isProfileCompleted(): boolean {
    return this.getProfileStatus().isCompleted;
  }

  // Check if profile is approved
  isProfileApproved(): boolean {
    return this.getProfileStatus().approvalStatus === 'approved';
  }

  // Check if profile is pending approval
  isProfilePending(): boolean {
    return this.getProfileStatus().approvalStatus === 'pending';
  }

  // Check if profile is rejected
  isProfileRejected(): boolean {
    return this.getProfileStatus().approvalStatus === 'rejected';
  }

  // Get approval status text
  getApprovalStatusText(): string {
    const status = this.getProfileStatus();
    
    switch (status.approvalStatus) {
      case 'approved':
        return 'Profile Approved - You can now book vehicles!';
      case 'rejected':
        return 'Profile Rejected - Please update and resubmit';
      case 'pending':
        return 'Profile Pending Approval - Please wait for admin review';
      default:
        return 'Profile Status Unknown';
    }
  }

  // Get approval status color
  getApprovalStatusColor(): string {
    const status = this.getProfileStatus();
    
    switch (status.approvalStatus) {
      case 'approved':
        return 'text-green-400';
      case 'rejected':
        return 'text-red-400';
      case 'pending':
        return 'text-yellow-400';
      default:
        return 'text-gray-400';
    }
  }

  // Get approval status badge color
  getApprovalStatusBadgeColor(): string {
    const status = this.getProfileStatus();
    
    switch (status.approvalStatus) {
      case 'approved':
        return 'bg-green-500/20 text-green-300 border-green-500/30';
      case 'rejected':
        return 'bg-red-500/20 text-red-300 border-red-500/30';
      case 'pending':
        return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30';
      default:
        return 'bg-gray-500/20 text-gray-300 border-gray-500/30';
    }
  }
}

export const profileStatusService = new ProfileStatusService();
export default profileStatusService;
