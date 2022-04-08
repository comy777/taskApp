import {UserAuth} from '../interfaces/auth';
import {showToast} from './showToast';

export const validateFormRegister = (user: UserAuth) => {
  const {password, repeatPassword, email} = user;
  if (!email) {
    showToast('Correo electronico requerido');
    return false;
  }
  if (!repeatPassword) {
    showToast('Contaseña requerida');
    return false;
  }
  if (!password) {
    showToast('Contaseña requerida');
    return false;
  }
  if (password !== repeatPassword) {
    showToast('Las contaseñas no coinciden');
    return false;
  }
  return true;
};

export const validateFormLogin = (user: UserAuth) => {
  const {password, email} = user;
  if (!email) {
    showToast('Correo electronico requerido');
    return false;
  }
  if (!password) {
    showToast('Contaseña requerida');
    return false;
  }
  return true;
};
