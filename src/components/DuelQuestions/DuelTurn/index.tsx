import React from 'react';
import {
  ParticipantTurnLabel,
  Container,
  ParticipantTurn,
  ParticipantTurnIcon,
  TeamTurn,
  TeamTurnIcon,
  TeamTurnLabel,
} from './styles';

const DuelTurn = (): JSX.Element => {
  return (
    <Container>
      <TeamTurn>
        <TeamTurnIcon className="fas fa-users" />
        <TeamTurnLabel>Equipe A</TeamTurnLabel>
      </TeamTurn>
      <ParticipantTurn>
        <ParticipantTurnIcon className="fas fa-user" />
        <ParticipantTurnLabel>
          Aluno Fulano Sicrano da Silva
        </ParticipantTurnLabel>
      </ParticipantTurn>
    </Container>
  );
};

export default DuelTurn;
