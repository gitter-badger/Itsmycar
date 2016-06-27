import * as Customer from './../models/customer';

export const show = (title = {}, content = {}) => {
  return {
    type: 'ALERT_SHOW',
    title: title,
    content: content
  };
};

export const dismiss = (title = {}, content = {}) => {
  return {
    type: 'ALERT_DISMISS'
  };
};
