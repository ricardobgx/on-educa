import React from 'react';
import { ISubject } from '../../../interfaces/ISubject';
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
  schoolGrade: number;
  subjects: ISubject[];
}

const UserCard = (props: IUserCardProps): JSX.Element => {
  const { email, name, profilePicture, isStudent, schoolGrade, subjects } =
    props;

  const subjectsToString = (teacherSubjects: ISubject[]): string => {
    if (subjects.length > 1)
      return `${teacherSubjects[0].title} e mais ${teacherSubjects.length - 1}`;
    if (subjects.length === 0) return 'Nenhuma disciplina';
    return teacherSubjects[0].title;
  };

  return (
    <UserCardBox>
      <UserDetails>
        <UserPicture src={profilePicture} />
        <PersonalInfo>
          <UserName>{name}</UserName>
          {isStudent ? (
            <StudentSchoolGrade>{schoolGrade} ano</StudentSchoolGrade>
          ) : (
            <TeacherSubjects>{subjectsToString(subjects)}</TeacherSubjects>
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
