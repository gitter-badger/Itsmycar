export function dialogReducer (state = {}, action) {
  switch (action.type) {
    case 'SHOW_DIALOG':
      return {
        ...state,
        open: true
      };
    case 'DISMISS_DIALOG':
      return {
        ...state,
        open: false
      };
    default:
      return state;
  }
}
