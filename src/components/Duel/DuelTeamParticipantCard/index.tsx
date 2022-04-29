/* eslint-disable react/jsx-props-no-spreading */

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { socket } from '../../../App';
import { removeParticipant } from '../../../functions/duelTeamParts';
import { isDefaultPeople } from '../../../functions/entitiesValues';
import { getPeople } from '../../../functions/people';
import OnEducaAPI from '../../../services/api';
import {
  DEFAULT_PEOPLE,
  DEFAULT_STUDENT,
  DEFAULT_TEACHER,
} from '../../../static/defaultEntitiesValues';
import { RootState } from '../../../store';
import PeopleCard from '../../App/PeopleCard';
import {
  DuelTeamParticipantCardBox,
  KickOutButton,
  KickOutButtonIcon,
} from './styles';

interface IDuelTeamParticipantCard {
  duelId: string;
  duelOwner: IStudent;
  loggedStudent: IStudent;
  studentParticipation: IDuelTeamParticipation;
  participation: IDuelTeamParticipation;
}

const DuelTeamParticipantCard = (
  props: IDuelTeamParticipantCard,
): JSX.Element => {
  const { aplication } = useSelector((store: RootState) => store);
  const { token } = aplication;

  const {
    duelOwner,
    loggedStudent,
    studentParticipation,
    duelId,
    participation,
  } = props;

  const [people, setPeople] = useState(DEFAULT_PEOPLE);

  const student = participation.student || DEFAULT_STUDENT;

  const kickOutParticipant = async (
    duelTeamParticipationId: string,
  ): Promise<void> => {
    await removeParticipant(
      OnEducaAPI,
      duelTeamParticipationId,
      token,
      () => {
        socket.emit(`duel.remove-participation`, {
          duelId,
          data: {
            ...participation,
          } as IDuelTeamParticipation,
        });
      },
      () => console.log('erro'),
    );
  };

  const getParticipationPeople = async (): Promise<void> => {
    const participationPeople = await getPeople(
      OnEducaAPI,
      student.people.id,
      token,
    );

    if (participationPeople) setPeople(participationPeople);
  };

  useEffect(() => {
    if (isDefaultPeople(people) && token) {
      getParticipationPeople();
    }
  }, [token, people]);

  return (
    <DuelTeamParticipantCardBox className="with-shadow bd-rd-20">
      <PeopleCard
        smartphoneNameLength={20}
        abbreviateName
        showScore={false}
        people={people}
        student={student}
        teacher={DEFAULT_TEACHER}
      />
      {loggedStudent.id === duelOwner.id && student.id !== duelOwner.id && (
        <KickOutButton onClick={() => kickOutParticipant(participation.id)}>
          <KickOutButtonIcon className="fas fa-sign-out-alt" />
        </KickOutButton>
      )}
    </DuelTeamParticipantCardBox>
  );
};

export default DuelTeamParticipantCard;
