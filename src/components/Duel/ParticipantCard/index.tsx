/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import { IUser } from '../../../interfaces/IUser';
import UserCard from '../../App/UserCard';
import { ParticipantCardBox, KickOutButton, KickOutButtonIcon } from './styles';

const ParticipantCard = (props: IUser): JSX.Element => {
  return (
    <ParticipantCardBox>
      <UserCard {...props} userType="student" />
      <KickOutButton>
        <KickOutButtonIcon className="fas fa-times" />
      </KickOutButton>
    </ParticipantCardBox>
  );
};

export default ParticipantCard;
