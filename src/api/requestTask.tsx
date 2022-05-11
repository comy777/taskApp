import {apiTask} from './config';
import {
  TaskResponse,
  TaskResponseApi,
  ResponseTask,
} from '../interfaces/response';
import {showToast} from '../utils/showToast';
import {TaskStorage} from '../interfaces/task';

export const getTask = async (id: string) => {
  const resp = await apiTask.get<TaskResponse>(`/tasks/${id}`);
  if (resp.data.error) {
    showToast(resp.data.error);
    return false;
  }
  const {tasks} = resp.data;
  return tasks;
};

export const saveTask = async (task: TaskStorage, id: string) => {
  const resp = await apiTask.post<TaskResponseApi>(`/tasks/${id}`, task);
  if (resp.data.error) {
    showToast(resp.data.error);
    return false;
  }
  showToast('Tarea guardada exitosamente!!!');
  return resp.data;
};

export const editTask = async (taskSave: TaskStorage, id: string) => {
  const resp = await apiTask.put<TaskResponseApi>(`/tasks/${id}`, taskSave);
  if (resp.data.error) {
    showToast(resp.data.error);
    return false;
  }
  const {task} = resp.data;
  showToast('Tarea editada exitosamente!!!');
  return task;
};

export const deleteTask = async (id: string) => {
  const resp = await apiTask.delete<ResponseTask>(`/tasks/${id}`);
  if (resp.data.error) {
    showToast(resp.data.error);
    return false;
  }
  if (!resp.data.msg) return false;
  showToast(resp.data.msg);
  return true;
};

export const completeTask = async (id: string) => {
  const resp = await apiTask.put<ResponseTask>(`/tasks/complete/${id}`);
  if (resp.data.error) {
    showToast(resp.data.error);
    return false;
  }
  if (!resp.data.msg) return false;
  showToast(resp.data.msg);
  return true;
};
