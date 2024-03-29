import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { IManyAlternativesParams } from '../../../dto/IManyAlternativesParams';
import { IQuestionParams } from '../../../dto/IQuestionParams';
import {
  buildAlternativesFromDescription,
  createManyAlternatives,
  deleteAlternative,
  findAlternativeByDescFromArray,
} from '../../../functions/alternative';
import {
  updateQuestion as updateQuestionData,
  isValidQuestion,
} from '../../../functions/question';
import OnEducaAPI from '../../../services/api';
import { ActionCreators, RootState } from '../../../store';
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

  const { aplication } = useSelector((store: RootState) => store);

  const { token } = aplication;

  const dispatch = useDispatch();
  const { showFloatNotification } = bindActionCreators(
    ActionCreators,
    dispatch,
  );

  /* Functions */

  const deleteOldAlternatives = async (): Promise<void> => {
    await Promise.all(
      oldAlternatives.map(async (oldAlternative) => {
        await deleteAlternative(
          OnEducaAPI,
          oldAlternative.id,
          token,
          () => showFloatNotification('Alternativas antigas excluídas'),
          () =>
            showFloatNotification(
              'Ocorreu um erro ao excluir as alternativas antigas',
            ),
        );
      }),
    ).then(() => {
      setQuestionWasUpdated(true);
    });
  };

  const updateRightAlternativeQuestionSucess = (): void => {
    deleteOldAlternatives();
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
      () => showFloatNotification('Ocorreu um erro ao atualizar a questão'),
    );
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
      () => showFloatNotification('Erro ao atualizar as alternativas'),
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
      () => showFloatNotification('Erro ao atualizar questão'),
    );
  };

  return (
    <EditQuestionActionsBox>
      <CancelEditButton
        className="block-shadow-button secondary-action bd-rd-20"
        to="/questions"
      >
        <CancelEditButtonLabel>Cancelar</CancelEditButtonLabel>
      </CancelEditButton>
      <UpdateQuestionButton
        className="block-shadow-button secondary-action bd-rd-20"
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
