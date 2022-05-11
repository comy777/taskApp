import React from 'react';
import {View, Switch} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useMaterialYouPalette} from '@assembless/react-native-material-you';
import {stylesComponent} from '../styles/componentStyles';
import useAuth from '../hooks/useAuth';

const SwitchComponent = () => {
  const {setDarkTheme, darkTheme} = useAuth();
  const palette = useMaterialYouPalette();

  return (
    <View style={stylesComponent.switchContainerBottom}>
      <View style={stylesComponent.switchContainer}>
        <Icon
          name="moon-outline"
          size={32}
          color={palette ? palette.system_accent1[4] : 'red'}
        />
        <Switch
          onChange={setDarkTheme}
          value={darkTheme}
          thumbColor={palette ? palette.system_accent1[4] : 'red'}
        />
      </View>
    </View>
  );
};

export default SwitchComponent;
