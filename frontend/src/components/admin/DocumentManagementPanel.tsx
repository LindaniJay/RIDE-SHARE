import React, { useState, useEffect } from 'react';
import GlassCard from '../GlassCard';
import Icon from '../Icon';
import StatusBadge from '../StatusBadge';

interface DocumentManagementPanelProps {
  onRefresh: () => void;
}

interface Document {
  id: string;
  userId: string;
  user: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
  };
  documentType: 'license' | 'id' | 'insurance' | 'registration' | 'other';
  fileName: string;
  fileUrl: string;
  status: 'pending' | 'approved' | 'rejected';
  rejectionReason?: string;
  uploadedAt: string;
  reviewedAt?: string;
  reviewedBy?: string;
  expiryDate?: string;
}

interface DocumentQueue {
  pending: number;
  approved: number;
  rejected: number;
  expiring: number;
}

const DocumentManagementPanel: React.FC<DocumentManagementPanelProps> = ({ onRefresh }) => {
  const [documents, setDocuments] = useState<Document[]>([]);
  const [queue, setQueue] = useState<DocumentQueue>({
    pending: 0,
    approved: 0,
    rejected: 0,
    expiring: 0
  });
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    status: 'all',
    documentType: 'all',
    search: ''
  });
  const [selectedDocuments, setSelectedDocuments] = useState<number[]>([]);
  const [showBulkActions, setShowBulkActions] = useState(false);

  useEffect(() => {
    fetchDocuments();
  }, [filters]);

  const fetchDocuments = async () => {
    try {
      setLoading(true);
      // No mock data - use real API calls
      try {
        const response = await fetch('/api/admin/documents', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
            'Content-Type': 'application/json'
          }
        });

        if (response.ok) {
          const result = await response.json();
          if (result.success) {
            setDocuments(result.data.documents || []);
            setQueue({
              pending: result.data.documents?.filter((d: any) => d.status === 'pending').length || 0,
              approved: result.data.documents?.filter((d: any) => d.status === 'approved').length || 0,
              rejected: result.data.documents?.filter((d: any) => d.status === 'rejected').length || 0,
              expiring: 0 // We'll need to calculate this from the backend
            });
          } else {
            throw new Error(result.error || 'Failed to fetch documents');
          }
        } else {
          throw new Error('Failed to fetch documents');
        }
      } catch (apiError) {
        console.error('API error:', apiError);
        // Show empty state instead of mock data
        setDocuments([]);
        setQueue({
          pending: 0,
          approved: 0,
          rejected: 0,
          expiring: 0
        });
      }
    } catch (error) {
      console.error('Error fetching documents:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDocumentAction = async (documentId: number, action: 'approve' | 'reject', reason?: string) => {
    try {
      setLoading(true);
      const response = await fetch(`/api/admin/documents/${documentId}/status`, {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ status: action, reason })
      });

      if (response.ok) {
        await fetchDocuments();
        onRefresh();
      } else {
        throw new Error('Failed to update document status');
      }
    } catch (error) {
      console.error('Error updating document:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleBulkAction = async (action: 'approve' | 'reject') => {
    try {
      setLoading(true);
      const promises = selectedDocuments.map(docId => 
        handleDocumentAction(docId, action)
      );
      await Promise.all(promises);
      setSelectedDocuments([]);
      setShowBulkActions(false);
    } catch (error) {
      console.error('Error performing bulk action:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDocumentSelect = (documentId: number) => {
    setSelectedDocuments(prev => 
      prev.includes(documentId) 
        ? prev.filter(id => id !== documentId)
        : [...prev, documentId]
    );
  };

  const filteredDocuments = documents.filter(doc => {
    if (filters.search) {
      const searchTerm = filters.search.toLowerCase();
      return (
        doc.user.firstName.toLowerCase().includes(searchTerm) ||
        doc.user.lastName.toLowerCase().includes(searchTerm) ||
        doc.user.email.toLowerCase().includes(searchTerm) ||
        doc.fileName.toLowerCase().includes(searchTerm)
      );
    }
    if (filters.status !== 'all') {
      return doc.status === filters.status;
    }
    if (filters.documentType !== 'all') {
      return doc.documentType === filters.documentType;
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
          <h2 className="text-2xl font-bold text-white">Document Management</h2>
          <p className="text-gray-300">Review and approve user documents</p>
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

      {/* Queue Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <GlassCard className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-300 text-sm">Pending Review</p>
              <p className="text-2xl font-bold text-yellow-400">{queue.pending}</p>
            </div>
            <Icon name="clock" className="h-8 w-8 text-yellow-400" />
          </div>
        </GlassCard>

        <GlassCard className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-300 text-sm">Approved</p>
              <p className="text-2xl font-bold text-green-400">{queue.approved}</p>
            </div>
            <Icon name="check-circle" className="h-8 w-8 text-green-400" />
          </div>
        </GlassCard>

        <GlassCard className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-300 text-sm">Rejected</p>
              <p className="text-2xl font-bold text-red-400">{queue.rejected}</p>
            </div>
            <Icon name="x-circle" className="h-8 w-8 text-red-400" />
          </div>
        </GlassCard>

        <GlassCard className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-300 text-sm">Expiring Soon</p>
              <p className="text-2xl font-bold text-orange-400">{queue.expiring}</p>
            </div>
            <Icon name="alert-triangle" className="h-8 w-8 text-orange-400" />
          </div>
        </GlassCard>
      </div>

      {/* Filters */}
      <GlassCard className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Search</label>
            <input
              type="text"
              placeholder="Search documents..."
              value={filters.search}
              onChange={(e) => setFilters(prev => ({ ...prev, search: e.target.value }))}
              className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Status</label>
            <select
              value={filters.status}
              onChange={(e) => setFilters(prev => ({ ...prev, status: e.target.value }))}
              className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Status</option>
              <option value="pending">Pending</option>
              <option value="approved">Approved</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Document Type</label>
            <select
              value={filters.documentType}
              onChange={(e) => setFilters(prev => ({ ...prev, documentType: e.target.value }))}
              className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Types</option>
              <option value="license">Driver's License</option>
              <option value="id">ID Document</option>
              <option value="insurance">Insurance</option>
              <option value="registration">Registration</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="flex items-end">
            <button
              onClick={fetchDocuments}
              className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white transition-all"
            >
              <Icon name="search" className="h-4 w-4" />
              <span>Filter</span>
            </button>
          </div>
        </div>
      </GlassCard>

      {/* Bulk Actions */}
      {showBulkActions && selectedDocuments.length > 0 && (
        <GlassCard className="p-4 bg-yellow-500/10 border-yellow-500/20">
          <div className="flex items-center justify-between">
            <span className="text-yellow-400">
              {selectedDocuments.length} document(s) selected
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
                  setSelectedDocuments([]);
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

      {/* Documents List */}
      <div className="space-y-4">
        {filteredDocuments.map((document) => (
          <GlassCard key={document.id} className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={selectedDocuments.includes(document.id)}
                  onChange={() => handleDocumentSelect(document.id)}
                  className="rounded border-gray-300"
                />
                <div>
                  <h3 className="text-lg font-semibold text-white">{document.user.firstName} {document.user.lastName}</h3>
                  <p className="text-gray-400">{document.user.email}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className={`px-2 py-1 rounded-full text-xs ${
                  document.documentType === 'license' ? 'bg-blue-500/20 text-blue-400' :
                  document.documentType === 'id' ? 'bg-green-500/20 text-green-400' :
                  document.documentType === 'insurance' ? 'bg-purple-500/20 text-purple-400' :
                  document.documentType === 'registration' ? 'bg-orange-500/20 text-orange-400' :
                  'bg-gray-500/20 text-gray-400'
                }`}>
                  {document.documentType.replace('_', ' ')}
                </span>
                <StatusBadge status={document.status} />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-gray-300 text-sm">File Name</p>
                <p className="text-white font-medium">{document.fileName}</p>
              </div>
              <div>
                <p className="text-gray-300 text-sm">Uploaded</p>
                <p className="text-white">{new Date(document.uploadedAt).toLocaleDateString()}</p>
              </div>
              {document.expiryDate && (
                <div>
                  <p className="text-gray-300 text-sm">Expiry Date</p>
                  <p className="text-white">{new Date(document.expiryDate).toLocaleDateString()}</p>
                </div>
              )}
              {document.reviewedBy && (
                <div>
                  <p className="text-gray-300 text-sm">Reviewed By</p>
                  <p className="text-white">{document.reviewedBy}</p>
                </div>
              )}
            </div>

            {document.rejectionReason && (
              <div className="mb-4 p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
                <p className="text-red-400 text-sm">
                  <strong>Rejection Reason:</strong> {document.rejectionReason}
                </p>
              </div>
            )}

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <button className="flex items-center space-x-1 px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded text-white text-sm">
                  <Icon name="eye" className="h-3 w-3" />
                  <span>View Document</span>
                </button>
                <button className="flex items-center space-x-1 px-3 py-1 bg-gray-600 hover:bg-gray-700 rounded text-white text-sm">
                  <Icon name="download" className="h-3 w-3" />
                  <span>Download</span>
                </button>
              </div>
              
              {document.status === 'pending' && (
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleDocumentAction(document.id, 'approve')}
                    className="flex items-center space-x-1 px-3 py-1 bg-green-600 hover:bg-green-700 rounded text-white text-sm"
                  >
                    <Icon name="check" className="h-3 w-3" />
                    <span>Approve</span>
                  </button>
                  <button
                    onClick={() => {
                      const reason = prompt('Rejection reason:');
                      if (reason) {
                        handleDocumentAction(document.id, 'reject', reason);
                      }
                    }}
                    className="flex items-center space-x-1 px-3 py-1 bg-red-600 hover:bg-red-700 rounded text-white text-sm"
                  >
                    <Icon name="x" className="h-3 w-3" />
                    <span>Reject</span>
                  </button>
                </div>
              )}
            </div>
          </GlassCard>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-400">
          Showing {filteredDocuments.length} of {documents.length} documents
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

export default DocumentManagementPanel;
