export function alertReducer(state = {}, action) {
  switch (action.type) {
    case 'ALERT_SHOW':
      return {
        ...state,
        title: action.title,
        content: action.content,
        open: true
      };
    case 'ALERT_DISMISS':
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
