import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Task} from '../interfaces/response';
import {globalStyles} from '../styles/globalStyles';
import {transformDate} from '../utils/validateForm';
import IconComponent from './IconComponent';
import useFuctions from '../hooks/useFuctions';
import {stylesComponent} from '../styles/componentStyles';

const TaskComponent = (task: Task) => {
  const {title, dayLimit, complete} = task;
  const date = transformDate(dayLimit);
  const {handleClickTask, handleCompleteTask} = useFuctions();
  return (
    <View
      style={{
        ...globalStyles.taskComponent,
        backgroundColor: complete ? 'green' : 'red',
      }}>
      <View style={stylesComponent.taskComponent}>
        <TouchableOpacity onPress={() => handleClickTask(task)}>
          <Text style={globalStyles.taskComponentText}>{title}</Text>
          <Text style={globalStyles.taskComponentText}>Fecha: {date.day}</Text>
          <Text style={globalStyles.taskComponentText}>Hora: {date.hour}</Text>
        </TouchableOpacity>
        <IconComponent
          icon={complete ? 'close-outline' : 'checkmark-outline'}
          onPress={() => handleCompleteTask(task)}
          style={{}}
          size={38}
        />
      </View>
    </View>
  );
};

export default TaskComponent;
