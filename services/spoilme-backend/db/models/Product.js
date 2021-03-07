const { DataTypes } = require("sequelize");
const db = require("../connection");

const SCRAPED_AT_DEFAULT = '2010-04-20 00:00';

const Product = db.define('Product', {
  source: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  name_RU: {
    type: DataTypes.STRING,
    allowNull: true
  },
  name_EN: {
    type: DataTypes.STRING,
    allowNull: true
  },
  description_RU: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  description_EN: {
    type: DataTypes.STRING,
    allowNull: true
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  scrapedPrice: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  displayPrice: {
    type: DataTypes.DECIMAL,
    allowNull: true,
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