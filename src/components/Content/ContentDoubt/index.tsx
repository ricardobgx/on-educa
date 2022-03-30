import React from 'react';
import { reduceTextSize } from '../../../functions/utils';
import { IDoubt } from '../../../interfaces/IDoubt';
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

const ContentDoubt = (props: IDoubt): JSX.Element => {
  const { description, status, student } = props;
  const { people, schoolGrade } = student;
  const { name, profilePicture } = people;

  return (
    <ContentDoubtBox>
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
            <ContentDoubtCommentsNumber>0</ContentDoubtCommentsNumber>
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
