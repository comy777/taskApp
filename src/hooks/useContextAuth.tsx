import {useContext} from 'react';
import {AuthContext} from '../context/AuthContext';

const useContextAuth = () => {
  const {
    loading,
    setLoading,
    setVisiblePassword,
    token,
    visiblePassword,
    setToken,
    removeToken,
    setDarkTheme,
    darkTheme,
    setUser,
    user,
    setEditable,
    editable,
    base64,
    setBase64,
    imageUser,
    setImageUser,
  } = useContext(AuthContext);

  return {
    loading,
    setLoading,
    setVisiblePassword,
    token,
    visiblePassword,
    setToken,
    removeToken,
    setDarkTheme,
    darkTheme,
    setUser,
    user,
    setEditable,
    editable,
    base64,
    setBase64,
    imageUser,
    setImageUser,
  };
};

export default useContextAuth;
