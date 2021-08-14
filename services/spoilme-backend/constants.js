const PROD = process.env.NODE_ENV === "production" && !process.env.STAGING;
const FB_COLLECTIONS = {
  PRODUCTS: !PROD ? "products-test" : "products",
  USERS: !PROD ? "users-test" : "users",
};

module.exports = {
  PROD,
  FB_COLLECTIONS,
};