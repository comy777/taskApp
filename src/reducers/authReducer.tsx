import {AuthActions, AuthState} from '../interfaces/auth';

export const authReducer = (
  state: AuthState,
  action: AuthActions,
): AuthState => {
  switch (action.type) {
    case 'set loading':
      return {
        ...state,
        loading: !state.loading,
      };
    case 'set visible password':
      return {
        ...state,
        visiblePassword: !state.visiblePassword,
      };
    case 'set token':
      return {
        ...state,
        token: action.payload.token,
      };
    case 'remove token':
      return {
        ...state,
        token: null,
      };
    default:
      return state;
  }
};
