import 'whatwg-fetch';
import URLSearchParams from 'url-search-params';
import Const from './../const';

export default new class Customer {
  checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    } else {
      var error = new Error(response.statusText);
      error.response = response;
      throw error;
    }
  };

  parseJSON(response) {
    console.log(response.headers.values());
    return response.json();
  };

  index(params, callback = (data, total) => {}) {
    const baseURL = Const.BASE_URL + Const.VERSION;
    let url = new URL(Const.VERSION + '/customers', baseURL);
    if (url.searchParams == undefined) url.searchParams = new URLSearchParams;
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
    fetch(url.href, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      }).then((response) => this.checkStatus(response))
      .then((response) => this.parseJSON(response))
      .then(function(data) {
        callback(data);
      }).catch(function(error) {
        console.log('request failed', error);
      });
  }
  create(customer, callback = (json) => {}) {
    fetch(Const.BASE_URL + Const.VERSION + '/customers', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(customer)
    }).then((response) => this.checkStatus(response))
    .then((response) => this.parseJSON(response))
    .then(function(data) {
      callback(data);
    }).catch(function(error) {
      console.log('request failed', error);
    });
  }
};
