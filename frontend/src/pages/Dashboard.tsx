import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import AdminDashboard from './AdminDashboard';
import CarVideoBackground from '../components/CarVideoBackground';
import GlassCard from '../components/GlassCard';
import Glassmorphism from '../components/Glassmorphism';

// Type definitions
interface Booking {
  id: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  startDate: string;
  endDate: string;
  totalPrice: number;
  listing?: {
    title: string;
    location: string;
  };
}

interface Listing {
  id: string;
  title: string;
  location: string;
  pricePerDay: number;
  status: 'pending' | 'approved' | 'declined';
  declineReason?: string;
}

// Dashboard sub-components
const RenterDashboard: React.FC = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('/api/bookings', {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      
      if (response.ok) {
        const data = await response.json();
        setBookings(data.bookings || []);
      }
    } catch (error) {
      console.error('Error fetching bookings:', error);
    } finally {
      setLoading(false);
    }
  };

  const activeBookings = bookings.filter(booking => 
    booking.status === 'confirmed' || booking.status === 'pending'
  );
  
  const totalSpent = bookings
    .filter(booking => booking.status === 'completed')
    .reduce((sum, booking) => sum + booking.totalPrice, 0);

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded w-1/3 mb-6"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-32 bg-gray-300 dark:bg-gray-700 rounded-lg"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Renter Dashboard</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <GlassCard
          title="Active Bookings"
          subtitle="Current rentals"
          icon="🚗"
          className="text-center"
        >
          <div className="text-3xl font-bold text-white mb-2">{activeBookings.length}</div>
          <div className="text-white/70 text-sm">Active now</div>
        </GlassCard>
        
        <GlassCard
          title="Total Spent"
          subtitle="All time spending"
          icon="💰"
          className="text-center"
        >
          <div className="text-3xl font-bold text-white mb-2">R{totalSpent.toLocaleString()}</div>
          <div className="text-white/70 text-sm">Lifetime total</div>
        </GlassCard>
        
        <GlassCard
          title="Total Bookings"
          subtitle="All bookings"
          icon="📋"
          className="text-center"
        >
          <div className="text-3xl font-bold text-white mb-2">{bookings.length}</div>
          <div className="text-white/70 text-sm">Completed trips</div>
        </GlassCard>
      </div>
      
      <GlassCard
        title="Recent Bookings"
        subtitle="Your latest vehicle rentals"
        icon="📋"
      >
        <div className="space-y-3">
          {bookings.slice(0, 5).map((booking) => (
            <div key={booking.id} className="flex justify-between items-center p-4 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
              <div>
                <p className="font-medium text-white">
                  {booking.listing?.title || 'Unknown Vehicle'}
                </p>
                <p className="text-sm text-white/70">
                  {booking.listing?.location} • {new Date(booking.startDate).toLocaleDateString()} - {new Date(booking.endDate).toLocaleDateString()}
                </p>
              </div>
              <div className="text-right">
                <span className="text-white font-semibold">R{booking.totalPrice}</span>
                <div className={`text-xs px-2 py-1 rounded-full ${
                  booking.status === 'confirmed' ? 'bg-green-500/20 text-green-200 border border-green-400/30' :
                  booking.status === 'pending' ? 'bg-yellow-500/20 text-yellow-200 border border-yellow-400/30' :
                  booking.status === 'cancelled' ? 'bg-red-500/20 text-red-200 border border-red-400/30' :
                  'bg-gray-500/20 text-gray-200 border border-gray-400/30'
                }`}>
                  {booking.status}
                </div>
              </div>
            </div>
          ))}
          {bookings.length === 0 && (
            <p className="text-white/60 text-center py-4">No bookings yet</p>
          )}
        </div>
      </GlassCard>
    </div>
  );
};

const HostDashboard: React.FC = () => {
  const [listings, setListings] = useState<Listing[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchHostData();
  }, []);

  const fetchHostData = async () => {
    try {
      const token = localStorage.getItem('token');
      
      // Fetch listings
      const listingsResponse = await fetch('/api/listings/host/my-listings', {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      
      if (listingsResponse.ok) {
        const listingsData = await listingsResponse.json();
        setListings(listingsData.listings || []);
      }
    } catch (error) {
      console.error('Error fetching host data:', error);
    } finally {
      setLoading(false);
    }
  };

  const approvedListings = listings.filter(listing => listing.status === 'approved');
  const pendingListings = listings.filter(listing => listing.status === 'pending');
  const declinedListings = listings.filter(listing => listing.status === 'declined');

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded w-1/3 mb-6"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-32 bg-gray-300 dark:bg-gray-700 rounded-lg"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Host Dashboard</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
          <h3 className="font-semibold text-green-900 dark:text-green-300">Approved Listings</h3>
          <p className="text-green-700 dark:text-green-400 text-2xl font-bold">{approvedListings.length}</p>
          <p className="text-green-600 dark:text-green-400 text-sm">Active listings</p>
        </div>
        
        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
          <h3 className="font-semibold text-blue-900 dark:text-blue-300">Pending Approval</h3>
          <p className="text-blue-700 dark:text-blue-400 text-2xl font-bold">{pendingListings.length}</p>
          <p className="text-blue-600 dark:text-blue-400 text-sm">Awaiting review</p>
        </div>
        
        <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg">
          <h3 className="font-semibold text-yellow-900 dark:text-yellow-300">Total Listings</h3>
          <p className="text-yellow-700 dark:text-yellow-400 text-2xl font-bold">{listings.length}</p>
          <p className="text-yellow-600 dark:text-yellow-400 text-sm">All listings</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">My Listings</h3>
          <div className="space-y-3">
            {listings.slice(0, 5).map((listing) => (
              <div key={listing.id} className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded">
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">{listing.title}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {listing.location} • R{listing.pricePerDay}/day
                  </p>
                </div>
                <div className="text-right">
                  <div className={`text-xs px-2 py-1 rounded-full ${
                    listing.status === 'approved' ? 'bg-green-100 text-green-800' :
                    listing.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {listing.status}
                  </div>
                  {listing.declineReason && (
                    <p className="text-xs text-red-600 mt-1">{listing.declineReason}</p>
                  )}
                </div>
              </div>
            ))}
            {listings.length === 0 && (
              <p className="text-gray-500 dark:text-gray-400 text-center py-4">No listings yet</p>
            )}
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Listing Status</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-300">Approved</span>
              <span className="font-semibold text-green-600">{approvedListings.length}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-300">Pending</span>
              <span className="font-semibold text-yellow-600">{pendingListings.length}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-300">Declined</span>
              <span className="font-semibold text-red-600">{declinedListings.length}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


const Dashboard: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  // Redirect based on role
  useEffect(() => {
    if (user) {
      switch (user.role) {
        case 'renter':
          navigate('/dashboard/renter', { replace: true });
          break;
        case 'host':
          navigate('/dashboard/host', { replace: true });
          break;
        case 'admin':
          navigate('/dashboard/admin', { replace: true });
          break;
        default:
          navigate('/dashboard/renter', { replace: true });
      }
    }
  }, [user, navigate]);

  return (
    <div className="min-h-screen">
      <CarVideoBackground 
        variant="minimal" 
        overlay={true} 
        overlayOpacity={0.1}
        className="min-h-screen"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
          <p className="text-gray-600 dark:text-gray-300">Welcome back, {user?.firstName || 'User'}!</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
                <Glassmorphism variant="sidebar" className="rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Navigation</h3>
                  <nav className="space-y-2">
                    {user?.role === 'renter' && (
                      <Link
                        to="/dashboard/renter"
                        className="block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 text-white/80 hover:text-white hover:bg-white/10 backdrop-blur-sm border border-white/10 hover:border-white/20"
                      >
                        👤 My Bookings
                      </Link>
                    )}
                    {user?.role === 'host' && (
                      <Link
                        to="/dashboard/host"
                        className="block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 text-white/80 hover:text-white hover:bg-white/10 backdrop-blur-sm border border-white/10 hover:border-white/20"
                      >
                        🏠 My Listings
                      </Link>
                    )}
                    {user?.role === 'admin' && (
                      <>
                        <Link
                          to="/dashboard/admin"
                          className="block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 text-white/80 hover:text-white hover:bg-white/10 backdrop-blur-sm border border-white/10 hover:border-white/20"
                        >
                          ⚙️ Admin Panel
                        </Link>
                        <Link
                          to="/dashboard/renter"
                          className="block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 text-white/80 hover:text-white hover:bg-white/10 backdrop-blur-sm border border-white/10 hover:border-white/20"
                        >
                          👤 Renter View
                        </Link>
                        <Link
                          to="/dashboard/host"
                          className="block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 text-white/80 hover:text-white hover:bg-white/10 backdrop-blur-sm border border-white/10 hover:border-white/20"
                        >
                          🏠 Host View
                        </Link>
                      </>
                    )}
                  </nav>
                </Glassmorphism>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Routes>
              <Route path="/" element={<RenterDashboard />} />
              <Route path="/renter" element={<RenterDashboard />} />
              <Route path="/host" element={<HostDashboard />} />
              <Route path="/admin" element={<AdminDashboard />} />
            </Routes>
          </div>
        </div>
        </div>
      </CarVideoBackground>
    </div>
  );
};

export default Dashboard;