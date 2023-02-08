import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import axios from 'axios';
import { store } from './redux/store';
import App from './App';

axios.defaults.baseURL = 'http://localhost:3001';
axios.defaults.withCredentials = true;

// axios.defaults.baseURL = process.env.REACT_APP_URL;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
