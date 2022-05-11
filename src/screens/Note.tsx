import React, {useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import FabBtnComponent from '../components/FabBtnComponent';
import LoadingComponent from '../components/LoadingComponent';
import NoteComponent from '../components/NoteComponent';
import useNotes from '../hooks/useNotes';
import {globalStyles} from '../styles/globalStyles';

const Note = () => {
  const {loading, notes, getNotesApi, idLesson, handleNavigate} = useNotes();

  useEffect(() => {
    getNotesApi();
  }, [idLesson]);

  if (loading) return <LoadingComponent style={globalStyles.loadingFull} />;

  return (
    <View style={globalStyles.constinaer}>
      <FlatList
        data={notes}
        ListEmptyComponent={() => <Text>No hay notas aun</Text>}
        keyExtractor={(ietm, i) => i.toString()}
        renderItem={({item}) => <NoteComponent {...item} />}
        numColumns={2}
      />
      <FabBtnComponent
        color="white"
        icon="add"
        onPress={handleNavigate}
        style={globalStyles.fabContainerMain}
      />
    </View>
  );
};

export default Note;
