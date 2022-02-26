import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import Poke from './service/poke';
import { BrowserRouter } from 'react-router-dom';
import AuthService from './service/auth_service';
import FirebaseApp from './service/firebase';
import LoveRepository from './service/love_repository';

const poke = new Poke();
const authService = new AuthService(FirebaseApp);
const loveRepository = new LoveRepository(FirebaseApp);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App poke={poke} authService={authService} loveRepository={loveRepository} />
    </BrowserRouter>    
  </React.StrictMode>,
  document.getElementById('root')
);
