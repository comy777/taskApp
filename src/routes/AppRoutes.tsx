import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthRoutes from './AuthRoutes';
import useContextAuth from '../hooks/useContextAuth';
import LoadingComponent from '../components/LoadingComponent';
import StackRoutes from './StackRoutes';

const AppRoutes = () => {
  const {token, loading} = useContextAuth();
  if (loading) return <LoadingComponent />;
  return (
    <NavigationContainer>
      {token ? <StackRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
};

export default AppRoutes;
