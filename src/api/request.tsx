import {Login, UserAuth} from '../interfaces/auth';
import {apiTask} from './config';
import {AuthResponse} from '../interfaces/response';
import {showToast} from '../utils/showToast';

export const auth = async (url: string, user: UserAuth) => {
  const resp = await apiTask.post<AuthResponse>(url, user);
  if (resp.data.error) {
    showToast(resp.data.error);
    return;
  }
  if (!resp.data.token) return;
  const {token} = resp.data;
  return token;
};

export const login = async (user: Login) => {
  return await auth('/auth/', user);
};

export const register = async (user: Login) => {
  return await auth('/auth/register', user);
};
