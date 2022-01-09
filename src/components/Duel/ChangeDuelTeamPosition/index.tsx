import React from 'react';
import { updateDuelTeamParticipation } from '../../../functions/duelTeamParts';
import OnEducaAPI from '../../../services/api';
import {
  ChangeDuelTeamPositionBox,
  ChangeDuelTeamPositionIcon,
  ChangeDuelTeamPositionLabel,
} from './styles';

interface IChangeDuelTeamPositionProps {
  duelTeamPartId: string;
  studentId: string;
  token: string;
}

const ChangeDuelTeamPosition = (
  props: IChangeDuelTeamPositionProps,
): JSX.Element => {
  const { duelTeamPartId, studentId, token } = props;

  const changeDuelTeamPosition = async (): Promise<void> => {
    console.log(duelTeamPartId);
    await updateDuelTeamParticipation(
      OnEducaAPI,
      duelTeamPartId,
      { studentId },
      token,
      () => console.log('atualizou'),
      () => console.log('erro'),
    );
  };

  return (
    <ChangeDuelTeamPositionBox onClick={() => changeDuelTeamPosition()}>
      <ChangeDuelTeamPositionIcon className="fas fa-user-astronaut" />
      <ChangeDuelTeamPositionLabel>
        Conquistar este lugar
      </ChangeDuelTeamPositionLabel>
    </ChangeDuelTeamPositionBox>
  );
};

export default ChangeDuelTeamPosition;
