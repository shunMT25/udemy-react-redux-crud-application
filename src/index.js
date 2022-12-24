import React from 'react';
import ReactDOM from 'react-dom/client';
import { legacy_createStore } from 'redux'
import { Provider } from 'react-redux'


import './index.css';
import reducer from './reducers'
import App from './components/App';
import Bpp from './components/Bpp';
import reportWebVitals from './reportWebVitals';

const store = legacy_createStore(reducer)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <Bpp />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
