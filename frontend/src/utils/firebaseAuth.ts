import { auth } from '../config/firebase';

/**
 * Get the current Firebase ID token
 * @param forceRefresh - Whether to force refresh the token
 * @returns Promise<string | null> - The ID token or null if not authenticated
 */
export const getFirebaseToken = async (forceRefresh: boolean = false): Promise<string | null> => {
  try {
    const user = auth.currentUser;
    if (!user) {
      return null;
    }
    
    const token = await user.getIdToken(forceRefresh);
    return token;
  } catch (error) {
    console.error('Error getting Firebase token:', error);
    return null;
  }
};

/**
 * Get authorization headers for API requests
 * @param forceRefresh - Whether to force refresh the token
 * @returns Promise<Record<string, string>> - Headers object
 */
export const getAuthHeaders = async (forceRefresh: boolean = false): Promise<Record<string, string>> => {
  const token = await getFirebaseToken(forceRefresh);
  
  if (!token) {
    return {};
  }
  
  return {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
  };
};

/**
 * Check if user is authenticated
 * @returns boolean - True if user is authenticated
 */
export const isAuthenticated = (): boolean => {
  return auth.currentUser !== null;
};

/**
 * Get current user
 * @returns User | null - Current Firebase user or null
 */
export const getCurrentUser = () => {
  return auth.currentUser;
};
