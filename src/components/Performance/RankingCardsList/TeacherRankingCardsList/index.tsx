import React, { useEffect, useState } from 'react';
import { getTeacherWeeklyPerformances } from '../../../../functions/teacherWeeklyPerformance';
import { ITeacherWeeklyPerformance } from '../../../../interfaces/ITeacherWeeklyPerformance';
import OnEducaAPI from '../../../../services/api';
import TeacherRankingCard from '../../RankingCard/TeacherRankingCard';
import { RankingCardsListBox } from '../styles';

interface ITeacherRankingCardsListProps {
  token: string;
}

const TeacherRankingCardsList = (
  props: ITeacherRankingCardsListProps,
): JSX.Element => {
  const { token } = props;

  const [teacherWeeklyPerformances, setTeacherWeeklyPerformances] = useState<
    ITeacherWeeklyPerformance[]
  >([]);

  useEffect(() => {
    if (token) {
      getTeacherWeeklyPerformances(
        OnEducaAPI,
        token,
        setTeacherWeeklyPerformances,
        () => console.log('erro'),
      );
    }
  }, [token]);

  return (
    <RankingCardsListBox>
      {teacherWeeklyPerformances.map((teacherWeeklyPerformance, index) => (
        <TeacherRankingCard
          teacherWeeklyPerformance={teacherWeeklyPerformance}
          rankingPosition={index + 1}
          token={token}
        />
      ))}
    </RankingCardsListBox>
  );
};

export default TeacherRankingCardsList;
