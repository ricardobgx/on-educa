import React from 'react';
import {
  QuestionCardActionsBox,
  EditQuestionButton,
  EditQuestionButtonIcon,
  DeleteQuestionButton,
  DeleteQuestionButtonIcon,
} from './styles';

interface IQuestionCardActionsProps {
  question: IQuestion;
  setQuestion: (value: IQuestion) => void;
  setDeleteQuestionIsVisible: (value: boolean) => void;
}

const QuestionCardActions = (props: IQuestionCardActionsProps): JSX.Element => {
  const { question, setQuestion, setDeleteQuestionIsVisible } = props;

  return (
    <QuestionCardActionsBox>
      <EditQuestionButton
        className="block-shadow-button secondary-action bd-rd-10"
        to={`/questions/${question.id}/edit`}
      >
        <EditQuestionButtonIcon className="fas fa-pen" />
      </EditQuestionButton>
      <DeleteQuestionButton
        className="block-shadow-button main-action bd-rd-10"
        onClick={() => {
          setQuestion(question);
          setDeleteQuestionIsVisible(true);
        }}
      >
        <DeleteQuestionButtonIcon className="fas fa-trash" />
      </DeleteQuestionButton>
    </QuestionCardActionsBox>
  );
};

export default QuestionCardActions;
