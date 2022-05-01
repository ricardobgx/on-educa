/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getStudentWeeklyPerformances } from '../../../../functions/studentWeeklyPerformance';
import OnEducaAPI from '../../../../services/api';
import { ActionCreators } from '../../../../store';
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

  const dispatch = useDispatch();
  const { showFloatNotification } = bindActionCreators(
    ActionCreators,
    dispatch,
  );

  useEffect(() => {
    if (token) {
      getStudentWeeklyPerformances(
        OnEducaAPI,
        token,
        setStudentWeeklyPerformances,
        () => showFloatNotification('Ocorreu um erro'),
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
