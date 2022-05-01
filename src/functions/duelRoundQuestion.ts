import { AxiosInstance } from 'axios';

const entityPath = 'duelRoundQuestions';

export const getDuelRoundQuestionsByDuelRound = async (
  API: AxiosInstance,
  duelRoundId: string,
  token: string,
  requestSucess: (value: IDuelRoundQuestion[]) => void,
): Promise<void> => {
  await API.get(`/${entityPath}/duelRound/${duelRoundId}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then((response) => {
    requestSucess(response.data);
  });
};
