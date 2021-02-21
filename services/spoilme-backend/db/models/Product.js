const { DataTypes } = require("sequelize");
const db = require("../connection");

const Product = db.define('Product', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  instock: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  }
});

module.exports = Product;