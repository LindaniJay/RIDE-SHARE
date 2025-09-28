import { sequelize } from '../config/database';
import { User } from './User';
import { Booking } from './Booking';
import { Review } from './Review';
import { Vehicle } from './Vehicle';

// Define associations after all models are imported
User.hasMany(Booking, { foreignKey: 'renterId', as: 'bookings' });
User.hasMany(Review, { foreignKey: 'renterId', as: 'reviews' });

// Vehicle associations
User.hasMany(Vehicle, { foreignKey: 'hostId', as: 'vehicles' });
Vehicle.belongsTo(User, { foreignKey: 'hostId', as: 'host' });
Vehicle.hasMany(Booking, { foreignKey: 'vehicleId', as: 'bookings' });

Booking.belongsTo(User, { foreignKey: 'renterId', as: 'renter' });
Booking.belongsTo(Vehicle, { foreignKey: 'vehicleId', as: 'vehicle' });

Review.belongsTo(Vehicle, { foreignKey: 'vehicleId', as: 'vehicle' });
Review.belongsTo(User, { foreignKey: 'renterId', as: 'renter' });

export { User, Booking, Review, Vehicle, sequelize };

