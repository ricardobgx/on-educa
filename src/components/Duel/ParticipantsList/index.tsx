/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import { IStudent } from '../../../interfaces/Student';
import ParticipantCard from '../ParticipantCard';
import { ParticipantsListBox } from './styles';

interface IParticipantsList {
  participants: IStudent[];
}

const ParticipantsList = (props: IParticipantsList): JSX.Element => {
  const { participants } = props;

  return (
    <ParticipantsListBox>
      {participants.map((participant) => (
        <ParticipantCard {...participant} />
      ))}
    </ParticipantsListBox>
  );
};

export default ParticipantsList;
