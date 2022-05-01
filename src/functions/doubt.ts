import { AxiosInstance } from 'axios';
import { IDoubtParams } from '../dto/IDoubtParams';

export const getDoubts = async (
  API: AxiosInstance,
  setDoubtsState: (value: IDoubt[]) => void,
  token: string,
): Promise<void> => {
  await API.get(`/doubts`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then((response) => {
    setDoubtsState(response.data);
  });
};

export const getDoubt = async (
  API: AxiosInstance,
  doubtId: string,
  setDoubtState: (value: IDoubt) => void,
  token: string,
): Promise<void> => {
  await API.get(`/doubts/${doubtId}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then((response) => {
    setDoubtState(response.data);
  });
};

export const getDoubtsByContent = async (
  API: AxiosInstance,
  contentId: string,
  setDoubtsState: (value: IDoubt[]) => void,
  token: string,
): Promise<void> => {
  await API.get(`/doubts/content/${contentId}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then((response) => {
    setDoubtsState(response.data);
  });
};

export const createDoubt = async (
  API: AxiosInstance,
  doubtParams: IDoubtParams,
  token: string,
  requestSucess: (value: IDoubt) => void,
): Promise<void> => {
  await API.post('/doubts', doubtParams, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then((response) => {
    requestSucess(response.data);
  });
};

export const updateDoubt = async (
  API: AxiosInstance,
  id: string,
  doubtParams: IDoubtParams,
  token: string,
  updateSucess: () => void,
): Promise<void> => {
  await API.put(`/doubts/${id}`, doubtParams, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then(() => {
    updateSucess();
  });
};

export const deleteDoubt = async (
  API: AxiosInstance,
  id: string,
  token: string,
  deleteSucess: () => void,
): Promise<void> => {
  await API.delete(`/doubts/${id}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then(() => {
    deleteSucess();
  });
};
