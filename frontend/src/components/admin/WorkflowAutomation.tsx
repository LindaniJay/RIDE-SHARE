import React, { useState, useEffect } from 'react';
import Icon from '../Icon';
import GlassCard from '../GlassCard';

interface Workflow {
  id: string;
  name: string;
  description: string;
  trigger: {
    type: 'event' | 'schedule' | 'condition';
    event?: string;
    schedule?: string;
    condition?: string;
  };
  actions: {
    type: 'email' | 'notification' | 'approval' | 'data_update' | 'api_call';
    config: Record<string, any>;
  }[];
  status: 'active' | 'inactive' | 'draft';
  lastRun?: string;
  nextRun?: string;
  executionCount: number;
  successRate: number;
  createdBy: string;
  createdAt: string;
}

interface WorkflowTemplate {
  id: string;
  name: string;
  description: string;
  category: 'user_management' | 'booking_processing' | 'safety' | 'marketing' | 'system';
  complexity: 'simple' | 'medium' | 'complex';
  estimatedTime: string;
  usageCount: number;
}

const WorkflowAutomation: React.FC = () => {
  const [workflows, setWorkflows] = useState<Workflow[]>([]);
  const [templates, setTemplates] = useState<WorkflowTemplate[]>([]);
  const [activeTab, setActiveTab] = useState<'workflows' | 'templates' | 'create'>('workflows');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchWorkflowData();
  }, []);

  const fetchWorkflowData = async () => {
    try {
      // Mock data - replace with actual API calls
      const mockWorkflows: Workflow[] = [
        {
          id: 'WF001',
          name: 'New User Onboarding',
          description: 'Automated welcome sequence for new users',
          trigger: {
            type: 'event',
            event: 'user_registration'
          },
          actions: [
            {
              type: 'email',
              config: { template: 'welcome_email', delay: 0 }
            },
            {
              type: 'notification',
              config: { message: 'Welcome to RideShare SA!', type: 'info' }
            }
          ],
          status: 'active',
          lastRun: new Date(Date.now() - 3600000).toISOString(),
          nextRun: new Date(Date.now() + 3600000).toISOString(),
          executionCount: 1250,
          successRate: 98.5,
          createdBy: 'Admin User',
          createdAt: new Date().toISOString()
        },
        {
          id: 'WF002',
          name: 'Booking Confirmation',
          description: 'Automated booking confirmation and payment processing',
          trigger: {
            type: 'event',
            event: 'booking_created'
          },
          actions: [
            {
              type: 'email',
              config: { template: 'booking_confirmation', delay: 0 }
            },
            {
              type: 'data_update',
              config: { field: 'status', value: 'confirmed' }
            },
            {
              type: 'notification',
              config: { message: 'Booking confirmed!', type: 'success' }
            }
          ],
          status: 'active',
          lastRun: new Date(Date.now() - 1800000).toISOString(),
          nextRun: new Date(Date.now() + 1800000).toISOString(),
          executionCount: 890,
          successRate: 99.2,
          createdBy: 'Admin User',
          createdAt: new Date(Date.now() - 86400000).toISOString()
        },
        {
          id: 'WF003',
          name: 'Safety Incident Response',
          description: 'Automated response to safety incidents',
          trigger: {
            type: 'condition',
            condition: 'incident_severity == "critical"'
          },
          actions: [
            {
              type: 'notification',
              config: { message: 'Critical safety incident reported', type: 'alert' }
            },
            {
              type: 'approval',
              config: { approver: 'safety_team', timeout: 3600 }
            },
            {
              type: 'api_call',
              config: { endpoint: '/api/emergency/notify', method: 'POST' }
            }
          ],
          status: 'active',
          lastRun: new Date(Date.now() - 7200000).toISOString(),
          executionCount: 12,
          successRate: 100,
          createdBy: 'Admin User',
          createdAt: new Date(Date.now() - 172800000).toISOString()
        }
      ];

      const mockTemplates: WorkflowTemplate[] = [
        {
          id: 'TMP001',
          name: 'User Welcome Sequence',
          description: 'Send welcome emails and notifications to new users',
          category: 'user_management',
          complexity: 'simple',
          estimatedTime: '5 minutes',
          usageCount: 15
        },
        {
          id: 'TMP002',
          name: 'Payment Reminder',
          description: 'Send payment reminders to users with outstanding balances',
          category: 'booking_processing',
          complexity: 'medium',
          estimatedTime: '10 minutes',
          usageCount: 8
        },
        {
          id: 'TMP003',
          name: 'Marketing Campaign',
          description: 'Automated marketing campaign for user engagement',
          category: 'marketing',
          complexity: 'complex',
          estimatedTime: '30 minutes',
          usageCount: 3
        }
      ];

      setWorkflows(mockWorkflows);
      setTemplates(mockTemplates);
    } catch (error) {
      console.error('Error fetching workflow data:', error);
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-green-500 bg-green-500/20';
      case 'inactive': return 'text-gray-500 bg-gray-500/20';
      case 'draft': return 'text-yellow-500 bg-yellow-500/20';
      default: return 'text-gray-500 bg-gray-500/20';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'user_management': return 'text-blue-500';
      case 'booking_processing': return 'text-green-500';
      case 'safety': return 'text-red-500';
      case 'marketing': return 'text-purple-500';
      case 'system': return 'text-gray-500';
      default: return 'text-white';
    }
  };

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case 'simple': return 'text-green-500';
      case 'medium': return 'text-yellow-500';
      case 'complex': return 'text-red-500';
      default: return 'text-gray-500';
    }
  };

  if (loading) {
    return (
      <GlassCard title="Workflow Automation" icon="Workflow">
        <div className="flex items-center justify-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        </div>
      </GlassCard>
    );
  }

  return (
    <GlassCard title="Workflow Automation" icon="Workflow">
      <div className="space-y-6">
        {/* Tab Navigation */}
        <div className="flex space-x-2">
          {[
            { key: 'workflows', label: 'Workflows', icon: 'Workflow' },
            { key: 'templates', label: 'Templates', icon: 'FileText' },
            { key: 'create', label: 'Create', icon: 'Plus' }
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

        {/* Workflows Tab */}
        {activeTab === 'workflows' && (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="font-medium text-white">Active Workflows</h3>
              <button className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30">
                <Icon name="Plus" className="w-4 h-4 mr-2 inline" />
                New Workflow
              </button>
            </div>

            <div className="space-y-4">
              {workflows.map((workflow) => (
                <div key={workflow.id} className="p-4 rounded-lg bg-white/5 border border-white/10">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-medium text-white">{workflow.name}</h4>
                      <p className="text-sm text-white/70 mt-1">{workflow.description}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getStatusColor(workflow.status)}`}>
                        {workflow.status}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-3">
                    <div>
                      <span className="text-white/50">Trigger:</span>
                      <span className="text-white/70 ml-2 capitalize">
                        {workflow.trigger.type}
                      </span>
                    </div>
                    <div>
                      <span className="text-white/50">Executions:</span>
                      <span className="text-white/70 ml-2">{workflow.executionCount}</span>
                    </div>
                    <div>
                      <span className="text-white/50">Success Rate:</span>
                      <span className="text-white/70 ml-2">{workflow.successRate}%</span>
                    </div>
                    <div>
                      <span className="text-white/50">Last Run:</span>
                      <span className="text-white/70 ml-2">
                        {workflow.lastRun ? new Date(workflow.lastRun).toLocaleString() : 'Never'}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-xs text-white/50">
                      Created by {workflow.createdBy} • {new Date(workflow.createdAt).toLocaleDateString()}
                    </div>
                    <div className="flex space-x-2">
                      <button className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded text-sm hover:bg-blue-500/30">
                        Edit
                      </button>
                      <button className="px-3 py-1 bg-green-500/20 text-green-400 rounded text-sm hover:bg-green-500/30">
                        Run Now
                      </button>
                      <button className="px-3 py-1 bg-gray-500/20 text-gray-400 rounded text-sm hover:bg-gray-500/30">
                        Logs
                      </button>
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
              <h3 className="font-medium text-white">Workflow Templates</h3>
              <button className="px-4 py-2 bg-green-500/20 text-green-400 rounded-lg hover:bg-green-500/30">
                <Icon name="Upload" className="w-4 h-4 mr-2 inline" />
                Import Template
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {templates.map((template) => (
                <div key={template.id} className="p-4 rounded-lg bg-white/5 border border-white/10">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="font-medium text-white">{template.name}</h4>
                    <span className={`text-xs ${getCategoryColor(template.category)}`}>
                      {template.category.replace('_', ' ')}
                    </span>
                  </div>
                  
                  <p className="text-sm text-white/70 mb-3">{template.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-white/50">Complexity:</span>
                      <span className={`${getComplexityColor(template.complexity)}`}>
                        {template.complexity}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-white/50">Time:</span>
                      <span className="text-white/70">{template.estimatedTime}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-white/50">Used:</span>
                      <span className="text-white/70">{template.usageCount} times</span>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <button className="flex-1 px-3 py-1 bg-blue-500/20 text-blue-400 rounded text-sm hover:bg-blue-500/30">
                      Use Template
                    </button>
                    <button className="flex-1 px-3 py-1 bg-gray-500/20 text-gray-400 rounded text-sm hover:bg-gray-500/30">
                      Preview
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Create Tab */}
        {activeTab === 'create' && (
          <div className="space-y-4">
            <h3 className="font-medium text-white">Create New Workflow</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-white/70 mb-2">Workflow Name</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white"
                  placeholder="Enter workflow name"
                />
              </div>

              <div>
                <label className="block text-sm text-white/70 mb-2">Description</label>
                <textarea
                  rows={3}
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white"
                  placeholder="Describe what this workflow does"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-white/70 mb-2">Trigger Type</label>
                  <select className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white">
                    <option value="event">Event Trigger</option>
                    <option value="schedule">Scheduled</option>
                    <option value="condition">Conditional</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-white/70 mb-2">Category</label>
                  <select className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white">
                    <option value="user_management">User Management</option>
                    <option value="booking_processing">Booking Processing</option>
                    <option value="safety">Safety</option>
                    <option value="marketing">Marketing</option>
                    <option value="system">System</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm text-white/70 mb-2">Actions</label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <select className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white">
                      <option value="email">Send Email</option>
                      <option value="notification">Send Notification</option>
                      <option value="approval">Request Approval</option>
                      <option value="data_update">Update Data</option>
                      <option value="api_call">API Call</option>
                    </select>
                    <button className="px-3 py-2 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30">
                      <Icon name="Trash" className="w-4 h-4" />
                    </button>
                  </div>
                  <button className="w-full px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30">
                    <Icon name="Plus" className="w-4 h-4 mr-2 inline" />
                    Add Action
                  </button>
                </div>
              </div>

              <div className="flex space-x-2">
                <button className="flex-1 px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30">
                  <Icon name="Save" className="w-4 h-4 mr-2 inline" />
                  Save Workflow
                </button>
                <button className="flex-1 px-4 py-2 bg-green-500/20 text-green-400 rounded-lg hover:bg-green-500/30">
                  <Icon name="Play" className="w-4 h-4 mr-2 inline" />
                  Test Workflow
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Quick Actions */}
        <div className="flex space-x-2">
          <button className="flex-1 px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30 transition-colors">
            <Icon name="Activity" className="w-4 h-4 mr-2 inline" />
            View Logs
          </button>
          <button className="flex-1 px-4 py-2 bg-green-500/20 text-green-400 rounded-lg hover:bg-green-500/30 transition-colors">
            <Icon name="Download" className="w-4 h-4 mr-2 inline" />
            Export Workflows
          </button>
          <button className="flex-1 px-4 py-2 bg-purple-500/20 text-purple-400 rounded-lg hover:bg-purple-500/30 transition-colors">
            <Icon name="Settings" className="w-4 h-4 mr-2 inline" />
            Settings
          </button>
        </div>
      </div>
    </GlassCard>
  );
};

export default WorkflowAutomation;
