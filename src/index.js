import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger'; 
import { Provider } from 'react-redux';
import * as reducers from './reducers';

const store = createStore(
  combineReducers(reducers),
  applyMiddleware(logger),
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
