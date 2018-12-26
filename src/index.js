import 'bulma/css/bulma.css'

import React from 'react';
import { render } from 'react-dom'

import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from 'reducers'

import { createEpicMiddleware } from 'redux-observable';
import { rootEpic } from 'epics'

import { createLogger } from 'redux-logger'
import Immutable from 'immutable'

import App from 'App';

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

const epicMiddleware = createEpicMiddleware();

const store = createStore(
  rootReducer,
  applyMiddleware(epicMiddleware, logger)
)

epicMiddleware.run(rootEpic);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)