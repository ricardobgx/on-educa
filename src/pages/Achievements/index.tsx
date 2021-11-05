import React from 'react';
import { Page } from '../components';
import Achievement from '../../components/Achievements/Achievement';
import { AllAchievements, AllAchievementsBox, PageBox } from './styles';
import SectionLabel from '../../components/App/SectionLabel';

const Achievements = (): JSX.Element => {
  return (
    <Page>
      <PageBox>
        <AllAchievements>
          <SectionLabel label="Conquistas" backLink="/home" />
          <AllAchievementsBox>
            <Achievement />
            <Achievement />
            <Achievement />
            <Achievement />
            <Achievement />
          </AllAchievementsBox>
        </AllAchievements>
      </PageBox>
    </Page>
  );
};

export default Achievements;
