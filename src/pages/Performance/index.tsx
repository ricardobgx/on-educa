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

const Performance = (): JSX.Element => {
  const { aplication, user: loggedUser } = useSelector((store: State) => store);
  const { userType, token } = aplication;

  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    getUsers(OnEducaAPI, userType, setUsers, token);
  }, [loggedUser]);

  return (
    <Page>
      <PageBox>
        <WeekPerformance />
        <Ranking>
          <SectionLabel backLink="" label="Ranking" />
          <UsersList>
            <UsersListBox>
              {users.map((user, index) => (
                <RankingUserCard
                  key={user.id}
                  {...user}
                  userType={userType}
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
