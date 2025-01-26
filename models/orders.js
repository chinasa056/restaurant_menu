// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Orders extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   Orders.init({
//     menuId: DataTypes.STRING,
//     orderName: DataTypes.STRING,
//     quantity: DataTypes.INTEGER,
//     total: DataTypes.DECIMAL
//   }, {
//     sequelize,
//     modelName: 'Orders',
//   });
//   return Orders;
// };

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

module.exports = Orders