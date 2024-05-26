import React from 'react';
import ReactDOM from 'react-dom/client';

import './src/assets/index.scss';
import App from './src/components/App.jsx';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { setupStore } from './src/store';

const store = setupStore();

const rootSelector = document.getElementById('root');
const root = ReactDOM.createRoot(rootSelector);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
