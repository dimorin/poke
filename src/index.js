import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import Poke from './service/poke';

const poke = new Poke();

ReactDOM.render(
  <React.StrictMode>
    <App poke={poke} />
  </React.StrictMode>,
  document.getElementById('root')
);
