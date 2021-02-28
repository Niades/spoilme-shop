import messages_ru from "../translations/ru.json";


enum Currencies {
  USD,
  RUB
};

const SUPPORTED_LOCALES = ["ru", "en"];
const DEFAULT_LOCALE = "en";
const MESSAGES: Record<string, object> = {
  "ru": messages_ru,
};
const browserLanguage: string = navigator.language.split(/[-_]/)[0];
let activeLocale = DEFAULT_LOCALE;
if(SUPPORTED_LOCALES.indexOf(browserLanguage) !== -1) {
  activeLocale = browserLanguage;
}
const DEFAULT_CURRENCY = Currencies.USD;
const REACT_INTL_CONFIG: {locale: string, messages: any} = {
  locale: activeLocale,
  messages: MESSAGES[activeLocale],
};

export {
  DEFAULT_CURRENCY,
  DEFAULT_LOCALE,
  REACT_INTL_CONFIG,
  Currencies,
};