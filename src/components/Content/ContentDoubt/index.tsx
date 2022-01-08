import React from 'react';
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
        Por que ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum
        ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum
      </ContentDoubtDescription>
    </ContentDoubtBox>
  );
};

export default ContentDoubt;
