import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { isDefaultUser } from '../../../functions/entitiesValues';
import { getStudentWeekPerformanceByStudent } from '../../../functions/studentWeekPerformance';
import { IStudentWeekPerformance } from '../../../interfaces/IStudentWeekPerformance';
import OnEducaAPI from '../../../services/api';
import { DEFAULT_STUDENT_WEEK_PERFORMANCE } from '../../../static/defaultEntitiesValues';
import { State } from '../../../store';
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
  const { user, aplication } = useSelector((store: State) => store);
  const { token } = aplication;

  const [studentWeekPerformance, setStudentWeekPerformance] =
    useState<IStudentWeekPerformance>(DEFAULT_STUDENT_WEEK_PERFORMANCE);

  useEffect(() => {
    if (!isDefaultUser(user)) {
      getStudentWeekPerformanceByStudent(
        OnEducaAPI,
        user.id,
        token,
        setStudentWeekPerformance,
        () => console.log('erro'),
      );
    }
  }, [user]);

  const { xp, weekDay } = studentWeekPerformance;
  const { dailyXP, studiedContents, questionsAnswered } = weekDay;

  return (
    <DailyPerformanceBox className="with-shadow bd-rd-5">
      <DayLabel>Hoje</DayLabel>
      <PerformancesBox>
        <PerformancesTypeBox>
          <PerformanceTypeBox>
            <PerformanceLabel>XP hoje</PerformanceLabel>
            <PerformanceDataLabel>{dailyXP}</PerformanceDataLabel>
          </PerformanceTypeBox>
          <PerformanceTypeBox>
            <PerformanceLabel>XP semanal</PerformanceLabel>
            <PerformanceDataLabel>{xp}</PerformanceDataLabel>
          </PerformanceTypeBox>
        </PerformancesTypeBox>
        <PerformancesDivisor />
        <PerformancesTypeBox>
          <PerformanceTypeBox>
            <PerformanceLabel>Conteúdos</PerformanceLabel>
            <PerformanceDataLabel>{studiedContents}</PerformanceDataLabel>
          </PerformanceTypeBox>
          <PerformanceTypeBox>
            <PerformanceLabel>Questões</PerformanceLabel>
            <PerformanceDataLabel>{questionsAnswered}</PerformanceDataLabel>
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
