import React from 'react';
import { isStudent } from '../../../functions/user';
import { IUser } from '../../../interfaces/IUser';
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
  userType: string;
}

const UserCard = (props: IUserCardProps): JSX.Element => {
  const { name, profilePicture, schoolGrade, userType } = props;

  return (
    <UserCardBox>
      <UserDetails>
        <UserPicture src={profilePicture} />
        <PersonalInfo>
          <UserName>{name}</UserName>
          {isStudent(userType) ? (
            <StudentSchoolGrade>{schoolGrade.index}º ano</StudentSchoolGrade>
          ) : (
            <TeacherSubjects>{1}</TeacherSubjects>
          )}
        </PersonalInfo>
      </UserDetails>
      <UserScore>
        <UserLeague className="fas fa-trophy" />
        <UserExperience>1865 XP</UserExperience>
      </UserScore>
    </UserCardBox>
  );
};

export default UserCard;
