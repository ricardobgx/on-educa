import React from 'react';
import { IDuelRoundQuestion } from '../../../interfaces/IDuelRoundQuestion';
import {
  Container,
  DuelProgressBar,
  DuelProgressLabel,
  QuestionsProgressBar,
} from './styles';

interface IDuelProgressProps {
  answeredQuestionsNumber: (questions: IDuelRoundQuestion[]) => number;
  questions: IDuelRoundQuestion[];
}

const DuelProgress = (props: IDuelProgressProps): JSX.Element => {
  const { answeredQuestionsNumber, questions } = props;

  return (
    <Container>
      <DuelProgressBar>
        <QuestionsProgressBar
          style={{
            width: `${
              (answeredQuestionsNumber(questions) / questions.length) * 100
            }%`,
          }}
        />
      </DuelProgressBar>
      <DuelProgressLabel>
        {answeredQuestionsNumber(questions)}/{questions.length}
      </DuelProgressLabel>
    </Container>
  );
};

export default DuelProgress;
