import React from 'react';
import { isDefaultAlternative } from '../../../functions/entitiesValues';
import { IAlternative } from '../../../interfaces/IAlternative';
import { IQuestion } from '../../../interfaces/IQuestion';
import { DEFAULT_ALTERNATIVE } from '../../../static/defaultEntitiesValues';
import {
  AnswerQuestionButton,
  AnswerQuestionButtonLabel,
  QuestionActionsBox,
  SkipQuestionButton,
  SkipQuestionButtonLabel,
} from './styles';

interface IQuestionActionsProps {
  selectedAlternative: IAlternative;
  setSelectedAlternative: (alternative: IAlternative) => void;
  questions: IQuestion[];
  question: IQuestion;
  answerQuestion: (
    questions: IQuestion[],
    question: IQuestion,
    alternative: IAlternative,
  ) => void;
}

const QuestionActions = (props: IQuestionActionsProps): JSX.Element => {
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
