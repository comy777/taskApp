import {useReducer} from 'react';
import {mainReducer} from '../reducers/mainReducer';
import {mainInitialState} from '../interfaces/main';

const useReducerMain = () => {
  const [state, dispatch] = useReducer(mainReducer, mainInitialState);
  const setLoading = () => dispatch({type: 'set loading'});
  const setDateTimeVisible = () => dispatch({type: 'set date time visible'});
  const setFabVisible = () => dispatch({type: 'set fab visible'});
  return {
    mainState: state,
    setLoading,
    setDateTimeVisible,
    setFabVisible,
  };
};

export default useReducerMain;
