import { combineReducers } from 'redux';
import { routerReducer, routerMiddleware, push } from 'react-router-redux';

import * as customerDialogReducers from './customer_dialog';
import * as customerReducers from './customer';
import * as alertReducers from './alert';
import * as pageReducers from './page';
import * as brandReducers from './brand';
import * as brandSearchDialogReducers from './brand_search_dialog';

export default combineReducers({
  ...customerDialogReducers,
	...customerReducers,
	...alertReducers,
	...pageReducers,
  ...brandSearchDialogReducers,
  ...brandReducers,
  routing: routerReducer
});
