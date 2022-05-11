import React, {createContext} from 'react';
import {LessonsStateProps} from '../interfaces/lesson';
import useReducerLessons from '../hooks/useReducerLessons';
import {MainStateProps} from '../interfaces/main';
import useReducerMain from '../hooks/useReducerMain';
import {TaskStateProps} from '../interfaces/task';
import useReducerTask from '../hooks/useReducerTask';
import {NotesStateProps} from '../interfaces/notes';
import useReducerNotes from '../hooks/useReducerNotes';

export const MainContext = createContext({} as MainStateProps);

export const LessonsContext = createContext({} as LessonsStateProps);

export const TaskContext = createContext({} as TaskStateProps);

export const NotesContext = createContext({} as NotesStateProps);

export const MainProvider = ({children}: any) => {
  const {
    mainState,
    setLoading,
    setDateTimeVisible,
    setFabVisible,
    setModalVisible,
    restoreActiveModal,
    setImagePicker,
    restoreImagePicker,
    setImageUri,
    deleteImagePicker,
    deleteImagesCloudinary,
    setScreen,
    setActiveModalTask,
    setActiveModalNote,
  } = useReducerMain();

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
    setIdLesson,
  } = useReducerLessons();

  const {
    taskState,
    setScheduleTask,
    setTasks,
    saveTaskStorage,
    restoreScheduleTask,
    editTaskStorage,
    deleteTaskStorage,
    setUpload,
    completeTaskStorage,
  } = useReducerTask();

  const {
    notesState,
    saveNotesStorage,
    saveNoteStorage,
    deleteNoteStorage,
    editNoteStorage,
  } = useReducerNotes();

  return (
    <MainContext.Provider
      value={{
        ...mainState,
        setLoading,
        setDateTimeVisible,
        setFabVisible,
        setModalVisible,
        restoreActiveModal,
        setImagePicker,
        restoreImagePicker,
        setImageUri,
        deleteImagePicker,
        deleteImagesCloudinary,
        setScreen,
        setActiveModalTask,
        setActiveModalNote,
      }}>
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
          setIdLesson,
        }}>
        <TaskContext.Provider
          value={{
            ...taskState,
            setScheduleTask,
            setTasks,
            saveTaskStorage,
            restoreScheduleTask,
            editTaskStorage,
            deleteTaskStorage,
            setUpload,
            completeTaskStorage,
          }}>
          <NotesContext.Provider
            value={{
              ...notesState,
              saveNotesStorage,
              saveNoteStorage,
              deleteNoteStorage,
              editNoteStorage,
            }}>
            {children}
          </NotesContext.Provider>
        </TaskContext.Provider>
      </LessonsContext.Provider>
    </MainContext.Provider>
  );
};
