import {useContext} from 'react';
import {
  deleteLesson,
  getLessons,
  saveLessonTask,
  editLesson,
} from '../api/requestMain';
import {LessonsContext, MainContext} from '../context/MainContext';
import {SaveLesson} from '../interfaces/lesson';
import useForm from './useForm';

const useLessons = () => {
  const {
    saveLessons,
    lessons,
    restoreSchedule,
    saveLesson,
    deleteLessonStorage,
    editLessonStorage,
  } = useContext(LessonsContext);
  const {setLoading, loading} = useContext(MainContext);
  const {reset, clase, teacher, nrc, handleChange, resetFormValues} = useForm({
    clase: '',
    teacher: '',
    nrc: '',
  });
  const getLessonsApi = async () => {
    setLoading();
    const lessons = await getLessons();
    setLoading();
    if (!lessons) return;
    saveLessons(lessons);
  };
  const saveLessonApi = async (lesson: SaveLesson) => {
    setLoading();
    const {schedlue} = lesson;
    const data = schedlue.map(i => {
      delete i._id;
      return i;
    });
    const lessonSave = lesson;
    lesson.schedlue = data;
    const resp = await saveLessonTask(lessonSave);
    setLoading();
    if (!resp) return;
    saveLesson(resp);
    restoreSchedule();
    reset();
  };
  const deleteLessonApi = async (id: string) => {
    setLoading();
    const resp = await deleteLesson(id);
    if (!resp) return;
    deleteLessonStorage(id);
    setLoading();
    return true;
  };
  const editLessonApi = async (id: string, lesson: SaveLesson) => {
    setLoading();
    const resp = await editLesson(id, lesson);
    setLoading();
    if (!resp) return;
    editLessonStorage(resp);
    restoreSchedule();
    reset();
    return true;
  };
  return {
    lessons,
    loading,
    saveLessonApi,
    clase,
    teacher,
    nrc,
    handleChange,
    deleteLessonApi,
    getLessonsApi,
    resetFormValues,
    editLessonApi,
  };
};

export default useLessons;
