'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      source: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      name_EN: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      name_RU: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      description_EN: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      description_RU: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      image: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      scrapedPrice: {
        allowNull: true,
        type: Sequelize.DECIMAL,
      },
      displayPrice: {
        allowNull: true,
        type: Sequelize.DECIMAL
      },
      instock: {
        defaultValue: false,
        type: Sequelize.BOOLEAN,
      },
      scrapedAt: {        
        allowNull: true,
        type: Sequelize.DATE,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Products');
  }
};