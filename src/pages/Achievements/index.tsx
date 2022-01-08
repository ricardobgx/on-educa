import React from 'react';
import Achievement from '../../components/Achievements/Achievement';
import { AchievementsList, AchievementsListBox, PageBox } from './styles';
import SectionLabel from '../../components/App/SectionLabel';
import { Page } from '../../global/styles/components/pageComponents';

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
