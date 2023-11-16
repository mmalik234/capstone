// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Only if you have a CSS file to include
import App from './App';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);