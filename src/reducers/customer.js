export function customerReducer (state = {}, action) {
  switch (action.type) {
    case 'CUSTOMER_CREATE':
      return {
        ...state,
        customer: action.customer
      };
    case 'CUSTOMER_INDEX':
    console.log(action.total);
      return {
        ...state,
        customers: action.customers,
        total: action.total
      };
    default:
      return state;
  }
}
