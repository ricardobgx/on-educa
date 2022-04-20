import React from 'react';
import { IDuelTeam } from '../../../interfaces/IDuelTeam';
import { IDuelTeamParticipation } from '../../../interfaces/IDuelTeamParticipation';
import { IStudent } from '../../../interfaces/IStudent';
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
    <DuelTeamBox className="with-shadow bd-rd-5">
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
