/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-console */

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getStudentWeekPerformanceByStudent } from '../../../functions/studentWeekPerformance';
import { displaySurname } from '../../../functions/people';
import { IStudentWeekPerformance } from '../../../interfaces/IStudentWeekPerformance';
import { IPeople } from '../../../interfaces/IPeople';
import OnEducaAPI from '../../../services/api';
import { DEFAULT_STUDENT_WEEK_PERFORMANCE } from '../../../static/defaultEntitiesValues';
import { State } from '../../../store';
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
import { IStudent } from '../../../interfaces/IStudent';
import { ITeacher } from '../../../interfaces/ITeacher';

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

  const { id, name, profilePicture } = people;
  const { schoolGrade } = student;
  const { teachingType } = teacher;

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
          <PeopleLeague className="fas fa-trophy" />
          <PeopleExperience>{xp} XP</PeopleExperience>
        </PeopleScore>
      )}
    </PeopleCardBox>
  );
};

export default PeopleCard;
