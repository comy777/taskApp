import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Note} from '../interfaces/response';
import {stylesComponent} from '../styles/componentStyles';
import useNotes from '../hooks/useNotes';

const NoteComponent = (note: Note) => {
  const {body, title} = note;
  const {handleActiveModal} = useNotes();
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => handleActiveModal(note)}>
      <View style={stylesComponent.noteComponent}>
        <Text style={stylesComponent.noteComponentTextTitle}>{title}</Text>
        <Text style={stylesComponent.noteComponentText} numberOfLines={8}>
          {body}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default NoteComponent;
