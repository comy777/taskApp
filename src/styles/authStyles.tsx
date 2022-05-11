import {StyleSheet} from 'react-native';
import {getPaletteSync} from '@assembless/react-native-material-you';

const palette = getPaletteSync();

export const authStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    justifyContent: 'center',
  },
  input: {
    height: 70,
    width: '100%',
    borderRadius: 15,
    borderWidth: 2,
    borderColor: 'teal',
    marginBottom: 15,
    paddingHorizontal: 15,
    fontSize: 18,
    color: 'teal',
  },
  inputIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputText: {
    fontSize: 18,
    color: 'teal',
  },
  btnContainer: {
    height: 70,
    width: 220,
    justifyContent: 'center',
    backgroundColor: 'teal',
    alignItems: 'center',
    borderRadius: 15,
    marginVertical: 15,
  },
  btnText: {
    color: palette ? palette.system_accent1[4] : 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  btnViewContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
