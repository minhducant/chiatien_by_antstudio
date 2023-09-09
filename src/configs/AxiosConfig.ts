import axios from 'axios';

import {onLogout} from '../utils/Logout';
import {MAIN_DOMAIN} from './ApiUrl';
import {showMessage, getStorage} from '@utils/index';

export const client = axios.create({
  baseURL: MAIN_DOMAIN,
  timeout: 3000000,
});

client.interceptors.request.use(
  async function (config) {
    const accessToken = await getStorage('accessToken');
    config.headers.Authorization = '';
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  function (error) {
    showMessage.fail(error);
  },
);

client.interceptors.response.use(
  async function (response) {
    if (response.data?.code !== 200) {
      if (response.data?.info.message === 'Unauthorized') {
        onLogout();
        showMessage.warning('Phiên đăng nhập thất bại');
        return {
          state: false,
          data: null,
          mess: '',
        };
      }
    }
    return {...response}.data;
  },
  async function (error) {
    console.log('Khuê', JSON.stringify(error, null, 2));
    // let {name, message} = error;
    // if (name === 'AxiosError' && message === 'Network Error') {
    //   message = '';
    // }
    // if (error.code === 'ERR_BAD_REQUEST') {
    //   showToast({message: JSON.stringify(error.message)});
    // }
    // if (error) {
    //   if (error.response.status >= 500) {
    //     message = '';
    //   }
    //   if (error.status >= 400) {
    //     showToast({message: JSON.stringify(error.message)});
    //   }
    // } else if (error?.message.startsWith('timeout of')) {
    //   message = '';
    // }
    return {status: error.status, code: error.code, data: []};
  },
);
