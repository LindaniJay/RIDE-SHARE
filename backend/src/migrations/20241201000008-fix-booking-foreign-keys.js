'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    try {
      // Try to drop the foreign key constraint if it exists
      await queryInterface.removeConstraint('bookings', 'bookings_vehicleId_vehicles_fk');
    } catch (error) {
      // Constraint might not exist, continue
      console.log('Constraint bookings_vehicleId_vehicles_fk does not exist, continuing...');
    }
    
    // Add new foreign key constraint to listings table
    await queryInterface.addConstraint('bookings', {
      fields: ['vehicleId'],
      type: 'foreign key',
      name: 'bookings_vehicleId_listings_fk',
      references: {
        table: 'listings',
        field: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    });
  },

  async down(queryInterface, Sequelize) {
    // Remove the listings foreign key
    await queryInterface.removeConstraint('bookings', 'bookings_vehicleId_listings_fk');
    
    // Add back the vehicles foreign key
    await queryInterface.addConstraint('bookings', {
      fields: ['vehicleId'],
      type: 'foreign key',
      name: 'bookings_vehicleId_vehicles_fk',
      references: {
        table: 'vehicles',
        field: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    });
  }
};
