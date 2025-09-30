import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import Icon from '../components/Icon';
import GlassCard from '../components/GlassCard';
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

interface Vehicle {
  id: string;
  title: string;
  make: string;
  model: string;
  year: number;
  type: string;
  pricePerDay: number;
  location: string;
  status: 'pending' | 'approved' | 'declined';
  images: string[];
  bookings: number;
  earnings: number;
  createdAt: string;
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
  const [activeTab, setActiveTab] = useState('overview');
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [earnings, setEarnings] = useState<Earnings>({
    totalEarnings: 0,
    monthlyEarnings: 0,
    pendingPayouts: 0,
    completedBookings: 0
  });
  const [loading, setLoading] = useState(true);
  const [showApprovalForm, setShowApprovalForm] = useState(false);
  const [approvalFormType, setApprovalFormType] = useState<'VehicleListing' | 'InsuranceVerification' | 'VehicleApproval' | null>(null);
  const [selectedVehicleId, setSelectedVehicleId] = useState<number | null>(null);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      // Fetch vehicles
      const vehiclesResponse = await fetch('/api/vehicles/host', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      });
      if (vehiclesResponse.ok) {
        const vehiclesData = await vehiclesResponse.json();
        setVehicles(vehiclesData.data || []);
      }

      // Fetch bookings
      const bookingsResponse = await fetch('/api/bookings/host', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      });
      if (bookingsResponse.ok) {
        const bookingsData = await bookingsResponse.json();
        setBookings(bookingsData.data || []);
      }

      // Fetch earnings
      const earningsResponse = await fetch('/api/earnings', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      });
      if (earningsResponse.ok) {
        const earningsData = await earningsResponse.json();
        setEarnings(earningsData.data || earnings);
      }
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  const pendingBookings = bookings.filter(b => b.status === 'pending');
  const activeBookings = bookings.filter(b => b.status === 'confirmed');
  const approvedVehicles = vehicles.filter(v => v.status === 'approved');

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
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-white">Host Dashboard</h2>
          <p className="text-white/70">Manage your vehicle rental business</p>
        </div>
        <button
          onClick={() => setActiveTab('vehicles')}
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
        >
          <Icon name="Plus" size="sm" className="mr-2" />
          Add Vehicle
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

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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
              onSubmit={() => {}}
              onCancel={() => {}}
            />
            <FleetManagement hostId={user?.id || '0'} />
            <GlassCard title="Your Vehicles" icon="Car">
              <div className="space-y-4">
                {vehicles.length === 0 ? (
                  <div className="text-center py-8">
                    <Icon name="Car" size="lg" className="text-white/50 mx-auto mb-4" />
                    <p className="text-white/70">No vehicles listed yet</p>
                    <button
                      onClick={() => setActiveTab('vehicles')}
                      className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                    >
                      Add Your First Vehicle
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {vehicles.map((vehicle) => (
                      <div key={vehicle.id} className="p-4 bg-white/5 rounded-lg border border-white/10">
                        <div className="space-y-3">
                          <div className="flex items-start justify-between">
                            <div>
                              <h4 className="text-white font-semibold">{vehicle.title}</h4>
                              <p className="text-white/70 text-sm">{vehicle.make} {vehicle.model} ({vehicle.year})</p>
                            </div>
                            <StatusBadge status={vehicle.status} />
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-white/70">R{vehicle.pricePerDay}/day</span>
                            <span className="text-white/70">{vehicle.bookings} bookings</span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-white/70">R{vehicle.earnings} earned</span>
                            <span className="text-white/70">{vehicle.location}</span>
                          </div>
                          <div className="flex space-x-2">
                            <button className="flex-1 px-3 py-1 bg-blue-500/20 text-blue-200 rounded text-sm hover:bg-blue-500/30 transition-colors">
                              Edit
                            </button>
                            {vehicle.status === 'pending' && (
                              <button 
                                onClick={() => handleSubmitApprovalRequest('VehicleApproval', parseInt(vehicle.id))}
                                className="flex-1 px-3 py-1 bg-green-500/20 text-green-200 rounded text-sm hover:bg-green-500/30 transition-colors"
                              >
                                Request Approval
                              </button>
                            )}
                            <button className="flex-1 px-3 py-1 bg-red-500/20 text-red-200 rounded text-sm hover:bg-red-500/30 transition-colors">
                              Remove
                            </button>
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

        {/* Booking Management Tab */}
        {activeTab === 'bookings' && (
          <div className="space-y-6">
            <GlassCard title="Booking Requests" icon="Calendar">
              <div className="space-y-4">
                {pendingBookings.length === 0 ? (
                  <div className="text-center py-8">
                    <Icon name="Calendar" size="lg" className="text-white/50 mx-auto mb-4" />
                    <p className="text-white/70">No pending bookings</p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {pendingBookings.map((booking) => (
                      <div key={booking.id} className="p-4 bg-white/5 rounded-lg border border-white/10">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                                <span className="text-white font-semibold text-sm">
                                  {booking.renter.firstName[0]}{booking.renter.lastName[0]}
                                </span>
                              </div>
                              <div>
                                <h4 className="text-white font-semibold">
                                  {booking.renter.firstName} {booking.renter.lastName}
                                </h4>
                                <p className="text-white/70 text-sm">{booking.renter.email}</p>
                              </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                              <div>
                                <p className="text-white/70">Dates</p>
                                <p className="text-white">
                                  {new Date(booking.startDate).toLocaleDateString()} - {new Date(booking.endDate).toLocaleDateString()}
                                </p>
                              </div>
                              <div>
                                <p className="text-white/70">Total Price</p>
                                <p className="text-white font-semibold">R{booking.totalPrice}</p>
                              </div>
                              <div>
                                <p className="text-white/70">Requested</p>
                                <p className="text-white">{new Date(booking.createdAt).toLocaleDateString()}</p>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col space-y-2 ml-4">
                            <StatusBadge status={booking.status} />
                            <div className="flex space-x-2">
                              <button className="px-3 py-1 bg-green-500/20 text-green-200 rounded text-sm hover:bg-green-500/30 transition-colors">
                                Accept
                              </button>
                              <button className="px-3 py-1 bg-red-500/20 text-red-200 rounded text-sm hover:bg-red-500/30 transition-colors">
                                Decline
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </GlassCard>

            <GlassCard title="Booking History" icon="History">
              <div className="space-y-3">
                {bookings.filter(b => b.status !== 'pending').map((booking) => (
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
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">R{earnings.monthlyEarnings.toLocaleString()}</div>
                  <div className="text-white/70 text-sm">This Month</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">R{earnings.pendingPayouts.toLocaleString()}</div>
                  <div className="text-white/70 text-sm">Pending Payouts</div>
                </div>
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
