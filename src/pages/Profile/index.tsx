import React, { useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import SectionLabel from '../../components/App/SectionLabel';
import CustomReviews from '../../components/Profile/CustomReviews';
import ProfileCard from '../../components/Profile/ProfileCard';
import ProfileDailyGoal from '../../components/Profile/ProfileDailyGoal';
import WeekPerformance from '../../components/Profile/WeekPerformance';
import { Page } from '../components';
import { PageBox, UserDetails, WeeklyPerformanceSummary } from './styles';

interface IProfileRouteProps {
  id: string;
}

const Profile = (): JSX.Element => {
  const route = useRouteMatch();
  const { id } = route.params as IProfileRouteProps;

  useEffect(() => {
    if (id === '12345') {
      console.log('Owner');
    }
  }, []);

  const userTest = {
    name: 'Aluno Fulano Sicrano da Silva',
    profilePicture:
      'https://i.pinimg.com/474x/a2/92/de/a292de2720b31e18ceb366e5ca343fd0.jpg',
    schoolGrade: 2,
  };

  return (
    <Page>
      <PageBox>
        <UserDetails>
          <ProfileCard
            name={userTest.name}
            profilePicture={userTest.profilePicture}
            schoolGrade={userTest.schoolGrade}
          />
          <WeeklyPerformanceSummary>
            <SectionLabel backLink="" label="Resumo" />
            <ProfileDailyGoal />
            <WeekPerformance />
          </WeeklyPerformanceSummary>
        </UserDetails>
        <CustomReviews />
      </PageBox>
    </Page>
  );
};

export default Profile;
