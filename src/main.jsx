import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.scss';

import App from './App.jsx';

const rootSelector = document.getElementById('root');
const root = ReactDOM.createRoot(rootSelector);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
