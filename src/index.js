import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';


import App from './App';

import "normalize.css"
import "./assets/css/index.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Suspense>
    <HashRouter>
      <App />
    </HashRouter>
  </Suspense>
  // </React.StrictMode>
);

