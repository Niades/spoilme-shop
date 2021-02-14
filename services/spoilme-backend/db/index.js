const fs = require("fs");
const path = require("path");
const connection = require("./connection");
// Models
require("./models/User");

async function loadFixtures(conn) {
  const fixtureFiles = (fs.readdirSync(path.join(__dirname, "./fixtures")));
  fixtureFiles.forEach(async (fixtureFile) => {
    const fixture = JSON.parse(fs.readFileSync(path.join(__dirname, "./fixtures", fixtureFile)));
    const model = conn.models[fixture.table];
    fixture.rows.forEach(async (row) => {
      await model.create(row);
    });
    console.log("Fixture", fixtureFile, "loaded")
  });
}

async function init() {
  console.log("Initializing database module")
  try {
    await connection.authenticate();
    await connection.sync({ force: true });
    await loadFixtures(connection);
    console.log("Success")
  } catch(error) {
    console.error("Unable to connect to the database", error);
  }
};

init();

module.exports = connection;