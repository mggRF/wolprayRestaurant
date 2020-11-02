import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppMenu from './AppMenu';
import AppCarta from './AppCarta';
import reportWebVitals from './reportWebVitals';

const targetMenu = document.getElementById('WPWR_menu');
const targetCarta = document.getElementById('WPWR_carta');
console.log("Empezamos");
console.log(targetMenu);
if (targetMenu) {
  ReactDOM.render(
    <React.StrictMode>
      <AppMenu />
    </React.StrictMode>,
    targetMenu
  );
}
if (targetCarta) {
  ReactDOM.render(
    <React.StrictMode>
      <AppCarta />
    </React.StrictMode>,
    targetCarta
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
