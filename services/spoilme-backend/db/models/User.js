const { DataTypes } = require("sequelize");
const db = require("../connection");

const User = db.define('User', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  profileDescription: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

module.exports = User;