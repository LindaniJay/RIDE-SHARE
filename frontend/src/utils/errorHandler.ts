import { AppError } from '../types';

export class ErrorHandler {
  private static instance: ErrorHandler;
  private errorLog: AppError[] = [];

  static getInstance(): ErrorHandler {
    if (!ErrorHandler.instance) {
      ErrorHandler.instance = new ErrorHandler();
    }
    return ErrorHandler.instance;
  }

  handleError(error: unknown, context?: string): AppError {
    let appError: AppError;

    if (error instanceof Error) {
      appError = {
        code: this.getErrorCode(error),
        message: error.message,
        details: {
          stack: error.stack,
          context,
          timestamp: new Date().toISOString(),
        },
      };
    } else if (typeof error === 'string') {
      appError = {
        code: 'UNKNOWN_ERROR',
        message: error,
        details: { context, timestamp: new Date().toISOString() },
      };
    } else {
      appError = {
        code: 'UNKNOWN_ERROR',
        message: 'An unknown error occurred',
        details: { context, timestamp: new Date().toISOString() },
      };
    }

    this.logError(appError);
    return appError;
  }

  private getErrorCode(error: Error): string {
    // Network errors
    if (error.message.includes('fetch')) return 'NETWORK_ERROR';
    if (error.message.includes('timeout')) return 'TIMEOUT_ERROR';
    
    // Authentication errors
    if (error.message.includes('unauthorized')) return 'AUTH_ERROR';
    if (error.message.includes('forbidden')) return 'PERMISSION_ERROR';
    
    // Validation errors
    if (error.message.includes('validation')) return 'VALIDATION_ERROR';
    if (error.message.includes('required')) return 'VALIDATION_ERROR';
    
    // Default
    return 'UNKNOWN_ERROR';
  }

  private logError(error: AppError): void {
    this.errorLog.push(error);
    
    // In production, send to logging service
    if (import.meta.env.PROD) {
      this.sendToLoggingService(error);
    } else {
      console.error('Error logged:', error);
    }
  }

  private sendToLoggingService(error: AppError): void {
    // Implement your logging service integration here
    // Examples: Sentry, LogRocket, DataDog, etc.
    console.log('Sending error to logging service:', error);
  }

  getErrorLog(): AppError[] {
    return [...this.errorLog];
  }

  clearErrorLog(): void {
    this.errorLog = [];
  }
}

export const errorHandler = ErrorHandler.getInstance();

// Utility functions for common error scenarios
export const createError = (code: string, message: string, details?: Record<string, any>): AppError => ({
  code,
  message,
  details,
});

export const isNetworkError = (error: AppError): boolean => 
  error.code === 'NETWORK_ERROR' || error.code === 'TIMEOUT_ERROR';

export const isAuthError = (error: AppError): boolean => 
  error.code === 'AUTH_ERROR' || error.code === 'PERMISSION_ERROR';

export const isValidationError = (error: AppError): boolean => 
  error.code === 'VALIDATION_ERROR';
