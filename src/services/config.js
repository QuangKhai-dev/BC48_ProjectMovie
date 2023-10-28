import axios from 'axios';

const URL_DOMAIN = 'https://movienew.cybersoft.edu.vn';
const TokenCybersoft =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA0OSIsIkhldEhhblN0cmluZyI6IjI3LzAzLzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcxMTQ5NzYwMDAwMCIsIm5iZiI6MTY4MjYxNDgwMCwiZXhwIjoxNzExNjQ1MjAwfQ.4mCm0hbeazS7xy_3vtlKRk0Embky8sHJG22LuQj7FLc';
const userData = JSON.parse(localStorage.getItem('user'));

// cấu hình axios
// Add a request interceptor
export const https = axios.create();
https.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return {
      ...config,
      headers: {
        TokenCybersoft,
        Authorization: `Bearer ${userData?.accessToken}`,
      },
      // data: {
      //   TokenCybersoft,
      // },
      baseURL: URL_DOMAIN,
    };
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
https.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);
