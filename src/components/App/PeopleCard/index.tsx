/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-console */
/* eslint-disable react/require-default-props */

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getStudentWeeklyPerformanceByStudent } from '../../../functions/studentWeeklyPerformance';
import { displaySurname } from '../../../functions/people';
import OnEducaAPI from '../../../services/api';
import {
  DEFAULT_STUDENT_WEEKLY_PERFORMANCE,
  DEFAULT_TEACHER_WEEKLY_PERFORMANCE,
} from '../../../static/defaultEntitiesValues';
import { RootState } from '../../../store';
import {
  PeopleCardBox,
  PeopleDetails,
  PeoplePicture,
  PersonalInfo,
  PeopleName,
  StudentSchoolGrade,
  TeacherSubjects,
  PeopleScore,
  PeopleLeague,
  PeopleExperience,
} from './styles';
import { getTeacherWeeklyPerformanceByTeacher } from '../../../functions/teacherWeeklyPerformance';
import { MediumMaterialIconOutlined } from '../Icons/MaterialIcons/MaterialIconsOutlined';

export interface IPeopleCardProps {
  people: IPeople;
  student: IStudent;
  teacher: ITeacher;
  showScore: boolean;
  abbreviateName: boolean;
  smartphoneNameLength: number;
  otherDevicesNameLength?: number;
}

const PeopleCard = (props: IPeopleCardProps): JSX.Element => {
  const {
    people,
    student,
    teacher,
    showScore,
    abbreviateName,
    smartphoneNameLength,
    otherDevicesNameLength,
  } = props;

  const { name, profilePicture, isStudent } = people;
  const { schoolGrade, id: studentId } = student;
  const { teachingType, id: teacherId } = teacher;

  const { aplication } = useSelector((store: RootState) => store);
  const { token } = aplication;

  const [studentWeeklyPerformance, setStudentWeeklyPerformance] =
    useState<IStudentWeeklyPerformance>(DEFAULT_STUDENT_WEEKLY_PERFORMANCE);
  const [teacherWeeklyPerformance, setTeacherWeeklyPerformance] =
    useState<ITeacherWeeklyPerformance>(DEFAULT_TEACHER_WEEKLY_PERFORMANCE);

  useEffect(() => {
    if (showScore) {
      if (isStudent) {
        getStudentWeeklyPerformanceByStudent(
          OnEducaAPI,
          studentId,
          token,
          setStudentWeeklyPerformance,
          () => console.log('erro'),
        );
      } else {
        getTeacherWeeklyPerformanceByTeacher(
          OnEducaAPI,
          teacherId,
          token,
          setTeacherWeeklyPerformance,
          () => console.log('erro'),
        );
      }
    }
  }, [token, people]);

  const { xp } = isStudent
    ? studentWeeklyPerformance
    : teacherWeeklyPerformance;

  return (
    <PeopleCardBox>
      <PeopleDetails>
        <PeoplePicture src={profilePicture.path} />
        <PersonalInfo>
          <PeopleName>
            {abbreviateName
              ? displaySurname(
                  name,
                  smartphoneNameLength,
                  otherDevicesNameLength,
                )
              : name}
          </PeopleName>
          {people.isStudent ? (
            <StudentSchoolGrade>{schoolGrade.index}º ano</StudentSchoolGrade>
          ) : (
            <TeacherSubjects>{teachingType.name}</TeacherSubjects>
          )}
        </PersonalInfo>
      </PeopleDetails>
      {showScore && (
        <PeopleScore>
          <MediumMaterialIconOutlined icon="auto_awesome" color="" />
          <PeopleExperience>{xp} XP</PeopleExperience>
        </PeopleScore>
      )}
    </PeopleCardBox>
  );
};

export default PeopleCard;
