import React, { useEffect, useState } from 'react';
import { getStudentWeeklyPerformances } from '../../../../functions/studentWeeklyPerformance';
import { IStudentWeeklyPerformance } from '../../../../interfaces/IStudentWeeklyPerformance';
import OnEducaAPI from '../../../../services/api';
import StudentRankingCard from '../../RankingCard/StudentRankingCard';
import { RankingCardsListBox } from '../styles';

interface IStudentRankingCardsListProps {
  token: string;
}

const StudentRankingCardsList = (
  props: IStudentRankingCardsListProps,
): JSX.Element => {
  const { token } = props;

  const [studentWeeklyPerformances, setStudentWeeklyPerformances] = useState<
    IStudentWeeklyPerformance[]
  >([]);

  useEffect(() => {
    if (token) {
      getStudentWeeklyPerformances(
        OnEducaAPI,
        token,
        setStudentWeeklyPerformances,
        () => console.log('erro'),
      );
    }
  }, [token]);

  return (
    <RankingCardsListBox>
      {studentWeeklyPerformances.map((studentWeeklyPerformance, index) => (
        <StudentRankingCard
          studentWeeklyPerformance={studentWeeklyPerformance}
          rankingPosition={index + 1}
          token={token}
        />
      ))}
    </RankingCardsListBox>
  );
};

export default StudentRankingCardsList;
