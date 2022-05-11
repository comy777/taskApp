import {useReducer} from 'react';
import {notesReducer} from '../reducers/notesReducer';
import {notesInitialState} from '../interfaces/notes';
import {Note} from '../interfaces/response';

const useReducerNotes = () => {
  const [state, dispatch] = useReducer(notesReducer, notesInitialState);

  const saveNotesStorage = (notes: Note[]) =>
    dispatch({type: 'save notes storage', payload: {notes}});
  const saveNoteStorage = (note: Note) =>
    dispatch({type: 'save note storage', payload: {note}});
  const deleteNoteStorage = (id: string) =>
    dispatch({type: 'delete note storage', payload: {id}});
  const editNoteStorage = (note: Note, id: string) =>
    dispatch({type: 'edit note storage', payload: {note, id}});

  return {
    notesState: state,
    saveNotesStorage,
    saveNoteStorage,
    deleteNoteStorage,
    editNoteStorage,
  };
};

export default useReducerNotes;
