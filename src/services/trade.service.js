import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:4000';

const GetCurrnetMeow = (name) => {
  return axios
    .post(API_URL + '/api/chaincode/query', {
      channel_name: 'trade',
      chaincode_name: 'trade',
      params: ['GetCurrentMeow', name]
    },
    {
      headers: authHeader()
    })
    .then((response) => {
      return JSON.stringify(response.data.amount);
    });
};


export default {
  GetCurrnetMeow
};
