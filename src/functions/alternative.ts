import { AxiosInstance } from 'axios';
import { IAlternativeParams } from '../dto/IAlternativeParams';
import { IManyAlternativesParams } from '../dto/IManyAlternativesParams';
import { IAlternative } from '../interfaces/IAlternative';

export const getAlternative = async (
  API: AxiosInstance,
  id: string,
  token: string,
  setAlternativeState: (value: IAlternative) => void,
): Promise<void> => {
  await API.get(`/alternatives/${id}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then((response) => {
    setAlternativeState(response.data);
  });
};

export const getAlternatives = async (
  API: AxiosInstance,
  setAlternativesState: (Alternatives: IAlternative[]) => void,
  token: string,
): Promise<void> => {
  await API.get('/alternatives', {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then((response) => {
    setAlternativesState(response.data);
  });
};

export const getAlternativesByQuestion = async (
  API: AxiosInstance,
  questionId: string,
  setAlternativesState: (value: IAlternative[]) => void,
  token: string,
): Promise<void> => {
  await API.get(`/alternatives/question/${questionId}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then((response) => {
    setAlternativesState(response.data);
  });
};

export const createAlternative = async (
  API: AxiosInstance,
  alternativeParams: IAlternativeParams,
  token: string,
  createSucess: () => void,
  createError: () => void,
): Promise<void> => {
  await API.post('/alternatives', alternativeParams, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then(() => {
    createSucess();
  });
};

export const createManyAlternatives = async (
  API: AxiosInstance,
  alternativesParams: IManyAlternativesParams,
  token: string,
  createSucess: () => void,
  createError: () => void,
): Promise<void> => {
  await API.post('/alternatives/many', alternativesParams, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then(() => {
    createSucess();
  });
};

export const updateAlternative = async (
  API: AxiosInstance,
  id: string,
  alternativeParams: IAlternativeParams,
  token: string,
  updateSucess: () => void,
  updateError: () => void,
): Promise<void> => {
  await API.put(`/alternatives/${id}`, alternativeParams, {
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

export const deleteAlternative = async (
  API: AxiosInstance,
  id: string,
  token: string,
  deleteSucess: () => void,
  deleteError: () => void,
): Promise<void> => {
  await API.delete(`/alternatives/${id}`, {
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
