export function brandSearchDialogReducer(state = {}, action) {
  switch (action.type) {
    case 'BRAND_SEARCH_DIALOG_SHOW':
      return {
        ...state,
        open: true
      };
    case 'BRAND_SEARCH_DIALOG_DISMISS':
      return {
        ...state,
        open: false
      };
    default:
      return {
        ...state
      };
  }
}
