import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@emotion/react';
import { IntlProvider } from "react-intl";
import { REACT_INTL_CONFIG } from "./i18n";
import './assets/styles/global.css';
import App from './App';
import MikuruTheme from './themes/mikuru';

ReactDOM.render(
  <React.StrictMode>
    <IntlProvider
      {...REACT_INTL_CONFIG}
    >
      <ThemeProvider theme={MikuruTheme}>
        <App />
      </ThemeProvider>
    </IntlProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
