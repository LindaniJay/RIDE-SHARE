import { Vehicle } from '../types';

export interface UserPreferences {
  preferredVehicleTypes: string[];
  budgetRange: { min: number; max: number };
  preferredLocations: string[];
  pastBookings: any[];
  searchHistory: string[];
  favoriteFeatures: string[];
}

export interface RecommendationContext {
  userPreferences: UserPreferences;
  currentLocation?: { lat: number; lng: number };
  tripPurpose?: 'business' | 'leisure' | 'family' | 'adventure';
  groupSize?: number;
  duration?: number;
  weather?: string;
  localEvents?: string[];
}

export interface DynamicPricingData {
  basePrice: number;
  demandMultiplier: number;
  seasonMultiplier: number;
  eventMultiplier: number;
  weatherMultiplier: number;
  timeOfDayMultiplier: number;
  finalPrice: number;
}

export interface FraudDetectionResult {
  riskScore: number;
  riskLevel: 'low' | 'medium' | 'high';
  reasons: string[];
  recommendations: string[];
}

class AIService {

  /**
   * Get smart vehicle recommendations based on user preferences and context
   */
  async getSmartRecommendations(
    vehicles: Vehicle[],
    context: RecommendationContext
  ): Promise<Vehicle[]> {
    try {
      // Calculate recommendation scores for each vehicle
      const scoredVehicles = vehicles.map(vehicle => ({
        ...vehicle,
        recommendationScore: this.calculateRecommendationScore(vehicle, context)
      }));

      // Sort by recommendation score (highest first)
      return scoredVehicles
        .sort((a, b) => b.recommendationScore - a.recommendationScore)
        .slice(0, 10); // Return top 10 recommendations
    } catch (error) {
      console.error('Error getting smart recommendations:', error);
      return vehicles.slice(0, 10); // Fallback to first 10 vehicles
    }
  }

  /**
   * Calculate recommendation score for a vehicle
   */
  private calculateRecommendationScore(vehicle: Vehicle, context: RecommendationContext): number {
    let score = 0;
    const { userPreferences, tripPurpose, groupSize, duration } = context;

    // Vehicle type preference (40% weight)
    if (userPreferences.preferredVehicleTypes.includes(vehicle.type)) {
      score += 40;
    }

    // Budget preference (25% weight)
    if (vehicle.dailyRate >= userPreferences.budgetRange.min && 
        vehicle.dailyRate <= userPreferences.budgetRange.max) {
      score += 25;
    } else if (vehicle.dailyRate < userPreferences.budgetRange.min) {
      score += 15; // Bonus for cheaper options
    }

    // Location preference (15% weight)
    if (userPreferences.preferredLocations.some(loc => 
        vehicle.location.toLowerCase().includes(loc.toLowerCase()))) {
      score += 15;
    }

    // Trip purpose matching (10% weight)
    score += this.getTripPurposeScore(vehicle, tripPurpose);

    // Group size suitability (5% weight)
    score += this.getGroupSizeScore(vehicle, groupSize);

    // Duration suitability (5% weight)
    score += this.getDurationScore(vehicle, duration);

    return Math.min(score, 100); // Cap at 100
  }

  private getTripPurposeScore(vehicle: Vehicle, purpose?: string): number {
    if (!purpose) return 0;

    const purposeScores: { [key: string]: { [key: string]: number } } = {
      business: {
        car: 10,
        suv: 8,
        van: 6,
        truck: 2,
        motorcycle: 1,
        trailer: 0
      },
      leisure: {
        car: 8,
        suv: 10,
        van: 6,
        truck: 4,
        motorcycle: 8,
        trailer: 2
      },
      family: {
        car: 8,
        suv: 10,
        van: 10,
        truck: 6,
        motorcycle: 2,
        trailer: 4
      },
      adventure: {
        car: 6,
        suv: 10,
        van: 8,
        truck: 8,
        motorcycle: 10,
        trailer: 6
      }
    };

    return purposeScores[purpose]?.[vehicle.type] || 0;
  }

  private getGroupSizeScore(vehicle: Vehicle, groupSize?: number): number {
    if (!groupSize) return 0;

    const capacityScores: { [key: string]: number } = {
      car: 4,
      suv: 7,
      van: 8,
      truck: 3,
      motorcycle: 1,
      trailer: 0
    };

    const vehicleCapacity = capacityScores[vehicle.type] || 4;
    const capacityMatch = Math.max(0, 5 - Math.abs(vehicleCapacity - groupSize));
    return capacityMatch;
  }

  private getDurationScore(vehicle: Vehicle, duration?: number): number {
    if (!duration) return 0;

    // Longer trips favor more comfortable/reliable vehicles
    if (duration > 7) {
      return vehicle.type === 'suv' || vehicle.type === 'van' ? 5 : 3;
    } else if (duration > 3) {
      return vehicle.type === 'car' || vehicle.type === 'suv' ? 5 : 3;
    } else {
      return 5; // Short trips work with any vehicle
    }
  }

  /**
   * Get dynamic pricing suggestions for hosts
   */
  async getDynamicPricingSuggestions(
    vehicle: Vehicle,
    dateRange: { start: Date; end: Date },
    location: string
  ): Promise<DynamicPricingData> {
    try {
      // Get market data
      const marketData = await this.getMarketData();
      
      // Calculate multipliers
      const demandMultiplier = this.calculateDemandMultiplier(marketData);
      const seasonMultiplier = this.calculateSeasonMultiplier(dateRange.start);
      const eventMultiplier = this.calculateEventMultiplier(location, dateRange);
      const weatherMultiplier = this.calculateWeatherMultiplier();
      const timeOfDayMultiplier = this.calculateTimeOfDayMultiplier();

      // Calculate final price
      const basePrice = vehicle.dailyRate;
      const finalPrice = Math.round(
        basePrice * 
        demandMultiplier * 
        seasonMultiplier * 
        eventMultiplier * 
        weatherMultiplier * 
        timeOfDayMultiplier
      );

      return {
        basePrice,
        demandMultiplier,
        seasonMultiplier,
        eventMultiplier,
        weatherMultiplier,
        timeOfDayMultiplier,
        finalPrice
      };
    } catch (error) {
      console.error('Error calculating dynamic pricing:', error);
      return {
        basePrice: vehicle.dailyRate,
        demandMultiplier: 1,
        seasonMultiplier: 1,
        eventMultiplier: 1,
        weatherMultiplier: 1,
        timeOfDayMultiplier: 1,
        finalPrice: vehicle.dailyRate
      };
    }
  }

  private async getMarketData() {
    // In a real implementation, this would fetch from your analytics API
    return {
      averageDemand: 0.7,
      competitorPrices: [],
      bookingTrends: []
    };
  }

  private calculateDemandMultiplier(marketData: any): number {
    // Higher demand = higher price
    return 0.8 + (marketData.averageDemand * 0.4); // Range: 0.8 - 1.2
  }

  private calculateSeasonMultiplier(date: Date): number {
    const month = date.getMonth();
    
    // South African seasons
    const summer = [11, 0, 1]; // Dec, Jan, Feb
    const autumn = [2, 3, 4]; // Mar, Apr, May
    const winter = [5, 6, 7]; // Jun, Jul, Aug
    const spring = [8, 9, 10]; // Sep, Oct, Nov

    if (summer.includes(month)) return 1.2; // Peak season
    if (spring.includes(month)) return 1.1; // High season
    if (autumn.includes(month)) return 0.9; // Low season
    if (winter.includes(month)) return 0.8; // Off season
    
    return 1.0;
  }

  private calculateEventMultiplier(_location: string, _dateRange: { start: Date; end: Date }): number {
    // Check for major events in the area
    const events = this.getLocalEvents();
    
    if (events.length > 0) {
      return 1.3; // 30% increase during events
    }
    
    return 1.0;
  }

  private calculateWeatherMultiplier(): number {
    // In a real implementation, you would fetch weather data
    // For now, return a neutral multiplier
    return 1.0;
  }

  private calculateTimeOfDayMultiplier(): number {
    const hour = new Date().getHours();
    
    // Higher demand during business hours and evenings
    if (hour >= 8 && hour <= 18) return 1.1;
    if (hour >= 19 && hour <= 22) return 1.05;
    
    return 0.95; // Lower demand during night/early morning
  }

  private getLocalEvents(): string[] {
    // In a real implementation, you would integrate with event APIs
    const events: { [key: string]: string[] } = {
      'Cape Town': ['Cape Town Jazz Festival', 'Two Oceans Marathon', 'Cape Town International Film Festival'],
      'Johannesburg': ['Joburg Art Fair', 'Rand Show', 'Comic Con Africa'],
      'Durban': ['Durban July', 'Comrades Marathon', 'Durban International Film Festival']
    };

    return events[location as unknown as keyof typeof events] || [];
  }

  /**
   * Detect potential fraud in booking requests
   */
  async detectFraud(bookingData: any, userData: any): Promise<FraudDetectionResult> {
    let riskScore = 0;
    const reasons: string[] = [];
    const recommendations: string[] = [];

    // Check for suspicious patterns
    if (bookingData.totalPrice > 10000) {
      riskScore += 20;
      reasons.push('High-value booking');
      recommendations.push('Request additional verification');
    }

    if (userData.accountAge < 7) {
      riskScore += 15;
      reasons.push('New user account');
      recommendations.push('Verify user identity');
    }

    if (bookingData.startDate === bookingData.endDate) {
      riskScore += 10;
      reasons.push('Same-day booking');
      recommendations.push('Review booking details');
    }

    if (userData.pastBookings.length === 0) {
      riskScore += 10;
      reasons.push('No booking history');
      recommendations.push('Monitor first booking closely');
    }

    // Check for rapid successive bookings
    const recentBookings = userData.pastBookings.filter((booking: any) => 
      new Date(booking.createdAt) > new Date(Date.now() - 24 * 60 * 60 * 1000)
    );

    if (recentBookings.length > 3) {
      riskScore += 25;
      reasons.push('Multiple bookings in short time');
      recommendations.push('Review booking patterns');
    }

    // Determine risk level
    let riskLevel: 'low' | 'medium' | 'high';
    if (riskScore < 30) {
      riskLevel = 'low';
    } else if (riskScore < 60) {
      riskLevel = 'medium';
    } else {
      riskLevel = 'high';
    }

    return {
      riskScore,
      riskLevel,
      reasons,
      recommendations
    };
  }

  /**
   * Enhanced chatbot responses using AI
   */
  async getChatbotResponse(message: string): Promise<string> {
    try {
      // In a real implementation, you would call an AI service like OpenAI
      // For now, we'll provide intelligent responses based on keywords
      
      const lowerMessage = message.toLowerCase();
      
      if (lowerMessage.includes('booking') || lowerMessage.includes('rent')) {
        return "I can help you with booking a vehicle! What type of vehicle are you looking for and when do you need it?";
      }
      
      if (lowerMessage.includes('payment') || lowerMessage.includes('pay')) {
        return "We accept multiple payment methods including credit cards, EFT, and PayFast. All payments are processed securely through our payment partners.";
      }
      
      if (lowerMessage.includes('cancel') || lowerMessage.includes('refund')) {
        return "You can cancel your booking up to 24 hours before pickup for a full refund. For cancellations within 24 hours, a 50% refund applies.";
      }
      
      if (lowerMessage.includes('insurance') || lowerMessage.includes('cover')) {
        return "All vehicles are covered by comprehensive insurance. Additional coverage options are available during the booking process.";
      }
      
      if (lowerMessage.includes('location') || lowerMessage.includes('where')) {
        return "You can find vehicles in major cities across South Africa including Cape Town, Johannesburg, Durban, and Pretoria.";
      }
      
      if (lowerMessage.includes('price') || lowerMessage.includes('cost')) {
        return "Our prices vary by vehicle type and location. You can use our search filters to find vehicles within your budget.";
      }
      
      // Default response
      return "I'm here to help! You can ask me about booking vehicles, payments, cancellations, insurance, or any other questions about RideShare SA.";
      
    } catch (error) {
      console.error('Error getting chatbot response:', error);
      return "I'm sorry, I'm having trouble understanding. Could you please rephrase your question?";
    }
  }

  /**
   * Analyze user behavior for personalized recommendations
   */
  analyzeUserBehavior(userData: any): UserPreferences {
    const preferences: UserPreferences = {
      preferredVehicleTypes: [],
      budgetRange: { min: 0, max: 10000 },
      preferredLocations: [],
      pastBookings: userData.pastBookings || [],
      searchHistory: userData.searchHistory || [],
      favoriteFeatures: []
    };

    // Analyze past bookings
    if (userData.pastBookings && userData.pastBookings.length > 0) {
      const vehicleTypes = userData.pastBookings.map((booking: any) => booking.vehicle?.type);
      const typeCounts = vehicleTypes.reduce((acc: any, type: string) => {
        acc[type] = (acc[type] || 0) + 1;
        return acc;
      }, {});
      
      preferences.preferredVehicleTypes = Object.keys(typeCounts)
        .sort((a, b) => typeCounts[b] - typeCounts[a])
        .slice(0, 3);

      const prices = userData.pastBookings.map((booking: any) => booking.totalPrice);
      preferences.budgetRange = {
        min: Math.min(...prices) * 0.8,
        max: Math.max(...prices) * 1.2
      };

      const locations = userData.pastBookings.map((booking: any) => booking.vehicle?.location);
      const locationCounts = locations.reduce((acc: any, location: string) => {
        acc[location] = (acc[location] || 0) + 1;
        return acc;
      }, {});
      
      preferences.preferredLocations = Object.keys(locationCounts)
        .sort((a, b) => locationCounts[b] - locationCounts[a])
        .slice(0, 3);
    }

    return preferences;
  }
}

export const aiService = new AIService();
