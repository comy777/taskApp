import {LessonsState, LessonsActions} from '../interfaces/lesson';
import {shedule} from '../utils/shedule';

export const lessonsReducer = (
  state: LessonsState,
  action: LessonsActions,
): LessonsState => {
  switch (action.type) {
    case 'save lessons':
      return {
        ...state,
        lessons: action.payload.lessons,
      };
    case 'save schedule':
      return {
        ...state,
        schedlue: action.payload.schedule,
      };
    case 'set schedlue':
      return {
        ...state,
        schedlue: [...state.schedlue, action.payload.schedlue],
      };
    case 'delete shedlue':
      return {
        ...state,
        schedlue: state.schedlue.filter(
          item => item.day !== action.payload.schedule.day,
        ),
      };
    case 'set day':
      return {
        ...state,
        day: action.payload.day,
      };
    case 'restore schedule':
      return {
        ...state,
        day: '',
        schedlue: [],
      };
    case 'save lesson':
      return {
        ...state,
        lessons: [...state.lessons, action.payload.lesson],
      };
    case 'delete lesson storage':
      return {
        ...state,
        lessons: state.lessons.filter(i => i._id !== action.payload.id),
      };
    case 'edit lesson storage':
      return {
        ...state,
        lessons: state.lessons.map(i =>
          i === action.payload.lesson ? i : action.payload.lesson,
        ),
      };
    case 'set id lesson':
      return {
        ...state,
        idLesson: action.payload.id,
      };
    default:
      return state;
  }
};
