import React from 'react';
import { SmallMaterialIconOutlined } from '../../App/Icons/MaterialIcons/MaterialIconsOutlined';
import SmallProgressBar from '../../App/ProgressBar/SmallProgressBar';
import {
  DailyGoalBox,
  DailyGoalHeader,
  DailyGoalHeaderButton,
  DailyGoalHeaderLabel,
  DailyGoalHeaderSection,
} from './styles';

const DailyGoal: React.FC = () => {
  return (
    <DailyGoalBox className="with-shadow bd-rd-20">
      <DailyGoalHeader>
        <DailyGoalHeaderSection>
          <SmallMaterialIconOutlined icon="track_changes" color="" />
          <DailyGoalHeaderLabel>Meta diária</DailyGoalHeaderLabel>
        </DailyGoalHeaderSection>
        <DailyGoalHeaderSection>
          <DailyGoalHeaderLabel>20/50 XP</DailyGoalHeaderLabel>
          <DailyGoalHeaderButton>
            <SmallMaterialIconOutlined icon="edit" color="" />
          </DailyGoalHeaderButton>
        </DailyGoalHeaderSection>
      </DailyGoalHeader>
      <SmallProgressBar now={20} max={50} />
    </DailyGoalBox>
  );
};

export default DailyGoal;
