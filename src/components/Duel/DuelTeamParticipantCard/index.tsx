/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import { useSelector } from 'react-redux';
import { removeParticipant } from '../../../functions/duelTeamParts';
import { IDuelTeamParticipation } from '../../../interfaces/IDuelTeamParticipation';
import OnEducaAPI from '../../../services/api';
import {
  DEFAULT_STUDENT,
  DEFAULT_TEACHER,
} from '../../../static/defaultEntitiesValues';
import { State } from '../../../store';
import PeopleCard from '../../App/PeopleCard';
import {
  DuelTeamParticipantCardBox,
  KickOutButton,
  KickOutButtonIcon,
} from './styles';

interface IDuelTeamParticipantCardProps {
  ownerId: string;
  participation: IDuelTeamParticipation;
  refreshDuel: () => void;
}

const DuelTeamParticipantCard = (
  props: IDuelTeamParticipantCardProps,
): JSX.Element => {
  const { people: loggedPeople, aplication } = useSelector(
    (store: State) => store,
  );
  const { token } = aplication;

  const { ownerId, participation, refreshDuel } = props;

  const student = participation.student || DEFAULT_STUDENT;

  const kickOutParticipant = async (
    duelTeamParticipationId: string,
  ): Promise<void> => {
    await removeParticipant(
      OnEducaAPI,
      duelTeamParticipationId,
      token,
      refreshDuel,
      () => console.log('erro'),
    );
  };

  return (
    <DuelTeamParticipantCardBox>
      <PeopleCard
        smartphoneNameLength={20}
        abbreviateName
        showScore={false}
        people={student.people}
        student={student}
        teacher={DEFAULT_TEACHER}
      />
      {loggedPeople.id === ownerId && student.id !== ownerId && (
        <KickOutButton onClick={() => kickOutParticipant(participation.id)}>
          <KickOutButtonIcon className="fas fa-sign-out-alt" />
        </KickOutButton>
      )}
    </DuelTeamParticipantCardBox>
  );
};

export default DuelTeamParticipantCard;
