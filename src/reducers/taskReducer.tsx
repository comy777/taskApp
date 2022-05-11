import {TaskState, TaskActions} from '../interfaces/task';

export const taskReducer = (
  state: TaskState,
  action: TaskActions,
): TaskState => {
  switch (action.type) {
    case 'set schedule task':
      return {
        ...state,
        scheduleTask: action.payload.scheduleTask,
      };
    case 'restore schedule task':
      return {
        ...state,
        scheduleTask: null,
      };
    case 'set tasks':
      return {
        ...state,
        tasks: action.payload.tasks,
      };
    case 'save task storage':
      return {
        ...state,
        tasks: [...state.tasks, action.payload.task],
      };
    case 'edit task storage':
      return {
        ...state,
        tasks: state.tasks.map(i =>
          i._id === action.payload.task._id ? action.payload.task : i,
        ),
      };
    case 'delete task storage':
      return {
        ...state,
        tasks: state.tasks.filter(i => i._id !== action.payload.id),
      };
    case 'set upload':
      return {
        ...state,
        upload: state.upload === 'no upload' ? 'upload' : 'no upload',
      };
    case 'complete task storage':
      return {
        ...state,
        tasks: state.tasks.map(i => {
          if (i._id === action.payload.id) {
            i.complete = !i.complete;
          }
          return i;
        }),
      };
    default:
      return state;
  }
};
