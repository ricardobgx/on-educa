import React from 'react';
import {
  PerformanceBarBox,
  PersonalInfo,
  UserName,
  StudyStatus,
  StudyPoints,
  Performance,
  ContentsStudied,
  QuestionsSolved,
  FullPerformanceButton,
  PerformanceSectionLabel,
} from './components';
import { IPerformanceBarProps } from './interfaces';

const PerformanceBar = (props: IPerformanceBarProps): JSX.Element => {
  const { user } = props;
  const { name } = user;
  const splitedName = name.split(' ');
  const displayName = `${splitedName[0]} ${splitedName[1]}`;

  return (
    <PerformanceBarBox>
      <PersonalInfo>
        <PerformanceSectionLabel>Usuário</PerformanceSectionLabel>
        <UserName>{displayName}</UserName>
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
};

export default PerformanceBar;
