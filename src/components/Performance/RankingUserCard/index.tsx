/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import { IUser } from '../../../interfaces/IUser';
import UserCard from '../../App/UserCard';
import { RankingPosition, RankingUserCardBox } from './styles';

interface IRankingUserCardProps extends IUser {
  rankingPosition: number;
  userType: string;
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
    userType,
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
      <UserCard
        smartphoneNameLength={10}
        abbreviateName
        showScore
        {...user}
        userType={userType}
      />
    </RankingUserCardBox>
  );
};

export default RankingUserCard;
