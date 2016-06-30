export function brandReducer(state = {}, action) {
  switch (action.type) {
    case 'BRAND_INDEX':
      console.log(action.brands);
      return {
        ...state,
        brands: action.brands,
        total: action.total
      };
    default:
      return state;
  }
}
