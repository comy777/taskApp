import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Lessons from '../screens/Lessons';
import Task from '../screens/Task';
import Note from '../screens/Note';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MainProvider} from '../context/MainContext';
import TabRoutes from './TabRoutes';
import DetailsLesson from '../screens/DetailsLesson';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AppState = ({children}: any) => {
  return <MainProvider>{children}</MainProvider>;
};

const StackRoutes = () => {
  return (
    <AppState>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="home stack" component={TabRoutes} />
        <Tab.Screen
          name="lesson"
          component={Lessons}
          options={{
            tabBarStyle: {
              display: 'none',
            },
          }}
        />
        <Stack.Screen name="task stack" component={Task} />
        <Stack.Screen name="note stack" component={Note} />
        <Stack.Screen name="details lesson" component={DetailsLesson} />
      </Stack.Navigator>
    </AppState>
  );
};

export default StackRoutes;
