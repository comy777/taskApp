import React, {createContext} from 'react';
import {LessonsStateProps} from '../interfaces/lesson';
import useReducerLessons from '../hooks/useReducerLessons';
import {MainStateProps} from '../interfaces/main';
import useReducerMain from '../hooks/useReducerMain';
import {TaskStateProps} from '../interfaces/task';
import useReducerTask from '../hooks/useReducerTask';

export const MainContext = createContext({} as MainStateProps);

export const LessonsContext = createContext({} as LessonsStateProps);

export const TaskContext = createContext({} as TaskStateProps);

export const MainProvider = ({children}: any) => {
  const {mainState, setLoading, setDateTimeVisible, setFabVisible} =
    useReducerMain();
  const {
    lessonsState,
    saveLessons,
    setSchedlue,
    deleteSchedlue,
    setDay,
    restoreSchedule,
    saveLesson,
    deleteLessonStorage,
    saveSchedule,
    editLessonStorage,
  } = useReducerLessons();
  const {taskState, setScheduleTask} = useReducerTask();
  return (
    <MainContext.Provider
      value={{...mainState, setLoading, setDateTimeVisible, setFabVisible}}>
      <LessonsContext.Provider
        value={{
          ...lessonsState,
          saveLessons,
          setSchedlue,
          deleteSchedlue,
          setDay,
          restoreSchedule,
          saveLesson,
          deleteLessonStorage,
          saveSchedule,
          editLessonStorage,
        }}>
        <TaskContext.Provider value={{...taskState, setScheduleTask}}>
          {children}
        </TaskContext.Provider>
      </LessonsContext.Provider>
    </MainContext.Provider>
  );
};
