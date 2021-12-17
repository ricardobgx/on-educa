import { AxiosError, AxiosInstance } from 'axios';
import { IDuelParams } from '../dto/IDuelParams';
import { IDuel } from '../interfaces/IDuel';

/* API functions */

// Create duel

export const createDuel = async (
  API: AxiosInstance,
  duelParams: IDuelParams,
  token: string,
  requestSucess: (duel: IDuel) => void,
  requestError: (err: AxiosError) => void,
): Promise<void> => {
  await API.post('/duels', duelParams, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then(
    (response) => {
      requestSucess(response.data);
    },
    (err: AxiosError) => {
      requestError(err);
    },
  );
};
