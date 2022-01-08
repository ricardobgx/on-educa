import React, { useState } from 'react';
import { IAlternative } from '../../../interfaces/IAlternative';
import { IQuestion } from '../../../interfaces/IQuestion';
import { DEFAULT_ALTERNATIVE } from '../../../static/defaultEntitiesValues';
import QuestionActions from '../../Question/QuestionActions';
import QuestionAlternativesList from '../../Question/QuestionAlternatives';
import QuestionDescription from '../../Question/QuestionDescription';
import { Container } from './styles';

interface IQuestionProps {
  answerQuestion: (
    practiceQuestions: IQuestion[],
    practiceQuestion: IQuestion,
    selectedAlternative: IAlternative,
  ) => void;
  question: IQuestion;
  questions: IQuestion[];
}

const PracticeQuestion = (props: IQuestionProps): JSX.Element => {
  /* Propriedades */

  const { answerQuestion, question, questions } = props;

  /* Estado Global */

  const [selectedAlternative, setSelectedAlternative] =
    useState<IAlternative>(DEFAULT_ALTERNATIVE);

  const { description, alternatives } = question;

  return (
    <Container>
      <QuestionDescription description={description} />
      <QuestionAlternativesList
        alternatives={alternatives}
        selectedAlternative={selectedAlternative}
        setSelectedAlternative={setSelectedAlternative}
      />
      <QuestionActions
        selectedAlternative={selectedAlternative}
        setSelectedAlternative={setSelectedAlternative}
        questions={questions}
        question={question}
        answerQuestion={answerQuestion}
      />
    </Container>
  );
};

export default PracticeQuestion;
