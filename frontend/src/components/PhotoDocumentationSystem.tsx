import React, { useState, useRef } from 'react';
import { Camera, Upload, X, Eye, Download, RotateCcw, ZoomIn, ZoomOut } from 'lucide-react';

interface PhotoDocument {
  id: string;
  url: string;
  timestamp: Date;
  category: string;
  description: string;
  metadata: {
    location?: string;
    vehicleId?: string;
    userId?: string;
    inspectionType?: 'pickup' | 'return' | 'damage';
  };
}

interface PhotoDocumentationSystemProps {
  vehicleId: string;
  inspectionType: 'pickup' | 'return' | 'damage';
  onPhotosComplete: (photos: PhotoDocument[]) => void;
  requiredCategories: string[];
}

const PhotoDocumentationSystem: React.FC<PhotoDocumentationSystemProps> = ({
  vehicleId,
  inspectionType,
  onPhotosComplete,
  requiredCategories
}) => {
  const [photos, setPhotos] = useState<PhotoDocument[]>([]);
  const [currentCategory, setCurrentCategory] = useState(requiredCategories[0]);
  const [isCapturing, setIsCapturing] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoDocument | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const categories = {
    'exterior_front': { name: 'Front View', icon: '🚗', required: true },
    'exterior_rear': { name: 'Rear View', icon: '🚙', required: true },
    'exterior_driver_side': { name: 'Driver Side', icon: '🚘', required: true },
    'exterior_passenger_side': { name: 'Passenger Side', icon: '🚖', required: true },
    'exterior_roof': { name: 'Roof', icon: '🚕', required: false },
    'exterior_wheels': { name: 'Wheels', icon: '⚙️', required: true },
    'interior_dashboard': { name: 'Dashboard', icon: '📊', required: true },
    'interior_seats': { name: 'Seats', icon: '🪑', required: true },
    'interior_trunk': { name: 'Trunk/Boot', icon: '📦', required: true },
    'interior_controls': { name: 'Controls', icon: '🎛️', required: false },
    'documents_keys': { name: 'Keys', icon: '🔑', required: true },
    'documents_registration': { name: 'Registration', icon: '📄', required: true },
    'documents_insurance': { name: 'Insurance', icon: '🛡️', required: true },
    'fuel_level': { name: 'Fuel Level', icon: '⛽', required: true },
    'damage_any': { name: 'Damage Documentation', icon: '⚠️', required: false }
  };

  const handlePhotoCapture = () => {
    setIsCapturing(true);
    // Simulate camera capture
    setTimeout(() => {
      const newPhoto: PhotoDocument = {
        id: `photo_${Date.now()}`,
        url: `https://via.placeholder.com/800x600/4F46E5/FFFFFF?text=${categories[currentCategory]?.name}`,
        timestamp: new Date(),
        category: currentCategory,
        description: `${categories[currentCategory]?.name} - ${inspectionType}`,
        metadata: {
          location: 'Cape Town, South Africa',
          vehicleId,
          userId: 'current_user',
          inspectionType
        }
      };
      
      setPhotos(prev => [...prev, newPhoto]);
      setIsCapturing(false);
    }, 1000);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const newPhoto: PhotoDocument = {
          id: `photo_${Date.now()}`,
          url: e.target?.result as string,
          timestamp: new Date(),
          category: currentCategory,
          description: `${categories[currentCategory]?.name} - ${inspectionType}`,
          metadata: {
            location: 'Cape Town, South Africa',
            vehicleId,
            userId: 'current_user',
            inspectionType
          }
        };
        
        setPhotos(prev => [...prev, newPhoto]);
      };
      reader.readAsDataURL(file);
    }
  };

  const removePhoto = (photoId: string) => {
    setPhotos(prev => prev.filter(photo => photo.id !== photoId));
  };

  const getPhotosByCategory = (category: string) => {
    return photos.filter(photo => photo.category === category);
  };

  const isCategoryComplete = (category: string) => {
    const categoryPhotos = getPhotosByCategory(category);
    const categoryInfo = categories[category];
    return categoryInfo?.required ? categoryPhotos.length > 0 : true;
  };

  const isAllRequiredCategoriesComplete = () => {
    return requiredCategories.every(category => isCategoryComplete(category));
  };

  const handleComplete = () => {
    onPhotosComplete(photos);
  };

  const PhotoViewer = ({ photo }: { photo: PhotoDocument }) => (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
      <div className="relative max-w-4xl max-h-full">
        <button
          onClick={() => setSelectedPhoto(null)}
          className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
        >
          <X className="w-8 h-8" />
        </button>
        
        <div className="bg-white rounded-lg p-4">
          <img 
            src={photo.url} 
            alt={photo.description}
            className="max-w-full max-h-[80vh] object-contain rounded"
          />
          
          <div className="mt-4 text-center">
            <h3 className="text-lg font-semibold text-gray-800">{photo.description}</h3>
            <p className="text-sm text-gray-600">
              {photo.timestamp.toLocaleString()}
            </p>
            
            <div className="flex justify-center gap-4 mt-4">
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                <Download className="w-4 h-4" />
                Download
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700">
                <RotateCcw className="w-4 h-4" />
                Rotate
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Photo Documentation System
        </h2>
        <p className="text-gray-600">
          Document vehicle condition for {inspectionType} inspection
        </p>
      </div>

      {/* Category Navigation */}
      <div className="mb-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {requiredCategories.map(category => {
            const categoryInfo = categories[category];
            const isComplete = isCategoryComplete(category);
            const photoCount = getPhotosByCategory(category).length;
            
            return (
              <button
                key={category}
                onClick={() => setCurrentCategory(category)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg border-2 transition-all ${
                  currentCategory === category
                    ? 'border-blue-500 bg-blue-50 text-blue-700'
                    : isComplete
                    ? 'border-green-500 bg-green-50 text-green-700'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <span className="text-lg">{categoryInfo?.icon}</span>
                <span className="font-medium">{categoryInfo?.name}</span>
                {photoCount > 0 && (
                  <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">
                    {photoCount}
                  </span>
                )}
                {isComplete && <span className="text-green-600">✓</span>}
              </button>
            );
          })}
        </div>
      </div>

      {/* Current Category Photos */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          {categories[currentCategory]?.name} Photos
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {getPhotosByCategory(currentCategory).map(photo => (
            <div key={photo.id} className="relative group">
              <img
                src={photo.url}
                alt={photo.description}
                className="w-full h-32 object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => setSelectedPhoto(photo)}
              />
              <button
                onClick={() => removePhoto(photo.id)}
                className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <X className="w-3 h-3" />
              </button>
              <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
                {photo.timestamp.toLocaleTimeString()}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Photo Capture Controls */}
      <div className="mb-6 p-4 bg-gray-50 rounded-lg">
        <h4 className="font-medium text-gray-800 mb-3">
          Add Photos for {categories[currentCategory]?.name}
        </h4>
        
        <div className="flex gap-4">
          <button
            onClick={handlePhotoCapture}
            disabled={isCapturing}
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Camera className="w-5 h-5" />
            {isCapturing ? 'Capturing...' : 'Take Photo'}
          </button>
          
          <button
            onClick={() => fileInputRef.current?.click()}
            className="flex items-center gap-2 px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
          >
            <Upload className="w-5 h-5" />
            Upload Photo
          </button>
          
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileUpload}
            className="hidden"
          />
        </div>
      </div>

      {/* Progress Summary */}
      <div className="mb-6 p-4 bg-blue-50 rounded-lg">
        <div className="flex justify-between items-center mb-2">
          <h4 className="font-medium text-gray-800">Documentation Progress</h4>
          <span className="text-sm text-gray-600">
            {photos.length} photos captured
          </span>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {requiredCategories.map(category => {
            const isComplete = isCategoryComplete(category);
            const photoCount = getPhotosByCategory(category).length;
            
            return (
              <div key={category} className="flex items-center gap-2 text-sm">
                <div className={`w-3 h-3 rounded-full ${isComplete ? 'bg-green-500' : 'bg-gray-300'}`} />
                <span className={isComplete ? 'text-green-700' : 'text-gray-600'}>
                  {categories[category]?.name} ({photoCount})
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Complete Button */}
      <div className="flex justify-end">
        <button
          onClick={handleComplete}
          disabled={!isAllRequiredCategoriesComplete()}
          className={`px-8 py-3 rounded-lg font-medium transition-colors ${
            isAllRequiredCategoriesComplete()
              ? 'bg-green-600 text-white hover:bg-green-700'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          Complete Documentation
        </button>
      </div>

      {/* Photo Viewer Modal */}
      {selectedPhoto && <PhotoViewer photo={selectedPhoto} />}
    </div>
  );
};

export default PhotoDocumentationSystem;
