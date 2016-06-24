import { combineReducers } from 'redux';
import { routerReducer, routerMiddleware, push } from 'react-router-redux';

import * as pageReducers from './page';
import * as dialogReducers from './dialog';

export default combineReducers({
	...pageReducers,
  ...dialogReducers,
  routing: routerReducer
});
