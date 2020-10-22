import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'tachyons/css/tachyons.min.css'

import { Provider } from 'react-redux'
import rootReducer from './reducers/index'
import {createStore, applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

let store = createStore(rootReducer, composeWithDevTools(applyMiddleware()));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
