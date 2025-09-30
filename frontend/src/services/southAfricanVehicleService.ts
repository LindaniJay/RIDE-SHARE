
export interface SouthAfricanVehicleRecommendation {
  vehicleId: string;
  make: string;
  model: string;
  year: number;
  type: string;
  localName?: string;
  dailyRate: number;
  currency: string;
  location: string;
  province: string;
  features: string[];
  suitability: {
    forTourists: boolean;
    forBusiness: boolean;
    forFamilies: boolean;
    forAdventure: boolean;
    forLuxury: boolean;
  };
  localContext: {
    popularity: number;
    typicalUse: string[];
    culturalSignificance?: string;
    localPartners: string[];
  };
  recommendations: {
    bestFor: string[];
    avoidIf: string[];
    tips: string[];
  };
  pricing: {
    basePrice: number;
    seasonalMultiplier: number;
    eventMultiplier: number;
    totalPrice: number;
    savings: number;
  };
}

export interface SouthAfricanRoute {
  name: string;
  description: string;
  distance: number;
  duration: number;
  difficulty: 'easy' | 'medium' | 'hard';
  scenery: string[];
  attractions: Array<{
    name: string;
    type: string;
    coordinates: { lat: number; lng: number };
  }>;
  recommendedVehicles: string[];
  bestTime: string;
  tips: string[];
  costs: {
    fuel: number;
    tolls: number;
    accommodation: number;
    total: number;
  };
}

export interface SouthAfricanEvent {
  name: string;
  type: 'cultural' | 'sports' | 'business' | 'entertainment' | 'religious';
  date: string;
  location: string;
  province: string;
  expectedAttendees: number;
  impact: 'low' | 'medium' | 'high';
  vehicleDemand: {
    increase: number;
    preferredTypes: string[];
    priceMultiplier: number;
  };
  recommendations: {
    bookingAdvice: string;
    vehicleTypes: string[];
    pricing: string;
    logistics: string[];
  };
}

class SouthAfricanVehicleService {
  private readonly API_BASE_URL = process.env.VITE_API_URL || 'http://localhost:5000/api';

  /**
   * Get South African vehicle recommendations based on context
   */
  async getSouthAfricanVehicleRecommendations(
    location: string,
    startDate: string,
    endDate: string,
    purpose: string,
    groupSize: number
  ): Promise<SouthAfricanVehicleRecommendation[]> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/vehicles/south-african-recommendations`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify({
          location,
          startDate,
          endDate,
          purpose,
          groupSize
        })
      });

      const data = await response.json();
      return data.recommendations || [];
    } catch (error) {
      console.error('Error getting South African vehicle recommendations:', error);
      return this.getDefaultRecommendations(location, purpose, groupSize);
    }
  }

  /**
   * Get South African scenic routes
   */
  getSouthAfricanRoutes(): SouthAfricanRoute[] {
    return [
      {
        name: 'Garden Route',
        description: 'One of South Africa\'s most scenic drives along the coast',
        distance: 300,
        duration: 5,
        difficulty: 'easy',
        scenery: ['coastline', 'mountains', 'forests', 'lakes'],
        attractions: [
          { name: 'Knysna Heads', type: 'natural', coordinates: { lat: -34.0500, lng: 23.0500 } },
          { name: 'Tsitsikamma National Park', type: 'national_park', coordinates: { lat: -34.0167, lng: 23.8833 } },
          { name: 'Plettenberg Bay', type: 'beach', coordinates: { lat: -34.0500, lng: 23.3667 } }
        ],
        recommendedVehicles: ['suv', 'luxury', 'convertible'],
        bestTime: 'September to April',
        tips: [
          'Book accommodation in advance during peak season',
          'Stop at local wine farms',
          'Take the coastal route for better views',
          'Visit the Knysna Elephant Park'
        ],
        costs: {
          fuel: 800,
          tolls: 0,
          accommodation: 2000,
          total: 2800
        }
      },
      {
        name: 'Chapman\'s Peak Drive',
        description: 'Dramatic coastal drive with stunning ocean views',
        distance: 9,
        duration: 1,
        difficulty: 'medium',
        scenery: ['coastline', 'mountains', 'ocean'],
        attractions: [
          { name: 'Chapman\'s Peak', type: 'viewpoint', coordinates: { lat: -34.0833, lng: 18.3500 } },
          { name: 'Hout Bay', type: 'beach', coordinates: { lat: -34.0333, lng: 18.3500 } }
        ],
        recommendedVehicles: ['suv', 'luxury', 'convertible'],
        bestTime: 'Year round',
        tips: [
          'Check for road closures due to weather',
          'Best views in the afternoon',
          'Stop at the viewpoint for photos',
          'Combine with Hout Bay visit'
        ],
        costs: {
          fuel: 50,
          tolls: 25,
          accommodation: 0,
          total: 75
        }
      },
      {
        name: 'Kruger National Park Circuit',
        description: 'Wildlife safari route through South Africa\'s premier game reserve',
        distance: 500,
        duration: 7,
        difficulty: 'hard',
        scenery: ['savanna', 'wildlife', 'rivers', 'mountains'],
        attractions: [
          { name: 'Kruger National Park', type: 'national_park', coordinates: { lat: -24.0000, lng: 31.5000 } },
          { name: 'Blyde River Canyon', type: 'natural', coordinates: { lat: -24.5833, lng: 30.8167 } },
          { name: 'God\'s Window', type: 'viewpoint', coordinates: { lat: -24.5833, lng: 30.8167 } }
        ],
        recommendedVehicles: ['suv', 'bakkie', '4x4'],
        bestTime: 'May to September',
        tips: [
          'Book accommodation well in advance',
          'Best game viewing in early morning and late afternoon',
          'Take a guided safari for better wildlife spotting',
          'Pack warm clothes for early morning drives'
        ],
        costs: {
          fuel: 1200,
          tolls: 100,
          accommodation: 5000,
          total: 6300
        }
      },
      {
        name: 'Winelands Route',
        description: 'Culinary and wine experience through South Africa\'s premier wine regions',
        distance: 200,
        duration: 3,
        difficulty: 'easy',
        scenery: ['vineyards', 'mountains', 'historic_towns'],
        attractions: [
          { name: 'Stellenbosch', type: 'wine_town', coordinates: { lat: -33.9326, lng: 18.8604 } },
          { name: 'Franschhoek', type: 'wine_town', coordinates: { lat: -33.9167, lng: 19.1167 } },
          { name: 'Paarl', type: 'wine_town', coordinates: { lat: -33.7333, lng: 18.9667 } }
        ],
        recommendedVehicles: ['luxury', 'suv', 'economy'],
        bestTime: 'Year round',
        tips: [
          'Book wine tastings in advance',
          'Designate a driver or use a tour service',
          'Try local restaurants and farm-to-table experiences',
          'Visit during harvest season (February to April)'
        ],
        costs: {
          fuel: 400,
          tolls: 0,
          accommodation: 1500,
          total: 1900
        }
      }
    ];
  }

  /**
   * Get South African events and their impact on vehicle demand
   */
  getSouthAfricanEvents(): SouthAfricanEvent[] {
    return [
      {
        name: 'Cape Town International Jazz Festival',
        type: 'entertainment',
        date: '2024-03-22',
        location: 'Cape Town',
        province: 'Western Cape',
        expectedAttendees: 50000,
        impact: 'high',
        vehicleDemand: {
          increase: 150,
          preferredTypes: ['luxury', 'suv'],
          priceMultiplier: 1.5
        },
        recommendations: {
          bookingAdvice: 'Book vehicles 3 months in advance',
          vehicleTypes: ['luxury', 'suv', 'economy'],
          pricing: 'Expect 50% price increase during event',
          logistics: ['Airport transfers', 'Hotel pickups', 'Event shuttles']
        }
      },
      {
        name: 'Comrades Marathon',
        type: 'sports',
        date: '2024-06-09',
        location: 'Durban to Pietermaritzburg',
        province: 'KwaZulu-Natal',
        expectedAttendees: 20000,
        impact: 'high',
        vehicleDemand: {
          increase: 200,
          preferredTypes: ['suv', 'bakkie'],
          priceMultiplier: 2.0
        },
        recommendations: {
          bookingAdvice: 'Book vehicles 6 months in advance',
          vehicleTypes: ['suv', 'bakkie', 'economy'],
          pricing: 'Expect 100% price increase during event',
          logistics: ['Support vehicle rentals', 'Family transport', 'Accommodation transfers']
        }
      },
      {
        name: 'National Arts Festival',
        type: 'cultural',
        date: '2024-06-27',
        location: 'Grahamstown',
        province: 'Eastern Cape',
        expectedAttendees: 15000,
        impact: 'medium',
        vehicleDemand: {
          increase: 100,
          preferredTypes: ['economy', 'suv'],
          priceMultiplier: 1.3
        },
        recommendations: {
          bookingAdvice: 'Book vehicles 2 months in advance',
          vehicleTypes: ['economy', 'suv'],
          pricing: 'Expect 30% price increase during event',
          logistics: ['Festival transport', 'Accommodation transfers', 'Local sightseeing']
        }
      },
      {
        name: 'Kirstenbosch Summer Concerts',
        type: 'entertainment',
        date: '2024-12-01',
        location: 'Cape Town',
        province: 'Western Cape',
        expectedAttendees: 8000,
        impact: 'medium',
        vehicleDemand: {
          increase: 80,
          preferredTypes: ['economy', 'suv'],
          priceMultiplier: 1.2
        },
        recommendations: {
          bookingAdvice: 'Book vehicles 1 month in advance',
          vehicleTypes: ['economy', 'suv'],
          pricing: 'Expect 20% price increase during event',
          logistics: ['Concert transport', 'Picnic setups', 'Local transport']
        }
      }
    ];
  }

  /**
   * Get South African vehicle types with local context
   */
  getSouthAfricanVehicleTypes(): Array<{
    category: string;
    description: string;
    vehicles: Array<{
      make: string;
      model: string;
      localName?: string;
      popularity: number;
      typicalUse: string[];
      priceRange: { min: number; max: number };
      culturalSignificance?: string;
    }>;
  }> {
    return [
      {
        category: 'Bakkies (Pickup Trucks)',
        description: 'Essential for South African roads and outdoor activities',
        vehicles: [
          {
            make: 'Toyota',
            model: 'Hilux',
            localName: 'Bakkie',
            popularity: 95,
            typicalUse: ['farming', 'construction', 'outdoor', 'tourism'],
            priceRange: { min: 300, max: 800 },
            culturalSignificance: 'Symbol of South African resilience and versatility'
          },
          {
            make: 'Ford',
            model: 'Ranger',
            localName: 'Ford Bakkie',
            popularity: 85,
            typicalUse: ['farming', 'construction', 'outdoor'],
            priceRange: { min: 350, max: 850 }
          }
        ]
      },
      {
        category: 'SUVs',
        description: 'Perfect for South African terrain and family adventures',
        vehicles: [
          {
            make: 'Toyota',
            model: 'Fortuner',
            popularity: 90,
            typicalUse: ['family', 'outdoor', 'tourism', 'safari'],
            priceRange: { min: 400, max: 900 },
            culturalSignificance: 'Preferred choice for South African families'
          }
        ]
      },
      {
        category: 'Economy Cars',
        description: 'Practical and affordable for city driving',
        vehicles: [
          {
            make: 'Toyota',
            model: 'Corolla',
            popularity: 95,
            typicalUse: ['city', 'business', 'family'],
            priceRange: { min: 200, max: 500 },
            culturalSignificance: 'Most popular car in South Africa'
          }
        ]
      }
    ];
  }

  /**
   * Get South African driving tips and regulations
   */
  getSouthAfricanDrivingTips(): {
    regulations: string[];
    tips: string[];
    safety: string[];
    cultural: string[];
  } {
    return {
      regulations: [
        'Drive on the left side of the road',
        'Valid South African driving license required',
        'International driving permit accepted for tourists',
        'Seat belts mandatory for all passengers',
        'Mobile phone use while driving is illegal',
        'Speed limits: 60km/h in urban areas, 120km/h on highways'
      ],
      tips: [
        'Be aware of loadshedding affecting traffic lights',
        'Watch for pedestrians and animals on rural roads',
        'Fill up fuel when you can - stations may be closed during loadshedding',
        'Carry cash for toll roads and parking',
        'Download offline maps - mobile data can be expensive',
        'Be patient with traffic - South African roads can be busy'
      ],
      safety: [
        'Lock doors and windows when driving',
        'Don\'t leave valuables visible in the car',
        'Park in well-lit, secure areas',
        'Be cautious at night, especially in unfamiliar areas',
        'Keep emergency numbers handy: 10111 (police), 10177 (ambulance)',
        'Carry a first aid kit and emergency supplies'
      ],
      cultural: [
        'Wave to other drivers on rural roads - it\'s polite',
        'Be patient with slower vehicles - they may be overloaded',
        'Respect local customs and traditions',
        'Learn basic greetings in local languages',
        'Be friendly and helpful to other road users',
        'Support local businesses when possible'
      ]
    };
  }

  /**
   * Get South African vehicle pricing context
   */
  getSouthAfricanPricingContext(): {
    baseRates: { [vehicleType: string]: number };
    seasonalMultipliers: { [season: string]: number };
    eventMultipliers: { [event: string]: number };
    locationMultipliers: { [location: string]: number };
    tips: string[];
  } {
    return {
      baseRates: {
        economy: 200,
        luxury: 600,
        suv: 400,
        bakkie: 350,
        convertible: 500
      },
      seasonalMultipliers: {
        summer: 1.2,
        autumn: 1.0,
        winter: 0.8,
        spring: 1.1
      },
      eventMultipliers: {
        'Cape Town Jazz Festival': 1.5,
        'Comrades Marathon': 2.0,
        'National Arts Festival': 1.3,
        'Kirstenbosch Concerts': 1.2
      },
      locationMultipliers: {
        'Cape Town': 1.2,
        'Johannesburg': 1.0,
        'Durban': 1.1,
        'Stellenbosch': 1.3,
        'Kruger National Park': 1.4
      },
      tips: [
        'Book in advance for better rates',
        'Consider off-season travel for savings',
        'Look for package deals with accommodation',
        'Ask about local discounts and promotions',
        'Compare prices across different locations',
        'Consider fuel costs when choosing vehicle type'
      ]
    };
  }

  // Default recommendations for fallback
  private getDefaultRecommendations(): SouthAfricanVehicleRecommendation[] {
    return [
      {
        vehicleId: '1',
        make: 'Toyota',
        model: 'Corolla',
        year: 2023,
        type: 'economy',
        dailyRate: 250,
        currency: 'ZAR',
        location,
        province: 'Western Cape',
        features: ['air_conditioning', 'bluetooth', 'cruise_control'],
        suitability: {
          forTourists: true,
          forBusiness: true,
          forFamilies: true,
          forAdventure: false,
          forLuxury: false
        },
        localContext: {
          popularity: 95,
          typicalUse: ['city', 'business', 'family'],
          localPartners: ['Toyota South Africa', 'Local dealers']
        },
        recommendations: {
          bestFor: ['city driving', 'business trips', 'family outings'],
          avoidIf: ['off-road adventures', 'luxury experiences'],
          tips: ['Most popular choice in South Africa', 'Great fuel efficiency', 'Easy to find parts']
        },
        pricing: {
          basePrice: 250,
          seasonalMultiplier: 1.0,
          eventMultiplier: 1.0,
          totalPrice: 250,
          savings: 0
        }
      }
    ];
  }
}

export const southAfricanVehicleService = new SouthAfricanVehicleService();
