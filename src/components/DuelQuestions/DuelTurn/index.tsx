import React from 'react';
import { displaySurname } from '../../../functions/user';
import { IDuelRound } from '../../../interfaces/IDuelRound';
import {
  DEFAULT_DUEL_TEAM,
  DEFAULT_DUEL_TEAM_PARTICIPATION,
  DEFAULT_USER,
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
  const student = studentFound || DEFAULT_USER;

  return (
    <Container className="with-shadow bd-rd-5">
      <TeamTurn>
        <TeamTurnIcon className="fas fa-users" />
        <TeamTurnLabel>{team.name}</TeamTurnLabel>
      </TeamTurn>
      <ParticipantTurn>
        <ParticipantTurnIcon className="fas fa-user" />
        <ParticipantTurnLabel>
          {displaySurname(student.name, 25)}
        </ParticipantTurnLabel>
      </ParticipantTurn>
    </Container>
  );
};

export default DuelTurn;
