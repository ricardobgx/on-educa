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

const teamAParticipants: IDuelParticipant[] = [
  {
    id: 'cdcdc-dccdccs-cdcsc-xscs',
    email: 'teste1@gmail.com',
    name: 'Aluno Fulano Sicrano da Silva',
    schoolGradeId: 'csvs5445svsvs1v5sv5v5sd',
    league: 'Diamond',
    isOnline: true,
    profilePicture:
      'https://i.pinimg.com/474x/a2/92/de/a292de2720b31e18ceb366e5ca343fd0.jpg',
    answeredQuestions: [],
    userType: 'student',
    teachingType: DEFAULT_TEACHING_TYPE,
    schoolGrade: DEFAULT_SCHOOL_GRADE,
  },
  {
    id: 'cdcdc-dccdccs-cdcsc-xscs',
    email: 'teste2@gmail.com',
    name: 'Aluno Fulano Sicrano da Silva',
    schoolGradeId: 'csvs5445svsvs1v5sv5v5sd',
    league: 'Diamond',
    isOnline: true,
    profilePicture:
      'https://i.pinimg.com/474x/a2/92/de/a292de2720b31e18ceb366e5ca343fd0.jpg',
    answeredQuestions: [],
    userType: 'student',
    teachingType: DEFAULT_TEACHING_TYPE,
    schoolGrade: DEFAULT_SCHOOL_GRADE,
  },
  {
    id: 'cdcdc-dccdccs-cdcsc-xscs',
    email: 'teste3@gmail.com',
    name: 'Aluno Fulano Sicrano da Silva',
    schoolGradeId: 'csvs5445svsvs1v5sv5v5sd',
    league: 'Diamond',
    isOnline: true,
    profilePicture:
      'https://i.pinimg.com/474x/a2/92/de/a292de2720b31e18ceb366e5ca343fd0.jpg',
    answeredQuestions: [],
    userType: 'student',
    teachingType: DEFAULT_TEACHING_TYPE,
    schoolGrade: DEFAULT_SCHOOL_GRADE,
  },
  {
    id: 'cdcdc-dccdccs-cdcsc-xscs',
    email: 'teste4@gmail.com',
    name: 'Aluno Fulano Sicrano da Silva',
    schoolGradeId: 'csvs5445svsvs1v5sv5v5sd',
    league: 'Diamond',
    isOnline: true,
    profilePicture:
      'https://i.pinimg.com/474x/a2/92/de/a292de2720b31e18ceb366e5ca343fd0.jpg',
    answeredQuestions: [],
    userType: 'student',
    teachingType: DEFAULT_TEACHING_TYPE,
    schoolGrade: DEFAULT_SCHOOL_GRADE,
  },
];

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
