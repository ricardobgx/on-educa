import React from 'react';
import { ICommonQuestionProps } from '../../../pages/Questions';
import { SmallMaterialIconOutlined } from '../../App/Icons/MaterialIcons/MaterialIconsOutlined';
import DeleteQuestionPopup from '../DeleteQuestion';
import {
  QuestionCardActionsBox,
  EditQuestionButton,
  DeleteQuestionButton,
} from './styles';

interface IQuestionCardActionsProps extends ICommonQuestionProps {
  question: IQuestion;
  loadPopup: (popup: IPopup) => void;
}

const QuestionCardActions = (props: IQuestionCardActionsProps): JSX.Element => {
  const { question, getQuestions, loadPopup } = props;

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
          loadPopup({
            title: 'Excluir questão',
            Children: DeleteQuestionPopup,
            childrenProps: { question, getQuestions },
          });
        }}
      >
        <SmallMaterialIconOutlined color="" icon="delete" />
      </DeleteQuestionButton>
    </QuestionCardActionsBox>
  );
};

export default QuestionCardActions;
