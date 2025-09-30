// Image path constants for consistent image management
export const IMAGE_PATHS = {
  // Vehicle categories
  CATEGORIES: {
    BAKKIE: '/images/categories/bakkie-category.jpg',
    TRUCK: '/images/categories/truck-category.jpg',
    MINIBUS: '/images/categories/minibus-category.jpg',
    SEDAN: '/images/categories/sedan-category.jpg',
    SUV: '/images/categories/suv-category.jpg',
    LUXURY: '/images/categories/luxury-category.jpg',
  },
  
  // Individual vehicles
  VEHICLES: {
    TOYOTA_HILUX: [
      '/images/vehicles/toyota-hilux-1.jpg',
      '/images/vehicles/toyota-hilux-2.jpg',
      '/images/vehicles/toyota-hilux-3.jpg',
    ],
    ISUZU_NPR: [
      '/images/vehicles/isuzu-npr-1.jpg',
      '/images/vehicles/isuzu-npr-2.jpg',
    ],
    TOYOTA_QUANTUM: [
      '/images/vehicles/toyota-quantum-1.jpg',
      '/images/vehicles/toyota-quantum-2.jpg',
    ],
    TOYOTA_COROLLA: [
      '/images/vehicles/toyota-corolla-1.jpg',
      '/images/vehicles/toyota-corolla-2.jpg',
    ],
    BMW_X5: [
      '/images/vehicles/bmw-x5-1.jpg',
      '/images/vehicles/bmw-x5-2.jpg',
    ],
  },
  
  // Background images
  BACKGROUNDS: {
    HERO: '/images/backgrounds/hero-background.jpg',
    SEARCH: '/images/backgrounds/search-background.jpg',
    DASHBOARD: '/images/backgrounds/dashboard-background.jpg',
  },
  
  // Default fallback images
  DEFAULTS: {
    VEHICLE: '/images/defaults/vehicle-placeholder.jpg',
    AVATAR: '/images/defaults/avatar-placeholder.jpg',
    CATEGORY: '/images/defaults/category-placeholder.jpg',
  }
};

// Helper function to get vehicle images
export const getVehicleImages = (make: string, model: string): string[] => {
  const key = `${make.toUpperCase()}_${model.toUpperCase().replace(/\s+/g, '_')}`;
  return IMAGE_PATHS.VEHICLES[key as keyof typeof IMAGE_PATHS.VEHICLES] || [IMAGE_PATHS.DEFAULTS.VEHICLE];
};

// Helper function to get category image
export const getCategoryImage = (type: string): string => {
  const categoryMap: { [key: string]: string } = {
    'bakkie': IMAGE_PATHS.CATEGORIES.BAKKIE,
    'truck': IMAGE_PATHS.CATEGORIES.TRUCK,
    'minibus': IMAGE_PATHS.CATEGORIES.MINIBUS,
    'car': IMAGE_PATHS.CATEGORIES.SEDAN,
    'suv': IMAGE_PATHS.CATEGORIES.SUV,
    'luxury': IMAGE_PATHS.CATEGORIES.LUXURY,
  };
  
  return categoryMap[type.toLowerCase()] || IMAGE_PATHS.DEFAULTS.CATEGORY;
};
