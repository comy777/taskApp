import React, {useContext, useEffect} from 'react';
import {View, TextInput, FlatList} from 'react-native';
import {LessonScreenProps} from '../interfaces/main';
import {mainStyles} from '../styles/mainStyles';
import ShedulePicker from '../components/ShedulePicker';
import {LessonsContext, MainContext} from '../context/MainContext';
import DayComponent from '../components/DayComponent';
import FabBtnComponent from '../components/FabBtnComponent';
import {globalStyles} from '../styles/globalStyles';
import useLessons from '../hooks/useLessons';
import LoadingComponent from '../components/LoadingComponent';
import {Schedlue} from '../interfaces/lesson';

const Lessons = ({navigation, route}: LessonScreenProps) => {
  const {schedlue, saveSchedule} = useContext(LessonsContext);
  const {
    saveLessonApi,
    clase,
    teacher,
    nrc,
    handleChange,
    resetFormValues,
    editLessonApi,
  } = useLessons();
  useEffect(() => {
    if (route.params) {
      const {lesson} = route.params;
      if (!lesson) return;
      const {_id, lesson: clase, nrc, teacher, schedlue} = lesson;
      const data: Schedlue[] = [];
      schedlue.map((item, i) => {
        delete item._id;
        data[i] = item;
      });
      saveSchedule(data);
      const nrcString = nrc.toString();
      resetFormValues({clase, teacher, nrc: nrcString});
    }
  }, [route.params]);
  const {loading} = useContext(MainContext);
  const handleConfirm = async () => {
    if (route.params) {
      const {lesson} = route.params;
      if (!lesson) return;
      const {_id} = lesson;
      const data = {lesson: clase, teacher, nrc, schedlue};
      const resp = await editLessonApi(_id, data);
      if (!resp) return;
      navigation.navigate('home stack');
    } else {
      const data = {lesson: clase, teacher, nrc, schedlue};
      await saveLessonApi(data);
    }
  };
  return (
    <View style={{...mainStyles.container, flex: 1}}>
      <TextInput
        placeholder="Clase"
        style={mainStyles.input}
        value={clase}
        onChangeText={value => handleChange(value, 'clase')}
      />
      <TextInput
        placeholder="Docente"
        style={mainStyles.input}
        value={teacher}
        onChangeText={value => handleChange(value, 'teacher')}
      />
      <TextInput
        placeholder="NRC"
        style={mainStyles.input}
        keyboardType="decimal-pad"
        value={nrc}
        onChangeText={value => handleChange(value, 'nrc')}
      />
      <ShedulePicker />
      <FlatList
        data={schedlue}
        keyExtractor={(item, i) => i.toString()}
        horizontal
        renderItem={({item, index}) => (
          <DayComponent day={item.day} hours={item.hours} _id={index} />
        )}
      />
      {loading && <LoadingComponent />}
      <FabBtnComponent
        icon="checkmark-outline"
        color="white"
        onPress={handleConfirm}
        style={globalStyles.fabContainerMain}
      />
    </View>
  );
};

export default Lessons;
