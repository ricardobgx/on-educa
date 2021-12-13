/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import { IUser } from '../../../interfaces/IUser';
import UserCard from '../../App/UserCard';
import { RankingPosition, RankingUserCardBox } from './styles';

interface IRankingUserCardProps extends IUser {
  rankingPosition: number;
}

const RankingUserCard = (props: IRankingUserCardProps): JSX.Element => {
  const {
    rankingPosition,
    id,
    email,
    name,
    profilePicture,
    isOnline,
    league,
    schoolGrade,
    teachingType,
  } = props;

  const user: IUser = {
    id,
    email,
    name,
    profilePicture,
    isOnline,
    league,
    schoolGrade,
    teachingType,
  };

  return (
    <RankingUserCardBox>
      <RankingPosition>
        {rankingPosition < 10 ? `0${rankingPosition}` : `${rankingPosition}`}
      </RankingPosition>
      <UserCard {...user} userType="student" />
    </RankingUserCardBox>
  );
};

export default RankingUserCard;
