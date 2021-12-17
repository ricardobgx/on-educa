import { AxiosInstance } from 'axios';
import { ISubject } from '../interfaces/ISubject';

export const getSubject = async (
  API: AxiosInstance,
  id: string,
  token: string,
  setSubjectState: (value: ISubject) => void,
): Promise<void> => {
  await API.get(`/subjects/${id}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then((response) => {
    setSubjectState(response.data);
  });
};
