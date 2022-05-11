import {StackScreenProps} from '@react-navigation/stack';
import {Lesson} from './lesson';
import {Note, Task, UriImage, ActiveModal} from './response';

export interface MainStateProps {
  loading: boolean;
  dateTimeVisible: boolean;
  fabVisible: boolean;
  modalVisible: boolean;
  activeModal: ActiveModal | null;
  imagePicker: ImagePicker[];
  imageUri: string;
  imagesDelete: UriImage[];
  screen: string;
  setLoading: () => void;
  setDateTimeVisible: () => void;
  setFabVisible: () => void;
  setModalVisible: () => void;
  setActiveModalTask: (data: Task) => void;
  setActiveModalNote: (data: Note) => void;
  restoreActiveModal: () => void;
  setImagePicker: (image: ImagePicker) => void;
  restoreImagePicker: () => void;
  setImageUri: (uri: string) => void;
  deleteImagePicker: (uri: string) => void;
  deleteImagesCloudinary: (image: UriImage) => void;
  setScreen: (screen: string) => void;
}

export interface MainState {
  loading: boolean;
  dateTimeVisible: boolean;
  fabVisible: boolean;
  modalVisible: boolean;
  activeModal: ActiveModal | null;
  imagePicker: ImagePicker[];
  imageUri: string;
  imagesDelete: UriImage[];
  screen: string;
}

export type MainActions =
  | {type: 'set loading'}
  | {type: 'set date time visible'}
  | {type: 'set fab visible'}
  | {type: 'set modal visible'}
  | {type: 'set active modal task'; payload: {data: Task}}
  | {type: 'set active modal note'; payload: {data: Note}}
  | {type: 'restore active modal'}
  | {type: 'set image picker'; payload: {image: ImagePicker}}
  | {type: 'restore image picker'}
  | {type: 'set image uri'; payload: {uri: string}}
  | {type: 'delete image picker'; payload: {uri: string}}
  | {type: 'delete images cloudinary'; payload: {image: UriImage}}
  | {type: 'restore images cloudinary'}
  | {type: 'set screen'; payload: {screen: string}};

export const mainInitialState: MainState = {
  loading: false,
  dateTimeVisible: false,
  fabVisible: false,
  modalVisible: false,
  activeModal: null,
  imagePicker: [],
  imageUri: '',
  imagesDelete: [],
  screen: '',
};

export type RootScreenProps = {
  'home stack': undefined;
  lesson: {lesson?: Lesson};
  'task stack': {id: string};
  'note stack': {id: string};
  'details lesson': {lesson: Lesson};
  'create task stack': {id: string};
  'create note stack': undefined;
};

export interface DetailsLessonProps
  extends StackScreenProps<RootScreenProps, 'details lesson'> {}

export interface NoteScreenProps
  extends StackScreenProps<RootScreenProps, 'note stack'> {}

export interface TaskScreenProps
  extends StackScreenProps<RootScreenProps, 'task stack'> {}

export interface CreateTaskScreenProps
  extends StackScreenProps<RootScreenProps, 'create task stack'> {}

export interface CreateNoteScreenProps
  extends StackScreenProps<RootScreenProps, 'create note stack'> {}

export interface LessonScreenProps
  extends StackScreenProps<RootScreenProps, 'lesson'> {}

export interface ImagePicker {
  uri: string | undefined;
  fileName: string | undefined;
  type: string | undefined;
  base64: string | undefined;
}
