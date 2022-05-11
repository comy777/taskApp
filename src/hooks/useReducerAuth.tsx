import {useReducer} from 'react';
import {authInitialState} from '../interfaces/auth';
import {User} from '../interfaces/response';
import {authReducer} from '../reducers/authReducer';

const useReducerAuth = () => {
  const [state, dispatch] = useReducer(authReducer, authInitialState);
  const setLoading = () => dispatch({type: 'set loading'});
  const setVisiblePassword = () => dispatch({type: 'set visible password'});
  const setToken = (token: string) =>
    dispatch({type: 'set token', payload: {token}});
  const removeToken = () => dispatch({type: 'remove token'});
  const setDarkTheme = () => dispatch({type: 'set dark theme'});
  const setUser = (user: User) => dispatch({type: 'set user', payload: {user}});
  const setEditable = () => dispatch({type: 'set editable'});
  const setBase64 = (base64: string) =>
    dispatch({type: 'set base64', payload: {base64}});
  const setImageUser = (image: string) =>
    dispatch({type: 'set image user', payload: {image}});

  return {
    authState: state,
    setLoading,
    setVisiblePassword,
    setToken,
    removeToken,
    setDarkTheme,
    setUser,
    setEditable,
    setBase64,
    setImageUser,
  };
};

export default useReducerAuth;
