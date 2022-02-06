/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-console */

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import SectionLabel from '../../components/App/SectionLabel';
import RankingPeopleCard from '../../components/Performance/RankingPeopleCard';
import OnEducaAPI from '../../services/api';
import { State } from '../../store';
import { Page } from '../../global/styles/components/pageComponents';
import { PageBox, Ranking, PeoplesList, PeoplesListBox } from './styles';
import WeekPerformance from '../../components/Performance/WeekPerformance';
import { getStudentWeekPerformances } from '../../functions/studentWeekPerformance';
import { IStudentWeekPerformance } from '../../interfaces/IStudentWeekPerformance';
import { isDefaultPeople } from '../../functions/entitiesValues';

const Performance = (): JSX.Element => {
  const { aplication, people: loggedPeople } = useSelector(
    (store: State) => store,
  );
  const { token } = aplication;

  const [studentWeekPerformances, setStudentWeekPerformances] = useState<
    IStudentWeekPerformance[]
  >([]);

  useEffect(() => {
    if (!isDefaultPeople(loggedPeople) && token) {
      getStudentWeekPerformances(
        OnEducaAPI,
        token,
        setStudentWeekPerformances,
        () => console.log('erro'),
      );
    }
  }, [loggedPeople]);

  return (
    <Page>
      <PageBox>
        <WeekPerformance />
        <Ranking>
          <SectionLabel backLink="" label="Ranking" />
          <PeoplesList>
            <PeoplesListBox>
              {studentWeekPerformances.map((studentWeekPerformance, index) => (
                <RankingPeopleCard
                  key={studentWeekPerformance.id}
                  studentWeekPerformance={studentWeekPerformance}
                  rankingPosition={index + 1}
                  token={token}
                />
              ))}
            </PeoplesListBox>
          </PeoplesList>
        </Ranking>
      </PageBox>
    </Page>
  );
};

export default Performance;
