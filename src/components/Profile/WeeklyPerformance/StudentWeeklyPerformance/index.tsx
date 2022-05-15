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
  studentWeeklyPerformance: IStudentWeeklyPerformance;
}

const StudentWeeklyPerformance = (
  props: IWeeklyPerformanceProps,
): JSX.Element => {
  const { isPeopleLogged, studentWeeklyPerformance } = props;

  const { weekDay } = studentWeeklyPerformance;

  const {
    contentsStudied,
    questionsAnswered,
    questionsAnsweredCorrectly,
    duelsParticipated,
    duelsWon,
  } = weekDay;

  return (
    <Container className="with-shadow bd-rd-30">
      <PerformanceDetailsHeader>
        <SmallMaterialIconRound color="" icon="insights" />
        <PerformanceDetailsHeaderLabel>
          Desempenho hoje
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

export default StudentWeeklyPerformance;
