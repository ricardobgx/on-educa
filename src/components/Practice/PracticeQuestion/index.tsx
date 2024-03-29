import React, { useState } from 'react';
import { DEFAULT_ALTERNATIVE } from '../../../static/defaultEntitiesValues';
import QuestionActions from '../../Question/QuestionActions';
import QuestionAlternativesList from '../../Question/QuestionAlternatives';
import QuestionDescription from '../../Question/QuestionDescription';
import { Container } from './styles';

interface IQuestionProps {
  answerQuestion: (
    practiceQuestions: IPracticeQuestion[],
    practiceQuestion: IPracticeQuestion,
    selectedAlternative: IAlternative,
  ) => void;
  question: IPracticeQuestion;
  questions: IPracticeQuestion[];
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
