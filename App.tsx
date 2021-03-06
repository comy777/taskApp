import 'react-native-gesture-handler';
import React from 'react';
import 'react-native-gesture-handler';
import {LogBox} from 'react-native';
import {
  MaterialYouService,
  defaultPalette,
} from '@assembless/react-native-material-you';
import AppRoutes from './src/routes/AppRoutes';
import {AuthProvider} from './src/context/AuthContext';

LogBox.ignoreLogs(['react-native-gesture-handler']);

const AuthContextApp = ({children}: any) => {
  return <AuthProvider>{children}</AuthProvider>;
};

const App = () => {
  return (
    <AuthContextApp>
      <MaterialYouService fallbackPalette={defaultPalette}>
        <AppRoutes />
      </MaterialYouService>
    </AuthContextApp>
  );
};

export default App;
