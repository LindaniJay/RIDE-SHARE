import React from 'react';
import { motion } from 'framer-motion';
import Icon from './Icon';
import { progressVariants } from '../utils/motionVariants';

interface ProgressStep {
  id: string;
  label: string;
  icon: string;
  status: 'completed' | 'current' | 'upcoming';
  description?: string;
}

interface ProgressTrackerProps {
  steps: ProgressStep[];
  currentStep: string;
  className?: string;
  animated?: boolean;
}

const ProgressTracker: React.FC<ProgressTrackerProps> = ({
  steps,
  currentStep,
  className = '',
  animated = true
}) => {
  const currentStepIndex = steps.findIndex(step => step.id === currentStep);

  const getStepStyles = (step: ProgressStep) => {
    if (step.status === 'completed') {
      return 'bg-primary-500 text-white border-primary-500 shadow-glow';
    } else if (step.status === 'current') {
      return 'bg-primary-500/20 text-primary-400 border-primary-500/50 shadow-glow animate-pulse';
    } else {
      return 'bg-white/10 text-white/50 border-white/20';
    }
  };

  // const getConnectorStyles = (index: number) => {
  //   if (index < currentStepIndex) {
  //     return 'bg-primary-500';
  //   } else {
  //     return 'bg-white/20';
  //   }
  // };

  return (
    <div className={`w-full ${className}`}>
      <div className="flex items-center justify-between relative">
        {/* Background line */}
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white/20 -translate-y-1/2" />
        
        {/* Progress line */}
        <motion.div
          className="absolute top-1/2 left-0 h-0.5 bg-primary-500 -translate-y-1/2"
          initial={{ width: '0%' }}
          animate={{ 
            width: currentStepIndex >= 0 ? `${(currentStepIndex / (steps.length - 1)) * 100}%` : '0%' 
          }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        />

        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            className="relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="flex flex-col items-center space-y-2">
              {/* Step circle */}
              <motion.div
                className={`
                  w-12 h-12 rounded-full border-2 flex items-center justify-center
                  transition-all duration-300 ease-in-out
                  ${getStepStyles(step)}
                `}
                variants={animated ? progressVariants : undefined}
                animate={step.status === 'current' ? 'animate' : undefined}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {step.status === 'completed' ? (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  >
                    <Icon name="Check" size="sm" />
                  </motion.div>
                ) : (
                  <Icon name={step.icon} size="sm" />
                )}
              </motion.div>

              {/* Step label */}
              <div className="text-center">
                <div className={`text-sm font-medium ${
                  step.status === 'completed' ? 'text-primary-400' :
                  step.status === 'current' ? 'text-primary-400' :
                  'text-white/70'
                }`}>
                  {step.label}
                </div>
                {step.description && (
                  <div className="text-xs text-white/50 mt-1 max-w-24">
                    {step.description}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Current step description */}
      {steps[currentStepIndex]?.description && (
        <motion.div
          className="mt-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="glass-3 rounded-xl p-4">
            <p className="text-white/80 text-sm font-body">
              {steps[currentStepIndex].description}
            </p>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ProgressTracker;
