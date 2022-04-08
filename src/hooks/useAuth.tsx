import {useEffect} from 'react';
import {UserAuth} from '../interfaces/auth';
import useForm from './useForm';
import {validateFormLogin, validateFormRegister} from '../utils/validateForm';
import {login, register} from '../api/request';
import {saveTokenStorage, getTokenStorage} from '../utils/storage';
import useContextAuth from './useContextAuth';

const useAuth = () => {
  const {setToken, setLoading, token} = useContextAuth();
  const getToken = async () => {
    const token = await getTokenStorage();
    if (!token) return;
    setToken(token);
  };
  useEffect(() => {
    getToken();
  }, [token]);
  const {email, password, username, repeatPassword, handleChange, reset} =
    useForm({
      email: '',
      password: '',
      username: '',
      repeatPassword: '',
    });
  const loginApi = async (user: UserAuth) => {
    const validate = validateFormLogin(user);
    if (!validate) return;
    setLoading();
    const resp = await login(user);
    setLoading();
    if (!resp) return;
    await saveTokenStorage(resp);
    setToken(resp);
  };
  const registerApi = async (user: UserAuth) => {
    const validate = validateFormRegister(user);
    if (!validate) return;
    setLoading();
    const resp = await register(user);
    setLoading();
    if (!resp) return;
    await saveTokenStorage(resp);
    setToken(resp);
  };
  return {
    email,
    password,
    username,
    repeatPassword,
    handleChange,
    reset,
    loginApi,
    registerApi,
  };
};

export default useAuth;
