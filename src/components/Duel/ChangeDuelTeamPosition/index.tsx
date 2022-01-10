import React from 'react';
import { useSelector } from 'react-redux';
import { changeDuelTeamPosition } from '../../../functions/duelTeamParts';
import { IDuelTeamParticipation } from '../../../interfaces/IDuelTeamParticipation';
import OnEducaAPI from '../../../services/api';
import { State } from '../../../store';
import {
  ChangeDuelTeamPositionBox,
  ChangeDuelTeamPositionIcon,
  ChangeDuelTeamPositionLabel,
} from './styles';

interface IChangeDuelTeamPositionProps {
  duelTeamPartId: string;
  studentId: string;
  studentParticipation: IDuelTeamParticipation;
}

const ChangeDuelTeamPosition = (
  props: IChangeDuelTeamPositionProps,
): JSX.Element => {
  const { aplication } = useSelector((store: State) => store);
  const { token } = aplication;

  const { duelTeamPartId, studentId, studentParticipation } = props;

  const changePosition = async (): Promise<void> => {
    console.log(studentParticipation.id);
    console.log(duelTeamPartId);
    await changeDuelTeamPosition(
      OnEducaAPI,
      {
        oldDuelTeamParticipationId: studentParticipation.id,
        newDuelTeamParticipationId: duelTeamPartId,
        studentId,
      },
      token,
      () => console.log('atualizou'),
      () => console.log('erro'),
    );
  };

  return (
    <ChangeDuelTeamPositionBox onClick={() => changePosition()}>
      <ChangeDuelTeamPositionIcon className="fas fa-user-astronaut" />
      <ChangeDuelTeamPositionLabel>
        Conquistar este lugar
      </ChangeDuelTeamPositionLabel>
    </ChangeDuelTeamPositionBox>
  );
};

export default ChangeDuelTeamPosition;
