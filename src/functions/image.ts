import { AxiosInstance } from 'axios';
import { IImageParams } from '../dto/IImageParams';
import { IImage } from '../interfaces/IImage';

export const createImage = async (
  API: AxiosInstance,
  imageParams: any,
  setImageState: (value: IImage) => void,
  token: string,
): Promise<void> => {
  await API.post(`/images`, imageParams).then(
    (response) => {
      setImageState(response.data);
    },
    (err) => {
      console.log('erro');
    },
  );
};

export const deleteImage = async (
  API: AxiosInstance,
  id: string,
  token: string,
  deleteSucess: () => void,
  deleteError: () => void,
): Promise<void> => {
  await API.delete(`/units/${id}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then(
    () => {
      deleteSucess();
    },
    () => {
      deleteError();
    },
  );
};
