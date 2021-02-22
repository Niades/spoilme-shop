const { Translate } = require('@google-cloud/translate').v2;

const PROJECT_ID = "midyear-courage-305613";
const API_KEY = "AIzaSyCcLtt1yEKFYuxkdZcGZyfyDa81hdzAuKw";
const translate = new Translate({ projectId: PROJECT_ID, key: API_KEY });

async function translateToEn(text) {
  const target = "en";
  const [translation] = await translate.translate(text, target);
  return translation;
};

module.exports = {
  translateToEn,
};