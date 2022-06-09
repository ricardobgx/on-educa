import React, { useState } from 'react';
import { isDefaultAlternative } from '../../../functions/entitiesValues';
import { DEFAULT_ALTERNATIVE } from '../../../static/defaultEntitiesValues';
import DuelQuestionAlternative from '../DuelQuestionAlternative';
import NoActionDuelQuestionAlternative from '../NoActionDuelQuestionAlternative';
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
  activeParticipationId: string;
  duelQuestion: IDuelRoundQuestion;
}

const DuelQuestion = (props: IQuestionProps): JSX.Element => {
  const {
    answerQuestion,
    studentParticipation,
    activeParticipationId,
    duelQuestion,
  } = props;
  const [selectedAlternative, setSelectedAlternative] =
    useState<IAlternative>(DEFAULT_ALTERNATIVE);
  const { question } = duelQuestion;

  const { description, alternatives } = question;

  return (
    <Container>
      <DuelQuestionDescriptionBox className="with-shadow bd-rd-20">
        <DuelQuestionDescription>
          {description.split('\n').map((questionDescriptionParagraph) => (
            <DuelQuestionDescriptionParagraph>
              {questionDescriptionParagraph}
            </DuelQuestionDescriptionParagraph>
          ))}
        </DuelQuestionDescription>
      </DuelQuestionDescriptionBox>
      <DuelQuestionAlternatives>
        {alternatives.map((alternative) =>
          activeParticipationId === studentParticipation.id ? (
            <DuelQuestionAlternative
              alternative={alternative}
              selectedAlternative={selectedAlternative}
              setSelectedAlternative={setSelectedAlternative}
            />
          ) : (
            <NoActionDuelQuestionAlternative
              alternative={alternative}
              selectedAlternative={selectedAlternative}
            />
          ),
        )}
      </DuelQuestionAlternatives>
      <DuelQuestionActions>
        {activeParticipationId === studentParticipation.id && (
          <AnswerButton
            className="block-shadow-button main-action bd-rd-20"
            onClick={() => {
              if (!isDefaultAlternative(selectedAlternative)) {
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
        )}
      </DuelQuestionActions>
    </Container>
  );
};

export default DuelQuestion;
