import axios from 'axios';
import TransactionData from '../components/Data/TransactionData';

// data 3개 임포트
const API_URL = 'http://localhost:4000/';

const GetTransData = () => {
  // const isData = await axios.post(API_URL + 'data', {
  // }).then((response) => {

  // });

  return TransactionData;
};


export default {
  GetTransData
};
