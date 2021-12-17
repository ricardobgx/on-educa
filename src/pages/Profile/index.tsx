/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import SectionLabel from '../../components/App/SectionLabel';
import CustomReviews from '../../components/Profile/CustomReviews';
import ProfileCard from '../../components/Profile/ProfileCard';
import ProfileDailyGoal from '../../components/Profile/ProfileDailyGoal';
import WeekPerformance from '../../components/Profile/WeekPerformance';
import { findUserType, isUserLogged } from '../../functions/user';
import { IUser } from '../../interfaces/IUser';
import OnEducaAPI from '../../services/api';
import { DEFAULT_USER } from '../../static/defaultEntitiesValues';
import { State } from '../../store';
import { Page } from '../components';
import {
  MainDetails,
  PageBox,
  UserDetails,
  WeeklyPerformanceSummary,
} from './styles';

interface IProfileRouteProps {
  id: string;
}

const Profile = (): JSX.Element => {
  /* Global State */

  const { user: loggedUser, aplication } = useSelector((store: State) => store);
  const { id: loggedUserId } = loggedUser;
  const { userType: loggedUserType, token } = aplication;

  /* Local State */

  const [user, setUser] = useState<IUser>(DEFAULT_USER);
  const [userType, setUserType] = useState(loggedUserType);

  /* Route params */

  const route = useRouteMatch();
  const { id } = route.params as IProfileRouteProps;

  /* Functions */

  const findProfileUserType = async (): Promise<void> => {
    await findUserType(OnEducaAPI, id, setUser, setUserType, token);
  };

  useEffect(() => {
    if (!isUserLogged(loggedUserId, id)) findProfileUserType();
    else setUser(loggedUser);
  }, [id, loggedUser]);

  return (
    <Page>
      <PageBox>
        <UserDetails>
          <MainDetails>
            <SectionLabel backLink="/home" label="Perfil" />
            <ProfileCard
              user={user}
              userType={userType}
              isUserLogged={isUserLogged(loggedUserId, user.id as string)}
            />
          </MainDetails>
          <WeeklyPerformanceSummary>
            <ProfileDailyGoal
              isUserLogged={isUserLogged(loggedUserId, user.id as string)}
            />
            <WeekPerformance
              isUserLogged={isUserLogged(loggedUserId, user.id as string)}
            />
          </WeeklyPerformanceSummary>
        </UserDetails>
        <CustomReviews />
      </PageBox>
    </Page>
  );
};

export default Profile;
