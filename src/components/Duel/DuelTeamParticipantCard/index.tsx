/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import { useSelector } from 'react-redux';
import { removeParticipant } from '../../../functions/duelTeamParts';
import { IDuelTeamParticipation } from '../../../interfaces/IDuelTeamParticipation';
import OnEducaAPI from '../../../services/api';
import { DEFAULT_USER } from '../../../static/defaultEntitiesValues';
import { State } from '../../../store';
import UserCard from '../../App/UserCard';
import {
  DuelTeamParticipantCardBox,
  KickOutButton,
  KickOutButtonIcon,
  AddFriendButton,
  AddFriendButtonIcon,
  DuelTeamParticipantCardActions,
} from './styles';

interface IDuelTeamParticipantCardProps {
  ownerId: string;
  participation: IDuelTeamParticipation;
  refreshDuel: () => void;
}

const DuelTeamParticipantCard = (
  props: IDuelTeamParticipantCardProps,
): JSX.Element => {
  const { user: loggedUser, aplication } = useSelector((store: State) => store);
  const { token } = aplication;

  const { ownerId, participation, refreshDuel } = props;

  const student = participation.student || DEFAULT_USER;

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
      <UserCard
        smartphoneNameLength={20}
        abbreviateName
        showScore={false}
        {...student}
        userType="student"
      />
      {loggedUser.id === ownerId && student.id !== ownerId && (
        <KickOutButton onClick={() => kickOutParticipant(participation.id)}>
          <KickOutButtonIcon className="fas fa-sign-out-alt" />
        </KickOutButton>
      )}
    </DuelTeamParticipantCardBox>
  );
};

export default DuelTeamParticipantCard;
