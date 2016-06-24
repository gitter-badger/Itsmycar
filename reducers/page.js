export function pageReducer (state = {}, action) {
  switch (action.type) {
    case 'PAGE_DOWN':
      return {
        ...state
      };
    default:
      return state;
  }
}
