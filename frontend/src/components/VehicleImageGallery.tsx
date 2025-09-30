import React, { useState } from 'react';
import { IMAGE_PATHS, getVehicleImages } from '../data/imagePaths';
import Icon from './Icon';

interface VehicleImageGalleryProps {
  make: string;
  model: string;
  images?: string[];
  className?: string;
}

const VehicleImageGallery: React.FC<VehicleImageGalleryProps> = ({
  make,
  model,
  images,
  className = ''
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  
  // Use provided images or fallback to default vehicle images
  const vehicleImages = images && images.length > 0 
    ? images 
    : getVehicleImages(make, model);
  
  const currentImage = vehicleImages[currentImageIndex];
  
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % vehicleImages.length);
  };
  
  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + vehicleImages.length) % vehicleImages.length);
  };
  
  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };
  
  if (vehicleImages.length === 0) {
    return (
      <div className={`bg-gray-200 rounded-lg flex items-center justify-center ${className}`}>
        <Icon name="Image" className="h-12 w-12 text-gray-400" />
        <span className="text-gray-500 ml-2">No images available</span>
      </div>
    );
  }
  
  return (
    <div className={`relative ${className}`}>
      {/* Main Image */}
      <div className="relative group">
        <img
          src={currentImage}
          alt={`${make} ${model}`}
          className="w-full h-64 object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
          onClick={toggleFullscreen}
          onError={(e) => {
            // Fallback to default image if current image fails to load
            (e.target as HTMLImageElement).src = IMAGE_PATHS.DEFAULTS.VEHICLE;
          }}
        />
        
        {/* Image Navigation Arrows */}
        {vehicleImages.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <Icon name="ChevronLeft" className="h-4 w-4" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <Icon name="ChevronRight" className="h-4 w-4" />
            </button>
          </>
        )}
        
        {/* Image Counter */}
        {vehicleImages.length > 1 && (
          <div className="absolute bottom-2 right-2 bg-black/50 text-white px-2 py-1 rounded text-sm">
            {currentImageIndex + 1} / {vehicleImages.length}
          </div>
        )}
        
        {/* Fullscreen Button */}
        <button
          onClick={toggleFullscreen}
          className="absolute top-2 right-2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <Icon name="Maximize" className="h-4 w-4" />
        </button>
      </div>
      
      {/* Thumbnail Navigation */}
      {vehicleImages.length > 1 && (
        <div className="flex space-x-2 mt-3 overflow-x-auto">
          {vehicleImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`flex-shrink-0 w-16 h-12 rounded-lg overflow-hidden border-2 transition-colors ${
                index === currentImageIndex 
                  ? 'border-blue-500' 
                  : 'border-transparent hover:border-gray-300'
              }`}
            >
              <img
                src={image}
                alt={`${make} ${model} ${index + 1}`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = IMAGE_PATHS.DEFAULTS.VEHICLE;
                }}
              />
            </button>
          ))}
        </div>
      )}
      
      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={toggleFullscreen}
        >
          <div className="relative max-w-4xl max-h-full">
            <img
              src={currentImage}
              alt={`${make} ${model}`}
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            
            {/* Close Button */}
            <button
              onClick={toggleFullscreen}
              className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
            >
              <Icon name="X" className="h-6 w-6" />
            </button>
            
            {/* Navigation in Fullscreen */}
            {vehicleImages.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors"
                >
                  <Icon name="ChevronLeft" className="h-6 w-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors"
                >
                  <Icon name="ChevronRight" className="h-6 w-6" />
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default VehicleImageGallery;

