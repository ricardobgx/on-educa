/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-console */

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import SectionLabel from '../../components/App/SectionLabel';
import ProfileDailyGoal from '../../components/Profile/ProfileDailyGoal';
import WeekPerformance from '../../components/Profile/WeekPerformance';
import {
  getPeople,
  isPeopleLogged,
  setUpPeopleType,
} from '../../functions/people';
import { IPeople } from '../../interfaces/IPeople';
import OnEducaAPI from '../../services/api';
import {
  DEFAULT_IMAGE,
  DEFAULT_STUDENT,
  DEFAULT_STUDENT_WEEK_PERFORMANCE,
  DEFAULT_TEACHER,
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
  PeoplePicture,
  PeoplePictureBox,
  WeeklyPerformanceSummary,
  MainDetails,
  PeopleName,
  PeopleDetails,
  SchoolGradeLabel,
  TeachingTypeLabel,
  SocialDetails,
  SocialDetailsList,
  SocialDetail,
  SocialDetailLabel,
  SocialDetailIcon,
  EditPictureButton,
} from './styles';
import {
  MediumMaterialIconRound,
  SmallMaterialIconRound,
} from '../../components/App/Icons/MaterialIcons/MaterialIconsRound';
import { IStudentWeekPerformance } from '../../interfaces/IStudentWeekPerformance';
import { isDefaultPeople } from '../../functions/entitiesValues';
import { getStudentWeekPerformanceByStudent } from '../../functions/studentWeekPerformance';
import UpdateProfilePicture from '../../components/Profile/UpdateProfilePicture';
import { IImage } from '../../interfaces/IImage';

interface IProfileRouteProps {
  id: string;
}

const Profile = (): JSX.Element => {
  /* Global State */

  const {
    people: loggedPeople,
    student: loggedStudent,
    teacher: loggedTeacher,
    aplication,
  } = useSelector((store: State) => store);

  const { token } = aplication;

  const [student, setStudent] = useState(DEFAULT_STUDENT);
  const [teacher, setTeacher] = useState(DEFAULT_TEACHER);

  /* Local State */

  const [people, setPeople] = useState<IPeople>(DEFAULT_USER);

  const [socialDetailSelected, setSocialDetailSelected] = useState(0);

  const [studentWeekPerformance, setStudentWeekPerformance] =
    useState<IStudentWeekPerformance>(DEFAULT_STUDENT_WEEK_PERFORMANCE);

  const [profilePicture, setProfilePicture] = useState<IImage>(DEFAULT_IMAGE);
  const [isUpdatingProfilePicture, setIsUpdatingProfilePicture] =
    useState(false);

  const getPeopleSucess = (peopleFound: IPeople): void => {
    setPeople(peopleFound);
    setUpPeopleType(
      OnEducaAPI,
      peopleFound.id,
      peopleFound.isStudent,
      token,
      setStudent,
      setTeacher,
    );
    setProfilePicture(people.profilePicture);
  };

  /* Route params */

  const route = useRouteMatch();
  const { id } = route.params as IProfileRouteProps;

  useEffect(() => {
    if (isDefaultPeople(people)) {
      if (!isPeopleLogged(loggedPeople.id, id))
        getPeople(OnEducaAPI, id, getPeopleSucess, token);
      else {
        setPeople(loggedPeople);
        setStudent(loggedStudent);
        setTeacher(loggedTeacher);
        setProfilePicture(loggedPeople.profilePicture);
      }
    } else if (people.isStudent) {
      getStudentWeekPerformanceByStudent(
        OnEducaAPI,
        student.id,
        token,
        setStudentWeekPerformance,
        () => console.log('erro'),
      );
    }
  }, [id, loggedPeople, people]);

  const { weekDay } = studentWeekPerformance;
  const { dailyXp } = weekDay;

  return (
    <Page>
      <PageBox>
        {isUpdatingProfilePicture && (
          <UpdateProfilePicture
            peopleId={people.id}
            token={token}
            profilePicture={profilePicture.path}
            setIsUpdatingProfilePicture={setIsUpdatingProfilePicture}
          />
        )}
        <ProfileBox>
          <ProfileDetails>
            <SectionLabel backLink="/home" label="Perfil" />

            <ProfileDetailsBox className="with-shadow bd-rd-5">
              <ProfileBanner>
                {/* <ProfileBannerImg src="https://timelinecovers.pro/facebook-cover/download/anime-your-name-starfall-facebook-cover.jpg" /> */}

                {/* {loggedPeople.id === people.id && (
                  <EditBannerButton>
                    <SmallMaterialIconRound color="" icon="mode_edit" />
                  </EditBannerButton>
                )} */}
              </ProfileBanner>
              <PeopleDetails>
                <AppearenceDetails>
                  <PeoplePictureBox>
                    {loggedPeople.id === people.id && (
                      <EditPictureButton
                        onClick={() => setIsUpdatingProfilePicture(true)}
                      >
                        <SmallMaterialIconRound color="" icon="mode_edit" />
                      </EditPictureButton>
                    )}
                    <PeoplePicture src={people.profilePicture.path} />
                  </PeoplePictureBox>

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
                  <PeopleName>{people.name}</PeopleName>
                  {people.isStudent ? (
                    <SchoolGradeLabel>
                      {student.schoolGrade.index} º ano{' '}
                      {student.schoolGrade.teachingType
                        ? `- ${student.schoolGrade.teachingType.name}`
                        : ''}
                    </SchoolGradeLabel>
                  ) : (
                    <TeachingTypeLabel>
                      {teacher.teachingType.name}
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
              </PeopleDetails>
            </ProfileDetailsBox>
          </ProfileDetails>
          <PerformanceDetails>
            <SectionLabel backLink="" label="Desempenho" />
            <PerformanceDetailsBox>
              <WeeklyPerformanceSummary>
                <ProfileDailyGoal
                  dailyXP={dailyXp}
                  isPeopleLogged={isPeopleLogged(
                    loggedPeople.id,
                    people.id as string,
                  )}
                />
                <WeekPerformance
                  isPeopleLogged={isPeopleLogged(
                    loggedPeople.id,
                    people.id as string,
                  )}
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
