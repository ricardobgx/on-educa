/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { isDefaultStudent } from '../../../../functions/entitiesValues';
import { getStudentWeeklyPerformanceByStudent } from '../../../../functions/studentWeeklyPerformance';
import OnEducaAPI from '../../../../services/api';
import { DEFAULT_STUDENT_WEEKLY_PERFORMANCE } from '../../../../static/defaultEntitiesValues';
import { ActionCreators, RootState } from '../../../../store';
import { SmallMaterialIconOutlined } from '../../../App/Icons/MaterialIcons/MaterialIconsOutlined';
import PerformanceType from '../PerformanceType';
import {
  DailyPerformanceBox,
  DailyPerformanceHeader,
  DailyPerformanceHeaderBox,
  DailyPerformanceHeaderTitle,
  PerformanceTypes,
  SeeWeeklyPerformanceButton,
  SeeWeeklyPerformanceButtonLabel,
} from '../styles';

const StudentDailyPerformance: React.FC = () => {
  const { student, aplication } = useSelector((store: RootState) => store);
  const { token } = aplication;

  const dispatch = useDispatch();
  const { showFloatNotification } = bindActionCreators(
    ActionCreators,
    dispatch,
  );

  const [studentWeeklyPerformance, setStudentWeeklyPerformance] =
    useState<IStudentWeeklyPerformance>(DEFAULT_STUDENT_WEEKLY_PERFORMANCE);

  const getStudentWeeklyPerformanceData = async (): Promise<void> => {
    await getStudentWeeklyPerformanceByStudent(
      OnEducaAPI,
      student.id,
      token,
      setStudentWeeklyPerformance,
      () => showFloatNotification('Ocorreu um erro'),
    );
  };

  useEffect(() => {
    if (!isDefaultStudent(student)) {
      getStudentWeeklyPerformanceData();
    }
  }, [student]);

  const { weekDay } = studentWeeklyPerformance;
  const { contentsStudied, questionsAnswered, duelsParticipated } = weekDay;

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
          label={`${contentsStudied}`}
        />
        <PerformanceType
          icon="description"
          title="Questões"
          label={`${questionsAnswered}`}
        />
        <PerformanceType
          icon="gamepad"
          title="Duelos"
          label={`${duelsParticipated}`}
        />
        <PerformanceType
          icon="local_library"
          title="Salas interativas"
          label={`${duelsParticipated}`}
        />
      </PerformanceTypes>
    </DailyPerformanceBox>
  );
};

export default StudentDailyPerformance;
