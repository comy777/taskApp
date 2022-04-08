import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {IconComponentProps} from '../interfaces/components';

const IconComponent = ({icon, onPress}: IconComponentProps) => {
  return (
    <View
      style={{
        height: 50,
        width: 50,
        backgroundColor: 'teal',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
        marginBottom: 5,
      }}>
      <Icon name={icon} size={24} color="white" onPress={onPress} />
    </View>
  );
};

export default IconComponent;
