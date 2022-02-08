/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import { isDefaultStudent } from '../../../functions/entitiesValues';
import { IDuelTeam } from '../../../interfaces/IDuelTeam';
import { IDuelTeamParticipation } from '../../../interfaces/IDuelTeamParticipation';
import { IDuelStudentInfoComponentsProps } from '../../../pages/Duel';
import { DEFAULT_STUDENT } from '../../../static/defaultEntitiesValues';
import ChangeDuelTeamPosition from '../ChangeDuelTeamPosition';
import DuelTeamParticipantCard from '../DuelTeamParticipantCard';
import { DuelTeamParticipantsListBox } from './styles';

interface IDuelTeamParticipantsList extends IDuelStudentInfoComponentsProps {
  team: IDuelTeam;
  refreshDuel: () => void;
}

const DuelTeamParticipantsList = (
  props: IDuelTeamParticipantsList,
): JSX.Element => {
  const {
    duelOwner,
    loggedPeople,
    loggedStudent,
    team,
    studentParticipation,
    refreshDuel,
  } = props;

  const sortParticipations = (
    participationA: IDuelTeamParticipation,
    participationB: IDuelTeamParticipation,
  ): number => {
    return participationA.index > participationB.index ? 1 : -1;
  };

  const { participations: unsortedParticipations } = team;
  const participations = unsortedParticipations.sort(sortParticipations);

  return (
    <DuelTeamParticipantsListBox>
      {participations.map((participation) => {
        const student = participation.student || DEFAULT_STUDENT;
        return !isDefaultStudent(student) ? (
          <DuelTeamParticipantCard
            key={participation.id}
            ownerId={duelOwner.id}
            loggedStudent={loggedStudent}
            participation={participation}
            refreshDuel={refreshDuel}
          />
        ) : (
          <ChangeDuelTeamPosition
            key={participation.id}
            duelTeamPartId={participation.id}
            studentId={loggedStudent.id}
            studentParticipation={studentParticipation}
            refreshDuel={refreshDuel}
          />
        );
      })}
    </DuelTeamParticipantsListBox>
  );
};

export default DuelTeamParticipantsList;
