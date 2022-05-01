import { AxiosInstance } from 'axios';
import { IQuestionParams } from '../dto/IQuestionParams';
import { isDefaultContent } from './entitiesValues';

/** ***************************************************************************
 *
 * Funcoes para os componentes
 *
 **************************************************************************** */

/**
 * @author Jose Ricardo Brasileiro Goncalves
 * @brief Essa funcao valida a questao que esta sendo criada para que nao haja in-
 * consistencias na base de dados. Ela verifica se o conteudo selecionado eh
 * eh valido, se a questao contem uma descricao e se a questao contem alter-
 * nativas.
 */
export const isValidQuestion = (
  description: string,
  content: IContent,
  alternativesDescriptionsLength: number,
): boolean =>
  !isDefaultContent(content) &&
  description.trim() !== '' &&
  alternativesDescriptionsLength > 0;

/** ***************************************************************************
 *
 * Funcoes para o banco de dados
 *
 **************************************************************************** */

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

export const getPracticeQuestions = async (
  API: AxiosInstance,
  contentId: string,
  token: string,
): Promise<IQuestion[]> => {
  const { data } = await API.get(`/questions/practiceQuestions/${contentId}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

  return data;
};

export const createQuestion = async (
  API: AxiosInstance,
  questionParams: IQuestionParams,
  token: string,
  createSucess: (question: IQuestion) => void,
  createError: () => void,
): Promise<void> => {
  await API.post('/questions', questionParams, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then(
    (response) => {
      createSucess(response.data);
    },
    () => {
      createError();
    },
  );
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
