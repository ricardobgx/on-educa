import React, { useState } from 'react';
import { displayDayAndMonthDate, getFullDate } from '../../../functions/utils';
import { IDoubtComment } from '../../../interfaces/IDoubtComment';
import {
  DoubtCommentBox,
  DoubtCommentContent,
  DoubtCommentDate,
  DoubtCommentHeader,
  DoubtCommentOwner,
  OwnerInfo,
  OwnerName,
  OwnerPicture,
} from './styles';

interface IDoubtCommentProps {
  doubtComment: IDoubtComment;
}

const DoubtComment = (props: IDoubtCommentProps): JSX.Element => {
  /* Props */
  const { doubtComment } = props;
  const { people, content, createdAt } = doubtComment;
  const { name, profilePicture } = people;

  return (
    <DoubtCommentBox>
      <DoubtCommentOwner>
        <OwnerPicture src={profilePicture.path} />
        <OwnerInfo>
          <DoubtCommentHeader>
            <OwnerName>{name}</OwnerName>
            <DoubtCommentDate>{getFullDate(createdAt)}</DoubtCommentDate>
          </DoubtCommentHeader>
          <DoubtCommentContent>{content}</DoubtCommentContent>
        </OwnerInfo>
      </DoubtCommentOwner>
    </DoubtCommentBox>
  );
};

export default DoubtComment;
