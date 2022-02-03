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
  DailyGoalBox,
  DailyGoalLabel,
  DailyGoalDataBox,
  DailyGoalEditIcon,
  DailyGoalIcon,
  AchievementsIcon,
  DailyGoalEditButton,
} from './components';

import HomeAction from '../../components/Home/HomeAction';
import DailyPerformance from '../../components/Home/DailyPerformance';
import EditDailyGoal from '../../components/Home/EditDailyGoal';
import { ActionCreators, State } from '../../store';
import { Page } from '../../global/styles/components/pageComponents';
import SectionLabel from '../../components/App/SectionLabel';
import { homeActions } from '../../static/homeActions';

const Home = (): JSX.Element => {
  /* Global State */

  const { aplication } = useSelector((store: State) => store);
  const { userType } = aplication;

  const dispatch = useDispatch();

  const { disableLoadingAnimation } = bindActionCreators(
    ActionCreators,
    dispatch,
  );

  /* Local State */

  const [dailyGoal, setDailyGoal] = useState(50);
  const [completedDailyGoal, setCompletedDailyGoal] = useState(20);
  const [editDailyGoal, setEditDailyGoal] = useState(false);

  useEffect(() => {
    disableLoadingAnimation();
  }, []);

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
          <AchievementsBox to="/achievements" className="with-shadow bd-rd-5">
            <AchievementsIcon className="fas fa-star" />
            <AchievementsLabel>Conquistas</AchievementsLabel>
          </AchievementsBox>
          <DailyGoalBox className="with-shadow bd-rd-5">
            <DailyGoalDataBox>
              <DailyGoalIcon className="fas fa-bullseye" />
              <DailyGoalLabel>Meta diária</DailyGoalLabel>
            </DailyGoalDataBox>
            <DailyGoalDataBox>
              <DailyGoalLabel>
                {completedDailyGoal}/{dailyGoal} XP
              </DailyGoalLabel>
              <DailyGoalEditButton onClick={() => setEditDailyGoal(true)}>
                <DailyGoalEditIcon className="fas fa-pen" />
              </DailyGoalEditButton>
            </DailyGoalDataBox>
          </DailyGoalBox>
        </PerformanceBox>
      </PageBox>
    </Page>
  );
};

export default Home;
