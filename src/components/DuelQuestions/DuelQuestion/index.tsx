import React, { useState } from 'react';
import { IAnsweredQuestion } from '../../../interfaces/AnsweredQuestion';
import { IQuestion } from '../../../interfaces/Question';
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
    duelQuestions: IAnsweredQuestion[],
    duelQuestionId: string,
    selectedAlternative: string,
  ) => void;
  questions: IAnsweredQuestion[];
  question: IAnsweredQuestion;
}

const DuelQuestion = (props: IQuestionProps): JSX.Element => {
  const { answerQuestion, questions, question } = props;
  const [selectedAlternative, setSelectedAlternative] = useState('');

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
              answerQuestion(questions, question.id, selectedAlternative);
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
