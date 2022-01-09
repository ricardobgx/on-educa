import { AxiosError, AxiosInstance } from 'axios';
import { IDuelTeamParticipationByDuelParams } from '../dto/IDuelTeamParticipationByDuelParams';
import { IDuelTeamParticipationParams } from '../dto/IDuelTeamParticipationParams';
import { IDuel } from '../interfaces/IDuel';
import { IDuelTeamParticipation } from '../interfaces/IDuelTeamParticipation';

const entityPath = 'duelTeamParts';

/* API functions */

// Create duel

export const createDuelTeamParticipation = async (
  API: AxiosInstance,
  duelTeamPartParams: IDuelTeamParticipationParams,
  token: string,
  requestSucess: (duel: IDuel) => void,
  requestError: (err: AxiosError) => void,
): Promise<void> => {
  await API.post(`/${entityPath}`, duelTeamPartParams, {
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

export const createDuelTeamParticipationByDuel = async (
  API: AxiosInstance,
  duelTeamPartParams: IDuelTeamParticipationByDuelParams,
  token: string,
  requestSucess: () => void,
  requestError: () => void,
): Promise<void> => {
  await API.post(`/${entityPath}/duel`, duelTeamPartParams, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then(
    (response) => {
      requestSucess();
    },
    (err: AxiosError) => {
      requestError();
    },
  );
};

export const getDuelTeamParts = async (
  API: AxiosInstance,
  token: string,
  requestSucess: (duelTeamParts: IDuelTeamParticipation[]) => void,
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

export const getDuelTeamPartsByDuelTeam = async (
  API: AxiosInstance,
  duelTeamId: string,
  token: string,
  requestSucess: (duelTeamParts: IDuelTeamParticipation[]) => void,
  requestError: () => void,
): Promise<void> => {
  await API.get(`/${entityPath}/duelTeam/${duelTeamId}`, {
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

export const getDuelTeamPart = async (
  API: AxiosInstance,
  duelTeamPartId: string,
  token: string,
  requestSucess: (duelTeamPart: IDuelTeamParticipation) => void,
  requestError: () => void,
): Promise<void> => {
  await API.get(`/${entityPath}/${duelTeamPartId}`, {
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

// Atualiza participacao em time de duelo

export const updateDuelTeamParticipation = async (
  API: AxiosInstance,
  id: string,
  duelTeamPartParams: IDuelTeamParticipationParams,
  token: string,
  requestSucess: () => void,
  requestError: (err: AxiosError) => void,
): Promise<void> => {
  await API.put(`/${entityPath}/${id}`, duelTeamPartParams, {
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
