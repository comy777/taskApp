import React, {useContext, useEffect} from 'react';
import {View, TextInput, Text} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import FabGroup from '../components/FabGroup';
import {globalStyles} from '../styles/globalStyles';
import {MainContext, TaskContext, LessonsContext} from '../context/MainContext';
import useFuctions from '../hooks/useFuctions';
import useTask from '../hooks/useTask';
import ImagesComponent from '../components/ImagesComponent';
import LoadingComponent from '../components/LoadingComponent';
import {transformDate} from '../utils/validateForm';
import {useTheme} from '@react-navigation/native';

const CreateTask = () => {
  const {colors} = useTheme();
  const {idLesson} = useContext(LessonsContext);
  const {
    fabVisible,
    dateTimeVisible,
    loading,
    activeModal,
    restoreImagePicker,
    setImageUri,
    setImagePicker,
    screen,
  } = useContext(MainContext);
  const {scheduleTask, upload, setScheduleTask} = useContext(TaskContext);
  const {handleConfirmDateTask, handleCancelDateTask, icons, handleSaveTask} =
    useFuctions();
  const {title, body, handleChange, reset, resetFormValues} = useTask();

  useEffect(() => {
    if (upload === 'upload') {
      reset();
    }
  }, [upload]);

  useEffect(() => {
    if (screen === 'task') {
      if (activeModal) {
        if (!activeModal.task) return;
        const {title, body, images, dayLimit} = activeModal.task;
        restoreImagePicker();
        setImageUri('');
        if (images) {
          images.map((item, i) => {
            setImagePicker(item);
            if (i === 0) setImageUri(item.uri ? item.uri : '');
          });
        }
        if (dayLimit) {
          const data = transformDate(dayLimit);
          setScheduleTask(data);
        }
        resetFormValues({title, body});
      }
    }
  }, [activeModal]);

  return (
    <View
      style={
        fabVisible || loading
          ? globalStyles.fabGroupVisible
          : globalStyles.fabGroupNoVisible
      }>
      {dateTimeVisible && (
        <DateTimePicker
          isVisible={dateTimeVisible}
          mode="datetime"
          onConfirm={handleConfirmDateTask}
          onCancel={handleCancelDateTask}
        />
      )}
      <TextInput
        placeholder="Tarea"
        style={{...globalStyles.input, color: colors.text}}
        value={title}
        onChangeText={value => handleChange(value, 'title')}
        placeholderTextColor={colors.text}
      />
      {scheduleTask && (
        <Text>
          {scheduleTask.day} Hora: {scheduleTask.hour}
        </Text>
      )}
      <ImagesComponent />
      <TextInput
        placeholder="Description"
        multiline
        style={{...globalStyles.inputDesc, color: colors.text}}
        placeholderTextColor={colors.text}
        value={body}
        onChangeText={value => handleChange(value, 'body')}
      />
      {loading && <LoadingComponent style={globalStyles.loadingFull} />}
      <FabGroup
        icons={[
          {
            icon: 'save-outline',
            onPress: async () =>
              await handleSaveTask(
                {title, body, dayLimit: scheduleTask ? scheduleTask.day : ''},
                idLesson,
              ),
          },
          ...icons,
        ]}
      />
    </View>
  );
};

export default CreateTask;
