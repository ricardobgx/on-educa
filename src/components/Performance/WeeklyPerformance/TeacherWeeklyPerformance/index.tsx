import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { isDefaultTeacher } from '../../../../functions/entitiesValues';
import { getTeacherWeeklyPerformanceByTeacher } from '../../../../functions/teacherWeeklyPerformance';
import {
  displayDayAndMonthDate,
  getFullDate,
} from '../../../../functions/utils';
import theme from '../../../../global/styles/theme';
import OnEducaAPI from '../../../../services/api';
import { DEFAULT_TEACHER_WEEKLY_PERFORMANCE } from '../../../../static/defaultEntitiesValues';
import { RootState } from '../../../../store';
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
  } = useSelector((store: RootState) => store);
  const { token } = aplication;

  const [chartType, setChartType] = useState('contents');
  const [teacherWeeklyPerformance, setTeacherWeeklyPerformance] =
    useState<ITeacherWeeklyPerformance>(DEFAULT_TEACHER_WEEKLY_PERFORMANCE);

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
    setTeacherWeeklyPerformance(teacherWeeklyPerformanceData);
  };

  useEffect(() => {
    if (!loggedPeople.isStudent) {
      if (!isDefaultTeacher(teacher))
        getTeacherWeeklyPerformanceByTeacher(
          OnEducaAPI,
          teacher.id,
          token,
          setChartsData,
          () => console.log('erro'),
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
      <SectionLabel label="Desempenho" backLink="/home" />
      <PerformanceChart>
        <PerformanceChartBox>
          {chartType === 'contents' && (
            <SimpleBarChart
              data={contentsData}
              valueLabel="Conteúdos criados"
              width={calcChartWidth()}
              height={calcChartHeight()}
              color={theme.similarColors.rightQuestion}
            />
          )}
          {chartType === 'questions' && (
            <SimpleBarChart
              data={questionsData}
              valueLabel="Questões criadas"
              width={calcChartWidth()}
              height={calcChartHeight()}
              color={theme.similarColors.rightQuestion}
            />
          )}
          {chartType === 'doubts' && (
            <SimpleBarChart
              data={doubtsData}
              valueLabel="Dúvidas resolvidas"
              width={calcChartWidth()}
              height={calcChartHeight()}
              color={theme.similarColors.rightQuestion}
            />
          )}
          {chartType === 'interativeRooms' && (
            <SimpleBarChart
              data={interativeRoomsData}
              valueLabel="Salas criadas"
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

export default TeacherWeeklyPerformance;
