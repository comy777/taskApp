import {useContext} from 'react';
import {
  MainContext,
  LessonsContext,
  NotesContext,
} from '../context/MainContext';
import {getNotes, saveNote, deleteNote, editNote} from '../api/requestNotes';
import {Note, UriImage} from '../interfaces/response';
import {useNavigation} from '@react-navigation/native';
import useForm from './useForm';
import {NoteSave} from '../interfaces/notes';
import useImages from './useImages';
import {saveImagesNote} from '../api/requestMain';
import {deleteImagesCloudinary} from '../utils/images';
import {validatImages} from '../utils/imagesDelete';

const useNotes = () => {
  const {
    setLoading,
    loading,
    setActiveModalNote,
    setModalVisible,
    restoreActiveModal,
    restoreImagePicker,
    imagePicker,
    setImageUri,
    activeModal,
    imageUri,
    screen,
    setFabVisible,
    fabVisible,
    setImagePicker,
    imagesDelete,
  } = useContext(MainContext);
  const {idLesson} = useContext(LessonsContext);
  const navigation = useNavigation();
  const {
    saveNotesStorage,
    notes,
    saveNoteStorage,
    deleteNoteStorage,
    editNoteStorage,
  } = useContext(NotesContext);
  const {title, body, handleChange, reset, resetFormValues} = useForm({
    title: '',
    body: '',
  });
  const {handleCamera, handleGalery} = useImages();

  const getNotesApi = async () => {
    setLoading();
    const resp = await getNotes(idLesson);
    saveNotesStorage(resp.notes);
    setLoading();
  };

  const handleActiveModal = (note: Note) => {
    setModalVisible();
    setActiveModalNote(note);
  };

  const handleNavigate = () => {
    if (activeModal) restoreActiveModal();
    if (imagePicker.length > 0) restoreImagePicker();
    if (imageUri != '') setImageUri('');
    navigation.navigate('create note stack');
  };

  const handleSubmitSave = async (note: NoteSave) => {
    const {title, body} = note;
    if (!title && !body && imagePicker.length === 0) return;
    setLoading();
    if (activeModal) {
      if (!activeModal.note) return;
      if (imagesDelete) await deleteImagesCloudinary(imagesDelete);
      if (imagePicker.length > 0) {
        const response = validatImages(imagePicker);
        if (response.dataSubir.length === 0) {
          handleEditNote({title, body, images: response.dataNoSubir});
          return;
        }
        await saveImagesNote(
          response.dataSubir,
          handleSaveNoteWithImages,
          {title, body},
          response.dataNoSubir,
        );
        return;
      }
      await handleEditNote({title, body, images: []});
      return;
    }
    if (imagePicker.length > 0) {
      await saveImagesNote(imagePicker, handleSaveNoteWithImages, note);
      return;
    }
    const resp = await saveNote(note, idLesson);
    setLoading();
    if (!resp) return;
    saveNoteStorage(resp);
    reset();
    setFabVisible();
  };

  const handleDeleteNote = async (id: string) => {
    setLoading();
    const resp = await deleteNote(id);
    setLoading();
    if (!resp) return;
    deleteNoteStorage(id);
    restoreActiveModal();
    setModalVisible();
  };

  const handleEditNote = async (note: NoteSave) => {
    if (!activeModal) return;
    if (!activeModal.note) return;
    const {_id} = activeModal.note;
    const resp = await editNote(_id, note);
    if (!resp) return;
    setLoading();
    if (imagePicker.length > 0) restoreImagePicker();
    if (imageUri) setImageUri('');
    editNoteStorage(resp, _id);
    reset();
    setFabVisible();
  };

  const handleSaveNoteWithImages = async (
    images: UriImage[],
    note: NoteSave,
    imagesNoSubir?: UriImage[],
  ) => {
    const data = note;
    data.images = images;
    if (imagesNoSubir) {
      data.images = [...data.images, ...imagesNoSubir];
    }
    if (activeModal) {
      handleEditNote(data);
      return;
    }
    const resp = await saveNote(data, idLesson);
    setLoading();
    if (!resp) return;
    restoreImagePicker();
    setImageUri('');
    saveNoteStorage(resp);
    reset();
    setFabVisible();
  };

  const iconsNotes = [
    {
      icon: 'save-outline',
      onPress: async () => await handleSubmitSave({title, body}),
    },
    {
      icon: 'camera-outline',
      onPress: handleCamera,
    },
    {
      icon: 'image-outline',
      onPress: handleGalery,
    },
  ];

  return {
    loading,
    notes,
    getNotesApi,
    handleActiveModal,
    idLesson,
    handleNavigate,
    screen,
    activeModal,
    title,
    body,
    handleChange,
    reset,
    resetFormValues,
    handleSubmitSave,
    fabVisible,
    handleDeleteNote,
    iconsNotes,
    setImagePicker,
    setImageUri,
  };
};

export default useNotes;
