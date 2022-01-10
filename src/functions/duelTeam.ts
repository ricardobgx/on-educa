import { AxiosError, AxiosInstance } from 'axios';
import { IDuelTeamParams } from '../dto/IDuelTeamParams';
import { IDuel } from '../interfaces/IDuel';
import { IDuelTeam } from '../interfaces/IDuelTeam';

const entityPath = 'duelTeams';

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
