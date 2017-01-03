import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider }from 'react-redux';
import ReduxPromise from 'redux-promise';
import App from './components/App';
import reducers from './reducers';
import './index.css';

const createStroreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStroreWithMiddleware(reducers)} >
  <App />
  </Provider>,
  document.getElementById('root')
);
