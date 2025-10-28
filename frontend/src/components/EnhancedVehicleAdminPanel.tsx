import React, { useState } from 'react';
import { Eye, CheckCircle, XCircle, AlertTriangle, MapPin, User, Shield, Star, Image as ImageIcon, FileText } from 'lucide-react';

interface EnhancedVehicle {
  id: string;
  make: string;
  model: string;
  year: number;
  type: string;
  color: string;
  pricePerDay: number;
  location: {
    address: string;
    city: string;
    state: string;
    coordinates: {
      latitude: number;
      longitude: number;
    };
  };
  host: {
    name: string;
    verified: boolean;
    rating: number;
  };
  listingStatus: 'pending' | 'approved' | 'rejected';
  verified: boolean;
  aiVerified: boolean;
  aiConfidence: number;
  imageQualityScore: number;
  listingCompletenessScore: number;
  coverImage: string;
  exteriorImages: string[];
  interiorImages: string[];
  dashboardImages: string[];
  features: string[];
  amenities: string[];
  createdAt: string;
  rejectionReason?: string;
  adminNotes?: string;
}

interface EnhancedVehicleAdminPanelProps {
  vehicles: EnhancedVehicle[];
  onApprove: (vehicleId: string, notes?: string) => void;
  onReject: (vehicleId: string, reason: string) => void;
  onViewDetails: (vehicleId: string) => void;
}

export const EnhancedVehicleAdminPanel: React.FC<EnhancedVehicleAdminPanelProps> = ({
  vehicles,
  onApprove,
  onReject,
  onViewDetails
}) => {
  const [_selectedVehicle, _setSelectedVehicle] = useState<EnhancedVehicle | null>(null);
  const [filterStatus, setFilterStatus] = useState<'all' | 'pending' | 'approved' | 'rejected'>('all');
  const [sortBy, setSortBy] = useState<'newest' | 'oldest' | 'score'>('newest');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredVehicles = vehicles
    .filter(vehicle => {
      if (filterStatus !== 'all' && vehicle.listingStatus !== filterStatus) return false;
      if (searchTerm && !vehicle.make.toLowerCase().includes(searchTerm.toLowerCase()) && 
          !vehicle.model.toLowerCase().includes(searchTerm.toLowerCase())) return false;
      return true;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        case 'oldest':
          return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
        case 'score':
          return b.listingCompletenessScore - a.listingCompletenessScore;
        default:
          return 0;
      }
    });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved': return 'text-green-400 bg-green-500/20';
      case 'rejected': return 'text-red-400 bg-red-500/20';
      case 'pending': return 'text-yellow-400 bg-yellow-500/20';
      default: return 'text-gray-400 bg-gray-500/20';
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-400';
    if (score >= 60) return 'text-yellow-400';
    return 'text-red-400';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-white/10">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white">Enhanced Vehicle Listings</h2>
            <p className="text-white/70">Review and approve premium vehicle listings</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-sm text-white/70">
              {filteredVehicles.length} of {vehicles.length} vehicles
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white/5 rounded-xl p-6 border border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-white/90 mb-2">Status Filter</label>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value as any)}
              className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            >
              <option value="all">All Status</option>
              <option value="pending">Pending</option>
              <option value="approved">Approved</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-white/90 mb-2">Sort By</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="score">Highest Score</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-white/90 mb-2">Search</label>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by make/model..."
              className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            />
          </div>
          <div className="flex items-end">
            <button
              onClick={() => {
                setFilterStatus('all');
                setSortBy('newest');
                setSearchTerm('');
              }}
              className="w-full px-4 py-2 bg-white/10 text-white/70 rounded-lg hover:bg-white/20 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        </div>
      </div>

      {/* Vehicle List */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredVehicles.map(vehicle => (
          <div key={vehicle.id} className="bg-white/5 rounded-xl border border-white/10 overflow-hidden hover:border-white/20 transition-colors">
            {/* Cover Image */}
            <div className="relative h-48 bg-gradient-to-br from-slate-700 to-slate-800">
              {vehicle.coverImage ? (
                <img
                  src={vehicle.coverImage}
                  alt={`${vehicle.make} ${vehicle.model}`}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <ImageIcon className="w-12 h-12 text-white/40" />
                </div>
              )}
              
              {/* Status Badge */}
              <div className="absolute top-4 left-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(vehicle.listingStatus)}`}>
                  {vehicle.listingStatus}
                </span>
              </div>

              {/* AI Verification Badge */}
              {vehicle.aiVerified && (
                <div className="absolute top-4 right-4">
                  <div className="flex items-center gap-1 px-2 py-1 bg-green-500/20 text-green-400 rounded-full text-xs">
                    <Shield className="w-3 h-3" />
                    AI Verified
                  </div>
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {vehicle.make} {vehicle.model}
                  </h3>
                  <p className="text-white/70">{vehicle.year} • {vehicle.type}</p>
                  <p className="text-white/60">{vehicle.color}</p>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-white">R{vehicle.pricePerDay}</div>
                  <div className="text-sm text-white/60">per day</div>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-2 text-white/70 mb-4">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">{vehicle.location.city}, {vehicle.location.state}</span>
              </div>

              {/* Host Info */}
              <div className="flex items-center gap-2 text-white/70 mb-4">
                <User className="w-4 h-4" />
                <span className="text-sm">{vehicle.host.name}</span>
                {vehicle.host.verified && (
                  <CheckCircle className="w-4 h-4 text-green-400" />
                )}
                <div className="flex items-center gap-1 ml-auto">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <span className="text-sm">{vehicle.host.rating.toFixed(1)}</span>
                </div>
              </div>

              {/* Quality Scores */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white/70">Completeness</span>
                  <span className={`font-medium ${getScoreColor(vehicle.listingCompletenessScore * 100)}`}>
                    {Math.round(vehicle.listingCompletenessScore * 100)}%
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white/70">Image Quality</span>
                  <span className={`font-medium ${getScoreColor(vehicle.imageQualityScore * 100)}`}>
                    {Math.round(vehicle.imageQualityScore * 100)}%
                  </span>
                </div>
                {vehicle.aiVerified && (
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-white/70">AI Confidence</span>
                    <span className={`font-medium ${getScoreColor(vehicle.aiConfidence * 100)}`}>
                      {Math.round(vehicle.aiConfidence * 100)}%
                    </span>
                  </div>
                )}
              </div>

              {/* Image Counts */}
              <div className="flex items-center gap-4 text-sm text-white/60 mb-4">
                <div className="flex items-center gap-1">
                  <ImageIcon className="w-4 h-4" />
                  <span>{vehicle.exteriorImages.length + vehicle.interiorImages.length + vehicle.dashboardImages.length} photos</span>
                </div>
                <div className="flex items-center gap-1">
                  <FileText className="w-4 h-4" />
                  <span>{vehicle.features.length + vehicle.amenities.length} features</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => onViewDetails(vehicle.id)}
                  className="flex-1 px-4 py-2 bg-blue-500/20 text-blue-300 rounded-lg hover:bg-blue-500/30 transition-colors flex items-center justify-center gap-2"
                >
                  <Eye className="w-4 h-4" />
                  View Details
                </button>
                {vehicle.listingStatus === 'pending' && (
                  <>
                    <button
                      onClick={() => onApprove(vehicle.id)}
                      className="px-4 py-2 bg-green-500/20 text-green-300 rounded-lg hover:bg-green-500/30 transition-colors"
                    >
                      <CheckCircle className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => onReject(vehicle.id, '')}
                      className="px-4 py-2 bg-red-500/20 text-red-300 rounded-lg hover:bg-red-500/30 transition-colors"
                    >
                      <XCircle className="w-4 h-4" />
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredVehicles.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center">
            <AlertTriangle className="w-8 h-8 text-white/40" />
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">No vehicles found</h3>
          <p className="text-white/70">
            {searchTerm || filterStatus !== 'all' 
              ? 'Try adjusting your filters or search terms'
              : 'No vehicle listings available at the moment'
            }
          </p>
        </div>
      )}
    </div>
  );
};

export default EnhancedVehicleAdminPanel;
