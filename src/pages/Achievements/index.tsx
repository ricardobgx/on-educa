import React from 'react';
import { Page } from '../components';
import Achievement from '../../components/Achievements/Achievement';
import { AchievementsList, AchievementsListBox, PageBox } from './styles';
import SectionLabel from '../../components/App/SectionLabel';

const Achievements = (): JSX.Element => {
  return (
    <Page>
      <PageBox>
        <SectionLabel label="Conquistas" backLink="/home" />
        <AchievementsList>
          <AchievementsListBox>
            <Achievement />
            <Achievement />
            <Achievement />
            <Achievement />
            <Achievement />
          </AchievementsListBox>
        </AchievementsList>
      </PageBox>
    </Page>
  );
};

export default Achievements;
