// This file has been consolidated into security.ts
// Import from the centralized security middleware instead
export { 
  createRateLimit,
  authRateLimit,
  apiRateLimit,
  uploadRateLimit 
} from './security';

// Approval-specific rate limits
import { createRateLimit } from './security';

export const approvalRequestRateLimit = createRateLimit(
  15 * 60 * 1000, // 15 minutes
  5, // 5 approval requests
  'Too many approval requests, please try again later.'
);

export const approvalUpdateRateLimit = createRateLimit(
  1 * 60 * 1000, // 1 minute
  20, // 20 updates
  'Too many approval updates, please slow down.'
);

export const bulkApprovalRateLimit = createRateLimit(
  5 * 60 * 1000, // 5 minutes
  3, // 3 bulk operations
  'Too many bulk operations, please wait before trying again.'
);
