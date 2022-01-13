import { AxiosInstance } from 'axios';
import { IDuelRoundParams } from '../dto/IDuelRoundParams';
import { DuelRoundStatus } from '../types/duelRoundStatus';

const entityPath = 'duelRounds';

export const duelRoundIsStarted = (status: number): boolean => {
  return status === DuelRoundStatus.STARTED;
};

export const duelRoundIsWaiting = (status: number): boolean => {
  return status === DuelRoundStatus.WAITING;
};

export const duelRoundIsFinished = (status: number): boolean => {
  return status === DuelRoundStatus.FINISHED;
};

export const duelRoundStatusLabel = (status: number): string => {
  switch (status) {
    case DuelRoundStatus.WAITING: {
      return 'Esperando';
    }
    case DuelRoundStatus.STARTED: {
      return 'Iniciado';
    }
    default: {
      return 'Terminado';
    }
  }
};

export const duelRoundStatusIcon = (status: number): string => {
  switch (status) {
    case DuelRoundStatus.WAITING: {
      return 'hourglass-start';
    }
    case DuelRoundStatus.STARTED: {
      return 'play';
    }
    default: {
      return 'check';
    }
  }
};

export const updateDuelRound = async (
  API: AxiosInstance,
  duelRoundId: string,
  duelRoundParams: IDuelRoundParams,
  token: string,
  updateSucess: () => void,
): Promise<void> => {
  await API.put(`/${entityPath}/${duelRoundId}`, duelRoundParams, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then(() => {
    updateSucess();
  });
};

export const startDuelRound = async (
  API: AxiosInstance,
  duelRoundId: string,
  token: string,
  updateSucess: () => void,
): Promise<void> => {
  await API.put(`/${entityPath}/start/${duelRoundId}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then(() => {
    updateSucess();
  });
};
