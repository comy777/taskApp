import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import StackRoutes from './StackRoutes';
import DrawerContent from './DrawerContent';
import Settings from '../screens/Settings';
import {MainProvider} from '../context/MainContext';

const Drawer = createDrawerNavigator();

const AppState = ({children}: any) => {
  return <MainProvider>{children}</MainProvider>;
};

const DrawerRoutes = () => {
  return (
    <AppState>
      <Drawer.Navigator
        screenOptions={{headerShown: false}}
        drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="home drawer" component={StackRoutes} />
        <Drawer.Screen name="settings drawer" component={Settings} />
      </Drawer.Navigator>
    </AppState>
  );
};

export default DrawerRoutes;
