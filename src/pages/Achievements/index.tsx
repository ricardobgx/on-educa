/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { PageBox } from './styles';
import SectionLabel from '../../components/App/SectionLabel';
import { Page } from '../../global/styles/components/pageComponents';
import AchievementsList from '../../components/Achievements/AchievementsList';
import { SuppliesBox } from '../../components/App/Supplies/styles';
import OnEducaAPI from '../../services/api';
import { getAchievements } from '../../functions/achievement';
import { RootState } from '../../store';

const Achievements = (): JSX.Element => {
  const { aplication } = useSelector((store: RootState) => store);
  const { token } = aplication;

  const [achievements, setAchievements] = useState<IAchievement[]>([]);

  const getAchievementsAction = async (): Promise<void> => {
    await getAchievements(OnEducaAPI, setAchievements, token);
  };

  useEffect(() => {
    getAchievementsAction();
  }, []);

  return (
    <Page>
      <PageBox>
        <SectionLabel label="Conquistas" backLink="/" />
        <SuppliesBox>
          <AchievementsList achievements={achievements} />
        </SuppliesBox>
      </PageBox>
    </Page>
  );
};

export default Achievements;
