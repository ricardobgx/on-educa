/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-console */

import React from 'react';
import { Redirect } from 'react-router-dom';
import { IManyAlternativesParams } from '../../../dto/IManyAlternativesParams';
import { IQuestionParams } from '../../../dto/IQuestionParams';
import {
  buildAlternativesFromDescription,
  createManyAlternatives,
  findAlternativeByDescFromArray,
} from '../../../functions/alternative';
import {
  createQuestion as createQuestionData,
  isValidQuestion,
  updateQuestion,
} from '../../../functions/question';
import { updateTeacherWeeklyPerformanceValues } from '../../../functions/teacherWeeklyPerformance';
import OnEducaAPI from '../../../services/api';
import { DEFAULT_QUESTION } from '../../../static/defaultEntitiesValues';
import {
  CancelCreateButton,
  CancelCreateButtonLabel,
  CreateQuestionButton,
  CreateQuestionButtonLabel,
  NewQuestionActionsBox,
} from './styles';

interface INewQuestionActionsProps {
  description: string;
  difficulty: number;
  content: IContent;
  alternativesDescriptions: string[];
  rightAlternativeDescription: string;
  questionWasCreated: boolean;
  setQuestionWasCreated: (value: boolean) => void;
  token: string;
  teacherId: string;
}

const NewQuestionActions = (props: INewQuestionActionsProps): JSX.Element => {
  const {
    description,
    difficulty,
    content,
    alternativesDescriptions,
    rightAlternativeDescription,
    questionWasCreated,
    setQuestionWasCreated,
    token,
    teacherId,
  } = props;

  const updateQuestionSucess = (): void => {
    updateTeacherWeeklyPerformanceValues(
      OnEducaAPI,
      { teacherId, questionsCreatedNumber: 1, dailyXPNumber: 25 },
      token,
      () => {
        setQuestionWasCreated(true);
      },
      () => console.log('erro'),
    );
  };

  const updateQuestionError = (): void => {
    console.log('Erro');
  };

  const createAlternativesSucess = async (
    alternatives: IAlternative[],
  ): Promise<void> => {
    const rightAlternativeFound = findAlternativeByDescFromArray(
      rightAlternativeDescription,
      alternatives,
    );

    console.log(alternatives);
    console.log(rightAlternativeDescription);

    if (!rightAlternativeFound) return;

    const questionParams: IQuestionParams = {
      rightAlternativeId: rightAlternativeFound.id,
    };

    const question = rightAlternativeFound.question || DEFAULT_QUESTION;

    await updateQuestion(
      OnEducaAPI,
      question.id,
      questionParams,
      token,
      updateQuestionSucess,
      updateQuestionError,
    );
  };

  const createAlternativesError = (): void => {
    console.log('erro');
  };

  /** ************************************************************
   * Essa funcao cria as alternativas da questao na base de dados.
   ************************************************************* */

  const createAlternatives = async (questionId: string): Promise<void> => {
    /** ************************************************************************
     * Essa variavel contem as informacoes necessarias para criar as alternati-
     * vas na base de dados.
     ************************************************************************* */

    const alternativesParams: IManyAlternativesParams = {
      alternativesDescriptions: buildAlternativesFromDescription(
        alternativesDescriptions,
      ),
      questionId,
    };

    await createManyAlternatives(
      OnEducaAPI,
      alternativesParams,
      token,
      createAlternativesSucess,
      createAlternativesError,
    );
  };

  /** *************************************************************************
   * Essa funcao  cria as alternativas da questao, ela eh chamada quando a
   * questao eh criada com sucesso. Ela recebe como parametro a questao criada
   * na base de dados.
   ************************************************************************** */

  const createQuestionSucess = (createdQuestion: IQuestion): void => {
    createAlternatives(createdQuestion.id);
  };

  /** **********************************************************************
   * Essa funcao retorna uma mensagem de erro na criacao da questao, ela eh
   * chamada quando nao foi possivel criar a questao na base de dados.
   *********************************************************************** */

  const createQuestionError = (): void => {
    console.log('erro');
  };

  /** *************************************************************************
   * Essa funcao chama a funcao que cria questoes na base de dados passando os
   * parametros necessarios, ela eh chamada quando o usuario aperta em criar
   * questao.
   ************************************************************************** */

  const createQuestion = async (): Promise<void> => {
    /** ***********************************************************************
     * Nessa variavel sao armazenados os parametros necessarios para criar uma
     * questao.
     ************************************************************************ */

    const questionParams: IQuestionParams = {
      description,
      difficulty,
      contentId: content.id,
    };

    await createQuestionData(
      OnEducaAPI,
      questionParams,
      token,
      createQuestionSucess,
      createQuestionError,
    );
  };

  return (
    <NewQuestionActionsBox>
      <CancelCreateButton to="/questions">
        <CancelCreateButtonLabel>Cancelar</CancelCreateButtonLabel>
      </CancelCreateButton>
      <CreateQuestionButton
        style={{
          pointerEvents: isValidQuestion(
            description,
            content,
            alternativesDescriptions.length,
          )
            ? 'auto'
            : 'none',
        }}
        onClick={() => createQuestion()}
      >
        <CreateQuestionButtonLabel>Criar questão</CreateQuestionButtonLabel>
      </CreateQuestionButton>
      {questionWasCreated && <Redirect to="/questions" />}
    </NewQuestionActionsBox>
  );
};

export default NewQuestionActions;
