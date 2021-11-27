import React from 'react';
import {
  Container,
  WeekPerformanceInfo,
  WeekPerformanceInfoBox,
  WeekPerformanceDataLabel,
  UserLeague,
  UserLeagueIcon,
  UserLeagueLabel,
  SeeChartsButton,
  SeeChartsButtonLabel,
} from './styles';

const WeekPerformance = (): JSX.Element => {
  const isOwner = true;

  return (
    <Container>
      <WeekPerformanceInfo>
        <WeekPerformanceInfoBox>
          <WeekPerformanceDataLabel>XP Semanal</WeekPerformanceDataLabel>
          <WeekPerformanceDataLabel>Ranking</WeekPerformanceDataLabel>
        </WeekPerformanceInfoBox>
        <WeekPerformanceInfoBox>
          <WeekPerformanceDataLabel>1800 XP</WeekPerformanceDataLabel>
          <WeekPerformanceDataLabel>8ª posição</WeekPerformanceDataLabel>
        </WeekPerformanceInfoBox>
        <UserLeague>
          <UserLeagueIcon className="fas fa-trophy" />
          <UserLeagueLabel>Mestre</UserLeagueLabel>
        </UserLeague>
      </WeekPerformanceInfo>
      {isOwner && (
        <SeeChartsButton>
          <SeeChartsButtonLabel>Ver gráficos</SeeChartsButtonLabel>
        </SeeChartsButton>
      )}
    </Container>
  );
};

export default WeekPerformance;
