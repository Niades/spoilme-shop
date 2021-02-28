import { Currencies, DEFAULT_CURRENCY, DEFAULT_LOCALE } from "./index";

const ruRUBNumberFormat = new Intl.NumberFormat("ru-RU", { style: 'currency', currency: 'RUB' });
const enUSDNumberFormat = new Intl.NumberFormat("en-US", { style: 'currency', currency: 'USD' })

function price(
  value: number, 
  lang: string = DEFAULT_LOCALE, 
  currency: Currencies = DEFAULT_CURRENCY
): string|undefined {
  if(lang === "en") {
    if(currency === Currencies.USD) {
      return enUSDNumberFormat.format(value);
    } else {
      console.error("No formatter for", currency);
    }
  } else if(lang === "ru") {
    if(currency === Currencies.RUB) {
      return ruRUBNumberFormat.format(value);
    } else {
      console.error("No formatter for", currency)
    }
  }
};

export {
  price,
};