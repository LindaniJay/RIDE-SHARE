
export interface SouthAfricanVehicleTypes {
  category: string;
  vehicles: Array<{
    make: string;
    model: string;
    localName?: string;
    popularity: number;
    typicalUse: string[];
    priceRange: { min: number; max: number };
  }>;
}

export interface SouthAfricanLocations {
  province: string;
  code: string;
  majorCities: Array<{
    name: string;
    coordinates: { lat: number; lng: number };
    population: number;
    economicActivity: string[];
    tourism: boolean;
    businessDistrict: boolean;
  }>;
  airports: Array<{
    name: string;
    code: string;
    city: string;
    coordinates: { lat: number; lng: number };
    international: boolean;
  }>;
  touristAttractions: Array<{
    name: string;
    type: 'beach' | 'mountain' | 'city' | 'wildlife' | 'cultural' | 'historical';
    coordinates: { lat: number; lng: number };
    popularity: number;
    recommendedVehicles: string[];
  }>;
}

export interface SouthAfricanEvents {
  name: string;
  type: 'cultural' | 'sports' | 'business' | 'religious' | 'entertainment';
  date: string;
  location: string;
  expectedAttendees: number;
  impact: 'low' | 'medium' | 'high';
  vehicleDemand: {
    increase: number; // percentage
    preferredTypes: string[];
    priceMultiplier: number;
  };
}

export interface SouthAfricanPaymentMethods {
  method: string;
  name: string;
  description: string;
  popularity: number;
  fees: number;
  processingTime: string;
  supportedBy: string[];
  localPartners: string[];
}

export interface SouthAfricanRegulations {
  drivingLicense: {
    requirements: string[];
    validityPeriod: number;
    renewalProcess: string[];
    internationalLicense: boolean;
  };
  vehicleRequirements: {
    registration: string[];
    roadworthy: string[];
    insurance: string[];
    emissions: string[];
  };
  businessRequirements: {
    hostRequirements: string[];
    vehicleRequirements: string[];
    insuranceRequirements: string[];
    taxImplications: string[];
  };
  ageRestrictions: {
    minimumAge: number;
    maximumAge?: number;
    youngDriverSurcharge: number;
    seniorDriverDiscount: number;
  };
}

export interface SouthAfricanWeather {
  season: 'summer' | 'autumn' | 'winter' | 'spring';
  months: string[];
  averageTemperature: { min: number; max: number };
  rainfall: number;
  conditions: string[];
  vehicleRecommendations: string[];
  safetyConsiderations: string[];
}

export interface SouthAfricanCulture {
  languages: Array<{
    code: string;
    name: string;
    nativeName: string;
    speakers: number;
    regions: string[];
  }>;
  customs: Array<{
    practice: string;
    description: string;
    importance: 'high' | 'medium' | 'low';
    regions: string[];
  }>;
  businessEtiquette: Array<{
    practice: string;
    description: string;
    importance: 'high' | 'medium' | 'low';
  }>;
  tipping: {
    expected: boolean;
    percentage: number;
    situations: string[];
  };
}

export interface SouthAfricanInfrastructure {
  roads: {
    national: number;
    provincial: number;
    municipal: number;
    tollRoads: Array<{
      name: string;
      cost: number;
      distance: number;
    }>;
  };
  fuel: {
    stations: number;
    averagePrice: number;
    types: string[];
    paymentMethods: string[];
  };
  telecommunications: {
    coverage: number;
    providers: string[];
    dataCosts: number;
  };
  banking: {
    majorBanks: string[];
    digitalBanking: number;
    mobilePayments: string[];
  };
}

class SouthAfricanContextService {

  /**
   * Get South African vehicle types and preferences
   */
  getSouthAfricanVehicleTypes(): SouthAfricanVehicleTypes[] {
    return [
      {
        category: 'Bakkies (Pickup Trucks)',
        vehicles: [
          { make: 'Toyota', model: 'Hilux', localName: 'Bakkie', popularity: 95, typicalUse: ['farming', 'construction', 'outdoor'], priceRange: { min: 300, max: 800 } },
          { make: 'Ford', model: 'Ranger', localName: 'Ford Bakkie', popularity: 85, typicalUse: ['farming', 'construction', 'outdoor'], priceRange: { min: 350, max: 850 } },
          { make: 'Isuzu', model: 'KB', localName: 'Isuzu Bakkie', popularity: 80, typicalUse: ['farming', 'construction'], priceRange: { min: 300, max: 750 } },
          { make: 'Nissan', model: 'Navara', localName: 'Nissan Bakkie', popularity: 75, typicalUse: ['farming', 'construction'], priceRange: { min: 320, max: 780 } }
        ]
      },
      {
        category: 'SUVs',
        vehicles: [
          { make: 'Toyota', model: 'Fortuner', popularity: 90, typicalUse: ['family', 'outdoor', 'tourism'], priceRange: { min: 400, max: 900 } },
          { make: 'Ford', model: 'Everest', popularity: 85, typicalUse: ['family', 'outdoor'], priceRange: { min: 450, max: 950 } },
          { make: 'Mitsubishi', model: 'Pajero', popularity: 80, typicalUse: ['outdoor', 'tourism'], priceRange: { min: 500, max: 1000 } },
          { make: 'Land Rover', model: 'Discovery', popularity: 75, typicalUse: ['luxury', 'outdoor'], priceRange: { min: 800, max: 1500 } }
        ]
      },
      {
        category: 'Economy Cars',
        vehicles: [
          { make: 'Toyota', model: 'Corolla', popularity: 95, typicalUse: ['city', 'business', 'family'], priceRange: { min: 200, max: 500 } },
          { make: 'Volkswagen', model: 'Polo', popularity: 90, typicalUse: ['city', 'business'], priceRange: { min: 180, max: 450 } },
          { make: 'Hyundai', model: 'i20', popularity: 85, typicalUse: ['city', 'business'], priceRange: { min: 150, max: 400 } },
          { make: 'Ford', model: 'Fiesta', popularity: 80, typicalUse: ['city'], priceRange: { min: 160, max: 420 } }
        ]
      },
      {
        category: 'Luxury Vehicles',
        vehicles: [
          { make: 'BMW', model: '3 Series', popularity: 85, typicalUse: ['business', 'luxury'], priceRange: { min: 600, max: 1200 } },
          { make: 'Mercedes-Benz', model: 'C-Class', popularity: 90, typicalUse: ['business', 'luxury'], priceRange: { min: 700, max: 1300 } },
          { make: 'Audi', model: 'A4', popularity: 80, typicalUse: ['business', 'luxury'], priceRange: { min: 650, max: 1250 } },
          { make: 'Lexus', model: 'IS', popularity: 75, typicalUse: ['luxury'], priceRange: { min: 800, max: 1400 } }
        ]
      }
    ];
  }

  /**
   * Get South African locations and regions
   */
  getSouthAfricanLocations(): SouthAfricanLocations[] {
    return [
      {
        province: 'Western Cape',
        code: 'WC',
        majorCities: [
          { name: 'Cape Town', coordinates: { lat: -33.9249, lng: 18.4241 }, population: 4618000, economicActivity: ['tourism', 'finance', 'technology'], tourism: true, businessDistrict: true },
          { name: 'Stellenbosch', coordinates: { lat: -33.9326, lng: 18.8604 }, population: 155000, economicActivity: ['wine', 'education', 'tourism'], tourism: true, businessDistrict: false },
          { name: 'George', coordinates: { lat: -33.9633, lng: 22.4617 }, population: 200000, economicActivity: ['tourism', 'agriculture'], tourism: true, businessDistrict: false }
        ],
        airports: [
          { name: 'Cape Town International Airport', code: 'CPT', city: 'Cape Town', coordinates: { lat: -33.9648, lng: 18.6017 }, international: true },
          { name: 'George Airport', code: 'GRJ', city: 'George', coordinates: { lat: -33.9847, lng: 22.3789 }, international: false }
        ],
        touristAttractions: [
          { name: 'Table Mountain', type: 'mountain', coordinates: { lat: -33.9628, lng: 18.4093 }, popularity: 95, recommendedVehicles: ['suv', 'bakkie'] },
          { name: 'V&A Waterfront', type: 'city', coordinates: { lat: -33.9056, lng: 18.4171 }, popularity: 90, recommendedVehicles: ['economy', 'luxury'] },
          { name: 'Wine Route', type: 'cultural', coordinates: { lat: -33.9326, lng: 18.8604 }, popularity: 85, recommendedVehicles: ['suv', 'luxury'] }
        ]
      },
      {
        province: 'Gauteng',
        code: 'GP',
        majorCities: [
          { name: 'Johannesburg', coordinates: { lat: -26.2041, lng: 28.0473 }, population: 5635000, economicActivity: ['finance', 'mining', 'technology'], tourism: false, businessDistrict: true },
          { name: 'Pretoria', coordinates: { lat: -25.7479, lng: 28.2293 }, population: 2920000, economicActivity: ['government', 'education', 'research'], tourism: false, businessDistrict: true },
          { name: 'Sandton', coordinates: { lat: -26.1076, lng: 28.0567 }, population: 222000, economicActivity: ['finance', 'business'], tourism: false, businessDistrict: true }
        ],
        airports: [
          { name: 'OR Tambo International Airport', code: 'JNB', city: 'Johannesburg', coordinates: { lat: -26.1337, lng: 28.2423 }, international: true },
          { name: 'Lanseria Airport', code: 'HLA', city: 'Johannesburg', coordinates: { lat: -25.9395, lng: 27.9261 }, international: false }
        ],
        touristAttractions: [
          { name: 'Soweto', type: 'cultural', coordinates: { lat: -26.2485, lng: 27.9110 }, popularity: 80, recommendedVehicles: ['economy', 'suv'] },
          { name: 'Constitution Hill', type: 'historical', coordinates: { lat: -26.1884, lng: 28.0436 }, popularity: 75, recommendedVehicles: ['economy'] },
          { name: 'Cradle of Humankind', type: 'historical', coordinates: { lat: -25.9000, lng: 27.7000 }, popularity: 70, recommendedVehicles: ['suv', 'bakkie'] }
        ]
      },
      {
        province: 'KwaZulu-Natal',
        code: 'KZN',
        majorCities: [
          { name: 'Durban', coordinates: { lat: -29.8587, lng: 31.0218 }, population: 3442000, economicActivity: ['port', 'tourism', 'manufacturing'], tourism: true, businessDistrict: true },
          { name: 'Pietermaritzburg', coordinates: { lat: -29.6006, lng: 30.3794 }, population: 750000, economicActivity: ['government', 'education'], tourism: false, businessDistrict: false }
        ],
        airports: [
          { name: 'King Shaka International Airport', code: 'DUR', city: 'Durban', coordinates: { lat: -29.6144, lng: 31.1197 }, international: true }
        ],
        touristAttractions: [
          { name: 'uShaka Marine World', type: 'cultural', coordinates: { lat: -29.8250, lng: 31.0333 }, popularity: 85, recommendedVehicles: ['economy', 'suv'] },
          { name: 'Drakensberg Mountains', type: 'mountain', coordinates: { lat: -29.5000, lng: 29.5000 }, popularity: 80, recommendedVehicles: ['suv', 'bakkie'] },
          { name: 'iSimangaliso Wetland Park', type: 'wildlife', coordinates: { lat: -28.0000, lng: 32.5000 }, popularity: 75, recommendedVehicles: ['suv', 'bakkie'] }
        ]
      }
    ];
  }

  /**
   * Get South African events and their impact on vehicle demand
   */
  getSouthAfricanEvents(): SouthAfricanEvents[] {
    return [
      {
        name: 'Cape Town International Jazz Festival',
        type: 'entertainment',
        date: '2024-03-22',
        location: 'Cape Town',
        expectedAttendees: 50000,
        impact: 'high',
        vehicleDemand: { increase: 150, preferredTypes: ['luxury', 'suv'], priceMultiplier: 1.5 }
      },
      {
        name: 'Comrades Marathon',
        type: 'sports',
        date: '2024-06-09',
        location: 'Durban to Pietermaritzburg',
        expectedAttendees: 20000,
        impact: 'high',
        vehicleDemand: { increase: 200, preferredTypes: ['suv', 'bakkie'], priceMultiplier: 2.0 }
      },
      {
        name: 'National Arts Festival',
        type: 'cultural',
        date: '2024-06-27',
        location: 'Grahamstown',
        expectedAttendees: 15000,
        impact: 'medium',
        vehicleDemand: { increase: 100, preferredTypes: ['economy', 'suv'], priceMultiplier: 1.3 }
      },
      {
        name: 'Kirstenbosch Summer Concerts',
        type: 'entertainment',
        date: '2024-12-01',
        location: 'Cape Town',
        expectedAttendees: 8000,
        impact: 'medium',
        vehicleDemand: { increase: 80, preferredTypes: ['economy', 'suv'], priceMultiplier: 1.2 }
      },
      {
        name: 'Soweto Wine Festival',
        type: 'cultural',
        date: '2024-09-14',
        location: 'Soweto',
        expectedAttendees: 12000,
        impact: 'medium',
        vehicleDemand: { increase: 90, preferredTypes: ['economy', 'suv'], priceMultiplier: 1.25 }
      }
    ];
  }

  /**
   * Get South African payment methods
   */
  getSouthAfricanPaymentMethods(): SouthAfricanPaymentMethods[] {
    return [
      {
        method: 'eft',
        name: 'EFT Transfer',
        description: 'Electronic Funds Transfer',
        popularity: 95,
        fees: 0,
        processingTime: '1-3 business days',
        supportedBy: ['all_banks'],
        localPartners: ['Standard Bank', 'FNB', 'ABSA', 'Nedbank', 'Capitec']
      },
      {
        method: 'payfast',
        name: 'PayFast',
        description: 'South African payment gateway',
        popularity: 90,
        fees: 3.5,
        processingTime: 'Instant',
        supportedBy: ['payfast'],
        localPartners: ['PayFast', 'PayGate', 'Yoco']
      },
      {
        method: 'snapscan',
        name: 'SnapScan',
        description: 'Mobile payment solution',
        popularity: 85,
        fees: 2.5,
        processingTime: 'Instant',
        supportedBy: ['snapscan'],
        localPartners: ['SnapScan', 'Standard Bank']
      },
      {
        method: 'zapper',
        name: 'Zapper',
        description: 'Mobile payment app',
        popularity: 80,
        fees: 2.5,
        processingTime: 'Instant',
        supportedBy: ['zapper'],
        localPartners: ['Zapper', 'FNB']
      },
      {
        method: 'card',
        name: 'Credit/Debit Card',
        description: 'Visa, Mastercard, American Express',
        popularity: 75,
        fees: 2.9,
        processingTime: 'Instant',
        supportedBy: ['all_banks'],
        localPartners: ['Standard Bank', 'FNB', 'ABSA', 'Nedbank']
      },
      {
        method: 'bank_transfer',
        name: 'Bank Transfer',
        description: 'Direct bank transfer',
        popularity: 70,
        fees: 0,
        processingTime: '1-2 business days',
        supportedBy: ['all_banks'],
        localPartners: ['Standard Bank', 'FNB', 'ABSA', 'Nedbank', 'Capitec']
      }
    ];
  }

  /**
   * Get South African regulations
   */
  getSouthAfricanRegulations(): SouthAfricanRegulations {
    return {
      drivingLicense: {
        requirements: [
          'Valid South African driving license',
          'International driving permit (for tourists)',
          'License must be in English or with certified translation',
          'Minimum age 18 years',
          'License must be valid for at least 1 year'
        ],
        validityPeriod: 5,
        renewalProcess: [
          'Visit local traffic department',
          'Complete renewal form',
          'Provide medical certificate if over 65',
          'Pay renewal fee',
          'Collect new license'
        ],
        internationalLicense: true
      },
      vehicleRequirements: {
        registration: [
          'Valid vehicle registration certificate',
          'License disc displayed on vehicle',
          'Registration must be in owner\'s name'
        ],
        roadworthy: [
          'Valid roadworthy certificate',
          'Certificate must be less than 2 years old',
          'Vehicle must pass safety inspection'
        ],
        insurance: [
          'Comprehensive insurance required',
          'Third-party liability insurance',
          'Insurance must cover rental use'
        ],
        emissions: [
          'Vehicle must meet emission standards',
          'Valid emissions certificate',
          'Regular emissions testing required'
        ]
      },
      businessRequirements: {
        hostRequirements: [
          'South African ID or valid work permit',
          'Proof of residence',
          'Bank account in South Africa',
          'Tax clearance certificate',
          'Business registration (if applicable)'
        ],
        vehicleRequirements: [
          'Vehicle must be registered in South Africa',
          'Valid roadworthy certificate',
          'Comprehensive insurance',
          'Vehicle must be less than 10 years old',
          'No outstanding traffic fines'
        ],
        insuranceRequirements: [
          'Commercial vehicle insurance',
          'Public liability insurance',
          'Comprehensive coverage',
          'Insurance must cover rental activities'
        ],
        taxImplications: [
          'Income tax on rental earnings',
          'VAT registration if applicable',
          'PAYE for employees',
          'Annual tax returns required'
        ]
      },
      ageRestrictions: {
        minimumAge: 18,
        maximumAge: 75,
        youngDriverSurcharge: 50,
        seniorDriverDiscount: 10
      }
    };
  }

  /**
   * Get South African weather patterns
   */
  getSouthAfricanWeather(): SouthAfricanWeather[] {
    return [
      {
        season: 'summer',
        months: ['December', 'January', 'February'],
        averageTemperature: { min: 18, max: 28 },
        rainfall: 15,
        conditions: ['hot', 'humid', 'thunderstorms'],
        vehicleRecommendations: ['air_conditioning', 'sunroof', 'tinted_windows'],
        safetyConsiderations: ['heat_stroke_prevention', 'hydration', 'sun_protection']
      },
      {
        season: 'autumn',
        months: ['March', 'April', 'May'],
        averageTemperature: { min: 12, max: 22 },
        rainfall: 25,
        conditions: ['mild', 'windy', 'rainy'],
        vehicleRecommendations: ['heating', 'defogging', 'wipers'],
        safetyConsiderations: ['wet_road_conditions', 'reduced_visibility', 'wind_gusts']
      },
      {
        season: 'winter',
        months: ['June', 'July', 'August'],
        averageTemperature: { min: 8, max: 18 },
        rainfall: 30,
        conditions: ['cold', 'wet', 'windy'],
        vehicleRecommendations: ['heating', 'defogging', 'wipers', 'winter_tyres'],
        safetyConsiderations: ['ice_formation', 'reduced_visibility', 'wind_gusts']
      },
      {
        season: 'spring',
        months: ['September', 'October', 'November'],
        averageTemperature: { min: 14, max: 24 },
        rainfall: 20,
        conditions: ['mild', 'windy', 'changeable'],
        vehicleRecommendations: ['versatile_climate_control', 'good_visibility'],
        safetyConsiderations: ['changeable_conditions', 'wind_gusts', 'temperature_variations']
      }
    ];
  }

  /**
   * Get South African cultural context
   */
  getSouthAfricanCulture(): SouthAfricanCulture {
    return {
      languages: [
        { code: 'en', name: 'English', nativeName: 'English', speakers: 9500000, regions: ['all'] },
        { code: 'af', name: 'Afrikaans', nativeName: 'Afrikaans', speakers: 7000000, regions: ['Western Cape', 'Northern Cape', 'Free State'] },
        { code: 'zu', name: 'Zulu', nativeName: 'isiZulu', speakers: 12000000, regions: ['KwaZulu-Natal', 'Gauteng'] },
        { code: 'xh', name: 'Xhosa', nativeName: 'isiXhosa', speakers: 8000000, regions: ['Eastern Cape', 'Western Cape'] },
        { code: 'nso', name: 'Northern Sotho', nativeName: 'Sesotho sa Leboa', speakers: 4500000, regions: ['Limpopo', 'Mpumalanga'] },
        { code: 'st', name: 'Sotho', nativeName: 'Sesotho', speakers: 4000000, regions: ['Free State', 'Gauteng'] },
        { code: 'tn', name: 'Tswana', nativeName: 'Setswana', speakers: 4000000, regions: ['North West', 'Northern Cape'] }
      ],
      customs: [
        {
          practice: 'Greeting',
          description: 'Handshake with eye contact, or traditional greeting in local language',
          importance: 'high',
          regions: ['all']
        },
        {
          practice: 'Respect for elders',
          description: 'Always show respect to older people',
          importance: 'high',
          regions: ['all']
        },
        {
          practice: 'Ubuntu philosophy',
          description: 'Humanity towards others, community spirit',
          importance: 'high',
          regions: ['all']
        },
        {
          practice: 'Punctuality',
          description: 'Being on time is important in business',
          importance: 'medium',
          regions: ['all']
        }
      ],
      businessEtiquette: [
        {
          practice: 'Formal dress',
          description: 'Business attire expected in formal meetings',
          importance: 'high'
        },
        {
          practice: 'Business cards',
          description: 'Exchange business cards with both hands',
          importance: 'medium'
        },
        {
          practice: 'Meeting protocol',
          description: 'Wait to be invited to sit, maintain eye contact',
          importance: 'high'
        },
        {
          practice: 'Negotiation style',
          description: 'Build relationships before discussing business',
          importance: 'high'
        }
      ],
      tipping: {
        expected: true,
        percentage: 10,
        situations: ['restaurants', 'hotels', 'tour_guides', 'car_guards']
      }
    };
  }

  /**
   * Get South African infrastructure information
   */
  getSouthAfricanInfrastructure(): SouthAfricanInfrastructure {
    return {
      roads: {
        national: 75000,
        provincial: 150000,
        municipal: 300000,
        tollRoads: [
          { name: 'N1 Highway (Cape Town to Johannesburg)', cost: 45, distance: 1400 },
          { name: 'N3 Highway (Johannesburg to Durban)', cost: 35, distance: 600 },
          { name: 'N2 Highway (Cape Town to Port Elizabeth)', cost: 25, distance: 750 }
        ]
      },
      fuel: {
        stations: 5000,
        averagePrice: 22.50,
        types: ['Petrol 95', 'Petrol 93', 'Diesel', 'LPG'],
        paymentMethods: ['Cash', 'Card', 'SnapScan', 'Zapper', 'FNB App']
      },
      telecommunications: {
        coverage: 95,
        providers: ['Vodacom', 'MTN', 'Cell C', 'Telkom'],
        dataCosts: 0.50
      },
      banking: {
        majorBanks: ['Standard Bank', 'FNB', 'ABSA', 'Nedbank', 'Capitec'],
        digitalBanking: 85,
        mobilePayments: ['SnapScan', 'Zapper', 'FNB App', 'Standard Bank App']
      }
    };
  }

  /**
   * Get South African emergency services
   */
  getSouthAfricanEmergencyServices(): {
    police: { number: string; address: string };
    ambulance: { number: string; address: string };
    fire: { number: string; address: string };
    towing: { number: string; address: string };
    hospitals: Array<{ name: string; address: string; phone: string }>;
  } {
    return {
      police: { number: '10111', address: 'Nearest police station' },
      ambulance: { number: '10177', address: 'Nearest hospital' },
      fire: { number: '10111', address: 'Nearest fire station' },
      towing: { number: '083 123 4567', address: 'Local towing service' },
      hospitals: [
        { name: 'Groote Schuur Hospital', address: 'Cape Town', phone: '021 404 9111' },
        { name: 'Chris Hani Baragwanath Hospital', address: 'Soweto', phone: '011 933 8000' },
        { name: 'Inkosi Albert Luthuli Central Hospital', address: 'Durban', phone: '031 240 1000' }
      ]
    };
  }

  /**
   * Get South African business hours and holidays
   */
  getSouthAfricanBusinessInfo(): {
    businessHours: { [key: string]: { open: string; close: string; closed?: boolean } };
    holidays: Array<{ date: string; name: string; type: 'public' | 'religious' | 'cultural' }>;
    timezone: string;
    provinces: Array<{ code: string; name: string; capital: string; majorCities: string[] }>;
    languages: Array<{ code: string; name: string; nativeName: string; speakers: number }>;
  } {
    return {
      businessHours: {
        monday: { open: '08:00', close: '17:00' },
        tuesday: { open: '08:00', close: '17:00' },
        wednesday: { open: '08:00', close: '17:00' },
        thursday: { open: '08:00', close: '17:00' },
        friday: { open: '08:00', close: '17:00' },
        saturday: { open: '09:00', close: '13:00' },
        sunday: { open: '09:00', close: '13:00' }
      },
      holidays: [
        { date: '2024-01-01', name: 'New Year\'s Day', type: 'public' },
        { date: '2024-03-21', name: 'Human Rights Day', type: 'public' },
        { date: '2024-03-29', name: 'Good Friday', type: 'religious' },
        { date: '2024-04-01', name: 'Family Day', type: 'public' },
        { date: '2024-04-27', name: 'Freedom Day', type: 'public' },
        { date: '2024-05-01', name: 'Workers\' Day', type: 'public' },
        { date: '2024-06-16', name: 'Youth Day', type: 'public' },
        { date: '2024-08-09', name: 'National Women\'s Day', type: 'public' },
        { date: '2024-09-24', name: 'Heritage Day', type: 'cultural' },
        { date: '2024-12-16', name: 'Day of Reconciliation', type: 'public' },
        { date: '2024-12-25', name: 'Christmas Day', type: 'religious' },
        { date: '2024-12-26', name: 'Day of Goodwill', type: 'public' }
      ],
      timezone: 'Africa/Johannesburg',
      provinces: [
        { code: 'WC', name: 'Western Cape', capital: 'Cape Town', majorCities: ['Cape Town', 'Stellenbosch', 'Paarl', 'George', 'Mossel Bay'] },
        { code: 'EC', name: 'Eastern Cape', capital: 'Bhisho', majorCities: ['Port Elizabeth', 'East London', 'Uitenhage', 'Queenstown', 'Grahamstown'] },
        { code: 'KZN', name: 'KwaZulu-Natal', capital: 'Pietermaritzburg', majorCities: ['Durban', 'Pietermaritzburg', 'Newcastle', 'Pinetown', 'Richards Bay'] },
        { code: 'GP', name: 'Gauteng', capital: 'Johannesburg', majorCities: ['Johannesburg', 'Pretoria', 'Soweto', 'Sandton', 'Centurion'] },
        { code: 'MP', name: 'Mpumalanga', capital: 'Nelspruit', majorCities: ['Nelspruit', 'Witbank', 'Secunda', 'Standerton', 'Bethal'] },
        { code: 'LP', name: 'Limpopo', capital: 'Polokwane', majorCities: ['Polokwane', 'Tzaneen', 'Lephalale', 'Mokopane', 'Musina'] },
        { code: 'NW', name: 'North West', capital: 'Mahikeng', majorCities: ['Mahikeng', 'Potchefstroom', 'Klerksdorp', 'Rustenburg', 'Brits'] },
        { code: 'FS', name: 'Free State', capital: 'Bloemfontein', majorCities: ['Bloemfontein', 'Welkom', 'Kroonstad', 'Bethlehem', 'Sasolburg'] },
        { code: 'NC', name: 'Northern Cape', capital: 'Kimberley', majorCities: ['Kimberley', 'Upington', 'Springbok', 'Kuruman', 'De Aar'] }
      ],
      languages: [
        { code: 'en', name: 'English', nativeName: 'English', speakers: 9500000 },
        { code: 'af', name: 'Afrikaans', nativeName: 'Afrikaans', speakers: 7000000 },
        { code: 'zu', name: 'Zulu', nativeName: 'isiZulu', speakers: 12000000 },
        { code: 'xh', name: 'Xhosa', nativeName: 'isiXhosa', speakers: 8000000 },
        { code: 'nso', name: 'Northern Sotho', nativeName: 'Sesotho sa Leboa', speakers: 4500000 },
        { code: 'st', name: 'Sotho', nativeName: 'Sesotho', speakers: 4000000 },
        { code: 'tn', name: 'Tswana', nativeName: 'Setswana', speakers: 4000000 },
        { code: 'ts', name: 'Tsonga', nativeName: 'Xitsonga', speakers: 2000000 },
        { code: 've', name: 'Venda', nativeName: 'Tshivenḓa', speakers: 1000000 },
        { code: 'nr', name: 'Ndebele', nativeName: 'isiNdebele', speakers: 1000000 },
        { code: 'ss', name: 'Swati', nativeName: 'SiSwati', speakers: 1000000 }
      ]
    };
  }
}

export const southAfricanContextService = new SouthAfricanContextService();
