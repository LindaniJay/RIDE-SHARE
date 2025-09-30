import { Vehicle } from '../types';

export interface SearchFilters {
  query?: string;
  location?: string;
  vehicleType?: string;
  priceRange?: { min: number; max: number };
  features?: string[];
  availability?: { start: Date; end: Date };
  sortBy?: 'price' | 'distance' | 'rating' | 'relevance';
  sortOrder?: 'asc' | 'desc';
}

export interface VoiceSearchResult {
  query: string;
  confidence: number;
  filters: SearchFilters;
}

export interface ImageSearchResult {
  query: string;
  confidence: number;
  similarVehicles: Vehicle[];
}

export interface RouteSearchResult {
  startLocation: string;
  endLocation: string;
  vehicles: Vehicle[];
  routeDistance: number;
  estimatedTime: number;
}

class SearchService {
  private recognition: any = null;
  private isListening = false;

  constructor() {
    this.initializeVoiceRecognition();
  }

  /**
   * Initialize voice recognition
   */
  private initializeVoiceRecognition() {
    if ('webkitSpeechRecognition' in window) {
      this.recognition = new (window as any).webkitSpeechRecognition();
    } else if ('SpeechRecognition' in window) {
      this.recognition = new (window as any).SpeechRecognition();
    }

    if (this.recognition) {
      this.recognition.continuous = false;
      this.recognition.interimResults = false;
      this.recognition.lang = 'en-ZA';
    }
  }

  /**
   * Perform advanced search with filters
   */
  async searchVehicles(filters: SearchFilters): Promise<Vehicle[]> {
    try {
      const queryParams = new URLSearchParams();
      
      if (filters.query) queryParams.append('q', filters.query);
      if (filters.location) queryParams.append('location', filters.location);
      if (filters.vehicleType) queryParams.append('type', filters.vehicleType);
      if (filters.priceRange) {
        queryParams.append('minPrice', filters.priceRange.min.toString());
        queryParams.append('maxPrice', filters.priceRange.max.toString());
      }
      if (filters.features && filters.features.length > 0) {
        queryParams.append('features', filters.features.join(','));
      }
      if (filters.availability) {
        queryParams.append('startDate', filters.availability.start.toISOString());
        queryParams.append('endDate', filters.availability.end.toISOString());
      }
      if (filters.sortBy) queryParams.append('sortBy', filters.sortBy);
      if (filters.sortOrder) queryParams.append('sortOrder', filters.sortOrder);

      const response = await fetch(`/api/vehicles/search?${queryParams.toString()}`);
      const data = await response.json();
      
      return data.vehicles || [];
    } catch (error) {
      console.error('Error searching vehicles:', error);
      return [];
    }
  }

  /**
   * Voice search functionality
   */
  async startVoiceSearch(): Promise<Promise<VoiceSearchResult>> {
    return new Promise((resolve, reject) => {
      if (!this.recognition) {
        reject(new Error('Voice recognition not supported'));
        return;
      }

      if (this.isListening) {
        reject(new Error('Already listening'));
        return;
      }

      this.isListening = true;

      this.recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        const confidence = event.results[0][0].confidence;
        
        this.isListening = false;
        
        const filters = this.parseVoiceQuery(transcript);
        
        resolve({
          query: transcript,
          confidence,
          filters
        });
      };

      this.recognition.onerror = (event: any) => {
        this.isListening = false;
        reject(new Error(`Voice recognition error: ${event.error}`));
      };

      this.recognition.onend = () => {
        this.isListening = false;
      };

      this.recognition.start();
    });
  }

  /**
   * Stop voice search
   */
  stopVoiceSearch(): void {
    if (this.recognition && this.isListening) {
      this.recognition.stop();
      this.isListening = false;
    }
  }

  /**
   * Parse voice query into search filters
   */
  private parseVoiceQuery(query: string): SearchFilters {
    const filters: SearchFilters = {};
    const lowerQuery = query.toLowerCase();

    // Extract vehicle type
    const vehicleTypes = ['car', 'suv', 'van', 'truck', 'motorcycle', 'trailer'];
    for (const type of vehicleTypes) {
      if (lowerQuery.includes(type)) {
        filters.vehicleType = type;
        break;
      }
    }

    // Extract price range
    const priceMatch = lowerQuery.match(/(\d+)\s*to\s*(\d+)/);
    if (priceMatch) {
      filters.priceRange = {
        min: parseInt(priceMatch[1]),
        max: parseInt(priceMatch[2])
      };
    } else if (lowerQuery.includes('cheap') || lowerQuery.includes('budget')) {
      filters.priceRange = { min: 0, max: 500 };
    } else if (lowerQuery.includes('expensive') || lowerQuery.includes('luxury')) {
      filters.priceRange = { min: 1000, max: 10000 };
    }

    // Extract location
    const locations = ['cape town', 'johannesburg', 'durban', 'pretoria', 'port elizabeth'];
    for (const location of locations) {
      if (lowerQuery.includes(location)) {
        filters.location = location;
        break;
      }
    }

    // Extract features
    const features = [];
    if (lowerQuery.includes('air conditioning') || lowerQuery.includes('ac')) {
      features.push('Air Conditioning');
    }
    if (lowerQuery.includes('bluetooth')) {
      features.push('Bluetooth');
    }
    if (lowerQuery.includes('gps') || lowerQuery.includes('navigation')) {
      features.push('GPS Navigation');
    }
    if (lowerQuery.includes('automatic') || lowerQuery.includes('auto')) {
      features.push('Automatic Transmission');
    }
    if (features.length > 0) {
      filters.features = features;
    }

    // Set default query
    filters.query = query;

    return filters;
  }

  /**
   * Image-based search
   */
  async searchByImage(imageFile: File): Promise<ImageSearchResult> {
    try {
      // In a real implementation, you would send the image to a computer vision API
      // For now, we'll simulate the process
      
      const formData = new FormData();
      formData.append('image', imageFile);
      
      const response = await fetch('/api/vehicles/search-by-image', {
        method: 'POST',
        body: formData
      });
      
      const data = await response.json();
      
      return {
        query: data.query || 'Similar vehicles',
        confidence: data.confidence || 0.8,
        similarVehicles: data.vehicles || []
      };
    } catch (error) {
      console.error('Error searching by image:', error);
      return {
        query: 'Image search failed',
        confidence: 0,
        similarVehicles: []
      };
    }
  }

  /**
   * Route-based search
   */
  async searchByRoute(
    startLocation: string,
    endLocation: string,
    waypoints?: string[]
  ): Promise<RouteSearchResult> {
    try {
      // Calculate route distance and time
      const routeInfo = await this.calculateRoute(startLocation, endLocation, waypoints);
      
      // Find vehicles along the route
      const vehicles = await this.findVehiclesAlongRoute(startLocation, endLocation, routeInfo);
      
      return {
        startLocation,
        endLocation,
        vehicles,
        routeDistance: routeInfo.distance,
        estimatedTime: routeInfo.duration
      };
    } catch (error) {
      console.error('Error searching by route:', error);
      return {
        startLocation,
        endLocation,
        vehicles: [],
        routeDistance: 0,
        estimatedTime: 0
      };
    }
  }

  /**
   * Calculate route information
   */
  private async calculateRoute(
  ): Promise<{ distance: number; duration: number }> {
    // In a real implementation, you would use Google Maps API or similar
    // For now, return mock data
    return {
      distance: 150, // km
      duration: 120 // minutes
    };
  }

  /**
   * Find vehicles along a route
   */
  private async findVehiclesAlongRoute(
    start: string,
    end: string,
    routeInfo: { distance: number; duration: number }
  ): Promise<Vehicle[]> {
    try {
      const response = await fetch('/api/vehicles/route-search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          startLocation: start,
          endLocation: end,
          maxDistance: routeInfo.distance * 0.1 // 10% of route distance
        })
      });
      
      const data = await response.json();
      return data.vehicles || [];
    } catch (error) {
      console.error('Error finding vehicles along route:', error);
      return [];
    }
  }

  /**
   * Smart filters with machine learning
   */
  async getSmartFilters(): Promise<SearchFilters> {
    const filters: SearchFilters = {};

    // Analyze search history for patterns
    const commonTypes = this.analyzeSearchPatterns(searchHistory, 'type');
    const commonLocations = this.analyzeSearchPatterns(searchHistory, 'location');
    const commonPriceRanges = this.analyzeSearchPatterns(searchHistory, 'price');

    if (commonTypes.length > 0) {
      filters.vehicleType = commonTypes[0];
    }

    if (commonLocations.length > 0) {
      filters.location = commonLocations[0];
    }

    if (commonPriceRanges.length > 0) {
      filters.priceRange = commonPriceRanges[0];
    }

    // Set default sort by relevance
    filters.sortBy = 'relevance';
    filters.sortOrder = 'desc';

    return filters;
  }

  /**
   * Analyze search patterns
   */
  private analyzeSearchPatterns(): any[] {
    // In a real implementation, you would use machine learning
    // For now, return mock patterns
    const patterns: { [key: string]: any[] } = {
      type: ['car', 'suv'],
      location: ['Cape Town', 'Johannesburg'],
      price: [{ min: 200, max: 800 }]
    };

    return patterns[type] || [];
  }

  /**
   * Get search suggestions
   */
  async getSearchSuggestions(query: string): Promise<string[]> {
    try {
      const response = await fetch(`/api/search/suggestions?q=${encodeURIComponent(query)}`);
      const data = await response.json();
      return data.suggestions || [];
    } catch (error) {
      console.error('Error getting search suggestions:', error);
      return [];
    }
  }

  /**
   * Save search to history
   */
  async saveSearchToHistory(filters: SearchFilters): Promise<void> {
    try {
      await fetch('/api/search/history', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(filters)
      });
    } catch (error) {
      console.error('Error saving search to history:', error);
    }
  }

  /**
   * Get search history
   */
  async getSearchHistory(): Promise<SearchFilters[]> {
    try {
      const response = await fetch('/api/search/history');
      const data = await response.json();
      return data.history || [];
    } catch (error) {
      console.error('Error getting search history:', error);
      return [];
    }
  }

  /**
   * Clear search history
   */
  async clearSearchHistory(): Promise<void> {
    try {
      await fetch('/api/search/history', {
        method: 'DELETE'
      });
    } catch (error) {
      console.error('Error clearing search history:', error);
    }
  }

  /**
   * Get trending searches
   */
  async getTrendingSearches(): Promise<string[]> {
    try {
      const response = await fetch('/api/search/trending');
      const data = await response.json();
      return data.trending || [];
    } catch (error) {
      console.error('Error getting trending searches:', error);
      return [];
    }
  }

  /**
   * Get search analytics
   */
  async getSearchAnalytics(): Promise<any> {
    try {
      const response = await fetch('/api/search/analytics');
      const data = await response.json();
      return data.analytics || {};
    } catch (error) {
      console.error('Error getting search analytics:', error);
      return {};
    }
  }
}

export const searchService = new SearchService();
