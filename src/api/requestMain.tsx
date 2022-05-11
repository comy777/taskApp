import {apiTask} from './config';
import {LessonResponse, SaveLesson} from '../interfaces/lesson';
import {
  DeleteLessonResponse,
  SaveLessonResponse,
  EditLessonResponse,
  UriImage,
} from '../interfaces/response';
import {showToast} from '../utils/showToast';
import {ImagePicker} from '../interfaces/main';
import axios from 'axios';
import {TaskStorage} from '../interfaces/task';
import {NoteSave} from '../interfaces/notes';

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

export const saveImages = async (
  images: ImagePicker[],
  setImages: (images: UriImage[], task: TaskStorage) => void,
  task: TaskStorage,
) => {
  const urlCloudinary =
    'https://api.cloudinary.com/v1_1/djtqfpw2e/image/upload';
  try {
    let data: UriImage[] = [];
    let contador = 0;
    images.map((item, i) => {
      (async () => {
        const {base64} = item;
        let base64Img = `data:image/jpg;base64,${base64}`;
        const dataImage = {file: base64Img, upload_preset: 'instaclone'};
        const resp = await axios.post(`${urlCloudinary}`, dataImage);
        data[contador] = {uri: resp.data.secure_url};
        contador++;
        if (contador === images.length) {
          setImages(data, task);
        }
      })();
    });
  } catch (error) {
    console.log(error);
  }
};

export const saveImagesNote = async (
  images: ImagePicker[],
  setImages: (
    images: UriImage[],
    note: NoteSave,
    imagesNoSubir?: UriImage[],
  ) => void,
  note: NoteSave,
  imagesNoSubir?: UriImage[],
) => {
  const urlCloudinary =
    'https://api.cloudinary.com/v1_1/djtqfpw2e/image/upload';
  try {
    let data: UriImage[] = [];
    let contador = 0;
    images.map((item, i) => {
      (async () => {
        const {base64} = item;
        let base64Img = `data:image/jpg;base64,${base64}`;
        const dataImage = {file: base64Img, upload_preset: 'instaclone'};
        const resp = await axios.post(`${urlCloudinary}`, dataImage);
        data[contador] = {uri: resp.data.secure_url};
        contador++;
        if (contador === images.length) {
          setImages(data, note, imagesNoSubir);
        }
      })();
    });
  } catch (error) {
    console.log(error);
  }
};
