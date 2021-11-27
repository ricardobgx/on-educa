/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import { IDuelParticipant } from '../../../interfaces/DuelParticipant';
import ParticipantCard from '../ParticipantResultCard';
import { ParticipantsListBox } from './styles';

interface IParticipantsList {
  participants: IDuelParticipant[];
}

const ParticipantsResultList = (props: IParticipantsList): JSX.Element => {
  const { participants } = props;

  return (
    <ParticipantsListBox>
      {participants.map((participant) => (
        <ParticipantCard {...participant} />
      ))}
    </ParticipantsListBox>
  );
};

export default ParticipantsResultList;
