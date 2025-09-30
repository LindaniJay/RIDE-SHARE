export interface MockCar {
  id: string;
  make: string;
  model: string;
  year: number;
  type: 'car' | 'suv' | 'bakkie' | 'van' | 'motorcycle' | 'truck' | 'trailer' | 'bus' | 'minibus' | 'ute' | 'coupe' | 'hatchback' | 'sedan' | 'convertible' | 'wagon' | 'pickup' | 'commercial';
  pricePerDay: number;
  location: string;
  description: string;
  features: string[];
  images: string[];
  host: {
    id: string;
    name: string;
    email: string;
    phone: string;
    rating: number;
    avatar: string;
  };
  rating: number;
  totalBookings: number;
  isAvailable: boolean;
  fuelType: 'petrol' | 'diesel' | 'hybrid' | 'electric';
  transmission: 'manual' | 'automatic';
  seats: number;
  mileage: number;
  color: string;
  licensePlate: string;
  insurance: boolean;
  roadworthy: boolean;
  createdAt: string;
  updatedAt: string;
}

export const mockCars: MockCar[] = [
  {
    id: '1',
    make: 'Toyota',
    model: 'Corolla',
    year: 2022,
    type: 'car',
    pricePerDay: 450,
    location: 'Cape Town, Western Cape',
    description: 'Reliable and fuel-efficient sedan perfect for city driving and weekend getaways. Well-maintained with full service history. Great for exploring the Cape Peninsula!',
    features: ['Air Conditioning', 'Bluetooth', 'GPS Navigation', 'USB Charging', 'Backup Camera', 'Cruise Control'],
    images: [
      'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&h=600&fit=crop'
    ],
    host: {
      id: 'host1',
      name: 'Sarah Johnson',
      email: 'sarah.johnson@email.com',
      phone: '+27 82 123 4567',
      rating: 4.8,
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face'
    },
    rating: 4.7,
    totalBookings: 23,
    isAvailable: true,
    fuelType: 'petrol',
    transmission: 'automatic',
    seats: 5,
    mileage: 15000,
    color: 'White',
    licensePlate: 'CA123GP',
    insurance: true,
    roadworthy: true,
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    make: 'BMW',
    model: 'X3',
    year: 2021,
    type: 'suv',
    pricePerDay: 850,
    location: 'Johannesburg, Gauteng',
    description: 'Luxury SUV with premium features. Perfect for family trips and business travel in Joburg. Includes navigation and premium sound system.',
    features: ['Leather Seats', 'Sunroof', 'Premium Sound', 'Navigation', 'Parking Sensors', 'Cruise Control', 'Heated Seats'],
    images: [
      'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&h=600&fit=crop'
    ],
    host: {
      id: 'host2',
      name: 'Michael Chen',
      email: 'michael.chen@email.com',
      phone: '+27 83 456 7890',
      rating: 4.9,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
    },
    rating: 4.8,
    totalBookings: 45,
    isAvailable: true,
    fuelType: 'petrol',
    transmission: 'automatic',
    seats: 5,
    mileage: 28000,
    color: 'Black',
    licensePlate: 'JHB456GP',
    insurance: true,
    roadworthy: true,
    createdAt: '2024-01-10T08:30:00Z',
    updatedAt: '2024-01-10T08:30:00Z'
  },
  {
    id: '3',
    make: 'Ford',
    model: 'Ranger',
    year: 2023,
    type: 'bakkie',
    pricePerDay: 650,
    location: 'Durban, KwaZulu-Natal',
    description: 'Powerful bakkie perfect for work and adventure. Great for hauling equipment or weekend camping trips along the KZN coast.',
    features: ['4WD', 'Towing Package', 'Bed Liner', 'Bluetooth', 'USB Charging', 'Cruise Control'],
    images: [
      'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&h=600&fit=crop'
    ],
    host: {
      id: 'host3',
      name: 'David Wilson',
      email: 'david.wilson@email.com',
      phone: '+27 84 789 0123',
      rating: 4.6,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
    },
    rating: 4.5,
    totalBookings: 18,
    isAvailable: true,
    fuelType: 'diesel',
    transmission: 'manual',
    seats: 5,
    mileage: 12000,
    color: 'Blue',
    licensePlate: 'DBN789GP',
    insurance: true,
    roadworthy: true,
    createdAt: '2024-01-20T14:15:00Z',
    updatedAt: '2024-01-20T14:15:00Z'
  },
  {
    id: '4',
    make: 'Mercedes-Benz',
    model: 'C-Class',
    year: 2022,
    type: 'car',
    pricePerDay: 750,
    location: 'Pretoria, Gauteng',
    description: 'Luxury sedan with premium comfort and performance. Perfect for business meetings and special occasions.',
    features: ['Leather Seats', 'Premium Sound', 'Navigation', 'Parking Sensors', 'Cruise Control', 'Heated Seats', 'Sunroof'],
    images: [
      'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&h=600&fit=crop'
    ],
    host: {
      id: 'host4',
      name: 'Lisa Brown',
      email: 'lisa.brown@email.com',
      phone: '+27 85 012 3456',
      rating: 4.7,
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face'
    },
    rating: 4.6,
    totalBookings: 32,
    isAvailable: true,
    fuelType: 'petrol',
    transmission: 'automatic',
    seats: 5,
    mileage: 18000,
    color: 'Silver',
    licensePlate: 'PTA012GP',
    insurance: true,
    roadworthy: true,
    createdAt: '2024-01-12T09:45:00Z',
    updatedAt: '2024-01-12T09:45:00Z'
  },
  {
    id: '5',
    make: 'Volkswagen',
    model: 'Golf',
    year: 2021,
    type: 'car',
    pricePerDay: 400,
    location: 'Port Elizabeth, Eastern Cape',
    description: 'Compact and efficient hatchback. Great for city driving and short trips. Excellent fuel economy.',
    features: ['Air Conditioning', 'Bluetooth', 'USB Charging', 'Cruise Control', 'Parking Sensors'],
    images: [
      'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&h=600&fit=crop'
    ],
    host: {
      id: 'host5',
      name: 'James Taylor',
      email: 'james.taylor@email.com',
      phone: '+27 86 345 6789',
      rating: 4.5,
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face'
    },
    rating: 4.4,
    totalBookings: 28,
    isAvailable: true,
    fuelType: 'petrol',
    transmission: 'manual',
    seats: 5,
    mileage: 22000,
    color: 'Red',
    licensePlate: 'PE345GP',
    insurance: true,
    roadworthy: true,
    createdAt: '2024-01-08T11:20:00Z',
    updatedAt: '2024-01-08T11:20:00Z'
  },
  {
    id: '6',
    make: 'Audi',
    model: 'Q5',
    year: 2023,
    type: 'suv',
    pricePerDay: 950,
    location: 'Cape Town, Western Cape',
    description: 'Premium SUV with advanced technology and luxury features. Perfect for family trips and business travel.',
    features: ['Leather Seats', 'Sunroof', 'Premium Sound', 'Navigation', 'Parking Sensors', 'Cruise Control', 'Heated Seats', 'Wireless Charging'],
    images: [
      'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&h=600&fit=crop'
    ],
    host: {
      id: 'host6',
      name: 'Emma Davis',
      email: 'emma.davis@email.com',
      phone: '+27 87 678 9012',
      rating: 4.9,
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face'
    },
    rating: 4.8,
    totalBookings: 41,
    isAvailable: true,
    fuelType: 'petrol',
    transmission: 'automatic',
    seats: 5,
    mileage: 8000,
    color: 'White',
    licensePlate: 'CT678GP',
    insurance: true,
    roadworthy: true,
    createdAt: '2024-01-25T16:30:00Z',
    updatedAt: '2024-01-25T16:30:00Z'
  },
  // South African Commercial Vehicles
  {
    id: '7',
    make: 'Isuzu',
    model: 'NPR 400',
    year: 2022,
    type: 'truck',
    pricePerDay: 1200,
    location: 'Johannesburg, Gauteng',
    description: 'Reliable medium-duty truck perfect for construction, delivery, and moving services. Well-maintained with full service history.',
    features: ['Air Brakes', 'Power Steering', 'Air Conditioning', 'Radio', 'Tool Storage', 'Loading Ramp'],
    images: [
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&h=600&fit=crop'
    ],
    host: {
      id: 'host7',
      name: 'Thabo Mthembu',
      email: 'thabo.mthembu@email.com',
      phone: '+27 82 111 2222',
      rating: 4.7,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
    },
    rating: 4.6,
    totalBookings: 15,
    isAvailable: true,
    fuelType: 'diesel',
    transmission: 'manual',
    seats: 3,
    mileage: 45000,
    color: 'White',
    licensePlate: 'JHB789GP',
    insurance: true,
    roadworthy: true,
    createdAt: '2024-01-18T10:00:00Z',
    updatedAt: '2024-01-18T10:00:00Z'
  },
  {
    id: '8',
    make: 'Toyota',
    model: 'Quantum',
    year: 2021,
    type: 'minibus',
    pricePerDay: 800,
    location: 'Durban, KwaZulu-Natal',
    description: 'Popular minibus taxi perfect for group transport, airport shuttles, and tour groups. Comfortable seating for up to 16 passengers.',
    features: ['Air Conditioning', 'Radio', 'Comfortable Seating', 'Luggage Space', 'Safety Equipment'],
    images: [
      'https://images.unsplash.com/photo-1570125909517-53cb21c89ff2?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&h=600&fit=crop'
    ],
    host: {
      id: 'host8',
      name: 'Nomsa Dlamini',
      email: 'nomsa.dlamini@email.com',
      phone: '+27 83 333 4444',
      rating: 4.5,
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face'
    },
    rating: 4.4,
    totalBookings: 22,
    isAvailable: true,
    fuelType: 'diesel',
    transmission: 'manual',
    seats: 16,
    mileage: 65000,
    color: 'White',
    licensePlate: 'DBN456GP',
    insurance: true,
    roadworthy: true,
    createdAt: '2024-01-14T14:30:00Z',
    updatedAt: '2024-01-14T14:30:00Z'
  },
  {
    id: '9',
    make: 'Mercedes-Benz',
    model: 'Sprinter',
    year: 2023,
    type: 'van',
    pricePerDay: 900,
    location: 'Cape Town, Western Cape',
    description: 'Premium delivery van with excellent fuel economy and reliability. Perfect for courier services, small business deliveries, and moving.',
    features: ['Air Conditioning', 'Radio', 'Loading Ramp', 'Cargo Tie-Downs', 'Side Sliding Door', 'Rear Doors'],
    images: [
      'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop'
    ],
    host: {
      id: 'host9',
      name: 'Pieter van der Merwe',
      email: 'pieter.vandermerwe@email.com',
      phone: '+27 84 555 6666',
      rating: 4.8,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
    },
    rating: 4.7,
    totalBookings: 28,
    isAvailable: true,
    fuelType: 'diesel',
    transmission: 'manual',
    seats: 3,
    mileage: 25000,
    color: 'White',
    licensePlate: 'CT789GP',
    insurance: true,
    roadworthy: true,
    createdAt: '2024-01-22T09:15:00Z',
    updatedAt: '2024-01-22T09:15:00Z'
  },
  {
    id: '10',
    make: 'Hino',
    model: '300 Series',
    year: 2021,
    type: 'truck',
    pricePerDay: 1500,
    location: 'Pretoria, Gauteng',
    description: 'Heavy-duty truck perfect for construction, mining, and industrial transport. Excellent for hauling equipment and materials.',
    features: ['Air Brakes', 'Power Steering', 'Air Conditioning', 'Radio', 'Tool Storage', 'Crane Attachment Points'],
    images: [
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&h=600&fit=crop'
    ],
    host: {
      id: 'host10',
      name: 'Sipho Nkosi',
      email: 'sipho.nkosi@email.com',
      phone: '+27 85 777 8888',
      rating: 4.6,
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face'
    },
    rating: 4.5,
    totalBookings: 12,
    isAvailable: true,
    fuelType: 'diesel',
    transmission: 'manual',
    seats: 2,
    mileage: 75000,
    color: 'Yellow',
    licensePlate: 'PTA123GP',
    insurance: true,
    roadworthy: true,
    createdAt: '2024-01-16T11:45:00Z',
    updatedAt: '2024-01-16T11:45:00Z'
  },
  {
    id: '11',
    make: 'VW',
    model: 'Crafter',
    year: 2022,
    type: 'van',
    pricePerDay: 750,
    location: 'Port Elizabeth, Eastern Cape',
    description: 'Reliable cargo van perfect for small business deliveries, courier services, and moving. Great fuel economy and reliability.',
    features: ['Air Conditioning', 'Radio', 'Loading Ramp', 'Cargo Tie-Downs', 'Side Sliding Door', 'Rear Doors', 'Partition'],
    images: [
      'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop'
    ],
    host: {
      id: 'host11',
      name: 'Maria Santos',
      email: 'maria.santos@email.com',
      phone: '+27 86 999 0000',
      rating: 4.7,
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face'
    },
    rating: 4.6,
    totalBookings: 19,
    isAvailable: true,
    fuelType: 'diesel',
    transmission: 'manual',
    seats: 3,
    mileage: 35000,
    color: 'White',
    licensePlate: 'PE456GP',
    insurance: true,
    roadworthy: true,
    createdAt: '2024-01-19T13:20:00Z',
    updatedAt: '2024-01-19T13:20:00Z'
  },
  {
    id: '12',
    make: 'Hyundai',
    model: 'H1',
    year: 2023,
    type: 'minibus',
    pricePerDay: 700,
    location: 'Bloemfontein, Free State',
    description: 'Comfortable minibus perfect for airport transfers, group tours, and corporate transport. Seats up to 12 passengers comfortably.',
    features: ['Air Conditioning', 'Radio', 'Comfortable Seating', 'Luggage Space', 'Safety Equipment', 'USB Charging'],
    images: [
      'https://images.unsplash.com/photo-1570125909517-53cb21c89ff2?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&h=600&fit=crop'
    ],
    host: {
      id: 'host12',
      name: 'Johan Botha',
      email: 'johan.botha@email.com',
      phone: '+27 87 111 2222',
      rating: 4.8,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
    },
    rating: 4.7,
    totalBookings: 25,
    isAvailable: true,
    fuelType: 'diesel',
    transmission: 'manual',
    seats: 12,
    mileage: 15000,
    color: 'White',
    licensePlate: 'BF789GP',
    insurance: true,
    roadworthy: true,
    createdAt: '2024-01-21T15:30:00Z',
    updatedAt: '2024-01-21T15:30:00Z'
  },
  {
    id: '13',
    make: 'Nissan',
    model: 'NP200',
    year: 2022,
    type: 'bakkie',
    pricePerDay: 500,
    location: 'Nelspruit, Mpumalanga',
    description: 'Compact bakkie perfect for small business deliveries, farm work, and weekend adventures. Excellent fuel economy and reliability.',
    features: ['Air Conditioning', 'Radio', 'Load Bed', 'Tie-Down Points', 'Bluetooth', 'USB Charging'],
    images: [
      'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&h=600&fit=crop'
    ],
    host: {
      id: 'host13',
      name: 'Lerato Mokoena',
      email: 'lerato.mokoena@email.com',
      phone: '+27 82 333 4444',
      rating: 4.5,
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face'
    },
    rating: 4.4,
    totalBookings: 31,
    isAvailable: true,
    fuelType: 'petrol',
    transmission: 'manual',
    seats: 2,
    mileage: 28000,
    color: 'Red',
    licensePlate: 'NEL123GP',
    insurance: true,
    roadworthy: true,
    createdAt: '2024-01-17T08:45:00Z',
    updatedAt: '2024-01-17T08:45:00Z'
  },
  {
    id: '14',
    make: 'Ford',
    model: 'Transit',
    year: 2023,
    type: 'van',
    pricePerDay: 850,
    location: 'East London, Eastern Cape',
    description: 'Versatile cargo van perfect for delivery services, moving, and small business transport. Excellent cargo space and reliability.',
    features: ['Air Conditioning', 'Radio', 'Loading Ramp', 'Cargo Tie-Downs', 'Side Sliding Door', 'Rear Doors', 'Partition'],
    images: [
      'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop'
    ],
    host: {
      id: 'host14',
      name: 'Andile Khumalo',
      email: 'andile.khumalo@email.com',
      phone: '+27 83 555 6666',
      rating: 4.6,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
    },
    rating: 4.5,
    totalBookings: 17,
    isAvailable: true,
    fuelType: 'diesel',
    transmission: 'manual',
    seats: 3,
    mileage: 20000,
    color: 'White',
    licensePlate: 'EL456GP',
    insurance: true,
    roadworthy: true,
    createdAt: '2024-01-23T12:15:00Z',
    updatedAt: '2024-01-23T12:15:00Z'
  },
  {
    id: '15',
    make: 'Toyota',
    model: 'Hilux',
    year: 2023,
    type: 'bakkie',
    pricePerDay: 750,
    location: 'Polokwane, Limpopo',
    description: 'Legendary bakkie known for its reliability and toughness. Perfect for farm work, construction, and outdoor adventures.',
    features: ['4WD', 'Air Conditioning', 'Radio', 'Load Bed', 'Tie-Down Points', 'Bluetooth', 'USB Charging', 'Cruise Control'],
    images: [
      'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&h=600&fit=crop'
    ],
    host: {
      id: 'host15',
      name: 'Tshepo Molefe',
      email: 'tshepo.molefe@email.com',
      phone: '+27 84 777 8888',
      rating: 4.9,
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face'
    },
    rating: 4.8,
    totalBookings: 35,
    isAvailable: true,
    fuelType: 'diesel',
    transmission: 'manual',
    seats: 5,
    mileage: 12000,
    color: 'White',
    licensePlate: 'POL789GP',
    insurance: true,
    roadworthy: true,
    createdAt: '2024-01-20T16:00:00Z',
    updatedAt: '2024-01-20T16:00:00Z'
  },
  {
    id: '16',
    make: 'Iveco',
    model: 'Daily',
    year: 2022,
    type: 'truck',
    pricePerDay: 1100,
    location: 'Rustenburg, North West',
    description: 'Medium-duty truck perfect for construction, delivery, and moving services. Excellent payload capacity and reliability.',
    features: ['Air Brakes', 'Power Steering', 'Air Conditioning', 'Radio', 'Tool Storage', 'Loading Ramp'],
    images: [
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&h=600&fit=crop'
    ],
    host: {
      id: 'host16',
      name: 'Kgosi Mokoena',
      email: 'kgosi.mokoena@email.com',
      phone: '+27 85 999 0000',
      rating: 4.7,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
    },
    rating: 4.6,
    totalBookings: 14,
    isAvailable: true,
    fuelType: 'diesel',
    transmission: 'manual',
    seats: 3,
    mileage: 55000,
    color: 'White',
    licensePlate: 'RUS123GP',
    insurance: true,
    roadworthy: true,
    createdAt: '2024-01-24T10:30:00Z',
    updatedAt: '2024-01-24T10:30:00Z'
  },
  {
    id: '17',
    make: 'Honda',
    model: 'CB125F',
    year: 2023,
    type: 'motorcycle',
    pricePerDay: 200,
    location: 'Cape Town, Western Cape',
    description: 'Reliable commuter motorcycle perfect for city riding and short trips. Excellent fuel economy and easy to handle.',
    features: ['Electric Start', 'Fuel Injection', 'Disc Brakes', 'LED Lights', 'Digital Display'],
    images: [
      'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&h=600&fit=crop'
    ],
    host: {
      id: 'host17',
      name: 'Zanele Mthembu',
      email: 'zanele.mthembu@email.com',
      phone: '+27 82 444 5555',
      rating: 4.8,
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face'
    },
    rating: 4.7,
    totalBookings: 42,
    isAvailable: true,
    fuelType: 'petrol',
    transmission: 'manual',
    seats: 2,
    mileage: 5000,
    color: 'Red',
    licensePlate: 'CT999GP',
    insurance: true,
    roadworthy: true,
    createdAt: '2024-01-26T14:45:00Z',
    updatedAt: '2024-01-26T14:45:00Z'
  },
  {
    id: '18',
    make: 'Kawasaki',
    model: 'Ninja 300',
    year: 2022,
    type: 'motorcycle',
    pricePerDay: 350,
    location: 'Johannesburg, Gauteng',
    description: 'Sport motorcycle perfect for weekend rides and motorcycle enthusiasts. Great performance and handling.',
    features: ['ABS Brakes', 'Digital Display', 'LED Lights', 'Sport Suspension', 'Quick Shifter'],
    images: [
      'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&h=600&fit=crop'
    ],
    host: {
      id: 'host18',
      name: 'Ryan O\'Connor',
      email: 'ryan.oconnor@email.com',
      phone: '+27 83 666 7777',
      rating: 4.9,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
    },
    rating: 4.8,
    totalBookings: 38,
    isAvailable: true,
    fuelType: 'petrol',
    transmission: 'manual',
    seats: 2,
    mileage: 8000,
    color: 'Green',
    licensePlate: 'JHB888GP',
    insurance: true,
    roadworthy: true,
    createdAt: '2024-01-27T11:20:00Z',
    updatedAt: '2024-01-27T11:20:00Z'
  }
];

export const getMockCars = (): MockCar[] => {
  return mockCars;
};

export const getMockCarById = (id: string): MockCar | undefined => {
  return mockCars.find(car => car.id === id);
};

export const getAvailableCars = (): MockCar[] => {
  return mockCars.filter(car => car.isAvailable);
};

export const searchMockCars = (query: string, filters?: {
  type?: string;
  minPrice?: number;
  maxPrice?: number;
  location?: string;
}): MockCar[] => {
  let results = mockCars.filter(car => car.isAvailable);

  if (query) {
    const searchTerm = query.toLowerCase();
    results = results.filter(car => 
      car.make.toLowerCase().includes(searchTerm) ||
      car.model.toLowerCase().includes(searchTerm) ||
      car.location.toLowerCase().includes(searchTerm) ||
      car.description.toLowerCase().includes(searchTerm)
    );
  }

  if (filters) {
    if (filters.type) {
      results = results.filter(car => car.type === filters.type);
    }
    if (filters.minPrice) {
      results = results.filter(car => car.pricePerDay >= filters.minPrice!);
    }
    if (filters.maxPrice) {
      results = results.filter(car => car.pricePerDay <= filters.maxPrice!);
    }
    if (filters.location) {
      results = results.filter(car => 
        car.location.toLowerCase().includes(filters.location!.toLowerCase())
      );
    }
  }

  return results;
};
