import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { isDefaultStudent } from '../../../functions/entitiesValues';
import { getStudentWeekPerformanceByStudent } from '../../../functions/studentWeekPerformance';
import {
  deviceHeight,
  deviceType,
  deviceWidth,
  displayDayAndMonthDate,
} from '../../../functions/utils';
import theme from '../../../global/styles/theme';
import { IStudentWeekPerformance } from '../../../interfaces/IStudentWeekPerformance';
import OnEducaAPI from '../../../services/api';
import { DEFAULT_STUDENT_WEEK_PERFORMANCE } from '../../../static/defaultEntitiesValues';
import { State } from '../../../store';
import { DeviceType } from '../../../types/deviceType';
import BarChartWithTwoValues, {
  IBarChartWithTwoValuesData,
} from '../../App/Charts/BarChartWithTwoValues';
import SimpleBarChart, {
  ISimpleBarChartData,
} from '../../App/Charts/SimpleBarChart';
import SectionLabel from '../../App/SectionLabel';
import {
  WeekPerformanceBox,
  ChartTypeButton,
  ChartTypeLabel,
  ChartTypes,
  PerformanceChart,
  PerformanceChartBox,
} from './styles';

const WeekPerformance = (): JSX.Element => {
  const {
    aplication,
    people: loggedPeople,
    student,
    teacher,
  } = useSelector((store: State) => store);
  const { token } = aplication;

  const [chartType, setChartType] = useState('questions');
  const [studentWeekPerformance, setStudentWeekPerformance] =
    useState<IStudentWeekPerformance>(DEFAULT_STUDENT_WEEK_PERFORMANCE);

  const [questionsData, setQuestionsData] = useState<
    IBarChartWithTwoValuesData[]
  >([]);
  const [duelsData, setDuelsData] = useState<IBarChartWithTwoValuesData[]>([]);
  const [contentsData, setContentsData] = useState<ISimpleBarChartData[]>([]);

  // Dimensoes do dispositivo

  const screenWidth = deviceWidth();
  const screenHeight = deviceHeight();
  const deviceTypeData = deviceType();

  const calcChartWidth = (): number => {
    if (deviceTypeData !== DeviceType.COMPUTER) {
      if (screenWidth > 450) {
        return screenWidth - 120;
      }
      return 450;
    }
    return screenWidth / 2;
  };

  const calcChartHeight = (): number => {
    if (deviceTypeData !== DeviceType.COMPUTER) {
      return 300;
    }
    return screenHeight - 330;
  };

  const setChartsData = (
    studentWeekPerformanceData: IStudentWeekPerformance,
  ): void => {
    const { weekDays } = studentWeekPerformanceData;

    const contentsDataValues: ISimpleBarChartData[] = weekDays.map(
      (weekDay) => {
        const dataValue: ISimpleBarChartData = {
          name: displayDayAndMonthDate(weekDay.createdAt),
          value: weekDay.contentsStudied,
        };

        return dataValue;
      },
    );

    const questionsDataValues: IBarChartWithTwoValuesData[] = weekDays.map(
      (weekDay) => {
        const dataValue: IBarChartWithTwoValuesData = {
          name: displayDayAndMonthDate(weekDay.createdAt),
          firstValue: weekDay.questionsAnsweredCorrectly,
          secondValue: weekDay.questionsAnswered,
        };

        return dataValue;
      },
    );

    const duelsDataValues: IBarChartWithTwoValuesData[] = weekDays.map(
      (weekDay) => {
        const dataValue: IBarChartWithTwoValuesData = {
          name: displayDayAndMonthDate(weekDay.createdAt),
          firstValue: weekDay.duelsParticipated,
          secondValue: weekDay.duelsWon,
        };

        return dataValue;
      },
    );

    setContentsData(contentsDataValues);
    setQuestionsData(questionsDataValues);
    setDuelsData(duelsDataValues);
    setStudentWeekPerformance(studentWeekPerformanceData);
  };

  useEffect(() => {
    if (loggedPeople.isStudent) {
      if (!isDefaultStudent(student))
        getStudentWeekPerformanceByStudent(
          OnEducaAPI,
          student.id,
          token,
          setChartsData,
          () => console.log('erro'),
        );
    }
  }, [student]);

  return (
    <WeekPerformanceBox>
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
        <ChartTypes>
          <ChartTypeButton
            onClick={() => setChartType('questions')}
            style={{
              background:
                chartType === 'questions' ? theme.colors.textColor : '',
              color: chartType === 'questions' ? theme.colors.boxColor : '',
            }}
          >
            <ChartTypeLabel>Questões</ChartTypeLabel>
          </ChartTypeButton>
          <ChartTypeButton
            onClick={() => setChartType('contents')}
            style={{
              background:
                chartType === 'contents' ? theme.colors.textColor : '',
              color: chartType === 'contents' ? theme.colors.boxColor : '',
            }}
          >
            <ChartTypeLabel>Conteúdos</ChartTypeLabel>
          </ChartTypeButton>
          <ChartTypeButton
            onClick={() => setChartType('duels')}
            style={{
              background: chartType === 'duels' ? theme.colors.textColor : '',
              color: chartType === 'duels' ? theme.colors.boxColor : '',
            }}
          >
            <ChartTypeLabel>Duelos</ChartTypeLabel>
          </ChartTypeButton>
        </ChartTypes>
      </PerformanceChart>
    </WeekPerformanceBox>
  );
};

export default WeekPerformance;
