/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-console */
/* eslint-disable no-shadow */

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import SectionLabel from '../../components/App/SectionLabel';
import ProfileDailyGoal from '../../components/Profile/ProfileDailyGoal';
import StudentWeeklyPerformance from '../../components/Profile/WeeklyPerformance/StudentWeeklyPerformance';
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
  DEFAULT_STUDENT_WEEKLY_PERFORMANCE,
  DEFAULT_TEACHER,
  DEFAULT_PEOPLE,
} from '../../static/defaultEntitiesValues';
import { ActionCreators, State } from '../../store';
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
import { IStudentWeeklyPerformance } from '../../interfaces/IStudentWeeklyPerformance';
import { isDefaultPeople } from '../../functions/entitiesValues';
import { getStudentWeeklyPerformanceByStudent } from '../../functions/studentWeeklyPerformance';
import UpdateProfilePicture from '../../components/Profile/UpdateProfilePicture';
import { IImage } from '../../interfaces/IImage';
import SelectSocialDetailsList from '../../components/Profile/SelectSocialDetailsList';
import ProfileActions from '../../components/Profile/ProfileActions';
import SocialDetail from '../../components/Profile/SocialDetail';
import TeacherWeeklyPerformance from '../../components/Profile/WeeklyPerformance/TeacherWeeklyPerformance';

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

  const dispatch = useDispatch();

  const {
    loginPeople: loadPeople,
    loadStudent,
    loadTeacher,
  } = bindActionCreators(ActionCreators, dispatch);

  const [student, setStudent] = useState(DEFAULT_STUDENT);
  const [teacher, setTeacher] = useState(DEFAULT_TEACHER);

  /* Local State */

  const [people, setPeople] = useState<IPeople>(DEFAULT_PEOPLE);

  const [socialDetailSelected, setSocialDetailSelected] = useState(0);

  const [studentWeeklyPerformance, setStudentWeeklyPerformance] =
    useState<IStudentWeeklyPerformance>(DEFAULT_STUDENT_WEEKLY_PERFORMANCE);

  const [profilePicture, setProfilePicture] = useState<IImage>(DEFAULT_IMAGE);
  const [isUpdatingProfilePicture, setIsUpdatingProfilePicture] =
    useState(false);

  /* Route params */

  const route = useRouteMatch();
  const { id } = route.params as IProfileRouteProps;

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
    setProfilePicture(peopleFound.profilePicture);
  };

  const getLoggedPeopleSucess = (peopleFound: IPeople): void => {
    loadPeople(peopleFound);
    setUpPeopleType(
      OnEducaAPI,
      peopleFound.id,
      peopleFound.isStudent,
      token,
      loadStudent,
      loadTeacher,
    );
    setProfilePicture(peopleFound.profilePicture);
  };

  const getPeopleData = (): void => {
    getPeople(OnEducaAPI, id, getPeopleSucess, token);
  };

  const getLoggedPeopleData = (): void => {
    getPeople(OnEducaAPI, loggedPeople.id, getLoggedPeopleSucess, token);
  };

  const getPeopleWeeklyPerformance = (): void => {
    if (people.isStudent) {
      getStudentWeeklyPerformanceByStudent(
        OnEducaAPI,
        student.id,
        token,
        setStudentWeeklyPerformance,
        () => console.log('erro'),
      );
    }
  };

  useEffect(() => {
    if ((isDefaultPeople(people) || people.id !== id) && token) {
      getPeopleData();
    } else if (people.isStudent) {
      getPeopleWeeklyPerformance();
    }
  }, [id, people, token, student]);

  const { weekDay } = studentWeeklyPerformance;
  const { dailyXp } = weekDay;
  const { isStudent } = people;

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
              <ProfileBanner />
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
                    getPeopleData={getPeopleData}
                    loggedPeople={loggedPeople}
                    getLoggedPeopleData={getLoggedPeopleData}
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
                    people={people}
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
                {isStudent ? (
                  <StudentWeeklyPerformance
                    people={people}
                    student={student}
                    token={token}
                    isPeopleLogged={isPeopleLogged(people.id, loggedPeople.id)}
                  />
                ) : (
                  <TeacherWeeklyPerformance
                    people={people}
                    teacher={teacher}
                    token={token}
                    isPeopleLogged={isPeopleLogged(people.id, loggedPeople.id)}
                  />
                )}
              </WeeklyPerformanceSummary>
            </PerformanceDetailsBox>
          </PerformanceDetails>
        </ProfileBox>
      </PageBox>
    </Page>
  );
};

export default Profile;
