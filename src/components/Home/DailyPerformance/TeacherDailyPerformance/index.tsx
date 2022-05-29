/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { isDefaultTeacher } from '../../../../functions/entitiesValues';
import { getTeacherWeeklyPerformanceByTeacher } from '../../../../functions/teacherWeeklyPerformance';
import OnEducaAPI from '../../../../services/api';
import { DEFAULT_TEACHER_WEEKLY_PERFORMANCE } from '../../../../static/defaultEntitiesValues';
import { ActionCreators, RootState } from '../../../../store';
import { SmallMaterialIconOutlined } from '../../../App/Icons/MaterialIcons/MaterialIconsOutlined';
import PerformanceType from '../PerformanceType';
import {
  DailyPerformanceBox,
  PerformanceTypes,
  SeeWeeklyPerformanceButton,
  SeeWeeklyPerformanceButtonLabel,
  DailyPerformanceHeader,
  DailyPerformanceHeaderBox,
  DailyPerformanceHeaderTitle,
} from '../styles';

const TeacherDailyPerformance: React.FC = () => {
  const { people, teacher, aplication } = useSelector(
    (store: RootState) => store,
  );
  const { token } = aplication;

  const dispatch = useDispatch();
  const { showFloatNotification } = bindActionCreators(
    ActionCreators,
    dispatch,
  );

  const [teacherWeeklyPerformance, setTeacherWeeklyPerformance] =
    useState<ITeacherWeeklyPerformance>(DEFAULT_TEACHER_WEEKLY_PERFORMANCE);

  const getTeacherWeeklyPerformanceData = async (): Promise<void> => {
    await getTeacherWeeklyPerformanceByTeacher(
      OnEducaAPI,
      teacher.id,
      token,
      setTeacherWeeklyPerformance,
      () => showFloatNotification('Ocorreu um erro'),
    );
  };

  useEffect(() => {
    if (!isDefaultTeacher(teacher)) {
      getTeacherWeeklyPerformanceData();
    }
  }, [people]);

  const { weekDay } = teacherWeeklyPerformance;
  const { contentsCreated, questionsCreated, interativeRoomsCreated } = weekDay;

  return (
    <DailyPerformanceBox className="with-shadow bd-rd-20">
      <DailyPerformanceHeader>
        <DailyPerformanceHeaderBox>
          <SmallMaterialIconOutlined icon="insights" color="" />
          <DailyPerformanceHeaderTitle>
            Desempenho hoje
          </DailyPerformanceHeaderTitle>
        </DailyPerformanceHeaderBox>
        <SeeWeeklyPerformanceButton to="/performance">
          <SeeWeeklyPerformanceButtonLabel>
            Ver mais
          </SeeWeeklyPerformanceButtonLabel>
          <SmallMaterialIconOutlined icon="east" color="" />
        </SeeWeeklyPerformanceButton>
      </DailyPerformanceHeader>
      <PerformanceTypes>
        <PerformanceType
          icon="book"
          title="Conteúdos"
          label={`${contentsCreated}`}
        />
        <PerformanceType
          icon="description"
          title="Questões"
          label={`${questionsCreated}`}
        />
        <PerformanceType
          icon="question"
          title="Dúvidas resolvidas"
          label={`${interativeRoomsCreated}`}
        />
        <PerformanceType
          icon="local_library"
          title="Salas interativas"
          label={`${interativeRoomsCreated}`}
        />
      </PerformanceTypes>
    </DailyPerformanceBox>
  );
};

export default TeacherDailyPerformance;
