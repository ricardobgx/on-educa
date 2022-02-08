/* eslint-disable react/jsx-props-no-spreading */

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { removeParticipant } from '../../../functions/duelTeamParts';
import { isDefaultPeople } from '../../../functions/entitiesValues';
import { getPeople } from '../../../functions/people';
import { IDuelTeamParticipation } from '../../../interfaces/IDuelTeamParticipation';
import { IStudent } from '../../../interfaces/IStudent';
import OnEducaAPI from '../../../services/api';
import {
  DEFAULT_PEOPLE,
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
  loggedStudent: IStudent;
  participation: IDuelTeamParticipation;
  refreshDuel: () => void;
}

const DuelTeamParticipantCard = (
  props: IDuelTeamParticipantCardProps,
): JSX.Element => {
  const { aplication } = useSelector((store: State) => store);
  const { token } = aplication;

  const { ownerId, loggedStudent, participation, refreshDuel } = props;

  const [people, setPeople] = useState(DEFAULT_PEOPLE);

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

  useEffect(() => {
    if (isDefaultPeople(people)) {
      getPeople(OnEducaAPI, student.people.id, setPeople, token);
    }
  }, []);

  return (
    <DuelTeamParticipantCardBox>
      <PeopleCard
        smartphoneNameLength={20}
        abbreviateName
        showScore={false}
        people={people}
        student={student}
        teacher={DEFAULT_TEACHER}
      />
      {loggedStudent.id === ownerId && student.id !== ownerId && (
        <KickOutButton onClick={() => kickOutParticipant(participation.id)}>
          <KickOutButtonIcon className="fas fa-sign-out-alt" />
        </KickOutButton>
      )}
    </DuelTeamParticipantCardBox>
  );
};

export default DuelTeamParticipantCard;
