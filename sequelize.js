const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('Restaurant_Menu', 'root', 'Acha105#', {
    host: 'localhost',
    dialect: "mysql"
  });

  module.exports = sequelize