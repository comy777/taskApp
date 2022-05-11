import {useReducer} from 'react';
import {mainReducer} from '../reducers/mainReducer';
import {ImagePicker, mainInitialState} from '../interfaces/main';
import {Note, Task, UriImage} from '../interfaces/response';

const useReducerMain = () => {
  const [state, dispatch] = useReducer(mainReducer, mainInitialState);
  const setLoading = () => dispatch({type: 'set loading'});
  const setDateTimeVisible = () => dispatch({type: 'set date time visible'});
  const setFabVisible = () => dispatch({type: 'set fab visible'});
  const setModalVisible = () => dispatch({type: 'set modal visible'});
  const setActiveModalTask = (data: Task) =>
    dispatch({type: 'set active modal task', payload: {data}});
  const setActiveModalNote = (data: Note) =>
    dispatch({type: 'set active modal note', payload: {data}});
  const restoreActiveModal = () => dispatch({type: 'restore active modal'});
  const setImagePicker = (image: ImagePicker) =>
    dispatch({type: 'set image picker', payload: {image}});
  const restoreImagePicker = () => dispatch({type: 'restore image picker'});
  const setImageUri = (uri: string) =>
    dispatch({type: 'set image uri', payload: {uri}});
  const deleteImagePicker = (uri: string) =>
    dispatch({type: 'delete image picker', payload: {uri}});
  const deleteImagesCloudinary = (image: UriImage) =>
    dispatch({type: 'delete images cloudinary', payload: {image}});
  const setScreen = (screen: string) =>
    dispatch({type: 'set screen', payload: {screen}});

  return {
    mainState: state,
    setLoading,
    setDateTimeVisible,
    setFabVisible,
    setModalVisible,
    restoreActiveModal,
    setImagePicker,
    restoreImagePicker,
    setImageUri,
    deleteImagePicker,
    deleteImagesCloudinary,
    setScreen,
    setActiveModalTask,
    setActiveModalNote,
  };
};

export default useReducerMain;
