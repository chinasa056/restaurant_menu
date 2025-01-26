'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('menu_Items', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        allowNull:false
      },
      name: {
        type: Sequelize.STRING,
        allowNull:false
      },
      Description: {
        type: Sequelize.STRING,
        allowNull:false
      },
      StoreEmail: {
        type: Sequelize.STRING,
        unique:true,
        allowNull:false
      },
      price: {
        type: Sequelize.DECIMAL,
        allowNull:false
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
    await queryInterface.dropTable('Menu_Items');
  }
};