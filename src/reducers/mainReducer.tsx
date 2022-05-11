import {MainState, MainActions} from '../interfaces/main';

export const mainReducer = (
  state: MainState,
  action: MainActions,
): MainState => {
  switch (action.type) {
    case 'set loading':
      return {
        ...state,
        loading: !state.loading,
      };
    case 'set date time visible':
      return {
        ...state,
        dateTimeVisible: !state.dateTimeVisible,
      };
    case 'set fab visible':
      return {
        ...state,
        fabVisible: !state.fabVisible,
      };
    case 'set modal visible':
      return {
        ...state,
        modalVisible: !state.modalVisible,
      };
    case 'set active modal task':
      return {
        ...state,
        activeModal: {
          task: action.payload.data,
        },
      };
    case 'set active modal note':
      return {
        ...state,
        activeModal: {
          note: action.payload.data,
        },
      };
    case 'restore active modal':
      return {
        ...state,
        activeModal: null,
      };
    case 'set image picker':
      return {
        ...state,
        imagePicker: state.imagePicker
          ? [...state.imagePicker, action.payload.image]
          : [],
      };
    case 'delete image picker':
      return {
        ...state,
        imagePicker: state.imagePicker.filter(
          i => i.uri !== action.payload.uri,
        ),
      };
    case 'restore image picker':
      return {
        ...state,
        imagePicker: [],
      };
    case 'set image uri':
      return {
        ...state,
        imageUri: action.payload.uri,
      };
    case 'delete images cloudinary':
      return {
        ...state,
        imagesDelete: [...state.imagesDelete, action.payload.image],
      };
    case 'restore images cloudinary':
      return {
        ...state,
        imagesDelete: [],
      };
    case 'set screen':
      return {
        ...state,
        screen: action.payload.screen,
      };
    default:
      return state;
  }
};
