
export interface LoadsheddingSchedule {
  area: string;
  stage: number;
  schedule: Array<{
    date: string;
    startTime: string;
    endTime: string;
    duration: number; // in minutes
  }>;
  nextOutage?: {
    date: string;
    startTime: string;
    endTime: string;
  };
}

export interface LocalEvent {
  id: string;
  name: string;
  description: string;
  location: string;
  startDate: string;
  endDate: string;
  category: 'festival' | 'sports' | 'business' | 'cultural' | 'entertainment';
  impact: 'low' | 'medium' | 'high';
  expectedAttendees: number;
  priceImpact: number; // percentage increase in demand
  affectedAreas: string[];
}

export interface LanguageTranslation {
  text: string;
  from: string;
  to: string;
  translated: string;
  confidence: number;
}

export interface LocalBusiness {
  id: string;
  name: string;
  type: 'fuel_station' | 'car_wash' | 'mechanic' | 'restaurant' | 'accommodation';
  location: {
    address: string;
    coordinates: { lat: number; lng: number };
  };
  rating: number;
  priceRange: 'budget' | 'mid' | 'premium';
  features: string[];
  operatingHours: {
    [key: string]: { open: string; close: string; closed?: boolean };
  };
  contact: {
    phone?: string;
    email?: string;
    website?: string;
  };
  partnership: {
    isPartner: boolean;
    discount?: number;
    benefits?: string[];
  };
}

export interface TouristFeature {
  id: string;
  name: string;
  description: string;
  location: string;
  category: 'attraction' | 'restaurant' | 'accommodation' | 'activity';
  rating: number;
  priceRange: 'budget' | 'mid' | 'premium';
  features: string[];
  accessibility: {
    wheelchair: boolean;
    parking: boolean;
    publicTransport: boolean;
  };
  recommendedVehicles: string[];
  nearbyServices: string[];
}

export interface WeatherData {
  location: string;
  current: {
    temperature: number;
    condition: string;
    humidity: number;
    windSpeed: number;
    visibility: number;
  };
  forecast: Array<{
    date: string;
    high: number;
    low: number;
    condition: string;
    precipitation: number;
  }>;
  alerts: Array<{
    type: 'weather' | 'road' | 'safety';
    severity: 'low' | 'medium' | 'high';
    message: string;
    validUntil: string;
  }>;
}

class LocalMarketService {
  private readonly API_BASE_URL = process.env.VITE_API_URL || 'http://localhost:5001/api';

  /**
   * Get loadshedding schedule for an area
   */
  async getLoadsheddingSchedule(area: string): Promise<LoadsheddingSchedule | null> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/local/loadshedding/${encodeURIComponent(area)}`);
      const data = await response.json();
      return data.schedule;
    } catch (error) {
      console.error('Error getting loadshedding schedule:', error);
      return null;
    }
  }

  /**
   * Check if loadshedding affects vehicle availability
   */
  async checkLoadsheddingImpact(
    location: string,
    date: string,
    time: string
  ): Promise<{
    affected: boolean;
    stage: number;
    duration: number;
    recommendations: string[];
  }> {
    try {
      const schedule = await this.getLoadsheddingSchedule(location);
      if (!schedule) {
        return {
          affected: false,
          stage: 0,
          duration: 0,
          recommendations: []
        };
      }

      const targetDateTime = new Date(`${date}T${time}`);
      const affected = schedule.schedule.some(period => {
        const startDateTime = new Date(`${period.date}T${period.startTime}`);
        const endDateTime = new Date(`${period.date}T${period.endTime}`);
        return targetDateTime >= startDateTime && targetDateTime <= endDateTime;
      });

      const recommendations = affected ? [
        'Consider booking an electric vehicle with battery backup',
        'Plan alternative transportation during loadshedding',
        'Check if the pickup location has generator backup',
        'Allow extra time for potential delays'
      ] : [];

      return {
        affected,
        stage: schedule.stage,
        duration: affected ? schedule.schedule.find(p => 
          new Date(`${p.date}T${p.startTime}`) <= targetDateTime && 
          new Date(`${p.date}T${p.endTime}`) >= targetDateTime
        )?.duration || 0 : 0,
        recommendations
      };
    } catch (error) {
      console.error('Error checking loadshedding impact:', error);
      return {
        affected: false,
        stage: 0,
        duration: 0,
        recommendations: []
      };
    }
  }

  /**
   * Get local events affecting demand
   */
  async getLocalEvents(
    location: string,
    startDate: string,
    endDate: string
  ): Promise<LocalEvent[]> {
    try {
      const response = await fetch(
        `${this.API_BASE_URL}/local/events?location=${encodeURIComponent(location)}&startDate=${startDate}&endDate=${endDate}`
      );
      const data = await response.json();
      return data.events || [];
    } catch (error) {
      console.error('Error getting local events:', error);
      return [];
    }
  }

  /**
   * Calculate demand impact from events
   */
  calculateEventDemandImpact(events: LocalEvent[]): {
    totalImpact: number;
    priceMultiplier: number;
    recommendations: string[];
  } {
    const totalImpact = events.reduce((sum, event) => sum + event.priceImpact, 0);
    const priceMultiplier = 1 + (totalImpact / 100);
    
    const recommendations = events
      .filter(event => event.impact === 'high')
      .map(event => `High demand expected due to ${event.name} - consider booking early`);

    return {
      totalImpact,
      priceMultiplier,
      recommendations
    };
  }

  /**
   * Translate text to South African languages
   */
  async translateText(
    text: string,
    from: string = 'en',
    to: 'af' | 'zu' | 'xh' | 'nso' | 'st' | 'tn' | 'ts' | 've' | 'nr' | 'ss'
  ): Promise<LanguageTranslation> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/local/translate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify({ text, from, to })
      });

      const data = await response.json();
      return data.translation;
    } catch (error) {
      console.error('Error translating text:', error);
      return {
        text,
        from,
        to,
        translated: text,
        confidence: 0
      };
    }
  }

  /**
   * Get supported languages
   */
  getSupportedLanguages(): Array<{ code: string; name: string; nativeName: string }> {
    return [
      { code: 'en', name: 'English', nativeName: 'English' },
      { code: 'af', name: 'Afrikaans', nativeName: 'Afrikaans' },
      { code: 'zu', name: 'Zulu', nativeName: 'isiZulu' },
      { code: 'xh', name: 'Xhosa', nativeName: 'isiXhosa' },
      { code: 'nso', name: 'Northern Sotho', nativeName: 'Sesotho sa Leboa' },
      { code: 'st', name: 'Sotho', nativeName: 'Sesotho' },
      { code: 'tn', name: 'Tswana', nativeName: 'Setswana' },
      { code: 'ts', name: 'Tsonga', nativeName: 'Xitsonga' },
      { code: 've', name: 'Venda', nativeName: 'Tshivenḓa' },
      { code: 'nr', name: 'Ndebele', nativeName: 'isiNdebele' },
      { code: 'ss', name: 'Swati', nativeName: 'SiSwati' }
    ];
  }

  /**
   * Get local business partners
   */
  async getLocalBusinesses(
    location: string,
    type?: 'fuel_station' | 'car_wash' | 'mechanic' | 'restaurant' | 'accommodation'
  ): Promise<LocalBusiness[]> {
    try {
      const params = new URLSearchParams();
      params.append('location', location);
      if (type) params.append('type', type);

      const response = await fetch(`${this.API_BASE_URL}/local/businesses?${params.toString()}`);
      const data = await response.json();
      return data.businesses || [];
    } catch (error) {
      console.error('Error getting local businesses:', error);
      return [];
    }
  }

  /**
   * Get tourist features and recommendations
   */
  async getTouristFeatures(
    location: string,
    category?: 'attraction' | 'restaurant' | 'accommodation' | 'activity'
  ): Promise<TouristFeature[]> {
    try {
      const params = new URLSearchParams();
      params.append('location', location);
      if (category) params.append('category', category);

      const response = await fetch(`${this.API_BASE_URL}/local/tourist-features?${params.toString()}`);
      const data = await response.json();
      return data.features || [];
    } catch (error) {
      console.error('Error getting tourist features:', error);
      return [];
    }
  }

  /**
   * Get weather data and alerts
   */
  async getWeatherData(location: string): Promise<WeatherData | null> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/local/weather?location=${encodeURIComponent(location)}`);
      const data = await response.json();
      return data.weather;
    } catch (error) {
      console.error('Error getting weather data:', error);
      return null;
    }
  }

  /**
   * Get weather impact on vehicle recommendations
   */
  getWeatherImpactRecommendations(weather: WeatherData): {
    recommendations: string[];
    affectedVehicles: string[];
    safetyAlerts: string[];
  } {
    const recommendations: string[] = [];
    const affectedVehicles: string[] = [];
    const safetyAlerts: string[] = [];

    // Temperature impact
    if (weather.current.temperature > 35) {
      recommendations.push('Consider vehicles with air conditioning for comfort');
      affectedVehicles.push('convertible', 'motorcycle');
    } else if (weather.current.temperature < 5) {
      recommendations.push('Consider vehicles with heating and winter tires');
      affectedVehicles.push('convertible', 'motorcycle');
    }

    // Precipitation impact
    if (weather.forecast.some(day => day.precipitation > 10)) {
      recommendations.push('Consider 4WD or AWD vehicles for wet conditions');
      affectedVehicles.push('motorcycle');
    }

    // Wind impact
    if (weather.current.windSpeed > 30) {
      recommendations.push('Avoid high-profile vehicles in windy conditions');
      affectedVehicles.push('truck', 'van');
      safetyAlerts.push('High winds may affect vehicle stability');
    }

    // Visibility impact
    if (weather.current.visibility < 1000) {
      safetyAlerts.push('Poor visibility - drive with extra caution');
      recommendations.push('Ensure vehicle has good lighting and fog lights');
    }

    return {
      recommendations,
      affectedVehicles,
      safetyAlerts
    };
  }

  /**
   * Get local market insights
   */
  async getMarketInsights(location: string): Promise<{
    averagePrices: { [vehicleType: string]: number };
    demandTrends: Array<{ date: string; demand: number }>;
    popularVehicles: string[];
    seasonalFactors: string[];
  }> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/local/market-insights?location=${encodeURIComponent(location)}`);
      const data = await response.json();
      return data.insights;
    } catch (error) {
      console.error('Error getting market insights:', error);
      return {
        averagePrices: {},
        demandTrends: [],
        popularVehicles: [],
        seasonalFactors: []
      };
    }
  }

  /**
   * Get local regulations and requirements
   */
  async getLocalRegulations(location: string): Promise<{
    drivingLicense: string[];
    vehicleRequirements: string[];
    insuranceRequirements: string[];
    ageRestrictions: { min: number; max?: number };
    specialPermits: string[];
  }> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/local/regulations?location=${encodeURIComponent(location)}`);
      const data = await response.json();
      return data.regulations;
    } catch (error) {
      console.error('Error getting local regulations:', error);
      return {
        drivingLicense: ['Valid South African driving license'],
        vehicleRequirements: ['Valid registration', 'Roadworthy certificate'],
        insuranceRequirements: ['Comprehensive insurance'],
        ageRestrictions: { min: 18 },
        specialPermits: []
      };
    }
  }

  /**
   * Get emergency services information
   */
  async getEmergencyServices(location: string): Promise<{
    police: { number: string; address: string };
    ambulance: { number: string; address: string };
    fire: { number: string; address: string };
    towing: { number: string; address: string };
    hospitals: Array<{ name: string; address: string; phone: string }>;
  }> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/local/emergency-services?location=${encodeURIComponent(location)}`);
      const data = await response.json();
      return data.services;
    } catch (error) {
      console.error('Error getting emergency services:', error);
      return {
        police: { number: '10111', address: 'Nearest police station' },
        ambulance: { number: '10177', address: 'Nearest hospital' },
        fire: { number: '10111', address: 'Nearest fire station' },
        towing: { number: '083 123 4567', address: 'Local towing service' },
        hospitals: []
      };
    }
  }

  /**
   * Get local currency and payment methods
   */
  getLocalPaymentMethods(): Array<{
    method: string;
    name: string;
    description: string;
    fees: number;
    processingTime: string;
    popular: boolean;
  }> {
    return [
      {
        method: 'eft',
        name: 'EFT Transfer',
        description: 'Electronic Funds Transfer',
        fees: 0,
        processingTime: '1-3 business days',
        popular: true
      },
      {
        method: 'payfast',
        name: 'PayFast',
        description: 'South African payment gateway',
        fees: 3.5,
        processingTime: 'Instant',
        popular: true
      },
      {
        method: 'snapscan',
        name: 'SnapScan',
        description: 'Mobile payment solution',
        fees: 2.5,
        processingTime: 'Instant',
        popular: true
      },
      {
        method: 'zapper',
        name: 'Zapper',
        description: 'Mobile payment app',
        fees: 2.5,
        processingTime: 'Instant',
        popular: true
      },
      {
        method: 'card',
        name: 'Credit/Debit Card',
        description: 'Visa, Mastercard, American Express',
        fees: 2.9,
        processingTime: 'Instant',
        popular: true
      },
      {
        method: 'bank_transfer',
        name: 'Bank Transfer',
        description: 'Direct bank transfer',
        fees: 0,
        processingTime: '1-2 business days',
        popular: false
      }
    ];
  }

  /**
   * Get local business hours and holidays
   */
  getLocalBusinessInfo(): {
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

export const localMarketService = new LocalMarketService();
