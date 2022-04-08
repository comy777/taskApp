import React, {useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FabBtnComponent from '../components/FabBtnComponent';
import Home from '../screens/Home';
import {LessonsContext} from '../context/MainContext';

const Tab = createBottomTabNavigator();

const TabRoutes = () => {
  const navigation = useNavigation();
  const {saveSchedule} = useContext(LessonsContext);
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: 'teal',
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: 'white',
      }}>
      <Tab.Screen
        name="home tab"
        component={Home}
        options={{
          tabBarIcon: ({color, focused}) => (
            <FabBtnComponent
              icon={'add'}
              onPress={() => {
                saveSchedule([]);
                navigation.navigate('lesson');
              }}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabRoutes;
