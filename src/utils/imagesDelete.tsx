import {apiTask} from '../api/config';
import {UriImage} from '../interfaces/response';
import {ImagePicker} from '../interfaces/main';

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

export const validatImages = (images: ImagePicker[]) => {
  let dataSubir: ImagePicker[] = [];
  let dataNoSubir: UriImage[] = [];
  let contador1 = 0;
  let contador2 = 0;
  images.map((item, i) => {
    if (!item.uri) return;
    const name = item.uri.split('/');
    const dataExeptSave = name[0];
    if (dataExeptSave.includes('https:')) {
      dataNoSubir[contador1] = {uri: item.uri};
      contador1++;
    } else {
      dataSubir[contador2] = item;
      contador2++;
    }
  });
  return {
    dataSubir,
    dataNoSubir,
  };
};

export const deleteImageCloudinary = async (image: string) => {
  const id = image.split('/');
  const [public_id] = id[id.length - 1].split('.');
  await apiTask.delete(`/upload/${public_id}`);
};
