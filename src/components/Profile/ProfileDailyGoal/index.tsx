import React from 'react';
import BigProgressBar from '../../App/ProgressBar/BigProgressBar';
import {
  Container,
  DailyGoalHeader,
  DailyGoalHeaderBox,
  DailyGoalIcon,
  DailyGoalLabel,
  DailyGoalProgress,
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
      </DailyGoalHeader>
      <DailyGoalProgress>
        <BigProgressBar now={dailyXP} max={50} label={`${dailyXP}/${50}XP`} />
      </DailyGoalProgress>
    </Container>
  );
};

export default ProfileDailyGoal;
