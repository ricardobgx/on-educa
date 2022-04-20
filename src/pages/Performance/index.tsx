/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-console */

import React from 'react';
import { useSelector } from 'react-redux';
import SectionLabel from '../../components/App/SectionLabel';
import { State } from '../../store';
import { Page } from '../../global/styles/components/pageComponents';
import { PageBox, Ranking, RankingBox } from './styles';
import StudentWeeklyPerformance from '../../components/Performance/WeeklyPerformance/StudentWeeklyPerformance';
import TeacherWeeklyPerformance from '../../components/Performance/WeeklyPerformance/TeacherWeeklyPerformance';
import StudentRankingCardsList from '../../components/Performance/RankingCardsList/StudentRankingCardsList';
import TeacherRankingCardsList from '../../components/Performance/RankingCardsList/TeacherRankingCardsList';

const Performance = (): JSX.Element => {
  const { aplication } = useSelector((store: State) => store);
  const { token, isStudent } = aplication;

  return (
    <Page>
      <PageBox>
        {isStudent ? (
          <StudentWeeklyPerformance />
        ) : (
          <TeacherWeeklyPerformance />
        )}
        <Ranking>
          <SectionLabel backLink="" label="Ranking" />
          <RankingBox>
            {isStudent ? (
              <StudentRankingCardsList token={token} />
            ) : (
              <TeacherRankingCardsList token={token} />
            )}
          </RankingBox>
        </Ranking>
      </PageBox>
    </Page>
  );
};

export default Performance;
