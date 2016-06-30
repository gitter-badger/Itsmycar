import 'whatwg-fetch';
import URLSearchParams from 'url-search-params';
import Const from './../const';

let total = 0;

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    var error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
};

function parseJSON(response) {
  total = response.headers.get('Total');
  return response.json();
};

export function index(params, success = (data, total) => {}, fail = (error) => {}) {
  const baseURL = Const.BASE_URL + Const.VERSION;
  let url = new URL(Const.VERSION + '/brands', baseURL);
  if (url.searchParams == undefined) url.searchParams = new URLSearchParams;
  Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
  fetch(url.href, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(checkStatus)
    .then(parseJSON)
    .then(function(data) {
      success(data, total);
    }).catch(function(error) {
      fail(error);
    });
}
