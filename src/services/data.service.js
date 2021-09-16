import axios from 'axios';
import authHeader from './auth-header';

// data 3개 임포트
const API_URL = 'http://localhost:4000';

const GetData = async () => {
  return axios
  // TODO chage to alldata
    .post(API_URL + '/api/chaincode/alldata', {},
      {
        headers: authHeader()
      })
    .then((response) => {
      return response.data;
    });
};


const GetAllDataCount = async () => {
  return axios
    .post(API_URL + '/api/chaincode/query', {
      channel_name: 'data',
      chaincode_name: 'data',
      params: ['GetCommonDataCount', 'DC']
    },
    {
      headers: authHeader()
    })
    .then((response) => {
      return JSON.stringify(response.data.count);
    });
};

const GetUserBuyDataCount = async (name) => {
  return axios
    .post(API_URL + '/api/chaincode/query', {
      channel_name: 'data',
      chaincode_name: 'data',
      params: ['GetCommonDataCount', name]
    },
    {
      headers: authHeader()
    })
    .then((response) => {
      return JSON.stringify(response.data.count);
    });
};

const DownloadData = async (filename) => {
  return axios
    .get(API_URL + '/api/download/data/' + filename,
      {
        headers: authHeader()
      })
    .then((response) => {
      return response.data;
    });
};

export default {
  GetData,
  GetAllDataCount,
  GetUserBuyDataCount,
  DownloadData
};
