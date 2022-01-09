/* eslint-disable react/jsx-props-no-spreading */

import React, { useEffect, useState } from 'react';
import { getDuelTeamPartsByDuelTeam } from '../../../functions/duelTeamParts';
import { isDefaultUser } from '../../../functions/entitiesValues';
import { IDuelTeamParticipation } from '../../../interfaces/IDuelTeamParticipation';
import { IStudent } from '../../../interfaces/IStudent';
import { IUser } from '../../../interfaces/IUser';
import OnEducaAPI from '../../../services/api';
import { DEFAULT_USER } from '../../../static/defaultEntitiesValues';
import ChangeDuelTeamPosition from '../ChangeDuelTeamPosition';
import ParticipantCard from '../ParticipantCard';
import { ParticipantsListBox } from './styles';

interface IParticipantsList {
  duelOwnerId: string;
  duelTeamId: string;
  loggedStudent: IUser;
  token: string;
}

const ParticipantsList = (props: IParticipantsList): JSX.Element => {
  const { duelOwnerId, duelTeamId, loggedStudent, token } = props;

  const [participations, setParticipations] = useState<
    IDuelTeamParticipation[]
  >([]);

  useEffect(() => {
    getDuelTeamPartsByDuelTeam(
      OnEducaAPI,
      duelTeamId,
      token,
      setParticipations,
      () => console.log('erro'),
    );
  }, []);

  return (
    <ParticipantsListBox>
      {participations.map((participation) => {
        const student = participation.student || DEFAULT_USER;
        console.log(participation);
        return !isDefaultUser(student) ? (
          <ParticipantCard user={student} ownerId={duelOwnerId} />
        ) : (
          <ChangeDuelTeamPosition
            duelTeamPartId={participation.id}
            studentId={loggedStudent.id}
            token={token}
          />
        );
      })}
    </ParticipantsListBox>
  );
};

export default ParticipantsList;
