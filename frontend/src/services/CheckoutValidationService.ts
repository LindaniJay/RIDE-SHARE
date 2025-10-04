// import { useAuth } from '../context/AuthContext';

export interface ValidationRule {
  field: string;
  required: boolean;
  type: 'string' | 'number' | 'email' | 'phone' | 'date' | 'boolean';
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
  pattern?: RegExp;
  custom?: (value: any) => boolean | string;
  message: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
  warnings: Record<string, string>;
}

export interface CheckoutData {
  // Booking data
  startDate?: string;
  endDate?: string;
  totalDays?: number;
  totalPrice?: number;
  specialRequests?: string;
  addOns?: any[];
  
  // Customer data
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  address?: {
    street?: string;
    city?: string;
    postalCode?: string;
    country?: string;
  };
  
  // Payment data
  paymentMethod?: string;
  amount?: number;
  currency?: string;
  
  // Vehicle data
  vehicleId?: string;
  vehicleCategory?: string;
  vehiclePrice?: number;
}

class CheckoutValidationService {
  private user: any;

  constructor() {
    // Get user from auth context
    this.user = null; // Will be set by the component using this service
  }

  setUser(user: any) {
    this.user = user;
  }

  /**
   * Validate booking data
   */
  validateBookingData(data: CheckoutData): ValidationResult {
    const errors: Record<string, string> = {};
    const warnings: Record<string, string> = {};

    // Date validation
    if (!data.startDate) {
      errors.startDate = 'Start date is required';
    } else if (!this.isValidDate(data.startDate)) {
      errors.startDate = 'Invalid start date format';
    } else if (this.isDateInPast(data.startDate)) {
      errors.startDate = 'Start date cannot be in the past';
    }

    if (!data.endDate) {
      errors.endDate = 'End date is required';
    } else if (!this.isValidDate(data.endDate)) {
      errors.endDate = 'Invalid end date format';
    } else if (this.isDateInPast(data.endDate)) {
      errors.endDate = 'End date cannot be in the past';
    }

    if (data.startDate && data.endDate) {
      if (new Date(data.startDate) >= new Date(data.endDate)) {
        errors.endDate = 'End date must be after start date';
      }

      const daysDiff = this.calculateDaysDifference(data.startDate, data.endDate);
      if (daysDiff > 30) {
        warnings.rentalDuration = 'Rental duration exceeds 30 days. Please contact support for long-term rentals.';
      }
      if (daysDiff < 1) {
        errors.rentalDuration = 'Minimum rental duration is 1 day';
      }
    }

    // Price validation
    if (!data.totalPrice || data.totalPrice <= 0) {
      errors.totalPrice = 'Invalid total price';
    } else if (data.totalPrice < 50) {
      warnings.totalPrice = 'Very low rental amount. Please verify the pricing.';
    } else if (data.totalPrice > 50000) {
      warnings.totalPrice = 'High rental amount. Additional verification may be required.';
    }

    // Special requests validation
    if (data.specialRequests && data.specialRequests.length > 500) {
      errors.specialRequests = 'Special requests cannot exceed 500 characters';
    }

    return {
      isValid: Object.keys(errors).length === 0,
      errors,
      warnings
    };
  }

  /**
   * Validate customer information
   */
  validateCustomerData(data: CheckoutData): ValidationResult {
    const errors: Record<string, string> = {};
    const warnings: Record<string, string> = {};

    // Name validation
    if (!data.firstName || data.firstName.trim().length < 2) {
      errors.firstName = 'First name must be at least 2 characters';
    } else if (data.firstName.length > 50) {
      errors.firstName = 'First name cannot exceed 50 characters';
    } else if (!this.isValidName(data.firstName)) {
      errors.firstName = 'First name contains invalid characters';
    }

    if (!data.lastName || data.lastName.trim().length < 2) {
      errors.lastName = 'Last name must be at least 2 characters';
    } else if (data.lastName.length > 50) {
      errors.lastName = 'Last name cannot exceed 50 characters';
    } else if (!this.isValidName(data.lastName)) {
      errors.lastName = 'Last name contains invalid characters';
    }

    // Email validation
    if (!data.email) {
      errors.email = 'Email address is required';
    } else if (!this.isValidEmail(data.email)) {
      errors.email = 'Please enter a valid email address';
    }

    // Phone validation
    if (data.phone && !this.isValidPhone(data.phone)) {
      errors.phone = 'Please enter a valid phone number';
    } else if (!data.phone) {
      warnings.phone = 'Phone number is recommended for booking confirmations';
    }

    // Address validation
    if (data.address) {
      if (data.address.street && data.address.street.length > 100) {
        errors.address = 'Street address cannot exceed 100 characters';
      }
      if (data.address.city && data.address.city.length > 50) {
        errors.address = 'City name cannot exceed 50 characters';
      }
      if (data.address.postalCode && !this.isValidPostalCode(data.address.postalCode)) {
        errors.postalCode = 'Please enter a valid postal code';
      }
    }

    return {
      isValid: Object.keys(errors).length === 0,
      errors,
      warnings
    };
  }

  /**
   * Validate payment information
   */
  validatePaymentData(data: CheckoutData): ValidationResult {
    const errors: Record<string, string> = {};
    const warnings: Record<string, string> = {};

    if (!data.paymentMethod) {
      errors.paymentMethod = 'Payment method is required';
    }

    if (!data.amount || data.amount <= 0) {
      errors.amount = 'Invalid payment amount';
    }

    if (!data.currency || data.currency.length !== 3) {
      errors.currency = 'Invalid currency code';
    }

    // Check if user has sufficient balance for certain payment methods
    if (data.paymentMethod === 'wallet' && data.amount && this.user?.walletBalance < data.amount) {
      errors.paymentMethod = 'Insufficient wallet balance';
    }

    return {
      isValid: Object.keys(errors).length === 0,
      errors,
      warnings
    };
  }

  /**
   * Validate age restrictions for vehicle categories
   */
  validateAgeRestrictions(data: CheckoutData): ValidationResult {
    const errors: Record<string, string> = {};
    const warnings: Record<string, string> = {};

    if (!this.user) {
      errors.user = 'User authentication required';
      return { isValid: false, errors, warnings };
    }

    const userAge = this.user.age || this.calculateAge(this.user.dateOfBirth);
    const vehicleCategory = data.vehicleCategory;

    if (vehicleCategory === 'luxury' && userAge < 25) {
      errors.age = 'Must be 25 or older to rent luxury vehicles';
    } else if (vehicleCategory === 'sports' && userAge < 21) {
      errors.age = 'Must be 21 or older to rent sports vehicles';
    } else if (userAge < 18) {
      errors.age = 'Must be 18 or older to rent vehicles';
    }

    if (userAge < 25 && vehicleCategory !== 'standard') {
      warnings.age = 'Additional insurance may be required for drivers under 25';
    }

    return {
      isValid: Object.keys(errors).length === 0,
      errors,
      warnings
    };
  }

  /**
   * Validate license requirements
   */
  validateLicenseRequirements(data: CheckoutData): ValidationResult {
    const errors: Record<string, string> = {};
    const warnings: Record<string, string> = {};

    if (!this.user) {
      errors.user = 'User authentication required';
      return { isValid: false, errors, warnings };
    }

    if (!this.user.driversLicense) {
      errors.license = 'Valid driver\'s license is required';
    } else if (this.user.licenseExpiry && this.isLicenseExpired(this.user.licenseExpiry)) {
      errors.license = 'Driver\'s license has expired';
    } else if (this.user.licenseExpiry && this.isLicenseExpiringSoon(this.user.licenseExpiry)) {
      warnings.license = 'Driver\'s license expires soon. Please update your license information.';
    }

    // Check license type for vehicle categories
    const vehicleCategory = data.vehicleCategory;
    if (vehicleCategory === 'commercial' && this.user.licenseType !== 'professional') {
      errors.license = 'Professional driver\'s license required for commercial vehicles';
    }

    return {
      isValid: Object.keys(errors).length === 0,
      errors,
      warnings
    };
  }

  /**
   * Comprehensive checkout validation
   */
  validateCheckout(data: CheckoutData): ValidationResult {
    const bookingValidation = this.validateBookingData(data);
    const customerValidation = this.validateCustomerData(data);
    const paymentValidation = this.validatePaymentData(data);
    const ageValidation = this.validateAgeRestrictions(data);
    const licenseValidation = this.validateLicenseRequirements(data);

    const allErrors = {
      ...bookingValidation.errors,
      ...customerValidation.errors,
      ...paymentValidation.errors,
      ...ageValidation.errors,
      ...licenseValidation.errors
    };

    const allWarnings = {
      ...bookingValidation.warnings,
      ...customerValidation.warnings,
      ...paymentValidation.warnings,
      ...ageValidation.warnings,
      ...licenseValidation.warnings
    };

    return {
      isValid: Object.keys(allErrors).length === 0,
      errors: allErrors,
      warnings: allWarnings
    };
  }

  /**
   * Real-time validation for form fields
   */
  validateField(field: string, value: any, data: CheckoutData): string | null {
    switch (field) {
      case 'email':
        if (!value) return 'Email is required';
        if (!this.isValidEmail(value)) return 'Invalid email format';
        return null;

      case 'phone':
        if (value && !this.isValidPhone(value)) return 'Invalid phone number';
        return null;

      case 'firstName':
      case 'lastName':
        if (!value) return `${field} is required`;
        if (value.length < 2) return `${field} must be at least 2 characters`;
        if (!this.isValidName(value)) return `${field} contains invalid characters`;
        return null;

      case 'startDate':
        if (!value) return 'Start date is required';
        if (!this.isValidDate(value)) return 'Invalid date format';
        if (this.isDateInPast(value)) return 'Start date cannot be in the past';
        return null;

      case 'endDate':
        if (!value) return 'End date is required';
        if (!this.isValidDate(value)) return 'Invalid date format';
        if (data.startDate && new Date(value) <= new Date(data.startDate)) {
          return 'End date must be after start date';
        }
        return null;

      default:
        return null;
    }
  }

  /**
   * Utility validation methods
   */
  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  private isValidPhone(phone: string): boolean {
    // South African phone number validation
    const phoneRegex = /^(\+27|0)[0-9]{9}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
  }

  private isValidName(name: string): boolean {
    const nameRegex = /^[a-zA-Z\s'-]+$/;
    return nameRegex.test(name);
  }

  private isValidDate(dateString: string): boolean {
    const date = new Date(dateString);
    return !isNaN(date.getTime());
  }

  private isDateInPast(dateString: string): boolean {
    const date = new Date(dateString);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  }

  private calculateDaysDifference(startDate: string, endDate: string): number {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffTime = end.getTime() - start.getTime();
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  }

  private calculateAge(dateOfBirth: string): number {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    
    return age;
  }

  private isLicenseExpired(expiryDate: string): boolean {
    return new Date(expiryDate) < new Date();
  }

  private isLicenseExpiringSoon(expiryDate: string, daysThreshold: number = 30): boolean {
    const expiry = new Date(expiryDate);
    const threshold = new Date();
    threshold.setDate(threshold.getDate() + daysThreshold);
    return expiry < threshold;
  }

  private isValidPostalCode(postalCode: string): boolean {
    // South African postal code validation (4 digits)
    const postalRegex = /^[0-9]{4}$/;
    return postalRegex.test(postalCode);
  }
}

export const checkoutValidationService = new CheckoutValidationService();
