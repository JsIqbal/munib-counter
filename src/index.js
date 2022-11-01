import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './modules/core/components/App.component.js';

import('bootstrap/dist/css/bootstrap.min.css');

const div = document.getElementById('root');
const root = ReactDOM.createRoot(div);

root.render(
    <App />
);
