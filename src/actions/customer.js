import * as Customer from './../models/customer';
import * as alertActions from './alert';
import * as dialogActions from './dialog';

const createComplete = (data = {}) => {
  return {
    type: 'CUSTOMER_CREATE',
    customer: data
  };
};

const indexComplete = (data = {}, total) => {
  return {
    type: 'CUSTOMER_INDEX',
    customers: data,
    total: total
  };
};

export const index = (params = {}) => {
  return (dispatch) => {
    Customer.index(params, (data, total) => {
      dispatch(indexComplete(data, total));
    });
  };
};

export const create = (customer) => {
  return (dispatch) => {
    Customer.create(customer,
      (data) => {
        dispatch(alertActions.show('', `您好，${data.name}，我们的专业顾问将会全程为您服务`));
      },
      (error) => {
        console.log(error);
        dispatch(alertActions.show('', '发生了一些小问题，请检查您输入的信息是否正确'));
      }
    );
  };
};
