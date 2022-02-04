/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import { IStudentWeekPerformance } from '../../../interfaces/IStudentWeekPerformance';
import { IPeople } from '../../../interfaces/IPeople';
import PeopleCard from '../../App/PeopleCard';
import { RankingPosition, RankingPeopleCardBox } from './styles';
import { DEFAULT_TEACHER } from '../../../static/defaultEntitiesValues';

interface IRankingPeopleCardProps {
  studentWeekPerformance: IStudentWeekPerformance;
  rankingPosition: number;
}

const RankingPeopleCard = (props: IRankingPeopleCardProps): JSX.Element => {
  const { studentWeekPerformance, rankingPosition } = props;
  const { student } = studentWeekPerformance;
  const { people } = student;

  return (
    <RankingPeopleCardBox>
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
    </RankingPeopleCardBox>
  );
};

export default RankingPeopleCard;
