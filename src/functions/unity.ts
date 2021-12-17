import { AxiosInstance } from 'axios';
import { IUnityParams } from '../dto/IUnityParams';
import { IUnity } from '../interfaces/IUnity';

export const getUnitsBySubject = async (
  API: AxiosInstance,
  subjectId: string,
  setUnitsState: (value: IUnity[]) => void,
  token: string,
): Promise<void> => {
  await API.get(`/units/subject/${subjectId}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then((response) => {
    setUnitsState(response.data);
  });
};

export const updateUnity = async (
  API: AxiosInstance,
  id: string,
  unityParams: IUnityParams,
  token: string,
  updateSucess: () => void,
  updateError: () => void,
): Promise<void> => {
  await API.put(`/units/${id}`, unityParams, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then(
    () => {
      updateSucess();
    },
    () => {
      updateError();
    },
  );
};

export const deleteUnity = async (
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
