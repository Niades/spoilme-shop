const Product = require("./Product");
const User = require("./User");

User.hasMany(Product);

module.exports = {
  User,
  Product,
};