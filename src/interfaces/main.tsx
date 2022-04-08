import {StackScreenProps} from '@react-navigation/stack';
import {Lesson} from './lesson';
export interface MainStateProps {
  loading: boolean;
  dateTimeVisible: boolean;
  fabVisible: boolean;
  setLoading: () => void;
  setDateTimeVisible: () => void;
  setFabVisible: () => void;
}

export interface MainState {
  loading: boolean;
  dateTimeVisible: boolean;
  fabVisible: boolean;
}

export type MainActions =
  | {type: 'set loading'}
  | {type: 'set date time visible'}
  | {type: 'set fab visible'};

export const mainInitialState: MainState = {
  loading: false,
  dateTimeVisible: false,
  fabVisible: false,
};

export type RootScreenProps = {
  'home stack': undefined;
  lesson: {lesson?: Lesson};
  'task stack': {id: string};
  'note stack': {id: string};
  'details lesson': {lesson: Lesson};
};

export interface DetailsLessonProps
  extends StackScreenProps<RootScreenProps, 'details lesson'> {}

export interface NoteScreenProps
  extends StackScreenProps<RootScreenProps, 'note stack'> {}

export interface TaskScreenProps
  extends StackScreenProps<RootScreenProps, 'task stack'> {}

export interface LessonScreenProps
  extends StackScreenProps<RootScreenProps, 'lesson'> {}
