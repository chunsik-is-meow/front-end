import axios from 'axios';
import authHeader from './auth-header';

// data 3개 임포트
const API_URL = 'http://localhost:4000';

const GetAIData = async () => {
  return axios
    .post(API_URL + '/api/chaincode/allmodel', {},
      {
        headers: authHeader()
      })
    .then((response) => {
      return response.data;
    });
};


const GetAllModelCount = async () => {
  return axios
    .post(API_URL + '/api/chaincode/model', {
      channel_name: 'ai-model',
      chaincode_name: 'ai-model',
      params: ['GetAIModelCount', 'AC']
    },
    {
      headers: authHeader()
    })
    .then((response) => {
      return JSON.stringify(response.data.count);
    });
};

const GetUserBuyModelCount = async (name) => {
  return axios
    .post(API_URL + '/api/chaincode/model', {
      channel_name: 'ai-model',
      chaincode_name: 'ai-model',
      params: ['GetAIModelCount', name]
    },
    {
      headers: authHeader()
    })
    .then((response) => {
      return JSON.stringify(response.data.count);
    });
};

const DownloadModel = async (filename, username, uploader, version) => {
  return axios
    .post(API_URL + '/api/download/model/' + filename, {
      downloader: username,
      uploader: uploader,
      version: version
    },
    {
      headers: authHeader()
    })
    .then((response) => {
      return response.data;
    });
};

const UploadModle = async (params) => {
  return axios
    .post(API_URL + '/api/upload/model', {
      params: ['PutAIModel', ...params]
    },
    {
      headers: authHeader()
    })
    .then((response) => {
      return response;
    });
};

export default {
  GetAIData,
  GetAllModelCount,
  GetUserBuyModelCount,
  DownloadModel,
  UploadModle
};
