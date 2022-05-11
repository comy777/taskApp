import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {useMaterialYouPalette} from '@assembless/react-native-material-you';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {stylesComponent} from '../styles/componentStyles';
import useContextAuth from '../hooks/useContextAuth';

const HeaderComponent = () => {
  const navigation = useNavigation();
  const {user} = useContextAuth();
  const palette = useMaterialYouPalette();
  if (!user) return null;
  return (
    <View style={stylesComponent.headerContainer}>
      <Text style={stylesComponent.headerText}>Task University</Text>
      <View style={stylesComponent.headerImage}>
        {user.image !== '' ? (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.openDrawer()}>
            <Image
              source={{uri: user.image}}
              style={{
                height: 50,
                width: 50,
                resizeMode: 'contain',
                borderRadius: 25,
              }}
            />
          </TouchableOpacity>
        ) : (
          <Icon
            name="person-outline"
            color={palette ? palette.system_accent1[6] : 'teal'}
            size={32}
            onPress={() => navigation.openDrawer()}
          />
        )}
      </View>
    </View>
  );
};

export default HeaderComponent;
