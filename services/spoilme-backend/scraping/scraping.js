const puppeteer = require("puppeteer"); 

const log = require("../util/log").createLogger("scraping-scraping");

const USER_AGENT = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36';
const MAX_RETRIES = 5;

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

class Scraper {
  browser;
  launchPromise;

  constructor() {
    this.launchPromise = puppeteer.launch({
      executablePath: process.env.CHROME_BIN || null,
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
      ignoreHTTPSErrors: true,
    });
    this.launchPromise.then((browser) => this.browser = browser);
  }

  async scrapeOzon(url, retries=0) {
    if(retries > MAX_RETRIES) {
      return undefined;
    }
    sleep(3000);
    try {
      await this.launchPromise;
      log("scraping ozon url: ", url);
      const page = await this.browser.newPage();
      await page.setUserAgent(USER_AGENT);
      await page.goto(url);
      const ldJsonElem = await page.$("[type='application/ld+json']");
      const ldJson = await page.evaluate(el => el.textContent, ldJsonElem);
      const productJson = JSON.parse(ldJson);
      return {
        name: productJson["name"].trim(),
        description: productJson["description"].trim(),
        image: productJson["image"],
        price: parseFloat(productJson["offers"]["price"]),
        instock: (productJson["offers"]["availability"] == "http://schema.org/InStock")
      };
    } catch(err) {
      log("[ERROR] failed to scrape the url.");
      log("[ERROR] ", err);
      log("[ERROR] retrying...");
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
