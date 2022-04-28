/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-console */

import { AxiosInstance } from 'axios';

export const createImage = async (
  API: AxiosInstance,
  imageParams: any,
  setImageState: (value: IImage) => void,
  token: string,
): Promise<void> => {
  await API.post(`/images`, imageParams, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then(
    (response) => {
      setImageState(response.data);
    },
    () => {
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
