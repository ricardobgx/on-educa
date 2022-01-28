import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getStudentWeekPerformanceByStudent } from '../../../functions/studentWeekPerformance';
import { displaySurname, isStudent } from '../../../functions/user';
import { IStudentWeekPerformance } from '../../../interfaces/IStudentWeekPerformance';
import { IUser } from '../../../interfaces/IUser';
import OnEducaAPI from '../../../services/api';
import {
  DEFAULT_SCHOOL_GRADE,
  DEFAULT_STUDENT_WEEK_PERFORMANCE,
} from '../../../static/defaultEntitiesValues';
import { State } from '../../../store';
import {
  UserCardBox,
  UserDetails,
  UserPicture,
  PersonalInfo,
  UserName,
  StudentSchoolGrade,
  TeacherSubjects,
  UserScore,
  UserLeague,
  UserExperience,
} from './styles';

export interface IUserCardProps extends IUser {
  showScore: boolean;
  abbreviateName: boolean;
  smartphoneNameLength: number;
  otherDevicesNameLength?: number;
}

const UserCard = (props: IUserCardProps): JSX.Element => {
  const {
    id,
    name,
    profilePicture,
    schoolGrade: loggedUserSchoolGrade,
    userType,
    showScore,
    abbreviateName,
    smartphoneNameLength,
    otherDevicesNameLength,
  } = props;

  const schoolGrade = loggedUserSchoolGrade || DEFAULT_SCHOOL_GRADE;

  const { aplication } = useSelector((store: State) => store);
  const { token } = aplication;

  const [studentWeekPerformance, setStudentWeekPerformance] =
    useState<IStudentWeekPerformance>(DEFAULT_STUDENT_WEEK_PERFORMANCE);

  useEffect(() => {
    if (showScore) {
      getStudentWeekPerformanceByStudent(
        OnEducaAPI,
        id,
        token,
        setStudentWeekPerformance,
        () => console.log('erro'),
      );
    }
  }, []);

  const { xp } = studentWeekPerformance;

  return (
    <UserCardBox>
      <UserDetails>
        <UserPicture src={profilePicture.path} />
        <PersonalInfo>
          <UserName>
            {abbreviateName
              ? displaySurname(
                  name,
                  smartphoneNameLength,
                  otherDevicesNameLength,
                )
              : name}
          </UserName>
          {isStudent(userType) ? (
            <StudentSchoolGrade>{schoolGrade.index}º ano</StudentSchoolGrade>
          ) : (
            <TeacherSubjects>{1}</TeacherSubjects>
          )}
        </PersonalInfo>
      </UserDetails>
      {showScore && (
        <UserScore>
          <UserLeague className="fas fa-trophy" />
          <UserExperience>{xp} XP</UserExperience>
        </UserScore>
      )}
    </UserCardBox>
  );
};

export default UserCard;
