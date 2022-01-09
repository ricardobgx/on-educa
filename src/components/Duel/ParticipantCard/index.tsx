/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import { useSelector } from 'react-redux';
import { IUser } from '../../../interfaces/IUser';
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
  user: IUser;
  ownerId: string;
}

const ParticipantCard = (props: IParticipantCardProps): JSX.Element => {
  const { user: loggedUser } = useSelector((store: State) => store);
  const { user: userProps, ownerId } = props;

  const user = userProps || DEFAULT_USER;

  return (
    <ParticipantCardBox>
      <UserCard showScore={false} {...user} userType="student" />
      {loggedUser.id !== user.id && (
        <DuelParticipantCardActions>
          <AddFriendButton>
            <AddFriendButtonIcon className="fas fa-user-plus" />
          </AddFriendButton>
          {loggedUser.id === ownerId && (
            <KickOutButton>
              <KickOutButtonIcon className="fas fa-sign-out-alt" />
            </KickOutButton>
          )}
        </DuelParticipantCardActions>
      )}
    </ParticipantCardBox>
  );
};

export default ParticipantCard;
