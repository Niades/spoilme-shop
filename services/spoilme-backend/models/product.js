'use strict';
const {
  Model
} = require('sequelize');

const SCRAPED_AT_DEFAULT = "01-01-2000";

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      Product.belongsTo(models.User);
    }
  };
  Product.init({
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
      allowNull: true,
    },
    scrapedPrice: {
      type: DataTypes.DECIMAL,
      allowNull: true,
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
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};