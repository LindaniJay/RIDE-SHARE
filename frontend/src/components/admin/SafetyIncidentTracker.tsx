import React, { useState, useEffect } from 'react';
import Icon from '../Icon';
import GlassCard from '../GlassCard';

interface SafetyIncident {
  id: string;
  type: 'accident' | 'theft' | 'damage' | 'safety_violation' | 'emergency';
  severity: 'low' | 'medium' | 'high' | 'critical';
  status: 'reported' | 'investigating' | 'resolved' | 'closed';
  title: string;
  description: string;
  location: string;
  reportedBy: {
    id: string;
    name: string;
    role: 'renter' | 'host' | 'admin';
  };
  reportedAt: string;
  assignedTo?: string;
  resolution?: string;
  metadata: {
    vehicleId?: string;
    bookingId?: string;
    witnesses?: string[];
    damages?: string[];
    insuranceClaim?: boolean;
  };
}

const SafetyIncidentTracker: React.FC = () => {
  const [incidents, setIncidents] = useState<SafetyIncident[]>([]);
  const [filter, setFilter] = useState<'all' | 'open' | 'critical' | 'resolved'>('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchIncidents();
  }, []);

  const fetchIncidents = async () => {
    try {
      const response = await fetch('/api/admin/safety-incidents', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      if (data.success) {
        setIncidents(data.incidents || []);
      } else {
        throw new Error(data.error || 'Failed to fetch incidents');
      }
    } catch (error) {
      console.error('Error fetching incidents:', error);
      setIncidents([]);
    } finally {
      setLoading(false);
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'text-red-500 bg-red-500/20';
      case 'high': return 'text-orange-500 bg-orange-500/20';
      case 'medium': return 'text-yellow-500 bg-yellow-500/20';
      default: return 'text-green-500 bg-green-500/20';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'reported': return 'text-blue-500 bg-blue-500/20';
      case 'investigating': return 'text-yellow-500 bg-yellow-500/20';
      case 'resolved': return 'text-green-500 bg-green-500/20';
      case 'closed': return 'text-gray-500 bg-gray-500/20';
      default: return 'text-gray-500 bg-gray-500/20';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'accident': return 'AlertTriangle';
      case 'theft': return 'Shield';
      case 'damage': return 'Wrench';
      case 'safety_violation': return 'AlertCircle';
      case 'emergency': return 'Phone';
      default: return 'AlertTriangle';
    }
  };

  const filteredIncidents = incidents.filter(incident => {
    if (filter === 'open') return incident.status !== 'resolved' && incident.status !== 'closed';
    if (filter === 'critical') return incident.severity === 'critical';
    if (filter === 'resolved') return incident.status === 'resolved' || incident.status === 'closed';
    return true;
  });

  const openIncidents = incidents.filter(i => i.status !== 'resolved' && i.status !== 'closed').length;
  const criticalIncidents = incidents.filter(i => i.severity === 'critical').length;

  if (loading) {
    return (
      <GlassCard title="Safety Incident Tracker" icon="Shield">
        <div className="flex items-center justify-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        </div>
      </GlassCard>
    );
  }

  return (
    <GlassCard title="Safety Incident Tracker" icon="Shield">
      <div className="space-y-6">
        {/* Summary Stats */}
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-white">{incidents.length}</div>
            <div className="text-sm text-white/70">Total Incidents</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-500">{openIncidents}</div>
            <div className="text-sm text-white/70">Open</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-red-500">{criticalIncidents}</div>
            <div className="text-sm text-white/70">Critical</div>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex space-x-2">
          {['all', 'open', 'critical', 'resolved'].map((filterType) => (
            <button
              key={filterType}
              onClick={() => setFilter(filterType as any)}
              className={`px-3 py-1 rounded text-sm capitalize ${
                filter === filterType 
                  ? 'bg-white/20 text-white' 
                  : 'bg-white/10 text-white/70 hover:bg-white/20'
              }`}
            >
              {filterType}
            </button>
          ))}
        </div>

        {/* Incidents List */}
        <div className="space-y-4">
          {filteredIncidents.map((incident) => (
            <div
              key={incident.id}
              className="p-4 rounded-lg bg-white/5 border border-white/10"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-start space-x-3">
                  <Icon
                    name={getTypeIcon(incident.type)}
                    className="w-5 h-5 text-white/70"
                  />
                  <div>
                    <h4 className="font-medium text-white">{incident.title}</h4>
                    <p className="text-sm text-white/70 mt-1">{incident.description}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-1 rounded text-xs ${getSeverityColor(incident.severity)}`}>
                    {incident.severity}
                  </span>
                  <span className={`px-2 py-1 rounded text-xs ${getStatusColor(incident.status)}`}>
                    {incident.status}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-white/50">Location:</span>
                  <span className="text-white/70 ml-2">{incident.location}</span>
                </div>
                <div>
                  <span className="text-white/50">Reported by:</span>
                  <span className="text-white/70 ml-2">{incident.reportedBy.name}</span>
                </div>
                <div>
                  <span className="text-white/50">Reported at:</span>
                  <span className="text-white/70 ml-2">
                    {new Date(incident.reportedAt).toLocaleString()}
                  </span>
                </div>
                {incident.assignedTo && (
                  <div>
                    <span className="text-white/50">Assigned to:</span>
                    <span className="text-white/70 ml-2">{incident.assignedTo}</span>
                  </div>
                )}
              </div>

              {incident.metadata && (
                <div className="mt-3 p-3 bg-white/5 rounded">
                  <h5 className="text-sm font-medium text-white mb-2">Details</h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
                    {incident.metadata.vehicleId && (
                      <div>
                        <span className="text-white/50">Vehicle ID:</span>
                        <span className="text-white/70 ml-1">{incident.metadata.vehicleId}</span>
                      </div>
                    )}
                    {incident.metadata.bookingId && (
                      <div>
                        <span className="text-white/50">Booking ID:</span>
                        <span className="text-white/70 ml-1">{incident.metadata.bookingId}</span>
                      </div>
                    )}
                    {incident.metadata.insuranceClaim && (
                      <div>
                        <span className="text-white/50">Insurance Claim:</span>
                        <span className="text-white/70 ml-1">Yes</span>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {incident.resolution && (
                <div className="mt-3 p-3 bg-green-500/10 rounded">
                  <h5 className="text-sm font-medium text-green-400 mb-1">Resolution</h5>
                  <p className="text-sm text-green-300">{incident.resolution}</p>
                </div>
              )}

              <div className="flex space-x-2 mt-4">
                <button className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded text-sm hover:bg-blue-500/30">
                  View Details
                </button>
                <button className="px-3 py-1 bg-green-500/20 text-green-400 rounded text-sm hover:bg-green-500/30">
                  Update Status
                </button>
                {incident.metadata.insuranceClaim && (
                  <button className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded text-sm hover:bg-purple-500/30">
                    Insurance
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {filteredIncidents.length === 0 && (
          <div className="text-center py-8 text-white/50">
            No incidents found
          </div>
        )}

        {/* Quick Actions */}
        <div className="flex space-x-2">
          <button className="flex-1 px-4 py-2 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30 transition-colors">
            <Icon name="Plus" className="w-4 h-4 mr-2 inline" />
            Report Incident
          </button>
          <button className="flex-1 px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30 transition-colors">
            <Icon name="Download" className="w-4 h-4 mr-2 inline" />
            Export Report
          </button>
        </div>
      </div>
    </GlassCard>
  );
};

export default SafetyIncidentTracker;
