/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import { useSelector } from 'react-redux';
import { removeParticipant } from '../../../functions/duelTeamParts';
import { IDuelTeamParticipation } from '../../../interfaces/IDuelTeamParticipation';
import { IUser } from '../../../interfaces/IUser';
import OnEducaAPI from '../../../services/api';
import { DEFAULT_USER } from '../../../static/defaultEntitiesValues';
import { State } from '../../../store';
import UserCard from '../../App/UserCard';
import {
  ParticipantCardBox,
  KickOutButton,
  KickOutButtonIcon,
  AddFriendButton,
  AddFriendButtonIcon,
  DuelParticipantCardActions,
} from './styles';

interface IParticipantCardProps {
  ownerId: string;
  participation: IDuelTeamParticipation;
  refreshDuel: () => void;
}

const ParticipantCard = (props: IParticipantCardProps): JSX.Element => {
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
    <ParticipantCardBox>
      <UserCard showScore={false} {...student} userType="student" />
      {loggedUser.id !== student.id && (
        <DuelParticipantCardActions>
          <AddFriendButton>
            <AddFriendButtonIcon className="fas fa-user-plus" />
          </AddFriendButton>
          {loggedUser.id === ownerId && (
            <KickOutButton onClick={() => kickOutParticipant(participation.id)}>
              <KickOutButtonIcon className="fas fa-sign-out-alt" />
            </KickOutButton>
          )}
        </DuelParticipantCardActions>
      )}
    </ParticipantCardBox>
  );
};

export default ParticipantCard;
