import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import { configureStore } from './store.js';
var store = configureStore();

import { syncHistoryWithStore } from 'react-router-redux';
const history = syncHistoryWithStore(browserHistory, store);

import Index from './containers/Index';
import '../sass/index.scss';
import Jumbotron from './containers/Jumbotron';

render(
  (
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={Index}>
        </Route>
      </Router>
    </Provider>
  ),
  document.getElementById('container')
);
