import { sequelize } from '../config/database';
import { User } from './User';
import { Listing } from './Listing';
import { Booking } from './Booking';
import { Review } from './Review';
import { Vehicle } from './Vehicle';

// Define associations once per process to avoid duplicate alias errors in test runners
const anySequelize: any = sequelize as any;
if (!anySequelize.__associationsInitialized) {
  User.hasMany(Listing, { foreignKey: "hostId", as: "listings" });
  User.hasMany(Booking, { foreignKey: "renterId", as: "bookings" });
  User.hasMany(Review, { foreignKey: "renterId", as: "reviews" });
  User.hasMany(Vehicle, { foreignKey: "hostId", as: "vehicles" });

  Listing.belongsTo(User, { foreignKey: "hostId", as: "host" });
  Listing.hasMany(Booking, { foreignKey: "listingId", as: "bookings" });
  Listing.hasMany(Review, { foreignKey: "listingId", as: "reviews" });

  Booking.belongsTo(User, { foreignKey: "renterId", as: "renter" });
  Booking.belongsTo(Listing, { foreignKey: "listingId", as: "listing" });

  Review.belongsTo(Listing, { foreignKey: "listingId", as: "listing" });
  Review.belongsTo(User, { foreignKey: "renterId", as: "renter" });

  Vehicle.belongsTo(User, { foreignKey: "hostId", as: "host" });

  anySequelize.__associationsInitialized = true;
}

export { User, Listing, Booking, Review, Vehicle, sequelize };

