import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'react-hot-toast';
import { 
  Plus, 
  Car, 
  Calendar, 
  DollarSign, 
  Eye, 
  Edit, 
  TrendingUp,
  Users,
  Star,
  MapPin,
  Filter,
  MoreVertical,
  Download,
  BarChart3,
  PieChart,
  Settings,
  List
} from 'lucide-react';
import GlassCard from './GlassCard';
import GlassButton from './GlassButton';
import GlassInput from './GlassInput';
import Icon from './Icon';
import ModernVehicleForm from './ModernVehicleForm';

interface VehicleListing {
  id: string;
  make: string;
  model: string;
  year: number;
  type: string;
  color: string;
  pricePerDay: number;
  location: {
    city: string;
    state: string;
  };
  status: 'draft' | 'pending' | 'approved' | 'rejected' | 'active' | 'inactive';
  images: string[];
  features: string[];
  createdAt: string;
  views: number;
  bookings: number;
  rating: number;
  earnings: number;
  lastUpdated: string;
}

interface ModernHostDashboardProps {
  className?: string;
}

const ModernHostDashboard: React.FC<ModernHostDashboardProps> = ({ className = '' }) => {
  const [showVehicleForm, setShowVehicleForm] = useState(false);
  const [listings, setListings] = useState<VehicleListing[]>([
    // Mock data for demonstration
    {
      id: '1',
      make: 'Toyota',
      model: 'Corolla',
      year: 2022,
      type: 'car',
      color: 'White',
      pricePerDay: 250,
      location: { city: 'Cape Town', state: 'Western Cape' },
      status: 'approved',
      images: ['/api/placeholder/300/200'],
      features: ['Air Conditioning', 'Bluetooth', 'GPS'],
      createdAt: '2024-01-15',
      views: 156,
      bookings: 12,
      rating: 4.8,
      earnings: 3600,
      lastUpdated: '2024-01-20'
    },
    {
      id: '2',
      make: 'BMW',
      model: 'X3',
      year: 2021,
      type: 'suv',
      color: 'Black',
      pricePerDay: 450,
      location: { city: 'Johannesburg', state: 'Gauteng' },
      status: 'pending',
      images: ['/api/placeholder/300/200'],
      features: ['Leather Seats', 'Sunroof', 'Premium Sound'],
      createdAt: '2024-01-20',
      views: 89,
      bookings: 0,
      rating: 0,
      earnings: 0,
      lastUpdated: '2024-01-20'
    },
    {
      id: '3',
      make: 'Mercedes',
      model: 'C-Class',
      year: 2023,
      type: 'luxury',
      color: 'Silver',
      pricePerDay: 650,
      location: { city: 'Durban', state: 'KwaZulu-Natal' },
      status: 'approved',
      images: ['/api/placeholder/300/200'],
      features: ['Leather Seats', 'Premium Sound', 'Navigation'],
      createdAt: '2024-01-10',
      views: 234,
      bookings: 18,
      rating: 4.9,
      earnings: 11700,
      lastUpdated: '2024-01-22'
    }
  ]);
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredListings = listings.filter(listing => {
    const matchesStatus = filterStatus === 'all' || listing.status === filterStatus;
    const matchesSearch = searchTerm === '' || 
      `${listing.make} ${listing.model}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
      listing.location.city.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const stats = {
    totalListings: listings.length,
    activeListings: listings.filter(l => l.status === 'approved').length,
    pendingListings: listings.filter(l => l.status === 'pending').length,
    totalEarnings: listings.reduce((sum, l) => sum + l.earnings, 0),
    totalViews: listings.reduce((sum, l) => sum + l.views, 0),
    totalBookings: listings.reduce((sum, l) => sum + l.bookings, 0),
    averageRating: listings.length > 0 ? listings.reduce((sum, l) => sum + l.rating, 0) / listings.length : 0,
    monthlyEarnings: listings.reduce((sum, l) => sum + l.earnings, 0) * 0.8, // Simulate monthly
    weeklyEarnings: listings.reduce((sum, l) => sum + l.earnings, 0) * 0.2 // Simulate weekly
  };

  const handleVehicleSuccess = (newVehicle: any) => {
    const listing: VehicleListing = {
      id: Date.now().toString(),
      make: newVehicle.make,
      model: newVehicle.model,
      year: newVehicle.year,
      type: newVehicle.type,
      color: newVehicle.color,
      pricePerDay: newVehicle.pricePerDay,
      location: newVehicle.location,
      status: 'pending',
      images: newVehicle.coverImage ? [URL.createObjectURL(newVehicle.coverImage)] : [],
      features: newVehicle.features,
      createdAt: new Date().toISOString().split('T')[0],
      views: 0,
      bookings: 0,
      rating: 0,
      earnings: 0,
      lastUpdated: new Date().toISOString().split('T')[0]
    };
    
    setListings(prev => [listing, ...prev]);
    toast.success('Vehicle listing created successfully!');
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved': return 'text-green-400 bg-green-500/20 border-green-500/30';
      case 'pending': return 'text-yellow-400 bg-yellow-500/20 border-yellow-500/30';
      case 'rejected': return 'text-red-400 bg-red-500/20 border-red-500/30';
      case 'draft': return 'text-gray-400 bg-gray-500/20 border-gray-500/30';
      case 'active': return 'text-blue-400 bg-blue-500/20 border-blue-500/30';
      case 'inactive': return 'text-gray-400 bg-gray-500/20 border-gray-500/30';
      default: return 'text-gray-400 bg-gray-500/20 border-gray-500/30';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'approved': return 'CheckCircle';
      case 'pending': return 'Clock';
      case 'rejected': return 'XCircle';
      case 'draft': return 'Edit';
      case 'active': return 'Zap';
      case 'inactive': return 'AlertCircle';
      default: return 'AlertCircle';
    }
  };

  return (
    <div className={`space-y-8 ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-white mb-2">Host Dashboard</h1>
          <p className="text-white/70 text-lg">Manage your vehicle listings and earnings</p>
        </div>
        <div className="flex items-center space-x-4">
          <GlassButton
            onClick={() => setShowVehicleForm(true)}
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-lg hover:scale-105 transition-all"
          >
            <Plus className="w-5 h-5 mr-2" />
            Add New Vehicle
          </GlassButton>
          <GlassButton variant="outline" className="hover:scale-105 transition-all">
            <Download className="w-5 h-5 mr-2" />
            Export Data
          </GlassButton>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <GlassCard className="p-6 hover:scale-105 transition-transform">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/60 text-sm font-medium">Total Listings</p>
              <p className="text-3xl font-bold text-white mt-1">{stats.totalListings}</p>
              <div className="flex items-center mt-2 text-sm">
                <span className="text-green-400">{stats.activeListings} active</span>
                <span className="text-white/40 mx-2">•</span>
                <span className="text-yellow-400">{stats.pendingListings} pending</span>
              </div>
            </div>
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
              <Car className="w-8 h-8 text-white" />
            </div>
          </div>
        </GlassCard>

        <GlassCard className="p-6 hover:scale-105 transition-transform">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/60 text-sm font-medium">Total Earnings</p>
              <p className="text-3xl font-bold text-white mt-1">R{stats.totalEarnings.toLocaleString()}</p>
              <div className="flex items-center mt-2 text-sm">
                <TrendingUp className="w-4 h-4 text-green-400 mr-1" />
                <span className="text-green-400">+12% this month</span>
              </div>
            </div>
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg">
              <DollarSign className="w-8 h-8 text-white" />
            </div>
          </div>
        </GlassCard>

        <GlassCard className="p-6 hover:scale-105 transition-transform">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/60 text-sm font-medium">Total Views</p>
              <p className="text-3xl font-bold text-white mt-1">{stats.totalViews}</p>
              <div className="flex items-center mt-2 text-sm">
                <Users className="w-4 h-4 text-purple-400 mr-1" />
                <span className="text-purple-400">{stats.totalBookings} bookings</span>
              </div>
            </div>
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
              <Eye className="w-8 h-8 text-white" />
            </div>
          </div>
        </GlassCard>

        <GlassCard className="p-6 hover:scale-105 transition-transform">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/60 text-sm font-medium">Average Rating</p>
              <p className="text-3xl font-bold text-white mt-1">{stats.averageRating.toFixed(1)}</p>
              <div className="flex items-center mt-2 text-sm">
                <Star className="w-4 h-4 text-yellow-400 mr-1" />
                <span className="text-yellow-400">Based on {stats.totalBookings} reviews</span>
              </div>
            </div>
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center shadow-lg">
              <Star className="w-8 h-8 text-white" />
            </div>
          </div>
        </GlassCard>
      </div>

      {/* Quick Actions */}
      <GlassCard className="p-6">
        <h2 className="text-xl font-semibold text-white mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button className="p-4 bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-500/30 rounded-xl hover:scale-105 transition-all group">
            <BarChart3 className="w-8 h-8 text-blue-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
            <div className="text-white font-medium text-sm">Analytics</div>
          </button>
          <button className="p-4 bg-gradient-to-br from-green-500/20 to-green-600/20 border border-green-500/30 rounded-xl hover:scale-105 transition-all group">
            <Calendar className="w-8 h-8 text-green-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
            <div className="text-white font-medium text-sm">Bookings</div>
          </button>
          <button className="p-4 bg-gradient-to-br from-purple-500/20 to-purple-600/20 border border-purple-500/30 rounded-xl hover:scale-105 transition-all group">
            <PieChart className="w-8 h-8 text-purple-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
            <div className="text-white font-medium text-sm">Reports</div>
          </button>
          <button className="p-4 bg-gradient-to-br from-orange-500/20 to-orange-600/20 border border-orange-500/30 rounded-xl hover:scale-105 transition-all group">
            <Settings className="w-8 h-8 text-orange-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
            <div className="text-white font-medium text-sm">Settings</div>
          </button>
        </div>
      </GlassCard>

      {/* Filters and Search */}
      <GlassCard className="p-6">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1">
            <GlassInput
              placeholder="Search vehicles..."
              value={searchTerm}
              onChange={(value) => setSearchTerm(value)}
              icon="Search"
            />
          </div>
          <div className="flex gap-3">
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all" className="bg-gray-800">All Status</option>
              <option value="approved" className="bg-gray-800">Approved</option>
              <option value="pending" className="bg-gray-800">Pending</option>
              <option value="rejected" className="bg-gray-800">Rejected</option>
              <option value="draft" className="bg-gray-800">Draft</option>
            </select>
            <div className="flex bg-white/10 rounded-xl p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-all ${
                  viewMode === 'grid' ? 'bg-white/20' : 'hover:bg-white/10'
                }`}
              >
                <BarChart3 className="w-4 h-4 text-white" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-all ${
                  viewMode === 'list' ? 'bg-white/20' : 'hover:bg-white/10'
                }`}
              >
                <List className="w-4 h-4 text-white" />
              </button>
            </div>
            <button className="px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white hover:bg-white/20 transition-colors">
              <Filter className="w-4 h-4" />
            </button>
          </div>
        </div>
      </GlassCard>

      {/* Listings Grid */}
      <div className={`grid gap-6 ${
        viewMode === 'grid' 
          ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
          : 'grid-cols-1'
      }`}>
        {filteredListings.map((listing) => (
          <motion.div
            key={listing.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="group"
          >
            <GlassCard className={`p-0 overflow-hidden hover:scale-105 transition-all duration-300 ${
              viewMode === 'list' ? 'flex' : ''
            }`}>
              {/* Image */}
              <div className={`relative bg-gradient-to-br from-gray-600 to-gray-800 ${
                viewMode === 'list' ? 'w-80 h-48' : 'h-48'
              }`}>
                {listing.images.length > 0 ? (
                  <img
                    src={listing.images[0]}
                    alt={`${listing.make} ${listing.model}`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <Car className="w-16 h-16 text-white/40" />
                  </div>
                )}
                
                {/* Status Badge */}
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(listing.status)}`}>
                  <Icon name={getStatusIcon(listing.status)} className="w-3 h-3 inline mr-1" />
                  {listing.status.charAt(0).toUpperCase() + listing.status.slice(1)}
                </div>

                {/* Actions Menu */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex gap-2">
                    <button className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                      <Edit className="w-4 h-4 text-white" />
                    </button>
                    <button className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                      <MoreVertical className="w-4 h-4 text-white" />
                    </button>
                  </div>
                </div>

                {/* Price Badge */}
                <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm rounded-xl px-3 py-2">
                  <p className="text-white font-bold text-lg">R{listing.pricePerDay}</p>
                  <p className="text-white/60 text-xs">per day</p>
                </div>
              </div>

              {/* Content */}
              <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">
                      {listing.make} {listing.model}
                    </h3>
                    <p className="text-white/60 text-sm">{listing.year} • {listing.color}</p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-white font-medium">{listing.rating}</span>
                    <span className="text-white/60 text-sm">({listing.bookings})</span>
                  </div>
                </div>

                <div className="flex items-center text-white/60 text-sm mb-4">
                  <MapPin className="w-4 h-4 mr-2" />
                  {listing.location.city}, {listing.location.state}
                </div>

                <div className="grid grid-cols-3 gap-4 text-sm mb-4">
                  <div className="text-center">
                    <div className="text-white font-semibold">{listing.views}</div>
                    <div className="text-white/60 text-xs">Views</div>
                  </div>
                  <div className="text-center">
                    <div className="text-white font-semibold">{listing.bookings}</div>
                    <div className="text-white/60 text-xs">Bookings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-green-400 font-semibold">R{listing.earnings.toLocaleString()}</div>
                    <div className="text-white/60 text-xs">Earnings</div>
                  </div>
                </div>

                {/* Features */}
                {listing.features.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {listing.features.slice(0, 3).map((feature) => (
                      <span key={feature} className="px-2 py-1 bg-white/10 text-white/80 rounded-lg text-xs">
                        {feature}
                      </span>
                    ))}
                    {listing.features.length > 3 && (
                      <span className="px-2 py-1 bg-white/10 text-white/80 rounded-lg text-xs">
                        +{listing.features.length - 3} more
                      </span>
                    )}
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <GlassButton className="flex-1 bg-blue-500/20 text-blue-300 border-blue-500/30 hover:bg-blue-500/30">
                    <Eye className="w-4 h-4 mr-2" />
                    View
                  </GlassButton>
                  <GlassButton className="flex-1 bg-green-500/20 text-green-300 border-green-500/30 hover:bg-green-500/30">
                    <Edit className="w-4 h-4 mr-2" />
                    Edit
                  </GlassButton>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>

      {/* Empty State */}
      {filteredListings.length === 0 && (
        <GlassCard className="p-12 text-center">
          <div className="w-24 h-24 bg-gradient-to-br from-gray-500 to-gray-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
            <Car className="w-12 h-12 text-white/60" />
          </div>
          <h3 className="text-2xl font-semibold text-white mb-3">No vehicles found</h3>
          <p className="text-white/60 mb-8 text-lg">
            {searchTerm || filterStatus !== 'all' 
              ? 'Try adjusting your search or filter criteria'
              : 'Get started by listing your first vehicle'
            }
          </p>
          {!searchTerm && filterStatus === 'all' && (
            <GlassButton
              onClick={() => setShowVehicleForm(true)}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-lg hover:scale-105 transition-all"
            >
              <Plus className="w-5 h-5 mr-2" />
              List Your First Vehicle
            </GlassButton>
          )}
        </GlassCard>
      )}

      {/* Vehicle Form Modal */}
      <ModernVehicleForm
        isOpen={showVehicleForm}
        onClose={() => setShowVehicleForm(false)}
        onSuccess={handleVehicleSuccess}
      />
    </div>
  );
};

export default ModernHostDashboard;
