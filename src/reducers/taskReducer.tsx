import {TaskState, TaskActions} from '../interfaces/task';

export const taskReducer = (
  state: TaskState,
  action: TaskActions,
): TaskState => {
  switch (action.type) {
    case 'set schedule':
      return {
        ...state,
        schedule: action.payload.schedule,
      };
    default:
      return state;
  }
};
