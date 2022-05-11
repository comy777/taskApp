import {useContext} from 'react';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {showToast} from '../utils/showToast';
import {MainContext} from '../context/MainContext';
import {apiTask} from '../api/config';

const useImages = () => {
  const {
    setImagePicker,
    setImageUri,
    deleteImagePicker,
    imagePicker,
    deleteImagesCloudinary,
    setFabVisible,
  } = useContext(MainContext);

  const handleGalery = async () => {
    setFabVisible();
    const resp = await launchImageLibrary({
      mediaType: 'photo',
      includeBase64: true,
    });
    if (resp.didCancel) {
      showToast('Cancelado');
      return;
    }
    if (!resp.assets) return;
    const {uri, fileName, type, base64} = resp.assets[0];
    if (base64) {
      setImagePicker({uri, fileName, type, base64});
    }
    if (uri) setImageUri(uri);
  };

  const handleCamera = async () => {
    setFabVisible();
    const resp = await launchCamera({
      mediaType: 'photo',
      includeBase64: true,
    });
    if (resp.didCancel) {
      showToast('Cancelado');
    }
    if (!resp.assets) return;
    const {uri, fileName, type, base64} = resp.assets[0];
    if (base64) {
      setImagePicker({uri, fileName, type, base64});
    }
    if (uri) setImageUri(uri);
  };

  const handleChangeImage = (uri: string) => {
    setImageUri(uri);
  };

  const handleDeleteImage = async (uri: string) => {
    deleteImagesCloudinary({uri});
    deleteImagePicker(uri);
    if (imagePicker.length === 1) {
      setImageUri('');
      return;
    }
    if (imagePicker.length > 0) {
      const data = imagePicker.filter((item, i) => item.uri !== uri);
      data.map((item, i) => {
        if (i === 0) setImageUri(item.uri ? item.uri : '');
      });
    }
  };

  return {
    handleGalery,
    handleCamera,
    handleChangeImage,
    handleDeleteImage,
  };
};

export default useImages;
