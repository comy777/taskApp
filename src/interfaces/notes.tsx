import {Note, UriImage} from './response';

export interface NotesStateProps {
  notes: Note[];
  saveNotesStorage: (notes: Note[]) => void;
  saveNoteStorage: (note: Note) => void;
  deleteNoteStorage: (id: string) => void;
  editNoteStorage: (note: Note, id: string) => void;
}

export interface NotesState {
  notes: Note[];
}

export type NotesActions =
  | {type: 'save notes storage'; payload: {notes: Note[]}}
  | {type: 'save note storage'; payload: {note: Note}}
  | {type: 'delete note storage'; payload: {id: string}}
  | {type: 'edit note storage'; payload: {note: Note; id: string}};

export const notesInitialState: NotesState = {
  notes: [],
};

export interface NoteSave {
  title: string;
  body: string;
  images?: UriImage[];
}
