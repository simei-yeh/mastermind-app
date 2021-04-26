const axios = require('axios');

const baseURL = 'https://www.random.org/integers/';

class randomNumberAPI {
  findNewNumbers() {
    return axios.get(baseURL, {
      params: {
        num: 4,
        min: 0,
        max: 7,
        col: 1,
        base: 10,
        format: 'plain',
        rnd: 'new'
      }
    })
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        console.log(data);
        return data.replace(/[\n]/g,'').split('');
      })
      .catch((err) => {
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else if (err.request) {
          console.log(err.request)
        } else {
          console.log('Error', err.message)
        }
      })
  }
}

module.exports = new randomNumberAPI();

const randomAPI = new randomNumberAPI();
randomAPI.findNewNumbers();