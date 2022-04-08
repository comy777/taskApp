import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {globalStyles} from '../styles/globalStyles';
import {FabComponentProps} from '../interfaces/components';

const FabBtnComponent = ({icon, onPress, color, style}: FabComponentProps) => {
  return (
    <View style={style ? style : globalStyles.fabContainer}>
      <View style={style ? {} : globalStyles.fab}>
        <Icon name={icon} color={color} size={48} onPress={onPress} />
      </View>
    </View>
  );
};

export default FabBtnComponent;
