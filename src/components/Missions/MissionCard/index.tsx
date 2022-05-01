import React from 'react';
import { BigMaterialIconOutlined } from '../../App/Icons/MaterialIcons/MaterialIconsOutlined';
import ProgressBar from '../../App/ProgressBar';
import {
  Container,
  MissionInfo,
  MissionInfoHeader,
  MissionTitle,
  MissionReward,
  MissionProgress,
} from './styles';

const MissionCard = (props: IMission): JSX.Element => {
  const { title, reward, repetitions } = props;

  return (
    <Container className="with-shadow bd-rd-30">
      <BigMaterialIconOutlined icon="task_alt" color="" />
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
