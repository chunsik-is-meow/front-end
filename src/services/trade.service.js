import axios from 'axios';

const API_URL = 'http://localhost:4000';

const GetCurrnetMeow = (name) => {
  return axios
    .post(API_URL + '/api/chaincode/query', {
      channel_name: 'trade',
      chaincode_name: 'trade',
      params: ['GetCurrentMeow', name]
    })
    .then((response) => {
      return JSON.stringify(response.data);
    });
};


export default {
  GetCurrnetMeow
};
