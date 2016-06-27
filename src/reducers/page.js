export function pageReducer(state = {}, action) {
  let index = 0;
  switch (action.type) {
    case 'PAGE_UP':
      index = action.index - 1 < 0 ? action.index : action.index - 1;
      return {
        ...state,
        index: index,
        direction: 'up'
      };
    case 'PAGE_DOWN':
      index = action.index + 1 == action.total? action.index : action.index + 1;
      return {
        ...state,
        index: index,
        direction: 'down'
      };
    default:
      return {
        ...state
      };
  }
}
