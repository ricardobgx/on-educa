/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import { isDefaultStudent } from '../../../functions/entitiesValues';
import { DEFAULT_STUDENT } from '../../../static/defaultEntitiesValues';
import ChangeDuelTeamPosition from '../ChangeDuelTeamPosition';
import DuelTeamParticipantCard from '../DuelTeamParticipantCard';
import { DuelTeamParticipantsListBox } from './styles';

interface IDuelTeamParticipantsListProps {
  duelId: string;
  duelOwner: IStudent;
  team: IDuelTeam;
  loggedStudent: IStudent;
  studentParticipation: IDuelTeamParticipation;
}

const DuelTeamParticipantsList = (
  props: IDuelTeamParticipantsListProps,
): JSX.Element => {
  const { duelOwner, loggedStudent, team, studentParticipation, duelId } =
    props;

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
            duelId={duelId}
            duelOwner={duelOwner}
            loggedStudent={loggedStudent}
            participation={participation}
            studentParticipation={studentParticipation}
          />
        ) : (
          <ChangeDuelTeamPosition
            key={participation.id}
            duelId={duelId}
            duelOwner={duelOwner}
            loggedStudent={loggedStudent}
            participation={participation}
            studentParticipation={studentParticipation}
          />
        );
      })}
    </DuelTeamParticipantsListBox>
  );
};

export default DuelTeamParticipantsList;
