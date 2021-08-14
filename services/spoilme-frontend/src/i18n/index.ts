// @ts-ignore
import messages_ru from "../translations/ru.yaml";
// @ts-ignore
import messages_en from "../translations/en.yaml";


enum Currencies {
  USD,
  RUB
};

const SUPPORTED_LOCALES = ["ru", "en"];
const DEFAULT_LOCALE = "en";
const MESSAGES: Record<string, Record<string, string>> = {
  "ru": messages_ru,
  "en": messages_en,
};
const browserLanguage: string = navigator.language.split(/[-_]/)[0];
let DETECTED_LOCALE = DEFAULT_LOCALE;
if(SUPPORTED_LOCALES.indexOf(browserLanguage) !== -1) {
  DETECTED_LOCALE = browserLanguage;
}
const DEFAULT_CURRENCY = Currencies.USD;

export {
  DEFAULT_CURRENCY,
  DEFAULT_LOCALE,
  DETECTED_LOCALE,
  MESSAGES,
  Currencies,
};