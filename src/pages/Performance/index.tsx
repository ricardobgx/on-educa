/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import SectionLabel from '../../components/App/SectionLabel';
import PerformanceChart, {
  IPerformanceChartProps,
} from '../../components/Performance/PerformanceChart';
import RankingUserCard from '../../components/Performance/RankingUserCard';
import { getUsers } from '../../functions/user';
import { IUser } from '../../interfaces/IUser';
import OnEducaAPI from '../../services/api';
import { State } from '../../store';
import { Page } from '../../global/styles/components/pageComponents';
import {
  PageBox,
  PerformanceCharts,
  Ranking,
  UsersList,
  UsersListBox,
  WeekDayButton,
  WeekDayLabel,
  WeekDays,
  WeekPerformance,
  WeekPerformanceBox,
} from './styles';

const Performance = (): JSX.Element => {
  const contentsPerformance: IPerformanceChartProps = {
    performanceChartLabel: 'Conteúdos',
    heightBar: 10,
    charts: [
      {
        chartLabel: 'Semana',
        chartBar: 10,
      },
      {
        chartLabel: 'Hoje',
        chartBar: 2,
      },
    ],
  };

  const questionsPerformance: IPerformanceChartProps = {
    performanceChartLabel: 'Questões',
    heightBar: 20,
    charts: [
      {
        chartLabel: 'Hoje',
        chartBar: 20,
      },
      {
        chartLabel: 'Corretas',
        chartBar: 12,
      },
      {
        chartLabel: 'Erradas',
        chartBar: 8,
      },
    ],
  };

  const { aplication, user: loggedUser } = useSelector((store: State) => store);
  const { userType, token } = aplication;

  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    getUsers(OnEducaAPI, userType, setUsers, token);
  }, [loggedUser]);

  return (
    <Page>
      <PageBox>
        <WeekPerformance>
          <SectionLabel label="Desempenho" backLink="/home" />
          <WeekPerformanceBox>
            <PerformanceCharts>
              <PerformanceChart {...contentsPerformance} />
              <PerformanceChart {...questionsPerformance} />
            </PerformanceCharts>
            <WeekDays>
              <WeekDayButton>
                <WeekDayLabel>24/10</WeekDayLabel>
              </WeekDayButton>
              <WeekDayButton>
                <WeekDayLabel>25/10</WeekDayLabel>
              </WeekDayButton>
              <WeekDayButton>
                <WeekDayLabel>26/10</WeekDayLabel>
              </WeekDayButton>
              <WeekDayButton>
                <WeekDayLabel>27/10</WeekDayLabel>
              </WeekDayButton>
              <WeekDayButton>
                <WeekDayLabel>28/10</WeekDayLabel>
              </WeekDayButton>
              <WeekDayButton>
                <WeekDayLabel>29/10</WeekDayLabel>
              </WeekDayButton>
              <WeekDayButton>
                <WeekDayLabel>30/10</WeekDayLabel>
              </WeekDayButton>
            </WeekDays>
          </WeekPerformanceBox>
        </WeekPerformance>
        <Ranking>
          <SectionLabel backLink="" label="Ranking" />
          <UsersList>
            <UsersListBox>
              {users.map((user, index) => (
                <RankingUserCard
                  {...user}
                  userType={userType}
                  rankingPosition={index + 1}
                />
              ))}
            </UsersListBox>
          </UsersList>
        </Ranking>
      </PageBox>
    </Page>
  );
};

export default Performance;
