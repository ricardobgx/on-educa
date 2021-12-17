import React from 'react';
import { IDuelQuestion } from '../../../interfaces/IDuelQuestion';
import DuelProgress from '../DuelProgress';
import DuelTurn from '../DuelTurn';
import { Container, DuelStatusBox } from './styles';

interface IDuelStatusProps {
  questions: IDuelQuestion[];
  answeredQuestionsNumber: (duelQuestions: IDuelQuestion[]) => number;
}

const DuelStatus = (props: IDuelStatusProps): JSX.Element => {
  // const [quitDuel, setQuitDuel] = useState(false);
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
