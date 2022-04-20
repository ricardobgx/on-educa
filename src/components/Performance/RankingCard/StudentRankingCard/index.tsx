/* eslint-disable react/jsx-props-no-spreading */

import React, { useEffect, useState } from 'react';
import { IStudentWeeklyPerformance } from '../../../../interfaces/IStudentWeeklyPerformance';
import { IPeople } from '../../../../interfaces/IPeople';
import PeopleCard from '../../../App/PeopleCard';
import { RankingPosition, RankingCardBox } from '../styles';
import {
  DEFAULT_PEOPLE,
  DEFAULT_TEACHER,
} from '../../../../static/defaultEntitiesValues';
import { getPeople } from '../../../../functions/people';
import OnEducaAPI from '../../../../services/api';
import { isDefaultPeople } from '../../../../functions/entitiesValues';

interface IStudentRankingCardProps {
  studentWeeklyPerformance: IStudentWeeklyPerformance;
  rankingPosition: number;
  token: string;
}

const StudentRankingCard = (props: IStudentRankingCardProps): JSX.Element => {
  const { studentWeeklyPerformance, rankingPosition, token } = props;
  const { student } = studentWeeklyPerformance;

  const [people, setPeople] = useState<IPeople>(DEFAULT_PEOPLE);

  useEffect(() => {
    if (isDefaultPeople(people)) {
      getPeople(OnEducaAPI, student.people.id, setPeople, token);
    }
  }, []);

  return (
    <RankingCardBox>
      <RankingPosition>
        {rankingPosition < 10 ? `0${rankingPosition}` : `${rankingPosition}`}
      </RankingPosition>
      <PeopleCard
        smartphoneNameLength={10}
        abbreviateName
        showScore
        people={people}
        student={student}
        teacher={DEFAULT_TEACHER}
      />
    </RankingCardBox>
  );
};

export default StudentRankingCard;
