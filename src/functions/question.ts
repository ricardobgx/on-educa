import { AxiosInstance } from 'axios';
import { IQuestionParams } from '../dto/IQuestionParams';
import { IQuestion } from '../interfaces/IQuestion';

export const getQuestion = async (
  API: AxiosInstance,
  id: string,
  token: string,
  setQuestionState: (value: IQuestion) => void,
): Promise<void> => {
  await API.get(`/questions/${id}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then((response) => {
    setQuestionState(response.data);
  });
};

export const getQuestions = async (
  API: AxiosInstance,
  setQuestionsState: (questions: IQuestion[]) => void,
  token: string,
  name?: string,
): Promise<void> => {
  await API.get(`/questions${name ? `?name=${name}` : ''}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then((response) => {
    setQuestionsState(response.data);
  });
};

export const getQuestionsByContent = async (
  API: AxiosInstance,
  contentId: string,
  setQuestionsState: (value: IQuestion[]) => void,
  token: string,
): Promise<void> => {
  await API.get(`/questions/content/${contentId}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then((response) => {
    setQuestionsState(response.data);
  });
};

export const createQuestion = async (
  API: AxiosInstance,
  questionParams: IQuestionParams,
  token: string,
  createSucess: () => void,
  createError: () => void,
): Promise<void> => {
  await API.post('/questions', questionParams, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then(() => {
    createSucess();
  });
};

export const updateQuestion = async (
  API: AxiosInstance,
  id: string,
  questionParams: IQuestionParams,
  token: string,
  updateSucess: () => void,
  updateError: () => void,
): Promise<void> => {
  await API.put(`/questions/${id}`, questionParams, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then(
    () => {
      updateSucess();
    },
    () => {
      updateError();
    },
  );
};

export const deleteQuestion = async (
  API: AxiosInstance,
  id: string,
  token: string,
  deleteSucess: () => void,
  deleteError: () => void,
): Promise<void> => {
  await API.delete(`/questions/${id}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then(
    () => {
      deleteSucess();
    },
    () => {
      deleteError();
    },
  );
};
