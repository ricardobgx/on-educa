/* eslint-disable */
/* eslint-disable react-hooks/exhaustive-deps */

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  PageBox,
  HomeActionsBox,
  HomeActions,
  PerformanceBox,
  AchievementsBox,
  AchievementsLabel,
  AchievementsAndDailyGoal,
} from './components';

import HomeAction from '../../components/Home/HomeAction';
import DailyPerformance from '../../components/Home/DailyPerformance';
import EditDailyGoal from '../../components/Home/EditDailyGoal';
import { ActionCreators, RootState } from '../../store';
import { Page } from '../../global/styles/components/pageComponents';
import SectionLabel from '../../components/App/SectionLabel';
import { homeActions } from '../../static/homeActions';
import { MediumMaterialIconOutlined } from '../../components/App/Icons/MaterialIcons/MaterialIconsOutlined';
import DailyGoal from '../../components/Home/DailyGoal';

const Home = (): JSX.Element => {
  /* GlobalRootState */

  const { aplication } = useSelector((store: RootState) => store);
  const { isStudent } = aplication;

  const dispatch = useDispatch();

  const { disableLoadingAnimation } = bindActionCreators(
    ActionCreators,
    dispatch,
  );

  /* LocalRootState */

  const [dailyGoal, setDailyGoal] = useState(50);
  const [completedDailyGoal, setCompletedDailyGoal] = useState(20);
  const [editDailyGoal, setEditDailyGoal] = useState(false);

  useEffect(() => {
    disableLoadingAnimation();
  }, []);

  const userType = isStudent ? 'student' : 'teacher';

  return (
    <Page>
      {editDailyGoal ? (
        <EditDailyGoal
          dailyGoal={dailyGoal}
          setDailyGoal={setDailyGoal}
          setEditDailyGoal={setEditDailyGoal}
        />
      ) : null}
      <PageBox>
        <HomeActionsBox>
          <SectionLabel backLink="" label="Painel principal" />
          <HomeActions>
            {homeActions.map((homeAction) =>
              homeAction.userType === 'both' ||
              homeAction.userType === userType ? (
                <HomeAction
                  key={homeAction.label}
                  icon={homeAction.icon}
                  label={homeAction.label}
                  link={homeAction.link}
                />
              ) : null,
            )}
          </HomeActions>
        </HomeActionsBox>
        <PerformanceBox>
          <SectionLabel backLink="" label="Desempenho" />
          <DailyPerformance />
          <AchievementsAndDailyGoal>
            <AchievementsBox
              to="/achievements"
              className="with-shadow bd-rd-20"
            >
              <MediumMaterialIconOutlined icon="grade" color="" />
              <AchievementsLabel>Conquistas</AchievementsLabel>
            </AchievementsBox>
            <DailyGoal />
          </AchievementsAndDailyGoal>
        </PerformanceBox>
      </PageBox>
    </Page>
  );
};

export default Home;
