import React from 'react';
import {View, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {authStyles} from '../styles/authStyles';
import {TextInputIconProps} from '../interfaces/components';

const TextInputIcon = ({
  icon,
  size,
  onPress,
  securityPassword,
  onChange,
  value,
}: TextInputIconProps) => {
  return (
    <View style={{...authStyles.input, ...authStyles.inputIcon}}>
      <TextInput
        style={authStyles.inputText}
        placeholderTextColor="teal"
        placeholder="Contraseña"
        secureTextEntry={securityPassword}
        onChangeText={value => onChange(value)}
        value={value}
      />
      <Icon name={icon} size={size} color="teal" onPress={onPress} />
    </View>
  );
};

export default TextInputIcon;
