import React, { useState } from 'react';
import { isDefaultAlternative } from '../../../functions/entitiesValues';
import { IAlternative } from '../../../interfaces/IAlternative';
import { IAnsweredQuestion } from '../../../interfaces/IAnsweredQuestion';
import { IDuelRoundQuestion } from '../../../interfaces/IDuelRoundQuestion';
import { IDuelTeamParticipation } from '../../../interfaces/IDuelTeamParticipation';
import { DEFAULT_ALTERNATIVE } from '../../../static/defaultEntitiesValues';
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
    duelTeamParticipationId: string,
    duelRoundQuestionId: string,
    selectedAlternativeId: string,
  ) => void;
  studentParticipation: IDuelTeamParticipation;
  duelQuestion: IDuelRoundQuestion;
}

const DuelQuestion = (props: IQuestionProps): JSX.Element => {
  const { answerQuestion, studentParticipation, duelQuestion } = props;
  const [selectedAlternative, setSelectedAlternative] =
    useState<IAlternative>(DEFAULT_ALTERNATIVE);
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
            alternative={alternative}
            selectedAlternative={selectedAlternative}
            setSelectedAlternative={setSelectedAlternative}
          />
        ))}
      </DuelQuestionAlternatives>
      <DuelQuestionActions>
        <AnswerButton
          onClick={() => {
            if (isDefaultAlternative(selectedAlternative)) {
              answerQuestion(
                studentParticipation.id,
                duelQuestion.id,
                selectedAlternative.id,
              );
              setSelectedAlternative(DEFAULT_ALTERNATIVE);
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
