import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { isDefaultUser } from '../../../functions/entitiesValues';
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
  isUserLogged: boolean;
}

const WeekPerformance = (props: IWeekPerformanceProps): JSX.Element => {
  const { isUserLogged } = props;

  const { user: loggedUser, aplication } = useSelector((store: State) => store);
  const { token } = aplication;

  const [studentWeekPerformance, setStudentWeekPerformance] =
    useState<IStudentWeekPerformance>(DEFAULT_STUDENT_WEEK_PERFORMANCE);

  useEffect(() => {
    if (!isDefaultUser(loggedUser)) {
      getStudentWeekPerformanceByStudent(
        OnEducaAPI,
        loggedUser.id,
        token,
        setStudentWeekPerformance,
        () => console.log('erro'),
      );
    }
  }, [loggedUser]);

  const { weekDay } = studentWeekPerformance;
  const {
    dailyXP,
    studiedContents,
    questionsAnswered,
    rightQuestionsAnswered,
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
          <WeekPerformanceInfoValue>{studiedContents}</WeekPerformanceInfoValue>
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
            {rightQuestionsAnswered}
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
      {isUserLogged && (
        <SeeChartsButton to="/performance/">
          <SeeChartsButtonLabel>Ver gráficos</SeeChartsButtonLabel>
        </SeeChartsButton>
      )}
    </Container>
  );
};

export default WeekPerformance;
