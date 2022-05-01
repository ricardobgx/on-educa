/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import ParticipantCard from '../ParticipantResultCard';
import { ParticipantsListBox } from './styles';

interface IParticipantsList {
  participations: IDuelTeamParticipation[];
}

const ParticipantsResultList = (props: IParticipantsList): JSX.Element => {
  const { participations: allParticipations } = props;
  const { aplication } = useSelector((store: RootState) => store);

  const participations = allParticipations.filter(
    (participation) => !!participation.student,
  );

  return (
    <ParticipantsListBox>
      {participations.map((participation) => (
        <ParticipantCard
          participation={participation}
          token={aplication.token}
        />
      ))}
    </ParticipantsListBox>
  );
};

export default ParticipantsResultList;
