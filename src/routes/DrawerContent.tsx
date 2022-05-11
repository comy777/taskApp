import React from 'react';
import {View} from 'react-native';
import {
  DrawerContentComponentProps,
  DrawerItem,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {useMaterialYouPalette} from '@assembless/react-native-material-you';
import Icon from 'react-native-vector-icons/Ionicons';
import SwitchComponent from '../components/SwitchComponent';

const DrawerContent = (props: DrawerContentComponentProps) => {
  const palette = useMaterialYouPalette();
  const {navigation, state} = props;
  const {index} = state;
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <DrawerItem
          label="Home"
          onPress={() => navigation.navigate('home drawer')}
          activeBackgroundColor={palette ? palette.system_accent1[4] : 'teal'}
          activeTintColor="white"
          icon={({color, size}) => (
            <Icon name="home-outline" color={color} size={size} />
          )}
          focused={index === 0 ? true : false}
        />
        <DrawerItem
          label="Profile"
          onPress={() => navigation.navigate('settings drawer')}
          activeBackgroundColor="teal"
          activeTintColor="white"
          icon={({color, size}) => (
            <Icon name="person-circle-outline" color={color} size={size} />
          )}
          focused={index === 1 ? true : false}
        />
      </DrawerContentScrollView>
      <SwitchComponent />
    </View>
  );
};

export default DrawerContent;
