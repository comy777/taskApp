import React, {useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import LoadingComponent from '../components/LoadingComponent';
import useLessons from '../hooks/useLessons';
import {globalStyles} from '../styles/globalStyles';
import LessonComponent from '../components/LessonComponent';

const Home = () => {
  const {lessons, loading, getLessonsApi} = useLessons();
  useEffect(() => {
    getLessonsApi();
  }, []);
  if (loading) return <LoadingComponent />;
  return (
    <View style={globalStyles.constinaer}>
      <FlatList
        data={lessons}
        keyExtractor={i => i._id}
        ListEmptyComponent={() => <Text>No hay clases</Text>}
        renderItem={({item}) => <LessonComponent {...item} />}
      />
    </View>
  );
};

export default Home;
