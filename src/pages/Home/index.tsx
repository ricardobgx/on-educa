/* eslint-disable */
/* eslint-disable react-hooks/exhaustive-deps */

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  PageBox,
  HomeActionsBox,
  HomeActions,
  HomePerformance,
  HomePerformanceBox,
  AchievementsAndDailyGoal,
} from './components';

import HomeAction from '../../components/Home/HomeAction';
import DailyPerformance from '../../components/Home/DailyPerformance';
import EditDailyGoal from '../../components/Home/EditDailyGoal';
import { ActionCreators, RootState } from '../../store';
import { Page } from '../../global/styles/components/pageComponents';
import SectionLabel from '../../components/App/SectionLabel';
import { homeActions } from '../../static/homeActions';
import DailyGoal from '../../components/Home/DailyGoal';
import PerformanceLink from '../../components/Home/PerformanceLink';

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
        <HomePerformance>
          <SectionLabel backLink="" label="Desempenho" />
          <HomePerformanceBox>
            <DailyPerformance />
            <PerformanceLink
              link="/achievements"
              icon="grade"
              label="Conquistas"
            />
            <PerformanceLink link="/missions" icon="task_alt" label="Missões" />
            <DailyGoal />
          </HomePerformanceBox>
        </HomePerformance>
      </PageBox>
    </Page>
  );
};

export default Home;
