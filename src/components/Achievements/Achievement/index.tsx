import React from 'react';
import {
  AchievementBox,
  AchievementDescription,
  AchievementDescriptionLabel,
  AchievementInnerProgressBar,
  AchievementLevel,
  AchievementLevelIcon,
  AchievementLevelLabel,
  AchievementName,
  AchievementProgress,
  AchievementProgressBar,
  AchievementProgressLabel,
} from './styles';

const Achievement = (): JSX.Element => {
  return (
    <AchievementBox>
      <AchievementLevel>
        <AchievementLevelIcon className="fas fa-star" />
        <AchievementLevelLabel>Prata</AchievementLevelLabel>
      </AchievementLevel>
      <AchievementDescription>
        <AchievementName>Estudioso</AchievementName>
        <AchievementProgress>
          <AchievementProgressBar>
            <AchievementInnerProgressBar />
          </AchievementProgressBar>
          <AchievementProgressLabel>0/1</AchievementProgressLabel>
        </AchievementProgress>
        <AchievementDescriptionLabel>
          Estude um novo conteúdo por dia durante 7 dias
        </AchievementDescriptionLabel>
      </AchievementDescription>
    </AchievementBox>
  );
};

export default Achievement;
