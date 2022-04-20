import { AxiosInstance } from 'axios';
import { IDoubtCommentParams } from '../dto/IDoubtCommentParams';
import { IDoubtComment } from '../interfaces/IDoubtComment';

export const getDoubtComments = async (
  API: AxiosInstance,
  setDoubtCommentsState: (value: IDoubtComment[]) => void,
  token: string,
): Promise<void> => {
  await API.get(`/doubtComments`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then((response) => {
    setDoubtCommentsState(response.data);
  });
};

export const getDoubtComment = async (
  API: AxiosInstance,
  doubtId: string,
  token: string,
): Promise<IDoubtComment | null> => {
  const { data } = await API.get(`/doubtComments/${doubtId}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

  return data;
};

export const getDoubtCommentsByDoubt = async (
  API: AxiosInstance,
  doubtId: string,
  token: string,
): Promise<IDoubtComment[]> => {
  let doubtComments = null;

  doubtComments = await API.get(`/doubtComments/doubt/${doubtId}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then((response) => response.data);

  return doubtComments;
};

export const createDoubtComment = async (
  API: AxiosInstance,
  doubtParams: IDoubtCommentParams,
  token: string,
): Promise<IDoubtComment> => {
  const { data } = await API.post('/doubtComments', doubtParams, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

  return data;
};

export const updateDoubtComment = async (
  API: AxiosInstance,
  id: string,
  doubtParams: IDoubtCommentParams,
  token: string,
  updateSucess: () => void,
  updateError: () => void,
): Promise<void> => {
  await API.put(`/doubtComments/${id}`, doubtParams, {
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

export const deleteDoubtComment = async (
  API: AxiosInstance,
  id: string,
  token: string,
  deleteSucess: () => void,
  deleteError: () => void,
): Promise<void> => {
  await API.delete(`/doubtComments/${id}`, {
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
