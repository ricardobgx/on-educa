import React from 'react';
import { reduceTextSize } from '../../../functions/utils';
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

const doubtDescription =
  'Por que ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum';

const ContentDoubt = (): JSX.Element => {
  return (
    <ContentDoubtBox>
      <ContentDoubtHeader>
        <ContentDoubtOwner>
          <OwnerPicture src="https://i.pinimg.com/474x/a2/92/de/a292de2720b31e18ceb366e5ca343fd0.jpg" />
          <OwnerInfo>
            <OwnerName>Aluno 1</OwnerName>
            <OwnerSchoolGrade>1º ano</OwnerSchoolGrade>
          </OwnerInfo>
        </ContentDoubtOwner>
        <ContentDoubtStatus>
          <ContentDoubtStatusIcon
            className={`fas fa-${true ? 'check' : 'exclamation'}-circle`}
          />
          <ContentDoubtComments>
            <ContentDoubtCommentsNumber>0</ContentDoubtCommentsNumber>
            <ContentDoubtCommentsIcon className="fas fa-comment-alt" />
          </ContentDoubtComments>
        </ContentDoubtStatus>
      </ContentDoubtHeader>
      <ContentDoubtDescription>
        {reduceTextSize(doubtDescription, 100)}
      </ContentDoubtDescription>
    </ContentDoubtBox>
  );
};

export default ContentDoubt;
