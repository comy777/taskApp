import {useReducer} from 'react';
import {taskReducer} from '../reducers/taskReducer';
import {Schedule, taskInitialState} from '../interfaces/task';

const useReducerTask = () => {
  const [state, dispatch] = useReducer(taskReducer, taskInitialState);
  const setScheduleTask = (schedule: Schedule) =>
    dispatch({type: 'set schedule', payload: {schedule}});
  return {
    taskState: state,
    setScheduleTask,
  };
};

export default useReducerTask;
