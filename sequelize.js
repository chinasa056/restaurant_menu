const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('sql12759428', 'sql12759428', 'jys97Y8nhl', {
    host: 'sql12.freesqldatabase.com',
    dialect: "mysql"
  });

  module.exports = sequelize