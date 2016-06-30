export function customerDialogReducer(state = {}, action) {
  switch (action.type) {
    case 'CUSTOMER_DIALOG_SHOW':
      return {
        ...state,
        open: true,
        car_name: action.car_name
      };
    case 'CUSTOMER_DIALOG_DISMISS':
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
