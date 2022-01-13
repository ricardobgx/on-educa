/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import { isDefaultUser } from '../../../functions/entitiesValues';
import { IDuelTeam } from '../../../interfaces/IDuelTeam';
import { IDuelTeamParticipation } from '../../../interfaces/IDuelTeamParticipation';
import { IDuelStudentInfoComponentsProps } from '../../../pages/Duel';
import { DEFAULT_USER } from '../../../static/defaultEntitiesValues';
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
  const { duelOwner, loggedUser, team, studentParticipation, refreshDuel } =
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
        const student = participation.student || DEFAULT_USER;
        return !isDefaultUser(student) ? (
          <DuelTeamParticipantCard
            key={participation.id}
            ownerId={duelOwner.id}
            participation={participation}
            refreshDuel={refreshDuel}
          />
        ) : (
          <ChangeDuelTeamPosition
            key={participation.id}
            duelTeamPartId={participation.id}
            studentId={loggedUser.id}
            studentParticipation={studentParticipation}
            refreshDuel={refreshDuel}
          />
        );
      })}
    </DuelTeamParticipantsListBox>
  );
};

export default DuelTeamParticipantsList;
