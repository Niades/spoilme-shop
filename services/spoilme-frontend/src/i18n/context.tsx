import React, { ReactNode, useState } from "react";
import { IntlProvider } from "react-intl";
import { MESSAGES, DETECTED_LOCALE } from "./index";


interface ProviderProps {
  children: ReactNode,
};

interface ContextValue {
  selectLanguage: (newLocale: string) => void,
};

const Context = React.createContext<ContextValue>({
  selectLanguage: (_) => {},
});

const Provider = (props: ProviderProps) => {
  function selectLanguage(newLocale: string) {
      setLocale(newLocale);
      setMessages(MESSAGES[newLocale]);
  };
  const [locale, setLocale] = useState(DETECTED_LOCALE);
  const [messages, setMessages] = useState<Record<string, string>>(MESSAGES[locale]);

  return (
    <Context.Provider value={{selectLanguage}}>
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