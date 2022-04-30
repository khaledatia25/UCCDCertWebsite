import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { startSetUsers } from './actions/users';
import configureStore from './store/configureStore';
import AppRouter from './routers/AppRouter';
import 'purecss/build/pure.css';
import './style/certificate.css'
import {v4 as uuid } from 'uuid';
console.log(uuid());
const store = configureStore(); 
const root = ReactDOM.createRoot(document.getElementById('root'));
const jsx = (
  <Provider store={store}>
    <AppRouter />  
  </Provider>
);


store.dispatch(startSetUsers());

root.render(jsx);


