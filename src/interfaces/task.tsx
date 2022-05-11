import {Task, UriImage} from './response';

export interface TaskStateProps {
  scheduleTask: ScheduleTask | null;
  tasks: Task[];
  upload: 'upload' | 'no upload';
  setScheduleTask: (scheduleTask: ScheduleTask) => void;
  setTasks: (tasks: Task[]) => void;
  saveTaskStorage: (task: Task) => void;
  restoreScheduleTask: () => void;
  editTaskStorage: (task: Task) => void;
  deleteTaskStorage: (id: string) => void;
  setUpload: () => void;
  completeTaskStorage: (id: string) => void;
}

export interface TaskState {
  scheduleTask: ScheduleTask | null;
  tasks: Task[];
  upload: 'upload' | 'no upload';
}

export type TaskActions =
  | {type: 'set schedule task'; payload: {scheduleTask: ScheduleTask}}
  | {type: 'set tasks'; payload: {tasks: Task[]}}
  | {type: 'save task storage'; payload: {task: Task}}
  | {type: 'restore schedule task'}
  | {type: 'edit task storage'; payload: {task: Task}}
  | {type: 'delete task storage'; payload: {id: string}}
  | {type: 'set upload'}
  | {type: 'complete task storage'; payload: {id: string}};

export const taskInitialState: TaskState = {
  scheduleTask: null,
  tasks: [],
  upload: 'no upload',
};

export interface ScheduleTask {
  day: string;
  hour: string;
}

export interface TaskStorage {
  title: string;
  body: string;
  dayLimit?: string;
  images?: UriImage[];
}
