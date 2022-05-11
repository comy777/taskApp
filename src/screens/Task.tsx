import React, {useContext, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import FabBtnComponent from '../components/FabBtnComponent';
import {globalStyles} from '../styles/globalStyles';
import useTask from '../hooks/useTask';
import LoadingComponent from '../components/LoadingComponent';
import TaskComponent from '../components/TaskComponent';
import {LessonsContext} from '../context/MainContext';
import useFuctions from '../hooks/useFuctions';

const Task = () => {
  const {idLesson} = useContext(LessonsContext);
  const {handleNavigationTask} = useFuctions();
  const {getTaskApi, tasks, loading} = useTask();
  useEffect(() => {
    getTaskApi(idLesson);
  }, [idLesson]);
  if (loading) return <LoadingComponent style={globalStyles.loadingFull} />;
  return (
    <View style={{flex: 1, padding: 15}}>
      <FlatList
        data={tasks}
        ListEmptyComponent={() => (
          <Text style={{color: 'teal'}}>Aun no hay tareas</Text>
        )}
        keyExtractor={(item, i) => i.toString()}
        renderItem={({item}) => <TaskComponent {...item} />}
      />
      <FabBtnComponent
        color="white"
        icon="add"
        onPress={handleNavigationTask}
        style={globalStyles.fabContainerMain}
      />
    </View>
  );
};

export default Task;
