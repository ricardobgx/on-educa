import React from 'react';
import {
  SelectedContentCardBox,
  ContentInfo,
  ContentBox,
  ContentName,
  ContentIcon,
  AdditionalInfo,
  SubjectBox,
  SubjectName,
  SubjectIcon,
  UnitBox,
  UnitName,
  UnitIcon,
  DeleteContentButton,
  DeleteContentButtonIcon,
} from './styles';

interface ISelectedContentCardProps {
  content: string;
  unit: string;
  subject: string;
}

const SelectedContentCard = (props: ISelectedContentCardProps): JSX.Element => {
  const { content, unit, subject } = props;

  return (
    <SelectedContentCardBox>
      <ContentInfo>
        <ContentBox>
          <ContentIcon className="fas fa-book" />
          <ContentName>{content}</ContentName>
        </ContentBox>
        <AdditionalInfo>
          <SubjectBox>
            <SubjectIcon className="fas fa-book" />
            <SubjectName>{subject}</SubjectName>
          </SubjectBox>
          <UnitBox>
            <UnitIcon className="fas fa-book" />
            <UnitName>{unit}</UnitName>
          </UnitBox>
        </AdditionalInfo>
      </ContentInfo>
      <DeleteContentButton>
        <DeleteContentButtonIcon className="fas fa-times" />
      </DeleteContentButton>
    </SelectedContentCardBox>
  );
};

export default SelectedContentCard;
