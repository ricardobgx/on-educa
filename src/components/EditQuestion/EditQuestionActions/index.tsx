import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { IManyAlternativesParams } from '../../../dto/IManyAlternativesParams';
import { IQuestionParams } from '../../../dto/IQuestionParams';
import {
  buildAlternativesFromDescription,
  createManyAlternatives,
  deleteAlternative,
  findAlternativeByDescFromArray,
} from '../../../functions/alternative';
import { isDefaultContent } from '../../../functions/entitiesValues';
import {
  updateQuestion as updateQuestionData,
  isValidQuestion,
} from '../../../functions/question';
import { IAlternative } from '../../../interfaces/IAlternative';
import { IContent } from '../../../interfaces/IContent';
import { IQuestion } from '../../../interfaces/IQuestion';
import OnEducaAPI from '../../../services/api';
import { State } from '../../../store';
import {
  CancelEditButton,
  CancelEditButtonLabel,
  EditQuestionActionsBox,
  UpdateQuestionButton,
  UpdateQuestionButtonLabel,
} from './styles';

interface IEditQuestionActionsProps {
  id: string;
  description: string;
  difficulty: number;
  alternativesDescriptions: string[];
  oldAlternatives: IAlternative[];
  rightAlternativeDescription: string;
  content: IContent;
  questionWasUpdated: boolean;
  setQuestionWasUpdated: (value: boolean) => void;
}

const EditQuestionActions = (props: IEditQuestionActionsProps): JSX.Element => {
  const {
    id,
    description,
    difficulty,
    alternativesDescriptions,
    oldAlternatives,
    rightAlternativeDescription,
    content,
    questionWasUpdated,
    setQuestionWasUpdated,
  } = props;

  const { aplication } = useSelector((store: State) => store);

  const { token } = aplication;

  /* Functions */

  const deleteOldAlternatives = async (): Promise<void> => {
    await Promise.all(
      oldAlternatives.map(async (oldAlternative) => {
        await deleteAlternative(
          OnEducaAPI,
          oldAlternative.id,
          token,
          () => console.log(''),
          () => console.log('error'),
        );
      }),
    ).then(() => {
      setQuestionWasUpdated(true);
    });
  };

  const updateRightAlternativeQuestionSucess = (): void => {
    deleteOldAlternatives();
  };

  const updateRightAlternativeQuestionError = (): void => {
    console.log('Erro');
  };

  const createAlternativesSucess = async (
    alternatives: IAlternative[],
  ): Promise<void> => {
    const rightAlternativeFound = findAlternativeByDescFromArray(
      rightAlternativeDescription,
      alternatives,
    );

    if (!rightAlternativeFound) return;

    const questionParams: IQuestionParams = {
      rightAlternativeId: rightAlternativeFound.id,
    };

    await updateQuestionData(
      OnEducaAPI,
      id,
      questionParams,
      token,
      updateRightAlternativeQuestionSucess,
      updateRightAlternativeQuestionError,
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

  const updateQuestionSucess = (): void => {
    createAlternatives(id);
  };

  /** **********************************************************************
   * Essa funcao retorna uma mensagem de erro na criacao da questao, ela eh
   * chamada quando nao foi possivel criar a questao na base de dados.
   *********************************************************************** */

  const updateQuestionError = (): void => {
    console.log('erro');
  };

  /** *************************************************************************
   * Essa funcao chama a funcao que cria questoes na base de dados passando os
   * parametros necessarios, ela eh chamada quando o usuario aperta em criar
   * questao.
   ************************************************************************** */

  const updateQuestion = async (): Promise<void> => {
    /** ***********************************************************************
     * Nessa variavel sao armazenados os parametros necessarios para criar uma
     * questao.
     ************************************************************************ */

    const questionParams: IQuestionParams = {
      description,
      difficulty,
      contentId: content.id,
    };

    await updateQuestionData(
      OnEducaAPI,
      id,
      questionParams,
      token,
      updateQuestionSucess,
      updateQuestionError,
    );
  };

  return (
    <EditQuestionActionsBox>
      <CancelEditButton to="/questions">
        <CancelEditButtonLabel>Cancelar</CancelEditButtonLabel>
      </CancelEditButton>
      <UpdateQuestionButton
        style={{
          pointerEvents: isValidQuestion(
            description,
            content,
            alternativesDescriptions.length,
          )
            ? 'auto'
            : 'none',
        }}
        onClick={() => updateQuestion()}
      >
        <UpdateQuestionButtonLabel>Atualizar questão</UpdateQuestionButtonLabel>
      </UpdateQuestionButton>
      {questionWasUpdated && <Redirect to="/questions" />}
    </EditQuestionActionsBox>
  );
};

export default EditQuestionActions;
