import { AxiosInstance } from 'axios';
import { IUnityParams } from '../dto/IUnityParams';

export const getUnits = async (
  API: AxiosInstance,
  setUnitsState: (value: IUnity[]) => void,
  token: string,
): Promise<void> => {
  await API.get(`/units`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then((response) => {
    setUnitsState(response.data);
  });
};

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

export const createUnity = async (
  API: AxiosInstance,
  unityParams: IUnityParams,
  token: string,
  requestSucess: () => void,
  requestError: () => void,
): Promise<void> => {
  await API.post('/units', unityParams, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then(
    () => {
      requestSucess();
    },
    () => {
      requestError();
    },
  );
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
