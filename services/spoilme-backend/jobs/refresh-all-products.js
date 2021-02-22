const { refreshAllProducts, ScraperSingleton } = require("../scraping");
const log = require("../util/log").createLogger("bree:refresh-all-products");

(async function() {
  log("Started");
  await refreshAllProducts();
  log("Done");
})();