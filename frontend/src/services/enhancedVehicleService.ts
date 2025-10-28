import axios from 'axios';
import { getAuth } from 'firebase/auth';
import { EnhancedVehicleForm, ImageUploadResult, ListingPreview, ListingValidation } from '../types/enhancedVehicle';

const API_BASE_URL = 'http://localhost:5001/api';

interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

class EnhancedVehicleService {
  private async getAuthHeaders() {
    const auth = getAuth();
    const user = auth.currentUser;
    
    if (!user) {
      throw new Error('User not authenticated');
    }
    
    const token = await user.getIdToken();
    return {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    };
  }

  private async getFormDataHeaders() {
    const auth = getAuth();
    const user = auth.currentUser;
    
    if (!user) {
      throw new Error('User not authenticated');
    }
    
    const token = await user.getIdToken();
    return {
      'Authorization': `Bearer ${token}`
    };
  }

  /**
   * Create a new enhanced vehicle listing
   */
  async createVehicleListing(vehicleData: EnhancedVehicleForm): Promise<ApiResponse<any>> {
    try {
      const headers = await this.getAuthHeaders();
      const response = await axios.post(`${API_BASE_URL}/enhanced-vehicles`, vehicleData, { headers });
      return response.data;
    } catch (error: any) {
      console.error('Error creating vehicle listing:', error);
      return {
        success: false,
        error: error.response?.data?.error || 'Failed to create vehicle listing'
      };
    }
  }

  /**
   * Upload images for a vehicle
   */
  async uploadVehicleImages(
    vehicleId: string, 
    images: File[], 
    category: string
  ): Promise<ApiResponse<ImageUploadResult[]>> {
    try {
      const formData = new FormData();
      images.forEach(image => {
        formData.append('images', image);
      });
      formData.append('category', category);

      const headers = await this.getFormDataHeaders();
      const response = await axios.post(
        `${API_BASE_URL}/enhanced-vehicles/${vehicleId}/images`, 
        formData, 
        { headers }
      );
      return response.data;
    } catch (error: any) {
      console.error('Error uploading images:', error);
      return {
        success: false,
        error: error.response?.data?.error || 'Failed to upload images'
      };
    }
  }

  /**
   * Upload video tour for a vehicle
   */
  async uploadVehicleVideo(vehicleId: string, videoFile: File): Promise<ApiResponse<any>> {
    try {
      const formData = new FormData();
      formData.append('video', videoFile);

      const headers = await this.getFormDataHeaders();
      const response = await axios.post(
        `${API_BASE_URL}/enhanced-vehicles/${vehicleId}/video`, 
        formData, 
        { headers }
      );
      return response.data;
    } catch (error: any) {
      console.error('Error uploading video:', error);
      return {
        success: false,
        error: error.response?.data?.error || 'Failed to upload video'
      };
    }
  }

  /**
   * Get all vehicle listings
   */
  async getVehicleListings(params?: {
    status?: string;
    type?: string;
    city?: string;
    minPrice?: number;
    maxPrice?: number;
    page?: number;
    limit?: number;
  }): Promise<ApiResponse<{ data: ListingPreview[]; pagination: any }>> {
    try {
      const response = await axios.get(`${API_BASE_URL}/enhanced-vehicles`, { params });
      return response.data;
    } catch (error: any) {
      console.error('Error fetching vehicle listings:', error);
      return {
        success: false,
        error: error.response?.data?.error || 'Failed to fetch vehicle listings'
      };
    }
  }

  /**
   * Get a single vehicle by ID
   */
  async getVehicleById(vehicleId: string): Promise<ApiResponse<ListingPreview>> {
    try {
      const response = await axios.get(`${API_BASE_URL}/enhanced-vehicles/${vehicleId}`);
      return response.data;
    } catch (error: any) {
      console.error('Error fetching vehicle:', error);
      return {
        success: false,
        error: error.response?.data?.error || 'Failed to fetch vehicle'
      };
    }
  }

  /**
   * Get host's vehicles
   */
  async getHostVehicles(hostId: string): Promise<ApiResponse<ListingPreview[]>> {
    try {
      const headers = await this.getAuthHeaders();
      const response = await axios.get(`${API_BASE_URL}/enhanced-vehicles/host/${hostId}`, { headers });
      return response.data;
    } catch (error: any) {
      console.error('Error fetching host vehicles:', error);
      return {
        success: false,
        error: error.response?.data?.error || 'Failed to fetch host vehicles'
      };
    }
  }

  /**
   * Update a vehicle listing
   */
  async updateVehicle(vehicleId: string, vehicleData: Partial<EnhancedVehicleForm>): Promise<ApiResponse<any>> {
    try {
      const headers = await this.getAuthHeaders();
      const response = await axios.put(`${API_BASE_URL}/enhanced-vehicles/${vehicleId}`, vehicleData, { headers });
      return response.data;
    } catch (error: any) {
      console.error('Error updating vehicle:', error);
      return {
        success: false,
        error: error.response?.data?.error || 'Failed to update vehicle'
      };
    }
  }

  /**
   * Delete a vehicle listing
   */
  async deleteVehicle(vehicleId: string): Promise<ApiResponse<any>> {
    try {
      const headers = await this.getAuthHeaders();
      const response = await axios.delete(`${API_BASE_URL}/enhanced-vehicles/${vehicleId}`, { headers });
      return response.data;
    } catch (error: any) {
      console.error('Error deleting vehicle:', error);
      return {
        success: false,
        error: error.response?.data?.error || 'Failed to delete vehicle'
      };
    }
  }

  /**
   * Validate vehicle listing completeness
   */
  async validateListing(vehicleData: EnhancedVehicleForm): Promise<ListingValidation> {
    const errors: string[] = [];
    const warnings: string[] = [];
    const suggestions: string[] = [];
    const missingRequirements: string[] = [];

    // Basic information validation
    if (!vehicleData.make) errors.push('Make is required');
    if (!vehicleData.model) errors.push('Model is required');
    if (!vehicleData.year || vehicleData.year < 1995 || vehicleData.year > new Date().getFullYear() + 2) {
      errors.push(`Year must be between 1995 and ${new Date().getFullYear() + 2}`);
    }
    if (!vehicleData.color) errors.push('Color is required');
    if (!vehicleData.vin || vehicleData.vin.length !== 17) errors.push('Valid VIN is required');
    if (vehicleData.pricePerDay <= 0) errors.push('Price per day must be greater than 0');

    // Image validation
    if (!vehicleData.coverImage) missingRequirements.push('Cover image');
    if (vehicleData.exteriorImages.length < 3) missingRequirements.push('At least 3 exterior photos');
    if (vehicleData.interiorImages.length < 2) missingRequirements.push('At least 2 interior photos');
    if (vehicleData.dashboardImages.length < 1) missingRequirements.push('At least 1 dashboard photo');
    if (vehicleData.licenseImages.length < 1) missingRequirements.push('At least 1 license/registration photo');

    // Location validation
    if (!vehicleData.location.address) errors.push('Address is required');
    if (!vehicleData.location.city) errors.push('City is required');
    if (!vehicleData.location.coordinates.latitude || !vehicleData.location.coordinates.longitude) {
      errors.push('Location coordinates are required');
    }

    // Calculate completeness score
    let score = 0;
    const maxScore = 100;
    
    // Basic info (25 points)
    if (vehicleData.make && vehicleData.model && vehicleData.year) score += 15;
    if (vehicleData.color && vehicleData.mileage) score += 5;
    if (vehicleData.transmission && vehicleData.fuelType) score += 5;
    
    // Images (35 points)
    if (vehicleData.coverImage) score += 5;
    if (vehicleData.exteriorImages.length >= 3) score += 15;
    if (vehicleData.interiorImages.length >= 2) score += 10;
    if (vehicleData.dashboardImages.length >= 1) score += 5;
    
    // Location (15 points)
    if (vehicleData.location.address && vehicleData.location.coordinates.latitude) score += 15;
    
    // Features (15 points)
    if (vehicleData.features.length > 0) score += 10;
    if (vehicleData.amenities.length > 0) score += 5;
    
    // Documentation (10 points)
    if (vehicleData.vin) score += 5;
    if (vehicleData.licenseImages.length > 0) score += 5;

    const completenessScore = Math.min(score, maxScore);

    // Generate suggestions
    if (vehicleData.exteriorImages.length < 3) {
      suggestions.push('Add more exterior photos from different angles');
    }
    if (vehicleData.interiorImages.length < 2) {
      suggestions.push('Add interior photos showing seats and dashboard');
    }
    if (vehicleData.features.length === 0) {
      suggestions.push('Add vehicle features to attract more renters');
    }
    if (completenessScore < 80) {
      suggestions.push('Complete more fields to improve your listing quality');
    }

    return {
      isValid: errors.length === 0 && missingRequirements.length === 0,
      errors,
      warnings,
      suggestions,
      completenessScore,
      missingRequirements
    };
  }

  /**
   * Analyze image quality and content
   */
  async analyzeImage(_imageFile: File): Promise<{
    isVehicle: boolean;
    confidence: number;
    quality: number;
    lighting: number;
    angle: string;
    suggestions: string[];
  }> {
    // Simulate AI analysis - in production, this would call the backend AI service
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          isVehicle: Math.random() > 0.2,
          confidence: 0.7 + Math.random() * 0.3,
          quality: 0.5 + Math.random() * 0.5,
          lighting: 0.4 + Math.random() * 0.6,
          angle: ['front', 'back', 'side', 'interior', 'dashboard'][Math.floor(Math.random() * 5)],
          suggestions: []
        });
      }, 1000);
    });
  }

  /**
   * Extract metadata from image
   */
  async extractImageMetadata(_imageFile: File): Promise<{
    make?: string;
    model?: string;
    color?: string;
    year?: number;
    location?: { latitude: number; longitude: number };
    timestamp?: Date;
    camera?: string;
  }> {
    // Simulate metadata extraction - in production, this would use EXIF data
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          make: Math.random() > 0.7 ? ['Toyota', 'Honda', 'BMW', 'Mercedes'][Math.floor(Math.random() * 4)] : undefined,
          model: Math.random() > 0.7 ? ['Corolla', 'Civic', 'X3', 'C-Class'][Math.floor(Math.random() * 4)] : undefined,
          color: Math.random() > 0.8 ? ['White', 'Black', 'Silver', 'Red'][Math.floor(Math.random() * 4)] : undefined,
          year: Math.random() > 0.9 ? 2015 + Math.floor(Math.random() * 10) : undefined,
          location: Math.random() > 0.5 ? {
            latitude: -26.2041 + (Math.random() - 0.5) * 0.1,
            longitude: 28.0473 + (Math.random() - 0.5) * 0.1
          } : undefined,
          timestamp: Math.random() > 0.3 ? new Date() : undefined,
          camera: Math.random() > 0.8 ? 'iPhone 13 Pro' : undefined
        });
      }, 500);
    });
  }
}

export default new EnhancedVehicleService();
