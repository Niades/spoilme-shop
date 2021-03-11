const PROD = process.env.NODE_ENV === "production";
let DB_CONNECTION_STRING;
if(PROD) {
  DB_CONNECTION_STRING = "postgres://postgres:postgres@db:5432/spoilme";
} else {
  DB_CONNECTION_STRING = "sqlite:db.sqlite3";
}

module.exports = {
  PROD,
  DB_CONNECTION_STRING,
};