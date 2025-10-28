import { VehicleForm } from '../types';

class ImageUploadService {
  private baseUrl = 'http://localhost:5001';

  async uploadImages(
    images: File[], 
    category: keyof NonNullable<VehicleForm['imageCategories']>, 
    listingId?: number
  ): Promise<{ success: boolean; urls?: string[]; error?: string }> {
    try {
      const formData = new FormData();
      
      // Add images to form data
      images.forEach((image, _index) => {
        formData.append('images', image);
      });
      
      // Add category and listing ID
      formData.append('category', category);
      if (listingId) {
        formData.append('listingId', listingId.toString());
      }

      const response = await fetch(`${this.baseUrl}/api/vehicle-images/upload`, {
        method: 'POST',
        body: formData,
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Upload failed');
      }

      return {
        success: true,
        urls: data.urls
      };

    } catch (error) {
      console.error('Error uploading images:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Upload failed'
      };
    }
  }

  async getImages(listingId: number, category?: string): Promise<{ success: boolean; images?: any[]; error?: string }> {
    try {
      const url = new URL(`${this.baseUrl}/api/vehicle-images/${listingId}`);
      if (category) {
        url.searchParams.append('category', category);
      }

      const response = await fetch(url.toString(), {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to fetch images');
      }

      return {
        success: true,
        images: data.images
      };

    } catch (error) {
      console.error('Error fetching images:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to fetch images'
      };
    }
  }

  async deleteImage(imageId: number): Promise<{ success: boolean; error?: string }> {
    try {
      const response = await fetch(`${this.baseUrl}/api/vehicle-images/${imageId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Delete failed');
      }

      return { success: true };

    } catch (error) {
      console.error('Error deleting image:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Delete failed'
      };
    }
  }

  // Helper method to validate image files
  validateImages(files: FileList | null, maxSize: number = 10 * 1024 * 1024): { valid: boolean; errors: string[] } {
    const errors: string[] = [];
    
    if (!files || files.length === 0) {
      errors.push('No files selected');
      return { valid: false, errors };
    }

    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
    
    Array.from(files).forEach((file, index) => {
      if (!allowedTypes.includes(file.type)) {
        errors.push(`File ${index + 1}: Invalid file type. Only JPEG, PNG, GIF, and WebP are allowed.`);
      }
      
      if (file.size > maxSize) {
        errors.push(`File ${index + 1}: File too large. Maximum size is ${maxSize / (1024 * 1024)}MB.`);
      }
    });

    return { valid: errors.length === 0, errors };
  }

  // Helper method to get image preview URL
  getPreviewUrl(file: File): string {
    return URL.createObjectURL(file);
  }

  // Helper method to revoke preview URL
  revokePreviewUrl(url: string): void {
    URL.revokeObjectURL(url);
  }
}

export default new ImageUploadService();
