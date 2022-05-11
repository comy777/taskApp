import {DarkTheme, DefaultTheme} from '@react-navigation/native';

export const DarkThemeStyle = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    text: 'white',
    primary: 'white',
  },
  dark: true,
};

export const DefaultThemeStyle = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    text: 'teal',
    primary: 'white',
  },
  dark: false,
};
