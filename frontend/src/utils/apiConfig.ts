/**
 * Centralized API configuration utility
 * Ensures all services use the Vite proxy in development
 */

/**
 * Get the API base URL
 * In development, uses '/api' which goes through Vite proxy
 * In production, uses VITE_API_URL if set, otherwise '/api'
 */
export function getApiBaseUrl(): string {
  // In development, always use Vite proxy
  if (import.meta.env.DEV) {
    return '/api';
  }
  
  // In production, use VITE_API_URL if provided, otherwise default to '/api'
  return import.meta.env.VITE_API_URL || '/api';
}

/**
 * Get the WebSocket URL
 * In development, uses VITE_WS_URL if set, otherwise 'http://localhost:5001'
 * In production, uses VITE_WS_URL if set, otherwise derives from VITE_API_URL
 */
export function getWebSocketUrl(): string {
  if (import.meta.env.VITE_WS_URL) {
    return import.meta.env.VITE_WS_URL;
  }
  
  // In development, default to localhost:5001
  if (import.meta.env.DEV) {
    return 'http://localhost:5001';
  }
  
  // In production, try to derive from API URL
  const apiUrl = import.meta.env.VITE_API_URL;
  if (apiUrl) {
    // Remove /api suffix if present and convert http to ws
    return apiUrl.replace(/\/api$/, '').replace(/^http/, 'ws');
  }
  
  // Fallback
  return 'ws://localhost:5001';
}

/**
 * Check if an error is a connection refused error
 */
export function isConnectionRefusedError(error: any): boolean {
  if (!error) return false;
  
  const message = error.message || '';
  const code = error.code || '';
  
  return (
    message.includes('ERR_CONNECTION_REFUSED') ||
    message.includes('Failed to fetch') ||
    message.includes('NetworkError') ||
    message.includes('connection refused') ||
    code === 'ECONNREFUSED' ||
    code === 'ERR_CONNECTION_REFUSED'
  );
}

/**
 * Get a user-friendly error message for API errors
 */
export function getApiErrorMessage(error: any): string {
  if (isConnectionRefusedError(error)) {
    return 'Backend server is not running. Please start the backend server on port 5001.';
  }
  
  if (error?.response?.status === 500) {
    return 'Server error. Please check the backend server logs.';
  }
  
  if (error?.response?.status === 401) {
    return 'Authentication required. Please log in again.';
  }
  
  if (error?.response?.status === 403) {
    return 'You do not have permission to perform this action.';
  }
  
  if (error?.response?.status === 404) {
    return 'Resource not found.';
  }
  
  return error?.response?.data?.message || error?.message || 'An error occurred while making the request.';
}

