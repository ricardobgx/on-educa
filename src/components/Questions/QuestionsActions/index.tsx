import React from 'react';
import { isStudent } from '../../../functions/user';
import {
  QuestionsActionsBox,
  SearchQuestions,
  SearchQuestionsInputBox,
  SearchQuestionsInput,
  ClearSearchQuestionsInputButton,
  ClearSearchQuestionsInputButtonIcon,
  SearchQuestionsButton,
  SearchQuestionsButtonIcon,
  NewQuestionButton,
  NewQuestionButtonLabel,
  NewQuestionButtonIcon,
  QuestionsFiltersButton,
  QuestionsFiltersButtonLabel,
  QuestionsFiltersButtonIcon,
  Container,
} from './styles';

interface IQuestionActionsProps {
  userType: string;
}

const QuestionsActions = (props: IQuestionActionsProps): JSX.Element => {
  /* Props */

  const { userType } = props;

  return (
    <Container>
      <SearchQuestions>
        <SearchQuestionsInputBox>
          <SearchQuestionsInput
            type="text"
            placeholder="Digite algo (descrição da questão)"
          />
          <ClearSearchQuestionsInputButton>
            <ClearSearchQuestionsInputButtonIcon className="fas fa-times" />
          </ClearSearchQuestionsInputButton>
        </SearchQuestionsInputBox>
        <SearchQuestionsButton>
          <SearchQuestionsButtonIcon className="fas fa-search" />
        </SearchQuestionsButton>
      </SearchQuestions>
      {!isStudent(userType) && (
        <QuestionsActionsBox>
          <NewQuestionButton to="/new-question">
            <NewQuestionButtonLabel>Nova questão</NewQuestionButtonLabel>
            <NewQuestionButtonIcon className="fas fa-plus" />
          </NewQuestionButton>
          <QuestionsFiltersButton>
            <QuestionsFiltersButtonLabel>Filtrar</QuestionsFiltersButtonLabel>
            <QuestionsFiltersButtonIcon className="fas fa-sliders-h" />
          </QuestionsFiltersButton>
        </QuestionsActionsBox>
      )}
    </Container>
  );
};

export default QuestionsActions;
