/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import UserCard, { IUserCardProps } from '../../App/UserCard';
import { RankingPosition, RankingUserCardBox } from './styles';

interface IRankingUserCardProps extends IUserCardProps {
  rankingPosition: number;
}

const RankingUserCard = (props: IRankingUserCardProps): JSX.Element => {
  const {
    rankingPosition,
    email,
    name,
    profilePicture,
    isOnline,
    league,
    isStudent,
    schoolGrade,
    subjects,
  } = props;

  const userCardProps: IUserCardProps = {
    email,
    name,
    profilePicture,
    isOnline,
    league,
    isStudent,
    schoolGrade,
    subjects,
  };

  return (
    <RankingUserCardBox>
      <RankingPosition>
        {rankingPosition < 10 ? `0${rankingPosition}` : `${rankingPosition}`}
      </RankingPosition>
      <UserCard {...userCardProps} />
    </RankingUserCardBox>
  );
};

export default RankingUserCard;
