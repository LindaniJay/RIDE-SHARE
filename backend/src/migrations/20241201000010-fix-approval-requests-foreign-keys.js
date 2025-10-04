'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    // First, drop the existing foreign key constraints
    await queryInterface.removeConstraint('approval_requests', 'approval_requests_submittedById_fkey');
    await queryInterface.removeConstraint('approval_requests', 'approval_requests_reviewedById_fkey');
    
    // Change the column types to UUID
    await queryInterface.changeColumn('approval_requests', 'submittedById', {
      type: Sequelize.UUID,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    });
    
    await queryInterface.changeColumn('approval_requests', 'reviewedById', {
      type: Sequelize.UUID,
      allowNull: true,
      references: {
        model: 'users',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    });
  },

  async down(queryInterface, Sequelize) {
    // Revert back to INTEGER
    await queryInterface.removeConstraint('approval_requests', 'approval_requests_submittedById_fkey');
    await queryInterface.removeConstraint('approval_requests', 'approval_requests_reviewedById_fkey');
    
    await queryInterface.changeColumn('approval_requests', 'submittedById', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    });
    
    await queryInterface.changeColumn('approval_requests', 'reviewedById', {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'users',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    });
  }
};
