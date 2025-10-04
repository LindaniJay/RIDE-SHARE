// Production Service Imports
import { bookingService, Booking } from '../services/productionBookingService';

import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Icon from '../components/Icon';
import GlassCard from '../components/GlassCard';
import StatusBadge from '../components/StatusBadge';
import OptimizedImage from '../components/OptimizedImage';
import { DashboardSkeleton } from '../components/SkeletonLoader';
// Removed mock data imports
import EnhancedBookingManagement from '../components/EnhancedBookingManagement';
import RealTimeBookingNotifications from '../components/RealTimeBookingNotifications';
import BookingWorkflowTracker from '../components/BookingWorkflowTracker';

// Import components directly to avoid dynamic import issues
import DocumentUpload from '../components/DocumentUpload';
import SavedVehicles from '../components/SavedVehicles';
import DocumentExpiryReminder from '../components/DocumentExpiryReminder';
import Promotions from '../components/Promotions';
import RentalCalculator from '../components/RentalCalculator';
import RealTimeMessaging from '../components/RealTimeMessaging';
import AnalyticsDashboard from '../components/AnalyticsDashboard';
import ProfileSettings from '../components/ProfileSettings';
import ApprovalRequests from '../components/ApprovalRequests';
import ApprovalRequestForm from '../components/ApprovalRequestForm';

// Booking interface is now imported from bookingService

interface Payment {
  id: string;
  amount: number;
  status: 'pending' | 'completed' | 'failed' | 'refunded';
  method: 'stripe' | 'payfast';
  bookingId: string;
  createdAt: string;
}

const RenterDashboard: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [payments, setPayments] = useState<Payment[]>([]);
  const [loading, setLoading] = useState(true);
  const [showApprovalForm, setShowApprovalForm] = useState(false);
  const [approvalFormType, setApprovalFormType] = useState<'DocumentVerification' | 'ProfileVerification' | null>(null);

  useEffect(() => {
    fetchDashboardData();
    
    // Listen for booking updates
    const handleBookingCreated = () => {
      fetchDashboardData();
    };
    
    const handleBookingUpdated = () => {
      fetchDashboardData();
    };
    
    window.addEventListener('bookingCreated', handleBookingCreated);
    window.addEventListener('bookingUpdated', handleBookingUpdated);
    
    return () => {
      window.removeEventListener('bookingCreated', handleBookingCreated);
      window.removeEventListener('bookingUpdated', handleBookingUpdated);
    };
  }, [user?.id]);

  const fetchDashboardData = async () => {
    try {
      if (!user?.id) {
        setLoading(false);
        return;
      }

      // Get bookings from the booking service
      const userBookings = await bookingService.getRenterBookings(user.id);
      setBookings(userBookings);
      
      // Convert bookings to payments for display
      const bookingPayments = userBookings.map(booking => ({
        id: `payment_${booking.id}`,
        amount: booking.total_amount,
        status: (booking.payment_status === 'paid' ? 'completed' : 'pending') as 'pending' | 'completed' | 'failed' | 'refunded',
        method: 'stripe' as 'stripe' | 'payfast',
        bookingId: booking.id,
        createdAt: booking.created_at
      }));
      setPayments(bookingPayments);
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
      // Set empty state on error instead of mock data
      setBookings([]);
      setPayments([]);
    } finally {
      setLoading(false);
    }
  };

  const activeBookings = bookings.filter(b => b.status === 'confirmed');
  const totalSpent = payments
    .filter(p => p.status === 'completed')
    .reduce((sum, p) => sum + p.amount, 0);

  const handleSubmitApprovalRequest = (type: 'DocumentVerification' | 'ProfileVerification') => {
    setApprovalFormType(type);
    setShowApprovalForm(true);
  };

  const handleApprovalSuccess = () => {
    setShowApprovalForm(false);
    setApprovalFormType(null);
    // Optionally refresh data or show success message
  };

  const navigationTabs = [
    { id: 'overview', label: 'Overview', icon: 'BarChart' },
    { id: 'account', label: 'Account', icon: 'User' },
    { id: 'search', label: 'Search & Browse', icon: 'Search' },
    { id: 'bookings', label: 'Bookings', icon: 'Calendar' },
    { id: 'payments', label: 'Payments', icon: 'CreditCard' },
    { id: 'communication', label: 'Messages', icon: 'MessageCircle' },
    { id: 'analytics', label: 'Analytics', icon: 'TrendingUp' },
    { id: 'saved', label: 'Saved', icon: 'Heart' },
    { id: 'calculator', label: 'Calculator', icon: 'Calculator' },
    { id: 'documents', label: 'Documents', icon: 'FileText' },
    { id: 'promotions', label: 'Promotions', icon: 'Gift' },
    { id: 'approvals', label: 'Approval Requests', icon: 'Clock' },
  ];

  if (loading) {
    return <DashboardSkeleton />;
  }

  return (
    <div className="space-y-4 lg:space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center space-y-4 lg:space-y-0">
        <div>
          <h2 className="text-xl lg:text-2xl font-bold text-white">Renter Dashboard</h2>
          <p className="text-white/70 text-sm lg:text-base">Welcome back, {user?.firstName}!</p>
        </div>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
          <RealTimeBookingNotifications
            userRole="renter"
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
            onClick={() => navigate('/search')}
            className="flex items-center justify-center px-3 lg:px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm lg:text-base"
          >
            <Icon name="Search" size="sm" className="mr-2" />
            <span className="hidden sm:inline">Find Vehicles</span>
            <span className="sm:hidden">Search</span>
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
              <GlassCard
                title="Active Bookings"
                subtitle="Current rentals"
                icon="Car"
                className="text-center"
              >
                <div className="text-3xl font-bold text-white mb-2">{activeBookings.length}</div>
                <div className="text-white/70 text-sm">Active now</div>
              </GlassCard>
              
              <GlassCard
                title="Total Spent"
                subtitle="All time spending"
                icon="DollarSign"
                className="text-center"
              >
                <div className="text-3xl font-bold text-white mb-2">R{totalSpent.toLocaleString()}</div>
                <div className="text-white/70 text-sm">Lifetime total</div>
              </GlassCard>
              
              <GlassCard
                title="Saved Vehicles"
                subtitle="Your favorites"
                icon="Heart"
                className="text-center"
              >
                <div className="text-3xl font-bold text-white mb-2">0</div>
                <div className="text-white/70 text-sm">Saved vehicles</div>
              </GlassCard>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <GlassCard title="Recent Bookings" icon="Calendar">
                <div className="space-y-3">
                  {bookings.slice(0, 3).map((booking) => (
                    <div key={booking.id} className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg">
                      <OptimizedImage 
                        src={booking.listing?.image_url || '/placeholder-car.jpg'} 
                        alt={booking.listing?.title || 'Vehicle'}
                        width={48}
                        height={48}
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <h4 className="text-white font-medium">{booking.listing?.title || 'Vehicle'}</h4>
                        <p className="text-white/70 text-sm">
                          {new Date(booking.start_date).toLocaleDateString()} - {new Date(booking.end_date).toLocaleDateString()}
                        </p>
                      </div>
                      <StatusBadge status={booking.status} />
                    </div>
                  ))}
                </div>
              </GlassCard>

              <GlassCard title="Quick Actions" icon="Zap">
                <div className="space-y-3">
                  <button
                    onClick={() => navigate('/search')}
                    className="w-full p-3 bg-blue-500/20 text-blue-200 rounded-lg hover:bg-blue-500/30 transition-colors text-left"
                  >
                    <Icon name="Search" size="sm" className="mr-2" />
                    Search Vehicles
                  </button>
                  <button
                    onClick={() => setActiveTab('calculator')}
                    className="w-full p-3 bg-green-500/20 text-green-200 rounded-lg hover:bg-green-500/30 transition-colors text-left"
                  >
                    <Icon name="Calculator" size="sm" className="mr-2" />
                    Calculate Rental Cost
                  </button>
                  <button
                    onClick={() => setActiveTab('saved')}
                    className="w-full p-3 bg-purple-500/20 text-purple-200 rounded-lg hover:bg-purple-500/30 transition-colors text-left"
                  >
                    <Icon name="Heart" size="sm" className="mr-2" />
                    View Saved Vehicles
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

        {/* Search & Browse Tab */}
        {activeTab === 'search' && (
          <div className="space-y-6">
            <GlassCard title="Vehicle Search & Discovery" icon="Search">
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">Location</label>
                    <input
                      type="text"
                      placeholder="Enter city or area"
                      className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">Vehicle Type</label>
                    <select className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option value="">All Types</option>
                      <option value="sedan">Sedan</option>
                      <option value="suv">SUV</option>
                      <option value="hatchback">Hatchback</option>
                      <option value="convertible">Convertible</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">Start Date</label>
                    <input
                      type="date"
                      className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">End Date</label>
                    <input
                      type="date"
                      className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <button
                  onClick={() => navigate('/search')}
                  className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Search Vehicles
                </button>
              </div>
            </GlassCard>

            <GlassCard title="Browse by Category" icon="Grid">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['Economy', 'Luxury', 'SUV', 'Convertible'].map((category) => (
                  <button
                    key={category}
                    onClick={() => navigate('/search')}
                    className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors text-center"
                  >
                    <Icon name="Car" size="lg" className="mx-auto mb-2 text-blue-400" />
                    <span className="text-white font-medium">{category}</span>
                  </button>
                ))}
              </div>
            </GlassCard>
          </div>
        )}

        {/* Bookings Tab */}
        {activeTab === 'bookings' && (
          <div className="space-y-6">
            <EnhancedBookingManagement
              userRole="renter"
              userId={user?.id || '0'}
              onBookingAction={(bookingId, action, data) => {
                console.log('Booking action:', { bookingId, action, data });
                fetchDashboardData(); // Refresh data after action
              }}
              onRefresh={fetchDashboardData}
            />
            
            {/* Workflow Tracker for Active Bookings */}
            {bookings.filter(b => b.status === 'pending' || b.status === 'confirmed').length > 0 && (
              <GlassCard title="Booking Workflow Status" icon="Clock">
                <div className="space-y-4">
                  {bookings
                    .filter(b => b.status === 'pending' || b.status === 'confirmed')
                    .slice(0, 2) // Show max 2 active bookings
                    .map((booking) => (
                      <div key={booking.id} className="p-4 bg-white/5 rounded-lg border border-white/10">
                        <div className="flex items-center gap-3 mb-3">
                          <OptimizedImage 
                            src={booking.listing?.image_url || '/placeholder-car.jpg'} 
                            alt={booking.listing?.title || 'Vehicle'}
                            width={40}
                            height={40}
                            className="w-10 h-10 rounded-lg object-cover"
                          />
                          <div>
                            <h4 className="text-white font-medium">{booking.listing?.title || 'Vehicle'}</h4>
                            <p className="text-white/70 text-sm">
                              {new Date(booking.start_date).toLocaleDateString()} - {new Date(booking.end_date).toLocaleDateString()}
                            </p>
                          </div>
                        </div>
                        <BookingWorkflowTracker
                          bookingId={booking.id}
                          userRole="renter"
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

        {/* Payments Tab */}
        {activeTab === 'payments' && (
          <div className="space-y-6">
            <GlassCard title="Payment Methods" icon="CreditCard">
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                    <h4 className="text-white font-medium mb-2">Stripe Payment</h4>
                    <p className="text-white/70 text-sm mb-3">Secure credit card processing</p>
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                      Setup Stripe
                    </button>
                  </div>
                  <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                    <h4 className="text-white font-medium mb-2">Payfast</h4>
                    <p className="text-white/70 text-sm mb-3">South African payment gateway</p>
                    <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
                      Setup Payfast
                    </button>
                  </div>
                </div>
              </div>
            </GlassCard>
            <GlassCard title="Payment History" icon="CreditCard">
              <div className="space-y-3">
                {payments.length === 0 ? (
                  <div className="text-center py-8">
                    <Icon name="CreditCard" size="lg" className="text-white/50 mx-auto mb-4" />
                    <p className="text-white/70">No payment history</p>
                  </div>
                ) : (
                  payments.map((payment) => (
                    <div key={payment.id} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                      <div>
                        <p className="text-white font-medium">R{payment.amount}</p>
                        <p className="text-white/70 text-sm">
                          {new Date(payment.createdAt).toLocaleDateString()}
                        </p>
                      </div>
                      <div className="text-right">
                        <StatusBadge status={payment.status} />
                        <p className="text-white/70 text-sm capitalize">{payment.method}</p>
                      </div>
                    </div>
                  ))
                )}
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

        {/* Saved Vehicles Tab */}
        {activeTab === 'saved' && (
          <SavedVehicles userId={user?.id || '0'} />
        )}

        {/* Calculator Tab */}
        {activeTab === 'calculator' && (
          <div className="space-y-6">
            <GlassCard title="Rental Cost Calculator" icon="Calculator">
              <RentalCalculator 
                basePrice={500}
                onCalculate={(total, breakdown) => {
                  console.log('Calculated total:', total, breakdown);
                }}
              />
            </GlassCard>
          </div>
        )}

        {/* Documents Tab */}
        {activeTab === 'documents' && (
          <div className="space-y-6">
            <DocumentUpload 
              label="Upload Document"
              name="document"
              onChange={() => {}}
            />
            <DocumentExpiryReminder userId={user?.id || '0'} />
            
            {/* Document Verification Request */}
            <GlassCard title="Document Verification" icon="FileText">
              <div className="space-y-4">
                <p className="text-white/70 text-sm">
                  Submit your documents for verification to access premium features and improve your booking success rate.
                </p>
                <button
                  onClick={() => handleSubmitApprovalRequest('DocumentVerification')}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center space-x-2"
                >
                  <Icon name="Upload" size="sm" />
                  <span>Request Document Verification</span>
                </button>
              </div>
            </GlassCard>
          </div>
        )}

        {/* Promotions Tab */}
        {activeTab === 'promotions' && (
          <Promotions userId={user?.id || '0'} />
        )}

        {/* Approval Requests Tab */}
        {activeTab === 'approvals' && (
          <div className="space-y-6">
            <ApprovalRequests userRole="renter" />
            
            {/* Profile Verification Request */}
            <GlassCard title="Profile Verification" icon="User">
              <div className="space-y-4">
                <p className="text-white/70 text-sm">
                  Get your profile verified to build trust with hosts and increase your booking success rate.
                </p>
                <button
                  onClick={() => handleSubmitApprovalRequest('ProfileVerification')}
                  className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors flex items-center space-x-2"
                >
                  <Icon name="UserCheck" size="sm" />
                  <span>Request Profile Verification</span>
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
              entityId={parseInt(user?.id || '0')}
              submittedBy="renter"
              onSuccess={handleApprovalSuccess}
              onCancel={() => {
                setShowApprovalForm(false);
                setApprovalFormType(null);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default RenterDashboard;
