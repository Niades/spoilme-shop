const { Sequelize } = require("sequelize");
const { DB_CONNECTION_STRING } = require("../constants");

const sequelize = new Sequelize(DB_CONNECTION_STRING, {
  logging: false,
});

module.exports = sequelize;