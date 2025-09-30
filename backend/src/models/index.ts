import { sequelize } from '../config/database';
import { User } from './User';
import { Booking } from './Booking';
import { Review } from './Review';
import { Vehicle } from './Vehicle';
import { Listing } from './Listing';
import { ApprovalRequest } from './ApprovalRequest';
import { AuditLog } from './AuditLog';

// Define associations after all models are imported
User.hasMany(Booking, { foreignKey: 'renterId', as: 'bookings' });
User.hasMany(Review, { foreignKey: 'renterId', as: 'reviews' });

// Vehicle associations
User.hasMany(Vehicle, { foreignKey: 'hostId', as: 'vehicles' });
Vehicle.belongsTo(User, { foreignKey: 'hostId', as: 'host' });
Vehicle.hasMany(Booking, { foreignKey: 'vehicleId', as: 'bookings' });

// Listing associations
User.hasMany(Listing, { foreignKey: 'hostId', as: 'listings' });
Listing.belongsTo(User, { foreignKey: 'hostId', as: 'host' });

Booking.belongsTo(User, { foreignKey: 'renterId', as: 'renter' });
Booking.belongsTo(Vehicle, { foreignKey: 'vehicleId', as: 'vehicle' });

Review.belongsTo(Vehicle, { foreignKey: 'vehicleId', as: 'vehicle' });
Review.belongsTo(User, { foreignKey: 'renterId', as: 'renter' });

// ApprovalRequest associations
User.hasMany(ApprovalRequest, { foreignKey: 'submittedById', as: 'submittedRequests' });
User.hasMany(ApprovalRequest, { foreignKey: 'reviewedById', as: 'reviewedRequests' });
ApprovalRequest.belongsTo(User, { foreignKey: 'submittedById', as: 'submittedByUser' });
ApprovalRequest.belongsTo(User, { foreignKey: 'reviewedById', as: 'reviewedByUser' });

export { User, Booking, Review, Vehicle, Listing, ApprovalRequest, AuditLog, sequelize };

