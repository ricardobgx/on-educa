import React from 'react';
import {
  DailyPerformanceBox,
  DayLabel,
  PerformanceDataLabel,
  PerformanceLabel,
  PerformancesBox,
  PerformancesDivisor,
  PerformancesTypeBox,
  PerformanceTypeBox,
  WeekPerformanceButton,
  WeekPerformanceButtonLabel,
} from './styles';

const DailyPerformance = (): JSX.Element => {
  return (
    <DailyPerformanceBox>
      <DayLabel>Hoje</DayLabel>
      <PerformancesBox>
        <PerformancesTypeBox>
          <PerformanceTypeBox>
            <PerformanceLabel>Ranking</PerformanceLabel>
            <PerformanceDataLabel>155º</PerformanceDataLabel>
          </PerformanceTypeBox>
          <PerformanceTypeBox>
            <PerformanceLabel>Total XP</PerformanceLabel>
            <PerformanceDataLabel>1500</PerformanceDataLabel>
          </PerformanceTypeBox>
        </PerformancesTypeBox>
        <PerformancesDivisor />
        <PerformancesTypeBox>
          <PerformanceTypeBox>
            <PerformanceLabel>Conteúdos</PerformanceLabel>
            <PerformanceDataLabel>2</PerformanceDataLabel>
          </PerformanceTypeBox>
          <PerformanceTypeBox>
            <PerformanceLabel>Questões</PerformanceLabel>
            <PerformanceDataLabel>7</PerformanceDataLabel>
          </PerformanceTypeBox>
        </PerformancesTypeBox>
      </PerformancesBox>
      <WeekPerformanceButton to="/performance">
        <WeekPerformanceButtonLabel>
          Desempenho semanal
        </WeekPerformanceButtonLabel>
      </WeekPerformanceButton>
    </DailyPerformanceBox>
  );
};

export default DailyPerformance;
