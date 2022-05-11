import React, {createContext} from 'react';
import {AuthStateProps} from '../interfaces/auth';
import useReducerAuth from '../hooks/useReducerAuth';

export const AuthContext = createContext({} as AuthStateProps);

export const AuthProvider = ({children}: any) => {
  const {
    authState,
    setLoading,
    setVisiblePassword,
    setToken,
    removeToken,
    setDarkTheme,
    setUser,
    setEditable,
    setBase64,
    setImageUser,
  } = useReducerAuth();

  return (
    <AuthContext.Provider
      value={{
        ...authState,
        setLoading,
        setVisiblePassword,
        setToken,
        removeToken,
        setDarkTheme,
        setUser,
        setEditable,
        setBase64,
        setImageUser,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
