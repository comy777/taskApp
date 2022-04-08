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
  } = useContext(AuthContext);
  return {
    loading,
    setLoading,
    setVisiblePassword,
    token,
    visiblePassword,
    setToken,
    removeToken,
  };
};

export default useContextAuth;
