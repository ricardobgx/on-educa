import React from 'react';
import DuelTeamParticipantsList from '../DuelTeamParticipantsList';
import { DuelTeamBox, DuelTeamLabel, DuelTeamParticipants } from './styles';

interface IDuelTeamProps {
  duelId: string;
  duelOwner: IStudent;
  team: IDuelTeam;
  loggedStudent: IStudent;
  studentParticipation: IDuelTeamParticipation;
}

const DuelTeam = (props: IDuelTeamProps): JSX.Element => {
  const { duelOwner, studentParticipation, team, loggedStudent, duelId } =
    props;

  return (
    <DuelTeamBox className="with-shadow bd-rd-30">
      <DuelTeamLabel>{team.name}</DuelTeamLabel>
      <DuelTeamParticipants>
        <DuelTeamParticipantsList
          team={team}
          duelId={duelId}
          duelOwner={duelOwner}
          loggedStudent={loggedStudent}
          studentParticipation={studentParticipation}
        />
      </DuelTeamParticipants>
    </DuelTeamBox>
  );
};

export default DuelTeam;
