import React from 'react';
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
  const { title, reward, repetitions } = props;

  return (
    <Container className="with-shadow bd-rd-20">
      <MissionIcon className="fas fa-user-secret" />
      <MissionInfo>
        <MissionInfoHeader>
          <MissionTitle>{title}</MissionTitle>
          <MissionReward>{reward} XP</MissionReward>
        </MissionInfoHeader>
        <MissionProgress>
          <ProgressBar now={0} max={repetitions} />
        </MissionProgress>
      </MissionInfo>
    </Container>
  );
};

export default MissionCard;
