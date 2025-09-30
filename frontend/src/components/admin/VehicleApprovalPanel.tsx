import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import Icon from '../Icon';
import StatusBadge from '../StatusBadge';

interface Vehicle {
  id: number;
  title: string;
  make: string;
  model: string;
  year: number;
  type: string;
  pricePerDay: number;
  location: string;
  status: 'pending' | 'approved' | 'declined';
  declineReason?: string;
  images: string[];
  features: string[];
  host: {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
  };
  createdAt: string;
}

const VehicleApprovalPanel: React.FC = () => {
  const { user } = useAuth();
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'all' | 'pending' | 'approved' | 'declined'>('pending');
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  const [showApprovalModal, setShowApprovalModal] = useState(false);
  const [approvalAction, setApprovalAction] = useState<'approve' | 'decline'>('approve');
  const [declineReason, setDeclineReason] = useState('');

  useEffect(() => {
    fetchVehicles();
  }, [filter]);

  const fetchVehicles = async () => {
    try {
      const response = await fetch(`/api/admin/vehicles?status=${filter}&page=1&limit=50`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      });
      
      if (response.ok) {
        const data = await response.json();
        setVehicles(data.data.vehicles || []);
      }
    } catch (error) {
      console.error('Error fetching vehicles:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleApproval = async (vehicleId: number, action: 'approve' | 'decline', reason?: string) => {
    try {
      const response = await fetch(`/api/admin/vehicles/${vehicleId}/approve`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify({
          status: action === 'approve' ? 'approved' : 'declined',
          reason: reason || undefined
        })
      });

      if (response.ok) {
        // Update local state
        setVehicles(prev => prev.map(v => 
          v.id === vehicleId 
            ? { ...v, status: action === 'approve' ? 'approved' : 'declined', declineReason: reason }
            : v
        ));
        
        setShowApprovalModal(false);
        setSelectedVehicle(null);
        setDeclineReason('');
        
        alert(`Vehicle ${action === 'approve' ? 'approved' : 'declined'} successfully`);
      } else {
        alert('Failed to update vehicle status');
      }
    } catch (error) {
      console.error('Error updating vehicle:', error);
      alert('Error updating vehicle status');
    }
  };

  const openApprovalModal = (vehicle: Vehicle, action: 'approve' | 'decline') => {
    setSelectedVehicle(vehicle);
    setApprovalAction(action);
    setShowApprovalModal(true);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Vehicle Approvals</h2>
        <div className="flex space-x-2">
          {['all', 'pending', 'approved', 'declined'].map((filterType) => (
            <button
              key={filterType}
              onClick={() => setFilter(filterType as any)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                filter === filterType
                  ? 'bg-white/20 text-white'
                  : 'bg-white/10 text-white/70 hover:bg-white/20'
              }`}
            >
              {filterType.charAt(0).toUpperCase() + filterType.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Vehicles List */}
      <div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
        <div className="p-6">
          <div className="space-y-4">
            {vehicles.map((vehicle) => (
              <div key={vehicle.id} className="p-4 bg-white/5 rounded-lg border border-white/10">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-start space-x-4">
                      {/* Vehicle Image */}
                      <div className="w-20 h-20 bg-gray-300 rounded-lg flex items-center justify-center">
                        {vehicle.images && vehicle.images.length > 0 ? (
                          <img 
                            src={vehicle.images[0]} 
                            alt={vehicle.title}
                            className="w-full h-full object-cover rounded-lg"
                          />
                        ) : (
                          <Icon name="Car" size="lg" className="text-gray-500" />
                        )}
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-white font-semibold text-lg">{vehicle.title}</h3>
                        <p className="text-white/70 text-sm mb-2">
                          {vehicle.make} {vehicle.model} ({vehicle.year}) • {vehicle.type}
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="text-white/70">Price</p>
                            <p className="text-white font-semibold">R{vehicle.pricePerDay}/day</p>
                          </div>
                          <div>
                            <p className="text-white/70">Location</p>
                            <p className="text-white">{vehicle.location}</p>
                          </div>
                          <div>
                            <p className="text-white/70">Host</p>
                            <p className="text-white">{vehicle.host.firstName} {vehicle.host.lastName}</p>
                          </div>
                          <div>
                            <p className="text-white/70">Listed</p>
                            <p className="text-white">{new Date(vehicle.createdAt).toLocaleDateString()}</p>
                          </div>
                        </div>

                        {vehicle.features && vehicle.features.length > 0 && (
                          <div className="mt-3">
                            <p className="text-white/70 text-sm mb-2">Features:</p>
                            <div className="flex flex-wrap gap-2">
                              {vehicle.features.map((feature, index) => (
                                <span key={index} className="px-2 py-1 bg-blue-500/20 text-blue-200 rounded text-xs">
                                  {feature}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {vehicle.declineReason && (
                          <div className="mt-3 p-3 bg-red-500/10 border border-red-400/30 rounded-lg">
                            <p className="text-red-200 text-sm">
                              <strong>Decline Reason:</strong> {vehicle.declineReason}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col space-y-2 ml-4">
                    <StatusBadge status={vehicle.status} />
                    
                    {vehicle.status === 'pending' && (
                      <div className="flex space-x-2">
                        <button
                          onClick={() => openApprovalModal(vehicle, 'approve')}
                          className="px-3 py-1 bg-green-500/20 text-green-200 rounded-lg text-sm hover:bg-green-500/30 transition-colors"
                        >
                          Approve
                        </button>
                        <button
                          onClick={() => openApprovalModal(vehicle, 'decline')}
                          className="px-3 py-1 bg-red-500/20 text-red-200 rounded-lg text-sm hover:bg-red-500/30 transition-colors"
                        >
                          Decline
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {vehicles.length === 0 && (
              <div className="text-center py-8">
                <Icon name="Car" size="lg" className="text-white/50 mx-auto mb-4" />
                <p className="text-white/70">No vehicles found</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Approval Modal */}
      {showApprovalModal && selectedVehicle && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 max-w-md w-full mx-4">
            <h3 className="text-lg font-semibold text-white mb-4">
              {approvalAction === 'approve' ? 'Approve Vehicle' : 'Decline Vehicle'}
            </h3>
            
            <div className="mb-4">
              <p className="text-white/70 mb-2">
                {approvalAction === 'approve' 
                  ? `Are you sure you want to approve "${selectedVehicle.title}"?`
                  : `Are you sure you want to decline "${selectedVehicle.title}"?`
                }
              </p>
              
              {approvalAction === 'decline' && (
                <div>
                  <label className="block text-white/70 text-sm font-medium mb-2">
                    Decline Reason (Optional)
                  </label>
                  <textarea
                    value={declineReason}
                    onChange={(e) => setDeclineReason(e.target.value)}
                    placeholder="Enter reason for decline..."
                    className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows={3}
                  />
                </div>
              )}
            </div>

            <div className="flex space-x-3">
              <button
                onClick={() => {
                  setShowApprovalModal(false);
                  setSelectedVehicle(null);
                  setDeclineReason('');
                }}
                className="flex-1 px-4 py-2 bg-white/10 text-white/70 rounded-lg hover:bg-white/20 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => handleApproval(selectedVehicle.id, approvalAction, declineReason)}
                className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
                  approvalAction === 'approve'
                    ? 'bg-green-500 text-white hover:bg-green-600'
                    : 'bg-red-500 text-white hover:bg-red-600'
                }`}
              >
                {approvalAction === 'approve' ? 'Approve' : 'Decline'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VehicleApprovalPanel;
