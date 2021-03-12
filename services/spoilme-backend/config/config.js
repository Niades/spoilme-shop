const path = require("path");

const config = {
  "development": {
    "url": "sqlite://" + path.resolve(__dirname, "../db.sqlite3"),
    "seederStorage": "sequelize",
  },
  "production": {
    "url": "postgres://postgres:postgres@db:5432/spoilme",
    "seederStorage": "sequelize",
  }
};

module.exports = config;
