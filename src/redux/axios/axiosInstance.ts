import axios from 'axios';

const instance = axios.create({
  withCredentials: true
});
instance.defaults.headers.post['Content-Type'] = 'application/json';
instance.defaults.headers['Accept'] = 'application/json';
instance.defaults.timeout = 60000;

// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const storedData = localStorage.getItem('persist:userInfo');
    const accessToken = JSON.parse(storedData!).token;

    if (accessToken) {
      config.headers.Authorization = JSON.parse(accessToken);
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);


export { instance };