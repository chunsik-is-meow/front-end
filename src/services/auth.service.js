import axios from 'axios';

const API_URL = 'http://localhost:4000/api/auth/';

const register = (username, email, password, phone, account) => {
  return axios.post(API_URL + 'signup', {
    username,
    email,
    password,
    phone,
    account
  });
};

const login = async (username, password) => {
  return axios
    .post(API_URL + 'signin', {
      username,
      password
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem('user', JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem('user');
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('user'));
};

const isValidToken = () => {
  // token 유무
  // 토큰이 있다면, 만료시간은 안지났는지
  // 해당 토큰의 권한이 올바른지
  if (getCurrentUser()) {
    return true;
  } else {
    return false;
  }
};

export default {
  register,
  login,
  logout,
  getCurrentUser,
  isValidToken
};
