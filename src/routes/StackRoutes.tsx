import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Lessons from '../screens/Lessons';
import Task from '../screens/Task';
import Note from '../screens/Note';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabRoutes from './TabRoutes';
import DetailsLesson from '../screens/DetailsLesson';
import CreateTask from '../screens/CreateTask';
import CreateNote from '../screens/CreateNote';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const StackRoutes = () => {
  return (
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
      <Stack.Screen name="create task stack" component={CreateTask} />
      <Stack.Screen name="create note stack" component={CreateNote} />
      <Stack.Screen name="note stack" component={Note} />
      <Stack.Screen name="details lesson" component={DetailsLesson} />
    </Stack.Navigator>
  );
};

export default StackRoutes;
