/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import { IStudent } from '../../../interfaces/IStudent';
import UserCard from '../../App/UserCard';
import { ParticipantCardBox, KickOutButton, KickOutButtonIcon } from './styles';

const ParticipantCard = (props: IStudent): JSX.Element => {
  return (
    <ParticipantCardBox>
      <UserCard {...props} isStudent />
      <KickOutButton>
        <KickOutButtonIcon className="fas fa-times" />
      </KickOutButton>
    </ParticipantCardBox>
  );
};

export default ParticipantCard;
