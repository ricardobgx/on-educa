import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { isDefaultPeople } from '../../../functions/entitiesValues';
import { getStudentWeekPerformanceByStudent } from '../../../functions/studentWeekPerformance';
import { IStudentWeekPerformance } from '../../../interfaces/IStudentWeekPerformance';
import {
  PerformanceDetailsHeader,
  PerformanceDetailsHeaderLabel,
} from '../../../pages/Profile/styles';
import OnEducaAPI from '../../../services/api';
import { DEFAULT_STUDENT_WEEK_PERFORMANCE } from '../../../static/defaultEntitiesValues';
import { State } from '../../../store';
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
  isPeopleLogged: boolean;
}

const WeekPerformance = (props: IWeekPerformanceProps): JSX.Element => {
  const { isPeopleLogged } = props;

  const { people: loggedPeople, aplication } = useSelector(
    (store: State) => store,
  );
  const { token } = aplication;

  const [studentWeekPerformance, setStudentWeekPerformance] =
    useState<IStudentWeekPerformance>(DEFAULT_STUDENT_WEEK_PERFORMANCE);

  useEffect(() => {
    if (!isDefaultPeople(loggedPeople)) {
      getStudentWeekPerformanceByStudent(
        OnEducaAPI,
        loggedPeople.id,
        token,
        setStudentWeekPerformance,
        () => console.log('erro'),
      );
    }
  }, [loggedPeople]);

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
      {isPeopleLogged && (
        <SeeChartsButton to="/performance/">
          <SeeChartsButtonLabel>Ver gráficos</SeeChartsButtonLabel>
        </SeeChartsButton>
      )}
    </Container>
  );
};

export default WeekPerformance;
