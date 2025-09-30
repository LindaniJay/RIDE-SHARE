import React, { useState } from 'react';
import Icon from './Icon';

interface SafetyInsuranceProps {
  bookingId?: number;
  vehicleId?: number;
}

const SafetyInsurance: React.FC<SafetyInsuranceProps> = () => {
  const [activeTab, setActiveTab] = useState('coverage');
  const [emergencyContacts] = useState([
    { name: 'Emergency Services', number: '10111', type: 'emergency' },
    { name: 'RideShare Support', number: '+27 11 123 4567', type: 'support' },
    { name: 'Insurance Claims', number: '+27 11 987 6543', type: 'insurance' }
  ]);

  const safetyGuidelines = [
    {
      title: 'Pre-Rental Inspection',
      items: [
        'Check vehicle exterior for any damage',
        'Verify all lights and signals work',
        'Test brakes and steering',
        'Check tire condition and pressure',
        'Verify fuel level and gauge accuracy'
      ]
    },
    {
      title: 'During Rental',
      items: [
        'Always wear seatbelts',
        'Follow speed limits and traffic rules',
        'No drinking and driving',
        'Keep vehicle locked when unattended',
        'Report any issues immediately'
      ]
    },
    {
      title: 'Post-Rental',
      items: [
        'Return vehicle in same condition',
        'Report any accidents or incidents',
        'Complete return inspection',
        'Keep all receipts and documentation'
      ]
    }
  ];

  const insuranceCoverage = {
    comprehensive: {
      name: 'Comprehensive Coverage',
      description: 'Full protection including collision, theft, and third-party liability',
      coverage: [
        'Vehicle damage up to R500,000',
        'Third-party liability up to R2,000,000',
        'Theft protection',
        'Fire and natural disaster coverage',
        '24/7 roadside assistance'
      ],
      premium: 'Included in rental'
    },
    basic: {
      name: 'Basic Coverage',
      description: 'Essential protection with higher excess',
      coverage: [
        'Third-party liability up to R1,000,000',
        'Basic theft protection',
        'Limited roadside assistance'
      ],
      premium: 'Included in rental'
    }
  };

  const handleEmergencyCall = (number: string) => {
    window.open(`tel:${number}`, '_self');
  };

  const handleIncidentReport = () => {
    // In a real implementation, this would open an incident reporting form
    alert('Incident reporting form would open here');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
        <div className="flex items-center space-x-3 mb-4">
          <Icon name="Shield" size="lg" className="text-green-400" />
          <div>
            <h2 className="text-xl font-semibold text-white">Safety & Insurance</h2>
            <p className="text-white/70">Your protection and peace of mind</p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-1 bg-white/10 rounded-lg p-1">
          {[
            { id: 'coverage', label: 'Insurance Coverage', icon: 'Shield' },
            { id: 'safety', label: 'Safety Guidelines', icon: 'AlertTriangle' },
            { id: 'emergency', label: 'Emergency Contacts', icon: 'Phone' },
            { id: 'incident', label: 'Report Incident', icon: 'FileText' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm transition-all ${
                activeTab === tab.id
                  ? 'bg-white/20 text-white'
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              <Icon name={tab.icon} className="h-4 w-4" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Insurance Coverage Tab */}
      {activeTab === 'coverage' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Comprehensive Coverage */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="flex items-center space-x-3 mb-4">
                <Icon name="Shield" size="lg" className="text-blue-400" />
                <div>
                  <h3 className="text-lg font-semibold text-white">{insuranceCoverage.comprehensive.name}</h3>
                  <p className="text-white/70 text-sm">{insuranceCoverage.comprehensive.description}</p>
                </div>
              </div>
              
              <div className="space-y-3">
                {insuranceCoverage.comprehensive.coverage.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Icon name="CheckCircle" size="sm" className="text-green-400 mt-0.5" />
                    <span className="text-white/80 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 p-3 bg-green-500/10 border border-green-400/30 rounded-lg">
                <p className="text-green-200 text-sm font-medium">
                  Premium: {insuranceCoverage.comprehensive.premium}
                </p>
              </div>
            </div>

            {/* Basic Coverage */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="flex items-center space-x-3 mb-4">
                <Icon name="Shield" size="lg" className="text-yellow-400" />
                <div>
                  <h3 className="text-lg font-semibold text-white">{insuranceCoverage.basic.name}</h3>
                  <p className="text-white/70 text-sm">{insuranceCoverage.basic.description}</p>
                </div>
              </div>
              
              <div className="space-y-3">
                {insuranceCoverage.basic.coverage.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Icon name="CheckCircle" size="sm" className="text-green-400 mt-0.5" />
                    <span className="text-white/80 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 p-3 bg-yellow-500/10 border border-yellow-400/30 rounded-lg">
                <p className="text-yellow-200 text-sm font-medium">
                  Premium: {insuranceCoverage.basic.premium}
                </p>
              </div>
            </div>
          </div>

          {/* Insurance Terms */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
            <h3 className="text-lg font-semibold text-white mb-4">Important Terms</h3>
            <div className="space-y-3 text-sm text-white/80">
              <p>• Coverage is valid for the duration of your rental period only</p>
              <p>• Excess amounts apply for claims (R2,500 for comprehensive, R5,000 for basic)</p>
              <p>• Claims must be reported within 24 hours of incident</p>
              <p>• Coverage excludes damage from reckless driving or illegal activities</p>
              <p>• Personal belongings are not covered under vehicle insurance</p>
            </div>
          </div>
        </div>
      )}

      {/* Safety Guidelines Tab */}
      {activeTab === 'safety' && (
        <div className="space-y-6">
          {safetyGuidelines.map((section, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <h3 className="text-lg font-semibold text-white mb-4">{section.title}</h3>
              <div className="space-y-3">
                {section.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-start space-x-3">
                    <Icon name="CheckCircle" size="sm" className="text-green-400 mt-0.5" />
                    <span className="text-white/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Safety Tips */}
          <div className="bg-blue-500/10 border border-blue-400/30 rounded-xl p-6">
            <div className="flex items-center space-x-3 mb-3">
              <Icon name="Info" size="lg" className="text-blue-400" />
              <h3 className="text-lg font-semibold text-white">Safety Tips</h3>
            </div>
            <div className="space-y-2 text-sm text-white/80">
              <p>• Always inspect the vehicle before driving</p>
              <p>• Keep emergency contacts handy</p>
              <p>• Report any suspicious activity immediately</p>
              <p>• Follow all traffic laws and speed limits</p>
              <p>• Never drive under the influence of alcohol or drugs</p>
            </div>
          </div>
        </div>
      )}

      {/* Emergency Contacts Tab */}
      {activeTab === 'emergency' && (
        <div className="space-y-6">
          <div className="bg-red-500/10 border border-red-400/30 rounded-xl p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Icon name="AlertTriangle" size="lg" className="text-red-400" />
              <div>
                <h3 className="text-lg font-semibold text-white">Emergency Contacts</h3>
                <p className="text-white/70 text-sm">Available 24/7 for your safety</p>
              </div>
            </div>
            
            <div className="space-y-3">
              {emergencyContacts.map((contact, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                  <div>
                    <p className="text-white font-medium">{contact.name}</p>
                    <p className="text-white/70 text-sm">{contact.number}</p>
                  </div>
                  <button
                    onClick={() => handleEmergencyCall(contact.number)}
                    className="flex items-center space-x-2 px-4 py-2 bg-red-500/20 text-red-200 rounded-lg hover:bg-red-500/30 transition-colors"
                  >
                    <Icon name="Phone" size="sm" />
                    <span>Call</span>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button
              onClick={() => handleEmergencyCall('10111')}
              className="p-4 bg-red-500/20 border border-red-400/30 rounded-lg hover:bg-red-500/30 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <Icon name="Phone" size="lg" className="text-red-400" />
                <div className="text-left">
                  <p className="text-white font-semibold">Emergency Services</p>
                  <p className="text-white/70 text-sm">Police, Fire, Ambulance</p>
                </div>
              </div>
            </button>

            <button
              onClick={() => handleEmergencyCall('+27 11 123 4567')}
              className="p-4 bg-blue-500/20 border border-blue-400/30 rounded-lg hover:bg-blue-500/30 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <Icon name="Phone" size="lg" className="text-blue-400" />
                <div className="text-left">
                  <p className="text-white font-semibold">RideShare Support</p>
                  <p className="text-white/70 text-sm">24/7 Customer Support</p>
                </div>
              </div>
            </button>
          </div>
        </div>
      )}

      {/* Incident Reporting Tab */}
      {activeTab === 'incident' && (
        <div className="space-y-6">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
            <div className="flex items-center space-x-3 mb-4">
              <Icon name="FileText" size="lg" className="text-orange-400" />
              <div>
                <h3 className="text-lg font-semibold text-white">Report an Incident</h3>
                <p className="text-white/70 text-sm">Report accidents, damage, or safety concerns</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button
                  onClick={handleIncidentReport}
                  className="p-4 bg-orange-500/20 border border-orange-400/30 rounded-lg hover:bg-orange-500/30 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <Icon name="AlertTriangle" size="lg" className="text-orange-400" />
                    <div className="text-left">
                      <p className="text-white font-semibold">Accident Report</p>
                      <p className="text-white/70 text-sm">Vehicle damage or collision</p>
                    </div>
                  </div>
                </button>

                <button
                  onClick={handleIncidentReport}
                  className="p-4 bg-yellow-500/20 border border-yellow-400/30 rounded-lg hover:bg-yellow-500/30 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <Icon name="AlertCircle" size="lg" className="text-yellow-400" />
                    <div className="text-left">
                      <p className="text-white font-semibold">Safety Concern</p>
                      <p className="text-white/70 text-sm">Report safety issues</p>
                    </div>
                  </div>
                </button>
              </div>

              <div className="bg-yellow-500/10 border border-yellow-400/30 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <Icon name="Info" size="sm" className="text-yellow-400 mt-0.5" />
                  <div className="text-sm text-white/80">
                    <p className="font-medium mb-1">Important:</p>
                    <p>All incidents must be reported within 24 hours. Take photos of any damage and gather witness information if possible.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SafetyInsurance;
