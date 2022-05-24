/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react-hooks/exhaustive-deps */

import { AxiosError } from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { socket } from '../../../App';
import { removeParticipant } from '../../../functions/duelTeamParts';
import { isDefaultPeople } from '../../../functions/entitiesValues';
import { getPeople } from '../../../functions/people';
import { showErrorMessage } from '../../../functions/utils';
import OnEducaAPI from '../../../services/api';
import {
  DEFAULT_PEOPLE,
  DEFAULT_STUDENT,
  DEFAULT_TEACHER,
} from '../../../static/defaultEntitiesValues';
import { ActionCreators, RootState } from '../../../store';
import { SmallMaterialIconOutlined } from '../../App/Icons/MaterialIcons/MaterialIconsOutlined';
import PeopleCard from '../../App/PeopleCard';
import {
  DuelTeamParticipantCardBox,
  KickOutButton,
  PeopleCardWrapperLink,
} from './styles';

interface IDuelTeamParticipantCard {
  duelId: string;
  duelOwner: IStudent;
  loggedStudent: IStudent;
  participation: IDuelTeamParticipation;
}

const DuelTeamParticipantCard = (
  props: IDuelTeamParticipantCard,
): JSX.Element => {
  const { aplication } = useSelector((store: RootState) => store);
  const { token } = aplication;

  const { duelOwner, loggedStudent, duelId, participation } = props;

  const dispatch = useDispatch();

  const { showFloatNotification } = bindActionCreators(
    ActionCreators,
    dispatch,
  );

  const [people, setPeople] = useState(DEFAULT_PEOPLE);

  const student = participation.student || DEFAULT_STUDENT;

  const kickOutParticipant = async (
    duelTeamParticipationId: string,
  ): Promise<void> => {
    await removeParticipant(OnEducaAPI, duelTeamParticipationId, token, () => {
      socket.emit(`duel.remove-participation`, {
        duelId,
        data: {
          ...participation,
        } as IDuelTeamParticipation,
      });
    });
  };

  const getParticipationPeople = async (): Promise<void> => {
    const participationPeople = await getPeople(
      OnEducaAPI,
      student.people.id,
      token,
      (err: AxiosError): void => {
        showErrorMessage(err, showFloatNotification);
      },
    );

    if (participationPeople) setPeople(participationPeople);
  };

  useEffect(() => {
    if (isDefaultPeople(people) && token) {
      getParticipationPeople();
    }
  }, [token, people]);

  return (
    <DuelTeamParticipantCardBox>
      <PeopleCardWrapperLink
        className="block-shadow-button secondary-action bd-rd-10"
        to={`/profile/${people.id}`}
      >
        <PeopleCard
          smartphoneNameLength={20}
          abbreviateName
          showScore={false}
          people={people}
          student={student}
          teacher={DEFAULT_TEACHER}
        />
      </PeopleCardWrapperLink>
      {loggedStudent.id === duelOwner.id && student.id !== duelOwner.id && (
        <KickOutButton
          className="block-shadow-button main-action bd-rd-10"
          onClick={() => kickOutParticipant(participation.id)}
        >
          <SmallMaterialIconOutlined color="" icon="logout" />
        </KickOutButton>
      )}
    </DuelTeamParticipantCardBox>
  );
};

export default DuelTeamParticipantCard;
