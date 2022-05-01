import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { isDefaultTeacher } from '../../../../functions/entitiesValues';
import { getTeacherWeeklyPerformanceByTeacher } from '../../../../functions/teacherWeeklyPerformance';
import OnEducaAPI from '../../../../services/api';
import { DEFAULT_TEACHER_WEEKLY_PERFORMANCE } from '../../../../static/defaultEntitiesValues';
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

const TeacherDailyPerformance: React.FC = () => {
  const { people, teacher, aplication } = useSelector(
    (store: RootState) => store,
  );
  const { token } = aplication;

  const [teacherWeeklyPerformance, setTeacherWeeklyPerformance] =
    useState<ITeacherWeeklyPerformance>(DEFAULT_TEACHER_WEEKLY_PERFORMANCE);

  const getTeacherWeeklyPerformanceData = async (): Promise<void> => {
    await getTeacherWeeklyPerformanceByTeacher(
      OnEducaAPI,
      teacher.id,
      token,
      setTeacherWeeklyPerformance,
      () => console.log('erro'),
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
              <PerformanceDataLabel>{contentsCreated}</PerformanceDataLabel>
            </PerformanceTypeHeader>
          </PerformanceTypeBox>
          <PerformanceTypeBox>
            <PerformanceTypeHeader>
              <PerformanceLabelBox>
                <SmallMaterialIconOutlined icon="article" color="" />
                <PerformanceLabel>Questões</PerformanceLabel>
              </PerformanceLabelBox>
              <PerformanceDataLabel>{questionsCreated}</PerformanceDataLabel>
            </PerformanceTypeHeader>
          </PerformanceTypeBox>
          <PerformanceTypeBox>
            <PerformanceTypeHeader>
              <PerformanceLabelBox>
                <SmallMaterialIconOutlined icon="gamepad" color="" />
                <PerformanceLabel>Duelos</PerformanceLabel>
              </PerformanceLabelBox>
              <PerformanceDataLabel>
                {interativeRoomsCreated}
              </PerformanceDataLabel>
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

export default TeacherDailyPerformance;
