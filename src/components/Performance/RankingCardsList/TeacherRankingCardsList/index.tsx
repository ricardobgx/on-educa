import React, { useState } from 'react';
import TeacherRankingCard from '../../RankingCard/TeacherRankingCard';
import { RankingCardsListBox } from '../styles';

interface ITeacherRankingCardsListProps {
  token: string;
}

const TeacherRankingCardsList = (
  props: ITeacherRankingCardsListProps,
): JSX.Element => {
  const { token } = props;

  const [teacherWeeklyPerformances, setTeacherWeeklyPerformances] = useState(
    [],
  );

  return (
    <RankingCardsListBox>
      {teacherWeeklyPerformances.map((teacherWeeklyPerformance, index) => (
        <TeacherRankingCard
          teacherWeeklyPerformance={teacherWeeklyPerformance}
          rankingPosition={index}
          token={token}
        />
      ))}
    </RankingCardsListBox>
  );
};

export default TeacherRankingCardsList;
