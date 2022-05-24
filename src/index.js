import React from 'react';
import ReactDOM from 'react-dom';
import './font.css';
import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import { store } from './redux/slice';
import reportWebVitals from './reportWebVitals';

require('dotenv').config();

ReactDOM.render(
  <Provider store={store}>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </Provider>,
  // eslint-disable-next-line comma-dangle
  document.getElementById('root')
);

reportWebVitals();
