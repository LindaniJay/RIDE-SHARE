import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import AdminDashboard from './AdminDashboard';
import GlassCard from '../components/GlassCard';
import DocumentUpload from '../components/DocumentUpload';
import StatusBadge from '../components/StatusBadge';
import Icon from '../components/Icon';

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

// Enhanced Dashboard sub-components
const RenterDashboard: React.FC = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [documents, setDocuments] = useState<any[]>([]);
  const [verificationStatus, setVerificationStatus] = useState({
    profile: 'pending' as 'pending' | 'approved' | 'rejected',
    license: 'unverified' as 'pending' | 'approved' | 'rejected' | 'unverified',
    id: 'unverified' as 'pending' | 'approved' | 'rejected' | 'unverified'
  });
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    fetchRenterData();
  }, []);

  const fetchRenterData = async () => {
    try {
      // Fetch bookings
      const token = localStorage.getItem('accessToken');
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

      // Mock verification status (would come from API)
      setVerificationStatus({
        profile: 'approved',
        license: 'pending',
        id: 'unverified'
      });

      // Mock documents
      setDocuments([
        { id: 1, type: 'license', name: 'Driver License.pdf', status: 'pending', uploadedAt: '2024-12-01' },
        { id: 2, type: 'id', name: 'ID Document.pdf', status: 'unverified', uploadedAt: null }
      ]);
    } catch (error) {
      console.error('Error fetching renter data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDocumentUpload = (file: File, type: string) => {
    console.log('Uploading document:', file.name, 'Type:', type);
    // Here you would upload to your backend
    // For now, just update local state
    const newDocument = {
      id: Date.now(),
      type,
      name: file.name,
      status: 'pending' as const,
      uploadedAt: new Date().toISOString()
    };
    setDocuments(prev => [...prev, newDocument]);
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
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Renter Dashboard</h2>
        <div className="flex space-x-2">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              activeTab === 'overview'
                ? 'bg-white/20 text-white'
                : 'bg-white/10 text-white/70 hover:bg-white/20'
            }`}
          >
            📊 Overview
          </button>
          <button
            onClick={() => setActiveTab('documents')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              activeTab === 'documents'
                ? 'bg-white/20 text-white'
                : 'bg-white/10 text-white/70 hover:bg-white/20'
            }`}
          >
            📄 Documents
          </button>
          <button
            onClick={() => setActiveTab('bookings')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              activeTab === 'bookings'
                ? 'bg-white/20 text-white'
                : 'bg-white/10 text-white/70 hover:bg-white/20'
            }`}
          >
            🚗 Bookings
          </button>
          <button
            onClick={() => setActiveTab('payments')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              activeTab === 'payments'
                ? 'bg-white/20 text-white'
                : 'bg-white/10 text-white/70 hover:bg-white/20'
            }`}
          >
            💳 Payments
          </button>
        </div>
      </div>

      {activeTab === 'overview' && (
        <>
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
              title="Verification Status"
              subtitle="Account verification"
              icon="✅"
              className="text-center"
            >
              <div className="text-3xl font-bold text-white mb-2">
                {verificationStatus.profile === 'approved' ? '✅' : '⏳'}
              </div>
              <div className="text-white/70 text-sm">
                {verificationStatus.profile === 'approved' ? 'Verified' : 'Pending'}
              </div>
            </GlassCard>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <GlassCard
              title="Recent Bookings"
              subtitle="Your latest vehicle rentals"
              icon="📋"
            >
              <div className="space-y-3">
                {bookings.slice(0, 3).map((booking) => (
                  <div key={booking.id} className="flex justify-between items-center p-4 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
                    <div>
                      <p className="font-medium text-white">
                        {booking.listing?.title || 'Unknown Vehicle'}
                      </p>
                      <p className="text-sm text-white/70">
                        {booking.listing?.location} • {new Date(booking.startDate).toLocaleDateString()}
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

            <GlassCard
              title="Verification Status"
              subtitle="Document verification progress"
              icon="📋"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">👤</span>
                    <div>
                      <p className="text-white font-medium">Profile</p>
                      <p className="text-white/70 text-sm">Basic information</p>
                    </div>
                  </div>
                  <StatusBadge status={verificationStatus.profile} />
                </div>
                
                <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">🆔</span>
                    <div>
                      <p className="text-white font-medium">Driver License</p>
                      <p className="text-white/70 text-sm">Driving permit</p>
                    </div>
                  </div>
                  <StatusBadge status={verificationStatus.license} />
                </div>
                
                <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">🆔</span>
                    <div>
                      <p className="text-white font-medium">ID Document</p>
                      <p className="text-white/70 text-sm">Identity verification</p>
                    </div>
                  </div>
                  <StatusBadge status={verificationStatus.id} />
                </div>
              </div>
            </GlassCard>
          </div>
        </>
      )}

      {activeTab === 'documents' && (
        <div className="space-y-6">
          <GlassCard
            title="Document Upload"
            subtitle="Upload your verification documents"
            icon="📄"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Driver License</h4>
                <DocumentUpload
                  onUpload={(file) => handleDocumentUpload(file, 'license')}
                  documentType="Driver License"
                  acceptedTypes={['image/jpeg', 'image/png', 'application/pdf']}
                  maxSize={5}
                />
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">ID Document</h4>
                <DocumentUpload
                  onUpload={(file) => handleDocumentUpload(file, 'id')}
                  documentType="ID Document"
                  acceptedTypes={['image/jpeg', 'image/png', 'application/pdf']}
                  maxSize={5}
                />
              </div>
            </div>
          </GlassCard>

          <GlassCard
            title="Uploaded Documents"
            subtitle="Your submitted documents"
            icon="📁"
          >
            <div className="space-y-3">
              {documents.map((doc) => (
                <div key={doc.id} className="flex justify-between items-center p-4 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">📄</span>
                    <div>
                      <p className="text-white font-medium">{doc.name}</p>
                      <p className="text-white/70 text-sm">
                        {doc.uploadedAt ? `Uploaded ${new Date(doc.uploadedAt).toLocaleDateString()}` : 'Not uploaded'}
                      </p>
                    </div>
                  </div>
                  <StatusBadge status={doc.status} />
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      )}

      {activeTab === 'bookings' && (
        <GlassCard
          title="My Bookings"
          subtitle="All your vehicle rentals"
          icon="🚗"
        >
          <div className="space-y-4">
            {bookings.map((booking) => (
              <div key={booking.id} className="p-4 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-white mb-2">
                      {booking.listing?.title || 'Unknown Vehicle'}
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-white/70">
                      <div>
                        <p><span className="font-medium">Location:</span> {booking.listing?.location}</p>
                        <p><span className="font-medium">Dates:</span> {new Date(booking.startDate).toLocaleDateString()} - {new Date(booking.endDate).toLocaleDateString()}</p>
                      </div>
                      <div>
                        <p><span className="font-medium">Total:</span> R{booking.totalPrice}</p>
                        <p><span className="font-medium">Status:</span> 
                          <StatusBadge status={booking.status as any} className="ml-2" />
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-2 ml-4">
                    <button className="px-3 py-1 bg-blue-500/20 text-blue-200 rounded-lg text-sm hover:bg-blue-500/30 transition-colors">
                      View Details
                    </button>
                    {booking.status === 'pending' && (
                      <button className="px-3 py-1 bg-red-500/20 text-red-200 rounded-lg text-sm hover:bg-red-500/30 transition-colors">
                        Cancel
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
            {bookings.length === 0 && (
              <p className="text-white/60 text-center py-8">No bookings yet</p>
            )}
          </div>
        </GlassCard>
      )}

      {activeTab === 'payments' && (
        <div className="space-y-6">
          <GlassCard
            title="Payment History"
            subtitle="Your transaction history"
            icon="💳"
          >
            <div className="space-y-4">
              {bookings.filter(b => b.status === 'completed').map((booking) => (
                <div key={booking.id} className="flex justify-between items-center p-4 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
                  <div>
                    <p className="text-white font-medium">{booking.listing?.title || 'Vehicle Rental'}</p>
                    <p className="text-white/70 text-sm">{new Date(booking.startDate).toLocaleDateString()}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-white font-semibold">R{booking.totalPrice}</p>
                    <p className="text-green-400 text-sm">✅ Paid</p>
                  </div>
                </div>
              ))}
              {bookings.filter(b => b.status === 'completed').length === 0 && (
                <p className="text-white/60 text-center py-8">No payment history yet</p>
              )}
            </div>
          </GlassCard>

          <GlassCard
            title="Payment Methods"
            subtitle="Manage your payment options"
            icon="💳"
          >
            <div className="space-y-4">
              <div className="p-4 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">💳</span>
                    <div>
                      <p className="text-white font-medium">Credit Card</p>
                      <p className="text-white/70 text-sm">**** **** **** 1234</p>
                    </div>
                  </div>
                  <button className="px-3 py-1 bg-blue-500/20 text-blue-200 rounded-lg text-sm hover:bg-blue-500/30 transition-colors">
                    Edit
                  </button>
                </div>
              </div>
              
              <button className="w-full p-4 border-2 border-dashed border-white/30 rounded-xl text-white/70 hover:border-white/50 hover:text-white transition-colors">
                + Add Payment Method
              </button>
            </div>
          </GlassCard>
        </div>
      )}
    </div>
  );
};

const HostDashboard: React.FC = () => {
  const [listings, setListings] = useState<Listing[]>([]);
  const [bookings, setBookings] = useState<any[]>([]);
  const [earnings, setEarnings] = useState({
    total: 0,
    thisMonth: 0,
    lastMonth: 0
  });
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    fetchHostData();
  }, []);

  const fetchHostData = async () => {
    try {
      const token = localStorage.getItem('accessToken');
      
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

      // Mock booking requests
      setBookings([
        {
          id: '1',
          vehicleName: '2020 Toyota Corolla',
          renterName: 'John Doe',
          startDate: '2024-12-15',
          endDate: '2024-12-17',
          totalAmount: 1350,
          status: 'pending'
        },
        {
          id: '2',
          vehicleName: '2019 BMW X3',
          renterName: 'Jane Smith',
          startDate: '2024-12-20',
          endDate: '2024-12-22',
          totalAmount: 2400,
          status: 'confirmed'
        }
      ]);

      // Mock earnings
      setEarnings({
        total: 15750,
        thisMonth: 3750,
        lastMonth: 4200
      });
    } catch (error) {
      console.error('Error fetching host data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleBookingAction = (bookingId: string, action: 'accept' | 'reject') => {
    setBookings(prev => prev.map(booking => 
      booking.id === bookingId 
        ? { ...booking, status: action === 'accept' ? 'confirmed' : 'rejected' }
        : booking
    ));
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
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Host Dashboard</h2>
        <div className="flex space-x-2">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              activeTab === 'overview'
                ? 'bg-white/20 text-white'
                : 'bg-white/10 text-white/70 hover:bg-white/20'
            }`}
          >
            📊 Overview
          </button>
          <button
            onClick={() => setActiveTab('vehicles')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              activeTab === 'vehicles'
                ? 'bg-white/20 text-white'
                : 'bg-white/10 text-white/70 hover:bg-white/20'
            }`}
          >
            🚗 Vehicles
          </button>
          <button
            onClick={() => setActiveTab('bookings')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              activeTab === 'bookings'
                ? 'bg-white/20 text-white'
                : 'bg-white/10 text-white/70 hover:bg-white/20'
            }`}
          >
            📋 Bookings
          </button>
          <button
            onClick={() => setActiveTab('earnings')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              activeTab === 'earnings'
                ? 'bg-white/20 text-white'
                : 'bg-white/10 text-white/70 hover:bg-white/20'
            }`}
          >
            💰 Earnings
          </button>
        </div>
      </div>

      {activeTab === 'overview' && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <GlassCard
              title="Approved Listings"
              subtitle="Active vehicles"
              icon="✅"
              className="text-center"
            >
              <div className="text-3xl font-bold text-white mb-2">{approvedListings.length}</div>
              <div className="text-white/70 text-sm">Ready to rent</div>
            </GlassCard>
            
            <GlassCard
              title="Pending Approval"
              subtitle="Awaiting review"
              icon="⏳"
              className="text-center"
            >
              <div className="text-3xl font-bold text-white mb-2">{pendingListings.length}</div>
              <div className="text-white/70 text-sm">Under review</div>
            </GlassCard>
            
            <GlassCard
              title="Total Earnings"
              subtitle="All time revenue"
              icon="💰"
              className="text-center"
            >
              <div className="text-3xl font-bold text-white mb-2">R{earnings.total.toLocaleString()}</div>
              <div className="text-white/70 text-sm">Lifetime total</div>
            </GlassCard>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <GlassCard
              title="Recent Bookings"
              subtitle="Latest rental requests"
              icon="📋"
            >
              <div className="space-y-3">
                {bookings.slice(0, 3).map((booking) => (
                  <div key={booking.id} className="flex justify-between items-center p-4 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
                    <div>
                      <p className="font-medium text-white">{booking.vehicleName}</p>
                      <p className="text-sm text-white/70">
                        {booking.renterName} • {new Date(booking.startDate).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-white font-semibold">R{booking.totalAmount}</span>
                      <StatusBadge status={booking.status as any} />
                    </div>
                  </div>
                ))}
                {bookings.length === 0 && (
                  <p className="text-white/60 text-center py-4">No bookings yet</p>
                )}
              </div>
            </GlassCard>

            <GlassCard
              title="Listing Status"
              subtitle="Vehicle approval status"
              icon="📊"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">✅</span>
                    <div>
                      <p className="text-white font-medium">Approved</p>
                      <p className="text-white/70 text-sm">Ready to rent</p>
                    </div>
                  </div>
                  <span className="text-white font-bold text-xl">{approvedListings.length}</span>
                </div>
                
                <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">⏳</span>
                    <div>
                      <p className="text-white font-medium">Pending</p>
                      <p className="text-white/70 text-sm">Under review</p>
                    </div>
                  </div>
                  <span className="text-white font-bold text-xl">{pendingListings.length}</span>
                </div>
                
                <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">❌</span>
                    <div>
                      <p className="text-white font-medium">Declined</p>
                      <p className="text-white/70 text-sm">Needs attention</p>
                    </div>
                  </div>
                  <span className="text-white font-bold text-xl">{declinedListings.length}</span>
                </div>
              </div>
            </GlassCard>
          </div>
        </>
      )}

      {activeTab === 'vehicles' && (
        <div className="space-y-6">
          <GlassCard
            title="Vehicle Management"
            subtitle="Manage your vehicle listings"
            icon="🚗"
          >
            <div className="space-y-4">
              {listings.map((listing) => (
                <div key={listing.id} className="p-4 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white mb-2">{listing.title}</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-white/70">
                        <div>
                          <p><span className="font-medium">Location:</span> {listing.location}</p>
                          <p><span className="font-medium">Price:</span> R{listing.pricePerDay}/day</p>
                        </div>
                        <div>
                          <p><span className="font-medium">Status:</span> 
                            <StatusBadge status={listing.status as any} className="ml-2" />
                          </p>
                          {listing.declineReason && (
                            <p className="text-red-400 text-sm mt-1">Reason: {listing.declineReason}</p>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-2 ml-4">
                      <button className="px-3 py-1 bg-blue-500/20 text-blue-200 rounded-lg text-sm hover:bg-blue-500/30 transition-colors">
                        Edit
                      </button>
                      <button className="px-3 py-1 bg-green-500/20 text-green-200 rounded-lg text-sm hover:bg-green-500/30 transition-colors">
                        View
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              {listings.length === 0 && (
                <p className="text-white/60 text-center py-8">No vehicles listed yet</p>
              )}
            </div>
          </GlassCard>

          <GlassCard
            title="Add New Vehicle"
            subtitle="List a new vehicle for rent"
            icon="➕"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Vehicle Photos</h4>
                <DocumentUpload
                  onUpload={(file) => console.log('Uploading vehicle photo:', file.name)}
                  documentType="Vehicle Photos"
                  acceptedTypes={['image/jpeg', 'image/png']}
                  maxSize={10}
                />
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Vehicle Documents</h4>
                <DocumentUpload
                  onUpload={(file) => console.log('Uploading vehicle document:', file.name)}
                  documentType="Insurance & License"
                  acceptedTypes={['image/jpeg', 'image/png', 'application/pdf']}
                  maxSize={5}
                />
              </div>
            </div>
            
            <div className="mt-6">
              <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
                + Add New Vehicle Listing
              </button>
            </div>
          </GlassCard>
        </div>
      )}

      {activeTab === 'bookings' && (
        <GlassCard
          title="Booking Requests"
          subtitle="Manage rental requests"
          icon="📋"
        >
          <div className="space-y-4">
            {bookings.map((booking) => (
              <div key={booking.id} className="p-4 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-white mb-2">{booking.vehicleName}</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-white/70">
                      <div>
                        <p><span className="font-medium">Renter:</span> {booking.renterName}</p>
                        <p><span className="font-medium">Dates:</span> {new Date(booking.startDate).toLocaleDateString()} - {new Date(booking.endDate).toLocaleDateString()}</p>
                      </div>
                      <div>
                        <p><span className="font-medium">Total:</span> R{booking.totalAmount}</p>
                        <p><span className="font-medium">Status:</span> 
                          <StatusBadge status={booking.status as any} className="ml-2" />
                        </p>
                      </div>
                    </div>
                  </div>
                  {booking.status === 'pending' && (
                    <div className="flex space-x-2 ml-4">
                      <button 
                        onClick={() => handleBookingAction(booking.id, 'accept')}
                        className="px-4 py-2 bg-green-500/20 text-green-200 rounded-lg text-sm hover:bg-green-500/30 transition-colors"
                      >
                        Accept
                      </button>
                      <button 
                        onClick={() => handleBookingAction(booking.id, 'reject')}
                        className="px-4 py-2 bg-red-500/20 text-red-200 rounded-lg text-sm hover:bg-red-500/30 transition-colors"
                      >
                        Reject
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
            {bookings.length === 0 && (
              <p className="text-white/60 text-center py-8">No booking requests yet</p>
            )}
          </div>
        </GlassCard>
      )}

      {activeTab === 'earnings' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <GlassCard
              title="Total Earnings"
              subtitle="All time revenue"
              icon="💰"
              className="text-center"
            >
              <div className="text-3xl font-bold text-white mb-2">R{earnings.total.toLocaleString()}</div>
              <div className="text-white/70 text-sm">Lifetime total</div>
            </GlassCard>
            
            <GlassCard
              title="This Month"
              subtitle="Current month earnings"
              icon="📅"
              className="text-center"
            >
              <div className="text-3xl font-bold text-white mb-2">R{earnings.thisMonth.toLocaleString()}</div>
              <div className="text-white/70 text-sm">December 2024</div>
            </GlassCard>
            
            <GlassCard
              title="Last Month"
              subtitle="Previous month earnings"
              icon="📊"
              className="text-center"
            >
              <div className="text-3xl font-bold text-white mb-2">R{earnings.lastMonth.toLocaleString()}</div>
              <div className="text-white/70 text-sm">November 2024</div>
            </GlassCard>
          </div>

          <GlassCard
            title="Earnings Chart"
            subtitle="Monthly revenue overview"
            icon="📈"
          >
            <div className="h-64 flex items-center justify-center text-white/60">
              <div className="text-center">
                <div className="text-4xl mb-4">📊</div>
                <p>Earnings chart would be displayed here</p>
                <p className="text-sm">Integration with chart library needed</p>
              </div>
            </div>
          </GlassCard>
        </div>
      )}
    </div>
  );
};


const Dashboard: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  // Redirect based on role
  useEffect(() => {
    if (user) {
      // Store user role in localStorage for persistence
      localStorage.setItem('userRole', user.role);
      
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
          <p className="text-gray-300">Welcome back, {user?.firstName || 'User'}!</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="glass-panel p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Navigation</h3>
              <nav className="space-y-2">
                {user?.role === 'renter' && (
                  <Link
                    to="/dashboard/renter"
                    className="glass-button flex items-center space-x-3 px-4 py-3 text-white/80 hover:text-white transition-all duration-300"
                  >
                    <Icon name="User" size="sm" />
                    <span>My Bookings</span>
                  </Link>
                )}
                {user?.role === 'host' && (
                  <Link
                    to="/dashboard/host"
                    className="glass-button flex items-center space-x-3 px-4 py-3 text-white/80 hover:text-white transition-all duration-300"
                  >
                    <Icon name="Car" size="sm" />
                    <span>My Listings</span>
                  </Link>
                )}
                {user?.role === 'admin' && (
                  <>
                    <Link
                      to="/dashboard/admin"
                      className="glass-button flex items-center space-x-3 px-4 py-3 text-white/80 hover:text-white transition-all duration-300"
                    >
                      <Icon name="User" size="sm" />
                      <span>Admin Panel</span>
                    </Link>
                    <Link
                      to="/dashboard/renter"
                      className="glass-button flex items-center space-x-3 px-4 py-3 text-white/80 hover:text-white transition-all duration-300"
                    >
                      <Icon name="User" size="sm" />
                      <span>Renter View</span>
                    </Link>
                    <Link
                      to="/dashboard/host"
                      className="glass-button flex items-center space-x-3 px-4 py-3 text-white/80 hover:text-white transition-all duration-300"
                    >
                      <Icon name="Car" size="sm" />
                      <span>Host View</span>
                    </Link>
                  </>
                )}
              </nav>
            </div>
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
    </div>
  );
};

export default Dashboard;