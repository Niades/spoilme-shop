const path = require("path");
const { SOURCES } = require("./sources");
const { translateToEn } = require("./translation");
const { convertRubToUsd } = require("./currency");
const { saveFromUrlToPublicDir } = require("../util/downloader");

const log = require("../util/log").createLogger("scraping-processing");

function i18nizeValues(values) {
  if(values.source === SOURCES.OZON) {
    values["name_RU"] = values["name"];
    values["description_RU"] = values["description"];
  }
  return values;
}

async function saveImage(values) {
  log("saving image, image=", values["image"]);
  values["image"] = await saveFromUrlToPublicDir(values["image"]);
  log("new image = ", values["image"]);
  return values;
}

async function translateNameAndDesc(values) {
  log("translateNameAndDesc started");
  if(values["name_RU"]) {
    values["name_EN"] = await translateToEn(values["name_RU"]);
    log("name_EN set!");
    log(values["name_EN"]);
  } else {
    log("name_RU is falsy");
    log(values["name_RU"]);
  }
  if(values["description_RU"]) {
    values["description_EN"] = await translateToEn(values["description_RU"]);
  }
  return values;
};

const TAX = 0.06;
const SERVICE_COMISSION_PCNT = 15;
const ACQUIRING_COMISSION_PCNT = 3.5;

function ceilTo(value, to) {
  return (Math.ceil(value / to) * to);
}

async function adaptPrice(values) {
  const inUsd = await convertRubToUsd(values["price"]);
  const pcnt = inUsd / 100;
  const notRoundedTotal = (
    (
      inUsd +
      SERVICE_COMISSION_PCNT * pcnt +
      ACQUIRING_COMISSION_PCNT * pcnt
    ) / (1 - TAX)
  );
  let total;
  if(notRoundedTotal < 500) {
    total = ceilTo(notRoundedTotal, 50);
  } else {
    total = ceilTo(notRoundedTotal, 100);
  }
  values["displayPrice"] = total - 0.01;
  return values;
}

const PROCESSORS = [
  i18nizeValues,
  adaptPrice,
  saveImage,
];

async function processScrapedValues(values) {
  let processedValues = values;
  for(const processor of PROCESSORS) {
    processedValues = await processor(processedValues);
  }
  return processedValues;
}

module.exports = {
  processScrapedValues,
};