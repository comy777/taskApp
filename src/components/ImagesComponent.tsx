import React, {useContext} from 'react';
import {FlatList, Image, View} from 'react-native';
import {MainContext} from '../context/MainContext';
import ImageComponent from './ImageComponent';
import useImages from '../hooks/useImages';
import BtnComponent from './BtnComponent';
import {globalStyles} from '../styles/globalStyles';
import {stylesComponent} from '../styles/componentStyles';

const ImagesComponent = () => {
  const {imagePicker, imageUri} = useContext(MainContext);

  const {handleDeleteImage} = useImages();
  return (
    <View style={{alignItems: 'center'}}>
      {imageUri !== '' && (
        <View
          style={{
            alignItems: 'center',
            marginVertical: 25,
          }}>
          <Image
            source={{uri: imageUri}}
            style={{height: 180, width: 250, resizeMode: 'center'}}
          />
          <BtnComponent
            title="Quitar imagen"
            onPress={() => handleDeleteImage(imageUri)}
            style={stylesComponent.btn}
            styleText={globalStyles.btnsComponentText}
          />
        </View>
      )}
      <FlatList
        data={imagePicker}
        keyExtractor={(item, i) => i.toString()}
        renderItem={({item}) => (
          <ImageComponent
            image={item}
            styleImage={{height: 70, width: 70, marginBottom: 10}}
          />
        )}
        horizontal
      />
    </View>
  );
};

export default ImagesComponent;
