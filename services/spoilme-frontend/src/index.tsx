import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/global.css';
import App from './App';
import { ThemeProvider } from '@emotion/react';
import reportWebVitals from './reportWebVitals';
import MikuruTheme from './themes/mikuru';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={MikuruTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
