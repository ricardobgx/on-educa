import React from 'react';
import { SmallMaterialIconOutlined } from '../../App/Icons/MaterialIcons/MaterialIconsOutlined';
import {
  QuestionCardActionsBox,
  EditQuestionButton,
  DeleteQuestionButton,
} from './styles';

interface IQuestionCardActionsProps {
  question: IQuestion;
  setQuestion: (value: IQuestion) => void;
  setDeleteQuestionIsVisible: (value: boolean) => void;
}

const QuestionCardActions = (props: IQuestionCardActionsProps): JSX.Element => {
  const { question, setQuestion, setDeleteQuestionIsVisible } = props;

  return (
    <QuestionCardActionsBox className="supplies-card-actions">
      <EditQuestionButton
        className="supplies-card-action-button block-shadow-button secondary-action bd-rd-10"
        to={`/questions/${question.id}/edit`}
      >
        <SmallMaterialIconOutlined color="" icon="edit" />
      </EditQuestionButton>
      <DeleteQuestionButton
        className="supplies-card-action-button block-shadow-button secondary-action bd-rd-10"
        onClick={() => {
          setQuestion(question);
          setDeleteQuestionIsVisible(true);
        }}
      >
        <SmallMaterialIconOutlined color="" icon="delete" />
      </DeleteQuestionButton>
    </QuestionCardActionsBox>
  );
};

export default QuestionCardActions;
