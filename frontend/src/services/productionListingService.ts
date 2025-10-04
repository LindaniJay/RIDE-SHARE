/**
 * Production Listing Service
 * Replaces mock listing data with real API calls
 */

import { apiClient } from './productionApiClient';

export interface Listing {
  id: string;
  host_id: string;
  title: string;
  description: string;
  make: string;
  model: string;
  year: number;
  vehicle_type: 'car' | 'suv' | 'bakkie' | 'van' | 'motorcycle' | 'truck';
  price_per_day: number;
  location: {
    address: string;
    city: string;
    province: string;
    latitude: number;
    longitude: number;
  };
  images: string[];
  features: string[];
  status: 'draft' | 'pending' | 'approved' | 'rejected' | 'inactive';
  availability_calendar: Record<string, boolean>;
  created_at: string;
  updated_at: string;
  host?: any;
  reviews?: any[];
  average_rating?: number;
  total_bookings?: number;
}

export interface CreateListingData {
  title: string;
  description: string;
  make: string;
  model: string;
  year: number;
  vehicle_type: string;
  price_per_day: number;
  location: any;
  images: string[];
  features: string[];
}

export interface SearchFilters {
  location?: string;
  start_date?: string;
  end_date?: string;
  vehicle_type?: string;
  min_price?: number;
  max_price?: number;
  min_seats?: number;
  features?: string[];
}

class ProductionListingService {
  private listings: Listing[] = [];
  private listeners: ((listings: Listing[]) => void)[] = [];

  constructor() {
    this.loadListingsFromStorage();
  }

  private loadListingsFromStorage() {
    const storedListings = localStorage.getItem('rideshare_listings');
    if (storedListings) {
      try {
        this.listings = JSON.parse(storedListings);
      } catch (error) {
        console.error('Failed to parse listings from storage:', error);
        this.listings = [];
      }
    }
  }

  private saveListingsToStorage() {
    localStorage.setItem('rideshare_listings', JSON.stringify(this.listings));
  }

  private notifyListeners() {
    this.listeners.forEach(listener => listener(this.listings));
  }

  async getListings(filters?: SearchFilters): Promise<Listing[]> {
    try {
      const response = await apiClient.getListings(filters);
      
      if (response.data) {
        this.listings = response.data;
        this.saveListingsToStorage();
        this.notifyListeners();
        return response.data;
      }

      return [];
    } catch (error) {
      console.error('Get listings error:', error);
      return [];
    }
  }

  async getListingById(id: string): Promise<Listing | null> {
    try {
      const response = await apiClient.getListing(id);
      
      if (response.data) {
        return response.data;
      }

      return null;
    } catch (error) {
      console.error('Get listing by ID error:', error);
      return null;
    }
  }

  async createListing(listingData: CreateListingData): Promise<{ success: boolean; error?: string; listing?: Listing }> {
    try {
      const response = await apiClient.createListing(listingData);
      
      if (response.error) {
        return { success: false, error: response.error };
      }

      if (response.data) {
        const newListing = response.data;
        this.listings.push(newListing);
        this.saveListingsToStorage();
        this.notifyListeners();
        return { success: true, listing: newListing };
      }

      return { success: false, error: 'Listing creation failed' };
    } catch (error) {
      console.error('Create listing error:', error);
      return { success: false, error: 'Listing creation failed' };
    }
  }

  async updateListing(id: string, listingData: Partial<CreateListingData>): Promise<{ success: boolean; error?: string; listing?: Listing }> {
    try {
      const response = await apiClient.updateListing(id, listingData);
      
      if (response.error) {
        return { success: false, error: response.error };
      }

      if (response.data) {
        const updatedListing = response.data;
        const listingIndex = this.listings.findIndex(l => l.id === id);
        if (listingIndex !== -1) {
          this.listings[listingIndex] = updatedListing;
          this.saveListingsToStorage();
          this.notifyListeners();
        }
        return { success: true, listing: updatedListing };
      }

      return { success: false, error: 'Listing update failed' };
    } catch (error) {
      console.error('Update listing error:', error);
      return { success: false, error: 'Listing update failed' };
    }
  }

  async deleteListing(id: string): Promise<{ success: boolean; error?: string }> {
    try {
      const response = await apiClient.deleteListing(id);
      
      if (response.error) {
        return { success: false, error: response.error };
      }

      // Remove from local listings
      this.listings = this.listings.filter(l => l.id !== id);
      this.saveListingsToStorage();
      this.notifyListeners();

      return { success: true };
    } catch (error) {
      console.error('Delete listing error:', error);
      return { success: false, error: 'Listing deletion failed' };
    }
  }

  async getHostListings(hostId: string): Promise<Listing[]> {
    return this.listings.filter(listing => listing.host_id === hostId);
  }

  async getListingsByStatus(status: string): Promise<Listing[]> {
    return this.listings.filter(listing => listing.status === status);
  }

  async getListingsByType(vehicleType: string): Promise<Listing[]> {
    return this.listings.filter(listing => listing.vehicle_type === vehicleType);
  }

  async getListingsByPriceRange(minPrice: number, maxPrice: number): Promise<Listing[]> {
    return this.listings.filter(listing => 
      listing.price_per_day >= minPrice && listing.price_per_day <= maxPrice
    );
  }

  async getListingsByLocation(city: string): Promise<Listing[]> {
    return this.listings.filter(listing => 
      listing.location.city.toLowerCase().includes(city.toLowerCase())
    );
  }

  async searchListings(query: string): Promise<Listing[]> {
    return this.listings.filter(listing => 
      listing.title.toLowerCase().includes(query.toLowerCase()) ||
      listing.description.toLowerCase().includes(query.toLowerCase()) ||
      listing.make.toLowerCase().includes(query.toLowerCase()) ||
      listing.model.toLowerCase().includes(query.toLowerCase()) ||
      listing.location.city.toLowerCase().includes(query.toLowerCase())
    );
  }

  async getFeaturedListings(): Promise<Listing[]> {
    return this.listings.filter(listing => listing.status === 'approved').slice(0, 6);
  }

  async getRecentListings(): Promise<Listing[]> {
    return this.listings
      .filter(listing => listing.status === 'approved')
      .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
      .slice(0, 10);
  }

  async getListingStats(): Promise<{
    total: number;
    approved: number;
    pending: number;
    rejected: number;
    inactive: number;
  }> {
    const stats = {
      total: this.listings.length,
      approved: this.listings.filter(l => l.status === 'approved').length,
      pending: this.listings.filter(l => l.status === 'pending').length,
      rejected: this.listings.filter(l => l.status === 'rejected').length,
      inactive: this.listings.filter(l => l.status === 'inactive').length,
    };

    return stats;
  }

  async getHostListingStats(hostId: string): Promise<{
    total: number;
    approved: number;
    pending: number;
    total_earnings: number;
  }> {
    const hostListings = this.listings.filter(l => l.host_id === hostId);
    
    const stats = {
      total: hostListings.length,
      approved: hostListings.filter(l => l.status === 'approved').length,
      pending: hostListings.filter(l => l.status === 'pending').length,
      total_earnings: 0, // This would need to be calculated from bookings
    };

    return stats;
  }

  // Event listeners for real-time updates
  addListener(listener: (listings: Listing[]) => void): void {
    this.listeners.push(listener);
  }

  removeListener(listener: (listings: Listing[]) => void): void {
    this.listeners = this.listeners.filter(l => l !== listener);
  }

  // Get all listings (for admin)
  async getAllListings(): Promise<Listing[]> {
    try {
      const response = await apiClient.request('/listings/all');
      
      if (response.data) {
        return response.data;
      }

      return [];
    } catch (error) {
      console.error('Get all listings error:', error);
      return [];
    }
  }

  // Check availability
  async checkAvailability(listingId: string, startDate: string, endDate: string): Promise<boolean> {
    try {
      const response = await apiClient.request(`/listings/${listingId}/availability`, {
        method: 'POST',
        body: JSON.stringify({ start_date: startDate, end_date: endDate }),
      });
      
      if (response.data) {
        return response.data.available;
      }

      return false;
    } catch (error) {
      console.error('Check availability error:', error);
      return false;
    }
  }
}

// Export singleton instance
export const listingService = new ProductionListingService();
export default listingService;
