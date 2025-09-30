import React, { useState } from 'react';
import { approvalRequestsAPI } from '../api';
import { notificationService } from '../services/notificationService';
import Icon from './Icon';
import GlassCard from './GlassCard';

interface ApprovalRequestFormProps {
  requestType: 'DocumentVerification' | 'VehicleListing' | 'InsuranceVerification' | 'ProfileVerification' | 'VehicleApproval';
  entityId: number;
  submittedBy: 'renter' | 'host';
  onSuccess?: () => void;
  onCancel?: () => void;
  title?: string;
  description?: string;
}

const ApprovalRequestForm: React.FC<ApprovalRequestFormProps> = ({
  requestType,
  entityId,
  submittedBy,
  onSuccess,
  onCancel,
  title,
  description
}) => {
  const [reviewNotes, setReviewNotes] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getRequestTypeLabel = (type: string) => {
    const labels: { [key: string]: string } = {
      'DocumentVerification': 'Document Verification',
      'VehicleListing': 'Vehicle Listing',
      'InsuranceVerification': 'Insurance Verification',
      'ProfileVerification': 'Profile Verification',
      'VehicleApproval': 'Vehicle Approval'
    };
    return labels[type] || type;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      setLoading(true);
      setError(null);

      const response = await approvalRequestsAPI.create({
        requestType,
        entityId,
        submittedBy,
        reviewNotes: reviewNotes.trim() || undefined
      });

      if (response.data.success) {
        // Show success notification
        notificationService.approvalSubmitted(getRequestTypeLabel(requestType));
        onSuccess?.();
      } else {
        setError('Failed to submit approval request');
      }
    } catch (err: any) {
      console.error('Error submitting approval request:', err);
      setError(err.response?.data?.error || 'Failed to submit approval request');
    } finally {
      setLoading(false);
    }
  };

  return (
    <GlassCard 
      title={title || `Submit ${getRequestTypeLabel(requestType)} Request`}
      icon="FileText"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        {description && (
          <p className="text-white/70 text-sm mb-4">{description}</p>
        )}

        <div>
          <label className="block text-sm font-medium text-white/80 mb-2">
            Additional Notes (Optional)
          </label>
          <textarea
            value={reviewNotes}
            onChange={(e) => setReviewNotes(e.target.value)}
            placeholder="Add any additional information that might help with the approval process..."
            className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            rows={3}
          />
        </div>

        {error && (
          <div className="p-3 bg-red-500/20 border border-red-500/30 rounded-lg">
            <div className="flex items-center space-x-2">
              <Icon name="AlertCircle" size="sm" className="text-red-400" />
              <p className="text-red-400 text-sm">{error}</p>
            </div>
          </div>
        )}

        <div className="flex space-x-3">
          <button
            type="submit"
            disabled={loading}
            className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
          >
            {loading ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                <span>Submitting...</span>
              </>
            ) : (
              <>
                <Icon name="Send" size="sm" />
                <span>Submit Request</span>
              </>
            )}
          </button>
          
          {onCancel && (
            <button
              type="button"
              onClick={onCancel}
              className="px-4 py-2 bg-white/10 text-white/70 rounded-lg hover:bg-white/20 transition-colors"
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </GlassCard>
  );
};

export default ApprovalRequestForm;
