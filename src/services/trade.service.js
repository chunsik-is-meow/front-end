import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:4000';

const GetCurrnetMeow = async (name) => {
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

const GetTransactionData = async (name) => {
  return axios
    .post(API_URL + '/api/chaincode/query', {
      channel_name: 'trade',
      chaincode_name: 'trade',
      params: ['GetQueryHistory', name]
    },
    {
      headers: authHeader()
    })
    .then((response) => {
      return response.data;
    });
};

// TODO
const GetTransactionCount = async (name) => {
  /* return axios
    .post(API_URL + '/api/chaincode/query', {
      channel_name: 'trade',
      chaincode_name: 'trade',
      params: ['GetTransactionCount', name]
    },
    {
      headers: authHeader()
    })
    .then((response) => {
      return JSON.stringify(response.data.count);
    }); */
  return 10;
};


export default {
  GetCurrnetMeow,
  GetTransactionCount,
  GetTransactionData
};
