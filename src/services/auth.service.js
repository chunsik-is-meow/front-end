import axios from 'axios';

const API_URL = 'http://localhost:4000/api/auth/';

const register = (username, email, password) => {
  return axios.post(API_URL + 'signup', {
    username,
    email,
    password
  });
};

const login = (username, password) => {
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

// const login = async (id, password) => {
//   const isLogin = await axios.post(API_URL + 'login', {
//     id,
//     password
//   }).then((response) => {
//     if (response.data.token) {
//       setToken(response.data.token);
//       return true;
//     }
//     return false;
//   });

//   return isLogin;
// };

// const logout = () => {
//   localStorage.removeItem('auth_token');
// };

// const getToken = () => {
//   return localStorage.getItem('auth_token');
// };

// const setToken = async (token) => {
//   localStorage.setItem('auth_token', token);
// };

// const getCurrentUser = () => {
//   const token = getToken();
//   if (token) {
//     const base64Payload = token.split('.')[1];
//     const jsonPayload = JSON.parse(atob(base64Payload));

//     return jsonPayload.userId;
//   }
//   return '';
// };

// const isValidToken = () => {
//   // token 유무
//   // 토큰이 있다면, 만료시간은 안지났는지
//   // 해당 토큰의 권한이 올바른지
//   return true;
// };

// export default {
//   login,
//   logout,
//   getToken,
//   getCurrentUser,
//   isValidToken
// };
