import React, { useEffect, useState } from 'react';
import { isDefaultPeople } from '../../../functions/entitiesValues';
import { getStudentWeekPerformanceByStudent } from '../../../functions/studentWeekPerformance';
import { IPeople } from '../../../interfaces/IPeople';
import { IStudent } from '../../../interfaces/IStudent';
import { IStudentWeekPerformance } from '../../../interfaces/IStudentWeekPerformance';
import {
  PerformanceDetailsHeader,
  PerformanceDetailsHeaderLabel,
} from '../../../pages/Profile/styles';
import OnEducaAPI from '../../../services/api';
import { DEFAULT_STUDENT_WEEK_PERFORMANCE } from '../../../static/defaultEntitiesValues';
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
}

const WeekPerformance = (props: IWeekPerformanceProps): JSX.Element => {
  const { people, student, token } = props;

  const [studentWeekPerformance, setStudentWeekPerformance] =
    useState<IStudentWeekPerformance>(DEFAULT_STUDENT_WEEK_PERFORMANCE);

  useEffect(() => {
    if (!isDefaultPeople(people)) {
      getStudentWeekPerformanceByStudent(
        OnEducaAPI,
        student.id,
        token,
        setStudentWeekPerformance,
        () => console.log('erro'),
      );
    }
  }, [people]);

  const { weekDay } = studentWeekPerformance;
  const {
    dailyXp,
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
          Desempenho hoje
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
      <SeeChartsButton to="/performance/">
        <SeeChartsButtonLabel>Ver gráficos</SeeChartsButtonLabel>
      </SeeChartsButton>
    </Container>
  );
};

export default WeekPerformance;
