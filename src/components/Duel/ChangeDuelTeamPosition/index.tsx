import React from 'react';
import { useSelector } from 'react-redux';
import { changeDuelTeamPosition } from '../../../functions/duelTeamParts';
import { IDuelTeamParticipation } from '../../../interfaces/IDuelTeamParticipation';
import OnEducaAPI from '../../../services/api';
import { State } from '../../../store';
import { MediumMaterialIconRound } from '../../App/Icons/MaterialIcons/MaterialIconsRound';
import {
  ChangeDuelTeamPositionBox,
  ChangeDuelTeamPositionLabel,
} from './styles';

interface IChangeDuelTeamPositionProps {
  duelTeamPartId: string;
  studentId: string;
  studentParticipation: IDuelTeamParticipation;
  refreshDuel: () => void;
}

const ChangeDuelTeamPosition = (
  props: IChangeDuelTeamPositionProps,
): JSX.Element => {
  const { aplication } = useSelector((store: State) => store);
  const { token } = aplication;

  const { duelTeamPartId, studentId, studentParticipation, refreshDuel } =
    props;

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
      refreshDuel,
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
