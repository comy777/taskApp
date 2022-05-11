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
        user: null,
      };
    case 'set dark theme':
      return {
        ...state,
        darkTheme: !state.darkTheme,
      };
    case 'set user':
      return {
        ...state,
        user: action.payload.user,
      };
    case 'set editable':
      return {
        ...state,
        editable: !state.editable,
      };
    case 'set base64':
      return {
        ...state,
        base64: action.payload.base64,
      };
    case 'set image user':
      return {
        ...state,
        imageUser: action.payload.image,
      };
    default:
      return state;
  }
};
