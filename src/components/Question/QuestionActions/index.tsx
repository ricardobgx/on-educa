import React from 'react';
import { isDefaultAlternative } from '../../../functions/entitiesValues';
import { DEFAULT_ALTERNATIVE } from '../../../static/defaultEntitiesValues';
import {
  AnswerQuestionButton,
  AnswerQuestionButtonLabel,
  QuestionActionsBox,
  SkipQuestionButton,
  SkipQuestionButtonLabel,
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
      <AnswerQuestionButton
        className="block-shadow-button main-action bd-rd-5"
        disabled={isDefaultAlternative(selectedAlternative)}
        onClick={() => {
          if (!isDefaultAlternative(selectedAlternative)) {
            answerQuestion(questions, question, selectedAlternative);
            setSelectedAlternative(DEFAULT_ALTERNATIVE);
          }
        }}
      >
        <AnswerQuestionButtonLabel>Responder</AnswerQuestionButtonLabel>
      </AnswerQuestionButton>
      <SkipQuestionButton
        className="block-shadow-button secondary-action bd-rd-5"
        onClick={() => {
          answerQuestion(questions, question, DEFAULT_ALTERNATIVE);
          setSelectedAlternative(DEFAULT_ALTERNATIVE);
        }}
      >
        <SkipQuestionButtonLabel>Pular</SkipQuestionButtonLabel>
      </SkipQuestionButton>
    </QuestionActionsBox>
  );
};

export default QuestionActions;
