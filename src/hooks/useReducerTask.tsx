import {useReducer} from 'react';
import {Task} from '../interfaces/response';
import {taskInitialState, ScheduleTask, TaskStorage} from '../interfaces/task';
import {taskReducer} from '../reducers/taskReducer';

const useReducerTask = () => {
  const [state, dispatch] = useReducer(taskReducer, taskInitialState);
  const setScheduleTask = (scheduleTask: ScheduleTask) =>
    dispatch({type: 'set schedule task', payload: {scheduleTask}});
  const setTasks = (tasks: Task[]) =>
    dispatch({type: 'set tasks', payload: {tasks}});
  const saveTaskStorage = (task: Task) =>
    dispatch({type: 'save task storage', payload: {task}});
  const restoreScheduleTask = () => dispatch({type: 'restore schedule task'});
  const editTaskStorage = (task: Task) =>
    dispatch({type: 'edit task storage', payload: {task}});
  const deleteTaskStorage = (id: string) =>
    dispatch({type: 'delete task storage', payload: {id}});
  const setUpload = () => dispatch({type: 'set upload'});
  const completeTaskStorage = (id: string) =>
    dispatch({type: 'complete task storage', payload: {id}});

  return {
    taskState: state,
    setScheduleTask,
    setTasks,
    saveTaskStorage,
    restoreScheduleTask,
    editTaskStorage,
    deleteTaskStorage,
    setUpload,
    completeTaskStorage,
  };
};

export default useReducerTask;
