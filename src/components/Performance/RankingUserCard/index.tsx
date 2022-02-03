/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import { IStudentWeekPerformance } from '../../../interfaces/IStudentWeekPerformance';
import { IUser } from '../../../interfaces/IUser';
import UserCard from '../../App/UserCard';
import { RankingPosition, RankingUserCardBox } from './styles';

interface IRankingUserCardProps {
  studentWeekPerformance: IStudentWeekPerformance;
  rankingPosition: number;
}

const RankingUserCard = (props: IRankingUserCardProps): JSX.Element => {
  const { studentWeekPerformance, rankingPosition } = props;
  const { student } = studentWeekPerformance;

  const {
    id,
    email,
    name,
    profilePicture,
    isOnline,
    league,
    schoolGrade,
    teachingType,
    userType,
  } = student;

  const user: IUser = {
    id,
    email,
    name,
    profilePicture,
    isOnline,
    league,
    schoolGrade,
    teachingType,
    userType,
  };

  return (
    <RankingUserCardBox>
      <RankingPosition>
        {rankingPosition < 10 ? `0${rankingPosition}` : `${rankingPosition}`}
      </RankingPosition>
      <UserCard smartphoneNameLength={10} abbreviateName showScore {...user} />
    </RankingUserCardBox>
  );
};

export default RankingUserCard;
