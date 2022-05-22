import React from 'react';
import { SmallMaterialIconOutlined } from '../../App/Icons/MaterialIcons/MaterialIconsOutlined';
import BigProgressBar from '../../App/ProgressBar/BigProgressBar';
import {
  Container,
  DailyGoalHeader,
  DailyGoalHeaderBox,
  DailyGoalIcon,
  DailyGoalLabel,
  DailyGoalProgress,
  DailyGoalProgressLabel,
  EditDailyGoalValueButton,
} from './styles';

interface IProfileDailyGoalProps {
  dailyXP: number;
}

const ProfileDailyGoal = (props: IProfileDailyGoalProps): JSX.Element => {
  const { dailyXP } = props;

  return (
    <Container className="with-shadow bd-rd-30">
      <DailyGoalHeader>
        <DailyGoalHeaderBox>
          <DailyGoalIcon className="fas fa-bullseye" />
          <DailyGoalLabel>Meta diária</DailyGoalLabel>
        </DailyGoalHeaderBox>
        <DailyGoalProgress>
          <DailyGoalProgressLabel>
            {dailyXP}/{50} XP
          </DailyGoalProgressLabel>
          <EditDailyGoalValueButton>
            <SmallMaterialIconOutlined icon="edit" color="" />
          </EditDailyGoalValueButton>
        </DailyGoalProgress>
      </DailyGoalHeader>
      <DailyGoalProgress>
        <BigProgressBar now={dailyXP} max={50} />
      </DailyGoalProgress>
    </Container>
  );
};

export default ProfileDailyGoal;
