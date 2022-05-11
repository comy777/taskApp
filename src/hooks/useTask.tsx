import {useContext} from 'react';
import {
  editTask,
  getTask,
  saveTask,
  deleteTask,
  completeTask,
} from '../api/requestTask';
import {MainContext, TaskContext} from '../context/MainContext';
import {TaskStorage} from '../interfaces/task';
import useForm from './useForm';

const useTask = () => {
  const {setLoading, loading, restoreActiveModal, setModalVisible} =
    useContext(MainContext);

  const {
    setTasks,
    tasks,
    saveTaskStorage,
    restoreScheduleTask,
    completeTaskStorage,
    editTaskStorage,
    deleteTaskStorage,
  } = useContext(TaskContext);

  const {title, body, handleChange, reset, resetFormValues} = useForm({
    title: '',
    body: '',
  });

  const getTaskApi = async (id: string) => {
    setLoading();
    const resp = await getTask(id);
    setLoading();
    if (!resp) return;
    setTasks(resp);
  };

  const saveTaskApi = async (task: TaskStorage, id: string) => {
    setLoading();
    const resp = await saveTask(task, id);
    setLoading();
    if (!resp) return;
    restoreScheduleTask();
    saveTaskStorage(resp.task);
  };

  const editTaskApi = async (task: TaskStorage, id: string) => {
    setLoading();
    const resp = await editTask(task, id);
    setLoading();
    if (!resp) return;
    restoreActiveModal();
    restoreScheduleTask();
    editTaskStorage(resp);
  };

  const deleteTaskApi = async (id: string) => {
    setLoading();
    const resp = await deleteTask(id);
    setLoading();
    if (!resp) return;
    setModalVisible();
    deleteTaskStorage(id);
  };

  const completeTaskApi = async (id: string) => {
    const resp = await completeTask(id);
    if (!resp) return;
    completeTaskStorage(id);
  };

  return {
    tasks,
    loading,
    title,
    body,
    handleChange,
    getTaskApi,
    saveTaskApi,
    editTaskApi,
    deleteTaskApi,
    reset,
    resetFormValues,
    completeTaskApi,
  };
};

export default useTask;
