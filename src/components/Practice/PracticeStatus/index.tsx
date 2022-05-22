import React, { useState } from 'react';
import { SmallMaterialIconOutlined } from '../../App/Icons/MaterialIcons/MaterialIconsOutlined';
import BigProgressBar from '../../App/ProgressBar/BigProgressBar';
import ConfirmQuitPractice from '../ConfirmQuitPractice';
import {
  Container,
  PracticeProgress,
  PracticeProgressLabel,
  PracticeStatusBox,
  QuitPracticeButton,
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
        <SmallMaterialIconOutlined icon="arrow_back" color="" />
      </QuitPracticeButton>
      <PracticeStatusBox>
        <PracticeProgress>
          <BigProgressBar
            now={answeredQuestionsNumber(questions)}
            max={questions.length}
          />
          <PracticeProgressLabel>
            {answeredQuestionsNumber(questions)}/{questions.length}
          </PracticeProgressLabel>
        </PracticeProgress>
      </PracticeStatusBox>
    </Container>
  );
};

export default PracticeStatus;
