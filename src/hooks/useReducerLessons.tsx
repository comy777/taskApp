import {useReducer} from 'react';
import {lessonsInitialState, Lesson, Schedlue} from '../interfaces/lesson';
import {lessonsReducer} from '../reducers/lessonsReducer';

const useReducerLessons = () => {
  const [state, dispatch] = useReducer(lessonsReducer, lessonsInitialState);
  const saveLessons = (lessons: Lesson[]) =>
    dispatch({type: 'save lessons', payload: {lessons}});
  const saveSchedule = (schedule: Schedlue[]) =>
    dispatch({type: 'save schedule', payload: {schedule}});
  const setSchedlue = (schedlue: Schedlue) =>
    dispatch({type: 'set schedlue', payload: {schedlue}});
  const deleteSchedlue = (schedule: Schedlue) =>
    dispatch({type: 'delete shedlue', payload: {schedule}});
  const setDay = (day: string) => dispatch({type: 'set day', payload: {day}});
  const restoreSchedule = () => dispatch({type: 'restore schedule'});
  const saveLesson = (lesson: Lesson) =>
    dispatch({type: 'save lesson', payload: {lesson}});
  const deleteLessonStorage = (id: string) =>
    dispatch({type: 'delete lesson storage', payload: {id}});
  const editLessonStorage = (lesson: Lesson) =>
    dispatch({type: 'edit lesson storage', payload: {lesson}});
  const setIdLesson = (id: string) =>
    dispatch({type: 'set id lesson', payload: {id}});

  return {
    lessonsState: state,
    saveLessons,
    setSchedlue,
    deleteSchedlue,
    setDay,
    restoreSchedule,
    saveLesson,
    deleteLessonStorage,
    saveSchedule,
    editLessonStorage,
    setIdLesson,
  };
};

export default useReducerLessons;
