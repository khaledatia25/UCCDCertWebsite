import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import AppRouter from './routers/AppRouter';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './style/style.css';
import './style/certificate.css';
const store = configureStore(); 

const jsx = (
  <Provider store={store}>
    <AppRouter />  
  </Provider>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(jsx);


