const fs = require("fs");
const path = require("path");
const connection = require("./connection");
// Models
require("./models");

const RESET_DB_ON_START = true;

async function loadFixtures(conn) {
  const fixtureFiles = (fs.readdirSync(path.join(__dirname, "./fixtures")));
  for(const fixtureFile of fixtureFiles) {
    const fixtures = JSON.parse(fs.readFileSync(path.join(__dirname, "./fixtures", fixtureFile)));
    for(const fixture of fixtures) {
      const model = conn.models[fixture.table];
      for(const row of fixture.rows) {
        await model.create(row);
      }
    }
    console.log("Fixture", fixtureFile, "loaded")
  }
}

async function init() {
  console.log("Initializing database module")
  try {
    await connection.authenticate();
    await connection.sync({ force: RESET_DB_ON_START });
    if(RESET_DB_ON_START) {
      await loadFixtures(connection);
    }
    console.log("Success")
  } catch(error) {
    console.error("Unable to connect to the database", error);
  }
};

init();

module.exports = connection;