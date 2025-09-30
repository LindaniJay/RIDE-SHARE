import React, { useState } from 'react';
import { approvalRequestsAPI } from '../api';
import { notificationService } from '../services/notificationService';
import Icon from './Icon';
import GlassCard from './GlassCard';

interface BulkApprovalActionsProps {
  selectedRequests: number[];
  onBulkActionComplete: () => void;
  onClearSelection: () => void;
}

const BulkApprovalActions: React.FC<BulkApprovalActionsProps> = ({
  selectedRequests,
  onBulkActionComplete,
  onClearSelection
}) => {
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [actionType, setActionType] = useState<'approve' | 'decline' | null>(null);
  const [reviewNotes, setReviewNotes] = useState('');

  const handleBulkAction = async (status: 'Approved' | 'Declined') => {
    if (selectedRequests.length === 0) return;

    try {
      setLoading(true);
      const response = await approvalRequestsAPI.bulkUpdate({
        requestIds: selectedRequests,
        status,
        reviewNotes: reviewNotes.trim() || undefined
      });

      if (response.data.success) {
        notificationService.success(
          'Bulk Action Completed',
          `${response.data.data.updatedCount} requests ${status.toLowerCase()} successfully`
        );
        onBulkActionComplete();
        setShowModal(false);
        setReviewNotes('');
      }
    } catch (error) {
      console.error('Bulk action failed:', error);
      notificationService.error(
        'Bulk Action Failed',
        'Failed to process bulk action. Please try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  const openModal = (action: 'approve' | 'decline') => {
    setActionType(action);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setActionType(null);
    setReviewNotes('');
  };

  if (selectedRequests.length === 0) {
    return null;
  }

  return (
    <>
      <GlassCard title="Bulk Actions" icon="Settings">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-white/70">
              {selectedRequests.length} request{selectedRequests.length > 1 ? 's' : ''} selected
            </span>
            <button
              onClick={onClearSelection}
              className="text-blue-400 hover:text-blue-300 transition-colors text-sm"
            >
              Clear Selection
            </button>
          </div>

          <div className="flex space-x-3">
            <button
              onClick={() => openModal('approve')}
              className="flex-1 px-4 py-2 bg-green-500/20 text-green-200 rounded-lg hover:bg-green-500/30 transition-colors flex items-center justify-center space-x-2"
            >
              <Icon name="Check" size="sm" />
              <span>Approve All</span>
            </button>
            <button
              onClick={() => openModal('decline')}
              className="flex-1 px-4 py-2 bg-red-500/20 text-red-200 rounded-lg hover:bg-red-500/30 transition-colors flex items-center justify-center space-x-2"
            >
              <Icon name="X" size="sm" />
              <span>Decline All</span>
            </button>
          </div>
        </div>
      </GlassCard>

      {/* Bulk Action Modal */}
      {showModal && actionType && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="w-full max-w-md">
            <GlassCard 
              title={`Bulk ${actionType === 'approve' ? 'Approve' : 'Decline'} Requests`}
              icon={actionType === 'approve' ? 'Check' : 'X'}
            >
              <div className="space-y-4">
                <p className="text-white/70 text-sm">
                  You are about to {actionType} {selectedRequests.length} request{selectedRequests.length > 1 ? 's' : ''}.
                  This action cannot be undone.
                </p>

                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">
                    Review Notes (Optional)
                  </label>
                  <textarea
                    value={reviewNotes}
                    onChange={(e) => setReviewNotes(e.target.value)}
                    placeholder="Add notes for all requests..."
                    className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    rows={3}
                  />
                </div>

                <div className="flex space-x-3">
                  <button
                    onClick={() => handleBulkAction(actionType === 'approve' ? 'Approved' : 'Declined')}
                    disabled={loading}
                    className={`flex-1 px-4 py-2 text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 ${
                      actionType === 'approve' 
                        ? 'bg-green-500 hover:bg-green-600' 
                        : 'bg-red-500 hover:bg-red-600'
                    }`}
                  >
                    {loading ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                        <span>Processing...</span>
                      </>
                    ) : (
                      <>
                        <Icon name={actionType === 'approve' ? 'Check' : 'X'} size="sm" />
                        <span>{actionType === 'approve' ? 'Approve' : 'Decline'} All</span>
                      </>
                    )}
                  </button>
                  
                  <button
                    onClick={closeModal}
                    className="px-4 py-2 bg-white/10 text-white/70 rounded-lg hover:bg-white/20 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      )}
    </>
  );
};

export default BulkApprovalActions;
