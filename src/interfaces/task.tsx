export interface TaskStateProps {
  schedule: Schedule | null;
  setScheduleTask: (schedule: Schedule) => void;
}

export interface TaskState {
  schedule: Schedule | null;
}

export type TaskActions = {type: 'set schedule'; payload: {schedule: Schedule}};

export const taskInitialState: TaskState = {
  schedule: null,
};

export interface Schedule {
  day: string;
  hour: string;
}
