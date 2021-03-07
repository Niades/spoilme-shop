const Product = require("./Product");
const User = require("./User");

// Relations
User.hasMany(Product);

module.exports = {
  User,
  Product,
};