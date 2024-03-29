/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { isDefaultTeacher } from '../../../../functions/entitiesValues';
import { getTeacherWeeklyPerformanceByTeacher } from '../../../../functions/teacherWeeklyPerformance';
import {
  displayDayAndMonthDate,
  getFullDate,
} from '../../../../functions/utils';
import OnEducaAPI from '../../../../services/api';
import { ActionCreators, RootState } from '../../../../store';
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

const TeacherWeeklyPerformance = (): JSX.Element => {
  const {
    aplication,
    people: loggedPeople,
    teacher,
    theme,
  } = useSelector((store: RootState) => store);
  const { token } = aplication;

  const dispatch = useDispatch();
  const { showFloatNotification } = bindActionCreators(
    ActionCreators,
    dispatch,
  );

  const [chartType, setChartType] = useState('contents');

  const [contentsData, setContentsData] = useState<ISimpleBarChartData[]>([]);
  const [questionsData, setQuestionsData] = useState<ISimpleBarChartData[]>([]);
  const [doubtsData, setDoubtsData] = useState<ISimpleBarChartData[]>([]);
  const [interativeRoomsData, setInterativeRoomsData] = useState<
    ISimpleBarChartData[]
  >([]);

  // Dimensoes do dispositivo

  const setChartsData = (
    teacherWeeklyPerformanceData: ITeacherWeeklyPerformance,
  ): void => {
    const { weekDays } = teacherWeeklyPerformanceData;

    const contentsDataValues: ISimpleBarChartData[] = weekDays.map(
      (weekDay) => {
        const dataValue: ISimpleBarChartData = {
          name: displayDayAndMonthDate(getFullDate(weekDay.createdAt)),
          value: weekDay.contentsCreated,
        };

        return dataValue;
      },
    );

    const questionsDataValues: ISimpleBarChartData[] = weekDays.map(
      (weekDay) => {
        const dataValue: ISimpleBarChartData = {
          name: displayDayAndMonthDate(getFullDate(weekDay.createdAt)),
          value: weekDay.questionsCreated,
        };

        return dataValue;
      },
    );

    const doubtsDataValues: ISimpleBarChartData[] = weekDays.map((weekDay) => {
      const dataValue: ISimpleBarChartData = {
        name: displayDayAndMonthDate(getFullDate(weekDay.createdAt)),
        value: weekDay.doubtsSolved,
      };

      return dataValue;
    });

    const interativeRoomsDataValues: ISimpleBarChartData[] = weekDays.map(
      (weekDay) => {
        const dataValue: ISimpleBarChartData = {
          name: displayDayAndMonthDate(getFullDate(weekDay.createdAt)),
          value: weekDay.interativeRoomsCreated,
        };

        return dataValue;
      },
    );

    setContentsData(contentsDataValues);
    setQuestionsData(questionsDataValues);
    setDoubtsData(doubtsDataValues);
    setInterativeRoomsData(interativeRoomsDataValues);
  };

  useEffect(() => {
    if (!loggedPeople.isStudent) {
      if (!isDefaultTeacher(teacher))
        getTeacherWeeklyPerformanceByTeacher(
          OnEducaAPI,
          teacher.id,
          token,
          setChartsData,
          () => showFloatNotification('Ocorreu um erro'),
        );
    }
  }, [teacher]);

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
      label: 'Dúvidas',
      chartType: 'doubts',
    },
    {
      label: 'Salas',
      chartType: 'interativeRooms',
    },
  ];

  return (
    <WeeklyPerformanceBox>
      <SectionLabel label="Desempenho" backLink="/" />
      <PerformanceChart className="with-shadow bd-rd-30">
        <PerformanceChartBox>
          {chartType === 'contents' && (
            <SimpleBarChart
              data={contentsData}
              valueLabel="Conteúdos criados"
              width={calcChartWidth()}
              height={calcChartHeight()}
              color={theme.colors.mainColor}
            />
          )}
          {chartType === 'questions' && (
            <SimpleBarChart
              data={questionsData}
              valueLabel="Questões criadas"
              width={calcChartWidth()}
              height={calcChartHeight()}
              color={theme.colors.mainColor}
            />
          )}
          {chartType === 'doubts' && (
            <SimpleBarChart
              data={doubtsData}
              valueLabel="Dúvidas resolvidas"
              width={calcChartWidth()}
              height={calcChartHeight()}
              color={theme.colors.mainColor}
            />
          )}
          {chartType === 'interativeRooms' && (
            <SimpleBarChart
              data={interativeRoomsData}
              valueLabel="Salas criadas"
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

export default TeacherWeeklyPerformance;
