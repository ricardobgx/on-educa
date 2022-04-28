import React, { useEffect, useState } from 'react';
import { isDefaultPeople } from '../../../../functions/entitiesValues';
import { getTeacherWeeklyPerformanceByTeacher } from '../../../../functions/teacherWeeklyPerformance';
import {
  PerformanceDetailsHeader,
  PerformanceDetailsHeaderLabel,
} from '../../../../pages/Profile/styles';
import OnEducaAPI from '../../../../services/api';
import { DEFAULT_TEACHER_WEEKLY_PERFORMANCE } from '../../../../static/defaultEntitiesValues';
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
  teacher: ITeacher;
  token: string;
  isPeopleLogged: boolean;
}

const TeacherWeeklyPerformance = (
  props: IWeeklyPerformanceProps,
): JSX.Element => {
  const { people, teacher, token, isPeopleLogged } = props;

  const [teacherWeeklyPerformance, setTeacherWeeklyPerformance] =
    useState<ITeacherWeeklyPerformance>(DEFAULT_TEACHER_WEEKLY_PERFORMANCE);

  useEffect(() => {
    if (!isDefaultPeople(people)) {
      getTeacherWeeklyPerformanceByTeacher(
        OnEducaAPI,
        teacher.id,
        token,
        setTeacherWeeklyPerformance,
        () => console.log('erro'),
      );
    }
  }, [teacher]);

  const { weekDay } = teacherWeeklyPerformance;

  const {
    contentsCreated,
    questionsCreated,
    doubtsSolved,
    interativeRoomsCreated,
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

export default TeacherWeeklyPerformance;
