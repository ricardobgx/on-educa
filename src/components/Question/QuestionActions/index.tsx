import React from 'react';
import { isDefaultAlternative } from '../../../functions/entitiesValues';
import { DEFAULT_ALTERNATIVE } from '../../../static/defaultEntitiesValues';
import {
  QuestionActionsBox,
  QuestionActionButton,
  QuestionActionButtonLabel,
} from './styles';

interface IPracticeQuestionActionsProps {
  selectedAlternative: IAlternative;
  setSelectedAlternative: (alternative: IAlternative) => void;
  questions: IPracticeQuestion[];
  question: IPracticeQuestion;
  answerQuestion: (
    questions: IPracticeQuestion[],
    question: IPracticeQuestion,
    alternative: IAlternative,
  ) => void;
}

const QuestionActions = (props: IPracticeQuestionActionsProps): JSX.Element => {
  const {
    selectedAlternative,
    setSelectedAlternative,
    questions,
    question,
    answerQuestion,
  } = props;

  return (
    <QuestionActionsBox>
      <QuestionActionButton
        className="block-shadow-button secondary-action bd-rd-20"
        onClick={() => {
          answerQuestion(questions, question, DEFAULT_ALTERNATIVE);
          setSelectedAlternative(DEFAULT_ALTERNATIVE);
        }}
      >
        <QuestionActionButtonLabel>Pular</QuestionActionButtonLabel>
      </QuestionActionButton>
      <QuestionActionButton
        className="block-shadow-button main-action bd-rd-20"
        disabled={isDefaultAlternative(selectedAlternative)}
        onClick={() => {
          if (!isDefaultAlternative(selectedAlternative)) {
            answerQuestion(questions, question, selectedAlternative);
            setSelectedAlternative(DEFAULT_ALTERNATIVE);
          }
        }}
      >
        <QuestionActionButtonLabel>Responder</QuestionActionButtonLabel>
      </QuestionActionButton>
    </QuestionActionsBox>
  );
};

export default QuestionActions;
