import React from 'react';
import { displaySurname } from '../../../functions/people';
import {
  DEFAULT_DUEL_TEAM,
  DEFAULT_DUEL_TEAM_PARTICIPATION,
  DEFAULT_STUDENT,
} from '../../../static/defaultEntitiesValues';
import {
  ParticipantTurnLabel,
  Container,
  ParticipantTurn,
  ParticipantTurnIcon,
  TeamTurn,
  TeamTurnIcon,
  TeamTurnLabel,
} from './styles';

interface IDuelTurnProps {
  duelRound: IDuelRound;
}

const DuelTurn = (props: IDuelTurnProps): JSX.Element => {
  const { duelRound } = props;
  const { team: teamFound } = duelRound;
  const team = teamFound || DEFAULT_DUEL_TEAM;
  const { participation: participationFound } = team;
  const participation = participationFound || DEFAULT_DUEL_TEAM_PARTICIPATION;
  const { student: studentFound } = participation;
  const student = studentFound || DEFAULT_STUDENT;

  return (
    <Container className="with-shadow bd-rd-30">
      <TeamTurn>
        <TeamTurnIcon className="fas fa-users" />
        <TeamTurnLabel>{team.name}</TeamTurnLabel>
      </TeamTurn>
      <ParticipantTurn>
        <ParticipantTurnIcon className="fas fa-user" />
        <ParticipantTurnLabel>
          {displaySurname(student.people.name, 25)}
        </ParticipantTurnLabel>
      </ParticipantTurn>
    </Container>
  );
};

export default DuelTurn;
