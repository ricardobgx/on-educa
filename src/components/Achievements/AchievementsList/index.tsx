import React from 'react';
import Achievement from '../Achievement';
import { AchievementsListBox } from './styles';

const AchievementsList: React.FC<IAchievementsListProps> = (props) => {
  const { achievements } = props;

  return (
    <AchievementsListBox className="supplies-list">
      {achievements.map((achievement) => (
        <Achievement achievement={achievement} />
      ))}
    </AchievementsListBox>
  );
};

export default AchievementsList;
