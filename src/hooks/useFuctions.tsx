import {useContext} from 'react';
import moment from 'moment';
import {MainContext, TaskContext} from '../context/MainContext';
import useReducerTask from './useReducerTask';

const useFuctions = () => {
  const {setDateTimeVisible, setFabVisible} = useContext(MainContext);
  const {setScheduleTask} = useReducerTask();
  const {schedule} = useContext(TaskContext);
  const icons = [
    {
      icon: 'save-outline',
      onPress: () => {},
    },
    {
      icon: 'camera-reverse-outline',
      onPress: () => {},
    },
    {
      icon: 'calendar-outline',
      onPress: () => {
        setDateTimeVisible(), setFabVisible();
      },
    },
  ];
  const handleConfirmDateTask = (e: Date) => {
    setDateTimeVisible();
    const day = moment(e).format('YYYY/MM/DD');
    const hour = moment(e).format('LT');
    setScheduleTask({day, hour});
  };
  const handleCancelDateTask = () => {
    setDateTimeVisible();
  };
  return {
    icons,
    handleConfirmDateTask,
    handleCancelDateTask,
  };
};

export default useFuctions;
