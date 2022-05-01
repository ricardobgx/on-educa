/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getTeacherWeeklyPerformances } from '../../../../functions/teacherWeeklyPerformance';
import OnEducaAPI from '../../../../services/api';
import { ActionCreators } from '../../../../store';
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

  const dispatch = useDispatch();
  const { showFloatNotification } = bindActionCreators(
    ActionCreators,
    dispatch,
  );

  useEffect(() => {
    if (token) {
      getTeacherWeeklyPerformances(
        OnEducaAPI,
        token,
        setTeacherWeeklyPerformances,
        () => showFloatNotification('Ocorreu um erro'),
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
