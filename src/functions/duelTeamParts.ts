import { AxiosError, AxiosInstance } from 'axios';
import { IChangeDuelTeamPositionParams } from '../dto/IChangeDuelTeamPositionParams';
import { IDuelTeamParticipationParams } from '../dto/IDuelTeamParticipationParams';
import { IParticipateInDuelParams } from '../dto/IParticipateInDuelParams';
import { DEFAULT_DUEL_TEAM_PARTICIPATION } from '../static/defaultEntitiesValues';
import { isDefaultDuelTeamParticipation } from './entitiesValues';

const entityPath = 'duelTeamParts';

/* Funcoes da aplicacao */

export const findStudentDuelPartByTeams = (
  teams: IDuelTeam[],
  student: IStudent,
): IDuelTeamParticipation => {
  let studentParticipation: IDuelTeamParticipation =
    DEFAULT_DUEL_TEAM_PARTICIPATION;

  teams.map((team) => {
    if (isDefaultDuelTeamParticipation(studentParticipation)) {
      studentParticipation =
        team.participations.find(
          // Itera em cada participacao
          (participation) => {
            /** **************************************************************
             * Verifica se a participacao possui um estudante, caso sim, veri-
             * fica se eh a participacao procurada
             *************************************************************** */
            return (
              participation.student && participation.student.id === student.id
            );
          },
        ) || studentParticipation;
    }
    return team;
  });

  // Caso nao encontre, retorna o antigo valor

  return studentParticipation;
};

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

export const participateInDuel = async (
  API: AxiosInstance,
  participateInDuelParams: IParticipateInDuelParams,
  token: string,
  requestSucess: (duelTeamParticipation: IDuelTeamParticipation) => void,
): Promise<void> => {
  await API.post(`/${entityPath}/duel`, participateInDuelParams, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then((response) => {
    requestSucess(response.data);
  });
};

export const removeParticipant = async (
  API: AxiosInstance,
  duelTeamPartId: string,
  token: string,
  requestSucess: () => void,
): Promise<void> => {
  await API.put(`/${entityPath}/removeParticipant/${duelTeamPartId}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then(() => {
    requestSucess();
  });
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
    () => {
      requestSucess();
    },
    (err: AxiosError) => {
      requestError(err);
    },
  );
};

// Muda a posicao de um estudante em um team de duelo

export const changeDuelTeamPosition = async (
  API: AxiosInstance,
  changeDuelTeamPositionParams: IChangeDuelTeamPositionParams,
  token: string,
  requestSucess: () => void,
  requestError: (err: AxiosError) => void,
): Promise<void> => {
  await API.put(`/${entityPath}/changePosition`, changeDuelTeamPositionParams, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then(
    () => {
      requestSucess();
    },
    (err: AxiosError) => {
      requestError(err);
    },
  );
};
