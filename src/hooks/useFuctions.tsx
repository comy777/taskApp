import {useContext} from 'react';
import {MainContext, TaskContext, LessonsContext} from '../context/MainContext';
import useTask from './useTask';
import {TaskStorage} from '../interfaces/task';
import {useNavigation} from '@react-navigation/native';
import useImages from './useImages';
import {saveImages} from '../api/requestMain';
import {UriImage, Task} from '../interfaces/response';
import {deleteImagesCloudinary, saveImagesCloudinary} from '../utils/images';
import {validateSchedule, transformDate} from '../utils/validateForm';
import useNotes from './useNotes';
import {showAlert} from '../utils/alert';

const useFuctions = () => {
  const navigation = useNavigation();
  const {
    setDateTimeVisible,
    setFabVisible,
    setModalVisible,
    activeModal,
    restoreActiveModal,
    imagePicker,
    setLoading,
    restoreImagePicker,
    setImageUri,
    imagesDelete,
    screen,
    setActiveModalTask,
  } = useContext(MainContext);
  const {setScheduleTask, setUpload, scheduleTask} = useContext(TaskContext);
  const {idLesson} = useContext(LessonsContext);
  const {saveTaskApi, editTaskApi, deleteTaskApi, completeTaskApi} = useTask();
  const {handleCamera, handleGalery} = useImages();
  const {handleDeleteNote} = useNotes();

  const icons = [
    {
      icon: 'calendar-outline',
      onPress: () => {
        setDateTimeVisible(), setFabVisible();
      },
    },
    {
      icon: 'image-outline',
      onPress: handleGalery,
    },
    {
      icon: 'camera-outline',
      onPress: handleCamera,
    },
  ];

  const handleConfirmDateTask = (e: Date) => {
    setDateTimeVisible();
    const data = transformDate(e);
    setScheduleTask(data);
  };
  const handleCancelDateTask = () => {
    setDateTimeVisible();
  };

  const handleSaveTask = async (task: TaskStorage, id: string) => {
    const validate = validateSchedule(scheduleTask, setFabVisible);
    if (!validate) return;

    setFabVisible();
    setUpload();
    setLoading();

    if (activeModal) {
      if (imagesDelete.length > 0) {
        await deleteImagesCloudinary(imagesDelete);
      }
      if (imagePicker.length === 0) {
        task.images = [];
      }
      if (imagePicker.length > 0) {
        await saveImagesCloudinary(
          imagePicker,
          handleSubmitWithImagesEdit,
          task,
        );
        return;
      }
      if (!activeModal.task) return;
      const {_id} = activeModal.task;
      setUpload();
      await editTaskApi(task, _id);
      setLoading();
      return;
    }

    if (imagePicker.length > 0) {
      await saveImages(imagePicker, handleSubmitWithImages, task);
      return;
    }

    if (!task.title && !task.body) return;
    await saveTaskApi(task, id);
    setUpload();
    setLoading();
  };

  const handleEdit = () => {
    setModalVisible();
    restoreImagePicker();
    setImageUri('');
    if (screen === 'task') {
      navigation.navigate('create task stack');
      return;
    }
    if (screen === 'note') {
      navigation.navigate('create note stack');
      return;
    }
  };

  const handleDelete = async (id: string) => {
    if (screen === 'task') {
      showAlert({
        title: 'Eliminar',
        message: 'Desea eliminar esta tarea?',
        onPress: async () => await deleteTaskApi(id),
      });
      return;
    }
    if (screen === 'note') {
      showAlert({
        title: 'Eliminar',
        message: 'Desea eliminar esta nota?',
        onPress: async () => await handleDeleteNote(id),
      });
      return;
    }
  };

  const handleNavigationTask = () => {
    navigation.navigate('create task stack', {id: ''});
    if (imagePicker.length > 0) {
      restoreImagePicker();
      setImageUri('');
    }
    if (!activeModal) return;
    restoreActiveModal();
  };

  const handleSubmitWithImages = async (
    images: UriImage[],
    task: TaskStorage,
  ) => {
    setLoading();
    restoreImagePicker();
    setImageUri('');
    const data = task;
    data.images = images;
    await saveTaskApi(data, idLesson);
    setUpload();
  };

  const handleSubmitWithImagesEdit = async (
    images: UriImage[],
    task: TaskStorage,
  ) => {
    if (!activeModal) return;
    task.images = images;
    if (!activeModal.task) return;
    const {_id} = activeModal.task;
    setUpload();
    setLoading();
    await editTaskApi(task, _id);
    restoreImagePicker();
    setImageUri('');
    restoreActiveModal();
    setUpload();
  };

  const handleCompleteTask = async (task: Task) => {
    setLoading();
    if (!task) return;
    const {_id} = task;
    await completeTaskApi(_id);
    setLoading();
  };

  const handleClickTask = (task: Task) => {
    setModalVisible();
    setActiveModalTask(task);
  };

  return {
    icons,
    handleConfirmDateTask,
    handleCancelDateTask,
    handleSaveTask,
    handleEdit,
    handleNavigationTask,
    handleDelete,
    handleCompleteTask,
    handleClickTask,
  };
};

export default useFuctions;
