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
import OnEducaAPI from '../../services/api';
import {
  DEFAULT_IMAGE,
  DEFAULT_STUDENT,
  DEFAULT_STUDENT_WEEKLY_PERFORMANCE,
  DEFAULT_TEACHER,
  DEFAULT_PEOPLE,
  DEFAULT_TEACHER_WEEKLY_PERFORMANCE,
} from '../../static/defaultEntitiesValues';
import { ActionCreators, RootState } from '../../store';
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
import {
  isDefaultPeople,
  isDefaultStudent,
  isDefaultStudentWeeklyPerformance,
  isDefaultTeacher,
  isDefaultTeacherWeeklyPerformance,
} from '../../functions/entitiesValues';
import { getStudentWeeklyPerformanceByStudent } from '../../functions/studentWeeklyPerformance';
import UpdateProfilePicture from '../../components/Profile/UpdateProfilePicture';
import SelectSocialDetailsList from '../../components/Profile/SelectSocialDetailsList';
import ProfileActions from '../../components/Profile/ProfileActions';
import SocialDetail from '../../components/Profile/SocialDetail';
import TeacherWeeklyPerformance from '../../components/Profile/WeeklyPerformance/TeacherWeeklyPerformance';
import { getTeacherWeeklyPerformanceByTeacher } from '../../functions/teacherWeeklyPerformance';

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
  /* GlobalRootState */

  const { people: loggedPeople, aplication } = useSelector(
    (store: RootState) => store,
  );

  const { token, loadingAnimation } = aplication;

  const dispatch = useDispatch();

  const {
    loginPeople: loadPeople,
    loadStudent,
    loadTeacher,
    enableLoadingAnimation,
    disableLoadingAnimation,
  } = bindActionCreators(ActionCreators, dispatch);

  const [student, setStudent] = useState(DEFAULT_STUDENT);
  const [teacher, setTeacher] = useState(DEFAULT_TEACHER);

  /* LocalRootState */

  const [people, setPeople] = useState<IPeople>(DEFAULT_PEOPLE);

  const [socialDetailSelected, setSocialDetailSelected] = useState(0);

  const [studentWeeklyPerformance, setStudentWeeklyPerformance] =
    useState<IStudentWeeklyPerformance>(DEFAULT_STUDENT_WEEKLY_PERFORMANCE);
  const [teacherWeeklyPerformance, setTeacherWeeklyPerformance] =
    useState<ITeacherWeeklyPerformance>(DEFAULT_TEACHER_WEEKLY_PERFORMANCE);

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

  const getPeopleData = async (): Promise<void> => {
    const peopleFound = await getPeople(OnEducaAPI, id, token);

    if (peopleFound) getPeopleSucess(peopleFound);
  };

  const getLoggedPeopleData = async (): Promise<void> => {
    const peopleFound = await getPeople(OnEducaAPI, loggedPeople.id, token);

    if (peopleFound) getLoggedPeopleSucess(peopleFound);
  };

  const studentWeeklyPerformanceLoaded = (
    studentWeeklyPerformanceFound: IStudentWeeklyPerformance,
  ): void => {
    setStudentWeeklyPerformance(studentWeeklyPerformanceFound);
    disableLoadingAnimation();
  };

  const teacherWeeklyPerformanceLoaded = (
    teacherWeeklyPerformanceFound: ITeacherWeeklyPerformance,
  ): void => {
    setTeacherWeeklyPerformance(teacherWeeklyPerformanceFound);
    disableLoadingAnimation();
  };

  const getPeopleWeeklyPerformance = (): void => {
    if (people.isStudent) {
      getStudentWeeklyPerformanceByStudent(
        OnEducaAPI,
        student.id,
        token,
        studentWeeklyPerformanceLoaded,
        () => console.log('erro'),
      );
    } else {
      getTeacherWeeklyPerformanceByTeacher(
        OnEducaAPI,
        teacher.id,
        token,
        teacherWeeklyPerformanceLoaded,
        () => console.log('erro'),
      );
    }
  };

  useEffect(() => {
    if (!loadingAnimation) {
      enableLoadingAnimation();
    }
    if ((isDefaultPeople(people) || people.id !== id) && token) {
      getPeopleData();
    } else if (
      (people.isStudent &&
        !isDefaultStudent(student) &&
        isDefaultStudentWeeklyPerformance(studentWeeklyPerformance)) ||
      (!people.isStudent &&
        !isDefaultTeacher(teacher) &&
        isDefaultTeacherWeeklyPerformance(teacherWeeklyPerformance))
    ) {
      getPeopleWeeklyPerformance();
    }
  }, [id, people, token, student, teacher]);

  const { isStudent } = people;

  const { weekDay } = isStudent
    ? studentWeeklyPerformance
    : teacherWeeklyPerformance;
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
            <SectionLabel backLink="/" label="Perfil" />

            <ProfileDetailsBox className="with-shadow bd-rd-30">
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
                <ProfileDailyGoal dailyXP={dailyXp} />
                {isStudent ? (
                  <StudentWeeklyPerformance
                    isPeopleLogged={isPeopleLogged(people.id, loggedPeople.id)}
                    studentWeeklyPerformance={studentWeeklyPerformance}
                  />
                ) : (
                  <TeacherWeeklyPerformance
                    isPeopleLogged={isPeopleLogged(people.id, loggedPeople.id)}
                    teacherWeeklyPerformance={teacherWeeklyPerformance}
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
