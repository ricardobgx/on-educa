import React from 'react';
import { IDuelQuestion } from '../../../interfaces/IDuelQuestion';
import {
  Container,
  DuelProgressBar,
  DuelProgressLabel,
  QuestionsProgressBar,
} from './styles';

interface IDuelProgressProps {
  answeredQuestionsNumber: (questions: IDuelQuestion[]) => number;
  questions: IDuelQuestion[];
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
