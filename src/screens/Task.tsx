import React, {useContext, useEffect} from 'react';
import {View, TextInput, Text} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import FabGroup from '../components/FabGroup';
import {TaskScreenProps} from '../interfaces/main';
import {globalStyles} from '../styles/globalStyles';
import {MainContext, TaskContext} from '../context/MainContext';
import useFuctions from '../hooks/useFuctions';

const Task = ({route}: TaskScreenProps) => {
  const {id} = route.params;
  const {fabVisible, dateTimeVisible} = useContext(MainContext);
  const {handleConfirmDateTask, handleCancelDateTask, icons} = useFuctions();
  const {schedule} = useContext(TaskContext);
  console.log(schedule);
  return (
    <View
      style={
        fabVisible
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
      <TextInput placeholder="Tarea" style={globalStyles.input} />
      {schedule && <Text>{schedule}</Text>}
      <TextInput placeholder="" multiline style={globalStyles.inputDesc} />
      <FabGroup icons={icons} />
    </View>
  );
};

export default Task;
