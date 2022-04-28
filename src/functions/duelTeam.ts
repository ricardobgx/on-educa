import { AxiosError, AxiosInstance } from 'axios';
import { IDuelTeamParams } from '../dto/IDuelTeamParams';

const entityPath = 'duelTeams';

// Funcoes da aplicacao

/**
 * @author Jose Ricardo Brasileiro Goncalves
 * @modified 12/01/2022
 * @param teams Recebe um array de times de duelo nao ordenados
 * @brief Ordena os times pelo valor do atributo index
 * @returns Retorna o array de times ordenado
 */

export const sortTeams = (teams: IDuelTeam[]): IDuelTeam[] => {
  return teams.sort((teamA, teamB) => (teamA.index > teamB.index ? 1 : -1));
};

/* API functions */

// Create duel

export const createDuelTeam = async (
  API: AxiosInstance,
  duelTeamParams: IDuelTeamParams,
  token: string,
  requestSucess: (duel: IDuel) => void,
  requestError: (err: AxiosError) => void,
): Promise<void> => {
  await API.post(`/${entityPath}`, duelTeamParams, {
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

export const getDuelTeams = async (
  API: AxiosInstance,
  token: string,
  requestSucess: (duelTeams: IDuelTeam[]) => void,
  requestError: () => void,
): Promise<void> => {
  await API.get(`/${entityPath}`, {
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

export const getDuelTeamsByDuelRound = async (
  API: AxiosInstance,
  duelRoundId: string,
  token: string,
  requestSucess: (duelTeams: IDuelTeam[]) => void,
  requestError: () => void,
): Promise<void> => {
  await API.get(`/${entityPath}/duelRound/${duelRoundId}`, {
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

export const getDuelTeam = async (
  API: AxiosInstance,
  duelTeamId: string,
  token: string,
  requestSucess: (duelTeam: IDuelTeam) => void,
  requestError: () => void,
): Promise<void> => {
  await API.get(`/${entityPath}/${duelTeamId}`, {
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

// Atualiza time de duelo

export const updateDuelTeam = async (
  API: AxiosInstance,
  id: string,
  duelTeamParams: IDuelTeamParams,
  token: string,
  requestSucess: () => void,
  requestError: (err: AxiosError) => void,
): Promise<void> => {
  await API.put(`/${entityPath}/${id}`, duelTeamParams, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then(
    (response) => {
      requestSucess();
    },
    (err: AxiosError) => {
      requestError(err);
    },
  );
};
