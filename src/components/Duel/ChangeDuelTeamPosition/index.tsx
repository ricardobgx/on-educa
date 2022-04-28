/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-console */

import React from 'react';
import { useSelector } from 'react-redux';
import { socket } from '../../../App';
import { changeDuelTeamPosition } from '../../../functions/duelTeamParts';
import OnEducaAPI from '../../../services/api';
import { RootState } from '../../../store';
import { MediumMaterialIconRound } from '../../App/Icons/MaterialIcons/MaterialIconsRound';
import {
  ChangeDuelTeamPositionBox,
  ChangeDuelTeamPositionLabel,
} from './styles';

interface IChangeDuelTeamPositionProps {
  duelId: string;
  duelOwner: IStudent;
  loggedStudent: IStudent;
  studentParticipation: IDuelTeamParticipation;
  participation: IDuelTeamParticipation;
}

const ChangeDuelTeamPosition = (
  props: IChangeDuelTeamPositionProps,
): JSX.Element => {
  const { aplication } = useSelector((store: RootState) => store);
  const { token } = aplication;

  const {
    participation,
    loggedStudent,
    studentParticipation,
    duelId,
    duelOwner,
  } = props;

  const changePosition = async (): Promise<void> => {
    await changeDuelTeamPosition(
      OnEducaAPI,
      {
        oldDuelTeamParticipationId: studentParticipation.id,
        newDuelTeamParticipationId: participation.id,
        studentId: loggedStudent.id,
      },
      token,
      () => {
        socket.emit(`duel.update-participation`, {
          duelId,
          data: {
            ...participation,
            student: loggedStudent,
          } as IDuelTeamParticipation,
        });
      },
      () => console.log('erro'),
    );
  };

  return (
    <ChangeDuelTeamPositionBox onClick={() => changePosition()}>
      <MediumMaterialIconRound color="" icon="event_seat" />
      <ChangeDuelTeamPositionLabel>
        Vir para este lugar
      </ChangeDuelTeamPositionLabel>
    </ChangeDuelTeamPositionBox>
  );
};

export default ChangeDuelTeamPosition;
