import { sequelize } from '../config/database';
import { User } from './User';
import { Booking } from './Booking';
import { Review } from './Review';
import { Listing } from './Listing';
import { Payment } from './Payment';
import { AdminLog } from './AdminLog';
import { Notification } from './Notification';
import { Checkpoint } from './Checkpoint';
import { CheckpointItem } from './CheckpointItem';
import { CheckpointImage } from './CheckpointImage';
import { ApprovalRequest } from './ApprovalRequest';
import Document from './Document';

// Define associations after all models are imported

// User associations
User.hasMany(Listing, { foreignKey: 'host_id', as: 'listings' });
User.hasMany(Booking, { foreignKey: 'renter_id', as: 'bookings' });
User.hasMany(Payment, { foreignKey: 'renter_id', as: 'payments' });
User.hasMany(Review, { foreignKey: 'reviewer_id', as: 'reviews_given' });
User.hasMany(Review, { foreignKey: 'reviewee_id', as: 'reviews_received' });
User.hasMany(AdminLog, { foreignKey: 'admin_id', as: 'admin_logs' });
User.hasMany(AdminLog, { foreignKey: 'target_user_id', as: 'targeted_logs' });
User.hasMany(Notification, { foreignKey: 'user_id', as: 'notifications' });
User.hasMany(ApprovalRequest, { foreignKey: 'submittedById', as: 'submittedRequests' });
User.hasMany(ApprovalRequest, { foreignKey: 'reviewedById', as: 'reviewedRequests' });
User.hasMany(Document, { foreignKey: 'userId', as: 'documents' });

// Listing associations
Listing.belongsTo(User, { foreignKey: 'host_id', as: 'host' });
Listing.hasMany(Booking, { foreignKey: 'listing_id', as: 'bookings' });
Listing.hasMany(Review, { foreignKey: 'listing_id', as: 'reviews' });

// Booking associations
Booking.belongsTo(User, { foreignKey: 'renter_id', as: 'renter' });
Booking.belongsTo(Listing, { foreignKey: 'listing_id', as: 'listing' });
Booking.hasMany(Payment, { foreignKey: 'booking_id', as: 'payments' });
Booking.hasMany(Review, { foreignKey: 'booking_id', as: 'reviews' });
Booking.hasMany(Checkpoint, { foreignKey: 'booking_id', as: 'checkpoints' });

// Payment associations
Payment.belongsTo(Booking, { foreignKey: 'booking_id', as: 'booking' });
Payment.belongsTo(User, { foreignKey: 'renter_id', as: 'renter' });

// Review associations
Review.belongsTo(Booking, { foreignKey: 'booking_id', as: 'booking' });
Review.belongsTo(User, { foreignKey: 'reviewer_id', as: 'reviewer' });
Review.belongsTo(User, { foreignKey: 'reviewee_id', as: 'reviewee' });
Review.belongsTo(Listing, { foreignKey: 'listing_id', as: 'listing' });

// AdminLog associations
AdminLog.belongsTo(User, { foreignKey: 'admin_id', as: 'admin' });
AdminLog.belongsTo(User, { foreignKey: 'target_user_id', as: 'target_user' });

// Notification associations
Notification.belongsTo(User, { foreignKey: 'user_id', as: 'user' });

// Checkpoint associations
Checkpoint.belongsTo(Booking, { foreignKey: 'booking_id', as: 'booking' });
Checkpoint.belongsTo(User, { foreignKey: 'user_id', as: 'user' });
Checkpoint.hasMany(CheckpointItem, { foreignKey: 'checkpoint_id', as: 'items' });
Checkpoint.hasMany(CheckpointImage, { foreignKey: 'checkpoint_id', as: 'images' });

// CheckpointItem associations
CheckpointItem.belongsTo(Checkpoint, { foreignKey: 'checkpoint_id', as: 'checkpoint' });

// CheckpointImage associations
CheckpointImage.belongsTo(Checkpoint, { foreignKey: 'checkpoint_id', as: 'checkpoint' });
CheckpointImage.belongsTo(User, { foreignKey: 'uploaded_by', as: 'uploader' });

// ApprovalRequest associations
ApprovalRequest.belongsTo(User, { foreignKey: 'submittedById', as: 'submittedByUser' });
ApprovalRequest.belongsTo(User, { foreignKey: 'reviewedById', as: 'reviewedByUser' });

export { 
  User, 
  Booking, 
  Review, 
  Listing, 
  Payment, 
  AdminLog, 
  Notification,
  Checkpoint,
  CheckpointItem,
  CheckpointImage,
  ApprovalRequest,
  Document,
  sequelize 
};

