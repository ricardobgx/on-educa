import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteQuestion as deleteQuestionData } from '../../../functions/question';
import { ICommonQuestionProps } from '../../../pages/Questions';
import OnEducaAPI from '../../../services/api';
import { ActionCreators, RootState } from '../../../store';
import {
  QuestionPopupBox,
  QuestionPopupButton,
  QuestionPopupButtonLabel,
  QuestionPopupActions,
  QuestionPopupLabel,
} from '../styles';

interface IQuestionPopupProps extends ICommonQuestionProps {
  question: IQuestion;
}

const DeleteQuestionPopup = (props: IQuestionPopupProps): JSX.Element => {
  /* Props */

  const { question, getQuestions } = props;

  /* GlobalRootState */

  const { aplication } = useSelector((store: RootState) => store);

  const { token } = aplication;

  const dispatch = useDispatch();
  const { showFloatNotification, closePopup } = bindActionCreators(
    ActionCreators,
    dispatch,
  );

  const deleteSucess = (): void => {
    getQuestions();
    closePopup();
  };

  const deleteError = (): void => {
    showFloatNotification('Ocorreu um erro');
  };

  const deleteQuestion = async (): Promise<void> => {
    deleteQuestionData(
      OnEducaAPI,
      question.id,
      token,
      deleteSucess,
      deleteError,
    );
  };

  return (
    <QuestionPopupBox>
      <QuestionPopupLabel>
        Tem certeza que deseja excluir a questão? Todos as informações
        associadas à essa questão serão excluidas
      </QuestionPopupLabel>
      <QuestionPopupActions>
        <QuestionPopupButton
          className="block-shadow-button secondary-action bd-rd-20"
          onClick={() => closePopup()}
        >
          <QuestionPopupButtonLabel>Cancelar</QuestionPopupButtonLabel>
        </QuestionPopupButton>
        <QuestionPopupButton
          className="block-shadow-button main-action bd-rd-20"
          onClick={() => deleteQuestion()}
        >
          <QuestionPopupButtonLabel>Excluir</QuestionPopupButtonLabel>
        </QuestionPopupButton>
      </QuestionPopupActions>
    </QuestionPopupBox>
  );
};

export default DeleteQuestionPopup;
