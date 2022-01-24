import React from 'react';
import { IDuelTeam } from '../../../interfaces/IDuelTeam';
import { IDuelStudentInfoComponentsProps } from '../../../pages/Duel';
import DuelTeamParticipantsList from '../DuelTeamParticipantsList';
import { DuelTeamBox, DuelTeamLabel, DuelTeamParticipants } from './styles';

interface IDuelTeamProps extends IDuelStudentInfoComponentsProps {
  team: IDuelTeam;
  refreshDuel: () => void;
}

const DuelTeam = (props: IDuelTeamProps): JSX.Element => {
  const {
    duelOwner,
    loggedUser,
    studentParticipation,
    setStudentParticipation,
    team,
    refreshDuel,
  } = props;

  return (
    <DuelTeamBox className="with-shadow bd-rd-5">
      <DuelTeamLabel>{team.name}</DuelTeamLabel>
      <DuelTeamParticipants>
        <DuelTeamParticipantsList
          team={team}
          duelOwner={duelOwner}
          loggedUser={loggedUser}
          studentParticipation={studentParticipation}
          setStudentParticipation={setStudentParticipation}
          refreshDuel={refreshDuel}
        />
      </DuelTeamParticipants>
    </DuelTeamBox>
  );
};

export default DuelTeam;
