import {NotesState, NotesActions} from '../interfaces/notes';

export const notesReducer = (
  state: NotesState,
  action: NotesActions,
): NotesState => {
  switch (action.type) {
    case 'save notes storage':
      return {
        ...state,
        notes: action.payload.notes,
      };
    case 'save note storage':
      return {
        ...state,
        notes: [...state.notes, action.payload.note],
      };
    case 'delete note storage':
      return {
        ...state,
        notes: state.notes.filter(i => i._id !== action.payload.id),
      };
    case 'edit note storage':
      return {
        ...state,
        notes: state.notes.map(i =>
          i._id === action.payload.id ? action.payload.note : i,
        ),
      };
    default:
      return state;
  }
};
