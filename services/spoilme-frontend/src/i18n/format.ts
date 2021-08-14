import { useContext } from "react";
import { Context as I18nContext } from "../i18n/context";
import { ProductPrice } from "../api";
import { Currencies } from "./index";

const ruRUBNumberFormat = new Intl.NumberFormat(
  "ru-RU",
  { style: 'currency', currency: 'RUB' }
);
const enUSDNumberFormat = new Intl.NumberFormat(
  "en-US",
  { style: 'currency', currency: 'USD' }
);

function useFormatPrice() {
  const { currency } = useContext(I18nContext);
  return function(price: ProductPrice) {
    if(currency === Currencies.USD) {
      return enUSDNumberFormat.format(price.usd);
    } else if(currency === Currencies.RUB) {
      return ruRUBNumberFormat.format(price.rub);
    } else {
      console.error("No formatter for", currency)
    }
  }
}

export {
  useFormatPrice,
};