import React, { useState, useEffect } from 'react';
import { Vehicle } from '../types';
import Icon from './Icon';

interface FleetManagementProps {
  hostId: string;
  className?: string;
}

export const FleetManagement: React.FC<FleetManagementProps> = ({ 
  hostId, 
  className = '' 
}) => {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [loading, setLoading] = useState(true);
  const [showBulkUpload, setShowBulkUpload] = useState(false);
  const [selectedVehicles, setSelectedVehicles] = useState<string[]>([]);

  useEffect(() => {
    fetchFleet();
  }, [hostId]);

  const fetchFleet = async () => {
    try {
      const token = localStorage.getItem('authToken');
      const response = await fetch(`/api/hosts/${hostId}/fleet`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        setVehicles(data.vehicles || []);
      }
    } catch (error) {
      console.error('Error fetching fleet:', error);
      // Fallback to empty array instead of mock data
      setVehicles([]);
    } finally {
      setLoading(false);
    }
  };

  const toggleVehicleSelection = (vehicleId: string) => {
    setSelectedVehicles(prev => 
      prev.includes(vehicleId) 
        ? prev.filter(id => id !== vehicleId)
        : [...prev, vehicleId]
    );
  };

  const bulkAction = async (action: 'activate' | 'deactivate' | 'delete') => {
    if (selectedVehicles.length === 0) return;

    try {
      const token = localStorage.getItem('authToken');
      await fetch(`/api/hosts/${hostId}/fleet/bulk-action`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          vehicleIds: selectedVehicles, 
          action 
        }),
      });

      // Update local state
      setVehicles(prev => {
        switch (action) {
          case 'activate':
            return prev.map(v => 
              selectedVehicles.includes(v.id) 
                ? { ...v, isAvailable: true }
                : v
            );
          case 'deactivate':
            return prev.map(v => 
              selectedVehicles.includes(v.id) 
                ? { ...v, isAvailable: false }
                : v
            );
          case 'delete':
            return prev.filter(v => !selectedVehicles.includes(v.id));
          default:
            return prev;
        }
      });

      setSelectedVehicles([]);
    } catch (error) {
      console.error('Error performing bulk action:', error);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved':
        return 'text-green-400 bg-green-500/20 border-green-500/30';
      case 'pending':
        return 'text-yellow-400 bg-yellow-500/20 border-yellow-500/30';
      case 'rejected':
        return 'text-red-400 bg-red-500/20 border-red-500/30';
      default:
        return 'text-gray-400 bg-gray-500/20 border-gray-500/30';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'approved':
        return 'CheckCircle';
      case 'pending':
        return 'Clock';
      case 'rejected':
        return 'XCircle';
      default:
        return 'FileText';
    }
  };

  if (loading) {
    return (
      <div className={`space-y-4 ${className}`}>
        {[...Array(3)].map((_, i) => (
          <div key={i} className="animate-pulse">
            <div className="h-24 bg-white/10 rounded-lg"></div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Fleet Header */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-white">Fleet Management</h3>
          <p className="text-white/70 text-sm">{vehicles.length} vehicles in your fleet</p>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={() => setShowBulkUpload(!showBulkUpload)}
            className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-lg text-sm hover:bg-blue-500/30 transition-colors flex items-center space-x-1"
          >
            <Icon name="Upload" size="sm" />
            <span>Bulk Upload</span>
          </button>
          <button className="px-3 py-1 bg-green-500/20 text-green-300 rounded-lg text-sm hover:bg-green-500/30 transition-colors">
            + Add Vehicle
          </button>
        </div>
      </div>

      {/* Bulk Actions */}
      {selectedVehicles.length > 0 && (
        <div className="bg-blue-500/20 border border-blue-500/30 rounded-lg p-3">
          <div className="flex items-center justify-between">
            <span className="text-blue-300 text-sm">
              {selectedVehicles.length} vehicle(s) selected
            </span>
            <div className="flex space-x-2">
              <button
                onClick={() => bulkAction('activate')}
                className="px-2 py-1 bg-green-500/20 text-green-300 rounded text-xs hover:bg-green-500/30 transition-colors"
              >
                Activate
              </button>
              <button
                onClick={() => bulkAction('deactivate')}
                className="px-2 py-1 bg-yellow-500/20 text-yellow-300 rounded text-xs hover:bg-yellow-500/30 transition-colors"
              >
                Deactivate
              </button>
              <button
                onClick={() => bulkAction('delete')}
                className="px-2 py-1 bg-red-500/20 text-red-300 rounded text-xs hover:bg-red-500/30 transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Fleet List */}
      <div className="space-y-3">
        {vehicles.map((vehicle) => (
          <div 
            key={vehicle.id} 
            className={`p-4 rounded-lg border ${
              selectedVehicles.includes(vehicle.id) 
                ? 'bg-blue-500/20 border-blue-500/30' 
                : 'bg-white/10 border-white/20'
            } hover:bg-white/20 transition-all duration-300`}
          >
            <div className="flex items-center space-x-4">
              <input
                type="checkbox"
                checked={selectedVehicles.includes(vehicle.id)}
                onChange={() => toggleVehicleSelection(vehicle.id)}
                className="w-4 h-4 text-blue-600 bg-white/10 border-white/20 rounded focus:ring-blue-500"
              />
              
              <img
                src={vehicle.images[0]}
                alt={`${vehicle.make} ${vehicle.model}`}
                className="w-16 h-16 object-cover rounded-lg"
              />
              
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-lg font-semibold text-white">
                    {vehicle.year} {vehicle.make} {vehicle.model}
                  </h4>
                  <div className={`px-2 py-1 rounded-full text-xs border ${getStatusColor(vehicle.approvalStatus)} flex items-center space-x-1`}>
                    <Icon name={getStatusIcon(vehicle.approvalStatus)} size="sm" />
                    <span>{vehicle.approvalStatus}</span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 text-sm text-white/70">
                  <span className="flex items-center space-x-1">
                    <Icon name="MapPin" size="sm" />
                    <span>{vehicle.location}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Icon name="DollarSign" size="sm" />
                    <span>R{vehicle.pricePerDay}/day</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Icon name="Star" size="sm" />
                    <span>{vehicle.rating} ({vehicle.reviewCount})</span>
                  </span>
                  <span className={`${vehicle.isAvailable ? 'text-green-400' : 'text-red-400'}`}>
                    {vehicle.isAvailable ? 'Available' : 'Unavailable'}
                  </span>
                </div>
              </div>
              
              <div className="flex space-x-2">
                <button className="px-3 py-1 bg-white/10 text-white rounded-lg text-sm hover:bg-white/20 transition-colors">
                  Edit
                </button>
                <button className="px-3 py-1 bg-white/10 text-white rounded-lg text-sm hover:bg-white/20 transition-colors">
                  View
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {vehicles.length === 0 && (
        <div className="text-center py-8">
          <div className="mb-4">
            <Icon name="Car" size="lg" className="text-white/50 mx-auto" />
          </div>
          <p className="text-white/70">No vehicles in your fleet yet</p>
          <p className="text-white/50 text-sm">Add your first vehicle to start earning!</p>
        </div>
      )}
    </div>
  );
};

export default FleetManagement;
