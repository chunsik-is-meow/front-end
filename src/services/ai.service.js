import axios from 'axios';
import AIData from '../components/DataDump/AIData';

// data 3개 임포트
const API_URL = 'http://localhost:4000/';

const GetAIData = () => {
  // const isData = await axios.post(API_URL + 'data', {
  // }).then((response) => {

  // });

  return AIData;
};


export default {
  GetAIData
};
