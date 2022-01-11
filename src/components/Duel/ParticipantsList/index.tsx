/* eslint-disable react/jsx-props-no-spreading */

import React, { useEffect, useState } from 'react';
import {
  findStudentDuelTeamPart,
  getDuelTeamPartsByDuelTeam,
} from '../../../functions/duelTeamParts';
import {
  isDefaultDuelTeamParticipation,
  isDefaultUser,
} from '../../../functions/entitiesValues';
import { IDuelTeam } from '../../../interfaces/IDuelTeam';
import { IDuelTeamParticipation } from '../../../interfaces/IDuelTeamParticipation';
import { IStudent } from '../../../interfaces/IStudent';
import { IUser } from '../../../interfaces/IUser';
import OnEducaAPI from '../../../services/api';
import { DEFAULT_USER } from '../../../static/defaultEntitiesValues';
import ChangeDuelTeamPosition from '../ChangeDuelTeamPosition';
import ParticipantCard from '../ParticipantCard';
import { ParticipantsListBox } from './styles';

interface IParticipantsList {
  duelOwnerId: string;
  team: IDuelTeam;
  loggedStudent: IUser;
  studentParticipation: IDuelTeamParticipation;
  setStudentParticipation: (value: IDuelTeamParticipation) => void;
  refreshDuel: () => void;
}

const ParticipantsList = (props: IParticipantsList): JSX.Element => {
  const {
    duelOwnerId,
    loggedStudent,
    team,
    studentParticipation,
    setStudentParticipation,
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
    <ParticipantsListBox>
      {participations.map((participation) => {
        const student = participation.student || DEFAULT_USER;
        return !isDefaultUser(student) ? (
          <ParticipantCard
            key={participation.id}
            ownerId={duelOwnerId}
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
    </ParticipantsListBox>
  );
};

export default ParticipantsList;
