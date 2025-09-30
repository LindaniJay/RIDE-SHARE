import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import Icon from '../Icon';
import StatusBadge from '../StatusBadge';

interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  role: 'renter' | 'host' | 'admin';
  phoneNumber?: string;
  approvalStatus: 'pending' | 'approved' | 'rejected';
  rejectionReason?: string;
  documentStatus: 'pending' | 'verified' | 'rejected';
  createdAt: string;
  documents?: any[];
}

const UserApprovalPanel: React.FC = () => {
  const { user } = useAuth();
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'all' | 'pending' | 'approved' | 'rejected'>('pending');
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [showApprovalModal, setShowApprovalModal] = useState(false);
  const [approvalAction, setApprovalAction] = useState<'approve' | 'reject'>('approve');
  const [rejectionReason, setRejectionReason] = useState('');

  useEffect(() => {
    fetchUsers();
  }, [filter]);

  const fetchUsers = async () => {
    try {
      const response = await fetch(`/api/admin/users?status=${filter}&page=1&limit=50`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      });
      
      if (response.ok) {
        const data = await response.json();
        setUsers(data.data.users || []);
      }
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleApproval = async (userId: number, action: 'approve' | 'reject', reason?: string) => {
    try {
      const response = await fetch(`/api/admin/users/${userId}/approve`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify({
          status: action === 'approve' ? 'approved' : 'rejected',
          reason: reason || undefined
        })
      });

      if (response.ok) {
        // Update local state
        setUsers(prev => prev.map(u => 
          u.id === userId 
            ? { ...u, approvalStatus: action === 'approve' ? 'approved' : 'rejected', rejectionReason: reason }
            : u
        ));
        
        setShowApprovalModal(false);
        setSelectedUser(null);
        setRejectionReason('');
        
        alert(`User ${action === 'approve' ? 'approved' : 'rejected'} successfully`);
      } else {
        alert('Failed to update user status');
      }
    } catch (error) {
      console.error('Error updating user:', error);
      alert('Error updating user status');
    }
  };

  const openApprovalModal = (user: User, action: 'approve' | 'reject') => {
    setSelectedUser(user);
    setApprovalAction(action);
    setShowApprovalModal(true);
  };

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
        <h2 className="text-2xl font-bold text-white">User Approvals</h2>
        <div className="flex space-x-2">
          {['all', 'pending', 'approved', 'rejected'].map((filterType) => (
            <button
              key={filterType}
              onClick={() => setFilter(filterType as any)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                filter === filterType
                  ? 'bg-white/20 text-white'
                  : 'bg-white/10 text-white/70 hover:bg-white/20'
              }`}
            >
              {filterType.charAt(0).toUpperCase() + filterType.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Users List */}
      <div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
        <div className="p-6">
          <div className="space-y-4">
            {users.map((user) => (
              <div key={user.id} className="p-4 bg-white/5 rounded-lg border border-white/10">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold text-sm">
                          {user.firstName[0]}{user.lastName[0]}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-white font-semibold">
                          {user.firstName} {user.lastName}
                        </h3>
                        <p className="text-white/70 text-sm">{user.email}</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <p className="text-white/70">Role</p>
                        <p className="text-white capitalize">{user.role}</p>
                      </div>
                      <div>
                        <p className="text-white/70">Phone</p>
                        <p className="text-white">{user.phoneNumber || 'Not provided'}</p>
                      </div>
                      <div>
                        <p className="text-white/70">Joined</p>
                        <p className="text-white">{new Date(user.createdAt).toLocaleDateString()}</p>
                      </div>
                    </div>

                    {user.documents && user.documents.length > 0 && (
                      <div className="mt-3">
                        <p className="text-white/70 text-sm mb-2">Documents:</p>
                        <div className="flex space-x-2">
                          {user.documents.map((doc, index) => (
                            <span key={index} className="px-2 py-1 bg-blue-500/20 text-blue-200 rounded text-xs">
                              {doc.type}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {user.rejectionReason && (
                      <div className="mt-3 p-3 bg-red-500/10 border border-red-400/30 rounded-lg">
                        <p className="text-red-200 text-sm">
                          <strong>Rejection Reason:</strong> {user.rejectionReason}
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col space-y-2 ml-4">
                    <div className="flex space-x-2">
                      <StatusBadge status={user.approvalStatus} />
                      <StatusBadge status={user.documentStatus} />
                    </div>
                    
                    {user.approvalStatus === 'pending' && (
                      <div className="flex space-x-2">
                        <button
                          onClick={() => openApprovalModal(user, 'approve')}
                          className="px-3 py-1 bg-green-500/20 text-green-200 rounded-lg text-sm hover:bg-green-500/30 transition-colors"
                        >
                          Approve
                        </button>
                        <button
                          onClick={() => openApprovalModal(user, 'reject')}
                          className="px-3 py-1 bg-red-500/20 text-red-200 rounded-lg text-sm hover:bg-red-500/30 transition-colors"
                        >
                          Reject
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {users.length === 0 && (
              <div className="text-center py-8">
                <Icon name="Users" size="lg" className="text-white/50 mx-auto mb-4" />
                <p className="text-white/70">No users found</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Approval Modal */}
      {showApprovalModal && selectedUser && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 max-w-md w-full mx-4">
            <h3 className="text-lg font-semibold text-white mb-4">
              {approvalAction === 'approve' ? 'Approve User' : 'Reject User'}
            </h3>
            
            <div className="mb-4">
              <p className="text-white/70 mb-2">
                {approvalAction === 'approve' 
                  ? `Are you sure you want to approve ${selectedUser.firstName} ${selectedUser.lastName}?`
                  : `Are you sure you want to reject ${selectedUser.firstName} ${selectedUser.lastName}?`
                }
              </p>
              
              {approvalAction === 'reject' && (
                <div>
                  <label className="block text-white/70 text-sm font-medium mb-2">
                    Rejection Reason (Optional)
                  </label>
                  <textarea
                    value={rejectionReason}
                    onChange={(e) => setRejectionReason(e.target.value)}
                    placeholder="Enter reason for rejection..."
                    className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows={3}
                  />
                </div>
              )}
            </div>

            <div className="flex space-x-3">
              <button
                onClick={() => {
                  setShowApprovalModal(false);
                  setSelectedUser(null);
                  setRejectionReason('');
                }}
                className="flex-1 px-4 py-2 bg-white/10 text-white/70 rounded-lg hover:bg-white/20 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => handleApproval(selectedUser.id, approvalAction, rejectionReason)}
                className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
                  approvalAction === 'approve'
                    ? 'bg-green-500 text-white hover:bg-green-600'
                    : 'bg-red-500 text-white hover:bg-red-600'
                }`}
              >
                {approvalAction === 'approve' ? 'Approve' : 'Reject'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserApprovalPanel;
