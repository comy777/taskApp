import {StackScreenProps} from '@react-navigation/stack';
import {User} from './response';

export interface AuthStateProps {
  token: string | null;
  loading: boolean;
  visiblePassword: boolean;
  darkTheme: boolean;
  user: User | null;
  editable: boolean;
  base64: string;
  imageUser: string;
  setLoading: () => void;
  setVisiblePassword: () => void;
  setToken: (token: string) => void;
  removeToken: () => void;
  setDarkTheme: () => void;
  setUser: (user: User) => void;
  setEditable: () => void;
  setBase64: (base64: string) => void;
  setImageUser: (image: string) => void;
}

export interface AuthState {
  token: string | null;
  loading: boolean;
  visiblePassword: boolean;
  darkTheme: boolean;
  user: User | null;
  editable: boolean;
  base64: string;
  imageUser: string;
}

export const authInitialState: AuthState = {
  token: null,
  loading: false,
  visiblePassword: true,
  darkTheme: false,
  user: null,
  editable: false,
  base64: '',
  imageUser: '',
};

export type AuthActions =
  | {type: 'set loading'}
  | {type: 'set visible password'}
  | {type: 'set token'; payload: {token: string}}
  | {type: 'remove token'}
  | {type: 'set dark theme'}
  | {type: 'set user'; payload: {user: User}}
  | {type: 'set editable'}
  | {type: 'set base64'; payload: {base64: string}}
  | {type: 'set image user'; payload: {image: string}};

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
