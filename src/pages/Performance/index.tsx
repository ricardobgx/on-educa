/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import SectionLabel from '../../components/App/SectionLabel';
import PerformanceChart, {
  IPerformanceChartProps,
} from '../../components/Performance/PerformanceChart';
import { Page } from '../components';
import { SectionLabelBox, SectionLabelText } from '../Home/components';
import {
  PageBox,
  PerformanceCharts,
  PersonalInfo,
  Ranking,
  RankingBox,
  RankingPosition,
  Student,
  StudentBox,
  StudentExperience,
  StudentGrade,
  StudentInfo,
  StudentLeague,
  StudentName,
  StudentPicture,
  Students,
  StudentScore,
  WeekDayButton,
  WeekDayLabel,
  WeekDays,
  WeekPerformance,
  WeekPerformanceBox,
} from './styles';

const Performance = (): JSX.Element => {
  const contentsPerformance: IPerformanceChartProps = {
    performanceChartLabel: 'Conteúdos',
    heightBar: 10,
    charts: [
      {
        chartLabel: 'Semana',
        chartBar: 10,
      },
      {
        chartLabel: 'Hoje',
        chartBar: 2,
      },
    ],
  };

  const questionsPerformance: IPerformanceChartProps = {
    performanceChartLabel: 'Questões',
    heightBar: 20,
    charts: [
      {
        chartLabel: 'Hoje',
        chartBar: 20,
      },
      {
        chartLabel: 'Corretas',
        chartBar: 12,
      },
      {
        chartLabel: 'Erradas',
        chartBar: 8,
      },
    ],
  };

  return (
    <Page>
      <PageBox>
        <WeekPerformance>
          <SectionLabel label="Desempenho" backLink="/home" />
          <WeekPerformanceBox>
            <PerformanceCharts>
              <PerformanceChart {...contentsPerformance} />
              <PerformanceChart {...questionsPerformance} />
            </PerformanceCharts>
            <WeekDays>
              <WeekDayButton>
                <WeekDayLabel>24/10</WeekDayLabel>
              </WeekDayButton>
              <WeekDayButton>
                <WeekDayLabel>25/10</WeekDayLabel>
              </WeekDayButton>
              <WeekDayButton>
                <WeekDayLabel>26/10</WeekDayLabel>
              </WeekDayButton>
              <WeekDayButton>
                <WeekDayLabel>27/10</WeekDayLabel>
              </WeekDayButton>
              <WeekDayButton>
                <WeekDayLabel>28/10</WeekDayLabel>
              </WeekDayButton>
              <WeekDayButton>
                <WeekDayLabel>29/10</WeekDayLabel>
              </WeekDayButton>
              <WeekDayButton>
                <WeekDayLabel>30/10</WeekDayLabel>
              </WeekDayButton>
            </WeekDays>
          </WeekPerformanceBox>
        </WeekPerformance>
        <Ranking>
          <SectionLabelBox>
            <SectionLabelText>Ranking</SectionLabelText>
          </SectionLabelBox>
          <RankingBox>
            <Students>
              <Student>
                <RankingPosition>01</RankingPosition>
                <StudentBox to="/">
                  <StudentInfo>
                    <StudentPicture src="https://i.pinimg.com/474x/a2/92/de/a292de2720b31e18ceb366e5ca343fd0.jpg" />
                    <PersonalInfo>
                      <StudentName>Aluno</StudentName>
                      <StudentGrade>2º ano</StudentGrade>
                    </PersonalInfo>
                  </StudentInfo>
                  <StudentScore>
                    <StudentLeague className="fas fa-trophy" />
                    <StudentExperience>1865 XP</StudentExperience>
                  </StudentScore>
                </StudentBox>
              </Student>
              <Student>
                <RankingPosition>02</RankingPosition>
                <StudentBox to="/">
                  <StudentInfo>
                    <StudentPicture src="https://i.pinimg.com/474x/a2/92/de/a292de2720b31e18ceb366e5ca343fd0.jpg" />
                    <PersonalInfo>
                      <StudentName>Aluno</StudentName>
                      <StudentGrade>2º ano</StudentGrade>
                    </PersonalInfo>
                  </StudentInfo>
                  <StudentScore>
                    <StudentLeague className="fas fa-trophy" />
                    <StudentExperience>1865 XP</StudentExperience>
                  </StudentScore>
                </StudentBox>
              </Student>
              <Student>
                <RankingPosition>03</RankingPosition>
                <StudentBox to="/">
                  <StudentInfo>
                    <StudentPicture src="https://i.pinimg.com/474x/a2/92/de/a292de2720b31e18ceb366e5ca343fd0.jpg" />
                    <PersonalInfo>
                      <StudentName>Aluno</StudentName>
                      <StudentGrade>2º ano</StudentGrade>
                    </PersonalInfo>
                  </StudentInfo>
                  <StudentScore>
                    <StudentLeague className="fas fa-trophy" />
                    <StudentExperience>1865 XP</StudentExperience>
                  </StudentScore>
                </StudentBox>
              </Student>
              <Student>
                <RankingPosition>04</RankingPosition>
                <StudentBox to="/">
                  <StudentInfo>
                    <StudentPicture src="https://i.pinimg.com/474x/a2/92/de/a292de2720b31e18ceb366e5ca343fd0.jpg" />
                    <PersonalInfo>
                      <StudentName>Aluno</StudentName>
                      <StudentGrade>2º ano</StudentGrade>
                    </PersonalInfo>
                  </StudentInfo>
                  <StudentScore>
                    <StudentLeague className="fas fa-trophy" />
                    <StudentExperience>1865 XP</StudentExperience>
                  </StudentScore>
                </StudentBox>
              </Student>
              <Student>
                <RankingPosition>05</RankingPosition>
                <StudentBox to="/">
                  <StudentInfo>
                    <StudentPicture src="https://i.pinimg.com/474x/a2/92/de/a292de2720b31e18ceb366e5ca343fd0.jpg" />
                    <PersonalInfo>
                      <StudentName>Aluno</StudentName>
                      <StudentGrade>2º ano</StudentGrade>
                    </PersonalInfo>
                  </StudentInfo>
                  <StudentScore>
                    <StudentLeague className="fas fa-trophy" />
                    <StudentExperience>1865 XP</StudentExperience>
                  </StudentScore>
                </StudentBox>
              </Student>
            </Students>
          </RankingBox>
        </Ranking>
      </PageBox>
    </Page>
  );
};

export default Performance;
