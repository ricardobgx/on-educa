/* eslint-disable react-hooks/exhaustive-deps */

import React from 'react';
import {
  PerformanceDetailsHeader,
  PerformanceDetailsHeaderLabel,
} from '../../../../pages/Profile/styles';
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
  isPeopleLogged: boolean;
  teacherWeeklyPerformance: ITeacherWeeklyPerformance;
}

const TeacherWeeklyPerformance = (
  props: IWeeklyPerformanceProps,
): JSX.Element => {
  const { isPeopleLogged, teacherWeeklyPerformance } = props;

  const { weekDay } = teacherWeeklyPerformance;

  const {
    contentsCreated,
    questionsCreated,
    doubtsSolved,
    interativeRoomsCreated,
  } = weekDay;

  return (
    <Container className="with-shadow bd-rd-30">
      <PerformanceDetailsHeader>
        <SmallMaterialIconRound color="" icon="insights" />
        <PerformanceDetailsHeaderLabel>
          Desempenho semanal
        </PerformanceDetailsHeaderLabel>
      </PerformanceDetailsHeader>
      <WeeklyPerformancesList>
        <WeeklyPerformanceInfo>
          <WeeklyPerformanceInfoLabel>
            Conteúdos criados
          </WeeklyPerformanceInfoLabel>
          <WeeklyPerformanceInfoValue>
            {contentsCreated}
          </WeeklyPerformanceInfoValue>
        </WeeklyPerformanceInfo>
        <WeeklyPerformanceInfo>
          <WeeklyPerformanceInfoLabel>
            Questões criadas
          </WeeklyPerformanceInfoLabel>
          <WeeklyPerformanceInfoValue>
            {questionsCreated}
          </WeeklyPerformanceInfoValue>
        </WeeklyPerformanceInfo>
        <WeeklyPerformanceInfo>
          <WeeklyPerformanceInfoLabel>
            Dúvidas resolvidas
          </WeeklyPerformanceInfoLabel>
          <WeeklyPerformanceInfoValue>
            {doubtsSolved}
          </WeeklyPerformanceInfoValue>
        </WeeklyPerformanceInfo>
        <WeeklyPerformanceInfo>
          <WeeklyPerformanceInfoLabel>
            Salas interativas criadas
          </WeeklyPerformanceInfoLabel>
          <WeeklyPerformanceInfoValue>
            {interativeRoomsCreated}
          </WeeklyPerformanceInfoValue>
        </WeeklyPerformanceInfo>
      </WeeklyPerformancesList>
      {isPeopleLogged && (
        <SeeChartsButton
          className="block-shadow-button main-action bd-rd-20"
          to="/performance/"
        >
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

export default TeacherWeeklyPerformance;
