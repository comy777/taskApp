import React, {useContext} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {Lesson} from '../interfaces/response';
import {globalStyles} from '../styles/globalStyles';
import {useNavigation} from '@react-navigation/native';
import {LessonsContext} from '../context/MainContext';

const LessonComponent = (props: Lesson) => {
  const navigation = useNavigation();
  const {setIdLesson} = useContext(LessonsContext);
  const handleNavigate = () => {
    navigation.navigate('details lesson', {lesson: props});
    const {_id} = props;
    setIdLesson(_id);
  };
  const {lesson, schedlue} = props;
  return (
    <View style={globalStyles.lessonContainer}>
      <TouchableOpacity activeOpacity={0.8} onPress={handleNavigate}>
        <View style={globalStyles.imageContainer}>
          <Image
            source={{
              uri: 'https://www.gndiario.com/sites/default/files/styles/noticia_detalle_noticia_2_1/public/noticias/CLASES.jpg?itok=_5grhFgh',
            }}
            style={globalStyles.imageLesson}
          />
          <View style={globalStyles.textLessonContainer}>
            <Text style={globalStyles.textLesson}>{lesson}</Text>
            <View style={globalStyles.containerSchedlue}>
              {schedlue.map((item, i) => (
                <Text key={i} style={globalStyles.textSchedlue}>
                  {item.day}
                </Text>
              ))}
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default LessonComponent;
