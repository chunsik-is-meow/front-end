import axios from 'axios';
import PublicData from '../components/DataDump/PublicData';
import authHeader from './auth-header';

// data 3개 임포트
const API_URL = 'http://localhost:4000';

const GetData = () => {
  // const isData = await axios.post(API_URL + 'data', {
  // }).then((response) => {

  // });

  return PublicData;
};


const GetAllDataCount = async () => {
  return axios
    .post(API_URL + '/api/chaincode/query', {
      channel_name: 'data',
      chaincode_name: 'data',
      params: ['GetAllDataCount']
    },
    {
      headers: authHeader()
    })
    .then((response) => {
      return JSON.stringify(response.data.count);
    });
};

// TODO
// get Buy data by user
const GetUserBuyDataCount = async (name) => {
  /* return axios
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
    }); */
  return axios
    .post(API_URL + '/api/chaincode/query', {
      channel_name: 'data',
      chaincode_name: 'data',
      params: ['GetAllDataCount']
    },
    {
      headers: authHeader()
    })
    .then((response) => {
      return JSON.stringify(response.data.count);
    });
};

export default {
  GetData,
  GetAllDataCount,
  GetUserBuyDataCount
};
