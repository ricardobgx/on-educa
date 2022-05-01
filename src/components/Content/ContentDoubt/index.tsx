/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from 'react';
import { getDoubtCommentsByDoubt } from '../../../functions/doubtComment';
import { reduceTextSize } from '../../../functions/utils';
import OnEducaAPI from '../../../services/api';
import { TDoubtStatus } from '../../../types/TDoubtStatus';
import {
  ContentDoubtDescription,
  ContentDoubtBox,
  ContentDoubtHeader,
  ContentDoubtOwner,
  OwnerInfo,
  OwnerName,
  OwnerPicture,
  OwnerSchoolGrade,
  ContentDoubtStatus,
  ContentDoubtStatusIcon,
  ContentDoubtComments,
  ContentDoubtCommentsIcon,
  ContentDoubtCommentsNumber,
} from './styles';

interface IContentDoubtProps {
  doubt: IDoubt;
  token: string;
}

const ContentDoubt = (props: IContentDoubtProps): JSX.Element => {
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
    <ContentDoubtBox className="with-shadow bd-rd-20" to={`/doubts/${id}`}>
      <ContentDoubtHeader>
        <ContentDoubtOwner>
          <OwnerPicture src={profilePicture.path} />
          <OwnerInfo>
            <OwnerName>{name}</OwnerName>
            <OwnerSchoolGrade>{schoolGrade.index}º ano</OwnerSchoolGrade>
          </OwnerInfo>
        </ContentDoubtOwner>
        <ContentDoubtStatus>
          <ContentDoubtStatusIcon
            className={`fas fa-${
              status === TDoubtStatus.SOLVED ? 'check' : 'exclamation'
            }-circle`}
          />
          <ContentDoubtComments>
            <ContentDoubtCommentsNumber>
              {comments.length}
            </ContentDoubtCommentsNumber>
            <ContentDoubtCommentsIcon className="fas fa-comment-alt" />
          </ContentDoubtComments>
        </ContentDoubtStatus>
      </ContentDoubtHeader>
      <ContentDoubtDescription>
        {reduceTextSize(description, 100, 50)}
      </ContentDoubtDescription>
    </ContentDoubtBox>
  );
};

export default ContentDoubt;
