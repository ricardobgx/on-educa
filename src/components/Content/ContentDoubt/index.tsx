import React, { useEffect, useState } from 'react';
import { getDoubtCommentsByDoubt } from '../../../functions/doubtComment';
import { reduceTextSize } from '../../../functions/utils';
import { IDoubt } from '../../../interfaces/IDoubt';
import { IDoubtComment } from '../../../interfaces/IDoubtComment';
import OnEducaAPI from '../../../services/api';
import { DoubtStatus } from '../../../types/doubtStatus';
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
    <ContentDoubtBox to={`/doubts/${id}`}>
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
              status === DoubtStatus.SOLVED ? 'check' : 'exclamation'
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
