import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Icon from '../components/Icon';
import GlassCard from '../components/GlassCard';
import DocumentUpload from '../components/DocumentUpload';
import StatusBadge from '../components/StatusBadge';
import SavedVehicles from '../components/SavedVehicles';
import DocumentExpiryReminder from '../components/DocumentExpiryReminder';
import Promotions from '../components/Promotions';
import RentalCalculator from '../components/RentalCalculator';
import PaymentIntegration from '../components/PaymentIntegration';
import RealTimeMessaging from '../components/RealTimeMessaging';
import AnalyticsDashboard from '../components/AnalyticsDashboard';
import ProfileSettings from '../components/ProfileSettings';
import ApprovalRequests from '../components/ApprovalRequests';
import ApprovalRequestForm from '../components/ApprovalRequestForm';

interface Booking {
  id: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  vehicle: {
    id: string;
    title: string;
    image: string;
    make: string;
    model: string;
  };
  startDate: string;
  endDate: string;
  totalPrice: number;
  createdAt: string;
}

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
  }, []);

  const fetchDashboardData = async () => {
    try {
      // Fetch bookings
      const bookingsResponse = await fetch('/api/bookings', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      });
      if (bookingsResponse.ok) {
        const bookingsData = await bookingsResponse.json();
        setBookings(bookingsData.data || []);
      }

      // Fetch payments
      const paymentsResponse = await fetch('/api/payments', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      });
      if (paymentsResponse.ok) {
        const paymentsData = await paymentsResponse.json();
        setPayments(paymentsData.data || []);
      }
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
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
        <div>
          <h2 className="text-2xl font-bold text-white">Renter Dashboard</h2>
          <p className="text-white/70">Welcome back, {user?.firstName}!</p>
        </div>
        <button
          onClick={() => navigate('/search')}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          <Icon name="Search" size="sm" className="mr-2" />
          Find Vehicles
        </button>
      </div>

      {/* Navigation Tabs */}
      <div className="flex flex-wrap gap-2">
        {navigationTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              activeTab === tab.id
                ? 'bg-white/20 text-white'
                : 'bg-white/10 text-white/70 hover:bg-white/20'
            }`}
          >
            <Icon name={tab.icon} size="sm" />
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="space-y-6">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                      <img 
                        src={booking.vehicle.image} 
                        alt={booking.vehicle.title}
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <h4 className="text-white font-medium">{booking.vehicle.title}</h4>
                        <p className="text-white/70 text-sm">
                          {new Date(booking.startDate).toLocaleDateString()} - {new Date(booking.endDate).toLocaleDateString()}
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
            <GlassCard title="Booking Management" icon="Calendar">
              <div className="space-y-4">
                {bookings.length === 0 ? (
                  <div className="text-center py-8">
                    <Icon name="Calendar" size="lg" className="text-white/50 mx-auto mb-4" />
                    <p className="text-white/70">No bookings yet</p>
                    <button
                      onClick={() => navigate('/search')}
                      className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                    >
                      Start Booking
                    </button>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {bookings.map((booking) => (
                      <div key={booking.id} className="p-4 bg-white/5 rounded-lg border border-white/10">
                        <div className="flex items-start justify-between">
                          <div className="flex items-start space-x-3">
                            <img 
                              src={booking.vehicle.image} 
                              alt={booking.vehicle.title}
                              className="w-16 h-16 rounded-lg object-cover"
                            />
                            <div>
                              <h4 className="text-white font-semibold">{booking.vehicle.title}</h4>
                              <p className="text-white/70 text-sm">
                                {booking.vehicle.make} {booking.vehicle.model}
                              </p>
                              <p className="text-white/70 text-sm">
                                {new Date(booking.startDate).toLocaleDateString()} - {new Date(booking.endDate).toLocaleDateString()}
                              </p>
                            </div>
                          </div>
                          <div className="text-right">
                            <StatusBadge status={booking.status} />
                            <p className="text-white font-semibold mt-2">R{booking.totalPrice}</p>
                            {booking.status === 'confirmed' && (
                              <button className="mt-2 px-3 py-1 bg-red-500/20 text-red-200 rounded-lg text-sm hover:bg-red-500/30 transition-colors">
                                Cancel
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </GlassCard>
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
          <SavedVehicles />
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
            <DocumentUpload />
            <DocumentExpiryReminder />
            
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
          <Promotions />
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
              entityId={user?.id || 0}
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
