const PROD = process.env.NODE_ENV === "production";
let DB_CONNECTION_STRING;
if(PROD) {
  DB_CONNECTION_STRING = "postgres://postgres:postgres@db:5432/spoilme";
} else {
  DB_CONNECTION_STRING = "sqlite:db.sqlite3";
}
const FB_COLLECTIONS = {
  PRODUCTS: !PROD ? "products-test" : "products",
  USERS: !PROD ? "users-test" : "users",
};

module.exports = {
  PROD,
  FB_COLLECTIONS,
  DB_CONNECTION_STRING,
};