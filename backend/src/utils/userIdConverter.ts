/**
 * Utility functions for handling User ID conversions
 * Since User model uses UUID (string) but other models expect numbers,
 * we need to convert between these types safely.
 */

/**
 * Convert User ID to number for database operations
 * @param userId - User ID (string UUID or number)
 * @returns number - Converted user ID
 */
export function userIdToNumber(userId: string | number): number {
  if (typeof userId === 'number') {
    return userId;
  }
  
  // For UUID strings, we'll use a hash-based approach to convert to number
  // This ensures consistency across the application
  let hash = 0;
  for (let i = 0; i < userId.length; i++) {
    const char = userId.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  
  // Ensure positive number
  return Math.abs(hash);
}

/**
 * Convert User ID to string for Firebase operations
 * @param userId - User ID (string UUID or number)
 * @returns string - User ID as string
 */
export function userIdToString(userId: string | number): string {
  if (typeof userId === 'string') {
    return userId;
  }
  
  return userId.toString();
}

/**
 * Safe user ID conversion for database queries
 * @param userId - User ID from request
 * @returns number - Safe number for database operations
 */
export function safeUserId(userId: any): number {
  if (typeof userId === 'number') {
    return userId;
  }
  
  if (typeof userId === 'string') {
    // Try to parse as number first
    const parsed = parseInt(userId, 10);
    if (!isNaN(parsed)) {
      return parsed;
    }
    
    // If not a number, convert UUID to number
    return userIdToNumber(userId);
  }
  
  // Fallback
  return 0;
}
