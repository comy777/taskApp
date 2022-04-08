import React, {useContext} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Schedlue} from '../interfaces/lesson';
import {LessonsContext} from '../context/MainContext';
import {globalStyles} from '../styles/globalStyles';

const DayComponent = ({day, hours, _id}: Schedlue) => {
  const {deleteSchedlue} = useContext(LessonsContext);
  const handleDelete = () => {
    deleteSchedlue({day, hours});
  };
  return (
    <View style={globalStyles.dayContainer}>
      <View style={globalStyles.day}>
        <TouchableOpacity onPress={handleDelete}>
          <Text style={globalStyles.dayText}>X</Text>
        </TouchableOpacity>
      </View>
      <Text>{day}</Text>
      <Text>{hours}</Text>
    </View>
  );
};

export default DayComponent;
