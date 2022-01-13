import { AxiosInstance } from 'axios';
import { IDuelQuestionAnswerParams } from '../dto/IDuelQuestionAnswerParams';
import { IDuelQuestionAnswer } from '../interfaces/IDuelQuestionAnswer';

const entityPath = 'duelQuestionAnswers';

export const createDuelQuestionAnswer = async (
  API: AxiosInstance,
  duelQuestionAnswerParams: IDuelQuestionAnswerParams,
  token: string,
  requestSucess: (value: IDuelQuestionAnswer) => void,
): Promise<void> => {
  await API.post(`/${entityPath}`, duelQuestionAnswerParams, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then((response) => {
    requestSucess(response.data);
  });
};

export const getDuelQuestionAnswers = async (
  API: AxiosInstance,
  token: string,
  requestSucess: (value: IDuelQuestionAnswer[]) => void,
): Promise<void> => {
  await API.get(`/${entityPath}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then((response) => {
    requestSucess(response.data);
  });
};
