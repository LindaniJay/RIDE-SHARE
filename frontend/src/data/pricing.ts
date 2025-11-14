export interface PricingTier {
  daily: {
    min: number;
    max: number;
  };
  weekly: {
    min: number;
    max: number;
  };
  monthly: {
    min: number;
    max: number;
  };
}

export interface VehicleCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  pricing: PricingTier;
  features: string[];
  popular: boolean;
}

export const VEHICLE_CATEGORIES: VehicleCategory[] = [
  {
    id: 'economy',
    name: 'Economy & Compact Cars',
    description: 'Perfect for city driving and daily commutes',
    icon: 'Car',
    pricing: {
      daily: { min: 0, max: 0 },
      weekly: { min: 0, max: 0 },
      monthly: { min: 0, max: 0 }
    },
    features: ['Fuel efficient', 'Easy parking', 'City friendly', 'Budget friendly'],
    popular: true
  },
  {
    id: 'family',
    name: 'Midsize & Family Sedans',
    description: 'Comfortable family vehicles for longer trips',
    icon: 'Car',
    pricing: {
      daily: { min: 0, max: 0 },
      weekly: { min: 0, max: 0 },
      monthly: { min: 0, max: 0 }
    },
    features: ['Spacious interior', 'Comfortable seating', 'Family friendly', 'Reliable'],
    popular: true
  },
  {
    id: 'executive',
    name: 'Full-size & Executive Sedans',
    description: 'Premium vehicles for business and luxury travel',
    icon: 'Car',
    pricing: {
      daily: { min: 0, max: 0 },
      weekly: { min: 0, max: 0 },
      monthly: { min: 0, max: 0 }
    },
    features: ['Premium comfort', 'Business class', 'Luxury features', 'Professional'],
    popular: false
  },
  {
    id: 'compact-suv',
    name: 'Compact SUV & Crossover',
    description: 'Versatile vehicles for city and light off-road use',
    icon: 'Car',
    pricing: {
      daily: { min: 0, max: 0 },
      weekly: { min: 0, max: 0 },
      monthly: { min: 0, max: 0 }
    },
    features: ['Higher ground clearance', 'Versatile', 'Good visibility', 'All-weather'],
    popular: true
  },
  {
    id: 'large-suv',
    name: '4x4 & Large SUV',
    description: 'Powerful vehicles for off-road adventures and large families',
    icon: 'Car',
    pricing: {
      daily: { min: 0, max: 0 },
      weekly: { min: 0, max: 0 },
      monthly: { min: 0, max: 0 }
    },
    features: ['4x4 capability', 'Off-road ready', 'Large capacity', 'Adventure ready'],
    popular: false
  },
  {
    id: 'bakkie',
    name: 'Bakkies & Pickups',
    description: 'Work vehicles perfect for construction and outdoor activities',
    icon: 'Car',
    pricing: {
      daily: { min: 0, max: 0 },
      weekly: { min: 0, max: 0 },
      monthly: { min: 0, max: 0 }
    },
    features: ['Cargo capacity', 'Work ready', 'Durable', 'Versatile'],
    popular: true
  },
  {
    id: 'passenger-van',
    name: '8-12 Seat Passenger Vans',
    description: 'Group transport for families and small teams',
    icon: 'Car',
    pricing: {
      daily: { min: 0, max: 0 },
      weekly: { min: 0, max: 0 },
      monthly: { min: 0, max: 0 }
    },
    features: ['Group transport', 'Spacious', 'Family friendly', 'Team travel'],
    popular: false
  },
  {
    id: 'minibus',
    name: '15-22 Seat Minibuses',
    description: 'Large group transport for events and tours',
    icon: 'Car',
    pricing: {
      daily: { min: 0, max: 0 },
      weekly: { min: 0, max: 0 },
      monthly: { min: 0, max: 0 }
    },
    features: ['Large capacity', 'Event transport', 'Tour ready', 'Group friendly'],
    popular: false
  },
  {
    id: 'coach',
    name: '32-60+ Seat Coaches',
    description: 'Professional transport for large groups and events',
    icon: 'Car',
    pricing: {
      daily: { min: 0, max: 0 },
      weekly: { min: 0, max: 0 },
      monthly: { min: 0, max: 0 }
    },
    features: ['Professional driver', 'Large capacity', 'Event ready', 'Luxury transport'],
    popular: false
  }
];

export interface CharterOption {
  id: string;
  name: string;
  seats: number;
  duration: string;
  pricing: {
    min: number;
    max: number;
  };
  description: string;
}

export const CHARTER_OPTIONS: CharterOption[] = [
  {
    id: '8-seat-4h',
    name: '8-Seat Charter (4 hours)',
    seats: 8,
    duration: '4 hours',
    pricing: { min: 0, max: 0 },
    description: 'Perfect for small group tours and airport transfers'
  },
  {
    id: '15-seat-4h',
    name: '15-Seat Charter (4 hours)',
    seats: 15,
    duration: '4 hours',
    pricing: { min: 0, max: 0 },
    description: 'Ideal for medium group events and city tours'
  },
  {
    id: '34-seat-4h',
    name: '34-Seat Charter (4 hours)',
    seats: 34,
    duration: '4 hours',
    pricing: { min: 0, max: 0 },
    description: 'Great for large group tours and corporate events'
  },
  {
    id: '60-seat-4h',
    name: '60-Seat Charter (4 hours)',
    seats: 60,
    duration: '4 hours',
    pricing: { min: 0, max: 0 },
    description: 'Perfect for major events and large group transport'
  }
];

export const PRICE_RANGES = {
  daily: [
    { label: 'Free', min: 0, max: 0 },
    { label: 'Free', min: 0, max: 0 },
    { label: 'Free', min: 0, max: 0 },
    { label: 'Free', min: 0, max: 0 }
  ],
  weekly: [
    { label: 'Free', min: 0, max: 0 },
    { label: 'Free', min: 0, max: 0 },
    { label: 'Free', min: 0, max: 0 },
    { label: 'Free', min: 0, max: 0 }
  ],
  monthly: [
    { label: 'Free', min: 0, max: 0 },
    { label: 'Free', min: 0, max: 0 },
    { label: 'Free', min: 0, max: 0 },
    { label: 'Free', min: 0, max: 0 }
  ]
};

export const formatPrice = (amount: number): string => {
  return `R${amount.toLocaleString('en-ZA')}`;
};

export const getPriceRange = (min: number, max: number): string => {
  return `${formatPrice(min)} - ${formatPrice(max)}`;
};

export const getCategoryById = (id: string): VehicleCategory | undefined => {
  return VEHICLE_CATEGORIES.find(category => category.id === id);
};

export const getPopularCategories = (): VehicleCategory[] => {
  return VEHICLE_CATEGORIES.filter(category => category.popular);
};

export const getCharterById = (id: string): CharterOption | undefined => {
  return CHARTER_OPTIONS.find(option => option.id === id);
};
