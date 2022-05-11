import {apiTask} from './config';
import {NoteSave} from '../interfaces/notes';
import {NotesResponse, ResponseTask} from '../interfaces/response';
import {showToast} from '../utils/showToast';

export const getNotes = async (lesson: string) => {
  const resp = await apiTask.get(`/notes/${lesson}`);
  if (!resp.data) return false;
  return resp.data;
};

export const saveNote = async (noteSave: NoteSave, lesson: string) => {
  const resp = await apiTask.post<NotesResponse>(`/notes/${lesson}`, noteSave);
  if (resp.data.error) {
    showToast(resp.data.error);
    return false;
  }
  const {note} = resp.data;
  showToast('Nota guardada');
  return note;
};

export const deleteNote = async (id: string) => {
  const resp = await apiTask.delete<ResponseTask>(`/notes/${id}`);
  if (resp.data.error) {
    showToast(resp.data.error);
    return false;
  }
  if (resp.data.msg) showToast(resp.data.msg);
  return true;
};

export const editNote = async (id: string, noteSave: NoteSave) => {
  const resp = await apiTask.put<NotesResponse>(`/notes/${id}`, noteSave);
  if (resp.data.error) {
    showToast(resp.data.error);
    return false;
  }
  const {note} = resp.data;
  showToast('Nota actualizada');
  return note;
};
