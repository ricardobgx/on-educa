import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { isDefaultStudent } from '../../../../functions/entitiesValues';
import { getStudentWeeklyPerformanceByStudent } from '../../../../functions/studentWeeklyPerformance';
import OnEducaAPI from '../../../../services/api';
import { DEFAULT_STUDENT_WEEKLY_PERFORMANCE } from '../../../../static/defaultEntitiesValues';
import { RootState } from '../../../../store';
import { SmallMaterialIconOutlined } from '../../../App/Icons/MaterialIcons/MaterialIconsOutlined';
import {
  DailyPerformanceBox,
  PerformanceDataLabel,
  PerformanceLabel,
  PerformanceLabelBox,
  PerformancesBox,
  PerformancesTypeBox,
  PerformanceTypeBox,
  PerformanceTypeHeader,
  WeekPerformanceButton,
  WeekPerformanceButtonLabel,
  XPInnerProgressBar,
  XPProgressBar,
} from '../styles';

const StudentDailyPerformance: React.FC = () => {
  const { student, aplication } = useSelector((store: RootState) => store);
  const { token } = aplication;

  const [studentWeeklyPerformance, setStudentWeeklyPerformance] =
    useState<IStudentWeeklyPerformance>(DEFAULT_STUDENT_WEEKLY_PERFORMANCE);

  const getStudentWeeklyPerformanceData = async (): Promise<void> => {
    await getStudentWeeklyPerformanceByStudent(
      OnEducaAPI,
      student.id,
      token,
      setStudentWeeklyPerformance,
      () => console.log('erro'),
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
    <DailyPerformanceBox className="with-shadow bd-rd-30">
      <PerformancesBox>
        <PerformancesTypeBox>
          <PerformanceTypeBox>
            <PerformanceTypeHeader>
              <PerformanceLabel>XP hoje</PerformanceLabel>
              <PerformanceDataLabel>{dailyXp}</PerformanceDataLabel>
            </PerformanceTypeHeader>
            <XPProgressBar>
              <XPInnerProgressBar
                style={{ width: `${(dailyXp / xp) * 100}%` }}
              />
            </XPProgressBar>
          </PerformanceTypeBox>
          <PerformanceTypeBox>
            <PerformanceTypeHeader>
              <PerformanceLabel>XP semanal</PerformanceLabel>
              <PerformanceDataLabel>{xp}</PerformanceDataLabel>
            </PerformanceTypeHeader>
            <XPProgressBar>
              <XPInnerProgressBar style={{ width: `${(xp / xp) * 100}%` }} />
            </XPProgressBar>
          </PerformanceTypeBox>
        </PerformancesTypeBox>
        <PerformancesTypeBox>
          <PerformanceTypeBox>
            <PerformanceTypeHeader>
              <PerformanceLabelBox>
                <SmallMaterialIconOutlined icon="book" color="" />
                <PerformanceLabel>Conteúdos</PerformanceLabel>
              </PerformanceLabelBox>
              <PerformanceDataLabel>{contentsStudied}</PerformanceDataLabel>
            </PerformanceTypeHeader>
          </PerformanceTypeBox>
          <PerformanceTypeBox>
            <PerformanceTypeHeader>
              <PerformanceLabelBox>
                <SmallMaterialIconOutlined icon="article" color="" />
                <PerformanceLabel>Questões</PerformanceLabel>
              </PerformanceLabelBox>
              <PerformanceDataLabel>{questionsAnswered}</PerformanceDataLabel>
            </PerformanceTypeHeader>
          </PerformanceTypeBox>
          <PerformanceTypeBox>
            <PerformanceTypeHeader>
              <PerformanceLabelBox>
                <SmallMaterialIconOutlined icon="gamepad" color="" />
                <PerformanceLabel>Duelos</PerformanceLabel>
              </PerformanceLabelBox>
              <PerformanceDataLabel>{duelsParticipated}</PerformanceDataLabel>
            </PerformanceTypeHeader>
          </PerformanceTypeBox>
        </PerformancesTypeBox>
      </PerformancesBox>
      <WeekPerformanceButton
        to="/performance"
        className="bd-rd-20 block-shadow-button main-action"
      >
        <WeekPerformanceButtonLabel>
          Desempenho semanal
        </WeekPerformanceButtonLabel>
      </WeekPerformanceButton>
    </DailyPerformanceBox>
  );
};

export default StudentDailyPerformance;
