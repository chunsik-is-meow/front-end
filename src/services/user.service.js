import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:4000/api/test/';

const getPublicContent = () => {
  return axios.get(API_URL + 'all');
};

const getUserBoard = () => {
  return axios.get(API_URL + 'user', {headers: authHeader()});
};

const getVerifierBoard = () => {
  return axios.get(API_URL + 'verifier', {headers: authHeader()});
};

const getAdminBoard = () => {
  return axios.get(API_URL + 'admin', {headers: authHeader()});
};

export default {
  getPublicContent,
  getUserBoard,
  getVerifierBoard,
  getAdminBoard
};
