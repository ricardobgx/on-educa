import React from 'react';
import {
  PerformanceBarBox,
  PersonalInfo,
  UserName,
  StudyStatus,
  SchoolGradeLabel,
  StudyPoints,
  Performance,
  ContentsStudied,
  QuestionsSolved,
  FullPerformanceButton,
  PerformanceSectionLabel
} from './components';
import { IPerformanceBarProps } from './interfaces';

const PerformanceBar: React.FunctionComponent<IPerformanceBarProps> = props => {

  const { user, userType } = props;
  const { name, schoolGrade, subjects } = user;

  return (
    <PerformanceBarBox>
      <PersonalInfo>
        <PerformanceSectionLabel>Usuário</PerformanceSectionLabel>
        <UserName>{name}</UserName>
        <StudyStatus>
          <StudyPoints>1ª pos</StudyPoints>
          <StudyPoints>1250 pts</StudyPoints>
        </StudyStatus>
      </PersonalInfo>
      <Performance>
        <PerformanceSectionLabel>Desempenho diário</PerformanceSectionLabel>
        <ContentsStudied>5 conteúdos</ContentsStudied>
        <QuestionsSolved>15 questões</QuestionsSolved>
      </Performance>
      <FullPerformanceButton>Desempenho semanal</FullPerformanceButton>
    </PerformanceBarBox>
  );
}

export default PerformanceBar;