import React, { useState, useEffect } from 'react';
import Icon from './Icon';
import GlassCard from './GlassCard';
import GlassButton from './GlassButton';

interface Vehicle {
  id: string;
  title: string;
  make: string;
  model: string;
  year: number;
  price_per_day: number;
  location: {
    city: string;
    province: string;
  };
  images: string[];
  host: {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
  };
  status: string;
  approval_status: string;
  created_at: string;
}

interface VehicleApprovalPanelProps {
  className?: string;
}

const VehicleApprovalPanel: React.FC<VehicleApprovalPanelProps> = ({ className = "" }) => {
  const [pendingVehicles, setPendingVehicles] = useState<Vehicle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  const [showApprovalModal, setShowApprovalModal] = useState(false);
  const [approvalAction, setApprovalAction] = useState<'approve' | 'reject' | null>(null);
  const [rejectionReason, setRejectionReason] = useState('');
  const [processing, setProcessing] = useState(false);

  useEffect(() => {
    fetchPendingVehicles();
  }, []);

  const fetchPendingVehicles = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/admin/vehicles/pending', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      });

      if (response.ok) {
        const data = await response.json();
        if (data.success) {
          setPendingVehicles(data.vehicles || []);
        } else {
          setError(data.error || 'Failed to fetch pending vehicles');
        }
      } else {
        setError('Failed to fetch pending vehicles');
      }
    } catch (err) {
      console.error('Error fetching pending vehicles:', err);
      setError('Failed to fetch pending vehicles');
    } finally {
      setLoading(false);
    }
  };

  const handleApproval = async (vehicleId: string, action: 'approve' | 'reject', reason?: string) => {
    try {
      setProcessing(true);
      const response = await fetch(`/api/admin/vehicles/${vehicleId}/status`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify({
          status: action === 'approve' ? 'approved' : 'rejected',
          reason: action === 'reject' ? reason : undefined
        })
      });

      if (response.ok) {
        const data = await response.json();
        if (data.success) {
          // Remove the processed vehicle from pending list
          setPendingVehicles(prev => prev.filter(v => v.id !== vehicleId));
          setShowApprovalModal(false);
          setSelectedVehicle(null);
          setApprovalAction(null);
          setRejectionReason('');
        } else {
          setError(data.error || 'Failed to update vehicle status');
        }
      } else {
        setError('Failed to update vehicle status');
      }
    } catch (err) {
      console.error('Error updating vehicle status:', err);
      setError('Failed to update vehicle status');
    } finally {
      setProcessing(false);
    }
  };

  const openApprovalModal = (vehicle: Vehicle, action: 'approve' | 'reject') => {
    setSelectedVehicle(vehicle);
    setApprovalAction(action);
    setShowApprovalModal(true);
    setRejectionReason('');
  };

  const handleSubmitApproval = () => {
    if (!selectedVehicle || !approvalAction) return;
    
    if (approvalAction === 'reject' && !rejectionReason.trim()) {
      setError('Please provide a reason for rejection');
      return;
    }

    handleApproval(selectedVehicle.id, approvalAction, rejectionReason);
  };

  if (loading) {
    return (
      <GlassCard title="Vehicle Approvals" icon="Car" className={className}>
        <div className="flex items-center justify-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        </div>
      </GlassCard>
    );
  }

  if (error) {
    return (
      <GlassCard title="Vehicle Approvals" icon="Car" className={className}>
        <div className="text-center py-8">
          <Icon name="AlertCircle" size="lg" className="text-red-400 mx-auto mb-4" />
          <p className="text-red-200 mb-4">{error}</p>
          <GlassButton onClick={fetchPendingVehicles} variant="outline">
            Try Again
          </GlassButton>
        </div>
      </GlassCard>
    );
  }

  return (
    <>
      <GlassCard title="Vehicle Approvals" icon="Car" className={className}>
        <div className="space-y-4">
          {pendingVehicles.length === 0 ? (
            <div className="text-center py-8">
              <Icon name="CheckCircle" size="lg" className="text-green-400 mx-auto mb-4" />
              <p className="text-white/70">No pending vehicle approvals</p>
              <p className="text-white/50 text-sm">All vehicles have been reviewed</p>
            </div>
          ) : (
            <div className="space-y-4">
              <p className="text-white/70 text-sm">
                {pendingVehicles.length} vehicle{pendingVehicles.length !== 1 ? 's' : ''} awaiting approval
              </p>
              <div className="space-y-3">
                {pendingVehicles.map((vehicle) => (
                  <div key={vehicle.id} className="p-4 bg-white/5 rounded-lg border border-white/10">
                    <div className="flex items-start space-x-4">
                      {/* Vehicle Image */}
                      <div className="w-20 h-20 bg-gray-700 rounded-lg overflow-hidden flex-shrink-0">
                        {vehicle.images?.[0] ? (
                          <img 
                            src={vehicle.images[0]} 
                            alt={vehicle.title}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <Icon name="Car" size="lg" className="text-white/50" />
                          </div>
                        )}
                      </div>

                      {/* Vehicle Details */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between">
                          <div>
                            <h4 className="text-white font-semibold truncate">{vehicle.title}</h4>
                            <p className="text-white/70 text-sm">{vehicle.make} {vehicle.model} ({vehicle.year})</p>
                            <p className="text-white/60 text-sm">R{vehicle.price_per_day}/day • {vehicle.location.city}</p>
                          </div>
                          <span className="px-2 py-1 bg-yellow-500/20 text-yellow-200 rounded text-xs">
                            Pending
                          </span>
                        </div>
                        
                        <div className="mt-2 text-sm text-white/60">
                          <p>Host: {vehicle.host.first_name} {vehicle.host.last_name}</p>
                          <p>Email: {vehicle.host.email}</p>
                          <p>Listed: {new Date(vehicle.created_at).toLocaleDateString()}</p>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-2 mt-4">
                      <GlassButton
                        onClick={() => openApprovalModal(vehicle, 'approve')}
                        className="flex-1 bg-green-500/20 text-green-200 hover:bg-green-500/30"
                        icon="CheckCircle"
                      >
                        Approve
                      </GlassButton>
                      <GlassButton
                        onClick={() => openApprovalModal(vehicle, 'reject')}
                        className="flex-1 bg-red-500/20 text-red-200 hover:bg-red-500/30"
                        icon="XCircle"
                      >
                        Reject
                      </GlassButton>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </GlassCard>

      {/* Approval Modal */}
      {showApprovalModal && selectedVehicle && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-6 max-w-md w-full">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">
                {approvalAction === 'approve' ? 'Approve Vehicle' : 'Reject Vehicle'}
              </h3>
              <button
                onClick={() => setShowApprovalModal(false)}
                className="text-white/70 hover:text-white"
              >
                <Icon name="X" size="sm" />
              </button>
            </div>

            <div className="space-y-4">
              <div className="p-3 bg-white/5 rounded-lg">
                <p className="text-white font-medium">{selectedVehicle.title}</p>
                <p className="text-white/70 text-sm">{selectedVehicle.make} {selectedVehicle.model} ({selectedVehicle.year})</p>
                <p className="text-white/60 text-sm">R{selectedVehicle.price_per_day}/day</p>
              </div>

              {approvalAction === 'reject' && (
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">
                    Reason for rejection (required)
                  </label>
                  <textarea
                    value={rejectionReason}
                    onChange={(e) => setRejectionReason(e.target.value)}
                    placeholder="Please provide a reason for rejection..."
                    className="w-full p-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows={3}
                  />
                </div>
              )}

              {approvalAction === 'approve' && (
                <p className="text-white/70 text-sm">
                  This vehicle will become visible to renters and the host will be notified.
                </p>
              )}

              {error && (
                <div className="p-3 bg-red-500/20 border border-red-500/30 rounded-lg">
                  <p className="text-red-200 text-sm">{error}</p>
                </div>
              )}

              <div className="flex space-x-3">
                <GlassButton
                  onClick={() => setShowApprovalModal(false)}
                  variant="outline"
                  className="flex-1"
                  disabled={processing}
                >
                  Cancel
                </GlassButton>
                <GlassButton
                  onClick={handleSubmitApproval}
                  className={`flex-1 ${
                    approvalAction === 'approve' 
                      ? 'bg-green-500/20 text-green-200 hover:bg-green-500/30' 
                      : 'bg-red-500/20 text-red-200 hover:bg-red-500/30'
                  }`}
                  disabled={processing}
                >
                  {processing ? 'Processing...' : (approvalAction === 'approve' ? 'Approve' : 'Reject')}
                </GlassButton>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VehicleApprovalPanel;
