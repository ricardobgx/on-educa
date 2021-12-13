import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { IStudent } from '../../../interfaces/IStudent';
import { DEFAULT_SCHOOL_GRADE } from '../../../store/reducers/schoolGrade';
import { DEFAULT_TEACHING_TYPE } from '../../../store/reducers/teachingType';
import SectionLabel from '../../App/SectionLabel';
import ParticipantsList from '../ParticipantsList';
import {
  DashBoardBox,
  DuelActions,
  DuelTeam,
  DuelTeams,
  InviteFriendsButton,
  InviteFriendsButtonLabel,
  Participants,
  ParticipantsBox,
  QuitDuelButton,
  QuitDuelButtonLabel,
  StartDuelButton,
  StartDuelButtonLabel,
  TeamLabel,
} from './styles';

const teamAParticipants: IStudent[] = [
  {
    id: 'cdcdcd-ccac-caccacsaa',
    email: 'teste1@gmail.com',
    name: 'Aluno Fulano Sicrano da Silva',
    schoolGradeId: 'ccscd1-csdcsdcsc-cdcssdcsc',
    league: 'Diamond',
    isOnline: true,
    profilePicture:
      'https://i.pinimg.com/474x/a2/92/de/a292de2720b31e18ceb366e5ca343fd0.jpg',
    teachingType: DEFAULT_TEACHING_TYPE,
    schoolGrade: DEFAULT_SCHOOL_GRADE,
  },
  {
    id: 'cdcdcd-ccac-caccacsaa',
    email: 'teste2@gmail.com',
    name: 'Aluno Fulano Sicrano da Silva',
    schoolGradeId: 'ccscd1-csdcsdcsc-cdcssdcsc',
    league: 'Diamond',
    isOnline: true,
    profilePicture:
      'https://i.pinimg.com/474x/a2/92/de/a292de2720b31e18ceb366e5ca343fd0.jpg',
    teachingType: DEFAULT_TEACHING_TYPE,
    schoolGrade: DEFAULT_SCHOOL_GRADE,
  },
  {
    id: 'cdcdcd-ccac-caccacsaa',
    email: 'teste3@gmail.com',
    name: 'Aluno Fulano Sicrano da Silva',
    schoolGradeId: 'ccscd1-csdcsdcsc-cdcssdcsc',
    league: 'Diamond',
    isOnline: true,
    profilePicture:
      'https://i.pinimg.com/474x/a2/92/de/a292de2720b31e18ceb366e5ca343fd0.jpg',
    teachingType: DEFAULT_TEACHING_TYPE,
    schoolGrade: DEFAULT_SCHOOL_GRADE,
  },
  {
    id: 'cdcdcd-ccac-caccacsaa',
    email: 'teste4@gmail.com',
    name: 'Aluno Fulano Sicrano da Silva',
    schoolGradeId: 'ccscd1-csdcsdcsc-cdcssdcsc',
    league: 'Diamond',
    isOnline: true,
    profilePicture:
      'https://i.pinimg.com/474x/a2/92/de/a292de2720b31e18ceb366e5ca343fd0.jpg',
    teachingType: DEFAULT_TEACHING_TYPE,
    schoolGrade: DEFAULT_SCHOOL_GRADE,
  },
];

const DashBoard = (): JSX.Element => {
  const [startedDuel, setStartedDuel] = useState(false);

  const isDuelOwner = (): boolean => {
    return true;
  };

  const startDuel = (): void => {
    setStartedDuel(true);
  };

  return (
    <DashBoardBox>
      <SectionLabel backLink="" label="Duelo de Aluno 1" />
      <DuelTeams>
        <DuelTeam>
          <TeamLabel>Equipe A</TeamLabel>
          <Participants>
            <ParticipantsBox>
              <ParticipantsList participants={teamAParticipants} />
            </ParticipantsBox>
          </Participants>
        </DuelTeam>
        <DuelTeam>
          <TeamLabel>Equipe B</TeamLabel>
          <Participants>
            <ParticipantsBox>
              <ParticipantsList participants={teamAParticipants} />
            </ParticipantsBox>
          </Participants>
        </DuelTeam>
      </DuelTeams>
      <DuelActions>
        <InviteFriendsButton>
          <InviteFriendsButtonLabel>Convidar amigos</InviteFriendsButtonLabel>
        </InviteFriendsButton>
        {!isDuelOwner() ? (
          <QuitDuelButton to="/duels">
            <QuitDuelButtonLabel>Sair</QuitDuelButtonLabel>
          </QuitDuelButton>
        ) : (
          <StartDuelButton onClick={() => startDuel()}>
            <StartDuelButtonLabel>Começar</StartDuelButtonLabel>
          </StartDuelButton>
        )}
        {startedDuel && <Redirect to="/duels/12345/questions" />}
      </DuelActions>
    </DashBoardBox>
  );
};

export default DashBoard;
