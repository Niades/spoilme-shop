const puppeteer = require("puppeteer-extra");
const StealthPlugin = require("puppeteer-extra-plugin-stealth");
const { SOURCES } = require("./sources");

const log = require("../util/log").createLogger("scraping-scraping");

puppeteer.use(StealthPlugin());

const MAX_RETRIES = 5;

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

class Scraper {
  browser;
  launchPromise;
  useragent;

  constructor() {
    this.launchPromise = puppeteer.launch({
      executablePath: process.env.CHROME_BIN || null,
      headless: true,
    });
    this.launchPromise.then((browser) => this.browser = browser);
  }

  async scrapeOzon(url, retries=0) {
    if(retries > MAX_RETRIES) {
      return undefined;
    }
    await sleep(5000);
    try {
      await this.launchPromise;
      log("scraping ozon url: ", url);
      const page = await this.browser.newPage();
      await page.goto(url);
      const ldJsonElem = await page.$("[type='application/ld+json']");
      if(ldJsonElem !== null) {
        const ldJson = await page.evaluate(el => el.textContent, ldJsonElem);
        const productJson = JSON.parse(ldJson);
        return {
          source: SOURCES.OZON,
          name: productJson["name"].trim(),
          description: productJson["description"].trim(),
          image: productJson["image"],
          price: parseFloat(productJson["offers"]["price"]),
          instock: (productJson["offers"]["availability"] == "http://schema.org/InStock")
        };
      } else {
        const bodyHTML = await page.evaluate(() => document.body.innerHTML);
        log(bodyHTML);
        throw "Could not find ld-json element on the page";
      }
    } catch(err) {
      log("[ERROR] failed to scrape the url.");
      log("[ERROR] ", err);
      log("[ERROR] retrying with new identity...");
      return await this.scrapeOzon(url, retries + 1);
    }
  }
}

const ScraperSingleton = new Scraper();

async function scrapeFromSource(source) {
  if(/ozon.ru/.test(source)) {
    return await ScraperSingleton.scrapeOzon(source);
  } else {
    console.error("No appropriate scraper found for", source);
    return;
  }
};

module.exports = {
  scrapeFromSource,
  ScraperSingleton,
};
