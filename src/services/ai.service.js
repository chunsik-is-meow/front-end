import axios from 'axios';
import AIData from '../components/DataDump/AIData';
import authHeader from './auth-header';

// data 3개 임포트
const API_URL = 'http://localhost:4000';

const GetAIData = () => {
  // const isData = await axios.post(API_URL + 'data', {
  // }).then((response) => {

  // });

  return AIData;
};


const GetAllModelCount = async () => {
  return axios
    .post(API_URL + '/api/chaincode/model', {
      channel_name: 'ai-model',
      chaincode_name: 'ai-model',
      params: ['GetAllAIModelCount']
    },
    {
      headers: authHeader()
    })
    .then((response) => {
      return JSON.stringify(response.data.count);
    });
};

const GetUserBuyModelCount = async (name) => {
  /* return axios
    .post(API_URL + '/api/chaincode/query', {
      channel_name: 'trade',
      chaincode_name: 'trade',
      params: ['GetUserBuyModelCount', name]
    },
    {
      headers: authHeader()
    })
    .then((response) => {
      return JSON.stringify(response.data.count);
    }); */
  return 0;
};

export default {
  GetAIData,
  GetAllModelCount,
  GetUserBuyModelCount
};