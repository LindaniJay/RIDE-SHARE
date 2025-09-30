import React, { useState, useEffect } from 'react';
import { AdminService, AdminUser } from '../../services/adminService';
import GlassCard from '../GlassCard';
import Icon from '../Icon';
import StatusBadge from '../StatusBadge';

interface UserManagementPanelProps {
  onRefresh: () => void;
}

const UserManagementPanel: React.FC<UserManagementPanelProps> = ({ onRefresh }) => {
  const [users, setUsers] = useState<AdminUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    status: 'all',
    role: 'all',
    search: ''
  });
  const [selectedUsers, setSelectedUsers] = useState<number[]>([]);
  const [showBulkActions, setShowBulkActions] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, [filters]);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await AdminService.getUsers(1, 10, 
        filters.status !== 'all' ? filters.status : undefined,
        filters.role !== 'all' ? filters.role : undefined
      );
      setUsers(response.users || []);
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleApproveUser = async (userId: number, status: 'approved' | 'rejected', reason?: string) => {
    try {
      await AdminService.approveUser(userId, status, reason);
      await fetchUsers();
      onRefresh();
    } catch (error) {
      console.error('Error updating user status:', error);
    }
  };

  const handleBulkAction = async (action: 'approve' | 'reject') => {
    try {
      const promises = selectedUsers.map(userId => 
        AdminService.approveUser(userId, action === 'approve' ? 'approved' : 'rejected')
      );
      await Promise.all(promises);
      setSelectedUsers([]);
      setShowBulkActions(false);
      await fetchUsers();
      onRefresh();
    } catch (error) {
      console.error('Error performing bulk action:', error);
    }
  };

  const handleUserSelect = (userId: number) => {
    setSelectedUsers(prev => 
      prev.includes(userId) 
        ? prev.filter(id => id !== userId)
        : [...prev, userId]
    );
  };

  const filteredUsers = users.filter(user => {
    if (filters.search) {
      const searchTerm = filters.search.toLowerCase();
      return (
        user.firstName.toLowerCase().includes(searchTerm) ||
        user.lastName.toLowerCase().includes(searchTerm) ||
        user.email.toLowerCase().includes(searchTerm)
      );
    }
    return true;
  });

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">User Management</h2>
          <p className="text-gray-300">Manage user registrations and approvals</p>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setShowBulkActions(!showBulkActions)}
            className="flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 text-white hover:bg-white/20 transition-all"
          >
            <Icon name="check-square" className="h-4 w-4" />
            <span>Bulk Actions</span>
          </button>
        </div>
      </div>

      {/* Filters */}
      <GlassCard className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Search</label>
            <input
              type="text"
              placeholder="Search users..."
              value={filters.search}
              onChange={(e) => setFilters(prev => ({ ...prev, search: e.target.value }))}
              className="glass-input"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Status</label>
            <select
              value={filters.status}
              onChange={(e) => setFilters(prev => ({ ...prev, status: e.target.value }))}
              className="glass-select"
            >
              <option value="all">All Status</option>
              <option value="pending">Pending</option>
              <option value="approved">Approved</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Role</label>
            <select
              value={filters.role}
              onChange={(e) => setFilters(prev => ({ ...prev, role: e.target.value }))}
              className="glass-select"
            >
              <option value="all">All Roles</option>
              <option value="renter">Renter</option>
              <option value="host">Host</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <div className="flex items-end">
            <button
              onClick={fetchUsers}
              className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white transition-all"
            >
              <Icon name="search" className="h-4 w-4" />
              <span>Filter</span>
            </button>
          </div>
        </div>
      </GlassCard>

      {/* Bulk Actions */}
      {showBulkActions && selectedUsers.length > 0 && (
        <GlassCard className="p-4 bg-yellow-500/10 border-yellow-500/20">
          <div className="flex items-center justify-between">
            <span className="text-yellow-400">
              {selectedUsers.length} user(s) selected
            </span>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => handleBulkAction('approve')}
                className="flex items-center space-x-2 px-3 py-1 bg-green-600 hover:bg-green-700 rounded text-white text-sm"
              >
                <Icon name="check" className="h-4 w-4" />
                <span>Approve All</span>
              </button>
              <button
                onClick={() => handleBulkAction('reject')}
                className="flex items-center space-x-2 px-3 py-1 bg-red-600 hover:bg-red-700 rounded text-white text-sm"
              >
                <Icon name="x" className="h-4 w-4" />
                <span>Reject All</span>
              </button>
              <button
                onClick={() => {
                  setSelectedUsers([]);
                  setShowBulkActions(false);
                }}
                className="px-3 py-1 bg-gray-600 hover:bg-gray-700 rounded text-white text-sm"
              >
                Cancel
              </button>
            </div>
          </div>
        </GlassCard>
      )}

      {/* Users Table */}
      <GlassCard className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-white/5">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  <input
                    type="checkbox"
                    checked={selectedUsers.length === filteredUsers.length && filteredUsers.length > 0}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedUsers(filteredUsers.map(user => user.id));
                      } else {
                        setSelectedUsers([]);
                      }
                    }}
                    className="rounded border-gray-300"
                  />
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  User
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Role
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Documents
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Joined
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-white/5">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <input
                      type="checkbox"
                      checked={selectedUsers.includes(user.id)}
                      onChange={() => handleUserSelect(user.id)}
                      className="rounded border-gray-300"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                          <span className="text-white font-medium">
                            {user.firstName[0]}{user.lastName[0]}
                          </span>
                        </div>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-white">
                          {user.firstName} {user.lastName}
                        </div>
                        <div className="text-sm text-gray-400">{user.email}</div>
                        {user.phoneNumber && (
                          <div className="text-sm text-gray-400">{user.phoneNumber}</div>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      user.role === 'admin' ? 'bg-purple-100 text-purple-800' :
                      user.role === 'host' ? 'bg-green-100 text-green-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <StatusBadge status={user.approvalStatus} />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <StatusBadge 
                      status={user.documentStatus === 'approved' ? 'approved' : 
                              user.documentStatus === 'rejected' ? 'rejected' : 'pending'} 
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                    {new Date(user.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex items-center space-x-2">
                      {user.approvalStatus === 'pending' && (
                        <>
                          <button
                            onClick={() => handleApproveUser(user.id, 'approved')}
                            className="text-green-400 hover:text-green-300"
                          >
                            <Icon name="check" className="h-4 w-4" />
                          </button>
                          <button
                            onClick={() => {
                              const reason = prompt('Rejection reason (optional):');
                              handleApproveUser(user.id, 'rejected', reason || undefined);
                            }}
                            className="text-red-400 hover:text-red-300"
                          >
                            <Icon name="x" className="h-4 w-4" />
                          </button>
                        </>
                      )}
                      <button className="text-blue-400 hover:text-blue-300">
                        <Icon name="eye" className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </GlassCard>

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-400">
          Showing {filteredUsers.length} of {users.length} users
        </div>
        <div className="flex items-center space-x-2">
          <button className="px-3 py-1 bg-white/10 rounded text-white hover:bg-white/20">
            Previous
          </button>
          <span className="px-3 py-1 bg-white/20 rounded text-white">1</span>
          <button className="px-3 py-1 bg-white/10 rounded text-white hover:bg-white/20">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserManagementPanel;
