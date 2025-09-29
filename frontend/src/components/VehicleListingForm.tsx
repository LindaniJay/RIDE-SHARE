import React, { useState } from 'react';
import { VehicleForm, VehicleType, VehicleFeature } from '../types';
import DocumentUpload from './DocumentUpload';
import Icon from './Icon';

interface VehicleListingFormProps {
  onSubmit: (vehicleData: VehicleForm) => void;
  onCancel: () => void;
  className?: string;
}

export const VehicleListingForm: React.FC<VehicleListingFormProps> = ({
  onSubmit,
  onCancel,
  className = ""
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<VehicleForm>({
    make: '',
    model: '',
    year: new Date().getFullYear(),
    type: 'car',
    pricePerDay: 0,
    location: '',
    description: '',
    features: [],
    images: [],
    documents: {
      registration: undefined,
      roadworthy: undefined,
      insurance: undefined
    }
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const vehicleTypes: { value: VehicleType; label: string; icon: string }[] = [
    { value: 'car', label: 'Car', icon: 'Car' },
    { value: 'suv', label: 'SUV', icon: 'Truck' },
    { value: 'bakkie', label: 'Bakkie', icon: 'Truck' },
    { value: 'van', label: 'Van', icon: 'Truck' },
    { value: 'motorcycle', label: 'Motorcycle', icon: 'Bike' }
  ];

  // const fuelTypes: { value: FuelType; label: string }[] = [
  //   { value: 'petrol', label: 'Petrol' },
  //   { value: 'diesel', label: 'Diesel' },
  //   { value: 'hybrid', label: 'Hybrid' },
  //   { value: 'electric', label: 'Electric' }
  // ];

  // const transmissionTypes: { value: TransmissionType; label: string }[] = [
  //   { value: 'manual', label: 'Manual' },
  //   { value: 'automatic', label: 'Automatic' }
  // ];

  const availableFeatures: VehicleFeature[] = [
    { id: 'aircon', name: 'Air Conditioning', category: 'comfort' },
    { id: 'bluetooth', name: 'Bluetooth', category: 'entertainment' },
    { id: 'gps', name: 'GPS Navigation', category: 'convenience' },
    { id: 'usb', name: 'USB Charging', category: 'convenience' },
    { id: 'backup_camera', name: 'Backup Camera', category: 'safety' },
    { id: 'parking_sensors', name: 'Parking Sensors', category: 'safety' },
    { id: 'cruise_control', name: 'Cruise Control', category: 'comfort' },
    { id: 'leather_seats', name: 'Leather Seats', category: 'comfort' }
  ];

  const handleInputChange = (field: keyof VehicleForm, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFeatureToggle = (feature: VehicleFeature) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.some(f => f.id === feature.id)
        ? prev.features.filter(f => f.id !== feature.id)
        : [...prev.features, feature]
    }));
  };

  const handleDocumentUpload = (field: keyof NonNullable<VehicleForm['documents']>, file: File | undefined) => {
    setFormData(prev => ({
      ...prev,
      documents: {
        ...prev.documents,
        [field]: file
      }
    }));
  };

  const handleImageUpload = (files: FileList | null) => {
    if (files) {
      const imageFiles = Array.from(files);
      setFormData(prev => ({ ...prev, images: [...prev.images, ...imageFiles] }));
    }
  };

  const validateStep = (step: number): boolean => {
    switch (step) {
      case 1:
        return !!(formData.make && formData.model && formData.year && formData.type && formData.pricePerDay > 0);
      case 2:
        return !!(formData.location && formData.description);
      case 3:
        return formData.images.length > 0;
      case 4:
        return !!(formData.documents?.registration && formData.documents?.roadworthy && formData.documents?.insurance);
      default:
        return true;
    }
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 4));
    } else {
      setError('Please fill in all required fields before proceeding.');
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async () => {
    if (!validateStep(4)) {
      setError('Please complete all required fields and upload all documents.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      await onSubmit(formData);
    } catch (err) {
      setError('Failed to submit vehicle listing. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const getStepTitle = () => {
    switch (currentStep) {
      case 1:
        return 'Vehicle Details';
      case 2:
        return 'Location & Description';
      case 3:
        return 'Vehicle Photos';
      case 4:
        return 'Required Documents';
      default:
        return 'Vehicle Listing';
    }
  };

  const getStepIcon = () => {
    switch (currentStep) {
      case 1:
        return 'Car';
      case 2:
        return 'MapPin';
      case 3:
        return 'Camera';
      case 4:
        return 'FileText';
      default:
        return 'Clipboard';
    }
  };

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Progress Header */}
      <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <Icon name={getStepIcon()} size="lg" />
            <div>
              <h2 className="text-xl font-semibold text-white">{getStepTitle()}</h2>
              <p className="text-white/70 text-sm">
                Step {currentStep} of 4 - Submit your vehicle for admin approval
              </p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm text-white/70">Progress</div>
            <div className="text-lg font-semibold text-white">{Math.round((currentStep / 4) * 100)}%</div>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="w-full bg-white/20 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${(currentStep / 4) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Step 1: Vehicle Details */}
      {currentStep === 1 && (
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
          <h3 className="text-lg font-semibold text-white mb-4">Vehicle Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-white/90 mb-2">
                Make *
              </label>
              <input
                type="text"
                value={formData.make}
                onChange={(e) => handleInputChange('make', e.target.value)}
                className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/20"
                placeholder="Toyota"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-white/90 mb-2">
                Model *
              </label>
              <input
                type="text"
                value={formData.model}
                onChange={(e) => handleInputChange('model', e.target.value)}
                className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/20"
                placeholder="Corolla"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-white/90 mb-2">
                Year *
              </label>
              <input
                type="number"
                value={formData.year}
                onChange={(e) => handleInputChange('year', parseInt(e.target.value))}
                className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/20"
                min="1990"
                max={new Date().getFullYear() + 1}
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-white/90 mb-2">
                Price per Day (R) *
              </label>
              <input
                type="number"
                value={formData.pricePerDay}
                onChange={(e) => handleInputChange('pricePerDay', parseFloat(e.target.value))}
                className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/20"
                min="0"
                step="0.01"
                required
              />
            </div>
            
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-white/90 mb-2">
                Vehicle Type *
              </label>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
                {vehicleTypes.map((type) => (
                  <button
                    key={type.value}
                    onClick={() => handleInputChange('type', type.value)}
                    className={`p-3 rounded-lg text-sm font-medium transition-all ${
                      formData.type === type.value
                        ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                        : 'bg-white/10 text-white/70 border border-white/20 hover:bg-white/20'
                    }`}
                  >
                    <Icon name={type.icon} size="sm" className="mr-2" />
                    {type.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Step 2: Location & Description */}
      {currentStep === 2 && (
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
          <h3 className="text-lg font-semibold text-white mb-4">Location & Description</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-white/90 mb-2">
                Location *
              </label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => handleInputChange('location', e.target.value)}
                className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/20"
                placeholder="Cape Town, Western Cape"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-white/90 mb-2">
                Description *
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/20"
                rows={4}
                placeholder="Describe your vehicle, its condition, and any special features..."
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-white/90 mb-2">
                Vehicle Features
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {availableFeatures.map((feature) => (
                  <label key={feature.id} className="flex items-center space-x-2 p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.features.some(f => f.id === feature.id)}
                      onChange={() => handleFeatureToggle(feature)}
                      className="w-4 h-4 text-blue-600 bg-white/10 border-white/20 rounded focus:ring-blue-500"
                    />
                    <span className="text-sm text-white/90">{feature.name}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Step 3: Vehicle Photos */}
      {currentStep === 3 && (
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
          <h3 className="text-lg font-semibold text-white mb-4">Vehicle Photos</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-white/90 mb-2">
                Upload Vehicle Photos *
              </label>
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={(e) => handleImageUpload(e.target.files)}
                className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-blue-500/20 file:text-blue-300 hover:file:bg-blue-500/30"
              />
              <p className="text-xs text-white/60 mt-1">
                Upload multiple photos showing exterior, interior, and license disc
              </p>
            </div>
            
            {formData.images.length > 0 && (
              <div>
                <p className="text-sm text-white/70 mb-2">
                  Uploaded Photos ({formData.images.length}):
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {formData.images.map((image, index) => (
                    <div key={index} className="relative">
                      <img
                        src={URL.createObjectURL(image)}
                        alt={`Vehicle photo ${index + 1}`}
                        className="w-full h-20 object-cover rounded-lg"
                      />
                      <button
                        onClick={() => {
                          const newImages = formData.images.filter((_, i) => i !== index);
                          setFormData(prev => ({ ...prev, images: newImages }));
                        }}
                        className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-xs hover:bg-red-600"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Step 4: Required Documents */}
      {currentStep === 4 && (
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
          <h3 className="text-lg font-semibold text-white mb-4">Required Documents</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <DocumentUpload
              label="Vehicle Registration"
              name="registration"
              value={formData.documents?.registration}
              onChange={(file) => handleDocumentUpload('registration', file)}
              required
              description="Official vehicle registration document"
            />
            
            <DocumentUpload
              label="Roadworthy Certificate"
              name="roadworthy"
              value={formData.documents?.roadworthy}
              onChange={(file) => handleDocumentUpload('roadworthy', file)}
              required
              description="Valid roadworthy certificate"
            />
            
            <DocumentUpload
              label="Insurance Certificate"
              name="insurance"
              value={formData.documents?.insurance}
              onChange={(file) => handleDocumentUpload('insurance', file)}
              required
              description="Comprehensive insurance certificate"
            />
          </div>
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-3">
          <p className="text-red-300 text-sm">{error}</p>
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="flex justify-between">
        <button
          onClick={prevStep}
          disabled={currentStep === 1}
          className={`px-6 py-2 rounded-lg font-medium transition-all ${
            currentStep === 1
              ? 'bg-gray-500/20 text-gray-400 cursor-not-allowed'
              : 'bg-white/10 text-white hover:bg-white/20'
          }`}
        >
          Previous
        </button>
        
        <div className="flex space-x-3">
          <button
            onClick={onCancel}
            className="px-6 py-2 bg-gray-500/20 text-gray-300 rounded-lg font-medium hover:bg-gray-500/30 transition-all"
          >
            Cancel
          </button>
          
          {currentStep < 4 ? (
            <button
              onClick={nextStep}
              className="px-6 py-2 bg-blue-500/20 text-blue-300 rounded-lg font-medium hover:bg-blue-500/30 transition-all"
            >
              Next
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={loading}
              className={`px-6 py-2 rounded-lg font-medium transition-all ${
                loading
                  ? 'bg-gray-500/20 text-gray-400 cursor-not-allowed'
                  : 'bg-green-500/20 text-green-300 hover:bg-green-500/30'
              }`}
            >
              {loading ? 'Submitting...' : 'Submit for Admin Approval'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default VehicleListingForm;
