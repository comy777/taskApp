import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthRoutes from './AuthRoutes';
import useContextAuth from '../hooks/useContextAuth';
import DrawerRoutes from './DrawerRoutes';
import {DarkThemeStyle, DefaultThemeStyle} from '../styles/theme';
import useAuth from '../hooks/useAuth';

const AppRoutes = () => {
  const {token, darkTheme} = useContextAuth();
  const {getToken} = useAuth();

  useEffect(() => {
    getToken();
  }, [token]);

  return (
    <NavigationContainer theme={darkTheme ? DarkThemeStyle : DefaultThemeStyle}>
      {token ? <DrawerRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
};

export default AppRoutes;
