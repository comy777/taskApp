import React from 'react';
import {View, Text} from 'react-native';
import {NoteScreenProps} from '../interfaces/main';

const Note = ({route}: NoteScreenProps) => {
  const {id} = route.params;
  console.log(id);
  return (
    <View>
      <Text>Note</Text>
    </View>
  );
};

export default Note;
