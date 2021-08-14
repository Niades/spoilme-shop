import 'typeface-roboto';
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@emotion/react';
import { Provider as I18nProvider } from "./i18n/context";
import './assets/styles/global.css';
import App from './App';
import MikuruTheme from './themes/mikuru';
import { initGA } from "./analytics";

if(window.location.host === "spoilme.shop") {
  initGA();
}

ReactDOM.render(
  <React.StrictMode>
    <I18nProvider>
      <ThemeProvider theme={MikuruTheme}>
        <App />
      </ThemeProvider>
    </I18nProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
