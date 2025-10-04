// Production Service Imports (unused but kept for future use)
// import { authService } from '../services/productionAuthService';
// import { bookingService } from '../services/productionBookingService';
// import { listingService } from '../services/productionListingService';
// import { apiClient } from '../services/productionApiClient';

import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import Icon from '../components/Icon';
import GlassCard from '../components/GlassCard';
import LoadingSpinner from '../components/LoadingSpinner';
import { useToast } from '../components/ToastProvider';
import StatusBadge from '../components/StatusBadge';
import VehicleListingForm from '../components/VehicleListingForm';
import FleetManagement from '../components/FleetManagement';
import DynamicPricing from '../components/DynamicPricing';
import PaymentIntegration from '../components/PaymentIntegration';
import RealTimeMessaging from '../components/RealTimeMessaging';
import AnalyticsDashboard from '../components/AnalyticsDashboard';
import ProfileSettings from '../components/ProfileSettings';
import ApprovalRequests from '../components/ApprovalRequests';
import ApprovalRequestForm from '../components/ApprovalRequestForm';
// Removed mock data imports
import EnhancedBookingManagement from '../components/EnhancedBookingManagement';
import RealTimeBookingNotifications from '../components/RealTimeBookingNotifications';
import BookingWorkflowTracker from '../components/BookingWorkflowTracker';

interface Vehicle {
  id: string;
  title: string;
  make: string;
  model: string;
  year: number;
  vehicle_type: string;
  category: string;
  price_per_day: number;
  price_per_week?: number;
  price_per_month?: number;
  location: {
    city: string;
    province: string;
    latitude?: number;
    longitude?: number;
  };
  status: 'pending' | 'approved' | 'rejected';
  approval_status: 'pending' | 'approved' | 'rejected';
  images: string[];
  features: string[];
  description: string;
  rejection_reason?: string;
  total_bookings: number;
  total_earnings: number;
  created_at: string;
}

interface Booking {
  id: string;
  vehicleId: string;
  renter: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
  };
  startDate: string;
  endDate: string;
  totalPrice: number;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  createdAt: string;
}

interface Earnings {
  totalEarnings: number;
  monthlyEarnings: number;
  pendingPayouts: number;
  completedBookings: number;
}

const HostDashboard: React.FC = () => {
  const { user } = useAuth();
  const { showToast } = useToast();
  const [activeTab, setActiveTab] = useState('overview');
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [earnings, setEarnings] = useState<Earnings>({
    totalEarnings: 0,
    monthlyEarnings: 0,
    pendingPayouts: 0,
    completedBookings: 0
  });
  const [pendingVehicles, setPendingVehicles] = useState<Vehicle[]>([]);
  const [approvedVehicles, setApprovedVehicles] = useState<Vehicle[]>([]);
  const [rejectedVehicles, setRejectedVehicles] = useState<Vehicle[]>([]);
  const [analytics, setAnalytics] = useState<any>(null);
  const [financial, setFinancial] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState<string | null>(null);
  const [showApprovalForm, setShowApprovalForm] = useState(false);
  const [approvalFormType, setApprovalFormType] = useState<'VehicleListing' | 'InsuranceVerification' | 'VehicleApproval' | null>(null);
  const [selectedVehicleId, setSelectedVehicleId] = useState<number | null>(null);

  useEffect(() => {
    fetchDashboardData();
    fetchHostVehicles();
  }, []);

  const fetchHostVehicles = async () => {
    if (!user?.id) return;
    
    try {
      const response = await fetch(`/api/listings/host/${user.id}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      });
      
      if (response.ok) {
        const data = await response.json();
        if (data.success) {
          const allVehicles = data.vehicles;
          setVehicles(allVehicles);
          
          // Categorize vehicles by status
          setPendingVehicles(allVehicles.filter((v: Vehicle) => v.status === 'pending'));
          setApprovedVehicles(allVehicles.filter((v: Vehicle) => v.status === 'approved'));
          setRejectedVehicles(allVehicles.filter((v: Vehicle) => v.status === 'rejected'));
        }
      }
    } catch (error) {
      console.error('Error fetching host vehicles:', error);
    }
  };

  const handleVehicleSubmission = async (vehicleData: any) => {
    try {
      const formData = new FormData();
      
      // Add all the required fields
      formData.append('title', `${vehicleData.make} ${vehicleData.model} ${vehicleData.year}`);
      formData.append('description', vehicleData.description);
      formData.append('make', vehicleData.make);
      formData.append('model', vehicleData.model);
      formData.append('year', vehicleData.year.toString());
      formData.append('vehicle_type', vehicleData.type);
      formData.append('category', 'economy'); // Default category
      formData.append('price_per_day', vehicleData.pricePerDay.toString());
      
      // Add location
      const location = {
        city: vehicleData.location.split(',')[0]?.trim() || vehicleData.location,
        province: vehicleData.location.split(',')[1]?.trim() || 'Western Cape'
      };
      formData.append('location', JSON.stringify(location));
      
      // Add features
      if (vehicleData.features && vehicleData.features.length > 0) {
        formData.append('features', JSON.stringify(vehicleData.features.map((f: any) => f.name)));
      }
      
      // Add images
      if (vehicleData.images && vehicleData.images.length > 0) {
        vehicleData.images.forEach((image: File) => {
          formData.append('images', image);
        });
      }
      
      const response = await fetch('/api/listings', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: formData
      });
      
      console.log('Response status:', response.status);
      console.log('Response headers:', response.headers);
      
      if (response.ok) {
        const result = await response.json();
        console.log('Success result:', result);
        if (result.success) {
          alert('Vehicle listing submitted successfully! Awaiting admin approval.');
          fetchHostVehicles(); // Refresh the vehicles list
        } else {
          alert('Failed to submit vehicle listing: ' + (result.error || 'Unknown error'));
        }
      } else {
        const errorText = await response.text();
        console.error('Error response:', errorText);
        let errorMessage = 'Server error';
        try {
          const errorData = JSON.parse(errorText);
          errorMessage = errorData.error || errorMessage;
        } catch (e) {
          errorMessage = errorText || errorMessage;
        }
        alert('Failed to submit vehicle listing: ' + errorMessage);
      }
    } catch (error) {
      console.error('Error submitting vehicle:', error);
      alert('Failed to submit vehicle listing. Please try again.');
    }
  };

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      showToast('Loading your dashboard data...', 'info');
      
      if (!user?.id) {
        setLoading(false);
        return;
      }

      // Fetch vehicles
      const vehiclesResponse = await fetch('/api/listings/host', {
        headers: { 
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
          'Content-Type': 'application/json'
        }
      });
      if (vehiclesResponse.ok) {
        const vehiclesData = await vehiclesResponse.json();
        setVehicles(vehiclesData.data || []);
      }

      // Fetch bookings
      const bookingsResponse = await fetch('/api/bookings/host', {
        headers: { 
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
          'Content-Type': 'application/json'
        }
      });
      if (bookingsResponse.ok) {
        const bookingsData = await bookingsResponse.json();
        setBookings(bookingsData.data || []);
      }

      // Fetch earnings
      const earningsResponse = await fetch('/api/host/earnings', {
        headers: { 
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
          'Content-Type': 'application/json'
        }
      });
      if (earningsResponse.ok) {
        const earningsData = await earningsResponse.json();
        setEarnings(earningsData);
      }

      // Fetch analytics
      const analyticsResponse = await fetch('/api/host/analytics', {
        headers: { 
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
          'Content-Type': 'application/json'
        }
      });
      if (analyticsResponse.ok) {
        const analyticsData = await analyticsResponse.json();
        setAnalytics(analyticsData);
      }

      // Fetch financial data
      const financialResponse = await fetch('/api/host/financial', {
        headers: { 
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
          'Content-Type': 'application/json'
        }
      });
      if (financialResponse.ok) {
        const financialData = await financialResponse.json();
        setFinancial(financialData);
      }
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
      showToast('Failed to load dashboard data. Please try again.', 'error');
      // Set empty state on error instead of mock data
      setVehicles([]);
      setBookings([]);
      setEarnings({
        totalEarnings: 0,
        monthlyEarnings: 0,
        pendingPayouts: 0,
        completedBookings: 0
      });
      setAnalytics(null);
      setFinancial(null);
    } finally {
      setLoading(false);
    }
  };

  const pendingBookings = bookings.filter(b => b.status === 'pending');
  const activeBookings = bookings.filter(b => b.status === 'confirmed');

  const handleSubmitApprovalRequest = (type: 'VehicleListing' | 'InsuranceVerification' | 'VehicleApproval', vehicleId?: number) => {
    setApprovalFormType(type);
    setSelectedVehicleId(vehicleId || null);
    setShowApprovalForm(true);
  };

  const handleApprovalSuccess = () => {
    setShowApprovalForm(false);
    setApprovalFormType(null);
    setSelectedVehicleId(null);
    // Optionally refresh data or show success message
  };

  const navigationTabs = [
    { id: 'overview', label: 'Overview', icon: 'BarChart' },
    { id: 'account', label: 'Account', icon: 'User' },
    { id: 'vehicles', label: 'Vehicle Management', icon: 'Car' },
    { id: 'bookings', label: 'Booking Management', icon: 'Calendar' },
    { id: 'financial', label: 'Financial', icon: 'DollarSign' },
    { id: 'communication', label: 'Messages', icon: 'MessageCircle' },
    { id: 'analytics', label: 'Analytics', icon: 'TrendingUp' },
    { id: 'fleet', label: 'Fleet Tools', icon: 'Settings' },
    { id: 'pricing', label: 'Dynamic Pricing', icon: 'TrendingUp' },
    { id: 'approvals', label: 'Approval Requests', icon: 'Clock' },
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-4 lg:space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center space-y-4 lg:space-y-0">
        <div>
          <h2 className="text-xl lg:text-2xl font-bold text-white">Host Dashboard</h2>
          <p className="text-white/70 text-sm lg:text-base">Manage your vehicle rental business</p>
        </div>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
          <RealTimeBookingNotifications
            userRole="host"
            userId={user?.id || '0'}
            onNotificationClick={(notification) => {
              console.log('Notification clicked:', notification);
              if (notification.actionUrl) {
                window.location.href = notification.actionUrl;
              }
            }}
            onMarkAsRead={(notificationId) => {
              console.log('Mark as read:', notificationId);
            }}
            onMarkAllAsRead={() => {
              console.log('Mark all as read');
            }}
          />
          <button
            onClick={() => setActiveTab('vehicles')}
            className="flex items-center justify-center px-3 lg:px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-sm lg:text-base"
          >
            <Icon name="Plus" size="sm" className="mr-2" />
            <span className="hidden sm:inline">Add Vehicle</span>
            <span className="sm:hidden">Add</span>
          </button>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex flex-wrap gap-2">
        {navigationTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center space-x-1 lg:space-x-2 px-2 lg:px-4 py-2 rounded-lg text-xs lg:text-sm font-medium transition-all ${
              activeTab === tab.id
                ? 'bg-white/20 text-white'
                : 'bg-white/10 text-white/70 hover:bg-white/20'
            }`}
          >
            <Icon name={tab.icon} size="sm" />
            <span className="hidden sm:inline">{tab.label}</span>
            <span className="sm:hidden">{tab.label.split(' ')[0]}</span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="space-y-6">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <GlassCard
                title="Total Earnings"
                subtitle="All time"
                icon="DollarSign"
                className="text-center"
              >
                <div className="text-3xl font-bold text-white mb-2">R{earnings.totalEarnings.toLocaleString()}</div>
                <div className="text-white/70 text-sm">Lifetime earnings</div>
              </GlassCard>
              
              <GlassCard
                title="Active Vehicles"
                subtitle="Listed vehicles"
                icon="Car"
                className="text-center"
              >
                <div className="text-3xl font-bold text-white mb-2">{approvedVehicles.length}</div>
                <div className="text-white/70 text-sm">Available for rent</div>
              </GlassCard>
              
              <GlassCard
                title="Pending Bookings"
                subtitle="Awaiting approval"
                icon="Clock"
                className="text-center"
              >
                <div className="text-3xl font-bold text-white mb-2">{pendingBookings.length}</div>
                <div className="text-white/70 text-sm">Need your attention</div>
              </GlassCard>
              
              <GlassCard
                title="Active Bookings"
                subtitle="Current rentals"
                icon="Calendar"
                className="text-center"
              >
                <div className="text-3xl font-bold text-white mb-2">{activeBookings.length}</div>
                <div className="text-white/70 text-sm">Currently rented</div>
              </GlassCard>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <GlassCard title="Recent Bookings" icon="Calendar">
                <div className="space-y-3">
                  {bookings.slice(0, 3).map((booking) => (
                    <div key={booking.id} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                      <div>
                        <h4 className="text-white font-medium">
                          {booking.renter.firstName} {booking.renter.lastName}
                        </h4>
                        <p className="text-white/70 text-sm">
                          {new Date(booking.startDate).toLocaleDateString()} - {new Date(booking.endDate).toLocaleDateString()}
                        </p>
                      </div>
                      <div className="text-right">
                        <StatusBadge status={booking.status} />
                        <p className="text-white font-semibold mt-1">R{booking.totalPrice}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>

              <GlassCard title="Recent Reviews" icon="Star">
                <div className="space-y-3">
                  {analytics?.customerFeedback?.recentReviews?.length > 0 ? (
                    analytics.customerFeedback.recentReviews.slice(0, 3).map((review: any, index: number) => (
                      <div key={index} className="p-3 bg-white/5 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <Icon 
                                key={i} 
                                name="Star" 
                                size="sm" 
                                className={i < review.rating ? "text-yellow-400" : "text-gray-400"} 
                              />
                            ))}
                          </div>
                          <span className="text-white/70 text-sm">{review.date}</span>
                        </div>
                        <p className="text-white/80 text-sm">{review.comment}</p>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-8">
                      <Icon name="Star" size="lg" className="text-white/30 mx-auto mb-2" />
                      <p className="text-white/50">No reviews yet</p>
                    </div>
                  )}
                </div>
              </GlassCard>

              <GlassCard title="Quick Actions" icon="Zap">
                <div className="space-y-3">
                  <button
                    onClick={() => setActiveTab('vehicles')}
                    className="w-full p-3 bg-green-500/20 text-green-200 rounded-lg hover:bg-green-500/30 transition-colors text-left"
                  >
                    <Icon name="Car" size="sm" className="mr-2" />
                    Manage Vehicles
                  </button>
                  <button
                    onClick={() => setActiveTab('bookings')}
                    className="w-full p-3 bg-blue-500/20 text-blue-200 rounded-lg hover:bg-blue-500/30 transition-colors text-left"
                  >
                    <Icon name="Calendar" size="sm" className="mr-2" />
                    Review Bookings
                  </button>
                  <button
                    onClick={() => setActiveTab('financial')}
                    className="w-full p-3 bg-purple-500/20 text-purple-200 rounded-lg hover:bg-purple-500/30 transition-colors text-left"
                  >
                    <Icon name="DollarSign" size="sm" className="mr-2" />
                    View Earnings
                  </button>
                </div>
              </GlassCard>
            </div>
          </>
        )}

        {/* Account Tab */}
        {activeTab === 'account' && (
          <ProfileSettings />
        )}

        {/* Vehicle Management Tab */}
        {activeTab === 'vehicles' && (
          <div className="space-y-6">
            <VehicleListingForm 
              onSubmit={handleVehicleSubmission}
              onCancel={() => {}}
            />
            
            {/* Pending Vehicles */}
            {pendingVehicles.length > 0 && (
              <GlassCard title="Pending Approval" icon="Clock" className="border-yellow-500/20">
                <div className="space-y-4">
                  <p className="text-yellow-200 text-sm">
                    Your listings are awaiting admin approval. You'll be notified once they're reviewed.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {pendingVehicles.map((vehicle) => (
                      <div key={vehicle.id} className="p-4 bg-yellow-500/10 rounded-lg border border-yellow-500/20">
                        <div className="space-y-3">
                          <div className="flex items-start justify-between">
                            <div>
                              <h4 className="text-white font-semibold">{vehicle.title}</h4>
                              <p className="text-white/70 text-sm">{vehicle.make} {vehicle.model} ({vehicle.year})</p>
                            </div>
                            <span className="px-2 py-1 bg-yellow-500/20 text-yellow-200 rounded text-xs">
                              Pending
                            </span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-white/70">R{vehicle.price_per_day}/day</span>
                            <span className="text-white/70">{vehicle.location?.city}</span>
                          </div>
                          <p className="text-yellow-200 text-sm">
                            Your listing is awaiting admin approval.
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </GlassCard>
            )}

            {/* Approved Vehicles */}
            {approvedVehicles.length > 0 && (
              <GlassCard title="Approved Vehicles" icon="CheckCircle" className="border-green-500/20">
                <div className="space-y-4">
                  <p className="text-green-200 text-sm">
                    These vehicles are live and visible to renters.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {approvedVehicles.map((vehicle) => (
                      <div key={vehicle.id} className="p-4 bg-green-500/10 rounded-lg border border-green-500/20">
                        <div className="space-y-3">
                          <div className="flex items-start justify-between">
                            <div>
                              <h4 className="text-white font-semibold">{vehicle.title}</h4>
                              <p className="text-white/70 text-sm">{vehicle.make} {vehicle.model} ({vehicle.year})</p>
                            </div>
                            <span className="px-2 py-1 bg-green-500/20 text-green-200 rounded text-xs">
                              Approved
                            </span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-white/70">R{vehicle.price_per_day}/day</span>
                            <span className="text-white/70">{vehicle.total_bookings} bookings</span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-white/70">R{vehicle.total_earnings} earned</span>
                            <span className="text-white/70">{vehicle.location?.city}</span>
                          </div>
                          <div className="flex space-x-2">
                            <button 
                              onClick={async () => {
                                setActionLoading(`edit-${vehicle.id}`);
                                try {
                                  // Simulate API call
                                  await new Promise(resolve => setTimeout(resolve, 1500));
                                  showToast('Vehicle edit form opened successfully!', 'success');
                                } catch (error) {
                                  showToast('Failed to open vehicle editor', 'error');
                                } finally {
                                  setActionLoading(null);
                                }
                              }}
                              disabled={actionLoading === `edit-${vehicle.id}`}
                              className="flex-1 px-3 py-1 bg-blue-500/20 text-blue-200 rounded text-sm hover:bg-blue-500/30 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                            >
                              {actionLoading === `edit-${vehicle.id}` ? (
                                <LoadingSpinner size="sm" text="" />
                              ) : (
                                'Edit'
                              )}
                            </button>
                            <button 
                              onClick={async () => {
                                if (confirm('Are you sure you want to remove this vehicle? This action cannot be undone.')) {
                                  setActionLoading(`remove-${vehicle.id}`);
                                  try {
                                    // Simulate API call
                                    await new Promise(resolve => setTimeout(resolve, 2000));
                                    showToast('Vehicle removed successfully!', 'success');
                                  } catch (error) {
                                    showToast('Failed to remove vehicle', 'error');
                                  } finally {
                                    setActionLoading(null);
                                  }
                                }
                              }}
                              disabled={actionLoading === `remove-${vehicle.id}`}
                              className="flex-1 px-3 py-1 bg-red-500/20 text-red-200 rounded text-sm hover:bg-red-500/30 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                            >
                              {actionLoading === `remove-${vehicle.id}` ? (
                                <LoadingSpinner size="sm" text="" />
                              ) : (
                                'Remove'
                              )}
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </GlassCard>
            )}

            {/* Rejected Vehicles */}
            {rejectedVehicles.length > 0 && (
              <GlassCard title="Rejected Vehicles" icon="XCircle" className="border-red-500/20">
                <div className="space-y-4">
                  <p className="text-red-200 text-sm">
                    These vehicles were rejected. Please review the feedback and resubmit if needed.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {rejectedVehicles.map((vehicle) => (
                      <div key={vehicle.id} className="p-4 bg-red-500/10 rounded-lg border border-red-500/20">
                        <div className="space-y-3">
                          <div className="flex items-start justify-between">
                            <div>
                              <h4 className="text-white font-semibold">{vehicle.title}</h4>
                              <p className="text-white/70 text-sm">{vehicle.make} {vehicle.model} ({vehicle.year})</p>
                            </div>
                            <span className="px-2 py-1 bg-red-500/20 text-red-200 rounded text-xs">
                              Rejected
                            </span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-white/70">R{vehicle.price_per_day}/day</span>
                            <span className="text-white/70">{vehicle.location?.city}</span>
                          </div>
                          {vehicle.rejection_reason && (
                            <div className="p-3 bg-red-500/20 rounded border border-red-500/30">
                              <p className="text-red-200 text-sm font-medium mb-1">Rejection Reason:</p>
                              <p className="text-red-100 text-sm">{vehicle.rejection_reason}</p>
                            </div>
                          )}
                          <div className="flex space-x-2">
                            <button 
                              onClick={() => {
                                // TODO: Implement edit and resubmit functionality
                                console.log('Edit and resubmit vehicle:', vehicle.id);
                                alert('Edit and resubmit functionality will be implemented');
                              }}
                              className="flex-1 px-3 py-1 bg-blue-500/20 text-blue-200 rounded text-sm hover:bg-blue-500/30 transition-colors"
                            >
                              Edit & Resubmit
                            </button>
                            <button 
                              onClick={() => {
                                if (confirm('Are you sure you want to remove this rejected vehicle?')) {
                                  // TODO: Implement remove rejected vehicle functionality
                                  console.log('Remove rejected vehicle:', vehicle.id);
                                  alert('Remove rejected vehicle functionality will be implemented');
                                }
                              }}
                              className="flex-1 px-3 py-1 bg-red-500/20 text-red-200 rounded text-sm hover:bg-red-500/30 transition-colors"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </GlassCard>
            )}

            {/* No Vehicles */}
            {vehicles.length === 0 && (
              <GlassCard title="Your Vehicles" icon="Car">
                <div className="text-center py-8">
                  <Icon name="Car" size="lg" className="text-white/50 mx-auto mb-4" />
                  <p className="text-white/70 mb-4">No vehicles listed yet</p>
                  <p className="text-white/50 text-sm mb-6">
                    List your first vehicle to start earning from rentals
                  </p>
                </div>
              </GlassCard>
            )}

            <FleetManagement hostId={user?.id || '0'} />
          </div>
        )}

        {/* Booking Management Tab */}
        {activeTab === 'bookings' && (
          <div className="space-y-6">
            <EnhancedBookingManagement
              userRole="host"
              userId={user?.id || '0'}
              onBookingAction={(bookingId, action, data) => {
                console.log('Booking action:', { bookingId, action, data });
                fetchDashboardData(); // Refresh data after action
              }}
              onRefresh={fetchDashboardData}
            />
            
            {/* Workflow Tracker for Pending Bookings */}
            {pendingBookings.length > 0 && (
              <GlassCard title="Pending Booking Workflows" icon="Clock">
                <div className="space-y-4">
                  {pendingBookings.slice(0, 2).map((booking) => (
                    <div key={booking.id} className="p-4 bg-white/5 rounded-lg border border-white/10">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                          <span className="text-white font-semibold text-sm">
                            {booking.renter.firstName[0]}{booking.renter.lastName[0]}
                          </span>
                        </div>
                        <div>
                          <h4 className="text-white font-medium">
                            {booking.renter.firstName} {booking.renter.lastName}
                          </h4>
                          <p className="text-white/70 text-sm">
                            {new Date(booking.startDate).toLocaleDateString()} - {new Date(booking.endDate).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                      <BookingWorkflowTracker
                        bookingId={booking.id}
                        userRole="host"
                        onStepComplete={(stepId, data) => {
                          console.log('Step completed:', { stepId, data });
                          fetchDashboardData();
                        }}
                        onStepError={(stepId, error) => {
                          console.log('Step error:', { stepId, error });
                        }}
                      />
                    </div>
                  ))}
                </div>
              </GlassCard>
            )}
          </div>
        )}

        {/* Financial Management Tab */}
        {activeTab === 'financial' && (
          <div className="space-y-6">
            <PaymentIntegration 
              bookingId={0}
              amount={0}
              onPaymentSuccess={() => {}}
              onPaymentError={() => {}}
            />
            <GlassCard title="Earnings Overview" icon="DollarSign">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">R{earnings.totalEarnings.toLocaleString()}</div>
                  <div className="text-white/70 text-sm">Total Earnings</div>
                  <div className="text-green-400 text-sm mt-1">+12% from last month</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">R{earnings.monthlyEarnings.toLocaleString()}</div>
                  <div className="text-white/70 text-sm">This Month</div>
                  <div className="text-blue-400 text-sm mt-1">Next payout: {financial?.upcomingPayouts?.[0]?.date || 'N/A'}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">R{earnings.pendingPayouts.toLocaleString()}</div>
                  <div className="text-white/70 text-sm">Pending Payouts</div>
                  <div className="text-yellow-400 text-sm mt-1">Available for withdrawal</div>
                </div>
              </div>
            </GlassCard>

            <GlassCard title="Transaction History" icon="CreditCard">
              <div className="space-y-3">
                {financial?.transactionHistory?.length > 0 ? (
                  financial.transactionHistory.slice(0, 5).map((transaction: any) => (
                  <div key={transaction.id} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className={`w-2 h-2 rounded-full ${
                        transaction.status === 'completed' ? 'bg-green-400' : 
                        transaction.status === 'pending' ? 'bg-yellow-400' : 'bg-red-400'
                      }`}></div>
                      <div>
                        <p className="text-white font-medium capitalize">{transaction.type}</p>
                        <p className="text-white/70 text-sm">{transaction.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-white font-semibold">R{transaction.amount.toLocaleString()}</p>
                      <p className="text-white/70 text-sm capitalize">{transaction.status}</p>
                    </div>
                  </div>
                ))
                ) : (
                  <div className="text-center py-8">
                    <Icon name="CreditCard" size="lg" className="text-white/30 mx-auto mb-2" />
                    <p className="text-white/50">No transactions yet</p>
                  </div>
                )}
              </div>
            </GlassCard>

            <GlassCard title="Payout Settings" icon="CreditCard">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">Bank Account</label>
                  <input
                    type="text"
                    placeholder="Enter bank account details"
                    className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">Payout Frequency</label>
                  <select className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                    <option value="on-demand">On Demand</option>
                  </select>
                </div>
                <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                  Update Settings
                </button>
              </div>
            </GlassCard>
          </div>
        )}

        {/* Communication Tab */}
        {activeTab === 'communication' && (
          <RealTimeMessaging />
        )}

        {/* Analytics Tab */}
        {activeTab === 'analytics' && (
          <AnalyticsDashboard />
        )}

        {/* Fleet Tools Tab */}
        {activeTab === 'fleet' && (
          <FleetManagement hostId={user?.id || '0'} />
        )}

        {/* Dynamic Pricing Tab */}
        {activeTab === 'pricing' && (
          <DynamicPricing 
            vehicleId=""
            basePrice={0}
            onPriceUpdate={() => {}}
          />
        )}

        {/* Approval Requests Tab */}
        {activeTab === 'approvals' && (
          <div className="space-y-6">
            <ApprovalRequests userRole="host" />
            
            {/* Vehicle Listing Request */}
            <GlassCard title="Vehicle Listing Approval" icon="Car">
              <div className="space-y-4">
                <p className="text-white/70 text-sm">
                  Submit your vehicle listing for admin approval to make it available for renters.
                </p>
                <button
                  onClick={() => handleSubmitApprovalRequest('VehicleListing')}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center space-x-2"
                >
                  <Icon name="Car" size="sm" />
                  <span>Request Vehicle Listing Approval</span>
                </button>
              </div>
            </GlassCard>

            {/* Insurance Verification Request */}
            <GlassCard title="Insurance Verification" icon="Shield">
              <div className="space-y-4">
                <p className="text-white/70 text-sm">
                  Submit your insurance documents for verification to ensure compliance with platform requirements.
                </p>
                <button
                  onClick={() => handleSubmitApprovalRequest('InsuranceVerification')}
                  className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors flex items-center space-x-2"
                >
                  <Icon name="Shield" size="sm" />
                  <span>Request Insurance Verification</span>
                </button>
              </div>
            </GlassCard>
          </div>
        )}
      </div>

      {/* Approval Request Form Modal */}
      {showApprovalForm && approvalFormType && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="w-full max-w-md">
            <ApprovalRequestForm
              requestType={approvalFormType}
              entityId={parseInt(selectedVehicleId?.toString() || user?.id || '0')}
              submittedBy="host"
              onSuccess={handleApprovalSuccess}
              onCancel={() => {
                setShowApprovalForm(false);
                setApprovalFormType(null);
                setSelectedVehicleId(null);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default HostDashboard;
