export function show(car_name) {
  return {
    type: 'CUSTOMER_DIALOG_SHOW',
    car_name: car_name
  };
}

export function dismiss() {
  return {
    type: 'CUSTOMER_DIALOG_DISMISS'
  };
}
