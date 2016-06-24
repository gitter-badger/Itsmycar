import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { routerReducer, routerMiddleware, push } from 'react-router-redux';
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';
import reducer from './../reducers/index.js';

export function configureStore(initialState) {
  const router = routerMiddleware(browserHistory);
  const store = createStore(reducer, initialState, compose(
    applyMiddleware(router, thunk),
      window.devToolsExtension ? window.devToolsExtension() : f => f
  ));
  return store;
}
