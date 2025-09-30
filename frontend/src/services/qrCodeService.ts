import QRCode from 'qrcode';

export interface QRCodeData {
  type: 'vehicle' | 'booking' | 'user';
  id: string;
  action?: 'pickup' | 'return' | 'inspection';
  timestamp?: number;
  metadata?: any;
}

export interface QRCodeOptions {
  size?: number;
  margin?: number;
  color?: {
    dark?: string;
    light?: string;
  };
  errorCorrectionLevel?: 'L' | 'M' | 'Q' | 'H';
}

class QRCodeService {
  private defaultOptions: QRCodeOptions = {
    size: 200,
    margin: 2,
    color: {
      dark: '#000000',
      light: '#FFFFFF'
    },
    errorCorrectionLevel: 'M'
  };

  /**
   * Generate QR code for vehicle pickup/return
   */
  async generateVehicleQRCode(
    vehicleId: string, 
    action: 'pickup' | 'return' | 'inspection',
    options?: QRCodeOptions
  ): Promise<string> {
    const data: QRCodeData = {
      type: 'vehicle',
      id: vehicleId,
      action,
      timestamp: Date.now()
    };

    return this.generateQRCode(data, options);
  }

  /**
   * Generate QR code for booking
   */
  async generateBookingQRCode(
    bookingId: string,
    options?: QRCodeOptions
  ): Promise<string> {
    const data: QRCodeData = {
      type: 'booking',
      id: bookingId,
      timestamp: Date.now()
    };

    return this.generateQRCode(data, options);
  }

  /**
   * Generate QR code for user verification
   */
  async generateUserQRCode(
    userId: string,
    options?: QRCodeOptions
  ): Promise<string> {
    const data: QRCodeData = {
      type: 'user',
      id: userId,
      timestamp: Date.now()
    };

    return this.generateQRCode(data, options);
  }

  /**
   * Generate QR code from data object
   */
  async generateQRCode(
    data: QRCodeData, 
    options?: QRCodeOptions
  ): Promise<string> {
    try {
      const mergedOptions = { ...this.defaultOptions, ...options };
      const dataString = JSON.stringify(data);
      
      const qrCodeDataURL = await QRCode.toDataURL(dataString, {
        width: mergedOptions.size,
        margin: mergedOptions.margin,
        color: mergedOptions.color,
        errorCorrectionLevel: mergedOptions.errorCorrectionLevel
      });

      return qrCodeDataURL;
    } catch (error) {
      console.error('Error generating QR code:', error);
      throw new Error('Failed to generate QR code');
    }
  }

  /**
   * Generate QR code as SVG
   */
  async generateQRCodeSVG(
    data: QRCodeData,
    options?: QRCodeOptions
  ): Promise<string> {
    try {
      const mergedOptions = { ...this.defaultOptions, ...options };
      const dataString = JSON.stringify(data);
      
      const qrCodeSVG = await QRCode.toString(dataString, {
        type: 'svg',
        width: mergedOptions.size,
        margin: mergedOptions.margin,
        color: mergedOptions.color,
        errorCorrectionLevel: mergedOptions.errorCorrectionLevel
      });

      return qrCodeSVG;
    } catch (error) {
      console.error('Error generating QR code SVG:', error);
      throw new Error('Failed to generate QR code SVG');
    }
  }

  /**
   * Parse QR code data
   */
  parseQRCodeData(qrCodeString: string): QRCodeData | null {
    try {
      const data = JSON.parse(qrCodeString);
      
      // Validate QR code data structure
      if (!data.type || !data.id) {
        throw new Error('Invalid QR code data structure');
      }

      // Check if QR code is not too old (24 hours)
      if (data.timestamp) {
        const age = Date.now() - data.timestamp;
        const maxAge = 24 * 60 * 60 * 1000; // 24 hours
        
        if (age > maxAge) {
          throw new Error('QR code has expired');
        }
      }

      return data as QRCodeData;
    } catch (error) {
      console.error('Error parsing QR code:', error);
      return null;
    }
  }

  /**
   * Validate QR code for specific action
   */
  validateQRCodeForAction(
    qrCodeData: QRCodeData, 
    expectedAction: 'pickup' | 'return' | 'inspection'
  ): boolean {
    if (!qrCodeData.action) {
      return false;
    }

    return qrCodeData.action === expectedAction;
  }

  /**
   * Generate QR code for vehicle inspection
   */
  async generateInspectionQRCode(
    vehicleId: string,
    inspectionType: 'pre-rental' | 'post-rental',
    options?: QRCodeOptions
  ): Promise<string> {
    const data: QRCodeData = {
      type: 'vehicle',
      id: vehicleId,
      action: 'inspection',
      timestamp: Date.now(),
      metadata: {
        inspectionType,
        generatedBy: 'system'
      }
    };

    return this.generateQRCode(data, options);
  }

  /**
   * Generate QR code for group booking
   */
  async generateGroupBookingQRCode(
    bookingId: string,
    groupSize: number,
    options?: QRCodeOptions
  ): Promise<string> {
    const data: QRCodeData = {
      type: 'booking',
      id: bookingId,
      timestamp: Date.now(),
      metadata: {
        groupSize,
        isGroupBooking: true
      }
    };

    return this.generateQRCode(data, options);
  }

  /**
   * Download QR code as image
   */
  downloadQRCode(qrCodeDataURL: string, filename: string = 'qrcode.png'): void {
    const link = document.createElement('a');
    link.download = filename;
    link.href = qrCodeDataURL;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  /**
   * Print QR code
   */
  printQRCode(qrCodeDataURL: string): void {
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>QR Code</title>
            <style>
              body { 
                display: flex; 
                justify-content: center; 
                align-items: center; 
                height: 100vh; 
                margin: 0; 
              }
              img { 
                max-width: 100%; 
                height: auto; 
              }
            </style>
          </head>
          <body>
            <img src="${qrCodeDataURL}" alt="QR Code" />
          </body>
        </html>
      `);
      printWindow.document.close();
      printWindow.print();
    }
  }

  /**
   * Generate QR code with custom styling
   */
  async generateStyledQRCode(
    data: QRCodeData,
    style: {
      backgroundColor?: string;
      foregroundColor?: string;
      logo?: string;
      logoSize?: number;
    },
    options?: QRCodeOptions
  ): Promise<string> {
    try {
      const mergedOptions = { ...this.defaultOptions, ...options };
      const dataString = JSON.stringify(data);
      
      // Generate base QR code
      const qrCodeDataURL = await QRCode.toDataURL(dataString, {
        width: mergedOptions.size,
        margin: mergedOptions.margin,
        color: {
          dark: style.foregroundColor || mergedOptions.color?.dark,
          light: style.backgroundColor || mergedOptions.color?.light
        },
        errorCorrectionLevel: mergedOptions.errorCorrectionLevel
      });

      // If logo is provided, overlay it on the QR code
      if (style.logo) {
        return this.addLogoToQRCode(qrCodeDataURL, style.logo, style.logoSize || 50);
      }

      return qrCodeDataURL;
    } catch (error) {
      console.error('Error generating styled QR code:', error);
      throw new Error('Failed to generate styled QR code');
    }
  }

  /**
   * Add logo to QR code
   */
  private async addLogoToQRCode(
    qrCodeDataURL: string, 
    logoURL: string, 
    logoSize: number
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      
      if (!ctx) {
        reject(new Error('Could not get canvas context'));
        return;
      }

      const qrImage = new Image();
      const logoImage = new Image();

      qrImage.onload = () => {
        canvas.width = qrImage.width;
        canvas.height = qrImage.height;
        
        // Draw QR code
        ctx.drawImage(qrImage, 0, 0);
        
        logoImage.onload = () => {
          // Calculate logo position (center of QR code)
          const logoX = (canvas.width - logoSize) / 2;
          const logoY = (canvas.height - logoSize) / 2;
          
          // Draw logo
          ctx.drawImage(logoImage, logoX, logoY, logoSize, logoSize);
          
          resolve(canvas.toDataURL());
        };
        
        logoImage.src = logoURL;
      };
      
      qrImage.src = qrCodeDataURL;
    });
  }
}

export const qrCodeService = new QRCodeService();
