export function dialogReducer(state = {}, action) {
  switch (action.type) {
    case 'DIALOG_SHOW':
      return {
        ...state,
        open: true
      };
    case 'DIALOG_DISMISS':
      return {
        ...state,
        open: false
      };
    default:
      return {
        ...state,
        open: false
      };
  }
}
