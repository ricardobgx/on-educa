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
  DailyGoalBox,
  DailyGoalLabel,
  DailyGoalDataBox,
  DailyGoalEditIcon,
  DailyGoalIcon,
  DailyGoalEditButton,
  DailyGoal,
} from './components';

import HomeAction from '../../components/Home/HomeAction';
import DailyPerformance from '../../components/Home/DailyPerformance';
import EditDailyGoal from '../../components/Home/EditDailyGoal';
import { ActionCreators, RootState } from '../../store';
import { Page } from '../../global/styles/components/pageComponents';
import SectionLabel from '../../components/App/SectionLabel';
import { homeActions } from '../../static/homeActions';
import SmallProgressBar from '../../components/App/ProgressBar/SmallProgressBar';
import {
  MediumMaterialIconOutlined,
  SmallMaterialIconOutlined,
} from '../../components/App/Icons/MaterialIcons/MaterialIconsOutlined';

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
          <AchievementsBox to="/achievements" className="with-shadow bd-rd-30">
            <MediumMaterialIconOutlined icon="grade" color="" />
            <AchievementsLabel>Conquistas</AchievementsLabel>
          </AchievementsBox>
          <DailyGoal className="with-shadow bd-rd-30">
            <DailyGoalBox>
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
            <SmallProgressBar now={20} max={50} />
          </DailyGoal>
        </PerformanceBox>
      </PageBox>
    </Page>
  );
};

export default Home;
