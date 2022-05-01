/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { isDefaultPeople } from '../../../../functions/entitiesValues';
import { getStudentWeeklyPerformanceByStudent } from '../../../../functions/studentWeeklyPerformance';
import {
  PerformanceDetailsHeader,
  PerformanceDetailsHeaderLabel,
} from '../../../../pages/Profile/styles';
import OnEducaAPI from '../../../../services/api';
import { DEFAULT_STUDENT_WEEKLY_PERFORMANCE } from '../../../../static/defaultEntitiesValues';
import { ActionCreators } from '../../../../store';
import { SmallMaterialIconRound } from '../../../App/Icons/MaterialIcons/MaterialIconsRound';
import {
  Container,
  SeeChartsButton,
  SeeChartsButtonLabel,
  WeeklyPerformanceInfo,
  WeeklyPerformanceInfoLabel,
  WeeklyPerformanceInfoValue,
  WeeklyPerformancesList,
} from '../styles';

interface IWeeklyPerformanceProps {
  people: IPeople;
  student: IStudent;
  token: string;
  isPeopleLogged: boolean;
}

const StudentWeeklyPerformance = (
  props: IWeeklyPerformanceProps,
): JSX.Element => {
  const { people, student, token, isPeopleLogged } = props;

  const dispatch = useDispatch();
  const { showFloatNotification } = bindActionCreators(
    ActionCreators,
    dispatch,
  );

  const [studentWeeklyPerformance, setStudentWeeklyPerformance] =
    useState<IStudentWeeklyPerformance>(DEFAULT_STUDENT_WEEKLY_PERFORMANCE);

  useEffect(() => {
    if (!isDefaultPeople(people)) {
      getStudentWeeklyPerformanceByStudent(
        OnEducaAPI,
        student.id,
        token,
        setStudentWeeklyPerformance,
        () => showFloatNotification('erro'),
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
      <WeeklyPerformancesList>
        <WeeklyPerformanceInfo>
          <WeeklyPerformanceInfoLabel>
            Conteúdos estudados
          </WeeklyPerformanceInfoLabel>
          <WeeklyPerformanceInfoValue>
            {contentsStudied}
          </WeeklyPerformanceInfoValue>
        </WeeklyPerformanceInfo>
        <WeeklyPerformanceInfo>
          <WeeklyPerformanceInfoLabel>
            Questões respondidas
          </WeeklyPerformanceInfoLabel>
          <WeeklyPerformanceInfoValue>
            {questionsAnswered}
          </WeeklyPerformanceInfoValue>
        </WeeklyPerformanceInfo>
        <WeeklyPerformanceInfo>
          <WeeklyPerformanceInfoLabel>
            Questões certas
          </WeeklyPerformanceInfoLabel>
          <WeeklyPerformanceInfoValue>
            {questionsAnsweredCorrectly}
          </WeeklyPerformanceInfoValue>
        </WeeklyPerformanceInfo>
        <WeeklyPerformanceInfo>
          <WeeklyPerformanceInfoLabel>
            Duelos participados
          </WeeklyPerformanceInfoLabel>
          <WeeklyPerformanceInfoValue>
            {duelsParticipated}
          </WeeklyPerformanceInfoValue>
        </WeeklyPerformanceInfo>
        <WeeklyPerformanceInfo>
          <WeeklyPerformanceInfoLabel>
            Duelos vencidos
          </WeeklyPerformanceInfoLabel>
          <WeeklyPerformanceInfoValue>{duelsWon}</WeeklyPerformanceInfoValue>
        </WeeklyPerformanceInfo>
      </WeeklyPerformancesList>
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

export default StudentWeeklyPerformance;
