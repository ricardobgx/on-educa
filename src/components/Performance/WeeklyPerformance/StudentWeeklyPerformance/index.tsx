import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { isDefaultStudent } from '../../../../functions/entitiesValues';
import { getStudentWeeklyPerformanceByStudent } from '../../../../functions/studentWeeklyPerformance';
import {
  displayDayAndMonthDate,
  getFullDate,
} from '../../../../functions/utils';
import theme from '../../../../global/styles/theme';
import { IStudentWeeklyPerformance } from '../../../../interfaces/IStudentWeeklyPerformance';
import OnEducaAPI from '../../../../services/api';
import { DEFAULT_STUDENT_WEEKLY_PERFORMANCE } from '../../../../static/defaultEntitiesValues';
import { State } from '../../../../store';
import BarChartWithTwoValues, {
  IBarChartWithTwoValuesData,
} from '../../../App/Charts/BarChartWithTwoValues';
import SimpleBarChart, {
  ISimpleBarChartData,
} from '../../../App/Charts/SimpleBarChart';
import SectionLabel from '../../../App/SectionLabel';
import ChartTypes from '../../ChartTypes';
import { calcChartHeight, calcChartWidth } from '../functions';
import {
  WeeklyPerformanceBox,
  PerformanceChart,
  PerformanceChartBox,
} from '../styles';

const StudentWeeklyPerformance = (): JSX.Element => {
  const {
    aplication,
    people: loggedPeople,
    student,
  } = useSelector((store: State) => store);
  const { token } = aplication;

  const [chartType, setChartType] = useState('questions');
  const [studentWeeklyPerformance, setStudentWeeklyPerformance] =
    useState<IStudentWeeklyPerformance>(DEFAULT_STUDENT_WEEKLY_PERFORMANCE);

  const [questionsData, setQuestionsData] = useState<
    IBarChartWithTwoValuesData[]
  >([]);
  const [duelsData, setDuelsData] = useState<IBarChartWithTwoValuesData[]>([]);
  const [contentsData, setContentsData] = useState<ISimpleBarChartData[]>([]);

  const setChartsData = (
    studentWeeklyPerformanceData: IStudentWeeklyPerformance,
  ): void => {
    const { weekDays } = studentWeeklyPerformanceData;

    const contentsDataValues: ISimpleBarChartData[] = weekDays.map(
      (weekDay) => {
        const dataValue: ISimpleBarChartData = {
          name: displayDayAndMonthDate(getFullDate(weekDay.createdAt)),
          value: weekDay.contentsStudied,
        };

        return dataValue;
      },
    );

    const questionsDataValues: IBarChartWithTwoValuesData[] = weekDays.map(
      (weekDay) => {
        const dataValue: IBarChartWithTwoValuesData = {
          name: displayDayAndMonthDate(getFullDate(weekDay.createdAt)),
          firstValue: weekDay.questionsAnsweredCorrectly,
          secondValue: weekDay.questionsAnswered,
        };

        return dataValue;
      },
    );

    const duelsDataValues: IBarChartWithTwoValuesData[] = weekDays.map(
      (weekDay) => {
        const dataValue: IBarChartWithTwoValuesData = {
          name: displayDayAndMonthDate(getFullDate(weekDay.createdAt)),
          firstValue: weekDay.duelsWon,
          secondValue: weekDay.duelsParticipated,
        };

        return dataValue;
      },
    );

    setContentsData(contentsDataValues);
    setQuestionsData(questionsDataValues);
    setDuelsData(duelsDataValues);
    setStudentWeeklyPerformance(studentWeeklyPerformanceData);
  };

  useEffect(() => {
    if (loggedPeople.isStudent) {
      if (!isDefaultStudent(student))
        getStudentWeeklyPerformanceByStudent(
          OnEducaAPI,
          student.id,
          token,
          setChartsData,
          () => console.log('erro'),
        );
    }
  }, [student]);

  const chartTypes = [
    {
      label: 'Conteúdos',
      chartType: 'contents',
    },
    {
      label: 'Questões',
      chartType: 'questions',
    },
    {
      label: 'Duelos',
      chartType: 'duels',
    },
  ];

  return (
    <WeeklyPerformanceBox>
      <SectionLabel label="Desempenho" backLink="/home" />
      <PerformanceChart>
        <PerformanceChartBox>
          {chartType === 'questions' && (
            <BarChartWithTwoValues
              data={questionsData}
              firstValueLabel="Questões corretas"
              secondValueLabel="Todas as questões"
              width={calcChartWidth()}
              height={calcChartHeight()}
              primaryColor={theme.similarColors.rightQuestion}
              secondaryColor={theme.colors.textColor}
            />
          )}
          {chartType === 'duels' && (
            <BarChartWithTwoValues
              data={duelsData}
              firstValueLabel="Duelos vencidos"
              secondValueLabel="Duelos participados"
              width={calcChartWidth()}
              height={calcChartHeight()}
              primaryColor={theme.similarColors.rightQuestion}
              secondaryColor={theme.colors.textColor}
            />
          )}
          {chartType === 'contents' && (
            <SimpleBarChart
              data={contentsData}
              valueLabel="Conteúdos estudados"
              width={calcChartWidth()}
              height={calcChartHeight()}
              color={theme.similarColors.rightQuestion}
            />
          )}
        </PerformanceChartBox>
        <ChartTypes
          chartTypes={chartTypes}
          selectedChartType={chartType}
          setSelectedChartType={setChartType}
        />
      </PerformanceChart>
    </WeeklyPerformanceBox>
  );
};

export default StudentWeeklyPerformance;
