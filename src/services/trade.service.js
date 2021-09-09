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

const GetAllDataCount = () => {
  return axios
    .post(API_URL + '/api/chaincode/query', {
      channel_name: 'trade',
      chaincode_name: 'trade',
      params: ['GetAllDataCount']
    },
    {
      headers: authHeader()
    })
    .then((response) => {
      return JSON.stringify(response.data.amount);
    });
};


const GetAllModelCount = () => {
  return axios
    .post(API_URL + '/api/chaincode/query', {
      channel_name: 'trade',
      chaincode_name: 'trade',
      params: ['GetAllModelCount']
    },
    {
      headers: authHeader()
    })
    .then((response) => {
      return JSON.stringify(response.data.amount);
    });
};

const GetUserBuyDataCount = (name) => {
  return axios
    .post(API_URL + '/api/chaincode/query', {
      channel_name: 'trade',
      chaincode_name: 'trade',
      params: ['GetUserBuyDataCount', name]
    },
    {
      headers: authHeader()
    })
    .then((response) => {
      return JSON.stringify(response.data.amount);
    });
};

const GetUserBuyModelCount = (name) => {
  return axios
    .post(API_URL + '/api/chaincode/query', {
      channel_name: 'trade',
      chaincode_name: 'trade',
      params: ['GetUserBuyModelCount', name]
    },
    {
      headers: authHeader()
    })
    .then((response) => {
      return JSON.stringify(response.data.amount);
    });
};

const GetTransactionCount = (name) => {
  return axios
    .post(API_URL + '/api/chaincode/query', {
      channel_name: 'trade',
      chaincode_name: 'trade',
      params: ['GetTransactionCount', name]
    },
    {
      headers: authHeader()
    })
    .then((response) => {
      return JSON.stringify(response.data.amount);
    });
};


export default {
  GetCurrnetMeow,
  GetAllDataCount,
  GetAllModelCount,
  GetUserBuyDataCount,
  GetUserBuyModelCount,
  GetTransactionCount
};
