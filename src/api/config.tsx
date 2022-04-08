import axios from 'axios';
import {getTokenStorage} from '../utils/storage';

const baseURL = 'http://192.168.100.16:4000';

export const apiTask = axios.create({baseURL});

apiTask.interceptors.request.use(async config => {
  const token = await getTokenStorage();
  if (token) {
    //config.headers['x-token'] = token;
    config.headers['authorization'] = token;
  }
  return config;
});
