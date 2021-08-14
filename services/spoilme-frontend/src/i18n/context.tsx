import React, { ReactNode, useState } from "react";
import { IntlProvider } from "react-intl";
import { MESSAGES, DETECTED_LOCALE, DEFAULT_CURRENCY, Currencies } from "./index";


interface ProviderProps {
  children: ReactNode,
};

interface ContextValue {
  selectLanguage: (newLocale: string) => void,
  currency: Currencies,
};

const Context = React.createContext<ContextValue>({
  selectLanguage: (_) => {},
  currency: DEFAULT_CURRENCY,
});

const Provider = (props: ProviderProps) => {
  function selectLanguage(newLocale: string) {
      setLocale(newLocale);
      setMessages(MESSAGES[newLocale]);
      if(newLocale === "en") {
        setCurrency(Currencies.USD);
      } else {
        setCurrency(Currencies.RUB);
      }
  };
  const [locale, setLocale] = useState(DETECTED_LOCALE);
  const [messages, setMessages] = useState<Record<string, string>>(MESSAGES[locale]);
  const [currency, setCurrency] = useState(DEFAULT_CURRENCY);

  return (
    <Context.Provider value={{selectLanguage, currency}}>
      <IntlProvider messages={messages} locale={locale}>
        {props.children}
      </IntlProvider>
    </Context.Provider>
  );
};

export {
  Provider,
  Context,
};