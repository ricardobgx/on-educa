/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { isDefaultTeacher } from '../../../../functions/entitiesValues';
import { getTeacherWeeklyPerformanceByTeacher } from '../../../../functions/teacherWeeklyPerformance';
import OnEducaAPI from '../../../../services/api';
import { DEFAULT_TEACHER_WEEKLY_PERFORMANCE } from '../../../../static/defaultEntitiesValues';
import { ActionCreators, RootState } from '../../../../store';
import SmallProgressBar from '../../../App/ProgressBar/SmallProgressBar';
import DailyPerformancePerformanceHeader from '../DailyPerformancePerformanceHeader';
import {
  DailyPerformanceBox,
  PerformancesBox,
  PerformancesTypeBox,
  PerformanceTypeBox,
  SeeWeeklyPerformanceButton,
  SeeWeeklyPerformanceButtonLabel,
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

  const { xp, weekDay } = teacherWeeklyPerformance;
  const { dailyXp, contentsCreated, questionsCreated, interativeRoomsCreated } =
    weekDay;

  return (
    <DailyPerformanceBox className="with-shadow bd-rd-20">
      <PerformancesBox>
        <PerformancesTypeBox>
          <PerformanceTypeBox>
            <DailyPerformancePerformanceHeader
              title="XP Hoje"
              icon=""
              dataLabel={`${dailyXp} XP`}
            />
            <SmallProgressBar now={dailyXp} max={xp} />
          </PerformanceTypeBox>
          <PerformanceTypeBox>
            <DailyPerformancePerformanceHeader
              title="XP Semanal"
              icon=""
              dataLabel={`${xp} XP`}
            />
            <SmallProgressBar now={xp} max={xp} />
          </PerformanceTypeBox>
        </PerformancesTypeBox>
        <PerformancesTypeBox>
          <PerformanceTypeBox>
            <DailyPerformancePerformanceHeader
              title="Conteúdos"
              icon="book"
              dataLabel={String(contentsCreated)}
            />
          </PerformanceTypeBox>
          <PerformanceTypeBox>
            <DailyPerformancePerformanceHeader
              title="Questões"
              icon="article"
              dataLabel={String(questionsCreated)}
            />
          </PerformanceTypeBox>
          <PerformanceTypeBox>
            <DailyPerformancePerformanceHeader
              title="Salas interativas"
              icon="local_library"
              dataLabel={String(interativeRoomsCreated)}
            />
          </PerformanceTypeBox>
        </PerformancesTypeBox>
      </PerformancesBox>
      <SeeWeeklyPerformanceButton
        to="/performance"
        className="bd-rd-10 block-shadow-button main-action"
      >
        <SeeWeeklyPerformanceButtonLabel>
          Desempenho semanal
        </SeeWeeklyPerformanceButtonLabel>
      </SeeWeeklyPerformanceButton>
    </DailyPerformanceBox>
  );
};

export default TeacherDailyPerformance;
