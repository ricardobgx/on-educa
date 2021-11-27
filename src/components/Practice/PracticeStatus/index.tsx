import React, { useState } from 'react';
import { IQuestion } from '../../../interfaces/Question';
import ConfirmQuitPractice from '../ConfirmQuitPractice';
import {
  Container,
  PracticeProgress,
  PracticeProgressBar,
  PracticeProgressLabel,
  PracticeStatusBox,
  QuestionsProgressBar,
  QuitPracticeButton,
  QuitPracticeIcon,
} from './styles';

interface IPracticeStatusProps {
  questions: IQuestion[];
  answeredQuestionsNumber: (practiceQuestions: IQuestion[]) => number;
}

const PracticeStatus = (props: IPracticeStatusProps): JSX.Element => {
  const [quitPractice, setQuitPractice] = useState(false);
  const { answeredQuestionsNumber, questions } = props;

  return (
    <Container>
      {quitPractice ? (
        <ConfirmQuitPractice setQuitPractice={setQuitPractice} />
      ) : null}
      <QuitPracticeButton onClick={() => setQuitPractice(true)}>
        <QuitPracticeIcon className="fas fa-arrow-left" />
      </QuitPracticeButton>
      <PracticeStatusBox>
        <PracticeProgress>
          <PracticeProgressBar>
            <QuestionsProgressBar
              style={{
                width: `${
                  (answeredQuestionsNumber(questions) / questions.length) * 100
                }%`,
              }}
            />
          </PracticeProgressBar>
          <PracticeProgressLabel>
            {answeredQuestionsNumber(questions)}/{questions.length}
          </PracticeProgressLabel>
        </PracticeProgress>
      </PracticeStatusBox>
    </Container>
  );
};

export default PracticeStatus;
