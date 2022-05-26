/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { isDefaultStudent } from '../../../../functions/entitiesValues';
import { getStudentWeeklyPerformanceByStudent } from '../../../../functions/studentWeeklyPerformance';
import OnEducaAPI from '../../../../services/api';
import { DEFAULT_STUDENT_WEEKLY_PERFORMANCE } from '../../../../static/defaultEntitiesValues';
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

  const { xp, weekDay } = studentWeeklyPerformance;
  const { dailyXp, contentsStudied, questionsAnswered, duelsParticipated } =
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
              dataLabel={String(contentsStudied)}
            />
          </PerformanceTypeBox>
          <PerformanceTypeBox>
            <DailyPerformancePerformanceHeader
              title="Questões"
              icon="article"
              dataLabel={String(questionsAnswered)}
            />
          </PerformanceTypeBox>
          <PerformanceTypeBox>
            <DailyPerformancePerformanceHeader
              title="Duelos"
              icon="gamepad"
              dataLabel={String(duelsParticipated)}
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

export default StudentDailyPerformance;
