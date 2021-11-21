import React from 'react';
import {
  DoubtDescription,
  DoubtBox,
  DoubtHeader,
  DoubtOwner,
  OwnerInfo,
  OwnerName,
  OwnerPicture,
  OwnerSchoolGrade,
  DoubtStatus,
  DoubtStatusIcon,
  DoubtComments,
  DoubtCommentsIcon,
  DoubtCommentsNumber,
} from './styles';

const Doubt = (): JSX.Element => {
  return (
    <DoubtBox>
      <DoubtHeader>
        <DoubtOwner>
          <OwnerPicture src="https://i.pinimg.com/474x/a2/92/de/a292de2720b31e18ceb366e5ca343fd0.jpg" />
          <OwnerInfo>
            <OwnerName>Aluno 1</OwnerName>
            <OwnerSchoolGrade>1º ano</OwnerSchoolGrade>
          </OwnerInfo>
        </DoubtOwner>
        <DoubtStatus>
          <DoubtStatusIcon
            className={`fas fa-${true ? 'check' : 'exclamation'}-circle`}
          />
          <DoubtComments>
            <DoubtCommentsNumber>0</DoubtCommentsNumber>
            <DoubtCommentsIcon className="fas fa-comment-alt" />
          </DoubtComments>
        </DoubtStatus>
      </DoubtHeader>
      <DoubtDescription>
        Por que ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum
        ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum
      </DoubtDescription>
    </DoubtBox>
  );
};

export default Doubt;
