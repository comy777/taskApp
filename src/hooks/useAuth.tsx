import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {UserAuth} from '../interfaces/auth';
import useForm from './useForm';
import {validateFormLogin, validateFormRegister} from '../utils/validateForm';
import {login, register, getUser, editUser} from '../api/request';
import {saveTokenStorage, getTokenStorage} from '../utils/storage';
import useContextAuth from './useContextAuth';
import {showToast} from '../utils/showToast';
import {saveImage} from '../utils/images';
import {deleteImageCloudinary} from '../utils/imagesDelete';

const useAuth = () => {
  const {
    setToken,
    setLoading,
    setDarkTheme,
    darkTheme,
    setUser,
    setEditable,
    base64,
    setBase64,
    user,
    imageUser,
    setImageUser,
    editable,
  } = useContextAuth();

  const getToken = async () => {
    const token = await getTokenStorage();
    if (!token) return;
    const user = await getUser();
    if (!user) return;
    setUser(user);
    setToken(token);
  };

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
    const userData = await getUser();
    if (!userData) return;
    setUser(userData);
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
    const userData = await getUser();
    if (!userData) return;
    setUser(userData);
  };

  const handleEditable = async (username: string) => {
    if (editable) {
      setLoading();
      let imageSave = imageUser;
      if (base64 !== '') {
        if (imageUser.includes('https://')) {
          await deleteImageCloudinary(imageUser);
        }
        const resp = await saveImage(base64);
        if (!resp) return;
        imageSave = resp;
        setBase64('');
      }
      if (!user) return;
      const {image} = user;
      if (image !== imageUser) {
        if (image !== '') {
          await deleteImageCloudinary(image);
        }
      }
      const userSave = await editUser(username, imageSave);
      setLoading();
      if (!userSave) return;
      setImageUser('');
      setUser(userSave);
    }
    setEditable();
  };

  const handleImage = async (data: string) => {
    if (data === 'galery') {
      const resp = await launchImageLibrary({
        mediaType: 'photo',
        includeBase64: true,
      });
      if (resp.didCancel) {
        showToast('Cancelado');
      }
      if (!resp.assets) return;
      return resp.assets[0];
    }
    const resp = await launchCamera({
      mediaType: 'photo',
      includeBase64: true,
    });
    if (resp.didCancel) {
      showToast('Cancelado');
    }
    if (!resp.assets) return;
    return resp.assets[0];
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
    darkTheme,
    getToken,
    handleEditable,
    handleImage,
    setDarkTheme,
  };
};

export default useAuth;
