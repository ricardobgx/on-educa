import { AxiosInstance } from 'axios';
import { IContentParams } from '../dto/IContentParams';

export const getContent = async (
  API: AxiosInstance,
  id: string,
  token: string,
  setContentState: (value: IContent) => void,
): Promise<void> => {
  await API.get(`/contents/${id}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then((response) => {
    setContentState(response.data);
  });
};

export const getContents = async (
  API: AxiosInstance,
  setContentsState: (contents: IContent[]) => void,
  token: string,
  name?: string,
): Promise<void> => {
  await API.get(`/contents${name ? `?name=${name}` : ''}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then((response) => {
    setContentsState(response.data);
  });
};

export const getContentsByUnity = async (
  API: AxiosInstance,
  unityId: string,
  setContentsState: (value: IContent[]) => void,
  token: string,
): Promise<void> => {
  await API.get(`/contents/unity/${unityId}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then((response) => {
    setContentsState(response.data);
  });
};

export const createContent = async (
  API: AxiosInstance,
  contentParams: IContentParams,
  token: string,
  createSucess: () => void,
  createError: () => void,
): Promise<void> => {
  await API.post('/contents', contentParams, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then(() => {
    createSucess();
  });
};

export const updateContent = async (
  API: AxiosInstance,
  id: string,
  contentParams: IContentParams,
  token: string,
  updateSucess: () => void,
  updateError: () => void,
): Promise<void> => {
  await API.put(`/contents/${id}`, contentParams, {
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

export const deleteContent = async (
  API: AxiosInstance,
  id: string,
  token: string,
  deleteSucess: () => void,
  deleteError: () => void,
): Promise<void> => {
  await API.delete(`/contents/${id}`, {
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
