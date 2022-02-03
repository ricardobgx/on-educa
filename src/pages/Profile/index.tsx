/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import SectionLabel from '../../components/App/SectionLabel';
import ProfileDailyGoal from '../../components/Profile/ProfileDailyGoal';
import WeekPerformance from '../../components/Profile/WeekPerformance';
import { findUserType, isUserLogged } from '../../functions/user';
import { IUser } from '../../interfaces/IUser';
import OnEducaAPI from '../../services/api';
import {
  DEFAULT_STUDENT_WEEK_PERFORMANCE,
  DEFAULT_USER,
} from '../../static/defaultEntitiesValues';
import { State } from '../../store';
import { Page } from '../../global/styles/components/pageComponents';
import {
  EditProfileButton,
  EditProfileButtonLabel,
  AppearenceDetails,
  PageBox,
  PerformanceDetails,
  PerformanceDetailsBox,
  ProfileBanner,
  ProfileBox,
  ProfileDetails,
  ProfileDetailsBox,
  UserPicture,
  UserPictureBox,
  WeeklyPerformanceSummary,
  MainDetails,
  UserName,
  UserDetails,
  SchoolGradeLabel,
  TeachingTypeLabel,
  SocialDetails,
  SocialDetailsList,
  SocialDetail,
  SocialDetailLabel,
  SocialDetailIcon,
  EditPictureButton,
  ProfileBannerImg,
  EditBannerButton,
} from './styles';
import {
  MediumMaterialIconRound,
  SmallMaterialIconRound,
} from '../../components/App/Icons/MaterialIcons/MaterialIconsRound';
import { IStudentWeekPerformance } from '../../interfaces/IStudentWeekPerformance';
import { isDefaultUser } from '../../functions/entitiesValues';
import { getStudentWeekPerformanceByStudent } from '../../functions/studentWeekPerformance';
import UpdateProfilePicture from '../../components/Profile/UpdateProfilePicture';

interface IProfileRouteProps {
  id: string;
}

const Profile = (): JSX.Element => {
  /* Global State */

  const { user: loggedUser, aplication } = useSelector((store: State) => store);
  const { id: loggedUserId, profilePicture: oldProfilePicture } = loggedUser;
  const { userType: loggedUserType, token } = aplication;

  /* Local State */

  const [user, setUser] = useState<IUser>(DEFAULT_USER);
  const [userType, setUserType] = useState(loggedUserType);
  const [socialDetailSelected, setSocialDetailSelected] = useState(0);
  const [studentWeekPerformance, setStudentWeekPerformance] =
    useState<IStudentWeekPerformance>(DEFAULT_STUDENT_WEEK_PERFORMANCE);
  const [profilePicture, setProfilePicture] = useState(oldProfilePicture);
  const [isUpdatingProfilePicture, setIsUpdatingProfilePicture] =
    useState(false);

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
    if (!isDefaultUser(loggedUser)) {
      getStudentWeekPerformanceByStudent(
        OnEducaAPI,
        loggedUser.id,
        token,
        setStudentWeekPerformance,
        () => console.log('erro'),
      );
    }
  }, [id, loggedUser]);

  const { weekDay } = studentWeekPerformance;
  const { dailyXP } = weekDay;
  console.log(user);

  return (
    <Page>
      <PageBox>
        {isUpdatingProfilePicture && (
          <UpdateProfilePicture
            userType={loggedUserType}
            userId={loggedUserId}
            token={token}
            profilePicture={profilePicture.path}
            setProfilePicture={setProfilePicture}
            setIsUpdatingProfilePicture={setIsUpdatingProfilePicture}
          />
        )}
        <ProfileBox>
          <ProfileDetails>
            <SectionLabel backLink="/home" label="Perfil" />

            <ProfileDetailsBox className="with-shadow bd-rd-5">
              <ProfileBanner>
                {/* <ProfileBannerImg src="https://timelinecovers.pro/facebook-cover/download/anime-your-name-starfall-facebook-cover.jpg" /> */}

                {/* {loggedUser.id === user.id && (
                  <EditBannerButton>
                    <SmallMaterialIconRound color="" icon="mode_edit" />
                  </EditBannerButton>
                )} */}
              </ProfileBanner>
              <UserDetails>
                <AppearenceDetails>
                  <UserPictureBox>
                    {loggedUser.id === user.id && (
                      <EditPictureButton
                        onClick={() => setIsUpdatingProfilePicture(true)}
                      >
                        <SmallMaterialIconRound color="" icon="mode_edit" />
                      </EditPictureButton>
                    )}
                    <UserPicture src={user.profilePicture.path} />
                  </UserPictureBox>

                  <EditProfileButton
                    to="/update-profile"
                    className="with-shadow bd-rd-5"
                  >
                    <EditProfileButtonLabel>
                      Editar perfil
                    </EditProfileButtonLabel>
                    <SmallMaterialIconRound color="" icon="mode_edit" />
                  </EditProfileButton>
                </AppearenceDetails>

                <MainDetails>
                  <UserName>{user.name}</UserName>
                  {user.userType === 'student' ? (
                    <SchoolGradeLabel>
                      {user.schoolGrade.index} º ano{' '}
                      {user.schoolGrade.teachingType
                        ? `- ${user.schoolGrade.teachingType.title}`
                        : ''}
                    </SchoolGradeLabel>
                  ) : (
                    <TeachingTypeLabel>
                      {user.teachingType.title}
                    </TeachingTypeLabel>
                  )}
                </MainDetails>
                <SocialDetails>
                  <SocialDetailsList>
                    <SocialDetail
                      onClick={() => setSocialDetailSelected(0)}
                      className={
                        socialDetailSelected === 0 ? 'selected-detail' : ''
                      }
                    >
                      <MediumMaterialIconRound color="" icon="people" />
                      <SocialDetailLabel>Amigos</SocialDetailLabel>
                    </SocialDetail>
                    <SocialDetail
                      onClick={() => setSocialDetailSelected(1)}
                      className={
                        socialDetailSelected === 1 ? 'selected-detail' : ''
                      }
                    >
                      <MediumMaterialIconRound color="" icon="description" />
                      <SocialDetailLabel>Revisões</SocialDetailLabel>
                    </SocialDetail>
                    <SocialDetail
                      onClick={() => setSocialDetailSelected(2)}
                      className={
                        socialDetailSelected === 2 ? 'selected-detail' : ''
                      }
                    >
                      <MediumMaterialIconRound color="" icon="star_half" />
                      <SocialDetailLabel>Conquistas</SocialDetailLabel>
                    </SocialDetail>
                    <SocialDetail
                      onClick={() => setSocialDetailSelected(3)}
                      className={
                        socialDetailSelected === 3 ? 'selected-detail' : ''
                      }
                    >
                      <SocialDetailIcon className="fas fa-user-secret" />
                      <SocialDetailLabel>Missões</SocialDetailLabel>
                    </SocialDetail>
                  </SocialDetailsList>
                </SocialDetails>
              </UserDetails>
            </ProfileDetailsBox>
          </ProfileDetails>
          <PerformanceDetails>
            <SectionLabel backLink="" label="Desempenho" />
            <PerformanceDetailsBox>
              <WeeklyPerformanceSummary>
                <ProfileDailyGoal
                  dailyXP={dailyXP}
                  isUserLogged={isUserLogged(loggedUserId, user.id as string)}
                />
                <WeekPerformance
                  isUserLogged={isUserLogged(loggedUserId, user.id as string)}
                />
              </WeeklyPerformanceSummary>
            </PerformanceDetailsBox>
          </PerformanceDetails>
          {/* <CustomReviews /> */}
        </ProfileBox>
      </PageBox>
    </Page>
  );
};

export default Profile;
