import { combineReducers } from 'redux';
import { routerReducer, routerMiddleware, push } from 'react-router-redux';

import * as dialogReducers from './dialog';
import * as customerReducers from './customer';
import * as alertReducers from './alert';
import * as pageReducers from './page';

export default combineReducers({
  ...dialogReducers,
	...customerReducers,
	...alertReducers,
	...pageReducers,
  routing: routerReducer
});
