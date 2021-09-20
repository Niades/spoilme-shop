import React, { ReactNode, useState } from "react";
import { IntlProvider } from "react-intl";
import { MESSAGES, DETECTED_LOCALE, DEFAULT_CURRENCY, Currencies } from "./index";


const LOCALE_LS_KEY = 'locale_ls_afg8934f';

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

function persistLocale(locale: string) {
  localStorage.setItem(LOCALE_LS_KEY, locale);
};

function readPersistedLocale(): string|null {
  return localStorage.getItem(LOCALE_LS_KEY);
}

const Provider = (props: ProviderProps) => {
  function selectLanguage(newLocale: string) {
      persistLocale(newLocale);
      setLocale(newLocale);
      setMessages(MESSAGES[newLocale]);
      if(newLocale === "en") {
        setCurrency(Currencies.USD);
      } else {
        setCurrency(Currencies.RUB);
      }
  };
  const persistedLocale = readPersistedLocale();
  const [locale, setLocale] = useState(persistedLocale === null ? DETECTED_LOCALE : persistedLocale);
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