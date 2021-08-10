const got = require("got");

const API_ENDPOINT = "https://api.exchangeratesapi.io/latest";
const RATES_TTL_MINUTES = 5;

let updatedAt = new Date('1990-01-01');
let rates = {};

function isExpired(updatedAt) {
  let expiresAt = new Date(updatedAt);
  expiresAt.setMinutes(expiresAt.getMinutes() + RATES_TTL_MINUTES);
  const now = new Date();
  return expiresAt <= now;
}

async function refreshRates() {
  rates = await got(API_ENDPOINT).json();
  updatedAt = new Date();
}

async function convertRubToUsd(rub) {
  if(isExpired(updatedAt)) {
    await refreshRates();
  }
  const inEuros = (rub / rates.rates.RUB);
  const inUsd = inEuros * rates.rates.USD;
  return inUsd;
}

const USD_TO_RUB = 75;

function convertRubToUsdDumb(rub) {
  return rub / USD_TO_RUB;
}

module.exports = {
  convertRubToUsd,
  convertRubToUsdDumb,
};