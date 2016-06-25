import Customer from './../models/customer';

const createComplete = (json = {}) => {
  return {
    type: 'CUSTOMER_CREATE',
    customer: json
  };
};

const indexComplete = (json = {}) => {
  return {
    type: 'CUSTOMER_INDEX',
    customers: json,
    total: json.headers.get('Total')
  };
};

export const index = (params) => {
  return (dispatch) => {
    Customer.index(params, (json) => {
      dispatch(indexComplete(json));
    });
  };
};

export const create = (customer) => {
  return (dispatch) => {
    Customer.create(customer, (json) => {
      dispatch(createComplete(json));
    });
  };
};
