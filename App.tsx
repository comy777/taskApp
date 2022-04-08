import 'react-native-gesture-handler';
import React from 'react';
import {LogBox} from 'react-native';
import AppRoutes from './src/routes/AppRoutes';
import {AuthProvider} from './src/context/AuthContext';

LogBox.ignoreLogs(['react-native-gesture-handler']);

const AuthContextApp = ({children}: any) => {
  return <AuthProvider>{children}</AuthProvider>;
};

const App = () => {
  return (
    <AuthContextApp>
      <AppRoutes />
    </AuthContextApp>
  );
};

export default App;
