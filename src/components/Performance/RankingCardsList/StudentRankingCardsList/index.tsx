import React, { useState } from 'react';
import StudentRankingCard from '../../RankingCard/StudentRankingCard';
import { RankingCardsListBox } from '../styles';

interface IStudentRankingCardsListProps {
  token: string;
}

const StudentRankingCardsList = (
  props: IStudentRankingCardsListProps,
): JSX.Element => {
  const { token } = props;

  const [studentWeeklyPerformances, setStudentWeeklyPerformances] = useState(
    [],
  );

  return (
    <RankingCardsListBox>
      {studentWeeklyPerformances.map((studentWeeklyPerformance, index) => (
        <StudentRankingCard
          studentWeeklyPerformance={studentWeeklyPerformance}
          rankingPosition={index}
          token={token}
        />
      ))}
    </RankingCardsListBox>
  );
};

export default StudentRankingCardsList;
