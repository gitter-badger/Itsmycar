import * as Brand from './../models/brand';
import * as alertActions from './alert';

const indexComplete = (data = {}, total) => {
  return {
    type: 'BRAND_INDEX',
    brands: data,
    total: total
  };
};

export const index = (params = {}) => {
  return (dispatch) => {
    Brand.index(params, (data, total) => {
      dispatch(indexComplete(data, total));
    });
  };
};
