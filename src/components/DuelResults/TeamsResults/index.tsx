import React from 'react';
import { IDuelParticipant } from '../../../interfaces/IDuelParticipant';
import {
  DEFAULT_SCHOOL_GRADE,
  DEFAULT_TEACHING_TYPE,
} from '../../../static/defaultEntitiesValues';
import SectionLabel from '../../App/SectionLabel';
import ParticipantsResultList from '../ParticipantsResultList';
import {
  BackToDuelButton,
  BackToDuelButtonLabel,
  DeleteDuelButton,
  DeleteDuelButtonLabel,
  DuelActions,
  DuelTeam,
  DuelTeams,
  Participants,
  ParticipantsBox,
  QuitDuelButton,
  QuitDuelButtonLabel,
  TeamLabel,
  TeamsResultsBox,
  TotalBox,
  TotalLabel,
} from './styles';

const teamAParticipants: IDuelParticipant[] = [];

const TeamsResults = (): JSX.Element => {
  const isDuelOwner = (): boolean => {
    return false;
  };

  return (
    <TeamsResultsBox>
      <SectionLabel backLink="" label="Desempenho das equipes" />
      <DuelTeams>
        <DuelTeam>
          <TeamLabel>Equipe A</TeamLabel>
          <Participants>
            <ParticipantsBox>
              <ParticipantsResultList participants={teamAParticipants} />
            </ParticipantsBox>
          </Participants>
          <TotalBox>
            <TotalLabel>Total XP</TotalLabel>
            <TotalLabel>+ 120 XP</TotalLabel>
          </TotalBox>
        </DuelTeam>
        <DuelTeam>
          <TeamLabel>Equipe B</TeamLabel>
          <Participants>
            <ParticipantsBox>
              <ParticipantsResultList participants={teamAParticipants} />
            </ParticipantsBox>
          </Participants>
          <TotalBox>
            <TotalLabel>Total XP</TotalLabel>
            <TotalLabel>+ 120 XP</TotalLabel>
          </TotalBox>
        </DuelTeam>
      </DuelTeams>
      <DuelActions>
        <BackToDuelButton to="/duels/12345">
          <BackToDuelButtonLabel>Voltar para o duelo</BackToDuelButtonLabel>
        </BackToDuelButton>
        {!isDuelOwner() ? (
          <QuitDuelButton to="/duels">
            <QuitDuelButtonLabel>Sair</QuitDuelButtonLabel>
          </QuitDuelButton>
        ) : (
          <DeleteDuelButton>
            <DeleteDuelButtonLabel>Excluir duelo</DeleteDuelButtonLabel>
          </DeleteDuelButton>
        )}
      </DuelActions>
    </TeamsResultsBox>
  );
};

export default TeamsResults;
