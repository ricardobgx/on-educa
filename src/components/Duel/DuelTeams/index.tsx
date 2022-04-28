import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { socket } from '../../../App';
import { sortTeams } from '../../../functions/duelTeam';
import { findStudentDuelPartByTeams } from '../../../functions/duelTeamParts';
import { DEFAULT_STUDENT } from '../../../static/defaultEntitiesValues';
import DuelTeam from '../DuelTeam';
import { DuelTeamsBox } from './styles';

interface IDuelTeamsProps {
  duelId: string;
  duelOwner: IStudent;
  teams: IDuelTeam[];
  loggedStudent: IStudent;
  studentParticipation: IDuelTeamParticipation;
  setStudentParticipation: (value: IDuelTeamParticipation) => void;
}

const DuelTeams = (props: IDuelTeamsProps): JSX.Element => {
  /* Propriedades da rota */

  const pageHistory = useHistory();

  /* Propriedades do componente */

  const {
    duelOwner,
    loggedStudent,
    teams: unsortedTeams,
    studentParticipation,
    setStudentParticipation,
    duelId,
  } = props;

  /* Estado do componente */

  const [teams, setTeams] = useState<IDuelTeam[]>([]);

  /* Variaveis do componente */

  const updateDuelPartPosition = (
    newStudentParticipation: IDuelTeamParticipation,
  ): void => {
    const oldStudentParticipation = findStudentDuelPartByTeams(
      teams,
      newStudentParticipation.student || DEFAULT_STUDENT,
    );

    const newTeams = teams.map((team) => {
      const newParticipations = team.participations.map((participation) => {
        if (participation.id === oldStudentParticipation.id) {
          return { ...participation, student: null };
        }
        if (participation.id === newStudentParticipation.id) {
          return { ...newStudentParticipation };
        }

        return participation;
      });

      return { ...team, participations: newParticipations };
    });

    if (
      newStudentParticipation.student &&
      newStudentParticipation.student.id === loggedStudent.id
    ) {
      setStudentParticipation(
        findStudentDuelPartByTeams(newTeams, loggedStudent),
      );
    }

    setTeams(newTeams);
  };

  const exitDuelParticipation = (
    exitParticipation: IDuelTeamParticipation,
  ): void => {
    const newTeams = teams.map((team) => {
      const newParticipations = team.participations.map((participation) => {
        if (participation.id === exitParticipation.id) {
          return { ...participation, student: null };
        }

        return participation;
      });

      return { ...team, participations: newParticipations };
    });

    setTeams(newTeams);
  };

  const removeDuelParticipation = (
    removeParticipation: IDuelTeamParticipation,
  ): void => {
    exitDuelParticipation(removeParticipation);

    if (removeParticipation.id === studentParticipation.id) {
      pageHistory.push('/duels');
    }
  };

  const newDuelParticipation = (
    newParticipation: IDuelTeamParticipation,
  ): void => {
    const newTeams = teams.map((team) => {
      const newParticipations = team.participations.map((participation) => {
        if (participation.id === newParticipation.id) {
          return { ...newParticipation };
        }

        return participation;
      });

      return { ...team, participations: newParticipations };
    });

    setTeams(newTeams);
  };

  useEffect((): any => {
    if (teams.length === 0) {
      setTeams(sortTeams(unsortedTeams));
    }

    socket.on(`duel.update-participation:${duelId}`, updateDuelPartPosition);
    socket.on(`duel.new-participation:${duelId}`, newDuelParticipation);
    socket.on(`duel.exit-participation:${duelId}`, exitDuelParticipation);
    socket.on(`duel.remove-participation:${duelId}`, removeDuelParticipation);

    return () => {
      socket.off(`duel.update-participation:${duelId}`, updateDuelPartPosition);
      socket.off(`duel.new-participation:${duelId}`, newDuelParticipation);
      socket.off(`duel.exit-participation:${duelId}`, exitDuelParticipation);
      socket.off(
        `duel.remove-participation:${duelId}`,
        removeDuelParticipation,
      );
    };
  }, [unsortedTeams, teams]);

  return (
    <DuelTeamsBox>
      {teams.map((team) => {
        return (
          <DuelTeam
            key={team.id}
            team={team}
            duelId={duelId}
            duelOwner={duelOwner}
            loggedStudent={loggedStudent}
            studentParticipation={studentParticipation}
          />
        );
      })}
    </DuelTeamsBox>
  );
};

export default DuelTeams;
