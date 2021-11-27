import React from 'react';
import { IMission } from '../../../interfaces/IMission';
import ProgressBar from '../../App/ProgressBar';
import {
  Container,
  MissionIcon,
  MissionInfo,
  MissionInfoHeader,
  MissionTitle,
  MissionReward,
  MissionProgress,
} from './styles';

const MissionCard = (props: IMission): JSX.Element => {
  const { title, reward } = props;

  return (
    <Container>
      <MissionIcon className="fas fa-user-secret" />
      <MissionInfo>
        <MissionInfoHeader>
          <MissionTitle>{title}</MissionTitle>
          <MissionReward>{reward} XP</MissionReward>
        </MissionInfoHeader>
        <MissionProgress>
          <ProgressBar now={1} max={2} />
        </MissionProgress>
      </MissionInfo>
    </Container>
  );
};

export default MissionCard;
