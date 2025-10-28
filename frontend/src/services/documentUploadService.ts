// Removed unused import: VehicleForm

export interface DocumentUploadResponse {
  success: boolean;
  message: string;
  documents: { [key: string]: string };
}

export interface DocumentUploadProgress {
  [key: string]: number;
}

export class DocumentUploadService {
  private static baseUrl = 'http://localhost:5001/api';

  /**
   * Upload vehicle documents to the backend
   */
  static async uploadVehicleDocuments(
    vehicleId: string,
    documents: {
      registration?: File;
      roadworthy?: File;
      insurance?: File;
    },
    _onProgress?: (progress: DocumentUploadProgress) => void
  ): Promise<DocumentUploadResponse> {
    const formData = new FormData();
    
    // Add documents to FormData
    if (documents.registration) {
      formData.append('registration', documents.registration);
    }
    if (documents.roadworthy) {
      formData.append('roadworthy', documents.roadworthy);
    }
    if (documents.insurance) {
      formData.append('insurance', documents.insurance);
    }

    // Get auth token
    const token = localStorage.getItem('authToken');
    if (!token) {
      throw new Error('Authentication token not found');
    }

    try {
      const response = await fetch(`${this.baseUrl}/vehicles/${vehicleId}/documents`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to upload documents');
      }

      const result = await response.json();
      return result;
    } catch (error) {
      console.error('Document upload error:', error);
      throw error;
    }
  }

  /**
   * Get vehicle documents from the backend
   */
  static async getVehicleDocuments(vehicleId: string): Promise<{ [key: string]: string }> {
    const token = localStorage.getItem('authToken');
    if (!token) {
      throw new Error('Authentication token not found');
    }

    try {
      const response = await fetch(`${this.baseUrl}/vehicles/${vehicleId}/documents`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to fetch documents');
      }

      const result = await response.json();
      return result.documents || {};
    } catch (error) {
      console.error('Document fetch error:', error);
      throw error;
    }
  }

  /**
   * Validate document file
   */
  static validateDocument(file: File, documentType: string): string | null {
    // File size validation (5MB max)
    if (file.size > 5 * 1024 * 1024) {
      return 'File size must be less than 5MB';
    }

    // File type validation
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'application/pdf'];
    if (!allowedTypes.includes(file.type)) {
      return 'Only JPG, PNG, and PDF files are allowed';
    }

    // Document-specific validations
    switch (documentType) {
      case 'registration':
        if (!file.name.toLowerCase().includes('registration') && 
            !file.name.toLowerCase().includes('natis')) {
          return 'Please upload the official vehicle registration document (NATIS)';
        }
        break;
      case 'roadworthy':
        if (!file.name.toLowerCase().includes('roadworthy') && 
            !file.name.toLowerCase().includes('certificate')) {
          return 'Please upload the roadworthy certificate';
        }
        break;
      case 'insurance':
        if (!file.name.toLowerCase().includes('insurance') && 
            !file.name.toLowerCase().includes('policy')) {
          return 'Please upload the insurance certificate';
        }
        break;
    }

    return null;
  }

  /**
   * Preview document in new window
   */
  static previewDocument(file: File): void {
    if (file.type.startsWith('image/')) {
      const url = URL.createObjectURL(file);
      const newWindow = window.open(url, '_blank');
      if (newWindow) {
        newWindow.onload = () => URL.revokeObjectURL(url);
      }
    } else {
      // For PDFs, we could implement a PDF viewer or download
      const url = URL.createObjectURL(file);
      const newWindow = window.open(url, '_blank');
      if (newWindow) {
        newWindow.onload = () => URL.revokeObjectURL(url);
      }
    }
  }

  /**
   * Get document type display name
   */
  static getDocumentTypeName(documentType: string): string {
    const names: { [key: string]: string } = {
      'registration': 'Vehicle Registration',
      'roadworthy': 'Roadworthy Certificate',
      'insurance': 'Insurance Certificate'
    };
    return names[documentType] || documentType;
  }

  /**
   * Get document requirements
   */
  static getDocumentRequirements() {
    return {
      registration: {
        name: 'Vehicle Registration (NATIS)',
        description: 'Official vehicle registration document',
        requirements: [
          'Official registration document',
          'Must be current and valid',
          'Clear, readable text'
        ]
      },
      roadworthy: {
        name: 'Roadworthy Certificate',
        description: 'Valid roadworthy certificate',
        requirements: [
          'Not older than 2 years',
          'Issued by certified inspector',
          'All pages if multi-page'
        ]
      },
      insurance: {
        name: 'Insurance Certificate',
        description: 'Comprehensive insurance certificate',
        requirements: [
          'Comprehensive coverage',
          'Current and valid',
          'All pages if multi-page'
        ]
      }
    };
  }
}

export default DocumentUploadService;

