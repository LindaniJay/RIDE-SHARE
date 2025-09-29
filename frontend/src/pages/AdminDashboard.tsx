import React, { useState, useEffect } from 'react';
import StatusBadge from '../components/StatusBadge';
import AdminApprovalPanel from '../components/AdminApprovalPanel';
import FraudDetection from '../components/FraudDetection';
import CommissionManagement from '../components/CommissionManagement';
import Icon from '../components/Icon';
import { ProfileData } from '../types';
import { apiClient } from '../services/apiClient';
// import { useAuth } from '../context/AuthContext'; // Currently unused but may be needed for admin features

interface AdminStats {
  totalUsers: number;
  totalVehicles: number;
  totalBookings: number;
  totalRevenue: number;
  activeUsers: number;
  pendingBookings: number;
  supportTickets: number;
}

interface AdminUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  joinDate: string;
  isActive: boolean;
  totalBookings: number;
  totalEarnings: number;
}

interface AdminVehicle {
  id: string;
  make: string;
  model: string;
  year: number;
  hostName: string;
  location: string;
  pricePerDay: number;
  status: string;
  totalBookings: number;
  rating: number;
}

interface Booking {
  id: string;
  vehicleName: string;
  renterName: string;
  hostName: string;
  pickupDate: string;
  returnDate: string;
  totalAmount: number;
  status: string;
  createdAt: string;
}

const AdminDashboard: React.FC = () => {
  // const { user } = useAuth(); // Currently unused but may be needed for admin features
  const [stats, setStats] = useState<AdminStats>({
    totalUsers: 0,
    totalVehicles: 0,
    totalBookings: 0,
    totalRevenue: 0,
    activeUsers: 0,
    pendingBookings: 0,
    supportTickets: 0
  });
  const [users, setUsers] = useState<AdminUser[]>([]);
  const [vehicles, setVehicles] = useState<AdminVehicle[]>([]);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [profileCompletions] = useState<ProfileData[]>([]);
  const [pendingDocuments, setPendingDocuments] = useState<any[]>([]);
  const [disputes, setDisputes] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    fetchAdminData();
  }, []);

  const fetchAdminData = async () => {
    setLoading(true);
    try {
      // Fetch real-time data from backend API using apiClient
      const [usersResponse, vehiclesResponse, bookingsResponse, documentsResponse, disputesResponse, statsResponse] = await Promise.all([
        apiClient.get('/admin/users'),
        apiClient.get('/admin/vehicles'),
        apiClient.get('/admin/bookings'),
        apiClient.get('/admin/documents'),
        apiClient.get('/admin/disputes'),
        apiClient.get('/admin/stats')
      ]);

      // Process users data
      if (usersResponse.success) {
        setUsers((usersResponse.data as any)?.users || []);
      } else {
        console.error('Failed to fetch users:', usersResponse.message);
      }

      // Process vehicles data
      if (vehiclesResponse.success) {
        setVehicles((vehiclesResponse.data as any)?.vehicles || []);
      } else {
        console.error('Failed to fetch vehicles:', vehiclesResponse.message);
      }

      // Process bookings data
      if (bookingsResponse.success) {
        setBookings((bookingsResponse.data as any)?.bookings || []);
      } else {
        console.error('Failed to fetch bookings:', bookingsResponse.message);
      }

      // Process documents data
      if (documentsResponse.success) {
        setPendingDocuments((documentsResponse.data as any)?.documents || []);
      } else {
        console.error('Failed to fetch documents:', documentsResponse.message);
      }

      // Process disputes data
      if (disputesResponse.success) {
        setDisputes((disputesResponse.data as any)?.disputes || []);
      } else {
        console.error('Failed to fetch disputes:', disputesResponse.message);
      }

      // Process stats data
      if (statsResponse.success) {
        setStats((statsResponse.data as any)?.stats || {
          totalUsers: 0,
          totalVehicles: 0,
          totalBookings: 0,
          totalRevenue: 0,
          activeUsers: 0,
          pendingBookings: 0,
          supportTickets: 0
        });
      } else {
        console.error('Failed to fetch stats:', statsResponse.message);
      }

    } catch (error) {
      console.error('Error fetching admin data:', error);
      // Fallback to empty data if API fails
      setUsers([]);
      setVehicles([]);
      setBookings([]);
      setPendingDocuments([]);
      setDisputes([]);
      setStats({
        totalUsers: 0,
        totalVehicles: 0,
        totalBookings: 0,
        totalRevenue: 0,
        activeUsers: 0,
        pendingBookings: 0,
        supportTickets: 0
      });
    } finally {
      setLoading(false);
    }
  };

  const formatPrice = (price: number) => `R${price.toLocaleString()}`;
  const formatDate = (date: string) => new Date(date).toLocaleDateString();

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
      case 'confirmed':
        return 'text-green-600 bg-green-100 dark:bg-green-900/20';
      case 'pending':
        return 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900/20';
      case 'cancelled':
        return 'text-red-600 bg-red-100 dark:bg-red-900/20';
      default:
        return 'text-gray-600 bg-gray-100 dark:bg-gray-700';
    }
  };

  // Interactive functions
  const handleApproveVehicle = (vehicleId: string) => {
    setVehicles(prev => prev.map(vehicle => 
      vehicle.id === vehicleId 
        ? { ...vehicle, status: 'approved' }
        : vehicle
    ));
  };

  const handleDeclineVehicle = (vehicleId: string) => {
    setVehicles(prev => prev.map(vehicle => 
      vehicle.id === vehicleId 
        ? { ...vehicle, status: 'declined' }
        : vehicle
    ));
  };

  const handleApproveDocument = (docId: string) => {
    setPendingDocuments(prev => prev.map(doc => 
      doc.id === docId 
        ? { ...doc, status: 'approved' }
        : doc
    ));
  };

  const handleRejectDocument = (docId: string) => {
    setPendingDocuments(prev => prev.map(doc => 
      doc.id === docId 
        ? { ...doc, status: 'rejected' }
        : doc
    ));
  };

  const handleResolveDispute = (disputeId: string) => {
    setDisputes(prev => prev.map(dispute => 
      dispute.id === disputeId 
        ? { ...dispute, status: 'resolved' }
        : dispute
    ));
  };

  const handleSuspendUser = (userId: string) => {
    setUsers(prev => prev.map(user => 
      user.id === userId 
        ? { ...user, isActive: false }
        : user
    ));
  };

  const handleActivateUser = (userId: string) => {
    setUsers(prev => prev.map(user => 
      user.id === userId 
        ? { ...user, isActive: true }
        : user
    ));
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded w-1/3 mb-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-32 bg-gray-300 dark:bg-gray-700 rounded-lg"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Admin Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Manage your RideShare SA platform
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mr-4">
                <span className="text-blue-600 text-xl">👥</span>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {stats.totalUsers.toLocaleString()}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300">Total Users</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center mr-4">
                <Icon name="Car" size="lg" className="text-green-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {stats.totalVehicles.toLocaleString()}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300">Total Vehicles</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center mr-4">
                <Icon name="Clipboard" size="lg" className="text-purple-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {stats.totalBookings.toLocaleString()}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300">Total Bookings</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/20 rounded-lg flex items-center justify-center mr-4">
                <Icon name="DollarSign" size="lg" className="text-yellow-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {formatPrice(stats.totalRevenue)}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300">Total Revenue</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-300">Active Users</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {stats.activeUsers.toLocaleString()}
                </p>
              </div>
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
                <Icon name="CheckCircle" size="lg" className="text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-300">Pending Bookings</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {stats.pendingBookings}
                </p>
              </div>
              <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/20 rounded-lg flex items-center justify-center">
                <Icon name="Clock" size="lg" className="text-yellow-600" />
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-300">Support Tickets</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {stats.supportTickets}
                </p>
              </div>
              <div className="w-12 h-12 bg-red-100 dark:bg-red-900/20 rounded-lg flex items-center justify-center">
                <span className="text-red-600 text-xl">🎫</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-6">
          <div className="border-b border-gray-200 dark:border-gray-700">
            <nav className="-mb-px flex space-x-8 overflow-x-auto">
              {[
                { id: 'overview', name: 'Overview', icon: 'BarChart' },
                { id: 'approvals', name: 'Approvals', icon: 'CheckCircle' },
                { id: 'fraud', name: 'Fraud Detection', icon: 'Shield' },
                { id: 'commission', name: 'Commission', icon: 'DollarSign' },
                { id: 'users', name: 'Users', icon: 'Users' },
                { id: 'vehicles', name: 'Vehicles', icon: 'Car' },
                { id: 'bookings', name: 'Bookings', icon: 'Clipboard' },
                { id: 'documents', name: 'Documents', icon: 'FileText' },
                { id: 'disputes', name: 'Disputes', icon: 'Scale' },
                { id: 'analytics', name: 'Analytics', icon: 'TrendingUp' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-2 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <Icon name={tab.icon} size="sm" className="mr-2" />
                  {tab.name}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Recent Bookings
              </h3>
              <div className="space-y-4">
                {bookings.slice(0, 5).map((booking) => (
                  <div key={booking.id} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">
                        {booking.vehicleName}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {booking.renterName} → {booking.hostName}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-900 dark:text-white">
                        {formatPrice(booking.totalAmount)}
                      </p>
                      <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(booking.status)}`}>
                        {booking.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Platform Health
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-300">Uptime</span>
                  <span className="font-semibold text-green-600">99.9%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-300">Response Time</span>
                  <span className="font-semibold text-green-600">120ms</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-300">Error Rate</span>
                  <span className="font-semibold text-green-600">0.1%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-300">Active Sessions</span>
                  <span className="font-semibold text-blue-600">1,247</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'approvals' && (
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Document & Listing Approvals
              </h3>
                      <AdminApprovalPanel
                        users={users}
                        vehicles={vehicles}
                        profileCompletions={profileCompletions}
                        onApproveUser={(userId, notes) => {
                          console.log('Approving user:', userId, notes);
                          // Handle user approval
                        }}
                        onRejectUser={(userId, reason, notes) => {
                          console.log('Rejecting user:', userId, reason, notes);
                          // Handle user rejection
                        }}
                        onApproveVehicle={(vehicleId, notes) => {
                          console.log('Approving vehicle:', vehicleId, notes);
                          // Handle vehicle approval
                        }}
                        onRejectVehicle={(vehicleId, reason, notes) => {
                          console.log('Rejecting vehicle:', vehicleId, reason, notes);
                          // Handle vehicle rejection
                        }}
                        onApproveProfile={(profileId, notes) => {
                          console.log('Approving profile:', profileId, notes);
                          // Handle profile approval
                        }}
                        onRejectProfile={(profileId, reason, notes) => {
                          console.log('Rejecting profile:', profileId, reason, notes);
                          // Handle profile rejection
                        }}
                      />
            </div>
          </div>
        )}

        {activeTab === 'fraud' && (
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Fraud Detection System
              </h3>
              <FraudDetection />
            </div>
          </div>
        )}

        {activeTab === 'commission' && (
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Commission & Payout Management
              </h3>
              <CommissionManagement />
            </div>
          </div>
        )}

        {activeTab === 'users' && (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                User Management
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      User
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Role
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Join Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Bookings
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                  {users.map((user) => (
                    <tr key={user.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mr-3">
                            <span className="text-primary-600 text-sm font-medium">
                              {user.firstName.charAt(0)}
                            </span>
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-900 dark:text-white">
                              {user.firstName} {user.lastName}
                            </div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">
                              {user.email}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300">
                          {user.role}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                        {formatDate(user.joinDate)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                        {user.totalBookings}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                          user.isActive 
                            ? 'bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-300'
                            : 'bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-300'
                        }`}>
                          {user.isActive ? 'Active' : 'Inactive'}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex space-x-2">
                          <button className="text-blue-600 hover:text-blue-900">
                            Edit
                          </button>
                          {user.isActive ? (
                            <button 
                              onClick={() => handleSuspendUser(user.id)}
                              className="text-red-600 hover:text-red-900"
                            >
                              Suspend
                            </button>
                          ) : (
                            <button 
                              onClick={() => handleActivateUser(user.id)}
                              className="text-green-600 hover:text-green-900"
                            >
                              Activate
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'vehicles' && (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Vehicle Management
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Vehicle
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Host
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Location
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Price/Day
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Bookings
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Rating
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                  {vehicles.map((vehicle) => (
                    <tr key={vehicle.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900 dark:text-white">
                          {vehicle.make} {vehicle.model} {vehicle.year}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                        {vehicle.hostName}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                        {vehicle.location}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                        {formatPrice(vehicle.pricePerDay)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                        {vehicle.totalBookings}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                        <div className="flex items-center">
                          <Icon name="Star" size="sm" className="text-yellow-400" />
                          <span className="ml-1">{vehicle.rating}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center space-x-2">
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(vehicle.status)}`}>
                            {vehicle.status}
                          </span>
                          {vehicle.status === 'pending' && (
                            <div className="flex space-x-1">
                              <button 
                                onClick={() => handleApproveVehicle(vehicle.id)}
                                className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded hover:bg-green-200"
                              >
                                Approve
                              </button>
                              <button 
                                onClick={() => handleDeclineVehicle(vehicle.id)}
                                className="px-2 py-1 text-xs bg-red-100 text-red-800 rounded hover:bg-red-200"
                              >
                                Decline
                              </button>
                            </div>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'bookings' && (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Booking Management
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Booking
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Renter
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Host
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Dates
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Amount
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                  {bookings.map((booking) => (
                    <tr key={booking.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900 dark:text-white">
                          {booking.vehicleName}
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          #{booking.id}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                        {booking.renterName}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                        {booking.hostName}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                        <div>{formatDate(booking.pickupDate)}</div>
                        <div className="text-gray-500 dark:text-gray-400">to {formatDate(booking.returnDate)}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                        {formatPrice(booking.totalAmount)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(booking.status)}`}>
                          {booking.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'documents' && (
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Document Approval
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                  Review and approve user documents
                </p>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-700">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                        User
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                        Document Type
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                        File Name
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                        Uploaded
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                    {pendingDocuments.map((doc) => (
                      <tr key={doc.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900 dark:text-white">
                            {doc.user}
                          </div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">
                            {doc.userEmail}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white capitalize">
                          {doc.type.replace('_', ' ')}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                          {doc.fileName}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                          {formatDate(doc.uploadedAt)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <StatusBadge status={doc.status} />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <div className="flex space-x-2">
                            <button 
                              onClick={() => handleApproveDocument(doc.id)}
                              className="text-green-600 hover:text-green-900"
                            >
                              Approve
                            </button>
                            <button 
                              onClick={() => handleRejectDocument(doc.id)}
                              className="text-red-600 hover:text-red-900"
                            >
                              Reject
                            </button>
                            <button className="text-blue-600 hover:text-blue-900">
                              View
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'disputes' && (
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Dispute Management
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                  Handle user disputes and issues
                </p>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-700">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                        Dispute
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                        Parties
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                        Type
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                        Priority
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                    {disputes.map((dispute) => (
                      <tr key={dispute.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900 dark:text-white">
                            {dispute.title}
                          </div>
                          <div className="text-sm text-gray-500 dark:text-gray-400 max-w-xs truncate">
                            {dispute.description}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                          <div>{dispute.renter}</div>
                          <div className="text-gray-500 dark:text-gray-400">vs {dispute.host}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white capitalize">
                          {dispute.type.replace('_', ' ')}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                            dispute.priority === 'high' 
                              ? 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300'
                              : dispute.priority === 'medium'
                              ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300'
                              : 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300'
                          }`}>
                            {dispute.priority}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <StatusBadge status={dispute.status as any} />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <div className="flex space-x-2">
                            <button className="text-blue-600 hover:text-blue-900">
                              View Details
                            </button>
                            {dispute.status !== 'resolved' && (
                              <button 
                                onClick={() => handleResolveDispute(dispute.id)}
                                className="text-green-600 hover:text-green-900"
                              >
                                Resolve
                              </button>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'analytics' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  User Analytics
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-300">Total Users</span>
                    <span className="font-semibold text-gray-900 dark:text-white">{stats.totalUsers}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-300">Active Users</span>
                    <span className="font-semibold text-green-600">{stats.activeUsers}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-300">New This Month</span>
                    <span className="font-semibold text-blue-600">12</span>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Revenue Analytics
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-300">Total Revenue</span>
                    <span className="font-semibold text-gray-900 dark:text-white">{formatPrice(stats.totalRevenue)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-300">This Month</span>
                    <span className="font-semibold text-green-600">R{Math.floor(stats.totalRevenue * 0.3).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-300">Growth Rate</span>
                    <span className="font-semibold text-blue-600">+15.2%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Platform Health
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">99.9%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">120ms</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Avg Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">1,247</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Active Sessions</div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Monthly Revenue Chart
              </h3>
              <div className="h-64 flex items-center justify-center text-gray-500 dark:text-gray-400">
                <div className="text-center">
                  <div className="mb-4">
                    <Icon name="BarChart" size="lg" className="text-gray-400 mx-auto" />
                  </div>
                  <p>Revenue chart would be displayed here</p>
                  <p className="text-sm">Integration with chart library needed</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
