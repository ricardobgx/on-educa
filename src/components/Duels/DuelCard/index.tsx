/* eslint-disable */

import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { socket } from '../../../App';
import {
  duelRoundStatusIcon,
  duelRoundStatusLabel,
} from '../../../functions/duelRound';
import { participateInDuel } from '../../../functions/duelTeamParts';
import { isDefaultDuel } from '../../../functions/entitiesValues';
import OnEducaAPI from '../../../services/api';
import { DEFAULT_PEOPLE } from '../../../static/defaultEntitiesValues';
import {
  DuelCardBox,
  DuelDetails,
  OwnerInfo,
  OwnerName,
  DuelCode,
  QuestionsPerContentLabel,
  TimeForQuestionLabel,
  DuelStatus,
  DuelStatusLabel,
  DuelStatusIcon,
  DuelParticipants,
  DuelParticipantsLabel,
  DuelParticipantsIcon,
  DuelStatusBox,
  DuelSettings,
} from './styles';

interface IDuelCardProps {
  duel: IDuel;
  student: IStudent;
  token: string;
  index: number;
}

const DuelCard = (props: IDuelCardProps): JSX.Element => {
  const { duel, student: loggedStudent, token, index } = props;

  /* Estado do componente */

  const [people, setPeople] = useState(DEFAULT_PEOPLE);

  const [numParticipants, setNumParticipants] = useState(0);
  const [participateInDuelComplete, setParticipateInDuelComplete] =
    useState<boolean>(false);

  const participatesInDuelCounter = (teams: IDuelTeam[]): number => {
    let numParticipantsCounter = 0;

    teams.map((team) => {
      team.participations.map((participation) => {
        if (participation.student) {
          numParticipantsCounter += 1;
        }
        return participation;
      });
      return team;
    });

    return numParticipantsCounter;
  };

  const appendParticipant = async (): Promise<void> => {
    await participateInDuel(
      OnEducaAPI,
      {
        duelId: duel.id,
        studentId: loggedStudent.id,
      },
      token,
      (duelTeamParticipation: IDuelTeamParticipation) => {
        setParticipateInDuelComplete(true);
        socket.emit(`duel.new-participation`, {
          duelId: duel.id,
          data: {
            ...duelTeamParticipation,
          } as IDuelTeamParticipation,
        });
      },
    );
  };

  useEffect(() => {
    if (!isDefaultDuel(duel)) {
      const { duelRound } = duel;
      setNumParticipants(participatesInDuelCounter(duelRound.teams));
      // getPeople(OnEducaAPI, student.people.id, setPeople, token);
    }
  }, [duel]);

  const { id, code, duelRound } = duel;
  const { name: ownerName } = people;
  const { status, maxGroupParticipants, timeForQuestion, questionsPerContent } =
    duelRound;

  return (
    <DuelCardBox
      onClick={() => appendParticipant()}
      className="block-shadow-button secondary-action bd-rd-20"
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <DuelDetails>
        <OwnerInfo>
          <OwnerName>Duelo de {ownerName}</OwnerName>
        </OwnerInfo>
        <DuelCode>Código: {code}</DuelCode>
      </DuelDetails>
      <DuelSettings>
        <QuestionsPerContentLabel>
          Questões por conteúdo: {questionsPerContent}
        </QuestionsPerContentLabel>
        <TimeForQuestionLabel>
          Tempo para responder: {timeForQuestion} minuto(s)
        </TimeForQuestionLabel>
      </DuelSettings>
      <DuelStatus>
        <DuelStatusBox>
          <DuelStatusLabel>{duelRoundStatusLabel(status)}</DuelStatusLabel>
          <DuelStatusIcon className={`fas fa-${duelRoundStatusIcon(status)}`} />
        </DuelStatusBox>
        <DuelParticipants>
          <DuelParticipantsLabel>
            {numParticipants}/{maxGroupParticipants * 2}
          </DuelParticipantsLabel>
          <DuelParticipantsIcon className="fas fa-users" />
        </DuelParticipants>
      </DuelStatus>
      {participateInDuelComplete && <Redirect to={`/duels/${id}`} />}
    </DuelCardBox>
  );
};

export default DuelCard;
