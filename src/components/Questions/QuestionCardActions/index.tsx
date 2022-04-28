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
      <EditQuestionButton to={`/questions/${question.id}/edit`}>
        <EditQuestionButtonIcon className="fas fa-pen" />
      </EditQuestionButton>
      <DeleteQuestionButton
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
