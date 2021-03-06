import React, {useContext} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {BtnComponentProps} from '../interfaces/components';
import {authStyles} from '../styles/authStyles';
import useContextAuth from '../hooks/useContextAuth';
import {MainContext} from '../context/MainContext';

const BtnComponent = ({
  style,
  styleText,
  title,
  onPress,
}: BtnComponentProps) => {
  const {loading: loadingAuth} = useContextAuth();
  const {loading} = useContext(MainContext);
  return (
    <View style={authStyles.btnViewContainer}>
      <View style={style}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={onPress}
          disabled={loadingAuth || loading}>
          <Text style={styleText}>{title}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BtnComponent;
