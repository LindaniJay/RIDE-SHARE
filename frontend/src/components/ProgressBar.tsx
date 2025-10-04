import React from 'react';
import { CheckCircle, Circle, Clock } from 'lucide-react';

interface ProgressStep {
  id: string;
  title: string;
  description: string;
  status: 'completed' | 'current' | 'pending' | 'error';
  optional?: boolean;
}

interface ProgressBarProps {
  steps: ProgressStep[];
  currentStep: number;
  onStepClick?: (stepIndex: number) => void;
  showStepNumbers?: boolean;
  variant?: 'default' | 'compact' | 'detailed';
  className?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  steps,
  currentStep,
  onStepClick,
  showStepNumbers = true,
  variant = 'default',
  className = ''
}) => {
  const getStepIcon = (step: ProgressStep, index: number) => {
    if (step.status === 'completed') {
      return <CheckCircle className="w-5 h-5 text-green-600" />;
    } else if (step.status === 'current') {
      return <Circle className="w-5 h-5 text-blue-600 fill-blue-600" />;
    } else if (step.status === 'error') {
      return <Circle className="w-5 h-5 text-red-600 fill-red-600" />;
    } else {
      return <Clock className="w-5 h-5 text-gray-400" />;
    }
  };

  const getStepStatus = (index: number) => {
    if (index < currentStep) return 'completed';
    if (index === currentStep) return 'current';
    return 'pending';
  };

  const getProgressPercentage = () => {
    const completedSteps = steps.filter(step => step.status === 'completed').length;
    return (completedSteps / steps.length) * 100;
  };

  if (variant === 'compact') {
    return (
      <div className={`w-full ${className}`}>
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">
            Step {currentStep + 1} of {steps.length}
          </span>
          <span className="text-sm text-gray-500">
            {Math.round(getProgressPercentage())}% Complete
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-blue-600 h-2 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${getProgressPercentage()}%` }}
          />
        </div>
      </div>
    );
  }

  if (variant === 'detailed') {
    return (
      <div className={`w-full ${className}`}>
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-lg font-semibold text-gray-800">Registration Progress</h3>
            <span className="text-sm text-gray-600">
              {Math.round(getProgressPercentage())}% Complete
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className="bg-gradient-to-r from-blue-500 to-green-500 h-3 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${getProgressPercentage()}%` }}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {steps.map((step, index) => {
            const stepStatus = getStepStatus(index);
            const isClickable = onStepClick && (stepStatus === 'completed' || index === currentStep);
            
            return (
              <div
                key={step.id}
                onClick={() => isClickable && onStepClick?.(index)}
                className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                  stepStatus === 'completed'
                    ? 'border-green-200 bg-green-50'
                    : stepStatus === 'current'
                    ? 'border-blue-200 bg-blue-50'
                    : 'border-gray-200 bg-gray-50'
                } ${isClickable ? 'cursor-pointer hover:shadow-md' : 'cursor-default'}`}
              >
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    {getStepIcon(step, index)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      {showStepNumbers && (
                        <span className="text-sm font-medium text-gray-500">
                          {index + 1}.
                        </span>
                      )}
                      <h4 className={`font-medium ${
                        stepStatus === 'completed' ? 'text-green-800' :
                        stepStatus === 'current' ? 'text-blue-800' :
                        'text-gray-600'
                      }`}>
                        {step.title}
                      </h4>
                      {step.optional && (
                        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                          Optional
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // Default variant
  return (
    <div className={`w-full ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Registration Progress</h3>
        <span className="text-sm text-gray-600">
          Step {currentStep + 1} of {steps.length} ({Math.round(getProgressPercentage())}%)
        </span>
      </div>

      <div className="relative">
        {/* Progress Line */}
        <div className="absolute top-6 left-0 right-0 h-0.5 bg-gray-200">
          <div 
            className="h-0.5 bg-blue-600 transition-all duration-500 ease-out"
            style={{ width: `${getProgressPercentage()}%` }}
          />
        </div>

        {/* Steps */}
        <div className="relative flex justify-between">
          {steps.map((step, index) => {
            const stepStatus = getStepStatus(index);
            const isClickable = onStepClick && (stepStatus === 'completed' || index === currentStep);
            
            return (
              <div
                key={step.id}
                onClick={() => isClickable && onStepClick?.(index)}
                className={`flex flex-col items-center ${
                  isClickable ? 'cursor-pointer' : 'cursor-default'
                }`}
              >
                <div className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-200 ${
                  stepStatus === 'completed'
                    ? 'bg-green-600 border-green-600 text-white'
                    : stepStatus === 'current'
                    ? 'bg-blue-600 border-blue-600 text-white'
                    : 'bg-white border-gray-300 text-gray-400'
                }`}>
                  {stepStatus === 'completed' ? (
                    <CheckCircle className="w-6 h-6" />
                  ) : (
                    <span className="text-sm font-bold">{index + 1}</span>
                  )}
                </div>
                
                <div className="mt-2 text-center max-w-24">
                  <h4 className={`text-xs font-medium ${
                    stepStatus === 'completed' ? 'text-green-600' :
                    stepStatus === 'current' ? 'text-blue-600' :
                    'text-gray-500'
                  }`}>
                    {step.title}
                  </h4>
                  {step.optional && (
                    <span className="text-xs text-gray-400">(Optional)</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
