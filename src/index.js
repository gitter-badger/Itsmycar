import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import { configureStore } from './store.js';
var store = configureStore();

import { syncHistoryWithStore } from 'react-router-redux';
const history = syncHistoryWithStore(browserHistory, store);

import App from './App';
import './styles/index.scss';
import ScrollPage from './containers/ScrollPage';

console.log('如果你对Ruby on Rails、EcmaScript、React-Native、Swift有所了解，欢迎加入我们\n请将简历发送至evelyn@itsmycar.cn，在邮件名中注明console招聘');

render(
  (
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={ScrollPage} />
        </Route>
      </Router>
    </Provider>
  ),
  document.getElementById('container')
);
