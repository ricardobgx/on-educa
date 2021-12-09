import React from 'react';
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
  isStudent: boolean;
  schoolGradeId: string;
}

const UserCard = (props: IUserCardProps): JSX.Element => {
  const { email, name, profilePicture, isStudent, schoolGradeId } = props;

  return (
    <UserCardBox>
      <UserDetails>
        <UserPicture src={profilePicture} />
        <PersonalInfo>
          <UserName>{name}</UserName>
          {isStudent ? (
            <StudentSchoolGrade>{schoolGradeId} ano</StudentSchoolGrade>
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
