/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from 'react';
import PeopleCard from '../../../App/PeopleCard';
import { RankingPosition, RankingCardBox } from '../styles';
import {
  DEFAULT_PEOPLE,
  DEFAULT_STUDENT,
} from '../../../../static/defaultEntitiesValues';
import { getPeople } from '../../../../functions/people';
import OnEducaAPI from '../../../../services/api';
import { isDefaultPeople } from '../../../../functions/entitiesValues';

interface ITeacherRankingCardProps {
  teacherWeeklyPerformance: ITeacherWeeklyPerformance;
  rankingPosition: number;
  token: string;
}

const TeacherRankingCard = (props: ITeacherRankingCardProps): JSX.Element => {
  const { teacherWeeklyPerformance, rankingPosition, token } = props;
  const { teacher } = teacherWeeklyPerformance;

  const [people, setPeople] = useState<IPeople>(DEFAULT_PEOPLE);

  const getPeopleAction = async (): Promise<void> => {
    const peopleFound = await getPeople(OnEducaAPI, teacher.people.id, token);

    if (peopleFound) setPeople(peopleFound);
  };

  useEffect(() => {
    if (isDefaultPeople(people)) {
      getPeopleAction();
    }
  }, []);

  return (
    <RankingCardBox className="bd-rd-20 with-shadow">
      <RankingPosition>#{rankingPosition}</RankingPosition>
      <PeopleCard
        smartphoneNameLength={20}
        abbreviateName
        showScore
        people={people}
        student={DEFAULT_STUDENT}
        teacher={teacher}
      />
    </RankingCardBox>
  );
};

export default TeacherRankingCard;