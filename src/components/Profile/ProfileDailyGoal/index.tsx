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
}

const ProfileDailyGoal = (props: IProfileDailyGoalProps): JSX.Element => {
  const { isUserLogged } = props;

  return (
    <Container>
      <DailyGoalHeader>
        <DailyGoalHeaderBox>
          <DailyGoalIcon className="fas fa-bullseye" />
          <DailyGoalLabel>Meta diária</DailyGoalLabel>
        </DailyGoalHeaderBox>
        <DailyGoalInfo>
          <DailyGoalValueLabel>300 XP</DailyGoalValueLabel>
          {isUserLogged && (
            <EditDailyGoalValueButton>
              <EditDailyGoalValueIcon className="fas fa-pen" />
            </EditDailyGoalValueButton>
          )}
        </DailyGoalInfo>
      </DailyGoalHeader>
      <DailyGoalProgress>
        <ProgressBar now={50} max={300} />
        <DailyGoalProgressLabel>XP</DailyGoalProgressLabel>
      </DailyGoalProgress>
    </Container>
  );
};

export default ProfileDailyGoal;
