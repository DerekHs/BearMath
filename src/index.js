import './index.css';
import React from 'react';
import App from './components/App';
import { render } from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'

import { createLogger } from 'redux-logger'
import Immutable from 'immutable'

const logger = createLogger({
  stateTransformer: (state) => {
    let newState = {};

    for (var i of Object.keys(state)) {
      if (Immutable.Iterable.isIterable(state[i])) {
        newState[i] = state[i].toJS();
      } else {
        newState[i] = state[i];
      }
    };

    return newState;
  }
});

const store = createStore(
  rootReducer, 
  applyMiddleware(logger)
)

render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  )