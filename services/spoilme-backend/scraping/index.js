const { Product } = require("../db/models");
const { scrapeFromSource } = require("./scraping");
const { processScrapedValues } = require("./processing");

const log = require("../util/log").createLogger("scraping-index");

const SCRAPED_TTL_MINUTES = 60;

function isExpired(scrapedAt) {
  let expiresAt = new Date(scrapedAt);
  expiresAt.setMinutes(expiresAt.getMinutes() + SCRAPED_TTL_MINUTES);
  const now = new Date();
  return expiresAt <= now;
}

async function refreshAllProducts() {
  log("refreshAllProducts started");
  const allProducts = await Product.findAll();
  //const allProducts = [await Product.findOne()];
  log("products count: %s", allProducts.length);
  for(const product of allProducts) {
    if(isExpired(product.scrapedAt)) {
      log("product id=", product.id, " expired at ", product.scrapedAt, ", scraping...");
      const newScrapedAt = new Date();
      const freshValues = await scrapeFromSource(product.source);
      const processedValues = await processScrapedValues(freshValues);
      product.name = processedValues.name;
      product.description = processedValues.description;
      product.price = processedValues.price;
      product.image = processedValues.image;
      product.instock = processedValues.instock;
      product.scrapedAt = newScrapedAt;
      await product.save();
      log("product id=", product.id, "scraped!");
    } else {
      log("product id=", product.id, " not expired yet");
    }
  };
};

module.exports = {
  refreshAllProducts,
};