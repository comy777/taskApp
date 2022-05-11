import {Login, UserAuth} from '../interfaces/auth';
import {apiTask} from './config';
import {AuthResponse, UserResponse} from '../interfaces/response';
import {showToast} from '../utils/showToast';
import {deleteTokenStorage} from '../utils/storage';

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

export const getUser = async () => {
  const resp = await apiTask.get<UserResponse>(`/auth/`);
  if (resp.data.error) {
    if (resp.data.error === 'Error del servidor') {
      deleteTokenStorage();
      showToast('Refresh Token');
      return;
    }
    showToast(resp.data.error);
    return false;
  }
  const {user} = resp.data;
  return user;
};

export const editUser = async (username: string, image: string) => {
  const resp = await apiTask.put<UserResponse>(`/auth/`, {username, image});
  if (resp.data.error) {
    showToast(resp.data.error);
    return false;
  }
  const {user} = resp.data;
  return user;
};
