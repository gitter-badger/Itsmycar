import * as brandActions from './brand';

export function showComplete() {
  return {
    type: 'BRAND_SEARCH_DIALOG_SHOW'
  };
}

export function show() {
  return(dispatch) => {
    dispatch(brandActions.index());
    dispatch(showComplete());
  };
}

export function dismiss() {
  return {
    type: 'BRAND_SEARCH_DIALOG_DISMISS'
  };
}
