import React from 'react';
import ProgressBar from '../../App/ProgressBar';
import {
  Container,
  DailyGoalHeader,
  DailyGoalHeaderBox,
  DailyGoalIcon,
  DailyGoalLabel,
  DailyGoalProgress,
  DailyGoalProgressLabel,
} from './styles';

interface IProfileDailyGoalProps {
  dailyXP: number;
}

const ProfileDailyGoal = (props: IProfileDailyGoalProps): JSX.Element => {
  const { dailyXP } = props;

  return (
    <Container className="with-shadow bd-rd-5">
      <DailyGoalHeader>
        <DailyGoalHeaderBox>
          <DailyGoalIcon className="fas fa-bullseye" />
          <DailyGoalLabel>Meta diária</DailyGoalLabel>
        </DailyGoalHeaderBox>
      </DailyGoalHeader>
      <DailyGoalProgress>
        <ProgressBar now={dailyXP} max={50} />
        <DailyGoalProgressLabel>XP</DailyGoalProgressLabel>
      </DailyGoalProgress>
    </Container>
  );
};

export default ProfileDailyGoal;
