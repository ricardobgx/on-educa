import React, { useState } from 'react';
import {
  EditDailyGoalBox,
  EditDailyGoalButton,
  EditDailyGoalButtonLabel,
  EditDailyGoalLabel,
  ExperienceLabel,
  GoalInput,
  GoalInputBox,
  ShadowBackground,
} from './styles';

interface IEditDailyGoalProps {
  dailyGoal: number;
  setDailyGoal: (value: number) => void;
  setEditDailyGoal: (value: boolean) => void;
}

const EditDailyGoal = (props: IEditDailyGoalProps): JSX.Element => {
  const { dailyGoal, setDailyGoal, setEditDailyGoal } = props;
  const [newDailyGoal, setNewDailyGoal] = useState(dailyGoal);

  return (
    <ShadowBackground>
      <EditDailyGoalBox>
        <EditDailyGoalLabel>Nova meta diária</EditDailyGoalLabel>
        <GoalInputBox>
          <GoalInput
            type="number"
            value={newDailyGoal}
            onInput={(event: React.ChangeEvent<HTMLInputElement>) =>
              setNewDailyGoal(Number(event.target.value))
            }
            placeholder="50"
          />
          <ExperienceLabel>XP</ExperienceLabel>
        </GoalInputBox>
        <EditDailyGoalButton
          onClick={() => {
            setDailyGoal(newDailyGoal);
            setEditDailyGoal(false);
          }}
        >
          <EditDailyGoalButtonLabel>Concluir</EditDailyGoalButtonLabel>
        </EditDailyGoalButton>
      </EditDailyGoalBox>
    </ShadowBackground>
  );
};

export default EditDailyGoal;
