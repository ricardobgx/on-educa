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
    loggedPeople,
    studentParticipation,
    setStudentParticipation,
    team,
    refreshDuel,
    loggedStudent,
  } = props;

  return (
    <DuelTeamBox className="with-shadow bd-rd-5">
      <DuelTeamLabel>{team.name}</DuelTeamLabel>
      <DuelTeamParticipants>
        <DuelTeamParticipantsList
          team={team}
          duelOwner={duelOwner}
          loggedPeople={loggedPeople}
          loggedStudent={loggedStudent}
          studentParticipation={studentParticipation}
          setStudentParticipation={setStudentParticipation}
          refreshDuel={refreshDuel}
        />
      </DuelTeamParticipants>
    </DuelTeamBox>
  );
};

export default DuelTeam;
