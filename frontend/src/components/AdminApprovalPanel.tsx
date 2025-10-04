import React, { useState, useEffect } from 'react';
import { AdminService, AdminUser, AdminVehicle } from '../services/adminService';
import StatusBadge from './StatusBadge';
import { useToast } from './ToastProvider';

interface AdminApprovalPanelProps {
  type: 'users' | 'vehicles';
  onRefresh?: () => void;
}

const AdminApprovalPanel: React.FC<AdminApprovalPanelProps> = ({ type, onRefresh }) => {
  const [items, setItems] = useState<AdminUser[] | AdminVehicle[]>([]);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState<number | null>(null);
  const { showToast } = useToast();

  useEffect(() => {
    fetchItems();
  }, [type]);

  const fetchItems = async () => {
    setLoading(true);
    try {
      let response;
      if (type === 'users') {
        response = await AdminService.getUsers(1, 10, 'pending');
      } else {
        response = await AdminService.getVehicles(1, 10, 'pending');
      }

      if ((response as any).success) {
        setItems((response as any).data[type] || []);
      } else {
        showToast('Failed to fetch items', 'error');
      }
    } catch (error: any) {
      showToast('Error fetching items', 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleApprove = async (id: number) => {
    setActionLoading(id);
    try {
      let response;
      if (type === 'users') {
        response = await AdminService.approveUser(id, 'approved');
      } else {
        response = await AdminService.approveVehicle(id, 'approved');
      }

      if ((response as any).success) {
        showToast(`${type === 'users' ? 'User' : 'Vehicle'} has been approved`, 'success');
        fetchItems();
        onRefresh?.();
      } else {
        showToast('Approval failed', 'error');
      }
    } catch (error: any) {
      showToast('Approval failed', 'error');
    } finally {
      setActionLoading(null);
    }
  };

  const handleReject = async (id: number, reason: string) => {
    setActionLoading(id);
    try {
      let response;
      if (type === 'users') {
        response = await AdminService.approveUser(id, 'rejected', reason);
      } else {
        response = await AdminService.approveVehicle(id, 'declined', reason);
      }

      if ((response as any).success) {
        showToast(`${type === 'users' ? 'User' : 'Vehicle'} has been rejected`, 'success');
        fetchItems();
        onRefresh?.();
      } else {
        showToast('Rejection failed', 'error');
      }
    } catch (error: any) {
      showToast('Rejection failed', 'error');
    } finally {
      setActionLoading(null);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-white">
        Pending {type === 'users' ? 'User' : 'Vehicle'} Approvals ({items.length})
      </h3>
      
      {items.length === 0 ? (
        <div className="text-center py-8 text-gray-400">
          No pending {type} for approval
        </div>
      ) : (
        <div className="space-y-3">
          {items.map((item) => (
            <div key={item.id} className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  {type === 'users' ? (
                    <div>
                      <h4 className="font-medium text-white">
                        {(item as AdminUser).firstName} {(item as AdminUser).lastName}
                      </h4>
                      <p className="text-sm text-gray-300">{(item as AdminUser).email}</p>
                      <p className="text-sm text-gray-400 capitalize">{(item as AdminUser).role}</p>
                      <StatusBadge status={(item as AdminUser).approvalStatus} />
                    </div>
                  ) : (
                    <div>
                      <h4 className="font-medium text-white">
                        {(item as AdminVehicle).title}
                      </h4>
                      <p className="text-sm text-gray-300">
                        {(item as AdminVehicle).make} {(item as AdminVehicle).model} ({(item as AdminVehicle).year})
                      </p>
                      <p className="text-sm text-gray-400">R{(item as AdminVehicle).pricePerDay}/day</p>
                      <StatusBadge status={(item as AdminVehicle).status} />
                    </div>
                  )}
                </div>
                
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleApprove(item.id)}
                    disabled={actionLoading === item.id}
                    className="px-3 py-1 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:opacity-50 text-sm"
                  >
                    {actionLoading === item.id ? '...' : 'Approve'}
                  </button>
                  <button
                    onClick={() => {
                      const reason = prompt('Rejection reason (optional):');
                      if (reason !== null) {
                        handleReject(item.id, reason);
                      }
                    }}
                    disabled={actionLoading === item.id}
                    className="px-3 py-1 bg-red-600 text-white rounded-md hover:bg-red-700 disabled:opacity-50 text-sm"
                  >
                    {actionLoading === item.id ? '...' : 'Reject'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminApprovalPanel;