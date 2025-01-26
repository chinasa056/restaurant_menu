// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Menu_Items extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   Menu_Items.init({
//     name: DataTypes.STRING,
//     Description: DataTypes.STRING,
//     StoreEmail: DataTypes.STRING,
//     price: DataTypes.DECIMAL
//   }, {
//     sequelize,
//     modelName: 'Menu_Items',
//   });
//   return Menu_Items;
// };

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
    modelName: 'Menu_items', 
    tableName:"Menu_items",
    timestamps:true
  },
);
module.exports = menu_items