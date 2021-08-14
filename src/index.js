import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import './styles/index.scss';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import api from './services/api';
import reducer from './store/slice';
import {fetchRates} from './store/slice';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api))));

store.dispatch(fetchRates());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
