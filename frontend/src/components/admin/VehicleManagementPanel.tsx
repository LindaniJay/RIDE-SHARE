import React, { useState, useEffect } from 'react';
import { AdminService, AdminVehicle } from '../../services/adminService';
import GlassCard from '../GlassCard';
import Icon from '../Icon';
import StatusBadge from '../StatusBadge';

interface VehicleManagementPanelProps {
  onRefresh: () => void;
}

const VehicleManagementPanel: React.FC<VehicleManagementPanelProps> = ({ onRefresh }) => {
  const [vehicles, setVehicles] = useState<AdminVehicle[]>([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    status: 'all',
    search: ''
  });
  const [selectedVehicles, setSelectedVehicles] = useState<number[]>([]);
  const [showBulkActions, setShowBulkActions] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Add error boundary for this component
  if (error && error.includes('Failed to load vehicles')) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white">Vehicle Management</h2>
            <p className="text-gray-300">Review and approve vehicle listings</p>
          </div>
        </div>
        
        <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-6">
          <div className="flex items-center space-x-3">
            <Icon name="AlertTriangle" className="h-6 w-6 text-red-400" />
            <div>
              <h3 className="text-lg font-semibold text-red-400">Unable to load vehicles</h3>
              <p className="text-red-300 mt-1">
                There was an error loading the vehicle data. This could be due to:
              </p>
              <ul className="text-red-300 mt-2 list-disc list-inside space-y-1">
                <li>Network connection issues</li>
                <li>Backend server not running</li>
                <li>Authentication problems</li>
              </ul>
              <button
                onClick={() => {
                  setError(null);
                  fetchVehicles();
                }}
                className="mt-4 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                Try Again
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  useEffect(() => {
    fetchVehicles();
  }, [filters]);

  const fetchVehicles = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await AdminService.getVehicles(1, 10,
        filters.status !== 'all' ? filters.status : undefined
      );
      setVehicles(response.vehicles || []);
    } catch (error) {
      console.error('Error fetching vehicles:', error);
      setError('Failed to load vehicles. Please try again.');
      setVehicles([]);
    } finally {
      setLoading(false);
    }
  };

  const handleApproveVehicle = async (vehicleId: number, status: 'approved' | 'declined', reason?: string) => {
    try {
      await AdminService.approveVehicle(vehicleId, status, reason);
      await fetchVehicles();
      onRefresh();
    } catch (error) {
      console.error('Error updating vehicle status:', error);
    }
  };

  const handleBulkAction = async (action: 'approve' | 'decline') => {
    try {
      const promises = selectedVehicles.map(vehicleId => 
        AdminService.approveVehicle(vehicleId, action === 'approve' ? 'approved' : 'declined')
      );
      await Promise.all(promises);
      setSelectedVehicles([]);
      setShowBulkActions(false);
      await fetchVehicles();
      onRefresh();
    } catch (error) {
      console.error('Error performing bulk action:', error);
    }
  };

  const handleVehicleSelect = (vehicleId: number) => {
    setSelectedVehicles(prev => 
      prev.includes(vehicleId) 
        ? prev.filter(id => id !== vehicleId)
        : [...prev, vehicleId]
    );
  };

  const filteredVehicles = vehicles.filter(vehicle => {
    if (filters.search) {
      const searchTerm = filters.search.toLowerCase();
      return (
        (vehicle.title || '').toLowerCase().includes(searchTerm) ||
        (vehicle.make || '').toLowerCase().includes(searchTerm) ||
        (vehicle.model || '').toLowerCase().includes(searchTerm) ||
        (vehicle.location || '').toLowerCase().includes(searchTerm)
      );
    }
    return true;
  });

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-white/70">Loading vehicles...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">Vehicle Management</h2>
          <p className="text-gray-300">Review and approve vehicle listings</p>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setShowBulkActions(!showBulkActions)}
            className="flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 text-white hover:bg-white/20 transition-all"
          >
            <Icon name="check-square" className="h-4 w-4" />
            <span>Bulk Actions</span>
          </button>
        </div>
      </div>

      {/* Filters */}
      <GlassCard className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Search</label>
            <input
              type="text"
              placeholder="Search vehicles..."
              value={filters.search}
              onChange={(e) => setFilters(prev => ({ ...prev, search: e.target.value }))}
              className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Status</label>
            <select
              value={filters.status}
              onChange={(e) => setFilters(prev => ({ ...prev, status: e.target.value }))}
              className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Status</option>
              <option value="pending">Pending</option>
              <option value="approved">Approved</option>
              <option value="declined">Declined</option>
            </select>
          </div>
          <div className="flex items-end">
            <button
              onClick={fetchVehicles}
              className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white transition-all"
            >
              <Icon name="search" className="h-4 w-4" />
              <span>Filter</span>
            </button>
          </div>
        </div>
      </GlassCard>

      {/* Bulk Actions */}
      {showBulkActions && selectedVehicles.length > 0 && (
        <GlassCard className="p-4 bg-yellow-500/10 border-yellow-500/20">
          <div className="flex items-center justify-between">
            <span className="text-yellow-400">
              {selectedVehicles.length} vehicle(s) selected
            </span>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => handleBulkAction('approve')}
                className="flex items-center space-x-2 px-3 py-1 bg-green-600 hover:bg-green-700 rounded text-white text-sm"
              >
                <Icon name="check" className="h-4 w-4" />
                <span>Approve All</span>
              </button>
              <button
                onClick={() => handleBulkAction('decline')}
                className="flex items-center space-x-2 px-3 py-1 bg-red-600 hover:bg-red-700 rounded text-white text-sm"
              >
                <Icon name="x" className="h-4 w-4" />
                <span>Decline All</span>
              </button>
              <button
                onClick={() => {
                  setSelectedVehicles([]);
                  setShowBulkActions(false);
                }}
                className="px-3 py-1 bg-gray-600 hover:bg-gray-700 rounded text-white text-sm"
              >
                Cancel
              </button>
            </div>
          </div>
        </GlassCard>
      )}

      {/* Error Display */}
      {error && (
        <GlassCard className="p-4 bg-red-500/10 border-red-500/20">
          <div className="flex items-center space-x-2">
            <Icon name="AlertTriangle" className="h-5 w-5 text-red-400" />
            <span className="text-red-400">{error}</span>
            <button
              onClick={fetchVehicles}
              className="ml-auto text-red-400 hover:text-red-300 underline"
            >
              Retry
            </button>
          </div>
        </GlassCard>
      )}

      {/* Vehicles Grid */}
      {filteredVehicles.length === 0 && !loading && !error ? (
        <GlassCard className="p-8 text-center">
          <Icon name="Car" size="lg" className="text-white/50 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-white mb-2">No vehicles found</h3>
          <p className="text-white/70">No vehicles match your current filters.</p>
        </GlassCard>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredVehicles.map((vehicle) => (
          <GlassCard key={vehicle.id} className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={selectedVehicles.includes(vehicle.id)}
                  onChange={() => handleVehicleSelect(vehicle.id)}
                  className="rounded border-gray-300"
                />
                <div>
                  <h3 className="text-lg font-semibold text-white">{vehicle.title || 'Untitled Vehicle'}</h3>
                  <p className="text-gray-400">{vehicle.make || 'Unknown'} {vehicle.model || 'Model'}</p>
                </div>
              </div>
              <StatusBadge status={vehicle.status} />
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <Icon name="map-pin" className="h-4 w-4" />
                <span>{vehicle.location || 'Location not specified'}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <Icon name="dollar-sign" className="h-4 w-4" />
                <span>R{vehicle.pricePerDay || 0}/day</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <Icon name="user" className="h-4 w-4" />
                <span>{vehicle.owner?.firstName || 'Unknown'} {vehicle.owner?.lastName || 'User'}</span>
              </div>
            </div>

            {vehicle.images && vehicle.images.length > 0 && (
              <div className="mb-4">
                <img
                  src={vehicle.images[0]}
                  alt={vehicle.title}
                  className="w-full h-32 object-cover rounded-lg"
                />
              </div>
            )}

            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-400">
                Listed {vehicle.createdAt ? new Date(vehicle.createdAt).toLocaleDateString() : 'Date unknown'}
              </div>
              <div className="flex items-center space-x-2">
                {vehicle.status === 'pending' && (
                  <>
                    <button
                      onClick={() => handleApproveVehicle(vehicle.id, 'approved')}
                      className="flex items-center space-x-1 px-3 py-1 bg-green-600 hover:bg-green-700 rounded text-white text-sm"
                    >
                      <Icon name="check" className="h-3 w-3" />
                      <span>Approve</span>
                    </button>
                    <button
                      onClick={() => {
                        const reason = prompt('Decline reason (optional):');
                        handleApproveVehicle(vehicle.id, 'declined', reason || undefined);
                      }}
                      className="flex items-center space-x-1 px-3 py-1 bg-red-600 hover:bg-red-700 rounded text-white text-sm"
                    >
                      <Icon name="x" className="h-3 w-3" />
                      <span>Decline</span>
                    </button>
                  </>
                )}
                <button className="flex items-center space-x-1 px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded text-white text-sm">
                  <Icon name="eye" className="h-3 w-3" />
                  <span>View</span>
                </button>
              </div>
            </div>
          </GlassCard>
          ))}
        </div>
      )}

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-400">
          Showing {filteredVehicles.length} of {vehicles.length} vehicles
        </div>
        <div className="flex items-center space-x-2">
          <button className="px-3 py-1 bg-white/10 rounded text-white hover:bg-white/20">
            Previous
          </button>
          <span className="px-3 py-1 bg-white/20 rounded text-white">1</span>
          <button className="px-3 py-1 bg-white/10 rounded text-white hover:bg-white/20">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default VehicleManagementPanel;
