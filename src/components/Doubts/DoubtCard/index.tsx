/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from 'react';
import { getDoubtCommentsByDoubt } from '../../../functions/doubtComment';
import { reduceTextSize } from '../../../functions/utils';
import OnEducaAPI from '../../../services/api';
import { TDoubtStatus } from '../../../types/TDoubtStatus';
import {
  DoubtCardDescription,
  DoubtCardBox,
  DoubtCardHeader,
  DoubtCardOwner,
  OwnerInfo,
  OwnerName,
  OwnerPicture,
  OwnerSchoolGrade,
  DoubtCardStatus,
  DoubtCardStatusIcon,
  DoubtCardComments,
  DoubtCardCommentsIcon,
  DoubtCardCommentsNumber,
} from './styles';

interface IDoubtCardProps {
  doubt: IDoubt;
  token: string;
}

const DoubtCard = (props: IDoubtCardProps): JSX.Element => {
  const { doubt, token } = props;
  const { id, description, status, student } = doubt;
  const { people, schoolGrade } = student;
  const { name, profilePicture } = people;
  const [comments, setComments] = useState<IDoubtComment[]>([]);

  const getDoubtCommentsAction = async (): Promise<void> => {
    const doubtCommentsData = await getDoubtCommentsByDoubt(
      OnEducaAPI,
      id,
      token,
    );

    setComments(doubtCommentsData);
  };

  useEffect(() => {
    if (token) {
      getDoubtCommentsAction();
    }
  }, [token]);

  return (
    <DoubtCardBox
      className="block-shadow-button secondary-action bd-rd-20"
      to={`/doubts/${id}`}
    >
      <DoubtCardHeader>
        <DoubtCardOwner>
          <OwnerPicture src={profilePicture.path} />
          <OwnerInfo>
            <OwnerName>{name}</OwnerName>
            <OwnerSchoolGrade>{schoolGrade.index}º ano</OwnerSchoolGrade>
          </OwnerInfo>
        </DoubtCardOwner>
        <DoubtCardStatus>
          <DoubtCardStatusIcon
            className={`fas fa-${
              status === TDoubtStatus.SOLVED ? 'check' : 'exclamation'
            }-circle`}
          />
          <DoubtCardComments>
            <DoubtCardCommentsNumber>{comments.length}</DoubtCardCommentsNumber>
            <DoubtCardCommentsIcon className="fas fa-comment-alt" />
          </DoubtCardComments>
        </DoubtCardStatus>
      </DoubtCardHeader>
      <DoubtCardDescription>
        {reduceTextSize(description, 100, 50)}
      </DoubtCardDescription>
    </DoubtCardBox>
  );
};

export default DoubtCard;
