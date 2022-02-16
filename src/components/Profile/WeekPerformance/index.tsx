import React, { useEffect, useState } from 'react';
import { isDefaultPeople } from '../../../functions/entitiesValues';
import { getStudentWeeklyPerformanceByStudent } from '../../../functions/studentWeeklyPerformance';
import { IPeople } from '../../../interfaces/IPeople';
import { IStudent } from '../../../interfaces/IStudent';
import { IStudentWeeklyPerformance } from '../../../interfaces/IStudentWeeklyPerformance';
import {
  PerformanceDetailsHeader,
  PerformanceDetailsHeaderLabel,
} from '../../../pages/Profile/styles';
import OnEducaAPI from '../../../services/api';
import { DEFAULT_STUDENT_WEEKLY_PERFORMANCE } from '../../../static/defaultEntitiesValues';
import { SmallMaterialIconRound } from '../../App/Icons/MaterialIcons/MaterialIconsRound';
import {
  Container,
  WeekPerformanceInfo,
  SeeChartsButton,
  SeeChartsButtonLabel,
  WeekPerformancesList,
  WeekPerformanceInfoLabel,
  WeekPerformanceInfoValue,
} from './styles';

interface IWeekPerformanceProps {
  people: IPeople;
  student: IStudent;
  token: string;
  isPeopleLogged: boolean;
}

const WeekPerformance = (props: IWeekPerformanceProps): JSX.Element => {
  const { people, student, token, isPeopleLogged } = props;

  const [studentWeeklyPerformance, setStudentWeeklyPerformance] =
    useState<IStudentWeeklyPerformance>(DEFAULT_STUDENT_WEEKLY_PERFORMANCE);

  useEffect(() => {
    if (!isDefaultPeople(people)) {
      getStudentWeeklyPerformanceByStudent(
        OnEducaAPI,
        student.id,
        token,
        setStudentWeeklyPerformance,
        () => console.log('erro'),
      );
    }
  }, [student]);

  const { weekDay } = studentWeeklyPerformance;

  const {
    contentsStudied,
    questionsAnswered,
    questionsAnsweredCorrectly,
    duelsParticipated,
    duelsWon,
  } = weekDay;

  return (
    <Container className="with-shadow bd-rd-5">
      <PerformanceDetailsHeader>
        <SmallMaterialIconRound color="" icon="insights" />
        <PerformanceDetailsHeaderLabel>
          Desempenho semanal
        </PerformanceDetailsHeaderLabel>
      </PerformanceDetailsHeader>
      <WeekPerformancesList>
        <WeekPerformanceInfo>
          <WeekPerformanceInfoLabel>
            Conteúdos estudados
          </WeekPerformanceInfoLabel>
          <WeekPerformanceInfoValue>{contentsStudied}</WeekPerformanceInfoValue>
        </WeekPerformanceInfo>
        <WeekPerformanceInfo>
          <WeekPerformanceInfoLabel>
            Questões respondidas
          </WeekPerformanceInfoLabel>
          <WeekPerformanceInfoValue>
            {questionsAnswered}
          </WeekPerformanceInfoValue>
        </WeekPerformanceInfo>
        <WeekPerformanceInfo>
          <WeekPerformanceInfoLabel>Questões certas</WeekPerformanceInfoLabel>
          <WeekPerformanceInfoValue>
            {questionsAnsweredCorrectly}
          </WeekPerformanceInfoValue>
        </WeekPerformanceInfo>
        <WeekPerformanceInfo>
          <WeekPerformanceInfoLabel>
            Duelos participados
          </WeekPerformanceInfoLabel>
          <WeekPerformanceInfoValue>
            {duelsParticipated}
          </WeekPerformanceInfoValue>
        </WeekPerformanceInfo>
        <WeekPerformanceInfo>
          <WeekPerformanceInfoLabel>Duelos vencidos</WeekPerformanceInfoLabel>
          <WeekPerformanceInfoValue>{duelsWon}</WeekPerformanceInfoValue>
        </WeekPerformanceInfo>
      </WeekPerformancesList>
      {isPeopleLogged && (
        <SeeChartsButton to="/performance/">
          <SeeChartsButtonLabel>Ver gráficos</SeeChartsButtonLabel>
        </SeeChartsButton>
      )}
      {/* <WeeklyPerformanceChart>
        <SimpleLineChart
          colors={[
            '#ee9b00',
            '#48cae4',
            '#0466c8',
            '#a100f2',
            '#f72585',
            '#ff0',
          ]}
          height={250}
          width={470}
          labels={[
            'Conteúdos estudados',
            'Questões respondidas',
            'Questões corretas',
            'Duelos participados',
            'Duelos vencidos',
          ]}
          data={prepareWeekDays(weekDays)}
        />
      </WeeklyPerformanceChart> */}
    </Container>
  );
};

export default WeekPerformance;
