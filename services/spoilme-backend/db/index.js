const db = require("../models");

const log = require("../util/log").createLogger("db");

async function init() {
  log("Initializing database module")
  try {
    await db.sequelize.authenticate();
    log("Success")
  } catch(error) {
    console.error("Unable to connect to the database", error);
  }
};

init();

module.exports = db;