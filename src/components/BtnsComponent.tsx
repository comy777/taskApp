import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {globalStyles} from '../styles/globalStyles';
import {BtnsProps} from '../interfaces/components';

const BtnsComponent = ({btns}: BtnsProps) => {
  return (
    <View style={globalStyles.iconsComponent}>
      {btns.map((item, i) => (
        <View
          key={i}
          style={item.style ? item.style : globalStyles.btnsComponent}>
          <TouchableOpacity onPress={item.onPress}>
            <Text style={globalStyles.btnsComponentText}>{item.title}</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

export default BtnsComponent;
