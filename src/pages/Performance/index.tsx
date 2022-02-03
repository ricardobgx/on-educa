/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import SectionLabel from '../../components/App/SectionLabel';
import RankingUserCard from '../../components/Performance/RankingUserCard';
import { getUsers } from '../../functions/user';
import { IUser } from '../../interfaces/IUser';
import OnEducaAPI from '../../services/api';
import { State } from '../../store';
import { Page } from '../../global/styles/components/pageComponents';
import { PageBox, Ranking, UsersList, UsersListBox } from './styles';
import WeekPerformance from '../../components/Performance/WeekPerformance';
import { getStudentWeekPerformances } from '../../functions/studentWeekPerformance';
import { IStudentWeekPerformance } from '../../interfaces/IStudentWeekPerformance';

const Performance = (): JSX.Element => {
  const { aplication, user: loggedUser } = useSelector((store: State) => store);
  const { userType, token } = aplication;

  const [studentWeekPerformances, setStudentWeekPerformances] = useState<
    IStudentWeekPerformance[]
  >([]);

  useEffect(() => {
    getStudentWeekPerformances(
      OnEducaAPI,
      token,
      setStudentWeekPerformances,
      () => console.log('erro'),
    );
  }, [loggedUser]);

  return (
    <Page>
      <PageBox>
        <WeekPerformance />
        <Ranking>
          <SectionLabel backLink="" label="Ranking" />
          <UsersList>
            <UsersListBox>
              {studentWeekPerformances.map((studentWeekPerformance, index) => (
                <RankingUserCard
                  key={studentWeekPerformance.id}
                  studentWeekPerformance={studentWeekPerformance}
                  rankingPosition={index + 1}
                />
              ))}
            </UsersListBox>
          </UsersList>
        </Ranking>
      </PageBox>
    </Page>
  );
};

export default Performance;
