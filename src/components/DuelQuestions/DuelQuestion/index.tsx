import React, { useState } from 'react';
import { IAnsweredQuestion } from '../../../interfaces/IAnsweredQuestion';
import { IDuelRoundQuestion } from '../../../interfaces/IDuelRoundQuestion';
import DuelQuestionAlternative from '../DuelQuestionAlternative';
import {
  AnswerButton,
  AnswerButtonLabel,
  Container,
  DuelQuestionActions,
  DuelQuestionAlternatives,
  DuelQuestionDescription,
  DuelQuestionDescriptionBox,
  DuelQuestionDescriptionParagraph,
} from './styles';

interface IQuestionProps {
  answerQuestion: (
    duelQuestions: IDuelRoundQuestion[],
    duelQuestionId: string,
    selectedAlternative: string,
  ) => void;
  duelQuestions: IDuelRoundQuestion[];
  duelQuestion: IDuelRoundQuestion;
}

const DuelQuestion = (props: IQuestionProps): JSX.Element => {
  const { answerQuestion, duelQuestions, duelQuestion } = props;
  const [selectedAlternative, setSelectedAlternative] = useState('');
  const { question } = duelQuestion;

  const { description, alternatives } = question;

  return (
    <Container>
      <DuelQuestionDescriptionBox>
        <DuelQuestionDescription>
          {description.split('\n').map((questionDescriptionParagraph) => (
            <DuelQuestionDescriptionParagraph>
              {questionDescriptionParagraph}
            </DuelQuestionDescriptionParagraph>
          ))}
        </DuelQuestionDescription>
      </DuelQuestionDescriptionBox>
      <DuelQuestionAlternatives>
        {alternatives.map((alternative) => (
          <DuelQuestionAlternative
            description={alternative.description}
            id={alternative.id}
            selectedAlternative={selectedAlternative}
            setSelectedAlternative={setSelectedAlternative}
          />
        ))}
      </DuelQuestionAlternatives>
      <DuelQuestionActions>
        <AnswerButton
          onClick={() => {
            if (selectedAlternative !== '') {
              answerQuestion(duelQuestions, question.id, selectedAlternative);
              setSelectedAlternative('');
            }
          }}
        >
          <AnswerButtonLabel>Responder</AnswerButtonLabel>
        </AnswerButton>
      </DuelQuestionActions>
    </Container>
  );
};

export default DuelQuestion;
