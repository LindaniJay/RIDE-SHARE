import React, { useState, useEffect } from 'react';
import { 
  User, 
  CheckCircle, 
  MessageCircle, 
  ChevronRight, 
  Play,
  Send
} from 'lucide-react';

interface HandoverStep {
  id: string;
  title: string;
  description: string;
  status: 'pending' | 'in_progress' | 'completed' | 'skipped';
  required: boolean;
  estimatedTime: number; // in minutes
  participants: ('host' | 'renter')[];
  actions: HandoverAction[];
}

interface HandoverAction {
  id: string;
  type: 'verification' | 'documentation' | 'communication' | 'inspection';
  title: string;
  description: string;
  completed: boolean;
  timestamp?: Date;
  notes?: string;
  photos?: string[];
}

interface VisualHandoverProcessProps {
  handoverType: 'pickup' | 'return';
  hostId: string;
  renterId: string;
  vehicleId: string;
  bookingId: string;
  onComplete: (handoverData: any) => void;
  onCancel: () => void;
}

const VisualHandoverProcess: React.FC<VisualHandoverProcessProps> = ({
  handoverType,
  hostId,
  renterId,
  onComplete,
  onCancel
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [steps, setSteps] = useState<HandoverStep[]>([]);
  const [isActive, setIsActive] = useState(false);
  const [startTime, setStartTime] = useState<Date | null>(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [participantStatus, setParticipantStatus] = useState<Record<string, 'waiting' | 'ready' | 'active'>>({});
  const [messages, setMessages] = useState<Array<{id: string, sender: string, message: string, timestamp: Date}>>([]);
  const [newMessage, setNewMessage] = useState('');

  const handoverSteps = {
    pickup: [
      {
        id: 'meet_and_greet',
        title: 'Meet & Greet',
        description: 'Host and renter meet at the designated location',
        status: 'pending' as const,
        required: true,
        estimatedTime: 5,
        participants: ['host', 'renter'] as const,
        actions: [
          { id: 'location_confirmation', type: 'verification' as const, title: 'Confirm Location', description: 'Verify meeting location', completed: false },
          { id: 'identity_verification', type: 'verification' as const, title: 'Identity Verification', description: 'Verify renter identity', completed: false },
          { id: 'introduction', type: 'communication' as const, title: 'Introduction', description: 'Host introduces themselves', completed: false }
        ]
      },
      {
        id: 'vehicle_inspection',
        title: 'Vehicle Inspection',
        description: 'Thorough inspection of vehicle condition',
        status: 'pending' as const,
        required: true,
        estimatedTime: 15,
        participants: ['host', 'renter'] as const,
        actions: [
          { id: 'exterior_inspection', type: 'inspection' as const, title: 'Exterior Inspection', description: 'Check exterior condition', completed: false },
          { id: 'interior_inspection', type: 'inspection' as const, title: 'Interior Inspection', description: 'Check interior condition', completed: false },
          { id: 'documentation_photos', type: 'documentation' as const, title: 'Documentation Photos', description: 'Take condition photos', completed: false }
        ]
      },
      {
        id: 'document_handover',
        title: 'Document Handover',
        description: 'Transfer vehicle documents and keys',
        status: 'pending' as const,
        required: true,
        estimatedTime: 10,
        participants: ['host', 'renter'] as const,
        actions: [
          { id: 'key_handover', type: 'verification' as const, title: 'Key Handover', description: 'Transfer vehicle keys', completed: false },
          { id: 'registration_handover', type: 'documentation' as const, title: 'Registration Handover', description: 'Provide vehicle registration', completed: false },
          { id: 'insurance_handover', type: 'documentation' as const, title: 'Insurance Handover', description: 'Provide insurance documents', completed: false }
        ]
      },
      {
        id: 'final_verification',
        title: 'Final Verification',
        description: 'Final checks and confirmation',
        status: 'pending' as const,
        required: true,
        estimatedTime: 5,
        participants: ['host', 'renter'] as const,
        actions: [
          { id: 'fuel_level_check', type: 'verification' as const, title: 'Fuel Level Check', description: 'Verify fuel level', completed: false },
          { id: 'mileage_recording', type: 'documentation' as const, title: 'Mileage Recording', description: 'Record starting mileage', completed: false },
          { id: 'final_confirmation', type: 'verification' as const, title: 'Final Confirmation', description: 'Confirm handover completion', completed: false }
        ]
      }
    ],
    return: [
      {
        id: 'meet_for_return',
        title: 'Meet for Return',
        description: 'Host and renter meet for vehicle return',
        status: 'pending' as const,
        required: true,
        estimatedTime: 5,
        participants: ['host', 'renter'] as const,
        actions: [
          { id: 'location_confirmation', type: 'verification' as const, title: 'Confirm Location', description: 'Verify return location', completed: false },
          { id: 'time_confirmation', type: 'verification' as const, title: 'Time Confirmation', description: 'Confirm return time', completed: false }
        ]
      },
      {
        id: 'return_inspection',
        title: 'Return Inspection',
        description: 'Inspect vehicle condition on return',
        status: 'pending' as const,
        required: true,
        estimatedTime: 15,
        participants: ['host', 'renter'] as const,
        actions: [
          { id: 'exterior_return_check', type: 'inspection' as const, title: 'Exterior Return Check', description: 'Check exterior condition', completed: false },
          { id: 'interior_return_check', type: 'inspection' as const, title: 'Interior Return Check', description: 'Check interior condition', completed: false },
          { id: 'damage_assessment', type: 'inspection' as const, title: 'Damage Assessment', description: 'Assess any new damage', completed: false }
        ]
      },
      {
        id: 'document_return',
        title: 'Document Return',
        description: 'Return vehicle documents and keys',
        status: 'pending' as const,
        required: true,
        estimatedTime: 10,
        participants: ['host', 'renter'] as const,
        actions: [
          { id: 'key_return', type: 'verification' as const, title: 'Key Return', description: 'Return vehicle keys', completed: false },
          { id: 'document_return', type: 'documentation' as const, title: 'Document Return', description: 'Return all documents', completed: false },
          { id: 'personal_items_check', type: 'verification' as const, title: 'Personal Items Check', description: 'Check for personal items', completed: false }
        ]
      },
      {
        id: 'final_settlement',
        title: 'Final Settlement',
        description: 'Finalize return and settlement',
        status: 'pending' as const,
        required: true,
        estimatedTime: 10,
        participants: ['host', 'renter'] as const,
        actions: [
          { id: 'final_mileage', type: 'documentation' as const, title: 'Final Mileage', description: 'Record final mileage', completed: false },
          { id: 'fuel_level_final', type: 'verification' as const, title: 'Final Fuel Level', description: 'Check final fuel level', completed: false },
          { id: 'settlement_confirmation', type: 'verification' as const, title: 'Settlement Confirmation', description: 'Confirm final settlement', completed: false }
        ]
      }
    ]
  };

  useEffect(() => {
    setSteps(handoverSteps[handoverType].map(step => ({
      ...step,
      participants: [...step.participants] as ("renter" | "host")[]
    })));
    setParticipantStatus({
      [hostId]: 'waiting',
      [renterId]: 'waiting'
    });
  }, [handoverType, hostId, renterId]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isActive && startTime) {
      interval = setInterval(() => {
        setElapsedTime(Math.floor((new Date().getTime() - startTime.getTime()) / 1000));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isActive, startTime]);

  const startHandover = () => {
    setIsActive(true);
    setStartTime(new Date());
    setCurrentStep(0);
    setSteps(prev => prev.map((step, index) => ({
      ...step,
      status: index === 0 ? 'in_progress' : 'pending'
    })));
  };

  const completeStep = (stepIndex: number) => {
    setSteps(prev => prev.map((step, index) => {
      if (index === stepIndex) {
        return { ...step, status: 'completed' };
      } else if (index === stepIndex + 1) {
        return { ...step, status: 'in_progress' };
      }
      return step;
    }));

    if (stepIndex < steps.length - 1) {
      setCurrentStep(stepIndex + 1);
    } else {
      // All steps completed
      onComplete({
        handoverType,
        steps: steps,
        duration: elapsedTime,
        completedAt: new Date()
      });
    }
  };

  const completeAction = (stepIndex: number, actionIndex: number) => {
    setSteps(prev => prev.map((step, index) => {
      if (index === stepIndex) {
        return {
          ...step,
          actions: step.actions.map((action, actIndex) => 
            actIndex === actionIndex 
              ? { ...action, completed: true, timestamp: new Date() }
              : action
          )
        };
      }
      return step;
    }));
  };

  const sendMessage = () => {
    if (newMessage.trim()) {
      setMessages(prev => [...prev, {
        id: `msg_${Date.now()}`,
        sender: 'You',
        message: newMessage,
        timestamp: new Date()
      }]);
      setNewMessage('');
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const currentStepData = steps[currentStep];
  const isStepComplete = currentStepData?.actions.every(action => action.completed) || false;
  const progressPercentage = ((currentStep + 1) / steps.length) * 100;

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              {handoverType === 'pickup' ? 'Vehicle Pickup Handover' : 'Vehicle Return Handover'}
            </h2>
            <p className="text-gray-600">
              Step-by-step handover process between host and renter
            </p>
          </div>
          
          {isActive && (
            <div className="text-right">
              <div className="text-2xl font-bold text-blue-600">
                {formatTime(elapsedTime)}
              </div>
              <div className="text-sm text-gray-500">Elapsed Time</div>
            </div>
          )}
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
          <div 
            className="bg-blue-600 h-3 rounded-full transition-all duration-500"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
        
        <div className="flex justify-between text-sm text-gray-600">
          <span>Step {currentStep + 1} of {steps.length}</span>
          <span>{Math.round(progressPercentage)}% Complete</span>
        </div>
      </div>

      {/* Participant Status */}
      <div className="mb-6 p-4 bg-gray-50 rounded-lg">
        <h3 className="font-semibold text-gray-800 mb-3">Participant Status</h3>
        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <User className="w-5 h-5 text-blue-600" />
            <span className="font-medium">Host</span>
            <div className={`w-3 h-3 rounded-full ${
              participantStatus[hostId] === 'active' ? 'bg-green-500' :
              participantStatus[hostId] === 'ready' ? 'bg-yellow-500' :
              'bg-gray-400'
            }`} />
          </div>
          <div className="flex items-center gap-2">
            <User className="w-5 h-5 text-green-600" />
            <span className="font-medium">Renter</span>
            <div className={`w-3 h-3 rounded-full ${
              participantStatus[renterId] === 'active' ? 'bg-green-500' :
              participantStatus[renterId] === 'ready' ? 'bg-yellow-500' :
              'bg-gray-400'
            }`} />
          </div>
        </div>
      </div>

      {/* Current Step */}
      {currentStepData && (
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
              currentStepData.status === 'completed' ? 'bg-green-100 text-green-600' :
              currentStepData.status === 'in_progress' ? 'bg-blue-100 text-blue-600' :
              'bg-gray-100 text-gray-600'
            }`}>
              {currentStepData.status === 'completed' ? (
                <CheckCircle className="w-5 h-5" />
              ) : (
                <span className="font-bold">{currentStep + 1}</span>
              )}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                {currentStepData.title}
              </h3>
              <p className="text-gray-600">{currentStepData.description}</p>
            </div>
          </div>

          {/* Step Actions */}
          <div className="space-y-3">
            {currentStepData.actions.map((action, actionIndex) => (
              <div
                key={action.id}
                className={`p-4 rounded-lg border-2 transition-all ${
                  action.completed 
                    ? 'border-green-200 bg-green-50' 
                    : 'border-gray-200 hover:border-blue-300'
                }`}
              >
                <div className="flex items-start gap-3">
                  <button
                    onClick={() => completeAction(currentStep, actionIndex)}
                    className={`mt-1 transition-colors ${
                      action.completed ? 'text-green-600' : 'text-gray-400 hover:text-blue-600'
                    }`}
                  >
                    {action.completed ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : (
                      <div className="w-5 h-5 border-2 border-gray-300 rounded-full" />
                    )}
                  </button>
                  
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-800">{action.title}</h4>
                    <p className="text-sm text-gray-600">{action.description}</p>
                    {action.completed && action.timestamp && (
                      <p className="text-xs text-gray-500 mt-1">
                        Completed at {action.timestamp.toLocaleTimeString()}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Communication Panel */}
      <div className="mb-6 p-4 bg-gray-50 rounded-lg">
        <h3 className="font-semibold text-gray-800 mb-3">Communication</h3>
        
        <div className="space-y-3 mb-4 max-h-40 overflow-y-auto">
          {messages.map((message) => (
            <div key={message.id} className="flex items-start gap-2">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <MessageCircle className="w-4 h-4 text-blue-600" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium text-sm">{message.sender}</span>
                  <span className="text-xs text-gray-500">
                    {message.timestamp.toLocaleTimeString()}
                  </span>
                </div>
                <p className="text-sm text-gray-700">{message.message}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex gap-2">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
          />
          <button
            onClick={sendMessage}
            className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center">
        <button
          onClick={onCancel}
          className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
        >
          Cancel Handover
        </button>
        
        <div className="flex gap-4">
          {!isActive ? (
            <button
              onClick={startHandover}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              <Play className="w-4 h-4" />
              Start Handover
            </button>
          ) : (
            <button
              onClick={() => completeStep(currentStep)}
              disabled={!isStepComplete}
              className={`px-6 py-2 rounded-lg transition-colors flex items-center gap-2 ${
                isStepComplete
                  ? 'bg-green-600 text-white hover:bg-green-700'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              {currentStep === steps.length - 1 ? 'Complete Handover' : 'Next Step'}
              <ChevronRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default VisualHandoverProcess;
