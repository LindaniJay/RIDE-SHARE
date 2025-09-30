import React, { useState, useEffect } from 'react';
import Icon from '../Icon';
import GlassCard from '../GlassCard';

interface Message {
  id: string;
  type: 'broadcast' | 'targeted' | 'announcement';
  subject: string;
  content: string;
  recipients: {
    total: number;
    sent: number;
    delivered: number;
    opened: number;
    clicked: number;
  };
  status: 'draft' | 'scheduled' | 'sending' | 'sent' | 'failed';
  createdAt: string;
  scheduledFor?: string;
  createdBy: string;
  tags: string[];
}

interface MessageTemplate {
  id: string;
  name: string;
  subject: string;
  content: string;
  category: 'welcome' | 'booking' | 'payment' | 'safety' | 'promotion' | 'system';
  variables: string[];
  usageCount: number;
}

const AdminMessagingCenter: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [templates, setTemplates] = useState<MessageTemplate[]>([]);
  const [activeTab, setActiveTab] = useState<'messages' | 'templates' | 'compose'>('messages');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // Mock data - replace with actual API calls
      const mockMessages: Message[] = [
        {
          id: 'MSG001',
          type: 'broadcast',
          subject: 'Welcome to RideShare SA!',
          content: 'Thank you for joining our platform. Start exploring vehicles today!',
          recipients: {
            total: 5000,
            sent: 5000,
            delivered: 4850,
            opened: 3200,
            clicked: 1200
          },
          status: 'sent',
          createdAt: new Date().toISOString(),
          createdBy: 'Admin User',
          tags: ['welcome', 'onboarding']
        },
        {
          id: 'MSG002',
          type: 'targeted',
          subject: 'Payment Reminder',
          content: 'Your payment is due. Please complete your payment to continue using our services.',
          recipients: {
            total: 150,
            sent: 150,
            delivered: 145,
            opened: 98,
            clicked: 45
          },
          status: 'sent',
          createdAt: new Date(Date.now() - 3600000).toISOString(),
          createdBy: 'Admin User',
          tags: ['payment', 'reminder']
        },
        {
          id: 'MSG003',
          type: 'announcement',
          subject: 'System Maintenance Notice',
          content: 'We will be performing scheduled maintenance on Sunday from 2-4 AM.',
          recipients: {
            total: 10000,
            sent: 0,
            delivered: 0,
            opened: 0,
            clicked: 0
          },
          status: 'scheduled',
          createdAt: new Date(Date.now() - 7200000).toISOString(),
          scheduledFor: new Date(Date.now() + 86400000).toISOString(),
          createdBy: 'Admin User',
          tags: ['maintenance', 'system']
        }
      ];

      const mockTemplates: MessageTemplate[] = [
        {
          id: 'TMP001',
          name: 'Welcome Message',
          subject: 'Welcome to RideShare SA, {{firstName}}!',
          content: 'Hi {{firstName}}, welcome to RideShare SA! We\'re excited to have you on board.',
          category: 'welcome',
          variables: ['firstName', 'lastName'],
          usageCount: 25
        },
        {
          id: 'TMP002',
          name: 'Booking Confirmation',
          subject: 'Booking Confirmed - {{vehicleName}}',
          content: 'Your booking for {{vehicleName}} has been confirmed for {{startDate}} to {{endDate}}.',
          category: 'booking',
          variables: ['vehicleName', 'startDate', 'endDate', 'totalAmount'],
          usageCount: 150
        },
        {
          id: 'TMP003',
          name: 'Payment Reminder',
          subject: 'Payment Due - {{amount}}',
          content: 'Your payment of {{amount}} is due. Please complete payment to avoid service interruption.',
          category: 'payment',
          variables: ['amount', 'dueDate'],
          usageCount: 45
        }
      ];

      setMessages(mockMessages);
      setTemplates(mockTemplates);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'sent': return 'text-green-500 bg-green-500/20';
      case 'scheduled': return 'text-blue-500 bg-blue-500/20';
      case 'sending': return 'text-yellow-500 bg-yellow-500/20';
      case 'failed': return 'text-red-500 bg-red-500/20';
      default: return 'text-gray-500 bg-gray-500/20';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'broadcast': return 'Megaphone';
      case 'targeted': return 'Target';
      case 'announcement': return 'Bell';
      default: return 'MessageSquare';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'welcome': return 'text-blue-500';
      case 'booking': return 'text-green-500';
      case 'payment': return 'text-purple-500';
      case 'safety': return 'text-red-500';
      case 'promotion': return 'text-yellow-500';
      case 'system': return 'text-gray-500';
      default: return 'text-white';
    }
  };

  if (loading) {
    return (
      <GlassCard title="Admin Messaging Center" icon="MessageSquare">
        <div className="flex items-center justify-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        </div>
      </GlassCard>
    );
  }

  return (
    <GlassCard title="Admin Messaging Center" icon="MessageSquare">
      <div className="space-y-6">
        {/* Tab Navigation */}
        <div className="flex space-x-2">
          {[
            { key: 'messages', label: 'Messages', icon: 'MessageSquare' },
            { key: 'templates', label: 'Templates', icon: 'FileText' },
            { key: 'compose', label: 'Compose', icon: 'Edit' }
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key as any)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm ${
                activeTab === tab.key
                  ? 'bg-white/20 text-white'
                  : 'bg-white/10 text-white/70 hover:bg-white/20'
              }`}
            >
              <Icon name={tab.icon} className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Messages Tab */}
        {activeTab === 'messages' && (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="font-medium text-white">Recent Messages</h3>
              <button className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30">
                <Icon name="Plus" className="w-4 h-4 mr-2 inline" />
                New Message
              </button>
            </div>

            <div className="space-y-4">
              {messages.map((message) => (
                <div key={message.id} className="p-4 rounded-lg bg-white/5 border border-white/10">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-start space-x-3">
                      <Icon
                        name={getTypeIcon(message.type)}
                        className="w-5 h-5 text-white/70"
                      />
                      <div>
                        <h4 className="font-medium text-white">{message.subject}</h4>
                        <p className="text-sm text-white/70 mt-1">{message.content}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getStatusColor(message.status)}`}>
                        {message.status}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm">
                    <div>
                      <span className="text-white/50">Recipients:</span>
                      <span className="text-white/70 ml-1">{message.recipients.total.toLocaleString()}</span>
                    </div>
                    <div>
                      <span className="text-white/50">Delivered:</span>
                      <span className="text-white/70 ml-1">{message.recipients.delivered.toLocaleString()}</span>
                    </div>
                    <div>
                      <span className="text-white/50">Opened:</span>
                      <span className="text-white/70 ml-1">{message.recipients.opened.toLocaleString()}</span>
                    </div>
                    <div>
                      <span className="text-white/50">Clicked:</span>
                      <span className="text-white/70 ml-1">{message.recipients.clicked.toLocaleString()}</span>
                    </div>
                    <div>
                      <span className="text-white/50">Open Rate:</span>
                      <span className="text-white/70 ml-1">
                        {message.recipients.delivered > 0 
                          ? ((message.recipients.opened / message.recipients.delivered) * 100).toFixed(1)
                          : 0}%
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-3">
                    <div className="flex space-x-2">
                      {message.tags.map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-white/10 text-white/70 text-xs rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="text-xs text-white/50">
                      {new Date(message.createdAt).toLocaleString()}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Templates Tab */}
        {activeTab === 'templates' && (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="font-medium text-white">Message Templates</h3>
              <button className="px-4 py-2 bg-green-500/20 text-green-400 rounded-lg hover:bg-green-500/30">
                <Icon name="Plus" className="w-4 h-4 mr-2 inline" />
                New Template
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {templates.map((template) => (
                <div key={template.id} className="p-4 rounded-lg bg-white/5 border border-white/10">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="font-medium text-white">{template.name}</h4>
                    <span className={`text-xs ${getCategoryColor(template.category)}`}>
                      {template.category}
                    </span>
                  </div>
                  
                  <p className="text-sm text-white/70 mb-3">{template.subject}</p>
                  
                  <div className="space-y-2">
                    <div className="text-xs text-white/50">
                      Variables: {template.variables.join(', ')}
                    </div>
                    <div className="text-xs text-white/50">
                      Used {template.usageCount} times
                    </div>
                  </div>

                  <div className="flex space-x-2 mt-4">
                    <button className="flex-1 px-3 py-1 bg-blue-500/20 text-blue-400 rounded text-sm hover:bg-blue-500/30">
                      Use
                    </button>
                    <button className="flex-1 px-3 py-1 bg-gray-500/20 text-gray-400 rounded text-sm hover:bg-gray-500/30">
                      Edit
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Compose Tab */}
        {activeTab === 'compose' && (
          <div className="space-y-4">
            <h3 className="font-medium text-white">Compose New Message</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-white/70 mb-2">Message Type</label>
                <select className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white">
                  <option value="broadcast">Broadcast</option>
                  <option value="targeted">Targeted</option>
                  <option value="announcement">Announcement</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-white/70 mb-2">Subject</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white"
                  placeholder="Enter message subject"
                />
              </div>

              <div>
                <label className="block text-sm text-white/70 mb-2">Content</label>
                <textarea
                  rows={6}
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white"
                  placeholder="Enter message content"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-white/70 mb-2">Recipients</label>
                  <select className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white">
                    <option value="all">All Users</option>
                    <option value="renters">Renters Only</option>
                    <option value="hosts">Hosts Only</option>
                    <option value="custom">Custom Selection</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-white/70 mb-2">Schedule</label>
                  <select className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white">
                    <option value="now">Send Now</option>
                    <option value="schedule">Schedule for Later</option>
                  </select>
                </div>
              </div>

              <div className="flex space-x-2">
                <button className="flex-1 px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30">
                  <Icon name="Send" className="w-4 h-4 mr-2 inline" />
                  Send Message
                </button>
                <button className="flex-1 px-4 py-2 bg-gray-500/20 text-gray-400 rounded-lg hover:bg-gray-500/30">
                  <Icon name="Save" className="w-4 h-4 mr-2 inline" />
                  Save Draft
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </GlassCard>
  );
};

export default AdminMessagingCenter;
