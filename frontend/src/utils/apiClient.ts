import { getAuthHeaders } from './firebaseAuth';

/**
 * Make an authenticated API request using Firebase authentication
 * @param url - The API endpoint URL
 * @param options - Fetch options
 * @returns Promise<Response> - The fetch response
 */
export const authenticatedFetch = async (url: string, options: RequestInit = {}): Promise<Response> => {
  try {
    const headers = await getAuthHeaders();
    
    const requestOptions: RequestInit = {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...headers,
        ...options.headers,
      },
    };

    const response = await fetch(url, requestOptions);
    
    // Handle authentication errors
    if (response.status === 401) {
      // Token expired or invalid, redirect to login
      window.location.href = '/login';
      throw new Error('Authentication failed');
    }
    
    return response;
  } catch (error) {
    console.error('API request failed:', error);
    throw error;
  }
};

/**
 * Make a GET request with Firebase authentication
 */
export const authenticatedGet = async (url: string, options: RequestInit = {}) => {
  return authenticatedFetch(url, { ...options, method: 'GET' });
};

/**
 * Make a POST request with Firebase authentication
 */
export const authenticatedPost = async (url: string, data?: any, options: RequestInit = {}) => {
  return authenticatedFetch(url, {
    ...options,
    method: 'POST',
    body: data ? JSON.stringify(data) : undefined,
  });
};

/**
 * Make a PUT request with Firebase authentication
 */
export const authenticatedPut = async (url: string, data?: any, options: RequestInit = {}) => {
  return authenticatedFetch(url, {
    ...options,
    method: 'PUT',
    body: data ? JSON.stringify(data) : undefined,
  });
};

/**
 * Make a DELETE request with Firebase authentication
 */
export const authenticatedDelete = async (url: string, options: RequestInit = {}) => {
  return authenticatedFetch(url, { ...options, method: 'DELETE' });
};

/**
 * Make a PATCH request with Firebase authentication
 */
export const authenticatedPatch = async (url: string, data?: any, options: RequestInit = {}) => {
  return authenticatedFetch(url, {
    ...options,
    method: 'PATCH',
    body: data ? JSON.stringify(data) : undefined,
  });
};
