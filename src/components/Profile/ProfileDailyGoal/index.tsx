import React from 'react';
import ProgressBar from '../../App/ProgressBar';
import {
  Container,
  DailyGoalHeader,
  DailyGoalHeaderBox,
  DailyGoalIcon,
  DailyGoalLabel,
  DailyGoalInfo,
  DailyGoalValueLabel,
  EditDailyGoalValueButton,
  EditDailyGoalValueIcon,
  DailyGoalProgress,
  DailyGoalProgressLabel,
} from './styles';

interface IProfileDailyGoalProps {
  isUserLogged: boolean;
  dailyXP: number;
}

const ProfileDailyGoal = (props: IProfileDailyGoalProps): JSX.Element => {
  const { isUserLogged, dailyXP } = props;

  return (
    <Container className="with-shadow bd-rd-5">
      <DailyGoalHeader>
        <DailyGoalHeaderBox>
          <DailyGoalIcon className="fas fa-bullseye" />
          <DailyGoalLabel>Meta diária</DailyGoalLabel>
        </DailyGoalHeaderBox>
        <DailyGoalInfo>
          <DailyGoalValueLabel>50 XP</DailyGoalValueLabel>
          {isUserLogged && (
            <EditDailyGoalValueButton>
              <EditDailyGoalValueIcon className="fas fa-pen" />
            </EditDailyGoalValueButton>
          )}
        </DailyGoalInfo>
      </DailyGoalHeader>
      <DailyGoalProgress>
        <ProgressBar now={dailyXP} max={50} />
        <DailyGoalProgressLabel>XP</DailyGoalProgressLabel>
      </DailyGoalProgress>
    </Container>
  );
};

export default ProfileDailyGoal;
