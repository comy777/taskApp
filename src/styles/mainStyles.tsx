import {StyleSheet} from 'react-native';
import {getPaletteSync} from '@assembless/react-native-material-you';

const palette = getPaletteSync();

export const mainStyles = StyleSheet.create({
  container: {
    padding: 15,
  },
  input: {
    height: 70,
    width: '100%',
    borderRadius: 15,
    borderWidth: 2,
    borderColor: palette ? palette.system_accent1[6] : 'teal',
    marginBottom: 15,
    paddingHorizontal: 15,
    fontSize: 18,
    color: 'teal',
  },
});
