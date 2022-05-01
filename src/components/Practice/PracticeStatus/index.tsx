import React, { useState } from 'react';
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
  questions: IPracticeQuestion[];
  answeredQuestionsNumber: (practiceQuestions: IPracticeQuestion[]) => number;
}

const PracticeStatus = (props: IPracticeStatusProps): JSX.Element => {
  const [quitPractice, setQuitPractice] = useState(false);
  const { answeredQuestionsNumber, questions } = props;

  return (
    <Container className="with-shadow bd-rd-30">
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
