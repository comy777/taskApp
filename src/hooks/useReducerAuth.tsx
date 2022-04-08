import {useReducer} from 'react';
import {authInitialState} from '../interfaces/auth';
import {authReducer} from '../reducers/authReducer';

const useReducerAuth = () => {
  const [state, dispatch] = useReducer(authReducer, authInitialState);
  const setLoading = () => dispatch({type: 'set loading'});
  const setVisiblePassword = () => dispatch({type: 'set visible password'});
  const setToken = (token: string) =>
    dispatch({type: 'set token', payload: {token}});
  const removeToken = () => dispatch({type: 'remove token'});
  return {
    authState: state,
    setLoading,
    setVisiblePassword,
    setToken,
    removeToken,
  };
};

export default useReducerAuth;
