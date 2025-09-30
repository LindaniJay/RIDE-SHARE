import rateLimit from 'express-rate-limit';

// Rate limiting for approval request creation
export const approvalRequestRateLimit = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Limit each IP to 5 approval requests per windowMs
  message: {
    success: false,
    error: 'Too Many Requests',
    message: 'Too many approval requests from this IP, please try again later.'
  },
  standardHeaders: true,
  legacyHeaders: false,
  skip: (req) => {
    // Skip rate limiting for admin users
    return req.user?.role === 'admin';
  }
});

// Rate limiting for approval request updates (admin actions)
export const approvalUpdateRateLimit = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 20, // Limit each IP to 20 approval updates per minute
  message: {
    success: false,
    error: 'Too Many Updates',
    message: 'Too many approval updates from this IP, please slow down.'
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// Rate limiting for bulk operations
export const bulkApprovalRateLimit = rateLimit({
  windowMs: 5 * 60 * 1000, // 5 minutes
  max: 3, // Limit each IP to 3 bulk operations per 5 minutes
  message: {
    success: false,
    error: 'Bulk Operation Limit',
    message: 'Too many bulk operations. Please wait before trying again.'
  },
  standardHeaders: true,
  legacyHeaders: false,
});
