import React from 'react';
import DuelProgress from '../DuelProgress';
import DuelTurn from '../DuelTurn';
import { Container, DuelStatusBox } from './styles';

interface IDuelStatusProps {
  duelRound: IDuelRound;
  questions: IDuelRoundQuestion[];
  answeredQuestionsNumber: (duelQuestions: IDuelRoundQuestion[]) => number;
}

const DuelStatus = (props: IDuelStatusProps): JSX.Element => {
  // const [quitDuel, setQuitDuel] = useState(false);
  const { duelRound, answeredQuestionsNumber, questions } = props;

  return (
    <Container>
      <DuelStatusBox>
        <DuelTurn duelRound={duelRound} />
        <DuelProgress
          answeredQuestionsNumber={answeredQuestionsNumber}
          questions={questions}
        />
      </DuelStatusBox>
    </Container>
  );
};

export default DuelStatus;
