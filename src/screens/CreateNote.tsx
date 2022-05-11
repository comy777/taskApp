import React, {useEffect} from 'react';
import {View, TextInput} from 'react-native';
import FabGroup from '../components/FabGroup';
import {globalStyles} from '../styles/globalStyles';
import useNotes from '../hooks/useNotes';
import LoadingComponent from '../components/LoadingComponent';
import ImagesComponent from '../components/ImagesComponent';
import {useTheme} from '@react-navigation/native';

const CreateNote = () => {
  const {colors} = useTheme();
  const {
    screen,
    activeModal,
    title,
    body,
    handleChange,
    loading,
    fabVisible,
    iconsNotes,
    setImagePicker,
    setImageUri,
    resetFormValues,
  } = useNotes();

  useEffect(() => {
    if (!activeModal) return;
    if (screen === 'note') {
      if (!activeModal.note) return;
      const {title, body, images} = activeModal.note;
      resetFormValues({title, body});
      if (images.length === 0) return;
      images.map((item, i) => {
        if (i === 0) {
          setImageUri(item.uri ? item.uri : '');
        }
        setImagePicker(item);
      });
    }
  }, [activeModal]);

  return (
    <View
      style={
        fabVisible || loading
          ? globalStyles.fabGroupVisible
          : globalStyles.fabGroupNoVisible
      }>
      <TextInput
        placeholder="Titulo"
        style={{...globalStyles.input, color: colors.text}}
        value={title}
        onChangeText={value => handleChange(value, 'title')}
        placeholderTextColor={colors.text}
      />
      <ImagesComponent />
      <TextInput
        placeholder="Body"
        style={{...globalStyles.inputDesc, color: colors.text}}
        placeholderTextColor={colors.text}
        multiline
        value={body}
        onChangeText={value => handleChange(value, 'body')}
      />
      {loading && <LoadingComponent style={globalStyles.loadingFull} />}
      <FabGroup icons={iconsNotes} />
    </View>
  );
};

export default CreateNote;
