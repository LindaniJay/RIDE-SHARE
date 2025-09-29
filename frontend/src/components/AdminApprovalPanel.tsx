import React, { useState } from 'react';
import Icon from './Icon';
import { ProfileData } from '../types';

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
  approvalStatus?: 'pending' | 'approved' | 'rejected';
  createdAt?: string;
  documents?: {
    idDocument?: string;
    driverLicense?: string;
    proofOfAddress?: string;
  };
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
  approvalStatus?: 'pending' | 'approved' | 'rejected';
  createdAt?: string;
  documents?: {
    registration?: string;
    roadworthy?: string;
    insurance?: string;
  };
}

interface AdminApprovalPanelProps {
  users: AdminUser[];
  vehicles: AdminVehicle[];
  profileCompletions: ProfileData[];
  onApproveUser: (userId: string, notes?: string) => void;
  onRejectUser: (userId: string, reason: string, notes?: string) => void;
  onApproveVehicle: (vehicleId: string, notes?: string) => void;
  onRejectVehicle: (vehicleId: string, reason: string, notes?: string) => void;
  onApproveProfile: (profileId: string, notes?: string) => void;
  onRejectProfile: (profileId: string, reason: string, notes?: string) => void;
}

export const AdminApprovalPanel: React.FC<AdminApprovalPanelProps> = ({
  users,
  vehicles,
  profileCompletions,
  onApproveUser,
  onRejectUser,
  onApproveVehicle,
  onRejectVehicle,
  onApproveProfile,
  onRejectProfile
}) => {
  const [activeTab, setActiveTab] = useState<'users' | 'vehicles' | 'profiles'>('profiles');
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [rejectionReason, setRejectionReason] = useState('');
  const [adminNotes, setAdminNotes] = useState('');

  const pendingUsers = users.filter(user => user.approvalStatus === 'pending');
  const pendingVehicles = vehicles.filter(vehicle => vehicle.approvalStatus === 'pending');
  const pendingProfiles = profileCompletions.filter(profile => profile.status === 'pending');

  const handleApprove = (type: 'user' | 'vehicle' | 'profile', id: string) => {
    if (type === 'user') {
      onApproveUser(id, adminNotes);
    } else if (type === 'vehicle') {
      onApproveVehicle(id, adminNotes);
    } else if (type === 'profile') {
      onApproveProfile(id, adminNotes);
    }
    setSelectedItem(null);
    setAdminNotes('');
  };

  const handleReject = (type: 'user' | 'vehicle' | 'profile', id: string) => {
    if (!rejectionReason.trim()) return;
    
    if (type === 'user') {
      onRejectUser(id, rejectionReason, adminNotes);
    } else if (type === 'vehicle') {
      onRejectVehicle(id, rejectionReason, adminNotes);
    } else if (type === 'profile') {
      onRejectProfile(id, rejectionReason, adminNotes);
    }
    setSelectedItem(null);
    setRejectionReason('');
    setAdminNotes('');
  };

  return (
    <div className="space-y-6">
      {/* Tab Navigation */}
      <div className="flex space-x-1 bg-white/10 backdrop-blur-md rounded-lg p-1">
        <button
          onClick={() => setActiveTab('profiles')}
          className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
            activeTab === 'profiles'
              ? 'bg-white/20 text-white'
              : 'text-white/70 hover:text-white'
          }`}
        >
          <Icon name="User" size="sm" className="mr-2" />
          Profiles ({pendingProfiles.length})
        </button>
        <button
          onClick={() => setActiveTab('users')}
          className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
            activeTab === 'users'
              ? 'bg-white/20 text-white'
              : 'text-white/70 hover:text-white'
          }`}
        >
          <Icon name="Users" size="sm" className="mr-2" />
          User Documents ({pendingUsers.length})
        </button>
        <button
          onClick={() => setActiveTab('vehicles')}
          className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
            activeTab === 'vehicles'
              ? 'bg-white/20 text-white'
              : 'text-white/70 hover:text-white'
          }`}
        >
          <Icon name="Car" size="sm" className="mr-2" />
          Vehicle Listings ({pendingVehicles.length})
        </button>
      </div>

      {/* Content */}
      <div className="space-y-4">
        {activeTab === 'users' ? (
          <div className="space-y-4">
            {pendingUsers.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-white/70">No pending user approvals</p>
              </div>
            ) : (
              pendingUsers.map(user => (
                <div key={user.id} className="bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/10">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        {user.firstName} {user.lastName}
                      </h3>
                      <p className="text-sm text-white/70">{user.email}</p>
                      <p className="text-xs text-white/60">
                        Registered: {user.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'N/A'}
                      </p>
                    </div>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => setSelectedItem(user.id)}
                        className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-lg text-sm hover:bg-blue-500/30 transition-colors"
                      >
                        Review
                      </button>
                    </div>
                  </div>

                  {selectedItem === user.id && (
                    <div className="mt-4 p-4 bg-white/5 rounded-lg border border-white/10">
                      <h4 className="text-sm font-medium text-white mb-3">Documents to Review:</h4>
                      <div className="space-y-2 mb-4">
                        {user.documents?.idDocument && (
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-white/80">ID Document</span>
                            <a href={user.documents.idDocument} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 text-sm">
                              View Document
                            </a>
                          </div>
                        )}
                        {user.documents?.driverLicense && (
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-white/80">Driver's License</span>
                            <a href={user.documents.driverLicense} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 text-sm">
                              View Document
                            </a>
                          </div>
                        )}
                        {user.documents?.proofOfAddress && (
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-white/80">Proof of Address</span>
                            <a href={user.documents.proofOfAddress} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 text-sm">
                              View Document
                            </a>
                          </div>
                        )}
                      </div>

                      <div className="space-y-3">
                        <div>
                          <label className="block text-sm font-medium text-white/90 mb-1">
                            Admin Notes (Optional)
                          </label>
                          <textarea
                            value={adminNotes}
                            onChange={(e) => setAdminNotes(e.target.value)}
                            className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/20"
                            placeholder="Add notes for the user..."
                            rows={2}
                          />
                        </div>

                        <div className="flex space-x-3">
                          <button
                            onClick={() => handleApprove('user', user.id)}
                            className="flex-1 bg-green-500/20 hover:bg-green-500/30 text-green-300 px-4 py-2 rounded-lg transition-all duration-300 border border-green-500/30"
                          >
                            <Icon name="CheckCircle" size="sm" className="mr-1" />
                            Approve
                          </button>
                          <button
                            onClick={() => {
                              const reason = prompt('Rejection reason:');
                              if (reason) {
                                setRejectionReason(reason);
                                handleReject('user', user.id);
                              }
                            }}
                            className="flex-1 bg-red-500/20 hover:bg-red-500/30 text-red-300 px-4 py-2 rounded-lg transition-all duration-300 border border-red-500/30"
                          >
                            <Icon name="XCircle" size="sm" className="mr-1" />
                            Reject
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        ) : activeTab === 'profiles' ? (
          <div className="space-y-4">
            {pendingProfiles.length === 0 ? (
              <div className="text-center py-8">
                <Icon name="User" size="lg" className="text-white/50 mb-4" />
                <p className="text-white/70">No pending profile completions</p>
              </div>
            ) : (
              pendingProfiles.map(profile => (
                <div key={profile.id} className="bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/10">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        Profile Completion - {profile.userId}
                      </h3>
                      <p className="text-sm text-white/70">
                        Submitted: {new Date(profile.submittedAt).toLocaleDateString()}
                      </p>
                      <p className="text-xs text-white/60">
                        Role: {profile.businessName ? 'Host' : 'Renter'}
                      </p>
                    </div>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => setSelectedItem(profile.id || '')}
                        className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-lg text-sm hover:bg-blue-500/30 transition-colors"
                      >
                        Review
                      </button>
                    </div>
                  </div>

                  {selectedItem === profile.id && (
                    <div className="mt-4 p-4 bg-white/5 rounded-lg border border-white/10">
                      <h4 className="text-sm font-medium text-white mb-3">Profile Information:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <span className="text-xs text-white/60">Date of Birth:</span>
                          <p className="text-sm text-white/90">{profile.dateOfBirth}</p>
                        </div>
                        <div>
                          <span className="text-xs text-white/60">Address:</span>
                          <p className="text-sm text-white/90">{profile.address}, {profile.city}</p>
                        </div>
                        <div>
                          <span className="text-xs text-white/60">Province:</span>
                          <p className="text-sm text-white/90">{profile.province}</p>
                        </div>
                        <div>
                          <span className="text-xs text-white/60">Emergency Contact:</span>
                          <p className="text-sm text-white/90">{profile.emergencyContact} - {profile.emergencyPhone}</p>
                        </div>
                        {profile.businessName && (
                          <>
                            <div>
                              <span className="text-xs text-white/60">Business Name:</span>
                              <p className="text-sm text-white/90">{profile.businessName}</p>
                            </div>
                            <div>
                              <span className="text-xs text-white/60">Business Registration:</span>
                              <p className="text-sm text-white/90">{profile.businessRegistration}</p>
                            </div>
                            <div>
                              <span className="text-xs text-white/60">Bank Account:</span>
                              <p className="text-sm text-white/90">{profile.bankAccount}</p>
                            </div>
                            <div>
                              <span className="text-xs text-white/60">Tax Number:</span>
                              <p className="text-sm text-white/90">{profile.taxNumber}</p>
                            </div>
                          </>
                        )}
                      </div>

                      <h4 className="text-sm font-medium text-white mb-3">Documents to Review:</h4>
                      <div className="space-y-2 mb-4">
                        {profile.idDocument && (
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-white/80">ID Document</span>
                            <span className="text-xs text-green-400">Uploaded</span>
                          </div>
                        )}
                        {profile.driverLicense && (
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-white/80">Driver's License</span>
                            <span className="text-xs text-green-400">Uploaded</span>
                          </div>
                        )}
                        {profile.proofOfAddress && (
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-white/80">Proof of Address</span>
                            <span className="text-xs text-green-400">Uploaded</span>
                          </div>
                        )}
                        {profile.vehicleRegistration && (
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-white/80">Vehicle Registration</span>
                            <span className="text-xs text-green-400">Uploaded</span>
                          </div>
                        )}
                        {profile.roadworthyCertificate && (
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-white/80">Roadworthy Certificate</span>
                            <span className="text-xs text-green-400">Uploaded</span>
                          </div>
                        )}
                        {profile.insuranceCertificate && (
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-white/80">Insurance Certificate</span>
                            <span className="text-xs text-green-400">Uploaded</span>
                          </div>
                        )}
                      </div>

                      <div className="mt-4 space-y-3">
                        <div>
                          <label className="block text-sm font-medium text-white/90 mb-2">
                            Admin Notes (Optional)
                          </label>
                          <textarea
                            value={adminNotes}
                            onChange={(e) => setAdminNotes(e.target.value)}
                            className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/20"
                            rows={3}
                            placeholder="Add any notes for the user..."
                          />
                        </div>

                        <div className="flex space-x-3">
                          <button
                            onClick={() => handleApprove('profile', profile.id || '')}
                            className="flex-1 px-4 py-2 bg-green-500/20 text-green-300 rounded-lg hover:bg-green-500/30 transition-colors"
                          >
                            Approve Profile
                          </button>
                          <button
                            onClick={() => handleReject('profile', profile.id || '')}
                            className="flex-1 px-4 py-2 bg-red-500/20 text-red-300 rounded-lg hover:bg-red-500/30 transition-colors"
                          >
                            Reject Profile
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        ) : (
          <div className="space-y-4">
            {pendingVehicles.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-white/70">No pending vehicle approvals</p>
              </div>
            ) : (
              pendingVehicles.map(vehicle => (
                <div key={vehicle.id} className="bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/10">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        {vehicle.year} {vehicle.make} {vehicle.model}
                      </h3>
                      <p className="text-sm text-white/70">R{vehicle.pricePerDay}/day • {vehicle.location}</p>
                      <p className="text-xs text-white/60">
                        Listed: {vehicle.createdAt ? new Date(vehicle.createdAt).toLocaleDateString() : 'N/A'}
                      </p>
                    </div>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => setSelectedItem(vehicle.id)}
                        className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-lg text-sm hover:bg-blue-500/30 transition-colors"
                      >
                        Review
                      </button>
                    </div>
                  </div>

                  {selectedItem === vehicle.id && (
                    <div className="mt-4 p-4 bg-white/5 rounded-lg border border-white/10">
                      <h4 className="text-sm font-medium text-white mb-3">Vehicle Documents to Review:</h4>
                      <div className="space-y-2 mb-4">
                        {vehicle.documents?.registration && (
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-white/80">Registration</span>
                            <a href={vehicle.documents.registration} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 text-sm">
                              View Document
                            </a>
                          </div>
                        )}
                        {vehicle.documents?.roadworthy && (
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-white/80">Roadworthy Certificate</span>
                            <a href={vehicle.documents.roadworthy} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 text-sm">
                              View Document
                            </a>
                          </div>
                        )}
                        {vehicle.documents?.insurance && (
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-white/80">Insurance</span>
                            <a href={vehicle.documents.insurance} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 text-sm">
                              View Document
                            </a>
                          </div>
                        )}
                      </div>

                      <div className="space-y-3">
                        <div>
                          <label className="block text-sm font-medium text-white/90 mb-1">
                            Admin Notes (Optional)
                          </label>
                          <textarea
                            value={adminNotes}
                            onChange={(e) => setAdminNotes(e.target.value)}
                            className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/20"
                            placeholder="Add notes for the host..."
                            rows={2}
                          />
                        </div>

                        <div className="flex space-x-3">
                          <button
                            onClick={() => handleApprove('vehicle', vehicle.id)}
                            className="flex-1 bg-green-500/20 hover:bg-green-500/30 text-green-300 px-4 py-2 rounded-lg transition-all duration-300 border border-green-500/30"
                          >
                            <Icon name="CheckCircle" size="sm" className="mr-1" />
                            Approve
                          </button>
                          <button
                            onClick={() => {
                              const reason = prompt('Rejection reason:');
                              if (reason) {
                                setRejectionReason(reason);
                                handleReject('vehicle', vehicle.id);
                              }
                            }}
                            className="flex-1 bg-red-500/20 hover:bg-red-500/30 text-red-300 px-4 py-2 rounded-lg transition-all duration-300 border border-red-500/30"
                          >
                            <Icon name="XCircle" size="sm" className="mr-1" />
                            Reject
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminApprovalPanel;
