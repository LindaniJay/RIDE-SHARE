import React, { useState, useEffect } from 'react';
import Icon from './Icon';
import { Vehicle } from '../types';

interface SavedVehiclesProps {
  userId: string;
  className?: string;
}

export const SavedVehicles: React.FC<SavedVehiclesProps> = ({ userId, className = '' }) => {
  const [savedVehicles, setSavedVehicles] = useState<Vehicle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSavedVehicles();
  }, [userId]);

  const fetchSavedVehicles = async () => {
    try {
      const token = localStorage.getItem('authToken');
      const response = await fetch(`/api/users/${userId}/saved-vehicles`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        setSavedVehicles(data.vehicles || []);
      }
    } catch (error) {
      console.error('Error fetching saved vehicles:', error);
      // Fallback to empty array instead of mock data
      setSavedVehicles([]);
    } finally {
      setLoading(false);
    }
  };

  const removeFromSaved = async (vehicleId: string) => {
    try {
      const token = localStorage.getItem('authToken');
      await fetch(`/api/users/${userId}/saved-vehicles/${vehicleId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      setSavedVehicles(prev => prev.filter(v => v.id !== vehicleId));
    } catch (error) {
      console.error('Error removing saved vehicle:', error);
    }
  };

  if (loading) {
    return (
      <div className={`space-y-4 ${className}`}>
        {[...Array(3)].map((_, i) => (
          <div key={i} className="animate-pulse">
            <div className="h-32 bg-white/10 rounded-xl"></div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={`space-y-4 ${className}`}>
      {savedVehicles.length === 0 ? (
        <div className="text-center py-8">
          <Icon name="Heart" size="lg" className="text-white/50 mb-4" />
          <p className="text-white/70">No saved vehicles yet</p>
          <p className="text-white/50 text-sm">Browse vehicles and save your favorites!</p>
        </div>
      ) : (
        savedVehicles.map((vehicle) => (
          <div key={vehicle.id} className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="flex items-center space-x-4">
              <img
                src={vehicle.images[0]}
                alt={`${vehicle.make} ${vehicle.model}`}
                className="w-20 h-20 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white">
                  {vehicle.year} {vehicle.make} {vehicle.model}
                </h3>
                <p className="text-white/70 text-sm mb-2">{vehicle.location}</p>
                <div className="flex items-center space-x-4">
                  <span className="text-yellow-400 flex items-center space-x-1"><Icon name="Star" size="sm" /><span>{vehicle.rating}</span></span>
                  <span className="text-white/70">({vehicle.reviewCount} reviews)</span>
                  <span className="text-green-400 font-semibold">R{vehicle.pricePerDay}/day</span>
                </div>
              </div>
              <div className="flex space-x-2">
                <button className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-lg text-sm hover:bg-blue-500/30 transition-colors">
                  View Details
                </button>
                <button
                  onClick={() => removeFromSaved(vehicle.id)}
                  className="px-3 py-1 bg-red-500/20 text-red-300 rounded-lg text-sm hover:bg-red-500/30 transition-colors"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default SavedVehicles;
