import {UriImage} from '../interfaces/response';
import {ImagePicker} from '../interfaces/main';
import {TaskStorage} from '../interfaces/task';
import axios from 'axios';
import {apiTask} from '../api/config';

export const deleteImagesCloudinary = (images: UriImage[]) => {
  if (images.length > 0) {
    images.map(async i => {
      if (!i.uri) return;
      const id = i.uri.split('/');
      const [public_id] = id[id.length - 1].split('.');
      await apiTask.delete(`/upload/${public_id}`);
    });
  }
};

export const saveImagesCloudinary = async (
  images: ImagePicker[],
  setImages: (images: UriImage[], task: TaskStorage) => void,
  task: TaskStorage,
) => {
  const saveImages: ImagePicker[] = [];
  let contador = 0;

  images.map((item, i) => {
    if (!item.uri) return;
    const searchSlash = item.uri.split('/');
    if (!searchSlash.includes('https:')) {
      saveImages[contador] = item;
      contador++;
    }
  });

  const imagenes = images.filter(i => {
    if (!i.uri) return;
    const data = i.uri.split('/');
    if (data.includes('https:')) return i;
  });

  if (saveImages.length > 0 && images.length > 0) {
    const imagenesData: ImagePicker[] = [];
    const data = imagenes.concat([...saveImages]);
    data.map((item, i) => {
      imagenesData[i] = item;
    });
    await saveImagesApi(imagenesData, setImages, task);
  }

  if (saveImages.length === 0) {
    const data: UriImage[] = [];
    imagenes.map((item, i) => {
      if (!item.uri) return;
      data[i] = {uri: item.uri};
    });
    await setImages(data, task);
  }
};

const saveImagesApi = async (
  images: ImagePicker[],
  setImages: (images: UriImage[], task: TaskStorage) => void,
  task: TaskStorage,
) => {
  const imagenesSubir: ImagePicker[] = [];
  let contador = 0;
  images.map((item, i) => {
    if (!item.uri) return;
    const splitName = item.uri.split('/');
    if (!splitName.includes('https:')) {
      imagenesSubir[contador] = item;
      contador++;
    }
  });

  const urlCloudinary =
    'https://api.cloudinary.com/v1_1/djtqfpw2e/image/upload';
  try {
    let data: UriImage[] = [];
    let contador = 0;
    imagenesSubir.map((item, i) => {
      (async () => {
        const {base64} = item;
        let base64Img = `data:image/jpg;base64,${base64}`;
        const dataImage = {file: base64Img, upload_preset: 'instaclone'};
        const resp = await axios.post(`${urlCloudinary}`, dataImage);
        data[contador] = {uri: resp.data.secure_url};
        contador++;
        if (contador === imagenesSubir.length) {
          let contador2 = contador;
          images.map(i => {
            if (!i.uri) return;
            const name = i.uri.split('/');
            if (name.includes('https:')) {
              data[contador2] = {uri: i.uri ? i.uri : ''};
              contador2++;
            }
          });
          setImages(data, task);
        }
      })();
    });
  } catch (error) {
    console.log(error);
  }
};

export const saveImage = async (base64: string) => {
  try {
    const urlCloudinary =
      'https://api.cloudinary.com/v1_1/djtqfpw2e/image/upload';
    let base64Img = `data:image/jpg;base64,${base64}`;
    const dataImage = {file: base64Img, upload_preset: 'instaclone'};
    const resp = await axios.post(`${urlCloudinary}`, dataImage);
    if (!resp) return false;
    return resp.data.secure_url;
  } catch (error) {
    console.log(error);
  }
};
