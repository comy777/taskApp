import {StackScreenProps} from '@react-navigation/stack';

export interface AuthStateProps {
  token: string | null;
  loading: boolean;
  visiblePassword: boolean;
  setLoading: () => void;
  setVisiblePassword: () => void;
  setToken: (token: string) => void;
  removeToken: () => void;
}

export interface AuthState {
  token: string | null;
  loading: boolean;
  visiblePassword: boolean;
}

export const authInitialState: AuthState = {
  token: null,
  loading: false,
  visiblePassword: true,
};

export type AuthActions =
  | {type: 'set loading'}
  | {type: 'set visible password'}
  | {type: 'set token'; payload: {token: string}}
  | {type: 'remove token'};

export interface AuthStackProps extends StackScreenProps<any, any> {}

export interface UserAuth {
  username?: string;
  email: string;
  password: string;
  repeatPassword?: string;
}

export interface Login {
  email: string;
  password: string;
}
