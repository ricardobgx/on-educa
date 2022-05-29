/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getAchievementProgressByPeopleAndAchievement } from '../../../functions/achievementProgress';
import { isDefaultPeople } from '../../../functions/entitiesValues';
import OnEducaAPI from '../../../services/api';
import { DEFAULT_ACHIEVEMENT_PROGRESS } from '../../../static/defaultEntitiesValues';
import { RootState } from '../../../store';
import { handleAchievementLevelName } from '../../../utils/achievementLevel';
import BigProgressBar from '../../App/ProgressBar/BigProgressBar';
import {
  AchievementBox,
  AchievementDescription,
  AchievementDescriptionLabel,
  AchievementLevel,
  AchievementLevelIcon,
  AchievementLevelLabel,
  AchievementName,
  AchievementDescriptionHeader,
  AchievementProgress,
} from './styles';

const Achievement: React.FC<IAchievementProps> = (props): JSX.Element => {
  const { people, aplication } = useSelector((store: RootState) => store);
  const { token } = aplication;

  const { achievement } = props;
  const { name, description } = achievement;

  const [achievementProgress, setAchievementProgress] =
    useState<IAchievementProgress>(DEFAULT_ACHIEVEMENT_PROGRESS);

  const getAchievementProgressAction = async (): Promise<void> => {
    await getAchievementProgressByPeopleAndAchievement(
      OnEducaAPI,
      people.id,
      achievement.id,
      setAchievementProgress,
      token,
    );
  };

  useEffect(() => {
    if (!isDefaultPeople(people) && token) getAchievementProgressAction();
  }, [people, token]);

  const { progress, level } = achievementProgress;

  return (
    <AchievementBox className="with-shadow bd-rd-15">
      <AchievementLevel>
        <AchievementLevelIcon className="fas fa-star" />
        <AchievementLevelLabel>
          {handleAchievementLevelName(level.level)}
        </AchievementLevelLabel>
      </AchievementLevel>
      <AchievementDescription>
        <AchievementDescriptionHeader>
          <AchievementName>{name}</AchievementName>
          <AchievementProgress>
            {progress}/{level.goal}
          </AchievementProgress>
        </AchievementDescriptionHeader>
        <BigProgressBar now={progress} max={level.goal} />
        <AchievementDescriptionLabel>{description}</AchievementDescriptionLabel>
      </AchievementDescription>
    </AchievementBox>
  );
};

export default Achievement;
