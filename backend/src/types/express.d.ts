import { User } from '../models/User';

declare module 'express-serve-static-core' {
  interface Request {
    user?: User;
  }
}

// Re-export for convenience
export { User };