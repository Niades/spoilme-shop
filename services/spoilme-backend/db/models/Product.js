const { DataTypes } = require("sequelize");
const db = require("../connection");

const SCRAPED_AT_DEFAULT = '2010-04-20 00:00';

const Product = db.define('Product', {
  source: {
    type: DataTypes.STRING,
    allowNull: false,
  },
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
  },
  scrapedAt: {
    type: DataTypes.DATE,
    defaultValue: new Date(SCRAPED_AT_DEFAULT)
  }
});

module.exports = Product;