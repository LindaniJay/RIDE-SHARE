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
      daily: { min: 350, max: 650 },
      weekly: { min: 1900, max: 3500 },
      monthly: { min: 5000, max: 9000 }
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
      daily: { min: 500, max: 900 },
      weekly: { min: 3000, max: 4800 },
      monthly: { min: 7000, max: 11000 }
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
      daily: { min: 900, max: 1600 },
      weekly: { min: 5200, max: 9500 },
      monthly: { min: 12000, max: 15000 }
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
      daily: { min: 700, max: 1400 },
      weekly: { min: 4000, max: 8000 },
      monthly: { min: 9000, max: 18000 }
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
      daily: { min: 1200, max: 2800 },
      weekly: { min: 7000, max: 16000 },
      monthly: { min: 18000, max: 45000 }
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
      daily: { min: 490, max: 1000 },
      weekly: { min: 3000, max: 6000 },
      monthly: { min: 8000, max: 20000 }
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
      daily: { min: 1200, max: 2000 },
      weekly: { min: 7000, max: 12000 },
      monthly: { min: 18000, max: 40000 }
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
      daily: { min: 1800, max: 3500 },
      weekly: { min: 10000, max: 20000 },
      monthly: { min: 25000, max: 50000 }
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
      daily: { min: 4500, max: 15000 },
      weekly: { min: 25000, max: 80000 },
      monthly: { min: 60000, max: 200000 }
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
    pricing: { min: 2500, max: 3500 },
    description: 'Perfect for small group tours and airport transfers'
  },
  {
    id: '15-seat-4h',
    name: '15-Seat Charter (4 hours)',
    seats: 15,
    duration: '4 hours',
    pricing: { min: 4800, max: 6000 },
    description: 'Ideal for medium group events and city tours'
  },
  {
    id: '34-seat-4h',
    name: '34-Seat Charter (4 hours)',
    seats: 34,
    duration: '4 hours',
    pricing: { min: 7500, max: 9000 },
    description: 'Great for large group tours and corporate events'
  },
  {
    id: '60-seat-4h',
    name: '60-Seat Charter (4 hours)',
    seats: 60,
    duration: '4 hours',
    pricing: { min: 9800, max: 11500 },
    description: 'Perfect for major events and large group transport'
  }
];

export const PRICE_RANGES = {
  daily: [
    { label: 'Under R500', min: 0, max: 500 },
    { label: 'R500 - R1,000', min: 500, max: 1000 },
    { label: 'R1,000 - R2,000', min: 1000, max: 2000 },
    { label: 'R2,000+', min: 2000, max: Infinity }
  ],
  weekly: [
    { label: 'Under R3,000', min: 0, max: 3000 },
    { label: 'R3,000 - R7,000', min: 3000, max: 7000 },
    { label: 'R7,000 - R15,000', min: 7000, max: 15000 },
    { label: 'R15,000+', min: 15000, max: Infinity }
  ],
  monthly: [
    { label: 'Under R8,000', min: 0, max: 8000 },
    { label: 'R8,000 - R20,000', min: 8000, max: 20000 },
    { label: 'R20,000 - R50,000', min: 20000, max: 50000 },
    { label: 'R50,000+', min: 50000, max: Infinity }
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
