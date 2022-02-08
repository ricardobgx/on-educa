/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-console */
/* eslint-disable no-shadow */

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
  DEFAULT_PEOPLE,
} from '../../static/defaultEntitiesValues';
import { State } from '../../store';
import { Page } from '../../global/styles/components/pageComponents';
import {
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
  SelectSocialDetails,
  EditPictureButton,
  SocialDetails,
} from './styles';
import { SmallMaterialIconRound } from '../../components/App/Icons/MaterialIcons/MaterialIconsRound';
import { IStudentWeekPerformance } from '../../interfaces/IStudentWeekPerformance';
import { isDefaultPeople } from '../../functions/entitiesValues';
import { getStudentWeekPerformanceByStudent } from '../../functions/studentWeekPerformance';
import UpdateProfilePicture from '../../components/Profile/UpdateProfilePicture';
import { IImage } from '../../interfaces/IImage';
import SelectSocialDetailsList from '../../components/Profile/SelectSocialDetailsList';
import ProfileActions from '../../components/Profile/ProfileActions';
import SocialDetail from '../../components/Profile/SocialDetail';

interface IProfileRouteProps {
  id: string;
}

export enum SocialDetailType {
  FRIENDS,
  REVIEWS,
  ACHIEVEMENTS,
  MISSIONS,
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

  const [people, setPeople] = useState<IPeople>(DEFAULT_PEOPLE);

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
    if (isDefaultPeople(people) || people.id !== id) {
      if (!isPeopleLogged(loggedPeople.id, id))
        getPeople(OnEducaAPI, id, getPeopleSucess, token);
      else {
        setPeople(loggedPeople);
        setStudent(loggedStudent);
        setTeacher(loggedTeacher);
        setProfilePicture(loggedPeople.profilePicture);
      }
    } else if (people.isStudent) {
      console.log(`Buscando desempenho do estudante ${student.id}`);
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
                    {isPeopleLogged(loggedPeople.id, people.id as string) && (
                      <EditPictureButton
                        onClick={() => setIsUpdatingProfilePicture(true)}
                      >
                        <SmallMaterialIconRound color="" icon="mode_edit" />
                      </EditPictureButton>
                    )}
                    <PeoplePicture src={people.profilePicture.path} />
                  </PeoplePictureBox>

                  <ProfileActions
                    people={people}
                    loggedPeople={loggedPeople}
                    token={token}
                  />
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
              </PeopleDetails>
              <SocialDetails>
                <SelectSocialDetails>
                  <SelectSocialDetailsList
                    socialDetailSelected={socialDetailSelected}
                    setSocialDetailSelected={setSocialDetailSelected}
                  />
                </SelectSocialDetails>
                <SocialDetail
                  socialDetailSelected={socialDetailSelected}
                  people={people}
                  loggedPeople={loggedPeople}
                  token={token}
                />
              </SocialDetails>
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
                  people={people}
                  student={student}
                  token={token}
                />
              </WeeklyPerformanceSummary>
            </PerformanceDetailsBox>
          </PerformanceDetails>
        </ProfileBox>
      </PageBox>
    </Page>
  );
};

export default Profile;
