import React, { useState } from 'react';
import { IQuestion } from '../../../interfaces/Question';
import DuelProgress from '../DuelProgress';
import DuelTurn from '../DuelTurn';
import { Container, DuelStatusBox } from './styles';

interface IDuelStatusProps {
  questions: IQuestion[];
  answeredQuestionsNumber: (DuelQuestions: IQuestion[]) => number;
}

const DuelStatus = (props: IDuelStatusProps): JSX.Element => {
  const [quitDuel, setQuitDuel] = useState(false);
  const { answeredQuestionsNumber, questions } = props;

  return (
    <Container>
      <DuelStatusBox>
        <DuelTurn />
        <DuelProgress
          answeredQuestionsNumber={answeredQuestionsNumber}
          questions={questions}
        />
      </DuelStatusBox>
    </Container>
  );
};

export default DuelStatus;
