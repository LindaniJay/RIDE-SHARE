import React, { useState, useEffect } from 'react';
import GlassCard from '../GlassCard';
import Icon from '../Icon';
import StatusBadge from '../StatusBadge';

interface ContentModerationPanelProps {
  onRefresh: () => void;
}

interface Review {
  id: number;
  rating: number;
  comment: string;
  reviewer: {
    name: string;
    email: string;
  };
  reviewee: {
    name: string;
    email: string;
  };
  status: 'pending' | 'approved' | 'flagged';
  reportedBy?: string[];
  createdAt: string;
}

interface Report {
  id: number;
  type: 'inappropriate_content' | 'spam' | 'harassment' | 'fake_review' | 'other';
  description: string;
  reporter: {
    name: string;
    email: string;
  };
  reportedItem: {
    type: 'review' | 'listing' | 'user';
    id: number;
    title: string;
  };
  status: 'pending' | 'resolved' | 'dismissed';
  createdAt: string;
}

const ContentModerationPanel: React.FC<ContentModerationPanelProps> = ({ onRefresh }) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [reports, setReports] = useState<Report[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('reviews');
  const [filters, setFilters] = useState({
    status: 'all',
    search: ''
  });

  useEffect(() => {
    fetchData();
  }, [filters, activeTab]);

  const fetchData = async () => {
    try {
      setLoading(true);
      // Mock data - replace with actual API calls
      const mockReviews: Review[] = [
        {
          id: 1,
          rating: 5,
          comment: "Excellent service! The car was clean and the owner was very helpful.",
          reviewer: { name: "John Doe", email: "john@example.com" },
          reviewee: { name: "Jane Smith", email: "jane@example.com" },
          status: 'approved',
          createdAt: '2024-01-15'
        },
        {
          id: 2,
          rating: 1,
          comment: "Terrible experience. Car was dirty and had mechanical issues.",
          reviewer: { name: "Bob Wilson", email: "bob@example.com" },
          reviewee: { name: "Mike Johnson", email: "mike@example.com" },
          status: 'flagged',
          reportedBy: ['user1', 'user2'],
          createdAt: '2024-01-14'
        }
      ];

      const mockReports: Report[] = [
        {
          id: 1,
          type: 'inappropriate_content',
          description: "This review contains offensive language and personal attacks.",
          reporter: { name: "Alice Brown", email: "alice@example.com" },
          reportedItem: { type: 'review', id: 2, title: 'Review #2' },
          status: 'pending',
          createdAt: '2024-01-15'
        },
        {
          id: 2,
          type: 'fake_review',
          description: "This appears to be a fake review written by the listing owner.",
          reporter: { name: "Charlie Davis", email: "charlie@example.com" },
          reportedItem: { type: 'review', id: 3, title: 'Review #3' },
          status: 'pending',
          createdAt: '2024-01-14'
        }
      ];

      setReviews(mockReviews);
      setReports(mockReports);
    } catch (error) {
      console.error('Error fetching moderation data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleReviewAction = async (reviewId: number, action: 'approve' | 'flag' | 'remove') => {
    try {
      // API call to update review status
      console.log(`Review ${reviewId} ${action}d`);
      await fetchData();
      onRefresh();
    } catch (error) {
      console.error('Error updating review:', error);
    }
  };

  const handleReportAction = async (reportId: number, action: 'resolve' | 'dismiss') => {
    try {
      // API call to update report status
      console.log(`Report ${reportId} ${action}d`);
      await fetchData();
      onRefresh();
    } catch (error) {
      console.error('Error updating report:', error);
    }
  };

  const filteredReviews = reviews.filter(review => {
    if (filters.search) {
      const searchTerm = filters.search.toLowerCase();
      return (
        review.comment.toLowerCase().includes(searchTerm) ||
        review.reviewer.name.toLowerCase().includes(searchTerm) ||
        review.reviewee.name.toLowerCase().includes(searchTerm)
      );
    }
    if (filters.status !== 'all') {
      return review.status === filters.status;
    }
    return true;
  });

  const filteredReports = reports.filter(report => {
    if (filters.search) {
      const searchTerm = filters.search.toLowerCase();
      return (
        report.description.toLowerCase().includes(searchTerm) ||
        report.reporter.name.toLowerCase().includes(searchTerm) ||
        report.reportedItem.title.toLowerCase().includes(searchTerm)
      );
    }
    if (filters.status !== 'all') {
      return report.status === filters.status;
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
          <h2 className="text-2xl font-bold text-white">Content Moderation</h2>
          <p className="text-gray-300">Manage reviews, reports, and content safety</p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex space-x-1 bg-white/10 backdrop-blur-md rounded-lg p-1 border border-white/20">
        {[
          { id: 'reviews', label: 'Reviews', icon: 'star', count: reviews.length },
          { id: 'reports', label: 'Reports', icon: 'flag', count: reports.length },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-all ${
              activeTab === tab.id
                ? 'bg-white/20 text-white'
                : 'text-gray-300 hover:text-white hover:bg-white/10'
            }`}
          >
            <Icon name={tab.icon} className="h-4 w-4" />
            <span>{tab.label}</span>
            <span className="bg-white/20 px-2 py-1 rounded-full text-xs">{tab.count}</span>
          </button>
        ))}
      </div>

      {/* Filters */}
      <GlassCard className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Search</label>
            <input
              type="text"
              placeholder="Search content..."
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
              <option value="flagged">Flagged</option>
              <option value="resolved">Resolved</option>
              <option value="dismissed">Dismissed</option>
            </select>
          </div>
          <div className="flex items-end">
            <button
              onClick={fetchData}
              className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white transition-all"
            >
              <Icon name="search" className="h-4 w-4" />
              <span>Filter</span>
            </button>
          </div>
        </div>
      </GlassCard>

      {/* Reviews Tab */}
      {activeTab === 'reviews' && (
        <div className="space-y-4">
          {filteredReviews.map((review) => (
            <GlassCard key={review.id} className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Icon
                        key={i}
                        name="star"
                        className={`h-4 w-4 ${
                          i < review.rating ? 'text-yellow-400' : 'text-gray-400'
                        }`}
                      />
                    ))}
                  </div>
                  <div>
                    <p className="text-white font-medium">
                      {review.reviewer.name} → {review.reviewee.name}
                    </p>
                    <p className="text-gray-400 text-sm">{review.createdAt}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <StatusBadge status={review.status} />
                  {review.reportedBy && review.reportedBy.length > 0 && (
                    <span className="bg-red-500/20 text-red-400 px-2 py-1 rounded-full text-xs">
                      {review.reportedBy.length} reports
                    </span>
                  )}
                </div>
              </div>
              
              <p className="text-gray-300 mb-4">{review.comment}</p>
              
              <div className="flex items-center space-x-2">
                {review.status === 'pending' && (
                  <>
                    <button
                      onClick={() => handleReviewAction(review.id, 'approve')}
                      className="flex items-center space-x-1 px-3 py-1 bg-green-600 hover:bg-green-700 rounded text-white text-sm"
                    >
                      <Icon name="check" className="h-3 w-3" />
                      <span>Approve</span>
                    </button>
                    <button
                      onClick={() => handleReviewAction(review.id, 'flag')}
                      className="flex items-center space-x-1 px-3 py-1 bg-yellow-600 hover:bg-yellow-700 rounded text-white text-sm"
                    >
                      <Icon name="flag" className="h-3 w-3" />
                      <span>Flag</span>
                    </button>
                  </>
                )}
                <button
                  onClick={() => handleReviewAction(review.id, 'remove')}
                  className="flex items-center space-x-1 px-3 py-1 bg-red-600 hover:bg-red-700 rounded text-white text-sm"
                >
                  <Icon name="trash" className="h-3 w-3" />
                  <span>Remove</span>
                </button>
                <button className="flex items-center space-x-1 px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded text-white text-sm">
                  <Icon name="eye" className="h-3 w-3" />
                  <span>View Details</span>
                </button>
              </div>
            </GlassCard>
          ))}
        </div>
      )}

      {/* Reports Tab */}
      {activeTab === 'reports' && (
        <div className="space-y-4">
          {filteredReports.map((report) => (
            <GlassCard key={report.id} className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      report.type === 'inappropriate_content' ? 'bg-red-500/20 text-red-400' :
                      report.type === 'spam' ? 'bg-yellow-500/20 text-yellow-400' :
                      report.type === 'harassment' ? 'bg-orange-500/20 text-orange-400' :
                      report.type === 'fake_review' ? 'bg-purple-500/20 text-purple-400' :
                      'bg-gray-500/20 text-gray-400'
                    }`}>
                      {report.type.replace('_', ' ')}
                    </span>
                    <StatusBadge status={report.status} />
                  </div>
                  <p className="text-white font-medium">{report.reportedItem.title}</p>
                  <p className="text-gray-400 text-sm">
                    Reported by {report.reporter.name} on {report.createdAt}
                  </p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-4">{report.description}</p>
              
              <div className="flex items-center space-x-2">
                {report.status === 'pending' && (
                  <>
                    <button
                      onClick={() => handleReportAction(report.id, 'resolve')}
                      className="flex items-center space-x-1 px-3 py-1 bg-green-600 hover:bg-green-700 rounded text-white text-sm"
                    >
                      <Icon name="check" className="h-3 w-3" />
                      <span>Resolve</span>
                    </button>
                    <button
                      onClick={() => handleReportAction(report.id, 'dismiss')}
                      className="flex items-center space-x-1 px-3 py-1 bg-gray-600 hover:bg-gray-700 rounded text-white text-sm"
                    >
                      <Icon name="x" className="h-3 w-3" />
                      <span>Dismiss</span>
                    </button>
                  </>
                )}
                <button className="flex items-center space-x-1 px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded text-white text-sm">
                  <Icon name="eye" className="h-3 w-3" />
                  <span>View Details</span>
                </button>
              </div>
            </GlassCard>
          ))}
        </div>
      )}

      {/* Safety Statistics */}
      <GlassCard className="p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Safety Statistics</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-white">{reviews.length}</div>
            <div className="text-gray-400 text-sm">Total Reviews</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-red-400">
              {reviews.filter(r => r.status === 'flagged').length}
            </div>
            <div className="text-gray-400 text-sm">Flagged Reviews</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-400">
              {reports.filter(r => r.status === 'pending').length}
            </div>
            <div className="text-gray-400 text-sm">Pending Reports</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400">
              {reports.filter(r => r.status === 'resolved').length}
            </div>
            <div className="text-gray-400 text-sm">Resolved Reports</div>
          </div>
        </div>
      </GlassCard>
    </div>
  );
};

export default ContentModerationPanel;
