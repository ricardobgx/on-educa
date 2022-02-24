/* eslint-disable react/jsx-props-no-spreading */

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { socket } from '../../../App';
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
  const { aplication } = useSelector((store: State) => store);
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

  useEffect(() => {
    if (isDefaultPeople(people) && token) {
      getPeople(OnEducaAPI, student.people.id, setPeople, token);
    }
  }, [token, people]);

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
      {loggedStudent.id === duelOwner.id && student.id !== duelOwner.id && (
        <KickOutButton onClick={() => kickOutParticipant(participation.id)}>
          <KickOutButtonIcon className="fas fa-sign-out-alt" />
        </KickOutButton>
      )}
    </DuelTeamParticipantCardBox>
  );
};

export default DuelTeamParticipantCard;
