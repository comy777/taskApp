import {UserAuth} from '../interfaces/auth';
import {showToast} from './showToast';
import {ScheduleTask} from '../interfaces/task';
import moment, {MomentInput} from 'moment';

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

export const validateSchedule = (
  item: ScheduleTask | null,
  setFabVisible: () => void,
) => {
  if (!item) {
    showToast('Es necesario un horario');
    setFabVisible();
    return false;
  }
  return true;
};

export const transformDate = (schedule: MomentInput) => {
  const day = moment(schedule).format('YYYY/MM/DD');
  const hour = moment(schedule).format('h:mm:ss a');
  const data = {day, hour};
  return data;
};
