import { AxiosError, AxiosInstance } from 'axios';
import { IDuelParams } from '../dto/IDuelParams';

// Funcoes da aplicacao

/**
 * @author Jose Ricardo Brasileiro Goncalves
 * @modified 12/01/2022
 * @param studentId Recebe o id de um estudante
 * @param duelOwnerId Recebe o id do estudante dono do duelo
 * @brief Verifica se o estudante eh o dono do duelo
 * @returns Retorna true caso o estudante seja o dono e false caso contrario
 */

export const isDuelOwner = (
  studentId: string,
  duelOwnerId: string,
): boolean => {
  return studentId === duelOwnerId;
};

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

// Buscar todos

export const getDuels = async (
  API: AxiosInstance,
  token: string,
  requestSucess: (duel: IDuel[]) => void,
  requestError: () => void,
): Promise<void> => {
  await API.get(`/duels`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then(
    (response) => {
      requestSucess(response.data);
    },
    () => {
      requestError();
    },
  );
};

// Get by id

export const getDuel = async (
  API: AxiosInstance,
  duelId: string,
  token: string,
  requestSucess: (duel: IDuel) => void,
  requestError: () => void,
): Promise<void> => {
  await API.get(`/duels/${duelId}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then(
    (response) => {
      requestSucess(response.data);
    },
    () => {
      requestError();
    },
  );
};

// Delete by id

export const deleteDuel = async (
  API: AxiosInstance,
  duelId: string,
  token: string,
  requestSucess: () => void,
  requestError: () => void,
): Promise<void> => {
  await API.delete(`/duels/${duelId}`, {
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
