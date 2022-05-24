/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { isDefaultStudent } from '../../../../functions/entitiesValues';
import { getStudentWeeklyPerformanceByStudent } from '../../../../functions/studentWeeklyPerformance';
import {
  displayDayAndMonthDate,
  getFullDate,
} from '../../../../functions/utils';
import OnEducaAPI from '../../../../services/api';
import { ActionCreators, RootState } from '../../../../store';
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

const StudentWeeklyPerformance: React.FC = () => {
  const {
    aplication,
    people: loggedPeople,
    student,
    theme,
  } = useSelector((store: RootState) => store);
  const { token } = aplication;

  const dispatch = useDispatch();
  const { showFloatNotification } = bindActionCreators(
    ActionCreators,
    dispatch,
  );

  const [chartType, setChartType] = useState('questions');

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
  };

  useEffect(() => {
    if (loggedPeople.isStudent) {
      if (!isDefaultStudent(student))
        getStudentWeeklyPerformanceByStudent(
          OnEducaAPI,
          student.id,
          token,
          setChartsData,
          () => showFloatNotification('Ocorreu um erro'),
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
      <SectionLabel label="Desempenho" backLink="/" />
      <PerformanceChart className="with-shadow bd-rd-30">
        <PerformanceChartBox>
          {chartType === 'questions' && (
            <BarChartWithTwoValues
              data={questionsData}
              firstValueLabel="Questões corretas"
              secondValueLabel="Todas as questões"
              width={calcChartWidth()}
              height={calcChartHeight()}
              primaryColor={theme.flagColors.greenColor}
              secondaryColor={theme.colors.mainColor}
            />
          )}
          {chartType === 'duels' && (
            <BarChartWithTwoValues
              data={duelsData}
              firstValueLabel="Duelos vencidos"
              secondValueLabel="Duelos participados"
              width={calcChartWidth()}
              height={calcChartHeight()}
              primaryColor={theme.flagColors.greenColor}
              secondaryColor={theme.colors.mainColor}
            />
          )}
          {chartType === 'contents' && (
            <SimpleBarChart
              data={contentsData}
              valueLabel="Conteúdos estudados"
              width={calcChartWidth()}
              height={calcChartHeight()}
              color={theme.colors.mainColor}
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
