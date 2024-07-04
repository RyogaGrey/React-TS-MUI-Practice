import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Глобальные стили
import App from './app/index';
import reportWebVitals from './reportWebVitals'; // Производительность
import './i18n'; // Интернационализация

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals(); // Отправка метрик
