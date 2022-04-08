import {MainState, MainActions} from '../interfaces/main';

export const mainReducer = (
  state: MainState,
  action: MainActions,
): MainState => {
  switch (action.type) {
    case 'set loading':
      return {
        ...state,
        loading: !state.loading,
      };
    case 'set date time visible':
      return {
        ...state,
        dateTimeVisible: !state.dateTimeVisible,
      };
    case 'set fab visible':
      return {
        ...state,
        fabVisible: !state.fabVisible,
      };
    default:
      return state;
  }
};
