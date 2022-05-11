import {getPaletteSync} from '@assembless/react-native-material-you';
import {StyleSheet, Dimensions} from 'react-native';

const {width: widthComponent} = Dimensions.get('window');

const palette = getPaletteSync();

export const stylesComponent = StyleSheet.create({
  btn: {
    height: 50,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: palette ? palette.system_accent1[6] : 'teal',
    marginTop: 15,
    borderRadius: 15,
  },
  icons: {
    height: 50,
    width: 50,
    backgroundColor: palette ? palette.system_accent1[6] : 'teal',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
    marginBottom: 5,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, .7)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height: 550,
    width: '90%',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  taskComponent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  noteComponent: {
    height: 250,
    borderRadius: 15,
    backgroundColor: palette ? palette.system_accent1[6] : 'teal',
    padding: 15,
    width: widthComponent / 2 - 25,
    margin: 5,
  },
  noteComponentTextTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  noteComponentText: {
    color: 'white',
    fontSize: 16,
  },
  headerContainer: {
    height: 60,
    width: '100%',
    borderRadius: 15,
    marginBottom: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    backgroundColor: palette ? palette.system_accent1[1] : 'teal',
  },
  headerText: {
    color: palette ? palette.system_accent1[6] : 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerImage: {
    height: 50,
    width: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  switchContainerBottom: {
    position: 'absolute',
    bottom: 0,
    margin: 5,
    right: 0,
    left: 0,
  },
  switchContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignContent: 'center',
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  textTitleSettings: {
    textAlign: 'center',
    fontSize: 22,
    color: 'orange',
    fontWeight: 'bold',
  },
  containerImageCenter: {justifyContent: 'center', alignItems: 'center'},
  containerImage: {
    height: 320,
    width: 320,
    backgroundColor: 'white',
    borderRadius: 50,
    marginTop: 15,
  },
  imageSettings: {height: 320, width: 320, resizeMode: 'contain'},
});
