import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import {LoadingComponentProps} from '../interfaces/components';
import {globalStyles} from '../styles/globalStyles';

const LoadingComponent = ({style}: LoadingComponentProps) => {
  return (
    <View style={style ? style : globalStyles.loading}>
      <ActivityIndicator size={36} color="teal" />
    </View>
  );
};

export default LoadingComponent;
