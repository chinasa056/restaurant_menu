const { UUID } = require("sequelize");
const {v4:uuidv4} = require("uuid")

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Orders', [
      {
        id:uuidv4(),
        menuId: "7a85e619-7702-48ba-9f44-b5bff419a82f",
        orderName: 'Rice',
        quantity: 2,
        total: 200,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Orders', null, {});
  },
};