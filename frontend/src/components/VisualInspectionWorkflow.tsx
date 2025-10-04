import React, { useState } from 'react';
import { CheckCircle, Camera, ChevronRight } from 'lucide-react';


interface VisualInspectionWorkflowProps {
  type: 'pickup' | 'return';
  onComplete: (data: any) => void;
  onCancel: () => void;
}

const VisualInspectionWorkflow: React.FC<VisualInspectionWorkflowProps> = ({
  type,
  onComplete,
  onCancel
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [inspectionData, setInspectionData] = useState<Record<string, any>>({});
  const [photos, setPhotos] = useState<Record<string, string[]>>({});

  const inspectionSteps = {
    pickup: [
      {
        id: 'exterior',
        title: 'Exterior Inspection',
        items: [
          { id: 'front', title: 'Front View', description: 'Take photo of front of vehicle', required: true },
          { id: 'rear', title: 'Rear View', description: 'Take photo of rear of vehicle', required: true },
          { id: 'driver_side', title: 'Driver Side', description: 'Take photo of driver side', required: true },
          { id: 'passenger_side', title: 'Passenger Side', description: 'Take photo of passenger side', required: true },
          { id: 'roof', title: 'Roof', description: 'Take photo of roof', required: false },
          { id: 'wheels', title: 'Wheels', description: 'Take photo of all wheels', required: true }
        ]
      },
      {
        id: 'interior',
        title: 'Interior Inspection',
        items: [
          { id: 'dashboard', title: 'Dashboard', description: 'Take photo of dashboard and odometer', required: true },
          { id: 'seats', title: 'Seats', description: 'Take photo of front and rear seats', required: true },
          { id: 'trunk', title: 'Trunk/Boot', description: 'Take photo of trunk space', required: true },
          { id: 'controls', title: 'Controls', description: 'Take photo of steering wheel and controls', required: false }
        ]
      },
      {
        id: 'documents',
        title: 'Document Verification',
        items: [
          { id: 'keys', title: 'Keys', description: 'Verify all keys are present', required: true },
          { id: 'registration', title: 'Registration', description: 'Take photo of vehicle registration', required: true },
          { id: 'insurance', title: 'Insurance', description: 'Take photo of insurance documents', required: true },
          { id: 'fuel_level', title: 'Fuel Level', description: 'Take photo of fuel gauge', required: true }
        ]
      }
    ],
    return: [
      {
        id: 'exterior_return',
        title: 'Exterior Return Inspection',
        items: [
          { id: 'front_return', title: 'Front View', description: 'Take photo of front of vehicle', required: true },
          { id: 'rear_return', title: 'Rear View', description: 'Take photo of rear of vehicle', required: true },
          { id: 'driver_side_return', title: 'Driver Side', description: 'Take photo of driver side', required: true },
          { id: 'passenger_side_return', title: 'Passenger Side', description: 'Take photo of passenger side', required: true },
          { id: 'damage_check', title: 'Damage Check', description: 'Check for any new damage', required: true }
        ]
      },
      {
        id: 'interior_return',
        title: 'Interior Return Inspection',
        items: [
          { id: 'dashboard_return', title: 'Dashboard', description: 'Take photo of dashboard and odometer', required: true },
          { id: 'seats_return', title: 'Seats', description: 'Take photo of front and rear seats', required: true },
          { id: 'trunk_return', title: 'Trunk/Boot', description: 'Take photo of trunk space', required: true },
          { id: 'cleanliness', title: 'Cleanliness', description: 'Verify vehicle is clean', required: true }
        ]
      },
      {
        id: 'final_check',
        title: 'Final Verification',
        items: [
          { id: 'keys_return', title: 'Keys Return', description: 'Verify all keys are returned', required: true },
          { id: 'fuel_level_return', title: 'Fuel Level', description: 'Take photo of fuel gauge', required: true },
          { id: 'personal_items', title: 'Personal Items', description: 'Check for any personal items left behind', required: true },
          { id: 'condition_match', title: 'Condition Match', description: 'Compare with pickup photos', required: true }
        ]
      }
    ]
  };

  const currentSteps = inspectionSteps[type];
  const currentStepData = currentSteps[currentStep];

  const handleItemComplete = (stepId: string, itemId: string, completed: boolean) => {
    setInspectionData(prev => ({
      ...prev,
      [`${stepId}_${itemId}`]: completed
    }));
  };

  const handlePhotoCapture = (stepId: string, itemId: string, photoUrl: string) => {
    setPhotos(prev => ({
      ...prev,
      [`${stepId}_${itemId}`]: [...(prev[`${stepId}_${itemId}`] || []), photoUrl]
    }));
  };

  const isStepComplete = (step: any) => {
    return step.items.every((item: any) => 
      inspectionData[`${step.id}_${item.id}`] || !item.required
    );
  };

  const isAllStepsComplete = () => {
    return currentSteps.every(step => isStepComplete(step));
  };

  const handleNext = () => {
    if (currentStep < currentSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete({
        type,
        steps: currentSteps,
        data: inspectionData,
        photos
      });
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-2xl font-bold text-gray-800">
            {type === 'pickup' ? 'Vehicle Pickup Inspection' : 'Vehicle Return Inspection'}
          </h2>
          <span className="text-sm text-gray-600">
            Step {currentStep + 1} of {currentSteps.length}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div 
            className="bg-blue-600 h-3 rounded-full transition-all duration-300"
            style={{ width: `${((currentStep + 1) / currentSteps.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Current Step */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          {currentStepData.title}
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {currentStepData.items.map((item: any) => (
            <div 
              key={item.id}
              className={`p-4 border-2 rounded-lg transition-all duration-200 ${
                inspectionData[`${currentStepData.id}_${item.id}`] 
                  ? 'border-green-500 bg-green-50' 
                  : 'border-gray-200 hover:border-blue-300'
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="font-medium text-gray-800">{item.title}</h4>
                    {item.required && (
                      <span className="text-red-500 text-sm">*</span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{item.description}</p>
                  
                  {/* Photo Section */}
                  <div className="mb-3">
                    <button
                      onClick={() => {
                        // Simulate photo capture
                        const photoUrl = `https://via.placeholder.com/300x200/4F46E5/FFFFFF?text=${item.title}`;
                        handlePhotoCapture(currentStepData.id, item.id, photoUrl);
                      }}
                      className="flex items-center gap-2 px-3 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors"
                    >
                      <Camera className="w-4 h-4" />
                      Take Photo
                    </button>
                    
                    {photos[`${currentStepData.id}_${item.id}`] && (
                      <div className="mt-2 flex gap-2">
                        {photos[`${currentStepData.id}_${item.id}`].map((photo, index) => (
                          <img 
                            key={index}
                            src={photo} 
                            alt={`${item.title} ${index + 1}`}
                            className="w-16 h-12 object-cover rounded border"
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                
                <button
                  onClick={() => handleItemComplete(currentStepData.id, item.id, true)}
                  className={`p-2 rounded-full transition-colors ${
                    inspectionData[`${currentStepData.id}_${item.id}`]
                      ? 'bg-green-100 text-green-600'
                      : 'bg-gray-100 text-gray-400 hover:bg-green-100 hover:text-green-600'
                  }`}
                >
                  <CheckCircle className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center">
        <button
          onClick={currentStep === 0 ? onCancel : handlePrevious}
          className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
        >
          {currentStep === 0 ? 'Cancel' : 'Previous'}
        </button>
        
        <div className="flex items-center gap-4">
          {isStepComplete(currentStepData) && (
            <div className="flex items-center gap-2 text-green-600">
              <CheckCircle className="w-5 h-5" />
              <span className="text-sm font-medium">Step Complete</span>
            </div>
          )}
          
          <button
            onClick={handleNext}
            disabled={!isStepComplete(currentStepData)}
            className={`px-6 py-2 rounded-lg transition-colors flex items-center gap-2 ${
              isStepComplete(currentStepData)
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            {currentStep === currentSteps.length - 1 ? 'Complete Inspection' : 'Next Step'}
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Completion Status */}
      {isAllStepsComplete() && (
        <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
          <div className="flex items-center gap-2 text-green-700">
            <CheckCircle className="w-5 h-5" />
            <span className="font-medium">All inspection steps completed!</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default VisualInspectionWorkflow;
