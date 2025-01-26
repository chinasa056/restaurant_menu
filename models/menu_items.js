

const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require("../sequelize");

class menu_items extends Model {}

menu_items.init(
  {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
    },
    name: {
      type: DataTypes.STRING,
      allowNull:false
    },
    Description: {
      type: DataTypes.STRING,
      allowNull:false
    },
    StoreEmail: {
      type: DataTypes.STRING,
      unique:true,
      allowNull:false
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull:false
    },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'menu_items', 
    tableName:"menu_items",
    timestamps:true
  },
);
module.exports = menu_items