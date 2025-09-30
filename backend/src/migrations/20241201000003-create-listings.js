'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('listings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      hostId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      make: {
        type: Sequelize.STRING,
        allowNull: false
      },
      model: {
        type: Sequelize.STRING,
        allowNull: false
      },
      year: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      type: {
        type: Sequelize.STRING,
        allowNull: false
      },
      transmission: {
        type: Sequelize.STRING,
        allowNull: false
      },
      fuelType: {
        type: Sequelize.STRING,
        allowNull: false
      },
      seats: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      features: {
        type: Sequelize.JSON,
        allowNull: false,
        defaultValue: []
      },
      pricePerDay: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      location: {
        type: Sequelize.STRING,
        allowNull: false
      },
      images: {
        type: Sequelize.JSON,
        allowNull: false,
        defaultValue: []
      },
      availability: {
        type: Sequelize.JSON,
        allowNull: false,
        defaultValue: {}
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'pending'
      },
      declineReason: {
        type: Sequelize.STRING,
        allowNull: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('listings');
  }
};
