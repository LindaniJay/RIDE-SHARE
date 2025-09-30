import React, { useState, useEffect } from 'react';
import { approvalRequestsAPI } from '../api';
import { notificationService } from '../services/notificationService';
import Icon from './Icon';
import GlassCard from './GlassCard';
import StatusBadge from './StatusBadge';
import BulkApprovalActions from './BulkApprovalActions';

interface ApprovalRequest {
  id: number;
  requestType: string;
  entityId: number;
  submittedBy: 'renter' | 'host';
  status: 'Pending' | 'Approved' | 'Declined';
  submittedByUser: {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    role: string;
  };
  reviewedByUser?: {
    id: number;
    firstName: string;
    lastName: string;
  };
  reviewNotes?: string;
  createdAt: string;
  updatedAt: string;
  reviewedAt?: string;
}

interface ApprovalRequestsProps {
  userRole: 'renter' | 'host' | 'admin';
  showActions?: boolean;
  limit?: number;
}

const ApprovalRequests: React.FC<ApprovalRequestsProps> = ({ 
  userRole, 
  showActions = false, 
  limit = 5 
}) => {
  const [requests, setRequests] = useState<ApprovalRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedRequests, setSelectedRequests] = useState<number[]>([]);

  useEffect(() => {
    fetchRequests();
  }, [userRole]);

  const fetchRequests = async () => {
    try {
      setLoading(true);
      let response;
      
      if (userRole === 'admin') {
        response = await approvalRequestsAPI.getPending({ limit });
      } else {
        response = await approvalRequestsAPI.getMyRequests({ limit });
      }
      
      if (response.data.success) {
        setRequests(response.data.data.requests || []);
      } else {
        setError('Failed to fetch approval requests');
      }
    } catch (err) {
      console.error('Error fetching approval requests:', err);
      setError('Failed to fetch approval requests');
    } finally {
      setLoading(false);
    }
  };

  const handleApprove = async (id: number, reviewNotes?: string) => {
    try {
      const response = await approvalRequestsAPI.update(id, {
        status: 'Approved',
        reviewNotes
      });
      
      if (response.data.success) {
        // Show success notification
        notificationService.success(
          'Request Approved',
          'The approval request has been approved successfully.'
        );
        // Refresh the requests
        fetchRequests();
      }
    } catch (err) {
      console.error('Error approving request:', err);
      notificationService.error(
        'Approval Failed',
        'Failed to approve the request. Please try again.'
      );
    }
  };

  const handleDecline = async (id: number, reviewNotes?: string) => {
    try {
      const response = await approvalRequestsAPI.update(id, {
        status: 'Declined',
        reviewNotes
      });
      
      if (response.data.success) {
        // Show success notification
        notificationService.success(
          'Request Declined',
          'The approval request has been declined.'
        );
        // Refresh the requests
        fetchRequests();
      }
    } catch (err) {
      console.error('Error declining request:', err);
      notificationService.error(
        'Decline Failed',
        'Failed to decline the request. Please try again.'
      );
    }
  };

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

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Pending':
        return 'yellow';
      case 'UnderReview':
        return 'blue';
      case 'Approved':
        return 'green';
      case 'Declined':
        return 'red';
      case 'RequiresMoreInfo':
        return 'orange';
      default:
        return 'gray';
    }
  };

  const handleSelectRequest = (requestId: number) => {
    setSelectedRequests(prev => 
      prev.includes(requestId) 
        ? prev.filter(id => id !== requestId)
        : [...prev, requestId]
    );
  };

  const handleBulkActionComplete = () => {
    setSelectedRequests([]);
    fetchRequests();
  };

  const handleClearSelection = () => {
    setSelectedRequests([]);
  };

  if (loading) {
    return (
      <GlassCard title="Approval Requests" icon="Clock">
        <div className="flex items-center justify-center py-8">
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
        </div>
      </GlassCard>
    );
  }

  if (error) {
    return (
      <GlassCard title="Approval Requests" icon="Clock">
        <div className="text-center py-8">
          <Icon name="AlertCircle" size="lg" className="text-red-400 mx-auto mb-4" />
          <p className="text-red-400">{error}</p>
        </div>
      </GlassCard>
    );
  }

  return (
    <div className="space-y-6">
      {/* Bulk Actions for Admin */}
      {userRole === 'admin' && showActions && (
        <BulkApprovalActions
          selectedRequests={selectedRequests}
          onBulkActionComplete={handleBulkActionComplete}
          onClearSelection={handleClearSelection}
        />
      )}

      <GlassCard 
        title={userRole === 'admin' ? 'Pending Approvals' : 'My Approval Requests'} 
        icon="Clock"
      >
        <div className="space-y-4">
        {requests.length === 0 ? (
          <div className="text-center py-8">
            <Icon name="CheckCircle" size="lg" className="text-green-400 mx-auto mb-4" />
            <p className="text-white/70">
              {userRole === 'admin' ? 'No pending approvals' : 'No approval requests'}
            </p>
          </div>
        ) : (
          requests.map((request) => (
            <div key={request.id} className="p-4 bg-white/5 rounded-lg border border-white/10">
              <div className="flex items-start justify-between mb-3">
                {/* Selection checkbox for admin */}
                {userRole === 'admin' && showActions && (
                  <input
                    type="checkbox"
                    checked={selectedRequests.includes(request.id)}
                    onChange={() => handleSelectRequest(request.id)}
                    className="mr-3 mt-1"
                  />
                )}
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h4 className="text-white font-semibold">
                      {getRequestTypeLabel(request.requestType)}
                    </h4>
                    <StatusBadge status={getStatusColor(request.status)} />
                  </div>
                  <p className="text-white/70 text-sm">
                    Submitted by: {request.submittedByUser.firstName} {request.submittedByUser.lastName}
                  </p>
                  <p className="text-white/70 text-sm">
                    {new Date(request.createdAt).toLocaleDateString()}
                  </p>
                  {request.reviewedAt && (
                    <p className="text-white/70 text-sm">
                      Reviewed: {new Date(request.reviewedAt).toLocaleDateString()}
                    </p>
                  )}
                </div>
              </div>

              {request.reviewNotes && (
                <div className="mb-3 p-3 bg-white/5 rounded-lg">
                  <p className="text-white/80 text-sm">
                    <strong>Review Notes:</strong> {request.reviewNotes}
                  </p>
                </div>
              )}

              {showActions && request.status === 'Pending' && (
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                  <button
                    onClick={() => handleApprove(request.id)}
                    className="flex-1 px-3 py-2 bg-green-500/20 text-green-200 rounded-lg hover:bg-green-500/30 transition-colors flex items-center justify-center space-x-2"
                  >
                    <Icon name="Check" size="sm" />
                    <span className="text-sm sm:text-base">Approve</span>
                  </button>
                  <button
                    onClick={() => handleDecline(request.id)}
                    className="flex-1 px-3 py-2 bg-red-500/20 text-red-200 rounded-lg hover:bg-red-500/30 transition-colors flex items-center justify-center space-x-2"
                  >
                    <Icon name="X" size="sm" />
                    <span className="text-sm sm:text-base">Decline</span>
                  </button>
                </div>
              )}
            </div>
          ))
        )}
        </div>
      </GlassCard>
    </div>
  );
};

export default ApprovalRequests;
