import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {IconComponentProps} from '../interfaces/components';
import {stylesComponent} from '../styles/componentStyles';

const IconComponent = ({icon, onPress, size, style}: IconComponentProps) => {
  return (
    <View style={style ? style : stylesComponent.icons}>
      <Icon name={icon} size={size} color="white" onPress={onPress} />
    </View>
  );
};

export default IconComponent;
