import { User } from './User';
import { Listing } from './Listing';
import { Booking } from './Booking';
import { Notification } from './Notification';
import { Image } from './Image';
import { Payment } from './Payment';
import { Review } from './Review';
import { Document } from './Document';
import { AdminLog } from './AdminLog';
import { Checkpoint } from './Checkpoint';
import { CheckpointItem } from './CheckpointItem';
import { CheckpointImage } from './CheckpointImage';
import { EnhancedVehicle } from './EnhancedVehicle';
import { ApprovalRequest } from './ApprovalRequest';
import { AuditLog } from './AuditLog';

// Define associations
User.hasMany(Listing, { foreignKey: 'hostId', as: 'listings' });
Listing.belongsTo(User, { foreignKey: 'hostId', as: 'host' });

User.hasMany(Booking, { foreignKey: 'renterId', as: 'renterBookings' });
User.hasMany(Booking, { foreignKey: 'hostId', as: 'hostBookings' });
Booking.belongsTo(User, { foreignKey: 'renterId', as: 'renter' });
Booking.belongsTo(User, { foreignKey: 'hostId', as: 'host' });

Listing.hasMany(Booking, { foreignKey: 'listingId', as: 'listings' });
Booking.belongsTo(Listing, { foreignKey: 'listingId', as: 'listing' });

User.hasMany(Notification, { foreignKey: 'userId', as: 'notifications' });
Notification.belongsTo(User, { foreignKey: 'userId', as: 'user' });

Listing.hasMany(Image, { foreignKey: 'listingId', as: 'imageList' });
Image.belongsTo(Listing, { foreignKey: 'listingId', as: 'listing' });

Booking.hasMany(Payment, { foreignKey: 'bookingId', as: 'payments' });
Payment.belongsTo(Booking, { foreignKey: 'bookingId', as: 'booking' });

Booking.hasMany(Review, { foreignKey: 'bookingId', as: 'reviews' });
Review.belongsTo(Booking, { foreignKey: 'bookingId', as: 'booking' });

User.hasMany(Document, { foreignKey: 'userId', as: 'documents' });
Document.belongsTo(User, { foreignKey: 'userId', as: 'user' });

User.hasMany(AdminLog, { foreignKey: 'adminId', as: 'adminLogs' });
AdminLog.belongsTo(User, { foreignKey: 'adminId', as: 'admin' });

Booking.hasMany(Checkpoint, { foreignKey: 'bookingId', as: 'checkpoints' });
Checkpoint.belongsTo(Booking, { foreignKey: 'bookingId', as: 'booking' });

Checkpoint.hasMany(CheckpointItem, { foreignKey: 'checkpointId', as: 'items' });
CheckpointItem.belongsTo(Checkpoint, { foreignKey: 'checkpointId', as: 'checkpoint' });

Checkpoint.hasMany(CheckpointImage, { foreignKey: 'checkpointId', as: 'images' });
CheckpointImage.belongsTo(Checkpoint, { foreignKey: 'checkpointId', as: 'checkpoint' });

// Enhanced Vehicle associations
User.hasMany(EnhancedVehicle, { foreignKey: 'hostId', as: 'enhancedVehicles' });
EnhancedVehicle.belongsTo(User, { foreignKey: 'hostId', as: 'host' });

EnhancedVehicle.hasMany(Booking, { foreignKey: 'vehicleId', as: 'vehicleBookings' });
Booking.belongsTo(EnhancedVehicle, { foreignKey: 'vehicleId', as: 'vehicle' });

// Approval Request associations
User.hasMany(ApprovalRequest, { foreignKey: 'submittedById', as: 'submittedRequests' });
ApprovalRequest.belongsTo(User, { foreignKey: 'submittedById', as: 'submittedByUser' });

User.hasMany(ApprovalRequest, { foreignKey: 'reviewedById', as: 'reviewedRequests' });
ApprovalRequest.belongsTo(User, { foreignKey: 'reviewedById', as: 'reviewedByUser' });

// Audit Log associations
User.hasMany(AuditLog, { foreignKey: 'userId', as: 'auditLogs' });
AuditLog.belongsTo(User, { foreignKey: 'userId', as: 'user' });

export { User, Listing, Booking, Notification, Image, Payment, Review, Document, AdminLog, Checkpoint, CheckpointItem, CheckpointImage, EnhancedVehicle, ApprovalRequest, AuditLog };
// Additional models can be added here as needed
// Additional models can be added here as needed
// Additional models can be added here as needed