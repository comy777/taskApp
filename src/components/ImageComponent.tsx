import React from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  StyleProp,
  ViewStyle,
  ImageStyle,
} from 'react-native';
import {ImagePicker} from '../interfaces/main';
import useImages from '../hooks/useImages';

interface Props {
  image: ImagePicker;
  style?: StyleProp<ViewStyle>;
  styleImage: StyleProp<ImageStyle>;
}

const ImageComponent = ({image, style, styleImage}: Props) => {
  const {handleChangeImage} = useImages();
  const {uri} = image;
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => handleChangeImage(uri ? uri : '')}>
      <View style={style ? style : {marginHorizontal: 5}}>
        <Image source={{uri}} style={styleImage} />
      </View>
    </TouchableOpacity>
  );
};

export default ImageComponent;
