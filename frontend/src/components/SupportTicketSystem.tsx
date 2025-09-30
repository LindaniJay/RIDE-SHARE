import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { MessagingService, SupportTicket } from '../services/messagingService';
import GlassCard from './GlassCard';
import Icon from './Icon';

interface SupportTicketSystemProps {
  userRole: 'renter' | 'host' | 'admin';
}

const SupportTicketSystem: React.FC<SupportTicketSystemProps> = ({ userRole }) => {
  const { user } = useAuth();
  const [tickets, setTickets] = useState<SupportTicket[]>([]);
  const [selectedTicket, setSelectedTicket] = useState<SupportTicket | null>(null);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('all');

  // Form state
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: 'technical' as const,
    priority: 'medium' as const
  });

  useEffect(() => {
    fetchTickets();
  }, [activeTab]);

  const fetchTickets = async () => {
    try {
      setLoading(true);
      const status = activeTab === 'all' ? undefined : activeTab;
      const data = await MessagingService.getSupportTickets(status);
      setTickets(data);
    } catch (error) {
      console.error('Error fetching support tickets:', error);
    } finally {
      setLoading(false);
    }
  };

  const createTicket = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const ticketData = {
        title: formData.title,
        description: formData.description,
        status: 'open' as const,
        priority: formData.priority,
        category: formData.category,
        createdBy: Number(user?.id) || 0
      };

      await MessagingService.createSupportTicket(ticketData);
      setShowCreateForm(false);
      setFormData({ title: '', description: '', category: 'technical', priority: 'medium' });
      fetchTickets();
    } catch (error) {
      console.error('Error creating support ticket:', error);
    }
  };

  const updateTicketStatus = async (ticketId: string, status: string) => {
    try {
      await MessagingService.updateSupportTicket(ticketId, { status: status as any });
      fetchTickets();
      if (selectedTicket?.id === ticketId) {
        setSelectedTicket(prev => prev ? { ...prev, status: status as any } : null);
      }
    } catch (error) {
      console.error('Error updating ticket status:', error);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open': return 'bg-green-500/20 text-green-400';
      case 'in_progress': return 'bg-yellow-500/20 text-yellow-400';
      case 'resolved': return 'bg-blue-500/20 text-blue-400';
      case 'closed': return 'bg-gray-500/20 text-gray-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'urgent': return 'bg-red-500/20 text-red-400';
      case 'high': return 'bg-orange-500/20 text-orange-400';
      case 'medium': return 'bg-yellow-500/20 text-yellow-400';
      case 'low': return 'bg-green-500/20 text-green-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

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
          <h2 className="text-2xl font-bold text-white">Support Tickets</h2>
          <p className="text-gray-300">Manage support requests and customer issues</p>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={() => setShowCreateForm(true)}
            className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            <Icon name="Plus" size="sm" />
            <span>New Ticket</span>
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex space-x-1 bg-white/10 backdrop-blur-md rounded-lg p-1 border border-white/20">
        {['all', 'open', 'in_progress', 'resolved', 'closed'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-all ${
              activeTab === tab
                ? 'bg-white/20 text-white'
                : 'text-gray-300 hover:text-white hover:bg-white/10'
            }`}
          >
            <span className="capitalize">{tab.replace('_', ' ')}</span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Tickets List */}
        <div className="lg:col-span-2">
          <GlassCard className="p-6">
            <div className="space-y-4">
              {tickets.map((ticket) => (
                <div
                  key={ticket.id}
                  onClick={() => setSelectedTicket(ticket)}
                  className={`p-4 rounded-lg border cursor-pointer transition-colors ${
                    selectedTicket?.id === ticket.id
                      ? 'bg-white/20 border-white/30'
                      : 'bg-white/5 border-white/10 hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-white font-semibold mb-2">{ticket.title}</h3>
                      <p className="text-gray-400 text-sm mb-3 line-clamp-2">{ticket.description}</p>
                      <div className="flex items-center space-x-4 text-xs">
                        <span className="text-gray-500">
                          #{ticket.id.slice(-8)}
                        </span>
                        <span className="text-gray-500">
                          {new Date(ticket.createdAt).toLocaleDateString()}
                        </span>
                        <span className="text-gray-500 capitalize">
                          {ticket.category}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end space-y-2">
                      <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(ticket.status)}`}>
                        {ticket.status.replace('_', ' ')}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs ${getPriorityColor(ticket.priority)}`}>
                        {ticket.priority}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>

        {/* Ticket Details */}
        <div>
          {selectedTicket ? (
            <GlassCard className="p-6">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">{selectedTicket.title}</h3>
                  <p className="text-gray-400 text-sm">{selectedTicket.description}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-300 text-sm">Status</p>
                    <span className={`inline-block px-2 py-1 rounded-full text-xs ${getStatusColor(selectedTicket.status)}`}>
                      {selectedTicket.status.replace('_', ' ')}
                    </span>
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Priority</p>
                    <span className={`inline-block px-2 py-1 rounded-full text-xs ${getPriorityColor(selectedTicket.priority)}`}>
                      {selectedTicket.priority}
                    </span>
                  </div>
                </div>

                {userRole === 'admin' && (
                  <div className="space-y-2">
                    <p className="text-gray-300 text-sm">Admin Actions</p>
                    <div className="flex flex-wrap gap-2">
                      {selectedTicket.status === 'open' && (
                        <button
                          onClick={() => updateTicketStatus(selectedTicket.id, 'in_progress')}
                          className="px-3 py-1 bg-yellow-600 hover:bg-yellow-700 text-white text-xs rounded transition-colors"
                        >
                          Start Progress
                        </button>
                      )}
                      {selectedTicket.status === 'in_progress' && (
                        <button
                          onClick={() => updateTicketStatus(selectedTicket.id, 'resolved')}
                          className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white text-xs rounded transition-colors"
                        >
                          Resolve
                        </button>
                      )}
                      <button
                        onClick={() => updateTicketStatus(selectedTicket.id, 'closed')}
                        className="px-3 py-1 bg-gray-600 hover:bg-gray-700 text-white text-xs rounded transition-colors"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                )}

                <div>
                  <p className="text-gray-300 text-sm mb-2">Messages ({selectedTicket.messages.length})</p>
                  <div className="space-y-2 max-h-40 overflow-y-auto">
                    {selectedTicket.messages.map((message, index) => (
                      <div key={index} className="p-2 bg-white/5 rounded text-sm">
                        <p className="text-white">{message.content}</p>
                        <p className="text-gray-400 text-xs">
                          {new Date(message.timestamp).toLocaleString()}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </GlassCard>
          ) : (
            <GlassCard className="p-6">
              <div className="text-center">
                <Icon name="Ticket" size="lg" className="text-white/50 mx-auto mb-4" />
                <p className="text-white/70">Select a ticket to view details</p>
              </div>
            </GlassCard>
          )}
        </div>
      </div>

      {/* Create Ticket Modal */}
      {showCreateForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <GlassCard className="p-6 w-full max-w-md">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">Create Support Ticket</h3>
              <button
                onClick={() => setShowCreateForm(false)}
                className="text-gray-400 hover:text-white"
              >
                <Icon name="X" size="sm" />
              </button>
            </div>

            <form onSubmit={createTicket} className="space-y-4">
              <div>
                <label className="block text-white/70 text-sm font-medium mb-2">Title</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Brief description of the issue"
                  required
                />
              </div>

              <div>
                <label className="block text-white/70 text-sm font-medium mb-2">Description</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Detailed description of the issue"
                  rows={4}
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/70 text-sm font-medium mb-2">Category</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value as any }))}
                    className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="technical">Technical</option>
                    <option value="billing">Billing</option>
                    <option value="booking">Booking</option>
                    <option value="account">Account</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white/70 text-sm font-medium mb-2">Priority</label>
                  <select
                    value={formData.priority}
                    onChange={(e) => setFormData(prev => ({ ...prev, priority: e.target.value as any }))}
                    className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                    <option value="urgent">Urgent</option>
                  </select>
                </div>
              </div>

              <div className="flex space-x-2">
                <button
                  type="submit"
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors"
                >
                  Create Ticket
                </button>
                <button
                  type="button"
                  onClick={() => setShowCreateForm(false)}
                  className="flex-1 bg-white/10 hover:bg-white/20 text-white py-2 px-4 rounded-lg transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </GlassCard>
        </div>
      )}
    </div>
  );
};

export default SupportTicketSystem;
