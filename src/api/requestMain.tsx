import {apiTask} from './config';
import {LessonResponse, SaveLesson, Lesson} from '../interfaces/lesson';
import {
  DeleteLessonResponse,
  SaveLessonResponse,
  EditLessonResponse,
} from '../interfaces/response';
import {showToast} from '../utils/showToast';

export const getLessons = async () => {
  const resp = await apiTask.get<LessonResponse>('/lessons');
  if (!resp.data) return;
  const {lessons} = resp.data;
  return lessons;
};

export const saveLessonTask = async (lessonSave: SaveLesson) => {
  const resp = await apiTask.post<SaveLessonResponse>('/lessons', lessonSave);
  if (resp.data.error) {
    showToast(resp.data.error);
    return;
  }
  const {lesson} = resp.data;
  showToast('Clase guardada');
  return lesson;
};

export const deleteLesson = async (id: string) => {
  const resp = await apiTask.delete<DeleteLessonResponse>(`/lessons/${id}`);
  if (resp.data.error) {
    showToast(resp.data.error);
    return false;
  }
  if (!resp.data.msg) return false;
  showToast(resp.data.msg);
  return true;
};

export const editLesson = async (id: string, lesson: SaveLesson) => {
  const resp = await apiTask.put<EditLessonResponse>(`/lessons/${id}`, lesson);
  if (resp.data.error) {
    showToast(resp.data.error);
    return false;
  }
  const {lesson: clase} = resp.data;
  showToast('Clase editada');
  return clase;
};
