const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require("../sequelize");

class orders extends Model {}

orders.init(
  {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID
    },
    menuId: {
      type: DataTypes.UUID,
      allowNull:false,
      references: {
        model: 'menu_items',
        key: 'id'
      },
    },
    orderName: {
      type: DataTypes.STRING,
      allowNull:false
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull:false
    },
    total: {
      type: Sequelize.DECIMAL,
      allowNull:false
    },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'Orders', 
    tableName: "Orders",
    timestamps:true
  },
);

module.exports = orders