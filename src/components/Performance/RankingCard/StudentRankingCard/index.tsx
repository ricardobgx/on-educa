/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from 'react';
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

  const getPeopleAction = async (): Promise<void> => {
    const peopleFound = await getPeople(OnEducaAPI, student.people.id, token);

    if (peopleFound) setPeople(peopleFound);
  };

  useEffect(() => {
    if (isDefaultPeople(people)) {
      getPeopleAction();
    }
  }, []);

  return (
    <RankingCardBox className="with-shadow bd-rd-20">
      <RankingPosition>#{rankingPosition}</RankingPosition>
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
