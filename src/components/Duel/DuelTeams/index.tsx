import React from 'react';
import { sortTeams } from '../../../functions/duelTeam';
import { IDuelTeam } from '../../../interfaces/IDuelTeam';
import {
  IDuelRequestComponentsProps,
  IDuelStudentInfoComponentsProps,
} from '../../../pages/Duel';
import DuelTeam from '../DuelTeam';
import { DuelTeamsBox } from './styles';

interface IDuelTeamsProps
  extends IDuelStudentInfoComponentsProps,
    IDuelRequestComponentsProps {
  teams: IDuelTeam[];
}

const DuelTeams = (props: IDuelTeamsProps): JSX.Element => {
  /* Propriedades do componente */

  const {
    duelOwner,
    loggedPeople,
    loggedStudent,
    teams: unsortedTeams,
    studentParticipation,
    setStudentParticipation,
    getDuelData,
  } = props;

  /* Variaveis do componente */

  // Armazena os times do duelo ja ordenados
  const teams = sortTeams(unsortedTeams);

  return (
    <DuelTeamsBox>
      {teams.map((team) => {
        return (
          <DuelTeam
            key={team.id}
            team={team}
            duelOwner={duelOwner}
            loggedPeople={loggedPeople}
            loggedStudent={loggedStudent}
            studentParticipation={studentParticipation}
            setStudentParticipation={setStudentParticipation}
            refreshDuel={getDuelData}
          />
        );
      })}
    </DuelTeamsBox>
  );
};

export default DuelTeams;
