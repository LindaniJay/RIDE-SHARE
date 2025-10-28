import React, { useState, useEffect } from 'react';
import Icon from './Icon';

interface Document {
  id: string;
  type: 'driver_license' | 'id_document' | 'proof_of_address';
  name: string;
  expiryDate: Date;
  status: 'valid' | 'expiring_soon' | 'expired';
  daysUntilExpiry: number;
}

interface DocumentExpiryReminderProps {
  userId: string;
  className?: string;
}

export const DocumentExpiryReminder: React.FC<DocumentExpiryReminderProps> = ({ 
  userId, 
  className = '' 
}) => {
  const [documents, setDocuments] = useState<Document[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDocuments();
  }, [userId]);

  const fetchDocuments = async () => {
    try {
      const token = localStorage.getItem('authToken');
      const response = await fetch(`/api/users/${userId}/documents`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        setDocuments(data.documents || []);
      }
    } catch (error) {
      console.error('Error fetching documents:', error);
      // Fallback to empty array instead of mock data
      setDocuments([]);
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'expired':
        return 'text-red-400 bg-red-500/20 border-red-500/30';
      case 'expiring_soon':
        return 'text-yellow-400 bg-yellow-500/20 border-yellow-500/30';
      case 'valid':
        return 'text-green-400 bg-green-500/20 border-green-500/30';
      default:
        return 'text-gray-400 bg-gray-500/20 border-gray-500/30';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'expired':
        return 'XCircle';
      case 'expiring_soon':
        return 'AlertTriangle';
      case 'valid':
        return 'CheckCircle';
      default:
        return 'FileText';
    }
  };

  const getDocumentIcon = (type: string) => {
    switch (type) {
      case 'driver_license':
        return 'Car';
      case 'id_document':
        return 'CreditCard';
      case 'proof_of_address':
        return 'Home';
      default:
        return 'FileText';
    }
  };

  if (loading) {
    return (
      <div className={`space-y-3 ${className}`}>
        {[...Array(2)].map((_, i) => (
          <div key={i} className="animate-pulse">
            <div className="h-16 bg-white/10 rounded-lg"></div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={`space-y-3 ${className}`}>
      {documents.length === 0 ? (
        <div className="text-center py-4">
          <Icon name="FileText" size="lg" className="text-white/50 mb-2" />
          <p className="text-white/70 text-sm">No documents uploaded yet</p>
        </div>
      ) : (
        documents.map((doc) => (
          <div key={doc.id} className={`p-3 rounded-lg border ${getStatusColor(doc.status)}`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Icon name={getDocumentIcon(doc.type)} size="sm" />
                <div>
                  <p className="text-sm font-medium text-white">{doc.name}</p>
                  <p className="text-xs text-white/70">
                    Expires: {doc.expiryDate.toLocaleDateString()}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <div className="flex items-center space-x-2">
                  <Icon name={getStatusIcon(doc.status)} size="sm" />
                  <span className="text-xs">
                    {doc.status === 'expired' 
                      ? 'Expired' 
                      : doc.status === 'expiring_soon'
                      ? `${doc.daysUntilExpiry} days`
                      : 'Valid'
                    }
                  </span>
                </div>
                {doc.status === 'expiring_soon' && (
                  <button className="text-xs text-blue-400 hover:text-blue-300 transition-colors mt-1">
                    Renew Now
                  </button>
                )}
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default DocumentExpiryReminder;
