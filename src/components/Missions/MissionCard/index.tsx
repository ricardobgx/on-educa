import React from 'react';
import { BigMaterialIconOutlined } from '../../App/Icons/MaterialIcons/MaterialIconsOutlined';
import BigProgressBar from '../../App/ProgressBar/BigProgressBar';
import {
  Container,
  MissionInfo,
  MissionInfoHeader,
  MissionTitle,
  MissionReward,
  MissionProgress,
} from './styles';

const MissionCard = (props: IMission): JSX.Element => {
  const { description, reward, goal } = props;

  return (
    <Container className="with-shadow bd-rd-15">
      <BigMaterialIconOutlined icon="task_alt" color="" />
      <MissionInfo>
        <MissionInfoHeader>
          <MissionTitle>{description}</MissionTitle>
          <MissionReward>{reward} XP</MissionReward>
        </MissionInfoHeader>
        <MissionProgress>
          <BigProgressBar now={0} max={goal} />
        </MissionProgress>
      </MissionInfo>
    </Container>
  );
};

export default MissionCard;
