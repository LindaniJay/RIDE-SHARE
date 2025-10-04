import React, { useState, useEffect } from 'react';
import { 
  CheckCircle, 
  Clock, 
  XCircle, 
  AlertCircle, 
  User, 
  Car, 
  CreditCard, 
  Calendar,
  MessageCircle,
  Phone,
  MapPin,
  Star
} from 'lucide-react';

interface WorkflowStep {
  id: string;
  title: string;
  description: string;
  status: 'completed' | 'current' | 'pending' | 'skipped' | 'error';
  timestamp?: Date;
  actor: 'renter' | 'host' | 'admin' | 'system';
  data?: any;
}

interface BookingWorkflowTrackerProps {
  bookingId: string;
  userRole: 'renter' | 'host' | 'admin';
  onStepComplete?: (stepId: string, data?: any) => void;
  onStepError?: (stepId: string, error: string) => void;
}

const BookingWorkflowTracker: React.FC<BookingWorkflowTrackerProps> = ({
  bookingId,
  userRole,
  onStepComplete,
  onStepError
}) => {
  const [workflowSteps, setWorkflowSteps] = useState<WorkflowStep[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentStep, setCurrentStep] = useState<WorkflowStep | null>(null);

  // Mock workflow steps based on booking status
  const getWorkflowSteps = (bookingStatus: string): WorkflowStep[] => {
    const baseSteps: WorkflowStep[] = [
      {
        id: 'booking_created',
        title: 'Booking Request Created',
        description: 'Renter submits booking request',
        status: 'completed',
        timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
        actor: 'renter'
      },
      {
        id: 'payment_processed',
        title: 'Payment Processed',
        description: 'Payment has been successfully processed',
        status: 'completed',
        timestamp: new Date(Date.now() - 1.5 * 60 * 60 * 1000), // 1.5 hours ago
        actor: 'system'
      },
      {
        id: 'host_notification',
        title: 'Host Notified',
        description: 'Host has been notified of the booking request',
        status: 'completed',
        timestamp: new Date(Date.now() - 1 * 60 * 60 * 1000), // 1 hour ago
        actor: 'system'
      }
    ];

    if (bookingStatus === 'pending') {
      return [
        ...baseSteps,
        {
          id: 'host_approval',
          title: 'Awaiting Host Approval',
          description: 'Host needs to approve or decline the booking',
          status: 'current',
          actor: 'host'
        },
        {
          id: 'vehicle_preparation',
          title: 'Vehicle Preparation',
          description: 'Host prepares vehicle for rental',
          status: 'pending',
          actor: 'host'
        },
        {
          id: 'pickup_handover',
          title: 'Pickup Handover',
          description: 'Vehicle handover to renter',
          status: 'pending',
          actor: 'host'
        },
        {
          id: 'rental_period',
          title: 'Active Rental',
          description: 'Rental period in progress',
          status: 'pending',
          actor: 'renter'
        },
        {
          id: 'return_handover',
          title: 'Return Handover',
          description: 'Vehicle return to host',
          status: 'pending',
          actor: 'renter'
        },
        {
          id: 'booking_complete',
          title: 'Booking Completed',
          description: 'Rental process completed',
          status: 'pending',
          actor: 'system'
        }
      ];
    } else if (bookingStatus === 'confirmed') {
      return [
        ...baseSteps,
        {
          id: 'host_approval',
          title: 'Host Approved',
          description: 'Host has approved the booking',
          status: 'completed',
          timestamp: new Date(Date.now() - 30 * 60 * 1000), // 30 minutes ago
          actor: 'host'
        },
        {
          id: 'vehicle_preparation',
          title: 'Vehicle Preparation',
          description: 'Host prepares vehicle for rental',
          status: 'current',
          actor: 'host'
        },
        {
          id: 'pickup_handover',
          title: 'Pickup Handover',
          description: 'Vehicle handover to renter',
          status: 'pending',
          actor: 'host'
        },
        {
          id: 'rental_period',
          title: 'Active Rental',
          description: 'Rental period in progress',
          status: 'pending',
          actor: 'renter'
        },
        {
          id: 'return_handover',
          title: 'Return Handover',
          description: 'Vehicle return to host',
          status: 'pending',
          actor: 'renter'
        },
        {
          id: 'booking_complete',
          title: 'Booking Completed',
          description: 'Rental process completed',
          status: 'pending',
          actor: 'system'
        }
      ];
    } else if (bookingStatus === 'cancelled') {
      return [
        ...baseSteps,
        {
          id: 'host_approval',
          title: 'Booking Cancelled',
          description: 'Booking has been cancelled',
          status: 'error',
          timestamp: new Date(Date.now() - 15 * 60 * 1000), // 15 minutes ago
          actor: 'host',
          data: { reason: 'Vehicle not available' }
        }
      ];
    } else if (bookingStatus === 'completed') {
      return [
        ...baseSteps,
        {
          id: 'host_approval',
          title: 'Host Approved',
          description: 'Host has approved the booking',
          status: 'completed',
          timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
          actor: 'host'
        },
        {
          id: 'vehicle_preparation',
          title: 'Vehicle Prepared',
          description: 'Host prepared vehicle for rental',
          status: 'completed',
          timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000 + 30 * 60 * 1000), // 2 days ago + 30 min
          actor: 'host'
        },
        {
          id: 'pickup_handover',
          title: 'Pickup Completed',
          description: 'Vehicle handed over to renter',
          status: 'completed',
          timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000 + 60 * 60 * 1000), // 2 days ago + 1 hour
          actor: 'host'
        },
        {
          id: 'rental_period',
          title: 'Rental Completed',
          description: 'Rental period completed',
          status: 'completed',
          timestamp: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000), // 1 day ago
          actor: 'renter'
        },
        {
          id: 'return_handover',
          title: 'Return Completed',
          description: 'Vehicle returned to host',
          status: 'completed',
          timestamp: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000 + 30 * 60 * 1000), // 1 day ago + 30 min
          actor: 'renter'
        },
        {
          id: 'booking_complete',
          title: 'Booking Completed',
          description: 'Rental process completed successfully',
          status: 'completed',
          timestamp: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000 + 60 * 60 * 1000), // 1 day ago + 1 hour
          actor: 'system'
        }
      ];
    }

    return baseSteps;
  };

  useEffect(() => {
    fetchWorkflowSteps();
  }, [bookingId]);

  const fetchWorkflowSteps = async () => {
    setLoading(true);
    try {
      // Simulate API call to get booking status
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Mock booking status - in real app, this would come from API
      const bookingStatus = 'pending'; // or 'confirmed', 'cancelled', 'completed'
      const steps = getWorkflowSteps(bookingStatus);
      
      setWorkflowSteps(steps);
      
      // Find current step
      const current = steps.find(step => step.status === 'current');
      setCurrentStep(current || null);
    } catch (error) {
      console.error('Error fetching workflow steps:', error);
    } finally {
      setLoading(false);
    }
  };

  const getStepIcon = (step: WorkflowStep) => {
    switch (step.status) {
      case 'completed':
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'current':
        return <Clock className="w-5 h-5 text-blue-600" />;
      case 'error':
        return <XCircle className="w-5 h-5 text-red-600" />;
      case 'skipped':
        return <XCircle className="w-5 h-5 text-gray-400" />;
      default:
        return <Clock className="w-5 h-5 text-gray-400" />;
    }
  };

  const getActorIcon = (actor: string) => {
    switch (actor) {
      case 'renter':
        return <User className="w-4 h-4 text-blue-600" />;
      case 'host':
        return <Car className="w-4 h-4 text-green-600" />;
      case 'admin':
        return <AlertCircle className="w-4 h-4 text-purple-600" />;
      case 'system':
        return <CreditCard className="w-4 h-4 text-gray-600" />;
      default:
        return <Clock className="w-4 h-4 text-gray-600" />;
    }
  };

  const getActorName = (actor: string) => {
    switch (actor) {
      case 'renter':
        return 'Renter';
      case 'host':
        return 'Host';
      case 'admin':
        return 'Admin';
      case 'system':
        return 'System';
      default:
        return 'Unknown';
    }
  };

  const formatTimeAgo = (timestamp: Date) => {
    const now = new Date();
    const diff = now.getTime() - timestamp.getTime();
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);

    if (minutes < 1) return 'Just now';
    if (minutes < 60) return `${minutes}m ago`;
    if (hours < 24) return `${hours}h ago`;
    return `${days}d ago`;
  };

  const getProgressPercentage = () => {
    const completedSteps = workflowSteps.filter(step => step.status === 'completed').length;
    return (completedSteps / workflowSteps.length) * 100;
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-32">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border p-6">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-800">Booking Workflow</h3>
          <div className="text-sm text-gray-600">
            {Math.round(getProgressPercentage())}% Complete
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
          <div 
            className="bg-blue-600 h-2 rounded-full transition-all duration-500"
            style={{ width: `${getProgressPercentage()}%` }}
          />
        </div>
        
        {currentStep && (
          <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
            <div className="flex items-center gap-2 mb-1">
              <Clock className="w-4 h-4 text-blue-600" />
              <span className="font-medium text-blue-800">Current Step</span>
            </div>
            <p className="text-blue-700 text-sm">{currentStep.title}</p>
            <p className="text-blue-600 text-xs">{currentStep.description}</p>
          </div>
        )}
      </div>

      {/* Workflow Steps */}
      <div className="space-y-4">
        {workflowSteps.map((step, index) => (
          <div
            key={step.id}
            className={`flex items-start gap-4 p-4 rounded-lg border transition-all ${
              step.status === 'completed' ? 'bg-green-50 border-green-200' :
              step.status === 'current' ? 'bg-blue-50 border-blue-200' :
              step.status === 'error' ? 'bg-red-50 border-red-200' :
              'bg-gray-50 border-gray-200'
            }`}
          >
            <div className="flex-shrink-0 mt-1">
              {getStepIcon(step)}
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <h4 className={`font-medium ${
                  step.status === 'completed' ? 'text-green-800' :
                  step.status === 'current' ? 'text-blue-800' :
                  step.status === 'error' ? 'text-red-800' :
                  'text-gray-600'
                }`}>
                  {step.title}
                </h4>
                <div className="flex items-center gap-1">
                  {getActorIcon(step.actor)}
                  <span className="text-xs text-gray-500">{getActorName(step.actor)}</span>
                </div>
              </div>
              
              <p className={`text-sm ${
                step.status === 'completed' ? 'text-green-700' :
                step.status === 'current' ? 'text-blue-700' :
                step.status === 'error' ? 'text-red-700' :
                'text-gray-500'
              }`}>
                {step.description}
              </p>
              
              {step.timestamp && (
                <p className="text-xs text-gray-500 mt-1">
                  {formatTimeAgo(step.timestamp)}
                </p>
              )}
              
              {step.data && step.data.reason && (
                <div className="mt-2 p-2 bg-red-100 border border-red-200 rounded text-sm text-red-700">
                  <strong>Reason:</strong> {step.data.reason}
                </div>
              )}
            </div>
            
            {step.status === 'current' && userRole === step.actor && (
              <div className="flex-shrink-0">
                <button
                  onClick={() => onStepComplete?.(step.id)}
                  className="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700 transition-colors"
                >
                  Complete
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      {currentStep && (
        <div className="mt-6 flex gap-3">
          {userRole === 'host' && currentStep.actor === 'host' && (
            <>
              <button
                onClick={() => onStepComplete?.(currentStep.id, { action: 'approve' })}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                Approve Booking
              </button>
              <button
                onClick={() => onStepError?.(currentStep.id, 'Booking declined')}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                Decline Booking
              </button>
            </>
          )}
          
          {userRole === 'renter' && currentStep.actor === 'renter' && (
            <button
              onClick={() => onStepComplete?.(currentStep.id)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Mark as Complete
            </button>
          )}
          
          {userRole === 'admin' && (
            <div className="flex gap-2">
              <button
                onClick={() => onStepComplete?.(currentStep.id, { action: 'admin_override' })}
                className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                Admin Override
              </button>
              <button
                onClick={() => onStepError?.(currentStep.id, 'Admin intervention required')}
                className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
              >
                Flag Issue
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default BookingWorkflowTracker;
