import axios from 'axios';
import PublicData from '../components/DataDump/PublicData';

// data 3개 임포트
const API_URL = 'http://localhost:4000/';

const GetData = () => {
  // const isData = await axios.post(API_URL + 'data', {
  // }).then((response) => {

  // });

  return PublicData;
};


export default {
  GetData
};
