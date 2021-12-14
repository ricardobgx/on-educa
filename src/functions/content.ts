import { AxiosInstance } from 'axios';
import { IContent } from '../interfaces/IContent';

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
