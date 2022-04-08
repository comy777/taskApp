import React from 'react';
import {View, Text} from 'react-native';
import BtnsComponent from '../components/BtnsComponent';
import {DetailsLessonProps} from '../interfaces/main';
import {globalStyles} from '../styles/globalStyles';
import {showAlert} from '../utils/alert';
import useLessons from '../hooks/useLessons';
import LoadingComponent from '../components/LoadingComponent';

const DetailsLesson = ({route, navigation}: DetailsLessonProps) => {
  const {deleteLessonApi, loading} = useLessons();
  const {lesson} = route.params;
  const {lesson: lessonClass, schedlue, _id, nrc, teacher} = lesson;
  const deleteLesson = async () => {
    const resp = await deleteLessonApi(_id);
    if (resp) navigation.navigate('home stack');
  };
  return (
    <View style={{...globalStyles.constinaer, flex: 1}}>
      <Text style={globalStyles.textDetails}>Clase: {lessonClass}</Text>
      <View style={globalStyles.lineSeparator} />
      <Text style={globalStyles.textDetails}>Docente: {teacher}</Text>
      <View style={globalStyles.lineSeparator} />
      <Text style={globalStyles.textDetails}>NRC: {nrc}</Text>
      <View style={globalStyles.lineSeparator} />
      <View>
        <Text style={globalStyles.textDetails}>Horario: </Text>
        <View style={globalStyles.lineSeparator} />
        {schedlue.map((item, i) => (
          <View key={i} style={globalStyles.schedlueDetails}>
            <View style={globalStyles.point} />
            <Text style={{...globalStyles.textDetails}}>
              {item.day} {item.hours}
            </Text>
          </View>
        ))}
      </View>
      {loading && <LoadingComponent />}
      <View style={{marginVertical: 15}}>
        <BtnsComponent
          btns={[
            {
              title: 'Eliminar',
              onPress: () =>
                showAlert({
                  title: 'Eliminar',
                  message: 'Desea eliminar la clase?',
                  onPress: deleteLesson,
                }),
              style: {...globalStyles.btnsComponent, backgroundColor: 'red'},
            },
            {
              title: 'Editar',
              onPress: () => navigation.navigate('lesson', {lesson}),
            },
          ]}
        />
      </View>
      <View style={globalStyles.iconsComponentBottom}>
        <BtnsComponent
          btns={[
            {
              title: 'Tareas',
              onPress: () => navigation.navigate('task stack', {id: _id}),
            },
            {
              title: 'Notas',
              onPress: () => navigation.navigate('note stack', {id: _id}),
            },
          ]}
        />
      </View>
    </View>
  );
};

export default DetailsLesson;
