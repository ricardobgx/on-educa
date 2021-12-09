/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import SectionLabel from '../../components/App/SectionLabel';
import { IUserCardProps } from '../../components/App/UserCard';
import PerformanceChart, {
  IPerformanceChartProps,
} from '../../components/Performance/PerformanceChart';
import RankingUserCard from '../../components/Performance/RankingUserCard';
import { Page } from '../components';
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

  const users: IUserCardProps[] = [
    {
      email: 'teste1@gmail.com',
      name: 'Aluno Fulano Sicrano da Silva',
      schoolGradeId: 'ssjvsdnskdnvsnvsvnsns',
      isStudent: true,
      league: 'Diamond',
      isOnline: true,
      profilePicture:
        'https://i.pinimg.com/474x/a2/92/de/a292de2720b31e18ceb366e5ca343fd0.jpg',
    },
    {
      email: 'teste1@gmail.com',
      name: 'Aluno Fulano Sicrano da Silva',
      schoolGradeId: 'ssjvsdnskdnvsnvsvnsns',
      isStudent: true,
      league: 'Diamond',
      isOnline: true,
      profilePicture:
        'https://i.pinimg.com/474x/a2/92/de/a292de2720b31e18ceb366e5ca343fd0.jpg',
    },
    {
      email: 'teste1@gmail.com',
      name: 'Aluno Fulano Sicrano da Silva',
      schoolGradeId: 'ssjvsdnskdnvsnvsvnsns',
      isStudent: true,
      league: 'Diamond',
      isOnline: true,
      profilePicture:
        'https://i.pinimg.com/474x/a2/92/de/a292de2720b31e18ceb366e5ca343fd0.jpg',
    },
    {
      email: 'teste1@gmail.com',
      name: 'Aluno Fulano Sicrano da Silva',
      schoolGradeId: 'ssjvsdnskdnvsnvsvnsns',
      isStudent: true,
      league: 'Diamond',
      isOnline: true,
      profilePicture:
        'https://i.pinimg.com/474x/a2/92/de/a292de2720b31e18ceb366e5ca343fd0.jpg',
    },
    {
      email: 'teste1@gmail.com',
      name: 'Aluno Fulano Sicrano da Silva',
      schoolGradeId: 'ssjvsdnskdnvsnvsvnsns',
      isStudent: true,
      league: 'Diamond',
      isOnline: true,
      profilePicture:
        'https://i.pinimg.com/474x/a2/92/de/a292de2720b31e18ceb366e5ca343fd0.jpg',
    },
    {
      email: 'teste1@gmail.com',
      name: 'Aluno Fulano Sicrano da Silva',
      schoolGradeId: 'ssjvsdnskdnvsnvsvnsns',
      isStudent: true,
      league: 'Diamond',
      isOnline: true,
      profilePicture:
        'https://i.pinimg.com/474x/a2/92/de/a292de2720b31e18ceb366e5ca343fd0.jpg',
    },
  ];

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
                <RankingUserCard {...user} rankingPosition={index + 1} />
              ))}
            </UsersListBox>
          </UsersList>
        </Ranking>
      </PageBox>
    </Page>
  );
};

export default Performance;
