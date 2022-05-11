import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import BtnsComponent from '../components/BtnsComponent';
import {DetailsLessonProps} from '../interfaces/main';
import {globalStyles} from '../styles/globalStyles';
import {showAlert} from '../utils/alert';
import useLessons from '../hooks/useLessons';
import LoadingComponent from '../components/LoadingComponent';
import ModalComponent from '../components/ModalComponent';
import {MainContext} from '../context/MainContext';
import {useTheme} from '@react-navigation/native';

const DetailsLesson = ({route, navigation}: DetailsLessonProps) => {
  const {colors} = useTheme();
  const {setScreen} = useContext(MainContext);
  const {deleteLessonApi, loading} = useLessons();
  const {lesson} = route.params;
  const {lesson: lessonClass, schedlue, _id, nrc, teacher} = lesson;
  const deleteLesson = async () => {
    const resp = await deleteLessonApi(_id);
    if (resp) navigation.navigate('home stack');
  };
  return (
    <View style={{...globalStyles.constinaer, flex: 1}}>
      <Text style={{...globalStyles.textDetails, color: colors.text}}>
        Clase: {lessonClass}
      </Text>
      <View style={globalStyles.lineSeparator} />
      <Text style={{...globalStyles.textDetails, color: colors.text}}>
        Docente: {teacher}
      </Text>
      <View style={globalStyles.lineSeparator} />
      <Text style={{...globalStyles.textDetails, color: colors.text}}>
        NRC: {nrc}
      </Text>
      <View style={globalStyles.lineSeparator} />
      <View>
        <Text style={{...globalStyles.textDetails, color: colors.text}}>
          Horario:{' '}
        </Text>
        <View style={globalStyles.lineSeparator} />
        {schedlue.map((item, i) => (
          <View key={i} style={globalStyles.schedlueDetails}>
            <View style={globalStyles.point} />
            <Text
              style={{...{...globalStyles.textDetails, color: colors.text}}}>
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
              onPress: () => {
                navigation.navigate('task stack', {id: _id});
                setScreen('task');
              },
            },
            {
              title: 'Notas',
              onPress: () => {
                navigation.navigate('note stack', {id: _id});
                setScreen('note');
              },
            },
          ]}
        />
      </View>
      <ModalComponent />
    </View>
  );
};

export default DetailsLesson;
